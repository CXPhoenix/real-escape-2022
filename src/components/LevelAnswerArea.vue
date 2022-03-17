<template>
  <div class="w-full" ref="container">
    <label ref="label" :for="level.id" class="flex items-center justify-center">
      <p>{{ level.preText }}</p>
      <input
        :id="level.id"
        :type="level.type"
        class="flex-1 border-b-2 pt-1 pl-2 outline-none focus:border-b-blue-300"
        :placeholder="level.description"
        :aria-label="level.description"
        ref="input"
        v-model="level.value"
      />
    </label>
  </div>
</template>

<script>
import { ref, onMounted } from "vue";
export default {
  props: {
    level: Object,
  },
  setup(props) {
    const level = props.level;
    const container = ref(null);
    const label = ref(null);
    const input = ref(null);
    onMounted(() => {
      const containerWidth = container.value.clientWidth;
      if (input.value.clientWidth <= Math.floor(containerWidth / 2)) {
        label.value.classList.add("flex-col", "items-start");
        label.value.classList.remove("items-center");
        input.value.classList.add("w-full");
        input.value.classList.remove("flex-1");
      }
    });
    return { level, container, label, input };
  },
};
</script>

<style lang="scss" scoped></style>
