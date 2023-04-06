<template>

<v-layout>
  <v-container style="max-width:1280px" class="py-12 my-12">
    <h2>{{ message }}</h2>
    <SectionHero section="headline"/>
    <SectionHeadline :doc="page.problem"/>
    <SectionTextLeft :doc="page.empathy"/>
    <SectionTextRight :doc="page.solution"/>
    <SectionHeadline :doc="page.cta"/>
    
  </v-container>
</v-layout>

</template>

<script setup>

import {useContentStore} from "@/stores/content";
const {page, fetchPage} = useContentStore();

await fetchPage("/sales/nuxt3");

useSeo({
  title: "Welcome!",
  description: "Red:4 Aerospace Nuxt 3 walkthrough",
  image: "hero.png"
});

</script>