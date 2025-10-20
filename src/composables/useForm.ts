import { reactive, toRefs } from "vue";
import type { IField } from "../types";

export const useForm = <T extends Record<string, IField>>(initialValues: T) => {
  const fields = reactive(initialValues);

  const validateField = (key: string) => {
    const field = fields[key];
    field.error = "";
    if (field.rules) {
      for (const rule of field.rules) {
        const result = rule(field.value);
        if (result !== true) {
          field.error = result;
          break;
        }
      }
    }
    return !field.error;
  };

  const validateForm = () => {
    let isValid = true;
    for (const key in fields) {
      if (!validateField(key)) isValid = false;
    }
    return isValid;
  };

  return {
    ...toRefs(fields),
    fields,
    validateField,
    validateForm,
  };
};
