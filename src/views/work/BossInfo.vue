<script>
import { ref , reactive , computed , onMounted } from 'vue';


import { useStore } from 'vuex';

import BossMenu from '@/components/BossMenu.vue'
import sectionTagBox from '@/components/sectionTagBox.vue'


// main
import otherBonusInfo from '@/components/otherBonusInfo.vue'
import bossBonus from '@/components/bossBonus.vue'
import bossData from '@/components/bossData.vue'
import bossIntro from '@/components/bossIntro.vue'
import damageRef from '@/components/damageRef.vue'
import axios from 'axios';

export default {
  components:{
    // nav
    BossMenu,
    sectionTagBox,

    // main
    otherBonusInfo,
    bossBonus,
    bossData,
    bossIntro,
    damageRef,  

    },
  setup () {
    const store = useStore();

    const BossSelected = computed(()=> store.getters.BossSelected)
    const SectionSelected = computed(()=> store.getters.SectionSelected)
    const GradeSelected = computed(()=> store.getters.GradeSelected)

    // const getBossSelected  = (bossName) =>{
    //   BossSelected.value = bossName;
    //   console.log(BossSelected.value);
    // }
    // const getGradeSelected = (bossGrade)=>{
    //   GradeSelected.value =  bossGrade;
    //   console.log(GradeSelected.value);
    // }
    // const getSectionSelected = (sectionVal) =>{
    //   SectionSelected.value = sectionVal
    //   console.log(SectionSelected.value);
    // }

    const BossInfo = reactive({
            "data" : {
                "露希妲" :{
                    "banner": "./img/boss/banner_露希妲.png",

                    "GradeList": [
                        {
                        "url": "./img/boss/grade_easy.png",
                        "urlact": "./img/boss/grade_easy_act.png",
                        "alt": "easy"
                    },
                        {
                        "url": "./img/boss/grade_normal.png",
                        "urlact": "./img/boss/grade_normal_act.png",
                        "alt": "normal"
                    },
                        {
                        "url": "./img/boss/grade_hard.png",
                        "urlact": "./img/boss/grade_hard_act.png",
                        "alt": "hard"
                    }
                    ],
        
                    "bossIntro":{
                        "show" : true,
                        "bosstxt": [
                            { "idx": 1, "key":"easy最低入場等級", "Grade": "easy", "title": "最低入場等級:" , "msg": "220up"},
                            { "idx": 2, "key":"easy入場次數", "Grade": "easy", "title": "入場次數:" , "msg": "3次/天"},
                            { "idx": 3, "key":"easy入場等待時間", "Grade": "easy", "title": "入場等待時間:" , "msg": "30分鐘/次"},
                            { "idx": 4, "key":"easy完成次數", "Grade": "easy", "title": "完成次數:" , "msg": "全模式每週1次"},
                            { "idx": 5, "key":"easy重置時間", "Grade": "easy", "title": "重置時間:" , "msg": "每週四 0:00更新"},
                            { "idx": 6, "key":"easy玩家命數", "Grade": "easy", "title": "玩家命數:" , "msg": "10"},
                            { "idx": 7, "key":"easy消耗欄冷卻時間", "Grade": "easy", "title": "消耗欄冷卻時間:" , "msg": "5秒"},
                            { "idx": 8, "key":"easy前置任務", "Grade": "easy", "title": "前置任務:" , "msg": "夢之都拉契爾恩"},
                            { "idx": 9, "key":"easy前置任務時間", "Grade": "easy", "title": "前置任務時間:" , "msg": "約45分"},                            
        
                            { "idx": 1, "key":"normal最低入場等級", "Grade": "normal", "title": "最低入場等級:" , "msg": "220up"},
                            { "idx": 2, "key":"normal入場次數", "Grade": "normal", "title": "入場次數:" , "msg": "3次/天"},
                            { "idx": 3, "key":"normal入場等待時間", "Grade": "normal", "title": "入場等待時間:" , "msg": "30分鐘/次"},
                            { "idx": 4, "key":"normal完成次數", "Grade": "normal", "title": "完成次數:" , "msg": "全模式每週1次"},
                            { "idx": 5, "key":"normal重置時間", "Grade": "normal", "title": "重置時間:" , "msg": "每週四 0:00更新"},
                            { "idx": 6, "key":"normal玩家命數", "Grade": "normal", "title": "玩家命數:" , "msg": "10"},
                            { "idx": 7, "key":"normal消耗欄冷卻時間", "Grade": "normal", "title": "消耗欄冷卻時間:" , "msg": "5秒"},
                            { "idx": 8, "key":"normal前置任務", "Grade": "normal", "title": "前置任務:" , "msg": "夢之都拉契爾恩"},
                            { "idx": 9, "key":"normal前置任務時間", "Grade": "normal", "title": "前置任務時間:" , "msg": "約45分"},                            
        
                            { "idx": 1, "key":"hard最低入場等級", "Grade": "hard" , "title": "最低入場等級:" , "msg": "220up"},
                            { "idx": 2, "key":"hard入場次數", "Grade": "hard" , "title": "入場次數:" , "msg": "3次/天"},
                            { "idx": 3, "key":"hard入場等待時間", "Grade": "hard" , "title": "入場等待時間:" , "msg": "30分鐘/次"},
                            { "idx": 4, "key":"hard完成次數", "Grade": "hard" , "title": "完成次數:" , "msg": "全模式每週1次"},
                            { "idx": 5, "key":"hard重置時間", "Grade": "hard" , "title": "重置時間:" , "msg": "每週四 0:00更新"},
                            { "idx": 6, "key":"hard玩家命數", "Grade": "hard" , "title": "玩家命數:" , "msg": "10"},
                            { "idx": 7, "key":"hard消耗欄冷卻時間", "Grade": "hard" , "title": "消耗欄冷卻時間:" , "msg": "5秒"},
                            { "idx": 8, "key":"hard前置任務", "Grade": "hard" , "title": "前置任務:" , "msg": "夢之都拉契爾恩"},
                            { "idx": 9, "key":"hard前置任務時間", "Grade": "hard" , "title": "前置任務時間:" , "msg": "約45分"}
                        ]
                    },
        
                    "bossData":{
                        "show" : false,
                        "stagecont":[
                            {"key":"easy一階", "Grade": "easy", "stagetitle" : "一階" , "LV" : 230 , "Defense" : "300%", "HP": 6000000000000,"HPCh":"6兆","attributeHalf": true},
                            {"key":"easy二階", "Grade": "easy", "stagetitle" : "二階" , "LV" : 230 , "Defense" : "300%", "HP": 6000000000000,"HPCh":"6兆","attributeHalf": true},
                            {"key":"normal一階", "Grade": "normal", "stagetitle" : "一階" , "LV" : 230 , "Defense" : "300%", "HP": 12000000000000,"HPCh":"12兆","attributeHalf": true},
                            {"key":"normal二階", "Grade": "normal", "stagetitle" : "二階" , "LV" : 230 , "Defense" : "300%", "HP": 12000000000000,"HPCh":"12兆","attributeHalf": true},
                            {"key":"hard一階", "Grade": "hard", "stagetitle" : "一階" , "LV" : 230 , "Defense" : "300%", "HP": 50800000000000,"HPCh":"50.8兆","attributeHalf": true},
                            {"key":"hard二階", "Grade": "hard", "stagetitle" : "二階" , "LV" : 230 , "Defense" : "300%", "HP": 54000000000000,"HPCh":"54兆","attributeHalf": true},
                            {"key":"hard三階", "Grade": "hard", "stagetitle" : "三階" , "LV" : 230 , "Defense" : "300%", "HP": 11970000000000,"HPCh":"11兆9700億","attributeHalf": true ,"hpRecoverCh":"5985億"}
                        ],
                        
                        "mosInfo": {
                            "has": true,
                            "info": [
                                {"key":"easy惡夢石巨人一階", "name":"惡夢石巨人(一階)", "Grade": "easy", "stagetitle" : "一階" , "LV" : 230 , "Defense" : "10%", "HP": 65000000000,"HPCh":"650億","attributeHalf": false},
                                {"key":"easy惡夢石巨人二階", "name":"惡夢石巨人(二階)", "Grade": "easy", "stagetitle" : "二階" , "LV" : 230 , "Defense" : "10%", "HP": 45000000000,"HPCh":"450億","attributeHalf": false},
                                {"key":"easy惡夢毒菇菇", "name":"惡夢毒菇菇", "Grade": "easy", "stagetitle" : "一階" , "LV" : 230 , "Defense" : "10%", "HP": 65000000000,"HPCh":"650億","attributeHalf": false},
        
                                {"key":"normal惡夢石巨人一階", "name":"惡夢石巨人(一階)", "Grade": "normal", "stagetitle" : "一階" , "LV" : 230 , "Defense" : "10%", "HP": 150000000000,"HPCh":"1500億","attributeHalf": false},
                                {"key":"normal惡夢石巨人二階", "name":"惡夢石巨人(二階)", "Grade": "normal", "stagetitle" : "二階" , "LV" : 230 , "Defense" : "10%", "HP": 100000000000,"HPCh":"1000億","attributeHalf": false},
                                {"key":"normal惡夢毒菇菇", "name":"惡夢毒菇菇", "Grade": "normal", "stagetitle" : "一階" , "LV" : 230 , "Defense" : "10%", "HP": 150000000000,"HPCh":"1500億","attributeHalf": false},
        
                                {"key":"hard惡夢石巨人一階", "name":"惡夢石巨人(一階)", "Grade": "hard", "stagetitle" : "一階" , "LV" : 230 , "Defense" : "10%", "HP": 600000000000,"HPCh":"6000億","attributeHalf": false},
                                {"key":"hard惡夢石巨人二階", "name":"惡夢石巨人(二階)", "Grade": "hard", "stagetitle" : "二階" , "LV" : 230 , "Defense" : "10%", "HP": 200000000000,"HPCh":"2000億","attributeHalf": false},
                                {"key":"hard惡夢毒菇菇", "name":"惡夢毒菇菇", "Grade": "hard", "stagetitle" : "一階" , "LV" : 230 , "Defense" : "10%", "HP": 600000000000,"HPCh":"6000億","attributeHalf": false}
        
                            ]
        
                        }
                    },
                    
                    "damageRef":{
                        "show" : false,
                        "region": "arc",
                        "arcList":[
                            {"damage": "10%" , "need": 0},
                            {"damage": "30%" , "need": 40},
                            {"damage": "60%" , "need": 110},
                            {"damage": "70%" , "need": 180},
                            {"damage": "80%" , "need": 255},
                            {"damage": "100%" , "need": 360},
                            {"damage": "110%" , "need": 400},
                            {"damage": "130%" , "need": 470},
                            {"damage": "150%" , "need": 540}
                        ]
        
                    },
                    "bossBonus":{
                        "show" : false,
                        "fixedItem":[
                            { "idx": 1, "key": "easy頭目點數", "Grade":"easy", "title": "頭目點數:" , "value": 30},
                            { "idx": 2, "key": "easy里程數", "Grade":"easy", "title": "里程數:" , "value": 5},
                            { "idx": 3, "key": "easy結晶價格", "Grade":"easy", "title": "結晶價格:" , "value": 48799200,"Rbvalue": 243996000},
        
                            { "idx": 1, "key": "normal頭目點數", "Grade":"normal", "title": "頭目點數:" , "value": 40},
                            { "idx": 2, "key": "normal里程數", "Grade":"normal", "title": "里程數:" , "value": 5},
                            { "idx": 3, "key": "normal結晶價格", "Grade":"normal", "title": "結晶價格:" , "value": 58457600,"Rbvalue": 292288000},
                            
                            { "idx": 1, "key": "hard頭目點數", "Grade":"hard", "title": "頭目點數:" , "value": 60},
                            { "idx": 2, "key": "hard里程數", "Grade":"hard", "title": "里程數:" , "value": 5},
                            { "idx": 3, "key": "hard結晶價格", "Grade":"hard", "title": "結晶價格:" , "value": 97438242, "Rbvalue": 487191210}
                        ],
                        "notfixedItem":[
                            {"idx": 1, "key": "easy可疑附加方塊", "Grade":"easy","url":"可疑附加方塊.png" , "title": "可疑附加方塊:" , "value": 3},
                            {"idx": 2, "key": "easy超級藥水", "Grade":"easy","url":"超級藥水.png" , "title": "超級藥水:" , "value": 40},
                            {"idx": 3, "key": "easy十字硬幣", "Grade":"easy","url":"十字硬幣.png" , "title": "十字硬幣:" , "value": 26},
                            {"idx": 4, "key": "easy輪迴星火", "Grade":"easy","url":"150輪迴星火.png" , "title": "輪迴星火:" , "value": 150},
        
                            {"idx": 1, "key": "normal可疑附加方塊", "Grade":"normal","url":"可疑附加方塊.png" , "title": "可疑附加方塊:" , "value": 4},
                            {"idx": 2, "key": "normal超級藥水", "Grade":"normal","url":"超級藥水.png" , "title": "超級藥水:" , "value": 40},
                            {"idx": 3, "key": "normal十字硬幣", "Grade":"normal","url":"十字硬幣.png" , "title": "十字硬幣:" , "value": 26},
                            {"idx": 4, "key": "normal輪迴星火", "Grade":"normal","url":"150輪迴星火.png" , "title": "輪迴星火:" , "value": 150},
        
                            {"idx": 1, "key": "hard可疑附加方塊", "Grade":"hard","url":"可疑附加方塊.png" , "title": "可疑附加方塊:" , "value": 9},
                            {"idx": 2, "key": "hard超級藥水", "Grade":"hard","url":"超級藥水.png" , "title": "超級藥水:" , "value": 50},
                            {"idx": 3, "key": "hard十字硬幣", "Grade":"hard","url":"十字硬幣.png" , "title": "十字硬幣:" , "value": 26},
                            {"idx": 4, "key": "hard輪迴星火", "Grade":"hard","url":"150輪迴星火.png" , "title": "輪迴星火:" , "value": 150}
                        ],
                        "suuAfterItemBox":{
                            "BossLv" : true,
                            "list":[
                                { "idx":1 , "key": "easy太初", "Grade":"easy" , "item": "太初" , "url": "太初.png", "infoUrl":"太初_info.png","drop": false},
                                { "idx":2 , "key": "easy名譽(5000)", "Grade":"easy" , "item": "名譽(5000)" , "url": "名譽.png", "infoUrl":"名譽_info.png","drop": true},
                                { "idx":3 , "key": "easy小經驗", "Grade":"easy" , "item": "小經驗" , "url": "小經驗.png", "infoUrl":"小經驗_info.png","drop": true},
                                { "idx":4 , "key": "easy追加經驗", "Grade":"easy" , "item": "追加經驗" , "url": "追加經驗.png","infoUrl":"追加經驗.png", "drop": true},
                                { "idx":5 , "key": "easy閃藍", "Grade":"easy" , "item": "閃藍" , "url": "閃藍.png","infoUrl":"閃藍.png", "drop": true},
                                { "idx":6 , "key": "easy閃紅", "Grade":"easy" , "item": "閃紅" , "url": "閃紅.png","infoUrl":"閃紅.png", "drop": true},
                                { "idx":7 , "key": "easy紅火", "Grade":"easy" , "item": "紅火" , "url": "紅火.png","infoUrl":"紅火.png", "drop": false},
                                { "idx":8 , "key": "easy紫火", "Grade":"easy" , "item": "紫火" , "url": "紫火.png","infoUrl":"紫火.png", "drop": false},
                                { "idx":9 , "key": "easy黑火", "Grade":"easy" , "item": "黑火" , "url": "黑火.png","infoUrl":"黑火.png", "drop": false},
                                { "idx":10 , "key": "easy強力", "Grade":"easy" , "item": "強力" , "url": "強力.png","infoUrl":"強力.png", "drop": true},
                                { "idx":11 , "key": "easy永遠", "Grade":"easy" , "item": "永遠" , "url": "永遠.png","infoUrl":"永遠.png", "drop": true},
                                { "idx":12 , "key": "easy暗黑", "Grade":"easy" , "item": "暗黑" , "url": "暗黑.png","infoUrl":"暗黑.png", "drop": false},
                                { "idx":13 , "key": "easy優質武器", "Grade":"easy" , "item": "優質武器" , "url": "優質武器.png","infoUrl":"優質武器.png", "drop": false},
                                { "idx":14 , "key": "easy優質飾品", "Grade":"easy" , "item": "優質飾品" , "url": "優質飾品.png","infoUrl":"優質飾品.png", "drop": false},
                                { "idx":15 , "key": "easy優質寵物", "Grade":"easy" , "item": "優質寵物" , "url": "優質寵物.png","infoUrl":"優質寵物.png", "drop": false},
                                { "idx":16 , "key": "easy飾品", "Grade":"easy" , "item": "飾品" , "url": "飾品.png","infoUrl":"飾品.png", "drop": false},
                                { "idx":17 , "key": "easy混沌", "Grade":"easy" , "item": "混沌" , "url": "混沌.png","infoUrl":"混沌.png", "drop": false},
                                { "idx":18 , "key": "easy匠人", "Grade":"easy" , "item": "匠人" , "url": "匠人.png","infoUrl":"匠人.png", "drop": false},
        
                                { "idx":1 , "key": "normal太初", "Grade":"normal" , "item": "太初" , "url": "太初.png", "infoUrl":"太初_info.png","drop": false},
                                { "idx":2 , "key": "normal名譽(5000)", "Grade":"normal" , "item": "名譽(5000)" , "url": "名譽.png", "infoUrl":"名譽_info.png","drop": true},
                                { "idx":3 , "key": "normal小經驗", "Grade":"normal" , "item": "小經驗" , "url": "小經驗.png", "infoUrl":"小經驗_info.png","drop": true},
                                { "idx":4 , "key": "normal追加經驗", "Grade":"normal" , "item": "追加經驗" , "url": "追加經驗.png","infoUrl":"追加經驗.png", "drop": true},
                                { "idx":5 , "key": "normal閃藍", "Grade":"normal" , "item": "閃藍" , "url": "閃藍.png","infoUrl":"閃藍.png", "drop": true},
                                { "idx":6 , "key": "normal閃紅", "Grade":"normal" , "item": "閃紅" , "url": "閃紅.png","infoUrl":"閃紅.png", "drop": true},
                                { "idx":7 , "key": "normal紅火", "Grade":"normal" , "item": "紅火" , "url": "紅火.png","infoUrl":"紅火.png", "drop": false},
                                { "idx":8 , "key": "normal紫火", "Grade":"normal" , "item": "紫火" , "url": "紫火.png","infoUrl":"紫火.png", "drop": false},
                                { "idx":9 , "key": "normal黑火", "Grade":"normal" , "item": "黑火" , "url": "黑火.png","infoUrl":"黑火.png", "drop": false},
                                { "idx":10 , "key": "normal強力", "Grade":"normal" , "item": "強力" , "url": "強力.png","infoUrl":"強力.png", "drop": true},
                                { "idx":11 , "key": "normal永遠", "Grade":"normal" , "item": "永遠" , "url": "永遠.png","infoUrl":"永遠.png", "drop": true},
                                { "idx":12 , "key": "normal暗黑", "Grade":"normal" , "item": "暗黑" , "url": "暗黑.png","infoUrl":"暗黑.png", "drop": false},
                                { "idx":13 , "key": "normal優質武器", "Grade":"normal" , "item": "優質武器" , "url": "優質武器.png","infoUrl":"優質武器.png", "drop": false},
                                { "idx":14 , "key": "normal優質飾品", "Grade":"normal" , "item": "優質飾品" , "url": "優質飾品.png","infoUrl":"優質飾品.png", "drop": false},
                                { "idx":15 , "key": "normal優質寵物", "Grade":"normal" , "item": "優質寵物" , "url": "優質寵物.png","infoUrl":"優質寵物.png", "drop": false},
                                { "idx":16 , "key": "normal飾品", "Grade":"normal" , "item": "飾品" , "url": "飾品.png","infoUrl":"飾品.png", "drop": false},
                                { "idx":17 , "key": "normal混沌", "Grade":"normal" , "item": "混沌" , "url": "混沌.png","infoUrl":"混沌.png", "drop": false},
                                { "idx":18 , "key": "normal匠人", "Grade":"normal" , "item": "匠人" , "url": "匠人.png","infoUrl":"匠人.png", "drop": false},
        
                                { "idx":1 , "key": "hard太初", "Grade":"hard" , "item": "太初" , "url": "太初.png", "infoUrl":"太初_info.png","drop": false},
                                { "idx":2 , "key": "hard名譽(5000)", "Grade":"hard" , "item": "名譽(5000)" , "url": "名譽.png", "infoUrl":"名譽_info.png","drop": true},
                                { "idx":3 , "key": "hard小經驗", "Grade":"hard" , "item": "小經驗" , "url": "小經驗.png", "infoUrl":"小經驗_info.png","drop": true},
                                { "idx":4 , "key": "hard追加經驗", "Grade":"hard" , "item": "追加經驗" , "url": "追加經驗.png","infoUrl":"追加經驗.png", "drop": true},
                                { "idx":5 , "key": "hard閃藍", "Grade":"hard" , "item": "閃藍" , "url": "閃藍.png","infoUrl":"閃藍.png", "drop": true},
                                { "idx":6 , "key": "hard閃紅", "Grade":"hard" , "item": "閃紅" , "url": "閃紅.png","infoUrl":"閃紅.png", "drop": true},
                                { "idx":7 , "key": "hard紅火", "Grade":"hard" , "item": "紅火" , "url": "紅火.png","infoUrl":"紅火.png", "drop": true},
                                { "idx":8 , "key": "hard紫火", "Grade":"hard" , "item": "紫火" , "url": "紫火.png","infoUrl":"紫火.png", "drop": true},
                                { "idx":9 , "key": "hard黑火", "Grade":"hard" , "item": "黑火" , "url": "黑火.png","infoUrl":"黑火.png", "drop": true},
                                { "idx":10 , "key": "hard強力", "Grade":"hard" , "item": "強力" , "url": "強力.png","infoUrl":"強力.png", "drop": true},
                                { "idx":11 , "key": "hard永遠", "Grade":"hard" , "item": "永遠" , "url": "永遠.png","infoUrl":"永遠.png", "drop": true},
                                { "idx":12 , "key": "hard暗黑", "Grade":"hard" , "item": "暗黑" , "url": "暗黑.png","infoUrl":"暗黑.png", "drop": true},
                                { "idx":13 , "key": "hard優質武器", "Grade":"hard" , "item": "優質武器" , "url": "優質武器.png","infoUrl":"優質武器.png", "drop": false},
                                { "idx":14 , "key": "hard優質飾品", "Grade":"hard" , "item": "優質飾品" , "url": "優質飾品.png","infoUrl":"優質飾品.png", "drop": false},
                                { "idx":15 , "key": "hard優質寵物", "Grade":"hard" , "item": "優質寵物" , "url": "優質寵物.png","infoUrl":"優質寵物.png", "drop": false},
                                { "idx":16 , "key": "hard飾品", "Grade":"hard" , "item": "飾品" , "url": "飾品.png","infoUrl":"飾品.png", "drop": true},
                                { "idx":17 , "key": "hard混沌", "Grade":"hard" , "item": "混沌" , "url": "混沌.png","infoUrl":"混沌.png", "drop": true},
                                { "idx":18 , "key": "hard匠人", "Grade":"hard" , "item": "匠人" , "url": "匠人.png","infoUrl":"匠人.png", "drop": true}
                            ]
                            
                        },
                        "majorList":[
                            { "key": "normal蝴蝶翅膀水滴石", "Grade":"normal" , "item": "蝴蝶翅膀水滴石" ,"class":"硬幣" , "url": "蝴蝶翅膀水滴石.png", "infoUrl":"蝴蝶翅膀水滴石_info.png" , "toBonusInfohref":"露希妲硬幣商店"},
                            { "key": "hard蝴蝶翅膀水滴石", "Grade":"hard" , "item": "蝴蝶翅膀水滴石" ,"class":"硬幣" , "url": "蝴蝶翅膀水滴石.png", "infoUrl":"蝴蝶翅膀水滴石_info.png" , "toBonusInfohref":"露希妲硬幣商店"},
                            { "key": "normal暮光印記", "Grade":"normal" , "item": "暮光印記" ,"class":"臉飾" , "url": "暮光印記.png", "infoUrl":"暮光印記_info.png" , "toBonusInfohref":"黎明套組"},
                            { "key": "hard暮光印記", "Grade":"hard" , "item": "暮光印記" ,"class":"臉飾" , "url": "暮光印記.png", "infoUrl":"暮光印記_info.png" , "toBonusInfohref":"黎明套組"},
                            { "key": "hard夢幻的腰帶", "Grade":"hard" , "item": "夢幻的腰帶" ,"class":"臉飾" , "url": "夢幻的腰帶.png", "infoUrl":"夢幻的腰帶_info.png" , "toBonusInfohref":"漆黑套組"},
                            { "key": "hard露希妲機器人", "Grade":"hard" , "item": "露希妲機器人" ,"class":"機器人" , "url": "露希妲機器人.png", "infoUrl":"露希妲機器人_info.png"},
                            { "key": "hard神秘冥界幽靈武器箱", "Grade":"hard" , "item": "神秘冥界幽靈武器箱" ,"class":"選擇箱" , "url": "神秘冥界幽靈武器箱.png", "infoUrl":"神秘冥界幽靈武器箱_info.png" , "toBonusInfohref":"神秘系列武器"},
                            { "key": "hard神秘冥界幽靈防具箱", "Grade":"hard" , "item": "神秘冥界幽靈防具箱" ,"class":"選擇箱" , "url": "神秘冥界幽靈防具箱.png", "infoUrl":"神秘冥界幽靈防具箱_info.png" , "toBonusInfohref":"神秘套組"},
                            { "key": "hard露希妲床鋪", "Grade":"hard" , "item": "露希妲床鋪" ,"class":"家具" , "url": "露希妲床鋪.png", "infoUrl":"露希妲床鋪_info.png" , "toBonusInfohref":"露希妲家具展示"}
                        ]
                    },
                    "otherBonusInfo":{
                        "show" : false,
                        "majorList":[
                            {"key": "露希妲硬幣商店" , "img":["露希妲硬幣商店.png"]},
                            {"key": "神秘系列武器" , "img":["神秘系列武器.png"]},
                            {"key": "神秘套組" , "img":["神秘套組.png"]},
                            {"key": "黎明套組" , "img":["黎明套組.png"]},
                            {"key": "漆黑套組" , "img":["漆黑套組.png"]},
                            {"key": "露希妲家具展示" , "img":["露希妲床鋪實體.png"]}
                        ]
                        
        
                    }
                }, 
            }
        });   
        

    // const GradeList = ref(BossInfo.data[BossSelected.value].GradeList)
    // const GradeListbool = ref(false)
    // const handGradeMenu = () =>{
    //         GradeListbool.value = !GradeListbool.value;
    //     }    
    //     const handGradeVal = (el) =>{
    //         GradeSelected.value = el.currentTarget.dataset.alt;
    //         GradeListbool.value = false;
    //         // emit
    //     }        
    //     const GradeVal = computed(()=>{
    //         const Grade =  GradeList.value.filter(item=>{
    //             return item.alt === GradeSelected.value
    //         })
    //         return Grade[0]
            
    //     })

    //     const showGradeList = computed(()=>{

    //         const Map = GradeList.value.map(item=>{
    //          if(item.alt === GradeSelected.value){
    //              return { url: item.urlact , alt: item.alt}
    //          }else{
    //              return { url: item.url , alt: item.alt}
    //          }
    //         })
           
    //         return Map;
    
    //      })      
         
         
    const init = () =>{
        store.dispatch("handInit")
    }
    
    onMounted(() => {
        init()
      })

    return {
    //   getBossSelected,
    //   getGradeSelected,
    //   getSectionSelected,
    //   SectionSelected,
    }
  }
}
</script>

