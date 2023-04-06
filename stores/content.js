import { defineStore } from "pinia";

export const useContentStore = defineStore("content", {

  state(){
    return {
      page: {}
    }
  },

  actions: {
    async fetchPage(path){
      const content = await queryContent(path).find();
      for(let doc of content){
        this.page[doc.slug] = doc;
      }
    }
  },
  getters: {

  }
});