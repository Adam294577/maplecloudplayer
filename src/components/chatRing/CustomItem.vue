<script>
import PersonBox from '@/components/chatRing/PersonBox.vue'
export default {
    components:{
        PersonBox,
    },
    setup () {
        

        return {
            PersonBox,
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
        <input id="game_id_input">
        <!-- <input @keyup="checkInput"
         v-model = "game_id" 
         id="game_id_input" 
         type="text" placeholder="輸入角色名稱"> -->
        <div class="alertbox">
            <p class="IDalert">ID不符合遊戲規則!</p>
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