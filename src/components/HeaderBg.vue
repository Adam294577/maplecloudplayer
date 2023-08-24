<script>
export default {
    setup () {
        

        return {}
    }
}
</script>


<template>
<div class="introBg">
    <img src="@/assets/home/introBg_home.png" alt="皮卡啾">
</div>
</template>


<style lang="scss" scoped>
.introBg{
  // display: none;
    img{
      position: fixed;
      bottom: 0;
      left: 50%;
      transform: translateX(-45%);
      max-height: 20vh;
    }
  }
  @media (max-width: 768px) { 
    .introBg{
      // transform: translateX(-50%);
    }   
  
  }   
</style>