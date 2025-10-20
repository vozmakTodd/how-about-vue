<template>
  <Transition name="toast-fade">
    <div v-if="visible" :class="toastClass" @click="close">
      <span>{{ message }}</span>
    </div>
  </Transition>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from "vue";

interface Props {
  message: string;
  type?: "success" | "error" | "info" | "warning";
  duration?: number;
}

const props = defineProps<Props>();
const emit = defineEmits(["close"]);

const visible = ref(true);
let timer: number | undefined;

const toastClass = computed(() => {
  switch (props.type) {
    case "success":
      return "bg-green-600";
    case "error":
      return "bg-red-600";
    case "warning":
      return "bg-yellow-500 text-black";
    default:
      return "bg-blue-600";
  }
});

const close = () => {
  visible.value = false;
  emit("close");
};

onMounted(() => {
  if (props.duration !== 0) {
    timer = window.setTimeout(close, props.duration || 3000);
  }
});

onUnmounted(() => {
  if (timer) clearTimeout(timer);
});
</script>

<style scoped>
.toast-fade-enter-active,
.toast-fade-leave-active {
  transition: opacity 0.3s, transform 0.3s;
}
.toast-fade-enter-from,
.toast-fade-leave-to {
  opacity: 0;
  transform: translateY(20px);
}
</style>
