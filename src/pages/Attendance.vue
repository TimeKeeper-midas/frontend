<template>
  <v-form @submit.prevent="add">
    <div>
      <!-- 출퇴근 명시 -->
      <div class="button_area">
        <v-btn-toggle v-model="status" borderless>
          <v-btn color="red" value="attend">
            <span class="sm-and-down">출근</span>
          </v-btn>
          <v-btn color="yellow" value="move">
            <span class="sm-and-down">자리이동</span>
          </v-btn>
          <v-btn color="green" value="leave">
            <span class="sm-and-down">퇴근</span>
          </v-btn>
        </v-btn-toggle>
      </div>
      <div v-if="status !== 'move'">
        <v-switch
          v-model="switch1"
          inset
          label="출퇴근 등록을 잊으셨나요?"
          color="success"
        ></v-switch>
        <div class="card" v-if="switch1 === true">
          <div class="content1">
            언제 출/퇴근 하셨는지 알려주시면 등록을 해드릴게요.
            <br /><br />
            <v-slider v-model="lated_time" color="primary" step="15" max="240">
            </v-slider>
            <span class="important">{{ valueToTime(lated_time)[0] }}</span>
            <br />
            <span>{{ valueToTime(lated_time)[1] }}</span> <br />
            <span class="description">창을 닫으면 현재시간으로 등록해요.</span>
          </div>
        </div>
      </div>
      <div v-if="status !== 'leave'">
        <v-switch
          v-model="switch2"
          inset
          label="회사가 아닌곳에서 일하시나요?"
          color="success"
          v-if="status !== 'move'"
        ></v-switch>
        <div class="card" v-if="switch2 === true || status === 'move'">
          <div class="content1">
            <span>어디서 업무를 보시나요?</span>
            <v-text-field
              v-model="where"
              label="장소"
              placeholder="example : 집, 도서관, 오피스"
              solo
            ></v-text-field>
          </div>
        </div>
      </div>
      <div class="button_area submit">
        <v-btn x-large color="success" dark block>{{ status }}!</v-btn>
      </div>
    </div>
  </v-form>
</template>

<script>
import { useMutation } from "@urql/vue";
import swal from "sweetalert";
export default {
  data() {
    return {
      switch1: false,
      switch2: false,
      lated_time: 0,
      where: "",
      status: "attend",
      valueToTime: (lated_time) => {
        var today = new Date();
        today.setMinutes(today.getMinutes() - lated_time);
        var hours = ("0" + today.getHours()).slice(-2);
        var minutes = ("0" + today.getMinutes()).slice(-2);

        if (lated_time < 60) {
          return [
            lated_time + "분 전으로 등록하겠습니다.",
            "기록시간 :" + hours + ":" + minutes,
          ];
        } else {
          let hour = Math.floor(lated_time / 60);
          let minute = lated_time % 60;
          return [
            hour + "시간 " + minute + "분 전으로 등록하겠습니다.",
            "기록시간: " + hours + ":" + minutes,
          ];
        }
      },
    };
  },
  methods: {
    async add() {
      await this.mutation.executeMutation({
        type:
          this.status === "attend"
            ? "출근"
            : this.status === "move"
            ? "자리이동"
            : "퇴근",
        location: this.where,
        isWorkStart: this.status === "attend",
        isWorkEnd: this.status === "leave",
        isRemoteLocation: this.switch2,
        unsafeSentAt: Date.now(),
        manualClaimSetTo: Date.now() - this.lated_time * 60000,
      });

      await swal("완료! ㅎㅎ");
    },
  },
  setup() {
    return {
      mutation:
        useMutation(`mutation ($type: String!, $location: String!, $isWorkStart: Boolean!, $isWorkEnd: Boolean!, $isRemoteLocation: Boolean!, $unsafeSentAt: Date!, $manualClaimSetTo: Date) {
  registerTransaction(type: $type, location: $location, isWorkStart: $isWorkStart, isWorkEnd: $isWorkEnd, isRemoteLocation: $isRemoteLocation, unsafeSentAt: $unsafeSentAt, manualClaimSetTo: $manualClaimSetTo) {
    id
  }
}`),
    };
  },
};
</script>

<style lang="css">
.card {
  width: 340px;
  height: auto;
  border-radius: 16px;
  background: #e0e0e0;
  box-shadow: 20px 20px 57px #bcbcbc, -20px -20px 57px #ffffff;
  margin: 0px auto 15px auto;
}
.content1 {
  font-family: "Noto sans kr", sans-serif;
  padding: 12px;
  font-size: 14px;
  font-weight: 600;
}
.content1 span {
  font-size: 14px;
  padding: 5px;
}
.important {
  color: #fd5353;
}
.description {
  color: #888888;
}
.button_area {
  width: fit-content;
  margin: 10px auto 10px auto;
}
.submit {
  margin-top: 50px;
}
</style>
