import { createStore } from 'vuex'

import axios from 'axios';
import moment from 'moment';
moment().format();
export default createStore({
  state: {
    Footerbool: true,
    FooterDate: '',
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
    RingSelected: {key:'',url:'',mode:''},
    RingNavBool : false,
    RoleSelected: {url:''},
    personBoxBool :false,
    MapImg : {idx:'',url:''}

  
    
    

  },
  actions: {
    handFooterDate({commit},date){
      commit('FooterDateChange', date)
    },
   
    
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
    },
    RingChange({commit},ringData){
      commit('RingChange',ringData)
    },
    handRingNavBool({commit},txt){
      commit('handRingNavBool',txt)
    },
    RoleSelected({commit},roleUrl){
      commit('RoleSelected',roleUrl)
    },
    handpersonBoxBool({commit},txt){
      commit('handpersonBoxBool',txt)
    },
    changeMap({commit},MapData){
      commit('changeMap',MapData)
    }

  },
  mutations: {
    FooterDateChange(state,date){
      state.FooterDate = date
    },
    updateTime(state){
      let nowtime = moment().format("HH:mm"); 
      state.nowTime = nowtime;
    },

    handActivitybool(state){
      state.Activitybool = !state.Activitybool;
      state.Footerbool = !state.Activitybool

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
    },
    RingChange(state,ringData){
      state.RingSelected.key = ringData[0].key;
      state.RingSelected.url = ringData[0].url;
      state.RingSelected.mode = ringData[0].mode;
    },
    handRingNavBool(state,txt){
      if(state.RingNavBool===true && txt==='selected' ){
        state.RingNavBool = false
        return
      }
      if(txt==='close' ){
        state.RingNavBool = false
        return
      }
      state.RingNavBool = true
    },
    RoleSelected(state,roleUrl){
      state.RoleSelected.url = roleUrl
      // if(state.personBoxBool){
      //   state.personBoxBool = false
      // }
    },
    handpersonBoxBool(state,txt){

      console.log(state.personBoxBool);
      if(txt==='close' || state.personBoxBool === true){
        state.personBoxBool = false
        return
      }      
      state.personBoxBool = true
    },
    changeMap(state,MapData){
      state.MapImg.url = MapData[0].url
      state.MapImg.idx = MapData[0].idx
      // console.log(state.MapImg);
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
    },
    RingSelected(state){
      return state.RingSelected;
    },
    RingNavBool(state){
      return state.RingNavBool;
    },
    RoleSelected(state){
      return state.RoleSelected;
    },
    personBoxBool(state){
      return state.personBoxBool;
    },
    MapImg(state){
      return state.MapImg;
    },
    Footerbool(state){
      return state.Footerbool;
    },

    FooterDate(state){
      return state.FooterDate
    }




  },  

  modules: {
  }
})
