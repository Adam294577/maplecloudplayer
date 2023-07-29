<script>
import { computed, onMounted, ref , onBeforeUnmount } from 'vue';
import { useStore } from 'vuex';
export default {

    setup () {
      const store = useStore()
      const Activitybool = computed(()=>{return store.getters.Activitybool})
      const handActivitybool = (el) =>{
              if(Activitybool.value === true){
                return;
              }
              store.dispatch('handActivitybool')
            }
      // headerMenu            
      const headerMenubool = ref(true)
      const handheaderMenu = () =>{
          headerMenubool.value = !headerMenubool.value
      }
      const headerWindowWidth = ref(window.innerWidth);
      const handleResize = () => {
        headerWindowWidth.value = window.innerWidth;
        headerMenubool.value = headerWindowWidth.value < 576 ? false : true
      };
      onMounted(()=>{
        handleResize()
        window.addEventListener('resize', handleResize);
      })
      onBeforeUnmount(() => {
                    window.removeEventListener('resize', handleResize);
      });       
        return {
          Activitybool,
          handActivitybool,
          headerMenubool,
          handheaderMenu,

        }
    }
}
</script>

<template>
        <header v-show="!Activitybool">
            <!-- <div class="headerMenu" v-show=""> -->
            <div class="headerMenu" @click="handheaderMenu">
                <div class="bar bar1"></div>
                <div class="bar bar2"></div>
                <div class="bar bar3"></div>
            </div>
            <div class="headercross" @click="handheaderMenu" v-show="headerMenubool">
            <!-- <div class="headercross" v-show=""> -->
                <div class="bar bar1"></div>
                <div class="bar bar2"></div>
            </div>
            <ul class="headerList" v-show="headerMenubool">
            <!-- <ul class="headerList" v-show=""> -->
             
                <li class="home"> <router-link to="/">首頁</router-link></li>
                <li><a href="#" @click.prevent="handActivitybool">官網近期活動</a></li>
                <li><router-link to="/about">About me</router-link></li>
                <li><a href="https://discord.gg/SNkpEWxvU3" target="_blank">Discord</a></li>
            </ul>
        </header>
</template>


<style lang="scss" scoped>

  // hrader
  header{
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    background-color: #000;
    height: 40px;
    z-index: 777;
    .headerMenu{
      display: none;
    }
    .headerList{
      margin: 0 auto;
      display: flex;
      justify-content: end;
      align-items: center;
      p{
        color: #FFF;
      }
  
      li{
        width: 120px;
        // border: 1px solid #F00;
        font-weight: bold;
        height: 100%;
        text-align: center;
        padding-top: 7px;
        
        &:last-child{
          margin-right: 20px;
        }
        &.home{
          position: absolute;
          top: 0;
          left: 0px;
        }
        a{
          // border: 1px solid #F00;
          font-size: 18px;
          text-align: center;
          width: 100%;
          margin-top: 10px;
          color:#FFF;
          text-decoration: none;
          position: relative;
          &:hover{
            color: rgb(255, 25, 133);
          }
        }
    }
    }

}
@media (max-width: 576px) { 
  header{
    background-color: transparent;
    z-index: 2;
    .headerMenu{
      position: fixed;
      top: 10px;
      right: 10px;
      display: block;
      width: 50px;
      height: 50px;
      cursor: pointer;
      .bar{
        position: absolute;
        width: 30px;
        height: 3px;
        background-color: #fff;
        border-radius: 3px;
        &.bar1{
          top: 0;
        }
        &.bar2{
          top: 7px;
        }
        &.bar3{
          top: 14px;
        }
      }
      
    }
    .headercross{
      cursor: pointer;
      position: fixed;
      right: 10px;
      top: 10px;
      width: 30px;
      height: 30px;
      z-index: 10;
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
      &:hover{
        .bar{
          background-color: rgb(255, 25, 133);
        }
      }

    }
    .headerList{
      display: flex;
      flex-direction: column;
      background-color: #000000;
      width: 300px;
      position: absolute;
      right: 0;
      align-items: start;
      border-radius: 10px 0 0 10px;

  
      li{
        width: 120px;
        // border: 1px solid #F00;
        font-weight: bold;
        height: 50px;
        text-align: left;
        padding-top: 20px;
        margin-left: 40px;
        
        &:last-child{
          margin-right: 0px;
          margin-bottom: 20px;
        }
        &.home{
          position: fixed;
          top: -10px;
          left: 0px;
          a{
            color: #FFF;
          }
        }
        a{
          font-size: 18px;
          width: 100%;
          margin-top: 10px;
          // color:#000;
          color: #FFF;
          text-decoration: none;
          position: relative;
          &:hover{
            color: rgb(255, 25, 133);
          }
        }
    }
    }

} 
}




</style>