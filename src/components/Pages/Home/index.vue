<template>
  <v-container>
    <v-row>
      <v-col cols="12" class="mt-16 align-center text-center">
        <h1>Simple App For Todos Management</h1>
      </v-col>
    </v-row>
    <v-row>
      <v-spacer />
      <v-col cols="2" class="align-center text-center">
        <v-btn large class="primary" text @click="goToManageTodos">
          <span>Manage Todos</span>
        </v-btn>
      </v-col>
      <v-spacer />
    </v-row>
  </v-container>
</template>

<script src="./Home.js"></script>

<style scoped>

</style>
