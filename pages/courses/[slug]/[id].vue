<template>
  <v-app-bar 
    id="top-nav"
    flat
    color="blue-grey-darken-4"
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
    <h2 class="pl-2">{{ course.title }}</h2>
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
  <CourseNav />
  <v-container  v-if="lesson">
    <v-row>
      <v-col>
        
        <CourseVideo id="1084537" />
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" md="8" class="mx-auto">
      <h2>Lorem Ipsum</h2>
      <ContentRenderer :value="doc" />
      </v-col>
    </v-row>
    <v-app-bar
    flat
    color="blue-grey-darken-4"
    location="bottom"
    >
      <v-spacer></v-spacer>
      <v-btn
        color="white"
        variant="outlined"
        
      >Prev</v-btn>
      <v-btn
        color="white"
        variant="outlined"
        class="ml-4"
      >Next</v-btn>
    </v-app-bar>
  </v-container>
</template>
<script setup>
import {useCourseStore} from "@/stores/course";
import {useAuthStore} from "@/stores/auth";

const {course, toggleState, lesson, setCourse } = useCourseStore();
const {toggleLogin} = useAuthStore();

const route = useRoute();
let slug = route.params.slug;

await setCourse(slug);

const doc = await queryContent("/test/lesson").findOne();

</script>
