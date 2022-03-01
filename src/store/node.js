const state = {
  nodeAddress: null,
  walletAddress: null,

}

const mutations = {
  setHarvestNodeURL(state, nodeAddress) {
    state.nodeAddress = nodeAddress
  },
  setWalletAddress(state, walletAddress) {
    state.walletAddress = walletAddress
  },
}

export default {
  namespaced: true,
  state,
  mutations,
}
