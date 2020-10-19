<template>
  <div class="features-section">
      <h1 class="features-header">Features</h1>
    <div class="feature_cards-container">
        <div class="feature-card">
            <div class="feature-image img1"></div>
            <div class="card-captions">
                <p class="header">Supports All Currencies and Cards</p>
                <p class="card-par">We support all popular currencies and is fully customizable to add</p>
                <a href="#" class="feature-link">Read More</a>
            </div>
        </div>
        <div class="feature-card">
            <div class="feature-image img2"></div>
            <div class="card-captions">
                <p class="header">Manage your expenses on the go</p>
                <p class="card-par">You can access your account from anywhere in the world on any deviced</p>
                <a href="#" class="feature-link">Read More</a>
            </div>
        </div>
        <div class="feature-card">
            <div class="feature-image img3"></div>
            <div class="card-captions">
                <p class="header">Cloud Budget Management Software</p>
                <p class="card-par">Our software is made so you can access and manage your budget</p>
                <a href="#" class="feature-link">Read More</a>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>
.features-section {
    height: 660px;
    background-color: #FAFAFA;
}
.features-section h1 {
    margin-top: 0;
    padding-top: 63px;
    margin-bottom: 63px;
}
.feature_cards-container {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
}
/* cards styling */
.feature-card {
    justify-items: center;
}
.feature-image {
    width: 350px;
    height: 250px;
    border: 1px solid transparent;
    border-radius: 8px;
    margin: auto;
}
.card-captions {
    width: 293px;
    height: 198px;
    margin: auto;
    background-color:#FFFFFF;
    border: 1px solid transparent;
    border-radius: 8px;
    box-shadow: 0px 5px 30px rgba(0, 0, 0, 0.1);
    transform: translateY(-93px);
}
.header {
    font-size: 18px;
    font-weight: 700;
    margin: auto;
    margin-top: 33px;
    width: 229px;
    height: 40px;
}
.card-par {
    font-size: 12px;
    font-weight: 400;
    width: 229px;
    height: 57px;
    margin: auto;
    margin-top: 20px;
}
.feature-link {
    font-size: 12px;
    font-weight: 700;
}
/* individual card image */
.img1 {
    background: url(https://s3-alpha-sig.figma.com/img/c466/5f06/1fbdd75da83a448d4075fb483dcc5925?Expires=1603670400&Signature=CoJLdr5-8cUCB5LB0GrdQjhKu-fs5nrnb-4~baxVxi8wrjo0B8oVByFbGlaUkET2FSjUqwyrUTu1brBjv7ZFUuT37nAR0ptHugjSrsTVxyKJ2AJPlWMfLP2C6kpMurWYacmq48P7L8kCrHYR5atY9bb0JRcdEMMo7P8ZBjLk76Ule3OSoxFbGVX835RRM3hGjHUSutW75v6a64QN8lPvu7Pu8GBNIoQQ09fVIhLT8d9Hc50MUXkrUj1DzycuWmTK0zVuV826LWdHSZ6rYyr0nvoRlH0~OEflVJTWCuWV7bwXT-nuLysIvCfl3HXs3u0lpcLW5YxSX8s13s67y5ORNQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA) no-repeat center;
    background-size: cover; 
}
.img2 {
    background: url(https://s3-alpha-sig.figma.com/img/e46b/3c02/b05a03808c8c2547e92aed2df38b7f1d?Expires=1603670400&Signature=cB6UQlFMI2-dS1vNG~D5evpHq1FtOlA8rXIM3c3RFK1aeTZkoJiDbISKeZy8TcG79iof~LxRWgVzNn-k3npfLoJ7DhCdcdRljFn395OHScVZcKjmww~fWm5rchSk2XDjA8FMbtLqcMZ-BohPOPHE6zTOsKowC0srO~Skw7BxFSBCLNeHzHoTPlIOmRnCgzIE-XuARpYqeYl07HM8Qm3a0rru34X5aQIodDCdR~lYM23PlcCQza5-R16flqvVCZVAppQ3vOgzZROUunrFfA7jj5q2kfb5S4pPuch3a8bPN0ejJPxzt2y1-lO9cmXa6IpU0A45Nn6y7N73fWaCkcmRqQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA) no-repeat center;
    background-size: cover;
}
.img3 {
    background: url(https://s3-alpha-sig.figma.com/img/3897/804a/b275c80a11440f3c7232f90be6f84175?Expires=1603670400&Signature=Wa58Dzo~hsgdNefXV~5DCbuy~0WMTRopihcBwZwH5JdY5uClzgrQ3o5DVWLpcsbGW3Wi3TnGoopxkEIHyIUQt8MmlsTMYbOGjgJgiVr8RJ7-eZElnyoFKYCNC3OkC-SCqkNrLliJdCQ2Q~xTLSor7Zfj96C05rqQQTCQNd2tHTPohPkQg-aQHM530f0~CLBC80s2tYIlkVMWEy9gE9cbhCiFvBjZ9iX~1C1hYaCuckfC4v2MZQKME-2ikPMxj8U~SsJZq5gaTTGV1CmopDm~lefcfkZlsWUKzcw3kCzz3ij2IMmTj7CnQQhattsn8idJ-zBynXiMwIybDB~TnPusIw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA) no-repeat center;background-size: cover;
}
</style>