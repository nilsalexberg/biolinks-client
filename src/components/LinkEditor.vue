<template>
  <div class="card">
    <div class="title">
      <h3 v-if="showTitleInput" @click="toggleTitleInput">{{ item.title }}</h3>
      <input v-else type="text" class="form-control">
    </div>

    <div class="link">
      <h6 v-if="showLinkInput" @click="toggleLinkInput">{{ item.link }}</h6>
      <input v-else type="text" class="form-control">
    </div>
  </div>
</template>

<script>
export default {
  props: {
    item: {
      type: Object,
      default: null
    }
  },
  data() {
    return {
      showTitleInput: !!this.item,
      showLinkInput: !!this.item
    }
  },
  methods: {
    toggleTitleInput() {
      if (this.item) {
        this.showTitleInput = !this.showTitleInput;
      }
    },
    toggleLinkInput() {
      if (this.item) {
        this.showLinkInput = !this.showLinkInput;
      }
    }
  }
}
</script>
