<template>
  <v-layout class="bg-black black-gradient">
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
        <img src="/img/logo.png" alt="" style="height:44px" class="ml-3 mt-2"/>
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

      <User />
    </v-app-bar>
    
    <CourseProgress />
    
    <CourseNav  />
    
    <v-main class="">
      <v-container v-if="lesson">
        <v-row justify-center>
          <v-col cols="12">
            <CourseVideo />
            <CourseCommands />
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12" md="8" class="mx-auto">
          <h1 style="border-bottom:1px solid" class="my-8">{{ lesson.title }}</h1>
          <ContentRenderer :value="lesson" />
          
          </v-col>
          
        </v-row>
        
      </v-container>
    </v-main>
    

  </v-layout>
</template>
<script setup>
import {useCourseStore} from "@/stores/course";

let {course,  toggleState, lesson, setCourse, setLessons, setLesson, setNextPrev } = useCourseStore();


const route = useRoute();
let slug = route.params.slug;
let id = route.params.id;

if(course.slug !== slug){
  await setCourse(slug);
  await setLessons(slug);
}


await setLesson(slug, id);
await setNextPrev();

useSeo({
  title: lesson.title,
  description: lesson.description,
});
</script>

<style>
h2{
  margin-top: 18px;
}
a{
  color:#ccc;
  text-decoration: none;
}
</style>
