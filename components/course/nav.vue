<template>

  <v-navigation-drawer v-model="course.showSideNav" :color="bg"  width="370">
    <v-list v-for="cat in categories" active-class="border">
      <v-list-subheader color="white">{{ cat }}</v-list-subheader>

      <v-list-item 
        v-for="item in categoryLessons(cat)"
        :to="link(item)"
        color="white"
        density="compact"
        >
        <template #prepend>
          <v-icon icon="mdi-circle-outline" class="gray-darken-1"></v-icon>
        </template>
        <template #prepend v-if="item.free">
          <v-icon icon="mdi-lock-open-variant-outline" color="green"></v-icon>
        </template>
        <template #prepend v-if="isAuthorized">
          <v-icon icon="mdi-play-circle-outline" color="secondary"></v-icon>
        </template>
        <template #append>
          <span class="text-caption">{{ toDuration(item.duration) }}</span>
        </template>


        <v-list-item-title class="text-grey">{{ item.title }}
        </v-list-item-title>      
      </v-list-item>

    </v-list>
  </v-navigation-drawer>
</template>
<script setup>
const router = useRouter()
import {useCourseStore} from "@/stores/course";
import { useDisplay } from 'vuetify'
const {isAuthorized} = useCourseStore();
const {toDuration} = useTime();

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

const categories = computed(() => {
  const cats = lessons.map(l => l.category);
  return new Set(cats);
});

const link = function(l){
  return `/courses/${course.slug}/${l.slug}`
}
const categoryLessons = function(cat){
  return lessons.filter(l => l.category === cat);
};

</script>