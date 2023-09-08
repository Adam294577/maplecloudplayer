<script>
import { reactive, ref , onMounted , onUpdated, computed} from 'vue'
import { useStore } from 'vuex';


import goldApple from '@/components/MapleActivity/goldApple.vue'
import fashion from '@/components/MapleActivity/fashion.vue'
import dressing from '@/components/MapleActivity/dressing.vue'
import pet from '@/components/MapleActivity/pet.vue'
import cuteMos from '@/components/MapleActivity/cuteMos.vue'
import crystal from '@/components/MapleActivity/crystal.vue'
import frame from '@/components/MapleActivity/frame.vue'
import Pandora from '@/components/MapleActivity/Pandora.vue'
import starTable from '@/components/MapleActivity/starTable.vue'


export default { 
  components:{
    goldApple,
    fashion,
    dressing,
    pet,
    cuteMos,
    crystal,
    frame,
    Pandora,
    starTable,
    
  },
    setup(){
        // import All ActivityImg
        const store = useStore()
        
        const ActivityImgArr = []
        const ActivityIdx = 15

        const handActivityImg = () =>{
            for (let i = 0; i <= ActivityIdx; i++) {
                ActivityImgArr.push({
                    icon: require(`@/assets/MapleActivity/${i}.png`), 
                    banner: require(`@/assets/MapleActivity/${i}_banner.png`)
                })
            }
        }
        handActivityImg()
        const imgOnload= (arr) =>{

          arr = ActivityImgArr
            let loadImg = new Image()
            arr.forEach(item =>{
                loadImg = new Image()
                loadImg.src = item.banner
            })
        }    
        imgOnload()    
        
        
        
            // Activitybool
            // const Activitybool = ref(false)
            const Activitybool = computed(()=>{return store.getters.Activitybool})
            const handActivitybool = () =>{
              store.dispatch('handActivitybool')
              scrollContainer.value.scrollTop = 0;
            }
            // const handActivitybool = () =>{
            //     Activitybool.value = !Activitybool.value
            //     mapleActivity.scrollTop = 0;
            // }

 
            // ActivityTag
            const ActivityTagData = ref([
                {idx:0 ,  zoomIn:false , key:"黃金蘋果" ,class: "goldAppleTag" , url: `${ActivityImgArr[0].icon}`, act: true,show: true },
                {idx:1 ,  zoomIn:false , key:"時尚隨機箱" ,class: "fashionTag" , url: `${ActivityImgArr[1].icon}`, act: false,show: true },
                {idx:2 ,  zoomIn:false , key:"皇家美容院" ,class: "dressingTag" , url: `${ActivityImgArr[2].icon}`, act: false,show: true },
                {idx:3 ,  zoomIn:false , key:"寵物隨機箱" ,class: "petTag" , url: `${ActivityImgArr[3].icon}`, act: false,show: true },
                {idx:4 ,  zoomIn:false , key:"萌獸卡牌包" ,class: "cuteMosTag" , url: `${ActivityImgArr[4].icon}`, act: false,show: true },
                {idx:5 ,  zoomIn:false , key:"魔法馬車" ,class: "cartTag" , url: `${ActivityImgArr[5].icon}`, act: false,show: false },
                {idx:6 ,  zoomIn:false , key:"魔法畫框" ,class: "frameTag" , url: `${ActivityImgArr[6].icon}`, act: false,show: false },
                {idx:7 ,  zoomIn:false , key:"潘朵拉箱子" ,class: "pandoraTag" , url: `${ActivityImgArr[7].icon}`, act: false,show: false },
                {idx:8 ,  zoomIn:false , key:"月光水晶" ,class: "crystalTag" , url: `${ActivityImgArr[8].icon}`, act: false,show: false },
                {idx:9 ,  zoomIn:false , key:"愛美組合包" ,class: "beautyTag" , url: `${ActivityImgArr[9].icon}`, act: false,show: false },
                {idx:10 , zoomIn:false ,  key:"星光錦囊" ,class: "starTag" , url: `${ActivityImgArr[10].icon}`, act: false,show: false },
                {idx:11 , zoomIn:false ,  key:"結合方塊" ,class: "combineTag" , url: `${ActivityImgArr[11].icon}`, act: false,show: false },
                {idx:12 , zoomIn:false ,  key:"時裝套組" ,class: "frameSetTag" , url: `${ActivityImgArr[12].icon}`, act: false,show: false },
                {idx:13 , zoomIn:false ,  key:"覺醒星火" ,class: "sparkTag" , url: `${ActivityImgArr[13].icon}`, act: false,show: false },
                {idx:14 , zoomIn:false ,  key:"咖波in楓之谷" ,class: "consumptionTag" , url: `${ActivityImgArr[14].icon}`, act: false,show: true },
                {idx:15 , zoomIn:true ,  key:"恢復附加方塊" ,class: "recoverTag" , url: `${ActivityImgArr[15].icon}`, act: false,show: false },
            ])
            const ActivitySelected = ref([{key:"黃金蘋果", bannerUrl: `${ActivityImgArr[0].banner}`,bannerZoomIn: false}] )

            const handActivityTag = (el) =>{
                let target = el.currentTarget.dataset.tag
                ActivityTagData.value = ActivityTagData.value.map(item=>{
                    if(target === item.key){
                        ActivitySelected.value[0].key = item.key;
                        ActivitySelected.value[0].bannerUrl = `${ActivityImgArr[item.idx].banner}`;
                        ActivitySelected.value[0].bannerZoomIn =item.zoomIn;
                        return {idx:item.idx, zoomIn:item.zoomIn,key: item.key ,class: item.class , url: item.url , act: true,show:item.show }
                    }else {
                        return {idx:item.idx, zoomIn:item.zoomIn,key: item.key ,class: item.class , url: item.url , act: false,show:item.show}
                    }
                })
            }

                
                // 近期活動 - scroll Event
                const scrollContainer = ref(null);
                const scrollValue = ref(0);
                function onScroll() {
                    scrollValue.value = scrollContainer.value.scrollTop;
                  }        
                  const handscrollTop = () =>{
                      scrollContainer.value.scrollTop = 0
                  }                
                              

                onMounted(() => {
                  scrollValue.value = scrollContainer.value.scrollTop;
                });

                // 使用onUpdated來在組件更新後檢測滾動變化
                onUpdated(() => {
                  onScroll()
                });


    
            return{ 
                // Activitybool
                Activitybool,
                handActivitybool,                
                // ActivityTag
                ActivityTagData,
                ActivitySelected,
                handActivityTag,
                // Activityscroll
                scrollContainer,
                scrollValue,
                onScroll,
                handscrollTop,

                // 活動機率
                goldApple,
                fashion,
                dressing,
                pet,
                cuteMos,
                crystal,
                frame,
                Pandora,
                starTable,

            }   
        }
}
</script>
<template>
<!-- <div class="ActivityContainer" v-show="Activitybool"> -->
<div class="ActivityContainer" v-show="Activitybool">
            <div 
            @click="handActivitybool"
            class="Activitycrossbox">
                <div class="bar"></div>
                <div class="bar bar2"></div>
            </div>
            <div 
            @click="handscrollTop"
            :class="['ActivityscrollTop', {'show': scrollValue !== 0}]">
            <span>Top</span>
            </div>
            <div 
           @scroll.passive="onScroll"
            class="mapleActivity" id="mapleActivity" ref="scrollContainer">
                <div class="modeTag">
                    <div class="modeTxt">{{"latest"}}</div>
                    <!-- history -->
                </div>
                <div class="latestContainer">
                    <div class="title">近期官網活動</div>
                    
            <div class="Activitydate">
                <span class="txt">最後更新日期</span>
                <span class="txt">2023.09.08</span>
            </div>                      
                    <div class="contentTag">
                        <li 
                        v-for="list in ActivityTagData"
                        :key="list.key"
                        :data-tag="list.key" 
                        @click="handActivityTag"
                        :class="[list.class,{'act': list.act}]"
                        v-show="list.show"
                        >
                        <img :src="list.url" :alt="list.key">
                        <span class="contentTxt">{{list.key}}</span>
                        </li>
                    </div>
    
                    <div class="content">
     
                       <img :class="['banner',{'zoomIn': ActivitySelected[0].bannerZoomIn }]" :src="ActivitySelected[0].bannerUrl" alt="">
                      <!-- 咖波活動 -->
                      <div class="capoo" v-show="ActivitySelected[0].key === '咖波in楓之谷'">
                       <span>詳細活動: <a target="_blank" href="https://maplestory.beanfun.com/bulletin?bid=66706">連結</a></span>
                      </div>

                       <!-- 黃金蘋果 -->
                       <div class="ProbabilityBox goldApple" v-show="ActivitySelected[0].key === '黃金蘋果'">
                       <goldApple/>
                      </div>

     
                      <!-- 時尚箱 -->
                       <div class="ProbabilityBox fashion" v-show=" ActivitySelected[0].key === '時尚隨機箱' ">
                        <fashion/>
                       </div>
                       <!-- 皇家美容院 -->
                        <div class="ProbabilityBox dressing" v-show=" ActivitySelected[0].key === '皇家美容院' ">
                          <dressing/>
                        </div>
                       <!-- 寵物 -->
                        <div class="ProbabilityBox pet" v-show=" ActivitySelected[0].key === '寵物隨機箱' ">
                          <pet/>
                        </div>
                       <!-- 萌獸 -->
                        <div class="ProbabilityBox cuteMos" v-show=" ActivitySelected[0].key === '萌獸卡牌包' ">
                          <cuteMos/>
                        </div>
                       <!-- 月光水晶 -->
                        <div class="ProbabilityBox crystal" v-show=" ActivitySelected[0].key === '月光水晶' ">
                          <crystal/>
                        </div>
                       <!-- 魔法畫框 -->
                        <div class="ProbabilityBox frame" v-show=" ActivitySelected[0].key === '魔法畫框' ">
                          <frame/>
                        </div>
                       <!-- 潘朵拉箱子 -->
                        <div class="ProbabilityBox Pandora" v-show=" ActivitySelected[0].key === '潘朵拉箱子' ">
                          <Pandora/>
                        </div>
                       <!-- 星光錦囊 -->
                        <div class="ProbabilityBox Star" v-show=" ActivitySelected[0].key === '星光錦囊' ">
                          <starTable/>
                        </div>
                    </div>
                    
                </div>
                <div class="historyContainer" v-show="false">
                </div>
            </div>

