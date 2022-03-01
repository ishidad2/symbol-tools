<template>
  <v-container>
    <div class="text-center">
      <v-text-field
        v-model="nodeAddress"
        :label="$t('Input.search.node_url')"
        :placeholder="$t('Input.search.node_url_placeholder')"
      >
        <template v-slot:append-outer>
          <v-btn @click="nodeClear"> {{ $t("Button.clear") }} </v-btn>
        </template></v-text-field
      >
      <div>{{ $t("Index.home.message") }}</div>
      <v-btn
        class="ma-2"
        outlined
        color="indigo"
        @click="onSearchBtnClick"
        :disabled="!nodeAddress"
      >
        {{ $t("Button.search") }}
      </v-btn>
    </div>
    <v-row>
      <v-col>
        <v-card>
          <v-card-title>{{ $t("Index.peer.title") }}</v-card-title>
          <v-card-subtitle>{{ $t("Index.peer.subtitle") }}</v-card-subtitle>
          <v-text-field
            class="ml-2 mr-2"
            :label="$t('Index.peer.label')"
            v-model="peerKeyword"
          ></v-text-field>
          <v-card-text>
            <div v-for="peer in nodeFilter" :key="peer.host">
              <ul class="dai-peer">
                <li @click="setNode(peer.host)">
                  {{ peer.host }}
                </li>
              </ul>
            </div>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col>
        <v-card>
          <v-card-title>{{ $t("UnlockedAccount.title") }}</v-card-title>
          <v-card-text>
            <div>
              {{ $t("UnlockedAccount.accountNumMsg") }}：{{
                unlockedaccount.length
              }}
            </div>
            <v-text-field
              class="ml-2 mr-2"
              :label="$t('Input.search.unlockedAccount_rul')"
              v-model="unlockdKeyword"
            ></v-text-field>
            <div v-for="account in unlockedFilter" :key="account">
              <ul>
                <li>
                  {{ account }}
                </li>
              </ul>
            </div>
          </v-card-text>
        </v-card>
        <!-- QRコードの表示コンポーネント -->
        <qr></qr>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
const SymbolSdk = require("symbol-sdk");
// import { mergeMap } from "rxjs/operators";
import Qr from "./Qr";
export default {
  components: {
    Qr,
  },
  data() {
    return {
      nodeAddress: null,
      nodePeers: [],
      unlockedaccount: [],
      peerKeyword: "",
      unlockdKeyword: "",
    };
  },
  computed: {
    nodeFilter() {
      let nodes = [];
      for (let i in this.nodePeers) {
        let peer = this.nodePeers[i];
        if (peer.host.indexOf(this.peerKeyword) !== -1) {
          nodes.push(peer);
        }
      }

      return nodes;
    },
    unlockedFilter() {
      let account = [];
      for (let i in this.unlockedaccount) {
        let unlockd = this.unlockedaccount[i];
        if (unlockd.indexOf(this.unlockdKeyword) !== -1) {
          account.push(unlockd);
        }
      }

      return account;
    },
  },
  mounted() {
    this.nodeAddress =
      process.env.VUE_APP_NODE === undefined
        ? "dual-1.nodes-xym.work"
        : process.env.VUE_APP_NODE;
  },
  methods: {
    onSearchBtnClick() {
      this.nodePeers = [];
      this.unlockedaccount = [];
      this.loadAccountList();
    },
    async loadAccountList() {
      let _this = this;
      //空白除去
      let nodeAddress = this.nodeAddress.trim();
      const nodeaddress = "https://" + nodeAddress + ":3001";
      const nodeHttp = new SymbolSdk.NodeHttp(nodeaddress);

      //peerNode取得
      let nodePeers = nodeHttp.getNodePeers();
      nodePeers.forEach((peer) => {
        peer.forEach((nodeinfo) => {
          _this.nodePeers.push(nodeinfo);
        });
      });
      //unlockedaccount取得
      let unlockedAccount = nodeHttp.getUnlockedAccount();
      unlockedAccount.forEach((nulockd) => {
        _this.unlockedaccount = nulockd;
      });
    },
    setNode(node) {
      this.nodeAddress = node;
    },
    nodeClear() {
      this.nodeAddress = null;
    },
  },
};
</script>

<style scoped>
.dai-peer li {
  cursor: pointer;
  cursor: hand;
}
</style>
