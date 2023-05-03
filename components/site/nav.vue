<template>
  <v-app-bar 
    :title="config.title"
    color="grey-darken-4"
    flat
  >
  <v-spacer></v-spacer>
  <v-btn
    color="white"
    variant="outlined"
    @click="toggleLoginDialog()"
  >Login</v-btn>
  </v-app-bar>
  <AuthLoginDialog />
</template>

<script setup>
import {useAuthStore} from "@/stores/auth";
const {toggleLoginDialog} = useAuthStore();

const config = useAppConfig();
</script>