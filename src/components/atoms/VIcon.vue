<script lang="ts" setup>
import { ref, watchEffect } from "vue";

/**
 * Props for the Icon component.
 * @typedef {object} Props
 * @property {string} name - The name of the SVG icon to load.
 * @property {string} [color] - Optional color for the icon.
 */
type Props = {
  name: string;
  color?: string;
};
const { name, color = "#333" } = defineProps<Props>();

const icon = ref<string | null>("");

async function loader(iconName: string) {
  try {
    icon.value = await (
      await import(`../../assets/icons/${iconName}.svg?raw`)
    ).default;
  } catch (error) {
    icon.value = "";
  }
}

watchEffect(() => loader(name));
</script>

<template>
  <div v-if="icon" class="icon" v-html="icon"></div>
  <div v-else class="icon-bad">x</div>
</template>

<style scoped>
.icon {
  --icon-color: v-bind(color);

  color: var(--icon-color, #e3e3e3);
  display: flex;
  flex-flow: row;
  width: 1rem;
  height: 1rem;
  align-items: center;
  justify-content: center;
}
.icon-bad {
  color: #ccc;
}
</style>
