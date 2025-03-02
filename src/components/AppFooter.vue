<template>
  <v-footer height="20" border>
    <v-row justify="space-around">
      <v-card title="Employed frameworks">
        <v-list :items="items"></v-list>
      </v-card>
      <v-card title="© 2025 Copyright" subtitle="Updated 2025-03-01" />
    </v-row>
  </v-footer>
</template>

<script setup lang="ts">
const items = ["VueJS", "Vuetify", "Devicon"];
</script>

<style scoped lang="sass"></style>
