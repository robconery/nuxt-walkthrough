import { defineStore } from "pinia";

export const useCourseStore = defineStore("course", {
  state(){
  
    return {
      course: {
        discussion: "",
        github: "",
        showSideNav: true,
        totalDuration: 0
      },
      lessons: [],
      lesson: {},
      next: {},
      prev: {}
    }
  },
  getters: {
    courseDuration(state){
      return state.lessons.reduce((acc,l) => acc += parseInt(l.duration || 0), 0)
    }
  },
  actions: {
    toggleState(){
      this.course.showSideNav = !this.course.showSideNav;
    },
    async setCourse(slug){
      const content = await queryContent(`/courses/${slug}`).findOne()
      Object.assign(this.course, content);
    },
    async setLessons(slug){
      this.lessons.length = 0;
      const content = await queryContent(`/lessons/${slug}`).find();
      for(let d of content){
        if(d.free) d.icon="mdi-lock-open-variant"
        this.lessons.push(d);
      }
    },
    async setLesson(slug, id){
      const doc = await queryContent(`/lessons/${slug}`).where({slug: id}).findOne();
      Object.assign(this.lesson, doc);
    },
    async setNextPrev(){

      const found = this.lessons.find(d => d.slug === this.lesson.slug);
      if(found){
        let idx = this.lessons.indexOf(found);
        if(idx > 0) {
          Object.assign(this.prev,this.lessons[idx - 1]);      
        }else{
          Object.assign(this.prev,this.lessons[0]);     
        }
        if(idx < this.lessons.length - 1){
          Object.assign(this.next,this.lessons[idx + 1]);
        }else{
          Object.assign(this.next,this.lessons[this.lessons.length - 1]);
        }
      }
    }

  }
});
