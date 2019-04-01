<template>
  <div id="app">
    <component id="app" :is="template">
      <router-view />
    </component>
  </div>
</template>

<script>
export default {
  data() {
    return {
      template: "full-template"
    };
  },
  computed: {
    routeTemplate() {
      return this.$route.meta.template + "-template";
    }
  },
  watch: {
    routeTemplate(newValue, oldValue) {
      if (newValue != oldValue) {
        this.template = newValue;
      }
    }
  }
};
</script>

<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
