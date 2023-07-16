<script>
import { ref , computed, reactive ,  } from 'vue';

export default {
    emits:{
        sectionVal: (sectionVal)=>{
            const sectionkey = ["BOSS入場規則","BOSS資訊","BOSS獎勵","獎勵資訊說明"]
            return sectionkey.includes(sectionVal.value) ? true : false;

        }
    },  
    setup (props,{ emit }) {
        
        // sectionTag
        const sectionTagItem = reactive([
            {act: true , title: "BOSS入場規則"},
            {act: false , title: "BOSS資訊"},
            {act: false , title: "BOSS獎勵"},
            {act: false , title: "獎勵資訊說明"},
        ])
        const sectioncont = reactive([
            {  idx:0, section: "bossIntro", open: false},
            {  idx:1, section: "bossData", open: true},
            {  idx:2, section: "damageRef", open: true},
            {  idx:3, section: "bossBonus", open: false},
            {  idx:4, section: "otherBonusInfo", open: false}
        ])
        const sectionVal = ref("")

        const handsectionTagAct = (el) =>{
            // console.log(el.target.innerText);


            // 處理 sectionTagBox Css變化
            sectionTagItem.map(item=>{
                if(el.target.innerText === item.title){
                    return item.act = true
                }
                return item.act = false
            })
            
             // 處理 section Render變化
            sectioncont.map(item=>{
                return item.open = false;
            })

           
           
            if(el.target.innerText === "BOSS入場規則"){
                sectioncont[0].open = true;
                console.log(sectioncont);
                sectionVal.value = "BOSS入場規則"
                emit("sectionVal",sectionVal)

                return;
            }
            if(el.target.innerText === "BOSS資訊"){
                sectioncont[1].open = true;
                sectioncont[2].open = true;

                sectionVal.value = "BOSS資訊"
                emit("sectionVal",sectionVal)

                return;
            }
            if(el.target.innerText === "BOSS獎勵"){
                sectioncont[3].open = true;
                sectionVal.value = "BOSS獎勵"
                emit("sectionVal",sectionVal)


                return;
            }
            if(el.target.innerText === "獎勵資訊說明"){
                sectioncont[4].open = true;
                sectionVal.value = "獎勵資訊說明"
                emit("sectionVal",sectionVal)

                return;
            }

            
            
        }
        return {
            sectionTagItem,
            sectioncont,
            handsectionTagAct
        }
    }
}
</script>


<template>
        <div class="sectionTagBox">
            <ul class="taglist">
                <li 
                @click= "handsectionTagAct"
                :class="['tagitem', {act : list.act}]"
                v-for="list in sectionTagItem"
                :key= "list.title"
                >{{list.title}}
                </li>
            </ul>
        </div>    
</template>



<style lang="scss" scoped>
.sectionTagBox{
    // display: none;
    user-select: none;
    position: fixed;
    z-index: 2;
    top: 10rem;
    left: 2rem;
    width: 13rem;
    padding: 1rem;
    font-weight: bold;
    background: #444;
    border-radius: 0.5rem;
    box-shadow: 0px 3px 5px #777;
    .taglist{
        .tagitem{
            cursor: pointer;
            font-size: 1.27rem;
            padding-top: 0.5rem;
            color: #888;
            transition: 0.3s;
            &.act{
                color: #FFF
            }
            &:hover{
                transition: 0.3s;
                color: #FFF
            }

        }
    }
}
</style>