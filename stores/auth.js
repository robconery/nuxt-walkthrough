import {defineStore} from "pinia";

export const useAuthStore = defineStore("auth", {
  state(){
    return {
      user: {
        loggedIn: false,
      },
      dialogs: { //reactive by default 
        login: false
      }
    }
  },
  actions: { 
    setLoggedInUser({email, token, gravatar}){
      this.user.loggedIn = true;
      this.user.email = email;
      this.user.token = token;
      this.user.gravatar = gravatar;

      localStorage.setItem("user",JSON.stringify(this.user));
    },
    logout(){
      this.user.loggedIn = false;
      localStorage.removeItem("user");
    },
    toggleLoginDialog(){
      this.dialogs.login = !this.dialogs.login;
    },
    async fetchUser(){
      const json = localStorage.getItem("user");
      if(json){
        const userData = JSON.parse(json);
        console.log(userData);
        this.setLoggedInUser(userData);
      }
    }
  },
})