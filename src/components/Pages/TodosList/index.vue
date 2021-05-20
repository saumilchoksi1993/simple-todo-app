<template>
  <v-container>
    <v-row>
      <v-col cols="12" class="align-center text-center">
        <h1>Todos Management</h1>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="2" class="pb-0">
        <v-select
          v-model="actionType"
          :items="actionItem"
          outlined
          label="Select Action"
        >
        </v-select>
      </v-col>
      <v-col cols="2" class="pb-0">
        <v-btn large class="primary custom_button" text @click="submitAction">
          <span>Okay</span>
        </v-btn>
      </v-col>
      <v-spacer />
      <v-col cols="2" class="pb-0">
        <v-btn class="primary custom_button" text @click="addTodo">
          <v-icon medium>mdi-plus</v-icon>
          <span class="ml-2">Add Task</span>
        </v-btn>
      </v-col>
    </v-row>
    <v-row>
      <div class="col-12 pt-0">
        <v-data-table
          v-model="selectedTask"
          :headers="headers"
          :items="taskListItems"
          show-select
          item-key="id"
          class="elevation-1"
        >
          <template v-if="taskListItems.length > 0" v-slot:item.actions="{ item }">
            <td>
              <v-icon small class="mr-2" @click="editTodo(item.id)">
                mdi-pencil
              </v-icon>
              <v-icon small @click="deleteTodo(item.id)">
                mdi-delete
              </v-icon>
            </td>
          </template>
          <template v-slot:no-data>
            <span>No data available</span>
          </template>
        </v-data-table>
      </div>
    </v-row>
  </v-container>
</template>

<script src="./TodosList.js"></script>

<style scoped>
.custom_button {
  height: 54px !important;
}
</style>
