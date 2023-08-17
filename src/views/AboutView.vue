<script>
import HeaderBg from '@/components/HeaderBg.vue'
export default {
  components:{
    HeaderBg,
  },  
  setup () {
    

    return {}
  }
}
</script>

<template>
  <HeaderBg />
        <div class="aboutContainer" v-show="true">
        <!-- <div class="aboutContainer" v-show=""> -->
            <div class="aboutImg">
                <div class="aboutCard">
                    <img src="@/assets/about/rolecard.png" alt="">
                </div>
            
            
                <div class="aboutCard">
                    <img src="@/assets/about/rolecard2.png" alt="">
                </div>
         
            </div>

            <div class="content">
                <p>我是池雲寅，也可以叫我阿貴就行</p>
                <p>來自琉德的雲玩家，目前嘗試學習各知識的前端工程師(F2E)</p>
                <p>希望自己學習過程中也能夠將遊戲雲知識分享給各位所開發的網站~</p>
                <p>有興趣者 歡迎加入 <a target="_blank" href="https://discord.gg/SNkpEWxvU3">Discord</a>  ^_^</p>
            </div>
        </div>  
</template>



<style lang="scss" scoped>

// about
.aboutContainer{
  width: 90vw;
  position: absolute;
  margin: 70px;
  .aboutImg{
      display: flex;
      justify-content: center;
      margin-bottom: 30px;
      .aboutCard{
          width: 300px;
          margin-left: 30px;
          display: flex;
          flex-direction: column;
          align-items: center;
          img{
              width: 271px;
              height: 226px;
          }
      }
  }
  .content{
      background-color: #000;
      box-shadow: 0 0 7px #777;
      border-radius: 3px;
      margin: 0 auto;
      width: 700px;
      p{
          font-weight: bold;
          color: #FFF;
          line-height: 20px;
          padding: 18px;
          a{
              display: inline-block;
              color: #FFF;
              text-decoration: none;
              border-bottom: 1px solid #FFF;
              

              &:hover{
                text-shadow: 0 0 15px #e8b39d,0 0 15px #e8b39d;
                //   border-bottom: 1px solid rgb(255, 25, 133);
              }
          }
      }
      
  }
}

@media (max-width: 576px) { 
.aboutContainer{
  width: 100%;
  position: absolute;
  left: -15%;
  .aboutImg{
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      margin-bottom: 10px;
      .aboutCard{
          width: 300px;
          margin-left: 30px;
          display: flex;
          flex-direction: column;
          align-items: center;

          img{
              width: 271px;
              height: 226px;
              margin-bottom: 30px;
          }
      }
  }
  .content{
      background-color: #000;
      box-shadow: 0 0 7px #777;
      border-radius: 3px;
      margin: 0 auto;
      width: 300px;
      margin-bottom: 50px;
      position: relative;
      left: 9px;
      p{
          font-weight: bold;
          color: #FFF;
          line-height: 20px;
          padding: 18px;
          a{
              color: #FFF;
              text-decoration: none;
              &:hover{
                text-shadow: 0 0 15px #e8b39d,0 0 15px #e8b39d;
              }
          }
      }
      
  }
}    
}



</style>