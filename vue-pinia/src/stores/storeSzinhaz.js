import { defineStore } from 'pinia'

export const useSzinhazStore = defineStore('szinhaz', {
  state: () => ({
    selectedSzinhaz: null,
  }),
  actions: {
    setSelectedSzinhaz(szinhaz) {
      this.selectedSzinhaz = szinhaz
    },
  },
})
