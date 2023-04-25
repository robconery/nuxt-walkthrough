<template>
  <v-navigation-drawer v-model="course.showSideNav" color="black">
    <v-list v-for="cat in categories">
      <v-list-subheader >{{ cat }}</v-list-subheader>
      <v-list-item 
        v-for="lesson in categoryLessons(cat)"
        :to="link(lesson)"
        :title="lesson.title"
        >
        <template #append v-if="lesson.free">
          <v-icon icon="mdi-lock-open-variant" color="green"></v-icon>
        </template>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>
<script setup>
import {useCourseStore} from "@/stores/course";
const { lessons, course } = useCourseStore();

const link = function(lesson) {
  return `/courses/${course.slug}/${lesson.slug}`
}

const categories = computed(() => {
  const cats = lessons.map(l => l.category);
  return new Set(cats);
});

const categoryLessons = function(cat){
  return lessons.filter(l => l.category === cat);
};

</script>