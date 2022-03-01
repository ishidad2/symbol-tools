const state = {
  lang: "ja",
}

const mutations = {
  setLanguage(state, lang) {
    state.lang = lang
  },
}

export default {
  namespaced: true,
  state,
  mutations,
}
