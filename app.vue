<template>
  <v-app>
    <v-layout>     

      <v-main style="min-height: 300px;">
        <NuxtPage />
      </v-main>
    </v-layout>

    <v-footer class="d-flex flex-column w-100 px-0 py-0">
      <div class="bg-grey-darken-3 d-flex w-100 align-center px-4">

        <v-spacer></v-spacer>

        <v-btn
          v-for="item in config.social"
          :key="item.title"
          class="mx-4"
          :icon="item.title"
          variant="plain"
          size="small"
          color="white"
        ></v-btn>

      </div>

      <div class="px-4 py-2 bg-black text-center w-100">
        {{ new Date().getFullYear() }} — <strong>{{ config.title }}</strong>
      </div>
    </v-footer>
  
  </v-app>
</template>

<script setup>
const config = useAppConfig();

useHead({
  link:[
    {type:"text/css", href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;800&family=Open+Sans:ital,wght@0,400;0,700;1,400;1,700&display=swap", rel:"stylesheet"},
    {type:"text/css", href: "/css/custom.css", rel:"stylesheet"},
    {rel: "shortcut icon", href: config.favicon}
  ],
});

</script>
