<script>
import MapPerson from '@/components/chatRing/MapPerson.vue'
import Chatsys from '@/components/chatRing/Chatsys.vue'
import CustomItem from '@/components/chatRing/CustomItem.vue'
export default {
    components:{
        MapPerson,
        Chatsys,
        CustomItem,
    },
    setup () {
        

        return {
        }
    }
}
</script>

<template>
<div class="ChatSyscontainer">
<MapPerson />
<Chatsys />
<CustomItem />
<input v-show="false" id="noinput">



</div>
</template>



<style lang="scss" scoped>
.ChatSyscontainer{
  background-size: cover;
  // background-attachment: fixed;
  background-repeat: no-repeat;
  position: relative;
  top: 50px;
  width: 800px;
  height: 600px;
  margin: 0 auto;
  background: #FFF;
}
@media (max-width: 992px) { 
    .ChatSyscontainer{
    background-position: 0px 0;
    width: 100%;
    }
}
@media (max-width: 576px) { 
  .ChatSyscontainer{
    background-position: -200px 0;
  }
}

</style>