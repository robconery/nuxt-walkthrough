<template>
    <h2 class="text-center py-8">{{ doc.title }}</h2>
    <v-row>
      <v-col cols="12" md="6" class="px-12">

        <ContentRenderer :value="doc" />

      </v-col>
      <v-col cols="12" md="6" class="text-center">
        <img :src="doc.image" alt=""  class="mx-auto rounded"/>
      </v-col>
    </v-row>

  
</template>
<script setup>
defineProps({
  doc: {
    type: Object,
    required: true
  }
});
</script>