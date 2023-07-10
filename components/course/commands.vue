<template>

<v-row class="py-4">
  <v-col md="8" >
    <v-btn
        color="light-blue"
        variant="outlined"
        class="ml-4"
        @click="setCompleted()"
      >Completed</v-btn>
  </v-col>
  <v-col class="text-right">
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
  </v-col>
</v-row>




</template>
<script setup>
import {useCourseStore} from "@/stores/course";
import {useAuthStore} from "@/stores/auth";

const {course,lesson,next, prev} = useCourseStore();
const {markCompleted} = useAuthStore();

const setCompleted = function(){
  markCompleted(course,lesson)
}

const navLesson = function(toLesson){
  return `/courses/${course.slug}/${toLesson.slug}`
};

</script>