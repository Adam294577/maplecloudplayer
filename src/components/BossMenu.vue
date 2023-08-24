
<script>
import { ref , computed, reactive , onMounted, watch} from 'vue';
import { useStore } from 'vuex';

// page頁數圖片
import navPage1  from '@/assets/symbol/page01.png';
import navPage2  from '@/assets/symbol/page02.png';

// page1左箭頭、右箭頭
import leftarrow1 from '@/assets/symbol/gray左箭頭.png'; 
import rightarrow1 from '@/assets/symbol/yellow右箭頭.png'; 
// page2左箭頭、右箭頭
import leftarrow2 from '@/assets/symbol/yellow左箭頭.png'; 
import rightarrow2 from '@/assets/symbol/gray右箭頭.png'; 

export default {
    setup (props,{ emit }) {
        const store = useStore();
        // 先載入全部nav相關圖片 (不含符號)
        const bossNameArr = ["梅格耐斯","凡雷恩","希拉","阿卡伊農","西格諾斯","森蘭丸","卡翁","殘暴炎魔","闇黑龍王","皮卡啾","比艾樂","斑斑","血腥皇后","貝倫","戴米安","使烏","露希妲","威爾","守護天使綠水靈","戴斯克","頓凱爾","真希拉","黑魔法師","受選的賽蓮","監視者卡洛斯","拉圖斯","巴洛古","濃姬"]
        const AllGrade = ["easy","normal","hard","chaos","extreme"]
        const NavBossImg = reactive([])
        const NavGradeImg = reactive([])
        const ImportNavImg = ()=>{
            AllGrade.forEach(item=>{
                let img =""
                img = require(`@/assets/NavList/grade_${item}.png`)
                NavGradeImg.push({key: item , url: img})
            })
            

            bossNameArr.forEach(item=>{
            let img = ""
            img =  require(`@/assets/NavList/list_${item}.png`)
            NavBossImg.push({key:item, url:img })
        })            

        }
        ImportNavImg()
        // console.log(NavGradeImg);
        // console.log(NavBossImg);
        // navData
        const BossGradeData = reactive({data:[{key:""}]})

        const NavData = ref([])
        const getNavData = () =>{
            store.dispatch("getNavData").then(res=>{
                NavData.value = res[0].data
                console.log(NavData.value);
                console.log(NavBossImg);
                console.log(NavGradeImg);
            })
        }
        
        const NavListRender = computed(()=>{
            let i = -1
            const a = NavData.value.map(item=>{
                i++;
                return {
                    page: item.page, 
                    name: item.key,
                    // url: `${bossListURL.value}${item.key}.png`,
                    Grade: item.Grade
                }
                
            })
            console.log(a);
            return 0
        })          


        // NavMenuOpen
        const NavBool = ref(false);
        const handNavBool = () =>{
            NavBool.value = !NavBool.value;
        }
        const NavWidth = computed(()=>{
            return NavBool.value ? 0 : "-500px";
        })
         // NavPageCh
        const NavPageidx = ref(navPage1)
        const NavContidx = ref(1)
        const NavLeftArrow = ref(leftarrow1)
        const NavRightArrow = ref(rightarrow1)
        const NavPageCh1 = ()=>{
            NavPageidx.value = navPage1;
            NavContidx.value = 1
            NavLeftArrow.value = leftarrow1
            NavRightArrow.value = rightarrow1

        }
        const NavPageCh2 = ()=>{
            NavPageidx.value = navPage2;
            NavContidx.value = 2
            NavLeftArrow.value = leftarrow2
            NavRightArrow.value = rightarrow2

        }
        const handNavPage = (el) =>{

            console.log(el.target.id);
            if(el.target.id === "backbtn"){
                NavPageCh1()
                return;
            }
            if(el.target.id === "nextbtn"){
                NavPageCh2()
                return;
            }
            

        }
        const wheelpage = (event) =>{
            let y = event.deltaY;
            if(y > 0){
                NavPageCh2()

            }
            if(y < 0){
                NavPageCh1()
            }
     

        }
        const bossName = ref("")
        
        const bossGrade = ref("")
        const getBossVal = (el) =>{
            bossName.value = el.target.dataset.bossname;
            bossGrade.value = el.target.alt;
            // emit("bossName",bossName);
            // emit("bossGrade",bossGrade);
        
            NavBool.value = !NavBool.value;
            
        }

        onMounted(() => {
            getNavData()  
        })
      


        return {
            NavBool,
            NavWidth,
            handNavBool,

            NavPageidx,
            NavContidx,
            NavLeftArrow,
            NavRightArrow,
            handNavPage,
            wheelpage,
            getBossVal,

            // navData
            NavListRender,
            

            // test
            NavBossImg
            
        }

        
    }
}
</script>


