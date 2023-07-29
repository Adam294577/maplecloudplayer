import { createStore } from 'vuex'

import axios from 'axios';
export default createStore({
  state: {
    BossSelected: "露希妲",
    SectionSelected: "bossIntro",
    GradeSelected: "hard",
    Activitybool: false,
    

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
    },
    getNavData({commit}){
      const url = '/bossGrade.json';
      return axios.get(url)
      .then(res=>{
        commit('getNavData', res.data)
        return res.data
      })
      .catch(err=>{
        console.error("沒接到NavData");
      })
    },
    handActivitybool({commit}){
      commit('handActivitybool')
    }

  },
  mutations: {
    init(state , ApiData){
      // console.log(ApiData[0].data);
    },
    getNavData(state,NavData){

    },
    handActivitybool(state){
      state.Activitybool = !state.Activitybool
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
    Activitybool(state){
      return state.Activitybool;
    }



  },  

  modules: {
  }
})
