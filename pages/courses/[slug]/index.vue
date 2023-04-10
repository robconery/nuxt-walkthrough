<template>
  <SiteNav />
</template>
<script setup>
const route = useRoute();
let name = route.params.slug;
</script>