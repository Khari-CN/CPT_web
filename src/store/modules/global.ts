import { defineStore } from 'pinia'

export type GlobalStoreState = {
  isMobile: boolean
}

export const useGlobalStore = defineStore('globalStore', {
  state: (): GlobalStoreState => ({
    isMobile: false,
  }),
  getters: {},
  actions: {},
})
