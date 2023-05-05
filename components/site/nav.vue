<template>
  <v-app-bar 
    :title="config.title"
    color="grey-darken-4"
    flat
  >
  <v-spacer></v-spacer>
  <User/>
  </v-app-bar>

</template>

<script setup>
import {useAuthStore} from "@/stores/auth";
const {toggleLoginDialog} = useAuthStore();

const config = useAppConfig();
</script>