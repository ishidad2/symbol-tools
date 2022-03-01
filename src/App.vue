<template>
  <div id="app">
    <v-app>
      <Header></Header>
      <router-view></router-view>
    </v-app>
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import { mapState } from "vuex";

export default {
  name: "App",
  components: {
    Header,
  },
  computed: {
    ...mapState({
      lang: (state) => state.translations.lang,
    }),
  },
  mounted() {
    this.$i18n.locale = this.lang;
  },
};
</script>
