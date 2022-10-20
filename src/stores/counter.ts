import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { getApiList } from '../server/index'
import type {RootObject, } from './type'

export const useStore = defineStore({
  id:'counter',
  state: ()=>({
    list: <RootObject>{}
  }),
  actions:{
   async getList()  {
    const result = await getApiList()
    this.list = result
    console.log(result)
   }
  }
})
