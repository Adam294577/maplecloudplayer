<script>
import {computed, ref ,onMounted } from 'vue';
import { useStore } from 'vuex';

export default {
    setup (props) {
        const store = useStore();
    const bossNameArr = ["梅格耐斯","凡雷恩","希拉","阿卡伊農","西格諾斯","森蘭丸","卡翁","殘暴炎魔","闇黑龍王","皮卡啾","比艾樂","斑斑","血腥皇后","貝倫","戴米安","使烏","露希妲","威爾","守護天使綠水靈","戴斯克","頓凱爾","真希拉","黑魔法師","受選的賽蓮","監視者卡洛斯","拉圖斯","巴洛古","濃姬"]
    const bannerData = []
    const importBannerData = ()=>{
        let img = ""
        bossNameArr.forEach(item=>{
            img =  require(`@/assets/boss/banner/banner_${item}.png`)
            bannerData.push({key:item, url:img })
        })
    }
    importBannerData()
    const BannerImg = ref(bannerData[0].url)
    // console.log(BannerImg.value);
    const bannerRender = computed(()=>{
        const bossName = store.getters.BossSelected
        const a = bannerData.filter(item=>{
            return item.key === bossName
        })
        // console.log(a[0].url);
        BannerImg.value = a[0].url
        return BannerImg.value
    })
    


    onMounted(() => {
    })

        

        
        


        return {
            props,
            bannerRender,
            BannerImg
        }
    }
}
</script>

<template>
<!-- <section  v-show="sectioncont[0].open" class="bossIntro"> -->
<section class="bossIntro" :data-test="bannerRender">

<!-- <ul class="GradeList">
    <li @click= "handGradeMenu" id="GradeVal">
        <img :src="GradeVal.url" :alt="GradeVal.alt">
    </li>

    <li 
    @click= "handGradeVal" 
    v-show= "GradeListbool" 
    :data-alt= "list.alt"
    v-for="list in showGradeList"
    :key= "list.alt"
    >
    <img :src="list.url" :alt="list.alt">
    </li>
</ul> -->

<h1 class="title">BOSS入場規則</h1>

<div class="content">
    <div class="bossImg">
        <img :src="BannerImg" alt="">
        <!-- <img src="@/assets/boss/banner/banner_使烏.png" alt=""> -->
    </div>
    <div class="bosstxt">
        <!-- <ul class="bosstxtList">
            <li 
            v-for="list in bosstxtRender"
            :key= "list.key"
            >{{list.title}}<span>{{list.msg}}</span></li>
        </ul> -->
        <ul class="bosstxtList">
            <li></li>
        </ul>
    </div>

</div>
</section>
</template>



<style lang="scss" scoped>
    .bossIntro{
        .content{
            display: flex;
            margin-top: 20px;
            padding-bottom: 3rem;
            justify-content: center;
            .bossImg{
                // text-align-last: left;
                width: 50%;
                img{
                    width: 70%;
                }
            }
            .bosstxt{
                position: relative;
                width: 50%;
                font-weight: bold;
                // border: 1px solid #F00;
                border-radius: 1rem;
                background: #444;
                // box-shadow: 2px 1px 7px #EEE;
                padding-bottom: 2rem;
                .bosstxtList{
                    width: 95%;
                    margin: auto;
                    text-align-last: left;
                    // display: none;
                    padding-left: 1rem;
                    li{
                        padding-top: 1.5rem;
                        font-size: 1.4rem;
                        span{
                            padding-left: 1rem;
                        }
                    }
                }
            }
        }
    }
</style>