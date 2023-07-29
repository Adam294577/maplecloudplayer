<script>
export default {
    components:{
    },
    setup () {
        

        return {}
    }
}
</script>
<template>
<div class="NotFoundBg">
    <img src="@/assets/introBg_notFound.png" alt="皮卡啾">
</div>
    <div class="noFoundContainer">

        <h1>404</h1>
        <span>輸入的網址有誤，有問題歡迎到 <a target="_blank" href="https://discord.gg/SNkpEWxvU3">Discord</a>詢問</span>
    </div>
</template>



<style lang="scss" scoped>
.noFoundContainer{
    width: 500px;
    height: 500px;
    margin: auto;
    background-color: #fFF;
    position: relative;
    margin-top: 5%;
    h1{
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%);
    font-size: 77px;
    color: #000;
}
span{
    position: absolute;
    bottom: 10px;
    display: block;
    width: 100%;
    font-size: 22px;
    text-align: center;
    a{
        display: inline-block;
        padding: 3px;
        margin: 0 5px;
        color: #000;
        text-decoration: none;
        border-bottom: 1px solid #000;
        
        &:hover{
            color: rgb(255, 25, 133);
            border-bottom: 1px solid rgb(255, 25, 133);
        }
    }    
}    
    
}

.NotFoundBg{
    img{
      position: fixed;
      bottom: 0;
      left: 50%;
      transform: translateX(-45%);
      max-height: 30vh;
    }
  }
  @media (max-width: 768px) { 
    .NotFoundBg{
      transform: translateX(-50%);
    }   
  
  }  

  @media (max-width: 576px) { 
  
    .NotFoundBg{
      display: none;
    }
    }  
</style>