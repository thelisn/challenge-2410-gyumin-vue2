<template>
  <div class="write-container">
    <form>
      <AppInput
        labelText="제목"
        placeholder="제목을 입력해주세요."
        v-model="post.title"
      />
      <AppInput
        labelText="날짜"
        type="date"
        v-model="post.date"
      />
      <AppTextarea
        labelText="내용"
        placeholder="내용을 입력해주세요."
        v-model="post.content"
      />

      <AppButton @click="handleCreateButton">포스트 작성</AppButton>
    </form>
  </div>
</template>

<script>
import axios from "axios";
import AppInput from "@/components/AppInput.vue";
import AppTextarea from "@/components/AppTextarea.vue";
import AppButton from "@/components/AppButton.vue";

export default {
  name: "WriteForm",
  components: {
    AppInput,
    AppTextarea,
    AppButton,
  },

  data() {
    return {
      post: {
        title: "",
        date: new Date().toISOString().split("T")[0],
        content: "",
      },
    };
  },

  methods: {
    handleCreateButton() {
      axios.post(import.meta.env.VITE_DB_URL, this.post);

      this.$router.push("/");
    },
  },
};
</script>

<style lang="scss" scoped>
.write-container {
  padding: 32px 40px;

  form {
    display: flex;
    flex-direction: column;
    gap: 16px;

    div {
      gap: 8px;
    }

    button {
      @include autoMargin();
      @include marginY(32px);
      width: 40%;
      height: 40px;
      border-radius: 8px;
      border: 1px solid #e0e0e0;
      background-color: $PRIMARY_COLOR;
      color: $white;
      font-size: 16px;
      font-weight: 600;
    }
  }
}
</style>
