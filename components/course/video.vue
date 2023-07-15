<template>
<div>
  <div v-if="currentVideo">
    <div style="padding:56.25% 0 0 0;position:relative;">
      <iframe :src="`https://player.vimeo.com/video/${currentVideo.vimeo_id}`" 
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
import {useCourseStore} from "@/stores/course";

let {currentVideo} = useCourseStore();

const route = useRoute();

const slug = route.params.slug;
const id = route.params.id;

</script>