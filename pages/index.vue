<template>

<v-layout>
  <v-container style="max-width:1280px" class="py-12 my-12">
    <SectionHero :doc="page.headline"/>
    <SectionHeadline :doc="page.problem"/>
    <SectionTextLeft :doc="page.empathy"/>
    <SectionTextRight :doc="page.solution"/>
    <SectionHeadline :doc="page.cta"/>
  </v-container>
</v-layout>

</template>

<script setup>

const docs = await queryContent("/sales/nuxt3/").find();
const page = {};
for(let doc of docs){
  page[doc.slug] = doc;
}

useSeo({
  title: "Welcome!",
  description: "Red:4 Aerospace Nuxt 3 walkthrough",
  image: "hero.png"
});

</script>