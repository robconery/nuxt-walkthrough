<template>
<div>
  <div v-if="showVideo && vimeo_id">
    <div style="padding:56.25% 0 0 0;position:relative;">
      <iframe :src="`https://player.vimeo.com/video/${vimeo_id}`" 
      frameborder="0" allow="autoplay; fullscreen; picture-in-picture" 
      allowfullscreen style="position:absolute;top:0;left:0;width:100%;height:100%;" >
      </iframe>
    </div>
  </div>

  <div class="text-center" v-else>
    <v-img :src="`/img/slides/${slug}/${id}.jpg`" width="1280" class="mx-auto" />
  </div>
</div>
</template>
<script setup>
import { useAuthStore } from '@/stores/auth';
const {user, ownsCourse} = useAuthStore();
const route = useRoute();

const slug = route.params.slug;
const id = route.params.id;


const vimeo_id = computed(() => {
  if(user.loggedIn){
    const thisCourse = ownsCourse(slug);
    const thisLesson = thisCourse.Lessons.find(l => l.slug === id);
    return thisLesson.vimeo_id;
  }
  return 0;
});
const showVideo = computed(() => {
  return vimeo_id && ownsCourse(slug);
});
</script>