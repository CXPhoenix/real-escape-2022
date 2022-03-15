<template>
  <div class="mx-auto h-full w-screen p-2 md:max-w-md">
    <div class="text-left">
      <TypingEffectTextArea :delayTime="30" @typingFinish="getFocus">
        我這學期真是有夠倒霉的，最想參加的吉他社額滿，韓研、流音也一個都沒輪到，
        因為只填了三個社團，結果被學校強制分配到了「校史社」。
        這什麼無聊的社團啊！活動組長說不能換社就算了，重點是校史社的學長姐們，
        總是一副身負重任的樣子，不斷說著校史社的使命，
        什麼尊重歷史、鑑古知今、反思自我⋯⋯
        今年還要求我們要做一個校慶的歷年回顧專題，
        煩死了，不是每個學校都有校慶嗎？有什麼了不起的！
        算了，既然進來了，就試試看吧！校慶歷年回顧⋯⋯我該找誰呢？
      </TypingEffectTextArea>
      <input type="text" class="" ref="input" />
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from "vue";
import TypingEffectTextArea from "../components/TypingEffectTextArea.vue";
export default {
  setup() {
    const input = ref(null);
    let getFocus;
    onMounted(() => {
      getFocus = () => {
        input.value.focus();
      };
    });
    return { input };
  },
  components: { TypingEffectTextArea },
};
</script>

<style></style>
