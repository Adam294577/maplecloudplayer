
<script>
import { ref , computed, reactive } from 'vue';

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
    emits:{
        bossName: (bossName)  =>{
            let bossArr = ["殘暴炎魔","梅格耐斯","希拉","森蘭丸","卡翁",
            "拉圖斯","比艾樂","斑斑","血腥皇后","貝倫","凡雷恩","闇黑龍王","阿卡伊農",
            "皮卡啾","西格諾斯","使烏","戴米安","守護天使綠水靈","露希妲","威爾","戴斯克",
            "真希拉","頓凱爾","黑魔法師","受選的賽蓮","監視者卡洛斯","烏勒斯","巴洛古","濃姬",
            "培羅德"
        ]
            return bossArr.includes(bossName.value) ? true : false
        },
        bossGrade: (bossGrade)=>{
            let GradeArr = ["easy","normal","hard","chaos","extreme"];
            return GradeArr.includes(bossGrade.value) ? true : false;
        }

    },
    props:{
        navPage1 :{
            type : String,
            default: '@/assets/symbol/page01.png'
        },
        navPage2 :{
            type : String,
            default: '@/assets/symbol/page02.png'
        },
        leftarrow1: {
            type: String,
            default: '@/assets/symbol/gray左箭頭.png'
        },
        rightarrow1: {
            type: String,
            default: '@/assets/symbol/yellow右箭頭.png'
        },
        leftarrow2: {
            type: String,
            default: '@/assets/symbol/yellow左箭頭.png'
        },
        rightarrow2: {
            type: String,
            default: '@/assets/symbol/gray右箭頭.png'
        },
       
    },
    setup (props,{ emit }) {
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
            emit("bossName",bossName);
            emit("bossGrade",bossGrade);
            NavBool.value = !NavBool.value;
        }


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
        }

        
    }
}
</script>


