<template>
  <v-card>
    <v-card-title>
      <i :class="iconClass(icon)" v-for="icon in line.icons" :key="line.text" />
    </v-card-title>
    <v-card-text>{{ line.text }}</v-card-text>
  </v-card>
</template>

<script setup lang="ts">
const props = defineProps<{
  line: Line;
}>();

const { line } = toRefs(props);

const iconClass = (iconName: string) => `medium-icon ${iconName}`;
</script>

<style lang="css">
.medium-icon {
  font-size: 3em;
}
</style>
