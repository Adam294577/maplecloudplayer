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
            <router-link to="/">
            <div class="logo">
                <div class="maple">
                    <img src="@/assets/logo/maple.png" alt="">
                    <img src="@/assets/logo/maple_blur.png" alt="">
                </div>
                <div class="cloud">
                    <img src="@/assets/logo/cloud_l.png" alt="">
                    <img src="@/assets/logo/cloud_r.png" alt="">
                </div>
                <div class="light">
                    <img src="@/assets/logo/light.png" alt="">
                </div>
            </div>              
            </router-link>
            <ul class="headerList" v-show="headerMenubool">
            <!-- <ul class="headerList" v-show=""> -->
             
              
                <li><a href="#" @click.prevent="handActivitybool">官網近期活動</a></li>
                <li class="home"> <router-link to="/">Home</router-link></li>
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
    height: 75px;
    z-index: 777;
    .headerMenu{
      display: none;
    }
    .headerList{
      margin: 0 auto;
      display: flex;
      justify-content: end;
      align-items: center;
      position: absolute;
      top: 0;
      right: 10px;
      p{
        color: #FFF;
      }
  
      li{
        width: 120px;
        // border: 1px solid #F00;
        font-weight: bold;
        height: 100%;
        text-align: center;
        padding-top: 23px;
        
        &:last-child{
          margin-right: 20px;
        }
        &.home{
          display: none;
          a{
            display: inline;
          }
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
           text-shadow: 0 0 15px #e8b39d,0 0 15px #e8b39d;
       
          }
        }
    }
    }

}
@media (max-width: 576px) { 
  header{
    background-color: transparent;
    .headerMenu{
      position: fixed;
      top: 15px;
      right: 15px;
      display: block;
      width: 50px;
      height: 50px;
      cursor: pointer;
      background-color: #222;
      border-radius: 50px;
      .bar{
        position: absolute;
        width: 30px;
        height: 3px;
        background-color: #fff;
        border-radius: 3px;
        left: 50%;
        transform: translateX(-50%);
        &.bar1{
          top: 14px;
        }
        &.bar2{
          top: 21px;
        }
        &.bar3{
          top: 28px;
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
          box-shadow: 0 0 15px #e8b39d,0 0 15px #e8b39d;
        }
      }

    }
    .headerList{
      display: flex;
      flex-direction: column;
      background-color: #000000;
      top: 0;
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
          display: block;
          a{
            display: inline;
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
            text-shadow: 0 0 15px #e8b39d,0 0 15px #e8b39d;
          }
        }
    }
    }

} 
}

// logo
.logo{
  user-select: none;
  position: fixed;
  top: 0;
  width: 120px;
  height: 100%;
  // border: 1px solid #F00;
  margin-left: 10px;
  position: relative;
  overflow: hidden;
  cursor: pointer;
  img{
      position: absolute;
      left: -15px;
  }
  .maple{
      img{
          &:nth-child(1){
              z-index: 3;   
          }
          &:nth-child(2){
              transition: 0.5s;
              z-index: 3;
              opacity: 0;
          }
      }
  }
  .cloud{
      img{
          z-index: 2;
          transition: 0.7s;
          transform: translateX(0px);
          opacity: 1;                
      }
  }
  .light{
      img{
          transition: 0.5s;
          opacity: 0;
         
      }
  }
}    
.logo:hover{
       
        .maple{
            img{
                &:nth-child(2){
                    opacity: 1;
                }
            }
        }
        .cloud{
            img{
                &:nth-child(1){
                    opacity: 0;
                    transform: translateX(-50px);
                }
                &:nth-child(2){
                    opacity: 0;
                    transform: translateX(50px);
                }
            }
        }
        .light{
            img{
                opacity: 1;
            }
            
        }        
}
@media (max-width: 576px) {
  .logo{
    display: none;
  }
}



</style>