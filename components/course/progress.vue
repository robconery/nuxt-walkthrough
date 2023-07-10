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
import {useAuthStore} from "@/stores/auth"
import {useCourseStore} from "@/stores/course"

const {user} = useAuthStore();
const {lessons, courseDuration} = useCourseStore();

const progress = computed(() => {
  //get all lessons which include user.completed
  const duration = lessons.reduce((acc,l) => {
    const found = user.completed.find(c => c.slug === l.slug);
    if(found){
      acc += parseFloat(l.duration) || 0;
    }
    return acc;
  }, 0);
  const percentage = (duration/courseDuration) * 100;
  return percentage;
});

</script>
