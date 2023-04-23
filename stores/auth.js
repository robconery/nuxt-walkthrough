import {defineStore} from "pinia";

export const useAuthStore = defineStore("auth", {
  state(){
    return {
      user: {
        loggedIn: false,
      }
    }
  },
  actions: {
    toggleLogin(){
      this.user.loggedIn = !this.user.loggedIn;
    },
    async fetchUser(){
      //const user = await queryUser().find();
      //this.user = user;
    }
  },
})