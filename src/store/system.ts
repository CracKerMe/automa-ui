import { defineStore } from 'pinia';
export const useSystemStore = defineStore({
  id: 'system',
  state() {
    return {
      _locale: 'en', // en | zh-CN
    };
  },
  getters: {
    locale: (state) => state._locale,
  },
  actions: {
    setLocale(_locale: string) {
      this._locale = _locale;
    },
  },
});
