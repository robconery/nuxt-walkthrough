<template>
  <div style="max-width:960px;" class="mx-auto py-12">
    <h2 class="text-center">
    {{ doc.title }}
    </h2>
    <ContentRenderer :value="doc" />
  </div>
</template>
<script setup>
defineProps({
  doc: {
    type: Object,
    required: true
  }
});
</script>