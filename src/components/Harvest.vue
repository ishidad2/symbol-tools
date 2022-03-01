<template>
  <v-container>
    <div class="text-center">
      <v-text-field
        v-model="walletAddress"
        :label="$t('Harvest.input.wallet')"
        :placeholder="$t('Harvest.input.wallet_placeholder')"
      >
        <template v-slot:append-outer>
          <v-btn @click="walletClear"> {{ $t("Button.clear") }} </v-btn>
        </template>
      </v-text-field>
      <v-text-field
        v-model="nodeAddress"
        :label="$t('Harvest.input.node')"
        :placeholder="$t('Harvest.input.node_placeholder')"
      >
        <template v-slot:append-outer>
          <v-btn @click="nodeClear"> {{ $t("Button.clear") }} </v-btn>
        </template>
      </v-text-field>
      <v-btn
        class="ma-2"
        outlined
        color="indigo"
        @click="onSaveBtnClick"
        :disabled="disabled"
      >
        {{ $t("Button.caku") }}
      </v-btn>
      <v-card>
        <v-card-subtitle>
          <div>
            {{ $t("Harvest.message.msg1") }}
          </div>
          <div class="text--primary">
            {{ $t("Harvest.message.msg2") }}
          </div>
        </v-card-subtitle>
      </v-card>
    </div>
    <v-row class="mt-3">
      <v-col cols="12" md="6">
        <v-card>
          <v-card-title>{{ $t("Harvest.status.title") }}</v-card-title>
          <v-card-text>
            <template v-if="accountInfo">
              <v-row>
                <v-col cols="3"> {{ $t("Harvest.status.title") }}： </v-col>
                <v-col cols="9">
                  <template v-if="isUunlockedFilter">
                    <v-icon color="green">mdi-circle</v-icon>
                    {{ $t("Harvest.status.active") }}
                  </template>
                  <template v-else>
                    <v-icon color="red">mdi-circle</v-icon>
                    {{ $t("Harvest.status.invalid") }}
                  </template>
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="3"
                  >{{ $t("Harvest.status.node_public_key") }}：</v-col
                >
                <v-col cols="9">
                  {{ t(accountInfo.supplementalPublicKeys.node) }}
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="3">
                  {{ $t("Harvest.status.remote_public_key") }}：</v-col
                >
                <v-col cols="9">
                  {{ t(accountInfo.supplementalPublicKeys.linked) }}
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="3"
                  >{{ $t("Harvest.status.vrf_publick_key") }}：</v-col
                >
                <v-col cols="9">
                  {{ t(accountInfo.supplementalPublicKeys.vrf) }}
                </v-col>
              </v-row>
              <v-row>
                <v-col>
                  <div class="text--primary">
                    {{ $t("Harvest.status.harvest_detail_title") }}
                  </div>
                  <ul>
                    <li>{{ $t("Harvest.status.node_public_key") }}</li>
                    <li>{{ $t("Harvest.status.remote_public_key") }}</li>
                    <li>{{ $t("Harvest.status.vrf_publick_key") }}</li>
                  </ul>
                  <p>
                    {{ $t("Harvest.status.harvest_detail_message1") }}<br />
                    {{ $t("Harvest.status.harvest_detail_message2") }}<br />
                    {{ $t("Harvest.status.harvest_detail_message3") }}<br />
                    {{ $t("Harvest.status.harvest_detail_message4") }}<br />
                  </p>
                </v-col>
              </v-row>
            </template>
            <template v-else>
              <div>{{ $t("Harvest.status.nodata") }}</div>
            </template>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col>
        <v-card>
          <v-card-title>{{ $t("UnlockedAccount.title") }}</v-card-title>
          <v-card-text>
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
      </v-col>
    </v-row>
    <v-row>
      <v-col></v-col>
      <v-col>
        <!-- QRコードの表示コンポーネント -->
        <qr></qr>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
const SymbolSdk = require("symbol-sdk");
import Qr from "./Qr";
import { mapState } from "vuex";

export default {
  components: {
    Qr,
  },
  data() {
    return {
      nodeAddress: null,
      walletAddress: null,
      unlockedaccount: [],
      accountInfo: null,
      unlockdKeyword: "",
    };
  },
  computed: {
    ...mapState({
      node: (state) => state.node.nodeAddress,
      wallet: (state) => state.node.walletAddress,
    }),
    disabled() {
      return !this.nodeAddress || !this.walletAddress;
    },
    isUunlockedFilter() {
      if (!this.t(this.accountInfo.supplementalPublicKeys.node)) return false;
      if (!this.t(this.accountInfo.supplementalPublicKeys.linked)) return false;
      if (!this.t(this.accountInfo.supplementalPublicKeys.vrf)) return false;
      for (let i in this.unlockedaccount) {
        let unlockd = this.unlockedaccount[i];
        if (
          unlockd === this.t(this.accountInfo.supplementalPublicKeys.linked)
        ) {
          return true;
        }
      }
      return false;
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
    this.nodeAddress = this.node;
    this.walletAddress = this.wallet;
  },
  methods: {
    onClear() {
      this.unlockedaccount = [];
      this.accountInfo = null;
      this.unlockdKeyword = "";
    },
    onSaveBtnClick() {
      //ウォレットアドレスと委任ノードURLを保存
      this.onStoreSave("node/setHarvestNodeURL", this.nodeAddress);
      this.onStoreSave("node/setWalletAddress", this.walletAddress);

      this.onClear();
      this.loadAccountList();
    },
    nodeClear() {
      this.nodeAddress = null;
      this.onClear();
      this.onStoreSave("node/setHarvestNodeURL", null);
    },
    walletClear() {
      this.walletAddress = null;
      this.onClear();
      this.onStoreSave("node/setWalletAddress", null);
    },
    onStoreSave(saveRoot, param) {
      this.$store.commit(saveRoot, param);
    },
    async loadAccountList() {
      let _this = this;
      //空白除去
      let nodeAddress = this.nodeAddress.trim();
      const nodeaddress = "http://" + nodeAddress + ":3000";
      const nodeHttp = new SymbolSdk.NodeHttp(nodeaddress);

      //unlockedaccount取得
      let unlockedAccount = nodeHttp.getUnlockedAccount();
      unlockedAccount.forEach((nulockd) => {
        _this.unlockedaccount = nulockd;
      });

      const address = SymbolSdk.Address.createFromRawAddress(
        this.walletAddress
      );

      // replace with node endpoint
      const repositoryFactory = new SymbolSdk.RepositoryFactoryHttp(
        nodeaddress
      );
      const accountHttp = repositoryFactory.createAccountRepository();
      accountHttp.getAccountInfo(address).subscribe(
        function (accountInfo) {
          _this.accountInfo = accountInfo;
        },
        (err) => console.error(err)
      );
    },
    t(val) {
      return val ? val.publicKey : this.$t("NoLinked");
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
