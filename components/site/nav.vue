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
const config = useAppConfig();
</script>