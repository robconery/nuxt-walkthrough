<template>
  <v-app>

    <NuxtPage />

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
