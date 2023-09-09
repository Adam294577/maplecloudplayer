<script>
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
import MapleActivityBox from '@/components/MapleActivityBox.vue'

export default {
    components:{
        Header,
        Footer,
        MapleActivityBox,
    },
    setup () {
        

        return {}
    }
}
</script>
<template>
<Header />
<MapleActivityBox />
<router-view></router-view>
<Footer />
</template>



<style lang="scss">
*{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    list-style-type: none;
    
}
body{
    background-color: #222;
    height: 100%;
    ::-webkit-scrollbar{
      width: 0;
    }    
  }

</style>