<template>
<!-- <BossMenu @bossName="getBossSelected" @bossGrade="getGradeSelected"/> -->
<BossMenu/>
<!-- <sectionTagBox @sectionVal="getSectionSelected"/> -->

<main class="bossContainer">
<bossIntro />
<bossData />
<damageRef />
<bossBonus />
<otherBonusInfo /> 
</main>
</template>



<style lang="scss">
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    list-style-type: none;
}

body,html{
    background: linear-gradient(0deg, #000 0%, #555 50% ,#222 100%);
    position: relative;
    overflow: hidden;
    height: 100%;
    &::-webkit-scrollbar{
        display: none;
    }
    
}


.bossContainer{
    // display: none;
    width: 100%;
    text-align: center;
    color: #FFF;
    margin: 0 auto;
    margin-bottom: 200px;
    section{
        // display: none;
        padding: 1rem;
        background-color: #222;
        box-shadow: 0px 3px 20px #777;
        border-radius: 1rem;
        width: 1200px;
        transform-origin: top;
        margin: 0 auto;
        position: relative;
        // max-height: 95vh;
        top: 100px;
        .GradeList{
            // display: none;
            position: absolute;
            top: 3rem;
            right: 3rem;
            z-index: 2;
            user-select: none;
            cursor: pointer;
            #GradeVal{
                display: inline-block;
                width: 10rem;
                border: 1px solid #FFF;
                background: linear-gradient(120deg, #6d6d6d 0%, #2f2f2f 25%);                
                &:after{
                    display: inline-block;
                    position: absolute;
                    right: 10px;
                    // content: url(../img/boss/arrow_white.png);
                    transform: rotate(90deg);
                }
            }
            li{
                text-align: center;
                position: relative;
                top: -1rem;
                border: 1px solid #FF0;
                width: 10rem;
                font-weight: bold;
                font-size: 2rem;
                img{
                    display: inline-block;
                    // width: 100%;

                }
            }
            .misstionTime{
                display: block;
            }

        }
        
        .title{
            width: 30%;
            margin: auto;
            margin-top: 1rem;
            padding: 0.7rem;
            border: 1px solid #F00;
            border-radius: 0.4rem;
            padding: 1rem;
            
        }

    }    
}
</style>