<template lang="">
{{selected}}
    <v-row justify="center" class="ma-1">
        
    <v-dialog
      v-model="dialog"
      scrollable
      max-width="300px"
    >
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          color="primary"
          dark
          v-bind="attrs"
          v-on="on"
          @click="dialog=true"
        >
          Open List
        </v-btn>
      </template>
      <v-card>
        <v-card-title>Employee List</v-card-title>
        <v-divider></v-divider>
        <v-card-text style="height: 300px;">
          <v-checkbox-group
            v-model="selected"
            column
          >
            <v-checkbox v-for="i in EmployeeList" :key="i" :label=" i.name + ' : ' + i.email"
                v-model="selected" 
                :value="i.email"
            >
            </v-checkbox>

          </v-checkbox-group>
        </v-card-text>
        <v-divider></v-divider>
        <v-card-actions>
          <v-btn
            color="blue darken-1"
            text
            @click="dialog = false; selected = []"
          >
            Close
          </v-btn>
          <v-btn
            color="blue darken-1"
            text
            @click="dialog = false"
          >
            Save
          </v-btn>

          <v-btn
            color="red darken-1"
            text
        >
        delete
        </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    <v-badge color="green" :content="EmployeeList.length"></v-badge>
  </v-row>
</template>
<script>
export default {
   data () {
      return {
        selected: [],
        dialog: false,
        EmployeeList: [
            {name : "asd", email : "lasd"},
            {name : "as2", email : "el"},
            {name : "as3", email : "le1le"},
            {name : "as4", email : "lel12e"},
            {name : "as5", email : "lele4"},
        ]
      }
    }, 
}
</script>
<style lang="css">
</style>