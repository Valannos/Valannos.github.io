// Utilities
import Content from "@/components/ContentView.vue";
import { defineStore } from "pinia";

export const useAppStore = defineStore("app", {
  state: () => ({
    contents: [] as Array<Content>,
  }),
});