</div>   
</template>



<style lang="scss">
// activity
.Activitycrossbox{
  cursor: pointer;
  position: fixed;
  right: 12vw;
  top: 80px;
  width: 30px;
  height: 30px;
  z-index: 1000;
  // border: 1px solid #FFF;
  .bar{
    position: absolute;
    top: 50%;
    left: 50%;
    width: 26px;
    height: 4px;
    border-radius: 3px;
    background-color: #FFF;
    transform: translate(-50%,-50%) rotate(45deg);
    &.bar2{
      transform: translate(-50%,-50%) rotate(-45deg);
    }
  }
}  
.ActivityscrollTop{
  cursor: pointer;
  position: fixed;
  right: 12vw;
  bottom: 6vh;
  width: 40px;
  height: 40px;
  z-index: 1200;
  background-color: #FFF;
  border-radius: 100%;
  transition: 0.3s;
  opacity: 0;
  &.show{
    transition: 0.2s;
    opacity: 0.7;
  }
  span{
    font-weight: bold;
    font-size: 9px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
  }
  &:hover,.act{
    background-color: #000;
    span{
      color: #FFF;
    }
  }
}

.mapleActivity{
    // user-select: none;
    position: fixed;
    z-index: 999;
    width: 80vw;
    height: 90vh;
    left: 50%;
    top: 5%;
    transform: translateX(-50%);
    overflow-y: scroll;
    // border: 1px solid #FFF;
    background-color: #e2ccb5;
    border-radius: 10px;
    padding-bottom: 5rem;

  &::-webkit-scrollbar{
    width: 5px;
    background-color: transparent;
    
  }
  &::-webkit-scrollbar-thumb{
    background-color: #777;
    border-radius: 10px;

  }
  &::-webkit-scrollbar-button{
    display: none;
  }
  &::-webkit-scrollbar-track-piece{
    display: none;
  }
  .modeTag{
    position: absolute;
    width: 130px;
    height: 70px;
    left: -131px;
    top: 7px;
    background-color: #00568f;
    .modeTxt{
      user-select: none;
      cursor: pointer;
      line-height: 70px;
      color: #FFF;
      font-size: 27px;
      font-weight: bold;
      text-align: center;
      display: none;
    }
  }
}
.capoo{
  text-align: center;
  padding-top: 1rem;
  font-weight: bold;
}
.latestContainer{
  .title{
    padding-top: 1rem;
    font-size: 30px;
    font-weight: bold;
    text-align: center;
  }
  .contentTag{
    margin-top: 10px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    li{
      // border: 1px solid #F00;
      cursor: pointer;
      width: 100px;
      height: 50px;
      margin: 7px;
      position: relative;
      // border: 1px solid #F00;
      &.act{
        &::after{
          content: '';
          color: #000;
          text-shadow: 0 0 3px #FFF;
        }
        img{
          opacity: 1;
        }
      }
      img{
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        width: 50px;
        height: 50px;
        opacity: 0.4;
      }
      &::after{
        content: '';
        font-weight: bold;
        position: absolute;
        top: 100%; 
        width: 100%;
        text-align: center;
        color: #777;
      }

    }
    .contentTxt{
      position: absolute;
      left: 50%;
      top: 100%;
      transform: translateX(-50%);
      display: inline-block;
      width: 100px;
      text-align: center;
    }
  }
  .content{
    
    .banner{
      display: block;
      // border: 1px solid #F00;
      width: 100%;
      max-width: 600px;
      // max-height: 600px;
      margin: auto;
      margin-top: 20px;
      // opacity: 0;
      &.zoomIn{
        max-width: 1200px;
      }
    }
    .ProbabilityBox{
      .title{
        position: relative;
      }
      .refHref{
        width: 100%;
        font-size: 16px;
        .author{
          display: inline;
          font-size: 18px;
          font-weight: bold;
        }
        span{
          display: block;
          text-align: center;

        }
        a{
          display: inline-block;
          padding:  0 10px;
        }
      }         
      .ProbabilityTable{
        display: flex;
        justify-content: center;
        ul{
          width: 48%;
          margin: auto;
          margin-top: 10px;
          max-width: 600px;
          .remindTxt{
            font-size: 14px;
            text-align: center;
            margin-bottom: 7px;
            .mark{
              display: inline-block;
              padding: 0px 5px;
            }
            .framesort{
              background-color: #ffffffb2;
              border-radius: 5px;
              padding: 0 20px;
              width: 130%;
              position: relative;
              left: -15%;
              margin: 5px;
              span{
                // border: 1px solid #F00;
                display: block;
                // text-align: center;
                position: relative;
                left: -13%;
                width: 126%;
                padding: 1%;
              }
            }
          }
          .itemTitle{
            background-color: #f1bf8a;
          }
          li{
            border: 1px solid #000;
            display: flex;
            padding: 5px;
            span{
              text-align: center;
              width: 50%;
              font-weight: bold;
            }
          }
        }
      }

      &.goldApple{
        ul{
          li{
            span{
              width: 33%;
            }
          }
        }
      }
      &.fashion{
        ul{
          max-width: 500px;          
        }
      }
      &.dressing,&.fashion{
        ul{
          li{
            span{
              width: 50%;
            }
          }
        }        

      }
      &.Star{

        ul{
          max-width: 1400px;
          width: 24%;
          &:nth-child(1){
            width: 90%;
          }
          li{
            span{
              &:nth-child(1){
                width: 80%;
              }
              width: 20%;
            }
          }
        }        

      } 
      &.fashion,&.dressing,&.Star{
        .ProbabilityTitle{
          background-color: #f1bf8a;
          font-size: 22px;
          text-align: center;
          border: 1px solid;          
        }
      }
    }

  }

}
.Activitydate{
  text-align: center;
  span{
    font-size: 0.8rem;
  }
  .txt{
    padding-top: 1rem;
    padding-left: 10px;
  }
}  



@media (max-width: 768px) { 
  .latestContainer{
    .contentTag{
      li{
        width: 23%;
        margin-top: 20px;
      }
    }    
    .content{
      .ProbabilityBox{
        .ProbabilityTable{
          display: flex;
          justify-content: center;
          flex-wrap: wrap;            
          ul{
            width: 90%;
            margin: auto;
            margin-top: 30px;
            max-width: 500px;              
          }
        }
      }
    }  
  }    
}

@media (max-width: 576px) { 
  .latestContainer{
    .content{
      .ProbabilityBox{
 
        &.pet,&.cuteMos,&.fashion,&.dressing,&.Star{
          ul{
            li{
              span{
                width: 50%;
              }
            }
          }
        }                          
      }

    }

  }    
  .mapleActivity{
    width: 100vw;
  }  
  .Activitydate{
    width: 100vw;
    bottom: 3vh;
  }
}

</style>