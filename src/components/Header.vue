<template>
  <div>
    <v-app-bar color="deep-purple accent-4" dense dark>
      <v-toolbar-title>{{ $t("Head.title") }}</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-menu left bottom>
        <template v-slot:activator="{ on, attrs }">
          <v-btn icon v-bind="attrs" v-on="on">
            <v-icon>mdi-dots-vertical</v-icon>
          </v-btn>
        </template>

        <v-list>
          <v-list-item>
            <router-link to="/">
              <v-list-item-title>{{ $t("Menu.menu1") }}</v-list-item-title>
            </router-link>
          </v-list-item>
          <v-list-item>
            <router-link to="/harvest">
              <v-list-item-title>{{ $t("Menu.menu2") }}</v-list-item-title>
            </router-link>
          </v-list-item>
          <v-list-item>
            <v-btn text @click="dialog = true">{{ $t("Menu.menu3") }}</v-btn>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-app-bar>
    <v-dialog v-model="dialog" width="500">
      <v-card>
        <v-card-title class="headline grey lighten-2">{{
          $t("Menu.menu3")
        }}</v-card-title>
        <v-card-text>
          <v-select
            v-model="selectLang"
            :items="lang_items"
            item-text="text"
            item-value="key"
            :label="$t('Menu.menu3')"
          ></v-select>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="error" text @click="close">
            {{ $t("Button.close") }}
          </v-btn>
          <v-btn color="primary" text @click="save">
            {{ $t("Button.save") }}
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  computed: {
    ...mapState({
      loadLang: (state) => state.translations.lang,
    }),
  },
  mounted() {
    this.$nextTick(() => {
      this.init();
    });
  },
  data() {
    return {
      selectLang: null,
      dialog: false,
      lang_items: [],
    };
  },
  methods: {
    init() {
      this.lang_items = [
        { key: "ja", text: this.$t("Menu.ja") },
        { key: "en", text: this.$t("Menu.en") },
      ];
      this.$set(this, "selectLang", this.loadLang);
    },
    close() {
      this.$set(this, "selectLang", this.loadLang);
      this.dialog = false;
    },
    save() {
      this.$store.commit("translations/setLanguage", this.selectLang);
      this.dialog = false;
      this.$i18n.locale = this.selectLang;
      this.init();
    },
  },
};
</script>
