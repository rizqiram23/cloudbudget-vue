<template>
  <main class="video-section">
      <div class="section-caption">
          <h4 class="section-header">
              Easy to Use Cloud Budget Management Software
          </h4>
          <p class="section-par">
            Our software is made so you can access and manage your budget and expenses online at any time from any device. It provides detailed income and expense reports with graphs so you can easilly see your spending patterns and budget at a glance. Read below to find out more. <br>
          </p>
          <a href="#">Learn More</a>
          
      </div>
      <div class="video-preview">
          <div class="video-container">
              <!-- sengaja ga bikin img soalnya linknya panjang bener -->
          </div>
          <button class="video-player"><font-awesome-icon :icon="['fas', 'caret-right']" class="icon"/></button>
      </div>
  </main>
</template>

<script>
export default {

}
</script>

<style >
.video-section {
    height: 500px;
    width: 100%;
    display: flex;
    justify-content: center;
}
/* videos */
.video-preview {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
}
.video-container {
    width: 445px;
    height: 311px;
    background: url('https://s3-alpha-sig.figma.com/img/159f/f19b/70edc2e47c7417224c7f0ffe37a8565f?Expires=1603670400&Signature=UvQV~cObexuHNDKK0Yjo6TtdnjOu~ZpZwbchlKjBWOhWzjrdQ4R2jQ52p-oIIE~hoJyrXbyfefwFhVoQBTMy4x1gi5AblJ5OuEsFfRrXjSqU9tHe7gJJ68f4DCeA-J0kbPMnBn7ZB1oLCNQxizYwMM5s3RejIJeRbSxzm~cvR6fjzIgHtyiUZ5Fl7PKTnLCPRlUyNybTdtaPBqN4oY1Kdvr8YiTAj2~HX5oisNAxB0wbMhl5ei8Up32kOPDFHhlOrSkOR1CaHxgMdU1hEvXHq0wqq82w621gf1yUoulrKXD3vRhzZ3k9nrUcpLyDE~XFuCPAVKS5ghSXqaGqJBCi4g__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA') center no-repeat;
    background-size: cover;
    border: 1px solid transparent;
    border-radius: 15px;
    margin-top: 94px;
}
.video-player {
    background-color: rgba(237,76,92,1);
    width: 66px;
    height: 66px;
    /* padding: 24px; */
    border: 1px solid transparent;
    border-radius: 50%;
    font-size: 24px;
    margin-left: 0;
    transform: translate(-50%, -188px);
    /* transform: translate(-50%, 300px); */
    
}
/* video caption */
.section-caption {
    width: 445px;
    margin-right: 125px;
    margin-top: 140px;
    text-align: left;
}
.section-caption h4 {
    height: 107px;
    font-size: 36px;
    line-height: 43.2px;
    margin: 0;
}
.section-caption p {
    margin-top: 24px;
    height: 95px;
    text-align: justify;
    font-size: 14px;
    line-height: 19.6px;
    margin-bottom: 0;
}
a {
    text-decoration: none;
    color: rgba(237,76,92,1);
    height: 20px;
    font-size: 14px;
}
/* Media Queries */
@media (max-width: 1120px) {
    .video-section {
        flex-direction: column;
        height: auto;
        align-items: center;
    }
    .section-caption {
        margin: auto;
        margin-top: 60px;
    }
    .video-player {
        transform: translate(190.5px, -188px);
    }
}
</style>