<template>
        <!-- <img :src="NavBossImg[7].url" alt=""> -->
        <div class="menu" :data-test="NavListRender">
            <span @click="handNavBool" id="bossMenuBtn" class="btntxt act">Boss</span>

            <nav @wheel= "wheelpage"  class="pcNav" :style="{left: NavWidth}">
                <div class="bossList">

                    <span @click="handNavBool" class="navback">
                            <span class="bar"></span>
                            <span class="bar bar2"></span>
                    </span>

                    <span class="title">
                        <div class="navtitle">
                            <span class="txt1">名稱</span>
                            <span class="txt2">難易度</span>
                        </div>
                    </span>

                    <ul class="pageinfo">
                            <li class="infoItem">
                
                                <span class="bossImg">
                                        <img src="@/assets/NavList/list_露希妲.png" alt="">
                                </span>
                
                                <span class="bossGrade">
                                    <span class="GradeItem"><img @click= "getBossVal" class="GradeImg" data-bossname="使烏" src="@/assets/NavList/grade_easy.png" alt="easy"></span>
                                    <span class="GradeItem"><img @click= "getBossVal" class="GradeImg" data-bossname="使烏" src="@/assets/NavList/grade_normal.png" alt="normal"></span>
                                    <span class="GradeItem"><img @click= "getBossVal" class="GradeImg" data-bossname="使烏" src="@/assets/NavList/grade_hard.png" alt="hard"></span>
                                </span>
                            </li>
                            <!-- <li class="infoItem" 
                            v-for="list in NavListRender"
                            :key="list.key"
                            v-show="list.page === NavPageidx"
                            >
                
                                <span class="bossImg">
                                        <img :src="list.url" :alt="list.key">
                                </span>
                
                                <span class="bossGrade"
                                v-for="Grade in list.Grade"
                                >
                                <span class="GradeItem"><img @click= "chbossNameTest" class="GradeImg" :data-bossname="Grade.bossname" :src="Grade.url" :alt="Grade.key"></span>
                                </span>
                            </li> -->
                        </ul>
                    
                    <div class="pagelist">
                        <span class="backbtn">
                            <img @click= "handNavPage" id="backbtn" :src="NavLeftArrow" alt="backbtn">
                        </span>

                        <span class="pagecontent">
                            <img :src="NavPageidx" alt="第一頁">
                            <img src="@/assets/symbol/斜線.png" alt="">
                            <img src="@/assets/symbol/page02.png" alt="第二頁">
                        </span>

                        <span  class="nextbtn">
                            <img @click= "handNavPage" id="nextbtn" :src="NavRightArrow" alt="nextbtn">
                        </span>
                    </div>
                    
                </div>

    
    
            </nav>

            <nav class="phoneNav">

                <div class="searchbar">
                    <input type="text" placeholder="輸入打王名稱">
                </div>

                <span class="navback">
                    <span class="bar"></span>
                    <span class="bar bar2"></span>
                </span>

                <ul class="bossinfo">
                    <!-- <li class="infoitem">
                        <span class="imgbox">
                            <img src="@/assets/boss/phone_list_守護天使綠水靈.png" alt="">
                        </span>
                        <span class="itemtxt">守護天使綠水靈</span>
                    </li>
                    <li class="infoitem">
                        <span class="imgbox">
                            <img src="@/assets/boss/phone_list_守護天使綠水靈.png" alt="">
                        </span>
                        <span class="itemtxt">守護天使綠水靈</span>
                    </li>
                    <li class="infoitem">
                        <span class="imgbox">
                            <img src="@/assets/boss/phone_list_守護天使綠水靈.png" alt="">
                        </span>
                        <span class="itemtxt">守護天使綠水靈</span>
                    </li>
                    <li class="infoitem">
                        <span class="imgbox">
                            <img src="@/assets/boss/phone_list_守護天使綠水靈.png" alt="">
                        </span>
                        <span class="itemtxt">守護天使綠水靈</span>
                    </li>
                    <li class="infoitem">
                        <span class="imgbox">
                            <img src="@/assets/boss/phone_list_守護天使綠水靈.png" alt="">
                        </span>
                        <span class="itemtxt">守護天使綠水靈</span>
                    </li> -->


                    <!-- <li class="infoitem err">
                        <span class="imgbox">
                        </span>
                        <span class="itemtxt">名稱錯誤，找不到相關BOSS資訊 T_T</span>
                    </li> -->
    

                </ul>

            </nav>

        </div>
</template>



