<template>
  <div>
    <form>
      <AppInput
        labelText="제목"
        id="post-title"
        placeholder="제목을 입력해주세요."
        v-model="post.title"
      />
      <AppInput
        labelText="날짜"
        type="date"
        id="post-date"
        v-model="post.date"
      />
      <AppTextarea
        labelText="내용"
        id="post-content"
        placeholder="내용을 입력해주세요."
        v-model="post.content"
      />

      <router-link to="/">
        <AppButton @click="handleCreateButton">포스트 작성</AppButton>
      </router-link>
    </form>
  </div>
</template>

<script>
import axios from "axios";
import AppInput from "@/components/AppInput.vue";
import AppTextarea from "@/components/AppTextarea.vue";
import AppButton from "@/components/AppButton.vue";

export default {
  name: "PostWrite",
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
    },
  },
};
</script>
