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
import { delay } from "../utils/functions";
export default {
  name: "TypingEffectTextArea",
  props: {
    delayTime: Number,
    className: Array,
  },
  emit: ["typingFinish"],
  setup(props, { emit, slots }) {
    const typings = ref([]);

    const basicClassName = ["py-1", "text-base"];
    const className = props.className || basicClassName;

    onMounted(() => {
      const text = slots.default()[0].children.split(" ");
      for (let i = 0; i < text.length; i++) typings.value.push("");
      typingEffect(text, typings, props.delayTime);
      emit("typingFinish");
    });
    return { typings, className };
  },
};

function typingEffect(theText, target, ms, index = 0, arrayIndex = 0) {
  if (typeof theText === "string") {
    if (index >= theText.length) return new Promise((resolve) => resolve);
    target.value += theText.charAt(index);
    return delay(ms).then(() => typingEffect(theText, target, ms, index + 1));
  }
  if (arrayIndex >= theText.length) return;
  if (index >= theText[arrayIndex].length) {
    return delay(ms).then(() =>
      typingEffect(theText, target, ms, 0, arrayIndex + 1)
    );
  }
  target.value[arrayIndex] += theText[arrayIndex].charAt(index);
  return delay(ms).then(() =>
    typingEffect(theText, target, ms, index + 1, arrayIndex)
  );
}
</script>

<style lang="scss" scoped></style>
