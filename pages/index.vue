<template>

<v-layout>
  <v-container style="max-width:1280px" class="py-12 my-12">
    <SectionHero />
    <SectionHeadline />
    <SectionTextLeft />
    <SectionTextRight />
    <SectionHeadline />
  </v-container>
</v-layout>

</template>

<script setup>

useSeo({
  title: "Welcome!",
  description: "Red:4 Aerospace Nuxt 3 walkthrough",
  image: "hero.png"
});

</script>