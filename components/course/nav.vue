<template>
  <v-navigation-drawer v-model="course.showSideNav" :color="bg"  width="350">
    <v-list v-for="cat in categories"
      active-class="border"
    >
      <v-list-subheader color="white">{{ cat }}</v-list-subheader>

      <v-list-item 
        v-for="lesson in categoryLessons(cat)"
        :to="link(lesson)"
        color="white"
        density="compact"
        >
        <template #prepend >
          <v-icon :icon="lesson.icon"></v-icon>
        </template>

        <v-list-item-title class="text-grey">{{ lesson.title }}
        </v-list-item-title>      
      </v-list-item>

    </v-list>
  </v-navigation-drawer>
</template>
<script setup>
import {useCourseStore} from "@/stores/course";
import {useAuthStore} from "@/stores/auth";
import { useDisplay } from 'vuetify'

const bg = computed(() => {
  const { name } = useDisplay();
  switch (name.value) {
    case 'xs': return "black"
    case 'sm': return "black"
    case 'md': return "black"
    case 'lg': return "transparent"
    case 'xl': return "transparent"
    case 'xxl': return "transparent"
  }
  return "transparent"
})


const { lessons, course } = useCourseStore();
const {user} = useAuthStore();

const setLoggedInState = function(){
  //does the user own this?
  const owned = user.courses.find(c => c.slug === course.slug);

  if(owned){
    //reset the icons
    for(let l of lessons){
      l.icon = "mdi-circle-outline"
    }
  }
}

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