<template>

  <v-app-bar
      flat
      color="transparent"
      location="bottom"
      style="opacity:0.7;"
      class="pb-8 pt-8 pr-4"
      >

    <v-btn
        color="light-blue"
        variant="outlined"
        class="ml-4"
      >Completed</v-btn>
    <v-spacer></v-spacer>
    <v-btn
      color="light-blue"
      variant="outlined"
      :to="navLesson(prev)"
    >Prev</v-btn>
    <v-btn
      color="light-blue"
      variant="outlined"
      class="ml-4"
      :to="navLesson(next)"
    >Next</v-btn>

  </v-app-bar>

</template>
<script setup>
import {useCourseStore} from "@/stores/course";
const {course,lesson,next, prev} = useCourseStore();

const navLesson = function(toLesson){
  return `/courses/${course.slug}/${toLesson.slug}`
};

</script>