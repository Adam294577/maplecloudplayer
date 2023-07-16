import { createStore } from 'vuex'

import axios from 'axios';
export default createStore({
  state: {
    BossSelected: "露希妲",
    SectionSelected: "bossIntro",
    GradeSelected: "hard",
  },
  actions: {
    handInit({commit}){
      const url = '/mapleBossInfo.json';
      axios.get(url)
      .then(res=>{
        commit('init', res.data)
      })
      .catch(err=>{
        console.error("沒接到API");
      })
    }

  },
  mutations: {
    init(state , ApiData){
      console.log(ApiData.data);
    }
  },
  getters: {
    BossSelected(state){
      return state.BossSelected;
    },
    SectionSelected(state){
      return state.SectionSelected;
    },
    GradeSelected(state){
      return state.GradeSelected;
    },


  },  

  modules: {
  }
})
