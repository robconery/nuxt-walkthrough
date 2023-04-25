<template>
  <v-main class="bg-black black-gradient">
    <v-app-bar 
      id="top-nav"
      flat
      color="black"
    >
      <v-btn icon 
        density="compact" 
        size="38"
        color="white" 
        style="border:1px solid #ccc"
        @click="toggleState()"
        >
        <v-icon>mdi-table-of-contents</v-icon>
      </v-btn>
      <a href="/">
        <img src="/img/logo.png" alt="" style="height:32px" class="ml-3 mt-2"/>
      </a>
      <v-spacer></v-spacer>
      
      <v-btn icon color="white"  href="/">
        <v-icon color="grey-darken-1">mdi-home</v-icon>
      </v-btn>

      <v-btn icon  color="white" href="mailto:rob@bigmachine.io">
        <v-icon color="grey-darken-1">mdi-email-outline</v-icon>
      </v-btn>

      <v-btn icon  color="white" :href="course.discussion">
        <v-icon color="grey-darken-1">mdi-account-group</v-icon>
      </v-btn>

      <v-btn icon  color="white" :href="course.github" >
        <v-icon color="grey-darken-1">mdi-github</v-icon>
      </v-btn>

      <v-btn class="mr-4" @click="toggleLogin">
        <v-avatar>
          <v-img
            src="https://cdn.vuetifyjs.com/images/john.jpg"
            alt="John"
          ></v-img>
        </v-avatar>
      </v-btn>
    </v-app-bar>
    <v-app-bar color="black" height="8">
      <v-progress-linear
      color="blue"
      v-model="progress"
    ></v-progress-linear>
    </v-app-bar>
    <CourseNav />
    <v-container  v-if="lesson" class="" fluid>
      <v-row>
        <v-col>
          <CourseVideo id="1084537" />
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" md="8" class="mx-auto">
        <h2>{{ lesson.title }}</h2>
        <ContentRenderer :value="lesson" />
        </v-col>
      </v-row>
      <v-app-bar
      flat
      color="transparent"
      location="bottom"
      >
        <v-spacer></v-spacer>
        <v-btn
          color="light-green-darken-2"
          variant="outlined"
          :to="navLesson(prev)"
        >Prev</v-btn>
        <v-btn
          color="light-green-darken-2"
          variant="outlined"
          class="ml-4"
          :to="navLesson(next)"
        >Next</v-btn>
      </v-app-bar>
    </v-container>
  </v-main>
</template>
<script setup>
import {useCourseStore} from "@/stores/course";
import {useAuthStore} from "@/stores/auth";

let {course, next, prev, toggleState, lesson, setCourse, setLessons, setLesson, setNextPrev } = useCourseStore();
const {toggleLogin} = useAuthStore();
const progress = 33;
const route = useRoute();
let slug = route.params.slug;
let id = route.params.id;

const navLesson = function(toLesson){
  return `/courses/${slug}/${toLesson.slug}`
}

await setCourse(slug);
await setLessons(slug);
await setLesson(slug, id);
await setNextPrev();



</script>
