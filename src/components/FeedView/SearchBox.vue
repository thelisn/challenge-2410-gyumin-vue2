<template>
  <div class="top-sticky-container">
    <AppButton class="open-search-button" @click="handleOpenSearch">
      {{ isSearchOpen ? "Close Search" : "Open Search" }}
    </AppButton>

    <div class="searchbox" v-if="isSearchOpen">
      <div class="searchbox-title">
        <AppInput
          labelText="제목 검색"
          role="searchbox"
          placeholder="검색어를 입력하세요."
          v-model="searchTerm"
        />
      </div>

      <div class="searchbox-date">
        <span class="search-label">기간 검색</span>
        <AppInput
          labelText="날짜 검색 시작 범위"
          srOnly="true"
          type="date"
          role="searchbox"
          v-model="startDate"
        />
        <span>~</span>
        <AppInput
          labelText="날짜 검색 종료 범위"
          srOnly="true"
          type="date"
          role="searchbox"
          v-model="endDate"
        />
      </div>

      <div class="searchbox-button">
        <AppButton @click="handleClickSearch">검색</AppButton>
        <AppButton @click="handleClickReset">초기화</AppButton>
      </div>
    </div>
  </div>
</template>

<script>
import AppInput from "@/components/AppInput.vue";
import AppButton from "@/components/AppButton.vue";

export default {
  name: "SearchBox",
  components: {
    AppInput,
    AppButton,
  },

  data() {
    return {
      isSearchOpen: false,
      searchTerm: "",
      startDate: "",
      endDate: "",
    };
  },

  methods: {
    handleOpenSearch() {
      this.isSearchOpen = !this.isSearchOpen;
    },

    filteredByTitle(data) {
      if (this.searchTerm) {
        return data.filter((post) => post.title.includes(this.searchTerm));
      }

      return data;
    },

    filteredByStartDate(data) {
      if (this.startDate) {
        return data.filter(
          (post) => new Date(post.date) >= new Date(this.startDate)
        );
      }

      return data;
    },

    filteredByEndDate(data) {
      if (this.endDate) {
        return data.filter(
          (post) => new Date(post.date) <= new Date(this.endDate)
        );
      }

      return data;
    },

    handleClickSearch() {
      let filteredData = this.$store.state.data;

      filteredData = this.filteredByTitle(filteredData);
      filteredData = this.filteredByStartDate(filteredData);
      filteredData = this.filteredByEndDate(filteredData);

      this.$store.commit("setRenderData", filteredData);
    },

    handleClickReset() {
      this.$store.commit("setRenderData", this.$store.state.data);

      this.searchTerm = "";
      this.startDate = "";
      this.endDate = "";
    },
  },
};
</script>

<style lang="scss" scoped>
.top-sticky-container {
  position: sticky;
  top: 0;
  width: 100%;
  background-color: $BACKGROUND_COLOR;
  border-bottom-left-radius: 48px;
  border-bottom-right-radius: 48px;

  .open-search-button {
    padding: 8px;
    width: 100%;
    margin-top: 12px;
    border-radius: 48px;
    border: none;
    font-size: 1rem;
    font-weight: 500;
    background-color: $PRIMARY_COLOR;
    color: $white;

    &:hover {
      background-color: $SECONDARY_COLOR;
    }
  }
}

.searchbox {
  display: flex;
  flex-direction: column;
  gap: 4px;
  padding: 8px;
  border-bottom: 1px solid $gray3;
  background-color: $gray0;

  .searchbox-date {
    display: flex;
    align-items: center;
    gap: 4px;
    flex-shrink: 1;

    span {
      font-size: 0.875rem;
      padding-right: 2px;
    }

    div {
      flex-grow: 1;
    }
  }
}

.searchbox-button {
  display: flex;
  gap: 6px;
  justify-content: flex-end;
  margin-top: 8px;

  button {
    padding: 4px 8px;
    border-radius: 6px;
    border: 1px solid $blue3;
    background-color: $white;
    color: $TEXT_COLOR;

    &:hover {
      background-color: $PRIMARY_COLOR;
      color: $white;
      font-weight: 600;
    }
  }
}
</style>
