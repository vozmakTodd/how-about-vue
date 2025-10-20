<script lang="ts" setup>
import { ref } from "vue";
import VIcon from "../VIcon.vue";
import { EInputType, type IProps } from "./types";

const props = defineProps<IProps>();
const value = defineModel<string>();

const inputType = ref<EInputType>(props.type);

const onPasswordToggle = () => {
  inputType.value =
    inputType.value === EInputType.PASSWORD
      ? EInputType.TEXT
      : EInputType.PASSWORD;
};
</script>

<template>
  <div class="v-input">
    <span class="v-input__prepend"><slot name="prepend"></slot></span>
    <input
      class="v-input__field"
      v-model="value"
      :type="inputType"
      :placeholder="props.placeholder"
    />
    <VIcon
      v-if="props.type === EInputType.PASSWORD"
      class="v-input__password-toggler"
      color="#969899"
      :name="inputType === EInputType.PASSWORD ? 'eye-show' : 'eye-hide'"
      @click="onPasswordToggle"
    ></VIcon>
  </div>
</template>

<style scoped>
.v-input {
  display: flex;
  padding: 1rem 0.5rem;
  border-radius: 0.625rem;
  font-size: 1rem;
  background: var(--color-bg);
  color: var(--color-secondary);
  gap: 1.188rem;
  align-items: center;
}
.v-input .v-input__prepend {
  height: 1.5rem;
  width: 1.5rem;
}

.v-input .v-input__field {
  flex: 1;
  border: none;
  outline: none;
  background: none;
  padding: 0;
  box-sizing: border-box;
  color: var(--color-secondary);
}
.v-input .v-input__password-toggler {
  cursor: pointer;
  height: 1.5rem;
  width: 1.5rem;
}

.v-input + .v-input {
  margin-top: 1rem;
}
</style>
