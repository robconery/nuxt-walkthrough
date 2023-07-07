import {defineStore} from "pinia";

export const useAuthStore = defineStore("auth", {
  state(){
    return {
      user: {
        id: null,
        loggedIn: false,
        courses: [],
        gravatar: null
      },
      dialogs: { //reactive by default 
        login: false
      }
    }
  },
  actions: { 
    setLoggedInUser({user, token}){

      if(user.loggedIn) this.user.loggedIn = true;
      this.user.gravatar = user.gravatar;
      this.user.courses = user.courses;
      this.user.id = user.id;
      //this.user.loggedIn = true;
      localStorage.setItem("user", JSON.stringify({id: user.id,token}));
    },
    logout(){
      this.user.loggedIn = false;
      localStorage.removeItem("user");
      location.reload();
    },
    toggleLoginDialog(){
      this.dialogs.login = !this.dialogs.login;
    },
    async fetchUser(){
      const json = localStorage.getItem("user");
      if(json){
        const userData = JSON.parse(json);
        const res = await fetch("/api/user", {
          method: "post",
          body: JSON.stringify({id: userData.id, token: userData.token})
        });
        const {success,user,message} = await res.json();
        if(success){
          this.setLoggedInUser({user,token: userData.token});
        }else{
          console.error(message)
          localStorage.removeItem("user");
          location.href="/";
        }
        
      }
    }
  },
})