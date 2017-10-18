import Vuex from 'vuex'
/* import * as firebase from 'firebase' */

const store = () => new Vuex.Store({
  /* ******* STATE ******* */
  state: {
    showMenu: false,
    showFoobar: true,
    menuIconAnime: false,
    planoEventoSelecionado: false
  },
  /* ******* GETTERS ******* */
  getters: {
    showMenu (state) {
      return state.showMenu
    },
    showFoobar (state) {
      return state.showFoobar
    },
    menuIconAnime (state) {
      return state.menuIconAnime
    },
    planoEventoSelecionado (state) {
      return state.planoEventoSelecionado
    }
  },
  /* ******* MUTATIONS ******* */
  mutations: {
    m_showMenu (state, payload) {
      state.showMenu = payload
    },
    m_showFoobar (state, payload) {
      state.showFoobar = payload
    },
    m_menuIconAnime (state, payload) {
      state.menuIconAnime = payload
    },
    m_planoEventoSelecionado (state, payload) {
      state.planoEventoSelecionado = payload
    }
  },
  /* ******* ACTIONS ******* */
  actions: {
  }
})

export default store
