import Vue from "vue";
import Vuex from "vuex";
import usersAPI from "./../apis/users";

Vue.use(Vuex);

export default new Vuex.Store({
  // data
  state: {
    currentUser: {
      id: -1,
      name: "",
      email: "",
      image: "",
      isAdmin: false,
    },
    isAuthenticated: false,
    token: "",
  },
  // commit 發動 mutations
  // 用來修改 state的方法 類似methods
  mutations: {
    setCurrentUser(state, currentUser) {
      state.currentUser = {
        ...state.currentUser,
        // 透過API取得的 currentUser
        ...currentUser,
      };
      state.isAuthenticated = true;
      state.token = localStorage.getItem("token");
    },
    revokeAuthentication(state) {
      state.currentUser = {};
      state.isAuthenticated = false;
      state.token = "";
      localStorage.removeItem("token");
    },
  },
  // 透過API請求資料
  actions: {
    async fetchCurrentUser({ commit }) {
      try {
        const { data } = await usersAPI.getCurrentUser();

        if (data.status === "errer") {
          throw new Error(data.message);
        }

        const { id, name, email, image, isAdmin } = data;
        commit("setCurrentUser", {
          id,
          name,
          email,
          image,
          isAdmin,
        });

        return true;
      } catch (error) {
        console.error(error.message);
        commit("revokeAuthentication");
        return false;
      }
    },
  },
  modules: {},
});
