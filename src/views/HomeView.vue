<script>
import HeaderBg from '@/components/HeaderBg.vue'
import { ref , reactive } from 'vue'
import {useRoute} from 'vue-router'
import { useStore } from 'vuex';
import RouteLinkUpdate from '@/api/RouteLinkUpdate.json'
export default {
  
  components:{
    HeaderBg,
  },
  setup () {
      // workIntroBox
      const Route = useRoute()
      const store = useStore()
      const lastUpdateTime =  RouteLinkUpdate.data.filter(item=>{
        if(item.path === Route.path){
          return item
        }
      })
      const handFooterDate = ()=>{
        let date = lastUpdateTime[0].date
        store.dispatch('handFooterDate',date)
      }
      handFooterDate()
      const IntroBoxData = reactive({data:[
          {
          key: "聊天戒指模擬器" , 
          link:'/work/chatRing',
          aim :"讓雲玩家們能無料的嘗試使用各種聊天戒指", 
          learn:[
              `1.自學以來第一次使用<a target="_blank" href="https://cli.vuejs.org/">Vue CLI</a>開啟的小專案`,
              `2.嘗試使用<a target="_blank" href="https://swiperjs.com/">swiper.js</a>套件功能使地圖方便使用者自由選擇喜好`,
              `3.使用<a target="_blank" href="https://interactjs.io/">interact.js</a>的套件功能 讓玩家能自由拖曳聊天框位置`,
              `4.面對各種聊天戒指的樣式，在css切圖上也花了不少時間去了解T_T`,
              ],
          addTxt: `若聊天模擬器上沒有的，歡迎加入Discord分享自己常用戒指有空之餘會再更新上去`,
          refHref:``,
          },
          {
          key: "demo" , 
          aim :"5207", 
          learn:[
              `1.777`,
              `2.5277`,
              `3.94207`,
              ],
          addTxt: "",
          refHref:[
              `1.chat GPT:<a href="https://chat.openai.com/">https://chat.openai.com/</a><span>(感謝<a href="#">A作者</a>分享)</span>`,
              `2.chat GPT2:<a href="https://chat.openai.com/">https://chat.openai.com/</a><span>(感謝<a href="#">B作者</a>分享)</span>`,
          ]
          }
      ]})    
      const workIntroBoxBool = ref(false)
      const workIntroBoxCont = ref({})
      const RouterLink = ref('')
      const handworkIntroBox = (el) =>{
          if(workIntroBoxBool.value){
              workIntroBoxBool.value = false;
              return
          }
          let txt = el.currentTarget.dataset.introtxt;
          
          console.log(txt);
      IntroBoxData.data.forEach(item => {
          if (item.key === txt){
              workIntroBoxCont.value['key'] = item.key
              workIntroBoxCont.value['aim'] = item.aim
              workIntroBoxCont.value['learn'] = item.learn
              workIntroBoxCont.value['addTxt'] = item.addTxt
              workIntroBoxCont.value['refHref'] = item.refHref
              RouterLink.value = item.link
          }
      })
      console.log(workIntroBoxCont.value);
      workIntroBoxBool.value = true
      }    

    return {
      workIntroBoxBool,
      workIntroBoxCont,
      handworkIntroBox,
      RouterLink,
    }
  }
}
</script>

<template>
  <HeaderBg />
  <div class="homeContainer" v-show="!Activitybool">
            <div class="topicTag">
                <!-- 待規劃 -->
            </div>
            <div class="topicList">
                <div class="row">
                    <li class="cloudItem">
                        <h1>聊天戒指模擬器</h1>
                        <img src="@/assets/work/01.png" alt="">
                        <div class="link">
                            <span data-introTxt="聊天戒指模擬器" @click="handworkIntroBox">Intro</span>
                            <!-- <span>See</span> -->
                            <router-link to="/work/chatRing">See</router-link>
                        </div>
                    </li>
                    <li class="cloudItem" v-if="false">
                        <h1>demo</h1>
                        <img src="" alt="">
                        <div class="link">
                            <span data-introTxt="demo" @click="handworkIntroBox">Intro</span>
                            <span>See</span>
                          </div>                        
                    </li>
                </div>
                <div class="row">
                    <li class="cloudItem"><span class="noData">Coming Soon</span></li>
                    <li class="cloudItem"><span class="noData">Coming Soon</span></li>
                </div>
            </div>

            <div class="workIntroBox" v-show="workIntroBoxBool">
              <div class="IntroCont">
                <h1>{{workIntroBoxCont.key}}</h1>
                    <p>目的: 
                        <span>{{workIntroBoxCont.aim}}</span>
                    </p>
                    <p>製作學習心得: 
                        <span v-for="list in workIntroBoxCont.learn" :key="list" v-html="list"></span>
                    </p>
                    <p class="addTxt" v-if="workIntroBoxCont.addTxt !== ''">
                        備註: 
                        <span v-html="workIntroBoxCont.addTxt"></span>
                    </p>
                    <p class="refHref" v-if="workIntroBoxCont.refHref !== ''">
                        其他製作參考連結: 
                        <span v-for="list in workIntroBoxCont.refHref" :key="list" v-html="list"></span>
                    </p>
              </div>

                    <div class="IntroBoxLink">
                        <a @click="handworkIntroBox">Close</a>
                        <router-link :to="RouterLink">See</router-link>
                        <!-- <a>See</a> -->
                    </div>                    
            </div>
        </div>
