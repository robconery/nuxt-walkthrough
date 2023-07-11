import {defineStore} from "pinia";

export const useAuthStore = defineStore("auth", {
  state(){
    return {
      user: {
        id: null,
        loggedIn: false,
        courses: [],
        completed: [],
        gravatar: ""
      },
      dialogs: { //reactive by default 
        login: false
      }
    }
  },
  actions: { 
    async markCompleted(course,lesson){
      const res = await fetch("/api/course/completed", {
        method: "post",
        body: JSON.stringify({token: this.user.token, course, lesson})
      });
      const data = await res.json();
      if(data.success){
        this.user.completed.push({slug: lesson.slug});
      }
      return data.success;
    },
    ownsCourse(slug){
      if(!this.user.loggedIn) return false;
      return this.user.courses.find(c => c.slug === slug);
    },
    setLoggedInUser(data){
      Object.assign(this.user,data);
      this.user.loggedIn = true;
      localStorage.setItem("user", JSON.stringify({token: data.token}));
    },
    logout(){
      this.loggedIn = false;
      localStorage.removeItem("user");
      location.reload();
    },
    toggleLoginDialog(){
      this.dialogs.login = !this.dialogs.login;
    },
    async fetchUser(){
      const json = localStorage.getItem("user");
      if(!this.user.loggedIn && json){
        if(json){
          const userData = JSON.parse(json);
          const res = await fetch("/api/user", {
            method: "post",
            body: JSON.stringify({token: userData.token})
          });
          const {success,data,message} = await res.json();

          if(success){
            this.setLoggedInUser(data);
          }else{
            console.error(message)
            localStorage.removeItem("user");
            location.href="/";
          }
        }
      }
    }
  },
})