import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { getApiList } from '../server/index'
import type {RootObject, Children, } from './type'

export const useStore = defineStore({
  id:'counter',
  state: ()=>({
    list: <RootObject>{},
    item: <Children[]>[]
  }),
  actions:{
   async getList()  {
    const result = await getApiList()
    this.list = result
    console.log(result)
   }
  }
})