<style lang="scss" scoped>
.menu{
    // display: none;
    user-select: none;
    #bossMenuBtn{
        position: fixed;
        z-index: 2;
        top: 2rem;
        left: 2rem;
        width: 180px;
        height: 70px;
        border-radius: 5px;
        text-align: center;
        line-height: 70px;
        font-size: 30px;
        font-weight: bold;
        // display: none;
        background: #444;
        color: #FFF;
        box-shadow: 1px 2px 3px #777;
        transition: 0.5s;
        &.act{
            transition: 0s;
            border-radius: 5px;
            // background: #AAA

        }
        &:hover{
            transition: 0s;
            border-radius: 5px 5px 0 0;
            box-shadow: none;
            background: #000000              

        }
        &:active{
            transition: 0s;
            border-radius: 5px 5px 0 0;
            background: #000000              

        }
    }

    .pcNav{
        position: fixed;
        z-index: 3;
        top: 3px;
        width: 500px;
        left: -500px;
        height: 100vh;
        border-radius: 0px 20px 0px 0px;
        background: #333333;
        transition: 0.3s;
        .bossList{
            color: #FFF;
            .navback{
                cursor: pointer;
                position: absolute;
                right: 8px;
                top: 8px;
                width: 30px;
                height: 30px;
                // border: 1px solid #F00;
                .bar{
                    position: absolute;
                    top: 50%;
                    left: 50%;
                    transform: translate(-50%,-50%) rotate(45deg);
                    display: inline-block;
                    width: 27px;
                    height: 7px;
                    background: #FFFFFF;
                    border-radius: 10px;

                }
                .bar2{
                    transform: translate(-50%,-50%) rotate(-45deg);
                }

            }
            .title{
                display: inline-block;
                position: absolute;
                top: 5px;
                left: 5px;
                // border: 1px solid #F00;
                border-radius: 5px;
                height: 70px;
                width: 90%;
                
                .navtitle{
                    span{
                        font-size: 27px;
                        font-weight: bold;
                        display: inline-block;
                    }
                    .txt1{
                        padding-top: 15px;
                        padding-left: 35px;
                        
                    }
                    .txt2{
                        padding-left: 177px;

                    }

                }
            }
            .pageinfo{
                .infoItem{
                    margin-top: 12px;
                    // border: 1px solid #FFF;
                    &:nth-child(1){
                        margin-top: 80px;
                    }
                    .bossImg{
                        position: relative;
                        display: inline-block;
                        // width: 135px;
                        width: 150px;
                        margin-left: 7px;
                        height: 30px;
                        transform-origin: left;
                        // transform: scale(1.2);
                        margin-right: 50px;
                        // border: 1px solid #FFF;
                        
                        img{
                            width: 100%;
                            display: inline-block;
                            position: absolute;
                            top: 0;
                            left: 0;
    
                        }
                    }
                    .bossGrade{
                        // display: flex;
                        position: relative;
                        left: -50px;
                        z-index: 2;
                        align-items: center;
                        // border: 1px solid #FFF;
                        .GradeItem{
                            display: inline-block;
                            margin-left: 27px;
                            img{
                                border-radius: 10px;
                            }


                            img:hover{
                                box-shadow: 0 0 7px #ffffff;
                            }


                            &:nth-child(1){
                                margin-left: 15px;
                            }

                        }
                    }
                }
                
    
            }
            .pagelist{
                position: absolute;
                bottom: 30px;
                left: 50%;
                transform: translateX(-50%);
                display: flex;
                justify-content: space-between;
                width: 95%;
                span{
                    display: inline-block;
                    margin: 3px;
                }
                .backbtn,.nextbtn{
                    cursor: pointer;
                    width: 55px;
                    height: 55px;
                    // border: 1px solid #F00;

                }
                .pagecontent{
                    position: relative;
                    top: 10px;

                }
                .nextbtn{

                }
                
            }
    
    
    
        }
    }
    .phoneNav{
        position: absolute;
        top: 0;
        left: 0;
        background: #222;
        width: 350px;
        height: 99vh;
        margin-top: 3px;
        margin-left: 7px;
        display: none;
        color: #FFF;
        .searchbar{
            position: absolute;
            top: 10px;
            left: 20px;
            input{
                padding: 10px 20px;
                width: 300px;
            }

        }
        .navback{
            position: absolute;
            right: 8px;
            top: 8px;
            width: 30px;
            height: 30px;
            // border: 1px solid #F00;
            .bar{
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%,-50%) rotate(45deg);
                display: inline-block;
                width: 27px;
                height: 7px;
                background: #FFFFFF;
                border-radius: 10px;
            }
            .bar2{
                transform: translate(-50%,-50%) rotate(-45deg);
            }
        } 
        .bossinfo{
            display: flex;
            margin-top: 100px;
            // justify-content: space-around;
            flex-wrap: wrap;
            .infoitem,.infoitem.err{
                position: relative;
                width: 30%;
                height: 120px;
                margin-top: 50px;
                margin-left: 2.5%;
                .imgbox{
                    position: absolute;
                    top: 0;
                    display: inline-block;
                    width: 100%;
                    height: 110px;
                    border-radius: 15px;
                    border: 1px solid #EEE;
                    overflow: hidden;
                    img{
                        
                    }
                }
                span{
                    width: 100%;
                    position: absolute;
                    display: inline-block;
                    text-align: center;
                    font-size: 10px;
                    // border: 1px solid #FFF;
                    top: 100%;
                    left: 50%;
                    transform: translateX(-50%);

                }
            }
            .infoitem.err{
                .itemtxt{
                    width: 500px;
                }
            }
        }       
    }




}
</style>