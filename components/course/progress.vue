<template>
  <div>
    <v-app-bar color="black" height="8">
      <v-progress-linear
      color="blue"
      v-model="progress"
    ></v-progress-linear>
    </v-app-bar>
  </div>
</template>

<script setup>
import {useCourseStore} from "@/stores/course"
const {lessons, courseDuration, completed} = useCourseStore();

const progress = computed(() => {
  //get all lessons which include user.completed
  const duration = lessons.reduce((acc,l) => {
    const found = completed.find(c => c.lesson === l.slug);
    if(found) acc += parseFloat(l.duration) || 0;
    return acc;
  }, 0);
  console.log(duration);
  const percentage = (duration/courseDuration) * 100;
  return percentage;
});

</script>
