import api from "../api";

const usersModule = {
  namespaced: true,

  state: {
    users: [],
  },

  getters: {
    users: (state) => state.users,
  },

  mutations: {
    setUsers: (state, users) => (state.users = users),
  },

  actions: {
    // get
    async getUsers({ commit }) {
      const { data } = await api.get(`users`);
      commit("setUsers", data);
    },

    // post
    async addUser({ dispatch }, data) {
      await api
        .post("users", data)
        .then(() => {
          dispatch("getUsers");
        })
        .catch((error) => console.log(error));
    },

    // delete
    async deleteUser({ dispatch }, id) {
      await api
        .delete(`users/${id}`)
        .then(() => {
          dispatch("getUsers");
        })
        .catch((error) => console.log(error));
    },

    // put
    async updateUser({ dispatch }, { id, data }) {
      await api
        .put(`users/${id}`, data)
        .then(() => {
          dispatch("getUsers");
        })
        .catch((error) => console.log(error));
    },
  },
};

export default usersModule;
