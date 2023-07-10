<template>
 <v-app-bar 
    color="grey-darken-4"
    flat
  >
  <nuxt-link to="/" style="text-decoration: none;">
    <h2 class="text-white ml-3" >{{ config.title }} </h2>
  </nuxt-link>
  <v-spacer></v-spacer>
  <User/>
</v-app-bar>

</template>

<script setup>
const config = useAppConfig();
</script>