<template>
  <v-expansion-panels>
    <v-expansion-panel>
      <v-expansion-panel-title>
        {{ content.title }}
      </v-expansion-panel-title>
      <v-expansion-panel-text v-for="line in content.lines" :key="line.id">
        <content-line :line="line" />
      </v-expansion-panel-text>
    </v-expansion-panel>
  </v-expansion-panels>
</template>

<script setup lang="ts">
const props = defineProps<{
  content: Content;
}>();

const { content } = toRefs(props);
</script>
