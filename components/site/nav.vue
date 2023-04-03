<template>
  <v-app-bar 
    :title="config.title"
    color="grey-darken-4"
    flat
  >
  </v-app-bar>
</template>

<script setup>
const config = useAppConfig();
</script>