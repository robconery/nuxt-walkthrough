<template>

  <div class="embed-container w-full" v-if="lesson.vimeo_id && user.loggedIn">
    <iframe
      id="vimeo-player"
      class="w-100 mx-auto"
      :src="`https://player.vimeo.com/video/${lesson.vimeo_id}`"
      frameborder="0"
      allow="autoplay; fullscreen"
      allowfullscreen
      style="min-height:720px;min-width: 1280px"
    ></iframe>
  </div>

  <div class="text-center" v-else>
    <v-img :src="`/img/slides/${slug}/${id}.jpg`" width="1280" class="mx-auto" />
  </div>

</template>
<script setup>
import { useAuthStore } from '@/stores/auth';
import { useCourseStore } from '@/stores/course';
const {user} = useAuthStore();
const {lesson} = useCourseStore();
const route = useRoute();
const slug = route.params.slug;
const id = route.params.id;
defineProps(["id"]);
</script>
<style>

.embed-container {
  position: relative;
  padding-bottom: 56.25%;
  height: 0;
  overflow: hidden;
}

.embed-container iframe,
.embed-container object,
.embed-container embed {
position: absolute;
top: 0;
left: 0;
width: 100%;
height: 100%;
}
</style>