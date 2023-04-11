<template>

  <v-app-bar 
    id="top-nav"
    title="Lorem Ipsum"
    flat
    color="blue-grey-darken-4"
  ></v-app-bar>
  <v-container class="h-screen">

    <CourseNav />

    <v-row>
      <v-col>
        <v-img src="https://via.placeholder.com/1280x720" alt="" class="mx-auto" />
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" md="8" class="mx-auto">
        <h2>{{ lesson.title }} {{ lessonCount }}</h2>
      </v-col>
    </v-row>
  </v-container>
</template>
<script setup>
import {useCourseStore} from "@/stores/course";
const {lessonCount, course, lesson, setCourse, getLesson} = useCourseStore();

const route = useRoute();
let slug = route.params.slug;
let id = route.params.id;

await setCourse(slug);



</script>