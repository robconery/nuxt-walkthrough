import { defineStore } from "pinia";

export const useCourseStore = defineStore("course", {

  state(){
    return {
      course: {
        discussion: "",
        github: "",
        showSideNav: true,
      },
      lessons: [],
      lesson: {},
      next: null,
      prev: null
    }
  },

  actions: {
    toggleState(){
      this.course.showSideNav = !this.course.showSideNav;
    },
    async setCourse(slug){
      const content = await queryContent(`/courses/${slug}`).findOne()
      Object.assign(this.course, content);
      this.setLessons(slug)
    },
    async setLessons(slug){
      this.lessons.length = 0;
      const content = await queryContent(`/lessons/${slug}`).find();

      for(let d of content){
        this.lessons.push(d);
      }
      this.setLesson(this.lessons[0].slug)
    },
    async setLesson(slug){
      const found = this.lessons.find(l => l.slug === slug);
      Object.assign(this.lesson, found);
    }
  },
  getters: {
    lessonCount(state){
      return this.lessons.length; 
    },
  }
});
