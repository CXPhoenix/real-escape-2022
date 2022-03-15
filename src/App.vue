<template>
  <div>
    <SignPage v-if="routers.SignPage" />
    <PrefacePage v-if="routers.PrefacePage" />
  </div>
</template>

<script>
import { ref } from "vue";
import { routers, createRouter } from "./utils/spaRouter";
import SignPage from "./pages/SignPage.vue";
import logo from "./assets/logo.png";
import PrefacePage from "./pages/PrefacePage.vue";

export default {
  setup() {
    const route = createRouter(["SignPage", "PrefacePage"]);
    route.pushState("PrefacePage");
    return { routers, route, logo };
  },
  components: { SignPage, PrefacePage },
};
</script>

<style></style>
