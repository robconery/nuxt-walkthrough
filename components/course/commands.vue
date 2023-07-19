<template>

<v-row class="py-4">
  <v-col md="8" >
    <v-btn
      v-if="user"
      :color="isComplete() ? 'success' : 'info'"
      @click="completeClicked()"
      color="info"
      :prepend-icon="isComplete() ? 'mdi-check' : 'mdi-circle-outline'"
      variant="outlined"
      class="ml-4"
      >Completed</v-btn>
  </v-col>
  <v-col class="text-right">
    <v-btn
      color="info"
      variant="outlined"
      :to="navLesson(prev)"
    >Prev</v-btn>
    <v-btn
      color="info"
      variant="outlined"
      class="ml-4"
      :to="navLesson(next)"
    >Next</v-btn>
  </v-col>
</v-row>

</template>
<script setup>
const db = useSupabaseClient();
const user = useSupabaseUser();

import {useCourseStore} from "@/stores/course";
const {course,lesson,next, prev, currentVideo, completed} = useCourseStore();

const isComplete = function() {
  if(currentVideo){
    return completed.find(c => c.video_id === currentVideo.id)
  }
  return false;
}

const completeClicked = async function(){
  let res;
  const payload = {
    user_id: user.value.id,
    video_id: currentVideo.id,
    course_id: course.id,
    lesson: lesson.slug
  }
  if(!isComplete()){
    res = await db.from('completed').insert(payload);
    completed.push(payload);
  }else{
    res = await db.from('completed').delete().eq('user_id', user.value.id).eq("video_id", currentVideo.id);
    const found = completed.find(c => c.video_id === currentVideo.id);
    if(found) completed.splice(completed.indexOf(found),1);
  }
  
  if(res.error) console.error(res.error);

}

const navLesson = function(toLesson){
  return `/courses/${course.slug}/${toLesson.slug}`
};

</script>