<script>
import { computed } from 'vue';
import { useStore } from 'vuex';
export default {
    setup () {
      const store = useStore()
      const FooterDate = computed(()=>{return store.getters.FooterDate})
      const Activitybool = computed(()=>{return store.getters.Activitybool})
      


        return {
          FooterDate,
          Activitybool
        }
    }
}
</script>



<template>
        <footer v-show="!Activitybool">
            <span id="updatetime">
                <h1>本頁更新日期:</h1>
                <span>{{ FooterDate }}</span>
            </span>
            <span id="copyright">© 2023  池雲寅 - 轉載文章時請附上作者(池雲寅)及原文連結(Url)。</span>
        </footer>
</template>


<style lang="scss" scoped>
footer{
  background-color: #000;
  position: fixed;
  z-index: 2;  
  bottom: 0;
  width: 100%;
  color: #FFF;
  span{
    font-size: 9px;
  }
  #updatetime{
    h1{
      display: inline;
      padding-left: 20px;
      font-size: 13px;
    }
    span{
      padding-left: 20px;
      position: relative;
      top: -1px;
    }
  }
  #copyright{
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    text-align: center;
  }

}
@media (max-width: 768px) { 
  footer{
    background-color: #000;
    padding: 10px;
    position: fixed;
    z-index: 2;  
    bottom: 0;
    width: 100%;
    color: #FFF;
    span{
      font-size: 9px;
    }
    #updatetime{
      display: block;
      text-align: center;
      position: relative;
      top: -7px;
      h1{
        display: inline;
        padding-left: 20px;
        font-size: 13px;
      }
      span{
        padding-left: 20px;
        position: relative;
        top: -1px;
      }
    }
    #copyright{
      width: 100%;
      position: absolute;
      left: 50%;
      top: 90%;
      transform: translate(-50%,-90%);
      text-align: center;
    }
  
  }  
}

</style>