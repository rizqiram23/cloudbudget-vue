<template>
  
 <div class="ContactUs">
   <div class="contentText">
    <h1>Contact</h1>
    <p>Questions or concerns? Just fill out the form below and our support team will get back to you within 24 hours</p>
    </div>
    

    <form action="">
    <div class="nameData">
    <input type="text" name="First Name" id="fname" placeholder="First Name">
    <input type="text" id="lname" name="lastname" placeholder="Last Name">
    </div>

    <input type="text" name="phoneNumber" id="pnumber" placeholder="Phone Number">

    <select id="selectService" name="service" placeholder="Select Service">
    <option value="cloudStorage">Cloud Storage</option>
    <option value="secure">Secure</option>
    <option value="pdf">PDF Download</option>
    <option value="csv">CSV Download</option>
    </select>

    <button id="submitButton"  type="submit">SUBMIT NOW</button>
    </form>
  


 </div>

</template>

<script>
export default {

}
</script>

<style>

.ContactUs {
  /* padding-top: 117px; */
  display: flex;
  justify-content: space-evenly;
  /* width: 1440px; */
  height: 545px;
}

.contentText{
margin-top:  117px; 
text-align: left;
width: 445px;
height: 107px;
}

 
Form{
  margin-top: 117px;
  text-align: right;
  width: 540px;
  outline: none;
  /* padding: 10px; */
}

.nameData {
  display: flex;
}

#fname {
 margin-bottom: 24px;
 margin-right: auto;
 width: 255px;
 height: 60px;
 /* left: 735px; */
 /* top: 3059px; */
 border-radius: 4px;
}

#lname {
 width: 255px;
 height: 60px;
 left: 735px;
 top: 3059px;
 border-radius: 4px;
}

#pnumber { 
margin-bottom: 24px;  
width: 540px;
height: 60px;
left: 735px;
top: 3143px;
border-radius: 4px;
}

#selectService {
margin-bottom: 27px;
width: 540px;
height: 60px;
left: 735px;
top: 3143px;
border-radius: 4px;
}

#submitButton {
margin-right: 380px;
width: 160px;
height: 50px;
left: 735px;
top: 3314px;
border: 1.5px solid #ED4C5C;
box-sizing: border-box;
background: #ed4c5c;
border-radius: 6px;
color: white;
}



</style>