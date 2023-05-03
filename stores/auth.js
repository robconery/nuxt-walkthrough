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
    setLoggedInUser({email, token}){
      this.user.loggedIn = true;
      this.user.email = email;
      this.user.token = token;
      console.log(this.user);
    },
    toggleLoginDialog(){
      this.dialogs.login = !this.dialogs.login;
    },
    toggleLogin(){
      this.user.loggedIn = !this.user.loggedIn;
    },
    async fetchUser(){
      //const user = await queryUser().find();
      //this.user = user;
    }
  },
})