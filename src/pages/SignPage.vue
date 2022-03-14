<template>
  <div class="flex h-screen w-screen flex-col items-center justify-between">
    <div class="w-full space-y-10 py-10 md:max-w-[50vw]">
      <h1 class="text-center text-3xl md:text-[3.5rem]">復興巡寶</h1>
      <Transition name="signIn">
        <div v-if="signState.signIn">
          <InputForm
            :formTitle="signInInputArea.formTitle"
            :inputAreas="signInInputArea.inputAreas"
            :buttonAreas="signInInputArea.buttons"
            :onSubmit="signInInputArea.onSubmit"
          />
        </div>
      </Transition>
      <Transition name="signUp">
        <div v-if="signState.signUp">
          <InputForm
            :formTitle="signUpInputArea.formTitle"
            :inputAreas="signUpInputArea.inputAreas"
            :buttonAreas="signUpInputArea.buttons"
            :onSubmit="signUpInputArea.onSubmit"
          />
        </div>
      </Transition>
      <div class="flex justify-evenly">
        <a
          :href="rightLink.href"
          v-for="rightLink in rightLinks"
          :key="rightLink.text"
          class="cursor-pointer border-b-2 border-blue-600 md:border-opacity-0 md:hover:border-opacity-100 md:hover:text-blue-700"
        >
          {{ rightLink.text }}
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import { reactive, ref } from "@vue/reactivity";
import InputForm from "../components/InputForm.vue";
export default {
  setup() {
    const signState = reactive({
      signIn: true,
      signUp: false,
    });
    const signInInputArea = {
      formTitle: "登入",
      inputAreas: [
        {
          id: "username",
          text: "請輸入使用者帳號",
          type: "text",
          value: "",
        },
        {
          id: "password",
          text: "請輸入密碼",
          type: "password",
          value: "",
        },
      ],
      buttons: [
        {
          type: "submit",
          colors: ["from-green-800", "to-green-600"],
          text: "登入",
        },
        {
          type: "button",
          colors: ["from-orange-600", "to-orange-400"],
          text: "申請註冊",
          onClick: () => {
            signState.signIn = false;
            signState.signUp = true;
          },
        },
      ],
      onSubmit: () => {
        console.log("submit");
      },
    };
    const signUpInputArea = {
      formTitle: "註冊",
      inputAreas: [
        {
          id: "username",
          text: "請輸入欲註冊之帳號",
          type: "text",
          value: "",
        },
        {
          id: "password",
          text: "請輸入密碼",
          type: "password",
          value: "",
        },
        {
          id: "passwordAgain",
          text: "請再次輸入密碼",
          type: "password",
          value: "",
        },
        {
          id: "name",
          text: "請輸入您的真實姓名",
          type: "text",
          value: "",
        },
        {
          id: "email",
          text: "請輸入您的電子郵件信箱",
          type: "email",
          value: "",
        },
      ],
      buttons: [
        {
          type: "submit",
          colors: ["from-orange-600", "to-orange-400"],
          text: "註冊",
        },
        {
          type: "button",
          colors: ["from-green-800", "to-green-600"],
          text: "回到登入",
          onClick: () => {
            signState.signIn = true;
            signState.signUp = false;
          },
        },
      ],
      onSubmit: () => {
        console.log("signUp");
      },
    };
    const rightLinks = {
      faq: {
        text: "常見問題",
        href: "",
      },
      serviceRight: {
        text: "服務條款",
        href: "",
      },
    };
    return { signState, signInInputArea, signUpInputArea, rightLinks };
  },
  components: { InputForm },
};
</script>

<style scoped>
.signIn-enter-active,
.signUp-enter-active,
.signIn-leave-active,
.signUp-leave-active {
  @apply transition duration-300 ease-in-out;
}

.signIn-enter-active,
.signUp-enter-active {
  @apply delay-75;
}

.signIn-enter-from,
.signIn-leave-to {
  @apply -translate-x-1/2 opacity-0;
}

.signUp-enter-from,
.signUp-leave-to {
  @apply translate-x-1/2 opacity-0;
}

.signIn-enter-to,
.signIn-leave-from,
.signUp-enter-to,
.signUp-leave-from {
  @apply opacity-100;
}
</style>
