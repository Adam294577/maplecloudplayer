<script>
import PersonBox from '@/components/chatRing/PersonBox.vue'
import { computed, onUpdated, ref } from 'vue';
import { useStore } from 'vuex';
export default {
    components:{
        PersonBox,
    },
    setup () {
      const store = useStore();

      const game_id = computed(()=>store.getters.game_id)
      const handGameID = (el) =>{
        store.dispatch('handGameID',el.target.value)
      }
      // ID字數限制
      const gameIDcount = ref(0)
      const gameIDAlert = ref(false)
      function checkInput(el) {
        
        let punctuationCount = (el.target.value.match(/[\p{P}\u2000-\u206F\u2E00-\u2E7F\u3000-\u303F]/gu)|| []).length;
        let symbolCount = (el.target.value.match(/[\p{S}\u2070-\u209F\u20A0-\u20CF\u2100-\u214F]/gu)|| []).length;
        let whitespaceCount = (el.target.value.match(/[\p{Z}\u0009-\u000D\u0020]/gu)|| []).length;
        let chinesesymbolCount = (el.target.value.match(/[\u3105-\u3129\u02c7\u02cb\u02ca\u02d9\u02da\u02dc\u02c9\u02c7\u02cb\u02ca\u02d9\u02da\u02dc\u02c9\u02c7\u02cb\u02ca\u02d9\u02da\u02dc\u02c9\u02c7\u02cb\u02ca\u02d9\u02da\u02dc\u02c9\u02c7\u02cb\u02ca\u02d9\u02da\u02dc\u02c9\u02c7\u02cb\u02ca\u02d9\u02da\u02dc\u02c9\u02c7\u02cb\u02ca\u02d9\u02da\u02dc\u02c9\u02c7\u02cb\u02ca\u02d9\u02da\u02dc\u02c9\u02c7\u02cb\u02ca\u02d9\u02da\u02dc\u02c9\u02c7\u02cb\u02ca\u02d9\u02da\u02dc\u02c9\u02c7\u02cb\u02ca\u02d9\u02da\u02dc\u02c9\u02c7\u02cb\u02ca\u02d9\u02da\u02dc\u02c9\u02c7\u02cb\u02ca\u02d9\u02da\u02dc\u02c9\u02c7\u02cb\u02ca\u02d9\u02da\u02dc\u02c9]/g
        ) || []).length; 
        if(chinesesymbolCount !== 0 || whitespaceCount !== 0 || symbolCount !== 0 || punctuationCount !== 0 ){
            gameIDAlert.value = true
        }else{
            gameIDAlert.value = false
        }
        let chineseCount = (el.target.value.match(/[\u4e00-\u9fa5]/g) || []).length;
        let englishCount = (el.target.value.match(/[a-zA-Z]/g) || []).length; 
        let numberCount = (el.target.value.match(/[0-9]/g) || []).length; 

        gameIDcount.value =  numberCount + chineseCount * 2 + englishCount;
        // 字符數4~12才正常
        if(gameIDcount.value <= 3 || gameIDcount.value >= 13){
            gameIDAlert.value = true
        }
  
      }      
      

        

        return {
          game_id,
          handGameID,
          checkInput,
          gameIDAlert,
        }
    }
}
</script>

<template>
<div class="CustomContainer">
    <div class="question q1">
        <h1>1.選擇聊天戒指</h1>                
        <li class="itemSelected" data-ring="selected">
            <img 
            src="@/assets/RingProject/ring/黑貓貓.png" 
            alt="" >
            <span class="noneImg">黑貓貓</span>
        </li>
    </div>    
    <div class="question q2">
              <h1>2.選擇喜歡的角色圖</h1>
              <div class="personSelected">
                <img 
                src="@/assets/RingProject/role/cos7.png"
                alt="">
              </div>
    </div>    
    <div class="question q3">
        <h1>3.輸入ID</h1>
        <input 
        @input="handGameID"
        @keyup="checkInput"
        v-model="game_id">
        <!-- <input @keyup="checkInput"
         v-model = "game_id" 
         id="game_id_input" 
         type="text" placeholder="輸入角色名稱"> -->
        <div class="alertbox">
            <p class="IDalert" v-show="gameIDAlert">ID不符合遊戲規則!</p>
        </div>
    </div>    
    <div class="RWDremind">
    <PersonBox />
        <span>建議使用電腦版測試!</span>
    </div>    