</template>


<style lang="scss" scoped>

// home
// home
.homeContainer{
  position: relative;
  z-index: 1;
  margin-top: 40px;
  // border: 1px solid #F00;
  height: 75vh;
  overflow: hidden;
  overflow-y: scroll;

  .topicTag{
    display: none;
  }
  .topicList{
    .row{
      display: flex;
      justify-content: center;
      margin-top: 20px;
      
      
      .cloudItem{
        width: 418px;
        height: 318px;
        position: relative;
        // border: 1px solid #F00;
        &::before{
          content: url(@/assets/home/cloudBg_L.png);
          top: 0;
          left: 0;
          position: absolute;

        }
        &:nth-child(odd){
          position: relative;
          left: -25px;
        }
        &:nth-child(even){
          position: relative;
          left: 25px;
          &::before{
            content: url(@/assets/home/cloudBg_R.png);
            top: 0;
            left: 0;
            position: absolute;            
          }
        }
        h1{
          position: relative;
          top: 80px;
          z-index: 2;
          max-width: 200px;
          font-size: 1.5rem;
          border-radius: 1rem;
          text-align: center;
          background-color: #ffade4;
          color: #000;
          padding: 0.3rem;
          margin: 10px auto 0;
          // color: #555;
        }
        img{
          margin-top: 90px;
          width: 200px;
          height: 100px;
          border-radius: 10px;
          box-shadow: 0 0 10px #777;
          position: relative;
          left: 50%;
          transform: translateX(-50%);
          // border: 1px solid #F00;
        }
        .link{
          position: absolute;
          top: 80%;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          justify-content: center;
          // border: 1px solid #F00;
          a,span{
            cursor: pointer;
            text-align: center;
            border: 1px solid #333;
            display: inline-block;
            max-width: 120px;
            width: 90px;
            margin-left: 10px;
            padding: 3px 0;
            color: #000;
            text-decoration: none;
            &:hover{
              background-color: #000;
              color: #FFF;

            }
          }
        }
        .noData{
          // border: 1px solid;
          width: 100%;
          font-size: 27px;
          font-weight: bold;
          text-align: center;
          position: absolute;
          top: 50%;
        }
        
      }
    }
  }
  .workIntroBox{
    position: fixed;
    z-index: 10;
    top: 90px;
    left: 50%;
    transform: translateX(-50%);
    width: 90%;
    max-width: 1200px;
    height: 70vh;
    background-color: #DDD;
    border-radius: 5px;
    .IntroBoxLink{
      position: absolute;
      bottom: 10px;
      width: 100%;
      // border: 1px solid #FF0;
      display: flex;
      justify-content: center;

      a{
        cursor: pointer;
        font-weight: bold;
        text-align: center;
        display: inline-block;
        width: 120px;
        padding: 7px 0;
        border-radius: 3px;
        margin-left: 10px;
        background-color: #FFF;
        color: #000;
        text-decoration: none;
        &:hover{
          background-color: #000;
          color: #FFF;
        }        
      }
    }
    h1{
      margin-top: 5px;
      text-align: center;
    }
    p{
      margin: 20px 10px;
      font-weight: bold;
      span{
        display: block;
        margin-top: 10px;
      }
    }
    .addTxt,.refHref{
      margin-top: 30px;
    }
    .refHref{
      a{
        padding: 0 2px;
      }

    }
    
    

  }
}
@media (max-width: 992px) { 
  .homeContainer{
    .topicList{
      .row{
        flex-wrap: wrap;
        .cloudItem{
          margin-left: 0px;
          margin-top: 10px;
          // left: -50px;
          position: relative;
          &::before{
            content: url(@/assets/home/cloudBg_L.png);
            position: absolute;
            top: 0;
            left: 0;
  
          }

        }
      }
    }
  }  

}
@media (max-width: 576px) { 
  .homeContainer{
    .topicList{
      .row{
        display: flex;
        flex-wrap: wrap;
        .cloudItem{
          margin-left: 0;
          transform: scale(0.8);
          position: absolute;
          left: 0;
          &::before{
            display: inline-block;
            content: url(@/assets/home/cloudBg_L.png);
          }

          .link{
            span{
              cursor: pointer;
              text-align: center;
              border: 1px solid #333;
              display: inline-block;
              margin-left: 10px;
              padding: 3px 0;
              &:hover{
                background-color: #000;
                color: #FFF;
  
              }
            }
          }
          .noData{
            transform: translateX(-3%);
          }
  
          
        }
      }
    }
    .workIntroBox{
      .IntroCont{
        height: 60vh;
        // border: 10px solid #FF0;
        overflow: hidden;
        overflow-y: scroll;
        &::-webkit-scrollbar{
          width: 0;
        }

      }
    }
  }  

}

</style>