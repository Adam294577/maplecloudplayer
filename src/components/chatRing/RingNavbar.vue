<script>
import { computed, onMounted, reactive, ref } from 'vue'
import { useStore } from 'vuex';
export default {
    setup () {
        const store = useStore()
        const RingNavBool = computed(()=>store.getters.RingNavBool)

        // act mode
        const RingImgData = reactive({data:[
            {idx:0, mode:"mode0" , key: "無" , url: '', act:false},
            {idx:1, mode:"mode1" , key: "貓咪線球", act:true},
            {idx:2, mode:"mode2" , key: "蝴蝶夢", act:false},
            {idx:3, mode:"mode3" , key: "粉貓貓", act:false},
            {idx:4, mode:"mode4" , key: "黑貓貓", act:false},
            {idx:5, mode:"mode5" , key: "夢幻兔子", act:false},
        ]})
        const importRingImgData = () =>{
            let ringdataNum = 5
            for (let i = 1; i <= ringdataNum; i++) {
                RingImgData.data[i].url = require(`@/assets/RingProject/ring/${i}.png`)
            }
        }
        importRingImgData()
        const ringsearch = ref("")
        const ringsearchFn = (el)=>{

                console.log(el.target.value);
                ringsearch.value =  el.target.value
        }      
        const ringListshow = computed(()=>{
          const search = RingImgData.data.filter(item=>{
                    if(item.key.indexOf(ringsearch.value) !== -1){
                        return  {idx:item.idx , key:item.key, url:item.url , act: item.act }
                    }
                })
                return search;
        })     

        const handRingSelect = (el = null) =>{
          ringsearch.value = ''
          let idx = 1
          if(el === null) {
            const selected = RingImgData.data.filter(item=>{
            if(item.idx === idx){
              return {mode:item.mode,key:item.key,url:item.url}
            }
          })
          store.dispatch('RingChange',selected)            
            return
          }
          idx = Number(el.currentTarget.dataset.ring)
          RingImgData.data.forEach(item=>{
           if(item.idx === idx){
            item.act = true
           }else{
            item.act = false
           }
          })

          const selected = RingImgData.data.filter(item=>{
            if(item.idx === idx){
              return {mode:item.mode,key:item.key,url:item.url}
            }
          })
          store.dispatch('RingChange',selected)
          store.dispatch('handRingNavBool','close')
         
        }
        const RingSelectCancel = () =>{
          store.dispatch('handRingNavBool','close')
        }
        
        onMounted(()=>{
          handRingSelect()
        })
        

        return {
          ringListshow,
          handRingSelect,
          ringsearchFn,
          ringsearch,
          RingNavBool,
          RingSelectCancel
        }
    }
}
</script>
<template>
<aside :class="['navContainer',{'open':RingNavBool} ]" >
    <input 
    v-model="ringsearch"
    @keyup="ringsearchFn"
    type="text" placeholder="收尋要找的聊天戒指">
    <div class="navCross" 
    @click="RingSelectCancel"
    >
        <div class="bar"></div>
        <div class="bar bar2"></div>
    </div>
    <nav class="ringList">
        <li 
        @click="handRingSelect"
        :data-ring="list.idx"
        :class="['item',{'act':list.act}] "
        v-for="list in ringListshow" :key="list.key">
            <img :src="list.url" alt="">
            <span>{{list.key}}</span>
        </li>
    </nav>
</aside>
</template>



<style lang="scss" scoped>
.navContainer{
  position: fixed;
  z-index: 100;
  width: 270px;
  // height: 200px;
  height: 92vh;
  left: -300px;
  background-color: #444;
  box-shadow: 0 0 10px #555;
  overflow-y: scroll;
  overflow-x: hidden;
  transition: 0.3s;
  &::-webkit-scrollbar{
    width: 10px;
  }
  &::-webkit-scrollbar-thumb{
    width: 3px;
    border-radius: 5px;
    background-color: #777;
  }
  &.open{
    left: 0px;
  }
  .navCross{
    cursor: pointer;
    position: absolute;
    right: 10px;
    top: 10px;
    width: 30px;
    height: 30px;
    // border: 1px solid #F00;
    .bar{
      position: absolute;
      background-color: #fff;
      width: 26px;
      height: 4px;
      border-radius: 3px;
      transform: translate(-50%,-50%) rotate(45deg);
      top: 50%;
      left: 50%;

    }
    .bar2{
      transform: translate(-50%,-50%) rotate(-45deg);
    }
  }
  input{
    padding: 3px;
    padding-left: 10px;
    border-radius: 3px;
    position: absolute;
    left: 5px;
    top: 15px;
    height: 30px;
    width: 200px;
    &:focus{
      outline: none;
    }
  }
  .ringList{
    position: absolute;
    top: 60px;
    width: 270px;
    li{
      display: block;
      width: 100%;
      cursor: pointer;
      height: 50px;
      line-height: 50px;
      user-select: none;
      color: #FFF;
      &.act{
        background-image: url(~@/assets/symbol/check.png);
        background-repeat: no-repeat;
        background-size: 20px;
        background-position: 90% 40%;
      }
      img{
        padding-left: 10px;
      }
      span{
        position: absolute;
        left: 55px;
      }
    }
  }
}
</style>