<template>
  <div>
    <SignPage v-if="routers.SignPage" />
  </div>
</template>

<script>
import { routers, createRouter } from "./utils/spaRouter";
import SignPage from "./pages/SignPage.vue";

export default {
  setup() {
    const route = createRouter(["SignPage"]);
    return { routers, route };
  },
  components: { SignPage },
};
</script>

<style></style>
