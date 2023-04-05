<template>

    <v-row v-if="doc">
      <v-col cols="12" md="6" class="px-12">
        <h1> 
          {{ doc.title }}
        </h1>

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