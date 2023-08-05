

<script>
export default {
    setup () {
        

        return {}
    }
}
</script>
<template>
    <div class="Cross" 
        >
            <div class="bar"></div>
            <div class="bar bar2"></div>
        </div>
</template>

<style lang="scss" scoped>
  .Cross{
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
</style>