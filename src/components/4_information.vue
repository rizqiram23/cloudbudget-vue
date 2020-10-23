<template>
<div class="information">

<div class="title">
<div class="address"><h4>Address </h4>
<div class="addressContent">
<p>Pipang Ltd, Griva Digeni,
<p>tower 81-83 Jacovides Tower, 1st Floor</p>
<p>1090 Picosia USA</p>
</div>
</div>


  <div class="service"><h4>Service </h4>
   <div class="serviceContent">
    <div>Overview</div>   
    <div>Features</div>
    <div>Technology</div>
    <div>Terms & Conditions</div>
    <div>Privacy</div>
</div>
  </div>
  <div class="getIntouch"><h4>Get In Touch </h4>
      <div class="gitContent">
        <p>info@cloudbudget.com</p>
        <p>+1 844-721-7120</p>
        <div class="socmedLogo">
        <img src="../assets/facebook-app-symbol.png" alt="logo" width="7px" height="12px">
        <img src="../assets/linkedin-logo.png" alt="logo" width="7px" height="12px">
        <img src="../assets/twitter.png" alt="logo" width="7px" height="12px">
        </div>

      </div>
  </div>

  <div class="weSupport"><h4>We Support</h4>
      <div class="paymentLogo">
          <img src="../assets/secure-payment.png" alt="">
          </div>
  
  
  </div>

 

</div>




<div class="copyWright">
  <h5>Copyright 2018 CloudBudget test  test test </h5>
                               </div>

 
</div>
</template>

<script>
export default {

}
</script>

<style>

h4 {
  font-size: 18px;
  text-align: left;
}

.information {
  box-sizing: border-box;
  /* margin-top: 85px; */
  position: relative;
  padding-top:85px ;
  /* width: 1440px; */
  height: 435px;
  background: #FAFAFA;
}

.title {
    /* margin-top: 85px; */
    display: flex;
    justify-content: space-evenly;
    
}

.address {
  width: 254px;
}

.addressContent p {
    text-align: left;
    font-size: 12px;
  /* position: absolute; */
  /* left: auto; */
  /* text-align: left; */
}

.service {
width: 254px;
}

.serviceContent div {
/* position: absolute; */
font-size: 12px;
text-align: justify ;
}

.getIntouch {
  width:122px;
}

.gitContent p {
  font-size: 12px;
  text-align: left;
}

.socmedLogo  {
    width: 122px;
    display: inline-flex;
    flex-direction: row;
    justify-content: flex-start;
    /* padding: 10px; */
}

.socmedLogo img {
  margin-right: 13.75px;
}

.weSupport {
  width: 216px;
}

.paymentLogo img {
 
 height: 33px;
 
}

.copyWright {
  position: absolute;
  height: 14px;
  top: 335px;
  left: 130px;
  /* text-align: justify; */
  width: 155px;
  font-size: 12px;
}


</style>