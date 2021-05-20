<template>
  <v-container>
    <v-row>
      <v-col cols="12" class="align-center text-center">
        <h1>{{taskAction}} Task</h1>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" class="align-center text-center">
        <v-form @submit.prevent="submit" ref="addTaskForm">
          <v-row>
            <v-spacer />
            <v-col cols="4">
              <v-text-field height="30"
                label="Task Name"
                placeholder="Task Name"
                v-model="taskName"
                :rules="[v => !!v || 'Required Field']"
                required
                outlined
              ></v-text-field>
            </v-col>
            <v-spacer />
          </v-row>
          <v-row>
            <v-spacer />
            <v-col cols="4">
              <v-text-field height="30"
                label="Task Description"
                placeholder="Task Description"
                v-model="taskDescription"
                :rules="[v => !!v || 'Required Field']"
                required
                outlined
              ></v-text-field>
            </v-col>
            <v-spacer />
          </v-row>
          <v-row>
            <v-col>
              <v-btn class="primary" text @click="addTask">
                <span>Submit</span>
              </v-btn>
            </v-col>
          </v-row>
        </v-form>
      </v-col>
    </v-row>
  </v-container>
</template>

<script src="./manageTask.js"></script>

<style scoped>

</style>