<template>
        <div class="menu">
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
                        <!-- 每頁最多17筆 -->
                        <div class="pagecont">
                            <div v-show= "NavContidx === 1" class="page1">
                            <li class="infoItem">
                            
                            <span class="bossImg">
                                    <img src="@/assets/boss/list_殘暴炎魔.png" alt="">
                            </span>
            
                            <span class="bossGrade">
                                <span class="GradeItem"><img @click= "getBossVal" class="GradeImg" data-bossname="殘暴炎魔" src="@/assets/boss/grade_easy.png" alt="easy"></span>
                                <span class="GradeItem"><img @click= "getBossVal" class="GradeImg" data-bossname="殘暴炎魔" src="@/assets/boss/grade_normal.png" alt="normal"></span>
                                <span class="GradeItem"><img @click= "getBossVal" class="GradeImg" data-bossname="殘暴炎魔" src="@/assets/boss/grade_chaos.png" alt="chaos"></span>
                            </span>
                            </li>
                            <li class="infoItem">
                            
                            <span class="bossImg">
                                    <img src="@/assets/boss/list_梅格耐斯.png" alt="">
                            </span>
            
                            <span class="bossGrade">
                                <span class="GradeItem"><img @click= "getBossVal" class="GradeImg" data-bossname="梅格耐斯" src="@/assets/boss/grade_easy.png" alt="easy"></span>
                                <span class="GradeItem"><img @click= "getBossVal" class="GradeImg" data-bossname="梅格耐斯" src="@/assets/boss/grade_normal.png" alt="normal"></span>
                                <span class="GradeItem"><img @click= "getBossVal" class="GradeImg" data-bossname="梅格耐斯" src="@/assets/boss/grade_hard.png" alt="hard"></span>
                            </span>
                            </li>
                            <li class="infoItem">

                                <span class="bossImg">
                                        <img src="@/assets/boss/list_希拉.png" alt="">
                                </span>
                            
                                <span class="bossGrade">
                                    <span class="GradeItem"><img @click= "getBossVal" class="GradeImg" data-bossname="希拉" src="@/assets/boss/grade_normal.png" alt="normal"></span>
                                    <span class="GradeItem"><img @click= "getBossVal" class="GradeImg" data-bossname="希拉" src="@/assets/boss/grade_hard.png" alt="hard"></span>
                                </span>
                            </li>
                            <li class="infoItem">

                                <span class="bossImg">
                                        <img src="@/assets/boss/list_森蘭丸.png" alt="">
                                </span>
                            
                                <span class="bossGrade">
                                    <span class="GradeItem"><img @click= "getBossVal" class="GradeImg" data-bossname="森蘭丸" src="@/assets/boss/grade_normal.png" alt="normal"></span>
                                    <span class="GradeItem"><img @click= "getBossVal" class="GradeImg" data-bossname="森蘭丸" src="@/assets/boss/grade_chaos.png" alt="chaos"></span>
                                
                                </span>
                            </li>
                            <li class="infoItem">

                                <span class="bossImg">
                                        <img  src="@/assets/boss/list_卡翁.png" alt="">
                                </span>
                            
                                <span class="bossGrade">
                                    <span class="GradeItem"><img @click= "getBossVal" class="GradeImg" data-bossname="卡翁" src="@/assets/boss/grade_normal.png" alt="normal"></span>
                                </span>
                            </li>
                            <li class="infoItem">

                                <span class="bossImg">
                                        <img src="@/assets/boss/list_拉圖斯.png" alt="">
                                </span>
                            
                                <span class="bossGrade">
                                    <span class="GradeItem"><img @click= "getBossVal" class="GradeImg" data-bossname="拉圖斯" src="@/assets/boss/grade_easy.png" alt="easy"></span>
                                    <span class="GradeItem"><img @click= "getBossVal" class="GradeImg" data-bossname="拉圖斯" src="@/assets/boss/grade_normal.png" alt="normal"></span>
                                    <span class="GradeItem"><img @click= "getBossVal" class="GradeImg" data-bossname="拉圖斯" src="@/assets/boss/grade_hard.png" alt="hard"></span>
                                </span>
                            </li>
                            <li class="infoItem">

                                <span class="bossImg">
                                        <img src="@/assets/boss/list_比艾樂.png" alt="">
                                </span>
                            
                                <span class="bossGrade">
                                    <span class="GradeItem"><img @click= "getBossVal" class="GradeImg" data-bossname="比艾樂" src="@/assets/boss/grade_normal.png" alt="normal"></span>
                                    <span class="GradeItem"><img @click= "getBossVal" class="GradeImg" data-bossname="比艾樂" src="@/assets/boss/grade_chaos.png" alt="chaos"></span>
                                </span>
                            </li>
                            <li class="infoItem">

                                <span class="bossImg">
                                        <img src="@/assets/boss/list_斑斑.png" alt="">
                                </span>
                            
                                <span class="bossGrade">
                                    <span class="GradeItem"><img @click= "getBossVal" class="GradeImg" data-bossname="斑斑" src="@/assets/boss/grade_normal.png" alt="normal"></span>
                                    <span class="GradeItem"><img @click= "getBossVal" class="GradeImg" data-bossname="斑斑" src="@/assets/boss/grade_chaos.png" alt="chaos"></span>
                                </span>
                            </li>
                            <li class="infoItem">

                                <span class="bossImg">
                                        <img src="@/assets/boss/list_血腥皇后.png" alt="">
                                </span>
                            
                                <span class="bossGrade">
                                    <span class="GradeItem"><img @click= "getBossVal" class="GradeImg" data-bossname="血腥皇后" src="@/assets/boss/grade_normal.png" alt="normal"></span>
                                    <span class="GradeItem"><img @click= "getBossVal" class="GradeImg" data-bossname="血腥皇后" src="@/assets/boss/grade_chaos.png" alt="chaos"></span>
                                </span>
                            </li>
                            <li class="infoItem">

                                <span class="bossImg">
                                        <img src="@/assets/boss/list_貝倫.png" alt="">
                                </span>
                            
                                <span class="bossGrade">
                                    <span class="GradeItem"><img @click= "getBossVal" class="GradeImg" data-bossname="貝倫" src="@/assets/boss/grade_normal.png" alt="normal"></span>
                                    <span class="GradeItem"><img @click= "getBossVal" class="GradeImg" data-bossname="貝倫" src="@/assets/boss/grade_chaos.png" alt="chaos"></span>
                                </span>
                            </li>
                            <li class="infoItem">

                                <span class="bossImg">
                                        <img src="@/assets/boss/list_凡雷恩.png" alt="">
                                </span>
                            
                                <span class="bossGrade">
                                    <span class="GradeItem"><img @click= "getBossVal" class="GradeImg" data-bossname="凡雷恩" src="@/assets/boss/grade_easy.png" alt="easy"></span>
                                    <span class="GradeItem"><img @click= "getBossVal" class="GradeImg" data-bossname="凡雷恩" src="@/assets/boss/grade_normal.png" alt="normal"></span>
                                    <span class="GradeItem"><img @click= "getBossVal" class="GradeImg" data-bossname="凡雷恩" src="@/assets/boss/grade_hard.png" alt="hard"></span>
                                </span>
                            </li>
                            <li class="infoItem">

                                <span class="bossImg">
                                        <img src="@/assets/boss/list_闇黑龍王.png" alt="">
                                </span>
                            
                                <span class="bossGrade">
                                    <span class="GradeItem"><img @click= "getBossVal" class="GradeImg" data-bossname="闇黑龍王" src="@/assets/boss/grade_easy.png" alt="easy"></span>
                                    <span class="GradeItem"><img @click= "getBossVal" class="GradeImg" data-bossname="闇黑龍王" src="@/assets/boss/grade_normal.png" alt="normal"></span>
                                    <span class="GradeItem"><img @click= "getBossVal" class="GradeImg" data-bossname="闇黑龍王" src="@/assets/boss/grade_chaos.png" alt="chaos"></span>
                                </span>
                            </li>
                            <li class="infoItem">

                                <span class="bossImg">
                                        <img src="@/assets/boss/list_阿卡伊農.png" alt="">
                                </span>
                            
                                <span class="bossGrade">
                                    <span class="GradeItem"><img @click= "getBossVal" class="GradeImg" data-bossname="阿卡伊農" src="@/assets/boss/grade_easy.png" alt="easy"></span>
                                    <span class="GradeItem"><img @click= "getBossVal" class="GradeImg" data-bossname="阿卡伊農" src="@/assets/boss/grade_normal.png" alt="normal"></span>
                                </span>
                            </li>
                            <li class="infoItem">

                                <span class="bossImg">
                                        <img src="@/assets/boss/list_皮卡啾.png" alt="">
                                </span>
                            
                                <span class="bossGrade">
                                    <span class="GradeItem"><img @click= "getBossVal" class="GradeImg" data-bossname="皮卡啾" src="@/assets/boss/grade_normal.png" alt="normal"></span>
                                    <span class="GradeItem"><img @click= "getBossVal" class="GradeImg" data-bossname="皮卡啾" src="@/assets/boss/grade_chaos.png" alt="chaos"></span>
                                </span>
                            </li>
                            <li class="infoItem">

                                <span class="bossImg">
                                        <img src="@/assets/boss/list_西格諾斯.png" alt="">
                                </span>
                            
                                <span class="bossGrade">
                                    <span class="GradeItem"><img @click= "getBossVal" class="GradeImg" data-bossname="西格諾斯" src="@/assets/boss/grade_easy.png" alt="easy"></span>
                                    <span class="GradeItem"><img @click= "getBossVal" class="GradeImg" data-bossname="西格諾斯" src="@/assets/boss/grade_normal.png" alt="normal"></span>
                                </span>
                            </li>
                            <li class="infoItem">

                                <span class="bossImg">
                                        <img src="@/assets/boss/list_使烏.png" alt="">
                                </span>
                            
                                <span class="bossGrade">
                                    <span class="GradeItem"><img @click= "getBossVal" class="GradeImg" data-bossname="使烏" src="@/assets/boss/grade_normal.png" alt="normal"></span>
                                    <span class="GradeItem"><img @click= "getBossVal" class="GradeImg" data-bossname="使烏" src="@/assets/boss/grade_hard.png" alt="hard"></span>
                                </span>
                            </li>
                            <li class="infoItem">

                                <span class="bossImg">
                                        <img src="@/assets/boss/list_戴米安.png" alt="">
                                </span>
                            
                                <span class="bossGrade">
                                    <span class="GradeItem"><img @click= "getBossVal" class="GradeImg" data-bossname="戴米安" src="@/assets/boss/grade_normal.png" alt="normal"></span>
                                    <span class="GradeItem"><img @click= "getBossVal" class="GradeImg" data-bossname="戴米安" src="@/assets/boss/grade_hard.png" alt="hard"></span>
                                </span>
                            </li>                             
                        </div>

                        <div v-show= "NavContidx === 2" class="page2">
                            <li class="infoItem">
                            
                            <span class="bossImg">
                                    <img src="@/assets/boss/list_守護天使綠水靈.png" alt="">
                            </span>
            
                            <span class="bossGrade">
                                <span class="GradeItem"><img @click= "getBossVal" class="GradeImg" data-bossname="守護天使綠水靈" src="@/assets/boss/grade_normal.png" alt="normal"></span>
                                <span class="GradeItem"><img @click= "getBossVal" class="GradeImg" data-bossname="守護天使綠水靈" src="@/assets/boss/grade_chaos.png" alt="chaos"></span>
                            </span>
                            </li>
                            <li class="infoItem">
                            
                            <span class="bossImg">
                                    <img src="@/assets/boss/list_露希妲.png" alt="">
                            </span>
            
                            <span class="bossGrade">
                                <span class="GradeItem"><img @click= "getBossVal" class="GradeImg" data-bossname="露希妲" src="@/assets/boss/grade_easy.png" alt="easy"></span>
                                <span class="GradeItem"><img @click= "getBossVal" class="GradeImg" data-bossname="露希妲" src="@/assets/boss/grade_normal.png" alt="normal"></span>
                                <span class="GradeItem"><img @click= "getBossVal" class="GradeImg" data-bossname="露希妲" src="@/assets/boss/grade_hard.png" alt="hard"></span>
                            </span>
                            </li>
                            <li class="infoItem">

                                <span class="bossImg">
                                        <img src="@/assets/boss/list_威爾.png" alt="">
                                </span>
                            
                                <span class="bossGrade">
                                    <span class="GradeItem"><img @click= "getBossVal" class="GradeImg" data-bossname="威爾" src="@/assets/boss/grade_easy.png" alt="easy"></span>
                                    <span class="GradeItem"><img @click= "getBossVal" class="GradeImg" data-bossname="威爾" src="@/assets/boss/grade_normal.png" alt="normal"></span>
                                    <span class="GradeItem"><img @click= "getBossVal" class="GradeImg" data-bossname="威爾" src="@/assets/boss/grade_hard.png" alt="hard"></span>
                                </span>
                            </li>
                            <li class="infoItem">

                                <span class="bossImg">
                                        <img src="@/assets/boss/list_戴斯克.png" alt="">
                                </span>
                            
                                <span class="bossGrade">
                                    <span class="GradeItem"><img @click= "getBossVal" class="GradeImg" data-bossname="戴斯克" src="@/assets/boss/grade_normal.png" alt="normal"></span>
                                    <span class="GradeItem"><img @click= "getBossVal" class="GradeImg" data-bossname="戴斯克" src="@/assets/boss/grade_chaos.png" alt="chaos"></span>
                                
                                </span>
                            </li>
                            <li class="infoItem">

                                <span class="bossImg">
                                        <img  src="@/assets/boss/list_真希拉.png" alt="">
                                </span>
                            
                                <span class="bossGrade">
                                    <span class="GradeItem"><img @click= "getBossVal" class="GradeImg" data-bossname="真希拉" src="@/assets/boss/grade_normal.png" alt="normal"></span>
                                    <span class="GradeItem"><img @click= "getBossVal" class="GradeImg" data-bossname="真希拉" src="@/assets/boss/grade_hard.png" alt="hard"></span>
                                </span>
                            </li>
                            <li class="infoItem">

                                <span class="bossImg">
                                        <img src="@/assets/boss/list_頓凱爾.png" alt="">
                                </span>
                            
                                <span class="bossGrade">
                                    <span class="GradeItem"><img @click= "getBossVal" class="GradeImg" data-bossname="頓凱爾" src="@/assets/boss/grade_normal.png" alt="normal"></span>
                                    <span class="GradeItem"><img @click= "getBossVal" class="GradeImg" data-bossname="頓凱爾" src="@/assets/boss/grade_hard.png" alt="hard"></span>
                                </span>
                            </li>
                            <li class="infoItem">

                                <span class="bossImg">
                                        <img src="@/assets/boss/list_黑魔法師.png" alt="">
                                </span>
                            
                                <span class="bossGrade">
                                    <span class="GradeItem"><img @click= "getBossVal" class="GradeImg" data-bossname="黑魔法師" src="@/assets/boss/grade_hard.png" alt="hard"></span>
                                    <span class="GradeItem"><img @click= "getBossVal" class="GradeImg" data-bossname="黑魔法師" src="@/assets/boss/grade_extreme.png" alt="extreme"></span>
                                </span>
                            </li>
                            <li class="infoItem">

                                <span class="bossImg">
                                        <img src="@/assets/boss/list_受選的賽蓮.png" alt="">
                                </span>
                            
                                <span class="bossGrade">
                                    <span class="GradeItem"><img @click= "getBossVal" class="GradeImg" data-bossname="受選的賽蓮" src="@/assets/boss/grade_normal.png" alt="normal"></span>
                                    <span class="GradeItem"><img @click= "getBossVal" class="GradeImg" data-bossname="受選的賽蓮" src="@/assets/boss/grade_chaos.png" alt="chaos"></span>
                                    <span class="GradeItem"><img @click= "getBossVal" class="GradeImg" data-bossname="受選的賽蓮" src="@/assets/boss/grade_extreme.png" alt="extreme"></span>
                                </span>
                            </li>
                            <li class="infoItem">

                                <span class="bossImg">
                                        <img src="@/assets/boss/list_監視者卡洛斯.png" alt="">
                                </span>
                            
                                <span class="bossGrade">
                                    <span class="GradeItem"><img @click= "getBossVal" class="GradeImg" data-bossname="監視者卡洛斯" src="@/assets/boss/grade_chaos.png" alt="chaos"></span>
                                </span>
                            </li>
                            <li class="infoItem">

                                <span class="bossImg">
                                        <img src="@/assets/boss/list_烏勒斯.png" alt="">
                                </span>
                            
                                <span class="bossGrade">
                                    <span class="GradeItem"><img @click= "getBossVal" class="GradeImg" data-bossname="烏勒斯" src="@/assets/boss/grade_normal.png" alt="normal"></span>
                                </span>
                            </li>
                            <li class="infoItem">

                                <span class="bossImg">
                                        <img src="@/assets/boss/list_巴洛古.png" alt="">
                                </span>
                            
                                <span class="bossGrade">
                                    <span class="GradeItem"><img @click= "getBossVal" class="GradeImg" data-bossname="巴洛古" src="@/assets/boss/grade_easy.png" alt="easy"></span>
                                </span>
                            </li>
                            <li class="infoItem">

                                <span class="bossImg">
                                        <img src="@/assets/boss/list_濃姬.png" alt="">
                                </span>
                            
                                <span class="bossGrade">
                                    <span class="GradeItem"><img @click= "getBossVal" class="GradeImg" data-bossname="濃姬" src="@/assets/boss/grade_normal.png" alt="normal"></span>
                                </span>
                            </li>
                            <li class="infoItem">

                                <span class="bossImg">
                                        <img src="@/assets/boss/list_培羅德.png" alt="">
                                </span>
                            
                                <span class="bossGrade">
                                    <span class="GradeItem"><img @click= "getBossVal" class="GradeImg" data-bossname="培羅德" src="@/assets/boss/grade_normal.png" alt="normal"></span>
                                </span>
                            </li>
                            <!-- <li class="infoItem">

                                <span class="bossImg">
                                        <img src="@/assets/boss/list_阿卡伊農.png" alt="">
                                </span>
                            
                                <span class="bossGrade">
                                    <span class="GradeItem"><img @click= "getBossVal" class="GradeImg" data-bossname="阿卡伊農" src="@/assets/boss/grade_easy.png" alt="easy"></span>
                                    <span class="GradeItem"><img @click= "getBossVal" class="GradeImg" data-bossname="阿卡伊農" src="@/assets/boss/grade_normal.png" alt="normal"></span>
                                </span>
                            </li> -->
                           
                        </div>
                        </div>

       
                       
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