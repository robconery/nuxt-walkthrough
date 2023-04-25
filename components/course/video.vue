<template>
  <div class="text-center" v-if="!user.loggedIn">
    <v-img src="https://via.placeholder.com/1280x720" class="mx-auto" />
  </div>

<div class="embed-container w-full" v-else>
  <iframe
    id="vimeo-player"
    class="w-full mx-auto"
    :src="`https://player.vimeo.com/video/${lesson.vimeo_id}`"
    frameborder="0"
    allow="autoplay; fullscreen"
    allowfullscreen
  ></iframe>
</div>

</template>
<script setup>
import { useAuthStore } from '~~/stores/auth';
import { useCourseStore } from '~~/stores/course';
const {user} = useAuthStore();
const {lesson} = useCourseStore();

defineProps(["id"]);
</script>
<style>

.embed-container {
  position: relative;
  padding-bottom: 56.25%;
  height: 0;
  overflow: hidden;
  max-width: 100%;
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