import {defineStore} from "pinia";

export const useAuthStore = defineStore("auth", {
  state(){
    return {
      loggedIn: false,
      user: {},
      dialogs: { //reactive by default 
        login: false
      }
    }
  },
  actions: { 
    setLoggedInUser(userData){
      this.user.courses = userData.courses;
      this.user.id = userData.id;
      localStorage.setItem("user",JSON.stringify({id: userData.id, token: userData.token}));
      //this.loggedIn = true;
      
    },
    logout(){
      this.loggedIn = false;
      localStorage.removeItem("user");
    },
    toggleLoginDialog(){
      this.dialogs.login = !this.dialogs.login;
    },
    async fetchUser(){
      const json = localStorage.getItem("user");
      if(json){
        const data = JSON.parse(json);
        const res = await fetch("/api/user", {
          method: "post",
          body: JSON.stringify({token: data.token})
        });
        const {success, user, message} = await res.json();
        if(success) this.setLoggedInUser(user)
        //else... handle this problem...
      }
    }
  },
})