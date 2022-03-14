<template>
  <form
    class="flex w-full flex-col items-center justify-center space-y-8 px-4"
    @submit.prevent="onSubmit"
  >
    <h2 class="text-center text-2xl md:text-[2.25rem]">{{ formTitle }}</h2>
    <div class="w-full space-y-5">
      <label
        :for="inputArea.id"
        v-for="inputArea in inputAreas"
        :key="inputArea.id"
        class="block"
      >
        <input
          :type="inputArea.type"
          :class="[basicInputClasses, { inputError: inputArea.hasError }]"
          :placeholder="inputArea.text"
          :area-label="inputArea.text"
          :required="!inputArea.required"
          v-model="inputArea.value"
        />
      </label>
    </div>
    <div class="w-full space-y-5">
      <button
        :class="[...basicButtonClasses, ...buttonArea.colors]"
        v-for="(buttonArea, index) in buttonAreas"
        :key="index"
        :type="buttonArea.type"
        @click="buttonArea.onClick"
      >
        {{ buttonArea.text }}
      </button>
    </div>
  </form>
</template>

<script>
import { isIntegerKey } from "@vue/shared";
import { toRef } from "vue";
export default {
  props: {
    formTitle: String,
    inputAreas: Array,
    buttonAreas: Array,
    onSubmit: Function,
  },
  setup(props, { emit }) {
    const { formTitle, inputAreas, buttonAreas, onSubmit } = props;
    const basicInputClasses =
      "w-full rounded-md border-[0.07em] p-2 pl-3 text-xl";
    const inputError = "outline-red-600";
    const basicButtonClasses = [
      "block",
      "w-full",
      "rounded-lg",
      "bg-gradient-to-b",
      "py-1",
      "text-xl",
      "text-gray-50",
    ];
    return {
      formTitle,
      inputAreas,
      basicInputClasses,
      inputError,
      buttonAreas,
      basicButtonClasses,
      onSubmit,
    };
  },
};
</script>

<style lang="scss" scoped></style>
