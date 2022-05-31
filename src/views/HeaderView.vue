<template>
<div class="header-sub">
    <div class="sub-left">
        <span class="text_dashboard">Dash Board</span>
        <div class="brumb">
            <p class=""><a href="#" class="brums-links">Home</a></p>
            <p class="border-minus"></p>
            <p class=""><a href="#" class="brums-links">My Team</a></p>
            <p class="border-minus"></p>
            <p class=""><a href="#" class="brums-links">Dashboard</a></p>
        </div>
    </div>
    <div class="header-sort">
        <div class="select-title"><span>Sort By:</span></div>
        <div class="select">
            <span>Latest</span>
            <i class='bx bx-chevron-down'></i>
        </div>
    </div>
    <div class="sep-br">
    </div>
    <div class="impact-level">
        <div class="level-title"><span>Impact Level:</span></div>
        <div class="impact-range">
            <span ></span>
        </div>
    </div>
    <div class="sep-br_impact">
    </div>
    <div class="tools">
        <div class="tools-file"><span>Quick Tools:</span></div>
        <div class="tools-icons">
            <i class='bx bxs-file-blank'></i>
            <i class='bx bxs-file-plus'></i>
            <i class='bx bxs-file'></i>
        </div>
    </div>
</div>
</template>

<script>
export default {

}
</script>

<style scoped>
.header-sub {
    display:flex;
    position: absolute;
    justify-content: center;
    flex-wrap: wrap;
    align-content: center;
    width: 100%;
    min-height: 74px;
    background: #FFFFFF;
}
.sub-left .text_dashboard {
    margin-top: 10px;
    font-family: 'Poppins';
    font-weight: 700;
}

.header-sub .sub-left {
position: absolute;
top: 12px;
left: 10px
}

.header-sub .header-sort {
    display: flex;
}

.brumb {
    display: flex;
}
.brumb p {
    margin: 5px;
}
.brumb p a {
    text-decoration: none;
    color: #B5B5C3;
}
.brumb p a:hover {
    color: #000000;
    transform: all 0.4 ease;
}

.brumb .border-minus {
    margin-top: 12px;
}

.border-minus {
 border-radius: 6px;
 width: 5px;
 height: 2.5px;
 border: 1px solid #E4E6EF;
 background: #E4E6EF;
}
.header-sort .select-title {
    height: 18px;
    width: 46px;
    line-height: 35px;
}
 .header-sort .select-title span {
     color: #7E8299;
     font-weight: 600;
     font-family: 'Poppins';
     line-height: 18px;
     font-style: normal;
     font-size: 12px;
}

.header-sort .select {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    padding: 10px 14px;
    gap: 16px;
    border-radius: 6px;
    background: #F5F8FA;
}

.header-sort .select span {
    color: #7E8299;
    font-size: 12px;
}
.header-sort .select i {
    color: #7E8299;
    line-height: 16px;
}

.header-sub .sep-br {
    position: absolute;
    width: 1px;
    height: 34px;
    left: 800px;
    background: #EFF2F5;
    top: 20px;
}
.impact-level {
    position: absolute;
    width: 268px;
    height: 30px;
    left: 812px;
    top: 26px;
}

.impact-level .level-title span {
    font-size: 12px;
    font-family: 'Poppins';
    font: normal;
    line-height: 18px;
    color: #5E6278;
}

.header-sub .sep-br_impact {
    position: absolute;
    width: 1px;
    height: 34px;
    left: 950px;
    background: #EFF2F5;
    top: 20px;
}

.tools {
    position: absolute;
    display: flex;
    left: 1000px;
    top: 26px;
}

.tools .tools-file span {
    font-size: 12px;
    font-weight: 600;
    color: #7E8299;
}

.tools .tools-icons i {
  padding: 0px 10px;
  opacity: 0.25;
  font-size: 25px;
}
</style>
