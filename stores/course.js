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
      lesson: null,
    }
  },

  actions: {
    toggleState(){
      this.course.showSideNav = !this.course.showSideNav;
    },
    async setCourse(slug){
      const stub =  {
        title: "Lorem Ipsum",
        slug: "lorem-ipsum",
        slide: "https://via.placeholder.com/1280x720",
        github: "https://example.com",
        discussion: "https://example.com",
      }
      Object.assign(this.course, stub);
      this.setLessons()
    },
    async setLessons(slug){
      this.lessons.length = 0;
      const data = [
        {category: "Module 1", title: "Lesson 1", duration: 300, free: false, slug: "one"},
        {category: "Module 1",title: "Lesson 2", duration: 300, free: true, slug: "two"},
        {category: "Module 1",title: "Lesson 3", duration: 300, free: false, slug: "three"},
        {category: "Module 1",title: "Lesson 4", duration: 300, free: false, slug: "four"},
        {category: "Module 1",title: "Lesson 5", duration: 300, free: false, slug: "five"},
        {category: "Module 2",title: "Lesson 6", duration: 300, free: false, slug: "six"},
        {category: "Module 2",title: "Lesson 7", duration: 300, free: false, slug: "seven"},
        {category: "Module 2",title: "Lesson 8", duration: 300, free: true, slug: "eight"},
        {category: "Module 2",title: "Lesson 9", duration: 300, free: false, slug: "nine"},
        {category: "Module 2",title: "Lesson 10", duration: 300, free: false, slug: "ten"},
        {category: "Module 3",title: "Lesson 11", duration: 300, free: false, slug: "eleven"},
        {category: "Module 3",title: "Lesson 12", duration: 300, free: false, slug: "twelve"},
        {category: "Module 3",title: "Lesson 13", duration: 300, free: false, slug: "thirdeen"},
        {category: "Module 3",title: "Lesson 14", duration: 300, free: true, slug: "fordeen"},
        {category: "Module 4",title: "Lesson 15", duration: 300, free: false, slug: "fideen"},
        {category: "Module 4",title: "Lesson 16", duration: 300, free: false, slug: "sicksteen"},
        {category: "Module 4",title: "Lesson 17", duration: 300, free: false, slug: "sevent"},
        {category: "Module 4",title: "Lesson 18", duration: 300, free: false, slug: "ayteen"},
      ]
      for(let d of data){
        this.lessons.push(d);
      }
      this.setLesson(this.lessons[0].slug)
    },
    async setLesson(slug){
      this.lesson = this.lessons.find(l => l.slug === slug);
    }
  },
  getters: {
    lessonCount(state){
      return this.course.lessons.length;
    },
  }
});
