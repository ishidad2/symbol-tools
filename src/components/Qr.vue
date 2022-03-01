<template>
  <div class="mt-5">
    <v-card class="pb-3 pl-3">
      <v-card-text>
        <v-row justify="center" align-content="center">
          <v-col v-for="text in targetText" :key="text.name">
            <vue-qrcode
              :value="text.address"
              :options="option"
              tag="img"
            ></vue-qrcode>
            <div>
              {{ text.name }}
            </div>
          </v-col>
        </v-row>
        <ul v-for="text in targetText" :key="text.name">
          <li>{{ text.name }} : {{ text.address }}</li>
        </ul>
      </v-card-text>
      <v-card-text>
        <div class="pl-2 text--primary">{{ $t("Qr.message") }}</div>
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
import VueQrcode from "@chenfengyuan/vue-qrcode";

export default {
  components: {
    VueQrcode,
  },
  data() {
    return {
      targetText: [
        { name: "NEM", address: "ND5XAOWZZPHLMZVJVLIJCWAINZKYTOFDMXL4X6CJ" },
        { name: "Symbol", address: "NDBSQQFMPJION5C6S5MTZHTXZF7YLX7UZHFLBOA" },
      ],
      option: {
        errorCorrectionLevel: "M",
        maskPattern: 0,
        margin: 3,
        scale: 2,
        width: 200,
        color: {
          dark: "#000000FF",
          light: "#FFFFFFFF",
        },
      },
    };
  },
};
</script>
