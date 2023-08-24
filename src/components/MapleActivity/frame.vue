<template>
<div class="title">機率表</div>
<div class="refHref">
    <span>詳細機率: <a target="_blank" href="#">官網連結</a></span>
</div>

<div class="ProbabilityTable">
<ul>
    <h1 class="remindTxt">
        每系列中的種類機率均相等
        (<span class="mark">共10種</span>)
        <div class="framesort" v-show="true">
            <span>分為以下10種:</span>
            <span>單手攻擊、雙手攻擊、寵物攻擊、飾品攻擊、防具攻擊</span>
            <span>單手魔力、雙手魔力、寵物魔力、飾品魔力、防具魔力</span>
        </div>
    </h1>
    <li class="itemTitle"><span>重點項目</span><span>機率</span></li>
    <li><span>V系列</span><span>15%</span></li>
    <li><span>究極系列</span><span>8%</span></li>
    <li><span>命運系列</span><span>8%</span></li>
    <li><span>救世系列</span><span>1%</span></li>
    <li><span>白金槌子</span><span>5%</span></li>
    <li><span>恢復卡交換券</span><span>3%</span></li>
</ul>
</div>
</template>

<script>
export default {
    setup () {
        

        return {}
    }
}
</script>

<style lang="scss" scoped>

</style>