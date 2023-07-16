<script>
export default {
    props:{
        propsTest:{
            type: String,
            default: "只是測試的字串"
        }
    },
    setup (props) {

    // const bosstxtData = ref(BossInfo.data[BossNameSelected.value].bossIntro.bosstxt)

    // const bosstxtRender = computed(()=>{
    //         const filterGrade = bosstxtData.value.filter(item=>{
    //             return item.Grade === GradeSelected.value
    //         })
    //         return filterGrade
    //     })    

        

        
        


        return {
            props
        }
    }
}
</script>

<template>
<!-- <section  v-show="sectioncont[0].open" class="bossIntro"> -->
<section class="bossIntro">

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
        <!-- <img :src="banner" alt="123"> -->
        <img src="banner.png" alt="這是Banner">
        <img src="@/assets/boss/banner_使烏.png" alt="">
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