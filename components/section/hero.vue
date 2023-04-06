<template>

    <v-row v-if="page">
      <v-col cols="12" md="6" class="px-12">
        <h1> 
          {{ page[section].title }}
        </h1>

         <ContentRenderer :value="page[section]" />

      </v-col>
      <v-col cols="12" md="6" class="text-center">
        <img :src="page[section].image" alt=""  class="mx-auto rounded"/>
      </v-col>
    </v-row>

</template>
<script setup>
import {useContentStore} from "@/stores/content";
const { page } = useContentStore();

defineProps({
  section : {
    type: String,
    default: "headline"
  }
});
</script>