import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { getApiList } from '../server/index'

export const useStore = defineStore({
  id:'counter',
  state:()=>({
    list:{}
  }),
  actions:{
   async getList()  {
    const result = await getApiList()
    console.log(result)
   }
  }
})
