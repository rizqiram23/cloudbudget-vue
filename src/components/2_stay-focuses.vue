<template>
  <div class="stayFocuses">
   <div class="video">
        <img class="foto-kanan" src="../assets/right picture.png" alt="" width="383px" height="267px">
        <img class="foto-tengah" src="../assets/center picture.png" alt="">
        <img class="foto-kiri" src="../assets/left picture.png" alt="">
    </div>
    <div class="sectionCaption">
    <h1>Stay Focused on saving money</h1>
    <p>It is important to stay focused on saving money in any way you can. We
       help you monitor your spending habits so you can easily spot and cut
       any unnecessary expenses.Simply join today to get started!</p>

    <div class="container">
        <!-- <div><img class="logo" src="../assets/play-store.png" alt="" width="50px" height="50px"></div> -->
        <i class="fab fa-google-play"></i>
        <!-- <div><img class="logo" src="../assets/app-store.png" alt="" width="50px" height="50px"></div> -->
        <i class="fab fa-app-store-ios"></i>
        <!-- <div><img class="logo" src="../assets/windows-logo.png" alt="" width="50px" height="50px"></div> -->
        <i class="fab fa-windows"></i>
    </div>
    
    </div>
    
</div>
</template>

<script>
export default {

}
</script>

<style>
.fab {
    font-size: 28px;
    margin-right: 28px;
}
.stayFocuses {
    background-color: rgba(237, 76, 92, 1);
    display: flex;
    font-family: 'Lato', sans-serif;
    color: white;
    height: 500px;
    /* display: flex; */
    /* text-align: center; */
}

.sectionCaption {
    width: 445px;
    text-align: justify;
    margin-top: 122px;
    margin-left: 165px;
}

.sectionCaption h1 {
    font-size: 36px;
    height: 107px;
}

.sectionCaption p {
    font-size: 14px;
    height: 64px;
    line-height: 19.6px;
}

.container {
    display: inline-flex;
}

.container .logo {
    width: 60px;
    height: 60px;
    padding: 10px;
    margin: 10px;
}


.video .foto-kanan {
    float: right;
    margin: 5px;
    width: 383px;
    height: 267px;
    position: absolute;
    margin-top: 116px;
    right: 216px;
    z-index: 5;
    
    /* left: 336px; */
    
}

.video .foto-tengah {
    float: right;
    margin: 5px;
    width: 445px;
    height: 311px;
    position: absolute;
    margin-top:94px ;
    right: 260px;
    z-index: 10;
    /* left: 735px; */
    
}

.video .foto-kiri {
    float: right;
    margin: 5px;
    width: 383px;
    height: 267px;
    position: absolute;
    margin-top: 116px;
    right: 366px;
    z-index: 5;
    /* left: 841px; */
    
}
</style>
