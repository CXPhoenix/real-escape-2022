<template>
  <div>
    <SignPage />
  </div>
</template>

<script>
import { routers, createRouter } from "./utils/spaRouter";
import SignPage from "./pages/SignPage.vue";

export default {
  setup() {
    return {};
  },
  components: { SignPage },
};
</script>

<style></style>
