
<script>
import { computed, reactive, ref } from 'vue';

export default {
    setup () {
        const MapleJobData = reactive([
            {idx:1, key: "劍士"},
            {idx:2, key: "法師"},
            {idx:3, key: "盜賊"},
            {idx:4, key: "海盜"},
            {idx:5, key: "弓箭手"},
            {idx:6, key: "槍神"},
            {idx:7, key: "天使"}
        ])

        const MapleJobRender = computed(()=>{
            const five = MapleJobData.filter(item=>{
                return item.idx <= 5 ;
            })
            const result = five.map(item=>{
                return { idx: item.idx , key: item.key}
            })
            console.log(result);
            return result
        })


        

        return {
            MapleJobData,
            MapleJobRender

        }
    }
}
</script>


<template>

    <ul>
        <!-- <div v-html="testRender.data">

        </div> -->
        <li 
        v-for="list in MapleJobData"
        class="item">{{ list.key }}</li>
    
    </ul>

    <ul>
        <li class="item" :data-job="MapleJobRender"></li>
    </ul>
</template>



<style lang="scss" scoped>
.item{
    color: #FFF;
    font-size: 40px;
    border: 1px solid #FFF;
    width: 400px;
    cursor: pointer;
}
ul{

    border: 1px solid #F00;
}
</style>