</div>
</template>



<style lang="scss" scoped>
.CustomContainer{
  position: absolute;
  width: 800px;
  top: 100%;
  left: 50%;
  transform: translateX(-50%);
  background-color: #AAA;
  display: flex;
  justify-content: space-around;
  .question{
    position: relative;
    z-index: 2;
    top: 0;
    left: 0;

    h1{
      font-size: 20px;
      margin-top: 3px;
      margin-bottom: 10px;
    }
  }
  .q1{
    .itemSelected{
      // border: 1px solid;
      background-color: #EEE;
      border-radius: 3px;
      cursor: pointer;
      width: 200px;
      line-height: 45px;
      user-select: none;
      position: relative;
      &:after{
        display: none;
        content: url(~@/assets/RingProject/symbal/arrow.png);
        position: absolute;
        right: 20px;
        top: 50%;
        transform: translateY(-55%) rotate(90deg) scale(0.8);
      }
      img{
        margin-top: 10px;
        margin-left: 10px;
      }
      span{
        position: relative;
        top: -5px;
        padding-left: 20px;
        &.noneImg{
          top: 0;
        }
      }
  }


  }
  .q2{
    .personSelected{
      background-color: #EEE;
      border-radius: 4px;
      box-shadow: 0 0 7px #888;
      width: 90px;
      height: 90px;
      position: relative;
      left: 50px;
      margin-bottom: 10px;
      
      img{
        width: 70px;
        height: 90px;
        display: block;
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        top: -2px;

      }
    }
  }
  .q3{
    input{
      padding: 7px;
    }
    .alertbox{
     //  border: 1px solid; 
      height: 20px;
      .IDalert{
       color: #F00;
       font-size: 14px;
      }
   }
  }
  .RWDremind{
    display: none;
  }
  
}
@media (max-width: 992px) { 
  .CustomContainer{
    width: 100%;
    flex-wrap: wrap;
    .question{
      width: 100%;
      h1{
        font-size: 15px;
        padding-left: 5px;
        margin-top: 3px;
        margin-bottom: 10px;
      }
    }
    .q1{
      .itemSelected{
        // border: 1px solid;
        background-color: #EEE;
        border-radius: 3px;
        margin-left: 30px;
        cursor: pointer;
        width: 150px;
        line-height: 45px;
        user-select: none;
        position: relative;
        img{
          margin-top: 10px;
          margin-left: 10px;
        }
        span{
          position: relative;
          top: -5px;
          padding-left: 20px;
          &.noneImg{
            top: 0;
          }
        }
    }
  
  
    }
    .q2{
      .personSelected{
        background-color: #EEE;
        border-radius: 4px;
        box-shadow: 0 0 7px #888;
        width: 90px;
        height: 90px;
        position: relative;
        left: 30px;
        margin-bottom: 10px;
        
        img{
          width: 70px;
          height: 90px;
          display: block;
          position: absolute;
          left: 50%;
          transform: translateX(-50%);
          top: -2px;
  
        }
      }
    }
    .q3{
      input{
        padding: 7px;
        width: 200px;
        margin-left: 30px;
      }
      .alertbox{
       //  border: 1px solid; 
        height: 20px;
        .IDalert{
         font-size: 14px;
         margin-left: 30px;
         margin-top: 10px;
        }
     }
    }
    .RWDremind{
        display: block;
        color: #F00;
    }    
    
  }

}


</style>