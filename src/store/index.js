import { createStore } from 'vuex'

import axios from 'axios';
import moment from 'moment';
moment().format();
export default createStore({
  state: {
   
    
    // bossInfo
    BossSelected: "露希妲",
    SectionSelected: "bossIntro",
    GradeSelected: "hard",
    Activitybool: false,


    // ChatRing
    nowTime : moment().format("HH:mm"),
    game_id: '我推的ID',
    chat_msg: '5207',
    msgStorage:[],
    ChannelListbool: false,
    MapMsgbool: false,

  
    
    

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
    },
    // ring
    handGameID({commit},newID){
      commit('changeID',newID)
    },
    MsgTransToMap({commit},msg){
      commit('MsgTransToMap',msg)
    },
    RenderSysMsg({commit}){
      commit('RenderSysMsg')
    },
    MsgTransToSys({commit},channelColor){
      commit('MsgTransToSys',channelColor)
    },
    ChannelListCancel({commit}){
      commit('ChannelListCancel')
    },
    ChannelListOpen({commit}){
      commit('ChannelListOpen')
    },
    updateTime({commit}){
      commit('updateTime');
    },   
    handMapMsgbool({commit}) {
      commit('handMapMsgbool')
    }


  },
  mutations: {
    updateTime(state){
      let nowtime = moment().format("HH:mm"); 
      state.nowTime = nowtime;
    },

    handActivitybool(state){
      state.Activitybool = !state.Activitybool;
    },
    changeID(state,newID){
      state.game_id = newID;
    },
    MsgTransToMap(state,msg){
      state.chat_msg = msg
    },
    RenderSysMsg(state){
      state.msgStorage[0] = {userID: '', class: 'c0y', msg: ` [歡迎] 歡迎來到新楓之谷！！` , time: `[${state.nowTime}]`};
      state.msgStorage[1] = {userID: '', class: 'c0y', msg: `[系統] 新楓之谷 好玩不花錢 ヽ(✿ﾟ▽ﾟ)ノ` , time: `[${state.nowTime}]`};
    },
    MsgTransToSys(state,channelColor){
      state.msgStorage.push(
        {userID: state.game_id , class: channelColor, msg: state.chat_msg , time: `[${state.nowTime}]`}        
        )
    },
    ChannelListCancel(state){
      state.ChannelListbool = false
    },
    ChannelListOpen(state){
      state.ChannelListbool = true
    },
    handMapMsgbool(state){
      if(state.MapMsgbool) return
      state.MapMsgbool = true
      setTimeout(() => {state.MapMsgbool = false}, 5000);
    }

  },
  getters: {
    nowTime(state){
      return state.nowTime
    },
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
    },
    // ringporject
    game_id(state){
      return state.game_id;
    },
    chat_msg(state){
      return state.chat_msg;
    },
    msgStorage(state){
      return state.msgStorage;
    },
    ChannelListbool(state){
      return state.ChannelListbool;
    },
    MapMsgbool(state){
      return state.MapMsgbool;
    }



  },  

  modules: {
  }
})
