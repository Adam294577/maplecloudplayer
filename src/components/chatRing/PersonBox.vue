

<script>
export default {
    setup () {
        

        return {}
    }
}
</script>
<template>
    <div class="personBox" v-show="true">
      <ul class="personList">
        <li>
        <img data-alt="list.idx"  src="@/assets/RingProject/role/cos7.png" alt="list.idx">
      </li>
      </ul>
    </div>
</template>
<style lang="scss" scoped>
// personBox
.personBox{
  position: fixed;
  z-index: 10;
  top: 100%;
  left: 0;
  // left: 50%;
  // transform: translateX(-50%);
  width: 800px;
  background-color: #999;
  border-radius:  0 0 10px 10px;
  ul{
    display: flex;
    flex-wrap: wrap;
    li{
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
      &:nth-child(7n+1){
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
    width: 100%;
    padding-bottom: 50px;
    ul{
      li{
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