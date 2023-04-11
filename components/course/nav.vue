<template>
  <v-navigation-drawer>
    <v-list v-for="cat in categories">
      <v-list-subheader >{{ cat }}</v-list-subheader>
      <v-list-item v-for="lesson in categoryLessons(cat)">
        {{ lesson.title }}
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>
<script setup>
import {useCourseStore} from "@/stores/course";
const {course} = useCourseStore();

//reactivity api
const categories = computed(() => {
  //assume sorted
  const cats = course.lessons.map(l => l.category);
  return new Set(cats);
});

const categoryLessons = function(cat){
  return course.lessons.filter(l => l.category === cat);
}

</script>