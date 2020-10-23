<template>
  <div id="background">
    <div class="title">
        <h1>Technology</h1>
    </div>

     <div class="content">
        <div class="cloudStorage contentCard">
          <div class="cls imgContainer">
            <h1 class="cloudNumber">01</h1>
            <img class="cloudImg contentImg" src="../assets/Vector(1).png" alt="">
              </div>

            <div class="clsWord contentWord">
            <h3>Cloud Storage</h3>
            <p>Access your account from anywhere in the world on any device</p>
            </div>
            
        </div>

        <div class="secure contentCard">
          <div class="scr imgContainer">
            <h1>02</h1>
            <img class="secureImg contentImg" src="../assets/secure.png" alt="">
          </div>
         
         <div class="secureWord contentWord">
            <h3>Secure</h3>
            <p>All your information is stored on secure cloud servers</p>
            </div>
            
        </div>

        <div class="pdfDownload contentCard">
          <div class="pdfImg imgContainer">
            <h1>03</h1>
            <img class="pdfImage contentImg" src="../assets/pdf.png" alt="">
          </div>
             
            <div class="pdfWord contentWord">
            <h3>PDF Download</h3>
            <p>Download any of your reports in PDF format</p>
            </div>

        </div>
        
        <div class="csvDownload contentCard">
          <div class="csvNewimg imgContainer">
           <h1>04</h1>
            <img class="csvImg contentImg" src="../assets/csv.png" alt="">
          </div>
            <div class="csvWord contentWord">
            <h3>CSV Download</h3>
            <p>All your information is stored on secure cloud servers</p>
            </div>

      </div>

</div>
  </div>
</template>

<script>
export default {
   
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

#background {
width: 100%;
height: 500px;
/* top: 1942px; */
}

.title h1 {
  margin: 0;
  margin-top: 63px;
  margin-bottom: 52px;
}

.contentCard {
  display: flex;
  flex-direction:column ;
}

.contentWord {
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: flex-end;
}

.contentWord p {
  margin-top: 10px;
}

.contentImg {
  transform: translateY(-100%);
}

.imgContainer {
  margin: auto;
  margin-bottom: 19px;
}

.title {
    text-align: center;
}

.cloudStorage {
  /* display: flex;
  flex-direction: column; */
  margin-right: 30px;
  height:226px;
  width: 255px;
}


.cls {
  /* top: 170px; */
  /* left: 234px; */
  width: 117px;
  height: 120px;
  position: relative;
}

.clsWord h3 {
  /* position: absolute; */
  /* top: 309px;
  left: 236px; */
  /* bottom: 169px; */
}
 .clsWord p {
   /* position:absolute; */
   top: 341px;
   left: 199px;
   bottom: 108px;

 }

.secure {
  margin-right: 30px;
  height: 226px;
  width: 255px ;
}

.scr {
  /* position: relative; */
  width: 117px;
  height: 120px;

}

.secureWord h3 {
top: 309px;
left: 550px;
bottom: 169px;
}

.secureWord p {
  width: 191px;
  height: 51px;
  top: 341px;
  left: 484px;
}

.pdfDownload {
  width: 122px;
  height: 22px;
  margin-right: 30px;
  height: 226px;
  width: 255px ;
}

.pdfImg {
  width: 117px;
  height: 120px;
}

.pdfWord h3 {
  top: 309px;
  left: 550px;
}

.pdfWord p {
  top:341px ;
  left: 484px;
}

.csvDownload {
  margin-right: 30px;
  height: 226px;
  width: 255px ;
}

.csvWord h3 {
  top: 309px;
  left: 1087px;
}

.csvWord p {
  top: 341px;
  left: 1054px;
}

.csvNewimg {
  width: 117px;
  height: 120px;
}

p {
  width: 191px;
  height: 51px;
  font-size: 12px;
  line-height: 14px;
  margin: auto;
}

.content {
    display: flex;
    justify-content: center;
}

.content h1 {
/* position: absolute; */
font-size: 100px;
line-height: 120px;
color: rgba(16, 16, 16, 0.08);
margin-bottom: 19px;
margin-top: 0;
height: 120px;
width: 117px;
margin: auto;
}

.content h3 {
  margin-top: 0;
  margin-bottom: 10px;
  margin: auto;
}


.cloudImg {
/* margin: auto; */
/* position: absolute; */
/* top: 221.5px; */
/* left: 257px; */
bottom: 0;
/* right: 1113px; */
}

.secureImg {
/* position: absolute; */
top: 218.35px;
/* left: 553.15px; */
bottom: 202.35px;
/* right: 839.16px; */
}

.pdfImage {
/* position: absolute; */
top: 219px;
/* left: 839.09px; */
bottom: 207px;
/* right: 553.09px; */
}

.csvImg {
/* position: absolute; */
top: 221px;
/* left: 1124px; */
bottom: 206px;
/* right: 269px; */
}






</style>
