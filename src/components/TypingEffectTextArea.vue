<template>
  <div class="h-full w-full overflow-y-auto">
    <div v-if="false">
      <slot></slot>
    </div>
    <p v-for="(typing, index) in typings" :key="index" :class="className">
      {{ typing }}
    </p>
  </div>
</template>

<script>
import { onMounted, ref } from "vue";
import { typingEffect } from "../utils/functions";
export default {
  name: "TypingEffectTextArea",
  props: {
    delayTime: Number,
    className: Array,
    isNotTypingEffect: Boolean,
  },
  emit: ["typingFinish"],
  setup(props, { emit, slots }) {
    const typings = ref([]);

    const basicClassName = ["py-1", "text-base"];
    const className = props.className || basicClassName;

    onMounted(() => {
      if (props.isNotTypingEffect) {
        typings.value = slots.default()[0].children.split(" ");
        emit("typingFinish");
        return;
      }
      const text = slots.default()[0].children.split(" ");
      for (let i = 0; i < text.length; i++) typings.value.push("");
      typingEffect(text, typings, props.delayTime);
      emit("typingFinish");
    });
    return { typings, className };
  },
};
</script>

<style lang="scss" scoped></style>
