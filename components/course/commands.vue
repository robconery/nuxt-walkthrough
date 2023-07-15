<template>

<v-row class="py-4">
  <v-col md="8" >
    <v-btn
      color="info"
      variant="outlined"
      class="ml-4"
      >Completed</v-btn>
  </v-col>
  <v-col class="text-right">
    <v-btn
      color="info"
      variant="outlined"
      :to="navLesson(prev)"
    >Prev</v-btn>
    <v-btn
      color="info"
      variant="outlined"
      class="ml-4"
      :to="navLesson(next)"
    >Next</v-btn>
  </v-col>
</v-row>

</template>
<script setup>
const db = useSupabaseClient();
const user = useSupabaseUser();

import {useCourseStore} from "@/stores/course";
const {course,lesson,next, prev, currentVideo, isComplete} = useCourseStore();


const navLesson = function(toLesson){
  return `/courses/${course.slug}/${toLesson.slug}`
};

</script>