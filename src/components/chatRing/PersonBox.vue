

<script>
import { computed, reactive } from 'vue';
import { useStore } from 'vuex';

import WhiteCross from '@/components/WhiteCross.vue'
export default {
  components:{
    WhiteCross
  },  
    setup () {
      const store = useStore();
      
      const  personBoxBool = computed(()=>store.getters.personBoxBool)
      const handpersonBoxBool = (el) =>{
        let txt = el.currentTarget.dataset.txt
        store.dispatch('handpersonBoxBool',txt)
      }
      const RoleImg = reactive({data:[
        
      ]})
      const importRoleImg = ()=>{
        for (let i = 1; i <= 10; i++) {
          RoleImg.data.push({
            idx: i , url:require(`@/assets/RingProject/role/cos${i}.png`)
          })
        }
      }
      importRoleImg()
      const handRoleSelected = (el = null) =>{
        let idx = 7
        let roleUrl = []
        if(el === null) {
          roleUrl = RoleImg.data.filter(item=>{
            if(item.idx === idx){
              return {idx:item.idx, url:item.url}
            }
          })
          store.dispatch('RoleSelected',roleUrl[0].url)

          return;
        }
        idx = Number(el.currentTarget.dataset.alt)
        roleUrl = RoleImg.data.filter(item=>{
            if(item.idx === idx){
              return {idx:item.idx, url:item.url}
            }
          })        
        store.dispatch('RoleSelected',roleUrl[0].url)
        
      }
      handRoleSelected()
    

        return {
          RoleImg,
          handRoleSelected,
          personBoxBool,
          handpersonBoxBool
        }
    }
}
</script>
<template>
    <div class="personBox" v-show="personBoxBool">
      <WhiteCross data-txt="close" id="personBoxCross" @click="handpersonBoxBool"/>      
      <ul class="personList">
       
        <li v-for="list in RoleImg.data" @click="handRoleSelected" :data-alt="list.idx">
        <img :src="list.url" :alt="list.idx">
      </li>
      </ul>
    </div>
</template>
<style lang="scss" scoped>
#personBoxCross{
  position: absolute;
  right: 20px;
}
// personBox
.personBox{
  position: fixed;
  z-index: 10;
  left: 101%;
  top: -255%;
  max-width: 500px;
  width: 100%;
  height: 500px;
  background-color: #999;
  border-radius: 10px;
  ul{
    margin-top: 50px;
    display: flex;
    flex-wrap: wrap;
    li{
      cursor: pointer;
      position: relative;
      border-radius: 4px;
      background-color: #EEE;
      width: 90px;
      height: 90px;
      margin: 10px;
      box-shadow: 0 0 7px #888;
      &.act{
        box-shadow: 0 0 7px #fff455 ;

      }
      &:nth-child(4n+1){
        margin-left: 40px;
      }

      img{
        width: 70px;
        height: 90px;
        display: block;
        position: absolute;
        left: 50%;
        transform: translate(-50%,-5%);
      }
    }
  }
}
@media (max-width: 992px) { 
  .personBox{
    left: 0;
    top: 100%;
    width: 100%;
    max-width: 1000px;
    border-radius: 0 0 10px;
    padding-bottom: 50px;
    ul{
      li{
        &:nth-child(4n+1){
        margin-left: 0px;
        }        
        // margin: 10px;
        &:nth-child(7n+1){
          margin-left: 10px;
        }
        &:nth-child(8n+1){
          margin-left: 40px;
        }
      }
    }
  }
}
@media (max-width: 922px) { 
  .personBox{
    ul{
      li{
        &:nth-child(8n+1){
          margin-left: 10px;
        }
        &:nth-child(7n+1){
          margin-left: 40px;
        }

      }
    }
  }
}
@media (max-width: 816px) { 
  .personBox{
    ul{
      li{
        &:nth-child(7n+1){
          margin-left: 10px;
        }
        &:nth-child(6n+1){
          margin-left: 40px;
        }

      }
    }
  }
}
@media (max-width: 706px) { 
  .personBox{
    ul{
      li{
        &:nth-child(6n+1){
          margin-left: 10px;
        }
        &:nth-child(5n+1){
          margin-left: 40px;
        }

      }
    }
  }
}
@media (max-width: 596px) { 
  .personBox{
    ul{
      li{
        &:nth-child(5n+1){
          margin-left: 10px;
        }
        &:nth-child(4n+1){
          margin-left: 40px;
        }

      }
    }
  }
}
@media (max-width: 486px) { 
  .personBox{
    ul{
      li{
        &:nth-child(4n+1){
          margin-left: 10px;
        }
        &:nth-child(3n+1){
          margin-left: 40px;
        }

      }
    }
  }
}
@media (max-width: 376px) { 
  .personBox{
    ul{
      li{
        &:nth-child(3n+1){
          margin-left: 10px;
        }
        &:nth-child(2n+1){
          margin-left: 40px;
        }

      }
    }
  }
}
</style>