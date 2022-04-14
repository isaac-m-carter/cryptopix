<template>
 <div class="title">
    <h1>Notifications</h1>
  </div>
  <div class="notiSection">

    <div class="notiDivP">

        <div class="notiImageDiv">
            <img src="../assets/notifications/notification(1).png" alt="" srcset="">
        </div>

        <div class="notiDescDivP">
            <div class="notiDescDivC">
                <p class="notiTitle noSpacingP">Cool Cat #8450</p>
                <p class="notiDesc noSpacingP">purchased for 0.10 ETH</p>
            </div>
            <div class="notiDate">
                <p class="noSpacingP">Just now</p>
            </div>
        </div>

        <div class="notiCheckmark">
            <img src="../assets/notifications/Ellipse1.svg" alt="" srcset="">
        </div>
        
    </div>


    <div class="notiDivP">
        <div class="notiImageDiv">
            <img src="../assets/notifications/notification(2).png" alt="" srcset="">
        </div>
        <div class="notiDescDivP">
            <div class="notiDescDivC">
                <p class="notiTitle noSpacingP">Bera</p>
                <p class="notiDesc noSpacingP">started following you</p>
            </div>
            <div class="notiDate">
                <p class="noSpacingP">2 mins ago</p>
            </div>
        </div>
        <div class="notiCheckmark">
            <img src="../assets/notifications/Ellipse1.svg" alt="" srcset="">
        </div>
    </div>

        <div class="notiDivP">
        <div class="notiImageDiv">
            <img src="../assets/notifications/notification(3).png" alt="" srcset="">
        </div>
        <div class="notiDescDivP">
            <div class="notiDescDivC">
                <p class="notiTitle noSpacingP">ETH received</p>
                <p class="notiDesc noSpacingP">0.10 ETH received</p>
            </div>
            <div class="notiDate">
                <p class="noSpacingP">15 mins ago</p>
            </div>
        </div>
        <div class="notiCheckmark">
            <img src="../assets/notifications/Ellipse1.svg" alt="" srcset="">
        </div>
    </div>
            <div class="notiDivP">
        <div class="notiImageDiv">
            <img src="../assets/notifications/notification(4).png" alt="" srcset="">
        </div>
        <div class="notiDescDivP">
            <div class="notiDescDivC">
                <p class="notiTitle noSpacingP">ETH received</p>
                <p class="notiDesc noSpacingP">4 ETH received</p>
            </div>
            <div class="notiDate">
                <p class="noSpacingP">3 hrs ago</p>
            </div>
        </div>
        <div class="notiCheckmark">
            <img src="../assets/notifications/Ellipse1.svg" alt="" srcset="">
        </div>
    </div>
            <div class="notiDivP">
        <div class="notiImageDiv">
            <img src="../assets/notifications/notification(5).png" alt="" srcset="">
        </div>
        <div class="notiDescDivP">
            <div class="notiDescDivC">
                <p class="notiTitle noSpacingP">Batman.Isaac</p>
                <p class="notiDesc noSpacingP">started following you</p>
            </div>
            <div class="notiDate">
                <p class="noSpacingP">5 hrs ago</p>
            </div>
        </div>
        <div class="notiCheckmark">
            <img src="../assets/notifications/Ellipse1.svg" alt="" srcset="">
        </div>
    </div>
            <div class="notiDivP">
        <div class="notiImageDiv">
            <img src="../assets/notifications/notification(6).png" alt="" srcset="">
        </div>
        <div class="notiDescDivP">
            <div class="notiDescDivC">
                <p class="notiTitle noSpacingP">Murder Head</p>
                <p class="notiDesc noSpacingP">purchased for 0.70 ETH</p>
            </div>
            <div class="notiDate">
                <p class="noSpacingP">2 days ago</p>
            </div>
        </div>
        <div class="notiCheckmark">
            <img src="../assets/notifications/Ellipse1.svg" alt="" srcset="">
        </div>
    </div>
            <div class="notiDivP">
        <div class="notiImageDiv">
            <img src="../assets/notifications/notification(7).png" alt="" srcset="">
        </div>
        <div class="notiDescDivP">
            <div class="notiDescDivC">
                <p class="notiTitle noSpacingP">ETH received</p>
                <p class="notiDesc noSpacingP">0.5 ETH received</p>
            </div>
            <div class="notiDate">
                <p class="noSpacingP">2 days ago</p>
            </div>
        </div>
        <div class="notiCheckmark">
            <img src="../assets/notifications/Ellipse1.svg" alt="" srcset="">
        </div>
    </div>
            <div class="notiDivP">
        <div class="notiImageDiv">
            <img src="../assets/notifications/notification (8).png" alt="" srcset="">
        </div>
        <div class="notiDescDivP">
            <div class="notiDescDivC">
                <p class="notiTitle noSpacingP">ETH received</p>
                <p class="notiDesc noSpacingP">2 ETH received</p>
            </div>
            <div class="notiDate">
                <p class="noSpacingP">5 days ago</p>
            </div>
        </div>
        <div class="notiCheckmark">
            <img src="../assets/notifications/Ellipse1.svg" alt="" srcset="">
        </div>
    </div>
    <div>
        <a href="#">
      <h5 class="return2Top">Return To Top</h5></a>
    </div>
  </div>
</template>

<style scoped>
.title{
  background-color:white;
  position:fixed;
  padding:30px 0;
  width:100%; 
  top:0;
}


.return2Top{
text-align: center;
color: #3670FA;
text-decoration-line: underline;
padding: 16px;
}

.notiSection{
  max-width: 428px;
  margin:100px auto;
  padding-bottom: 80px;
}

.notiDivP{
    margin-top: 16px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    -webkit-box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
    border-radius: 20px;
    height: auto;

}

.notiCheckmark{
    display: flex;
    /* justify-content: flex-end; */
    width: 55px;
    padding: 16px;
}

.notiDate{
    font-size:13px;
    font-weight: 600;
    margin-left: 16px;
}

.notiTitle{
    font-size: 16px;
    font-weight: 800;
}

.notiDesc{
    font-weight: 500;
    font-size: 14px;
}

.notiDescDivP{
    height: 90px;
    width: 80%;
    display: flex;
    flex-direction: column;
    align-items: left;
    justify-content: space-between;
    margin-left: 20px;
}

.notiDescDivC{
    margin-left: 16px;
    
}

.noSpacingP{
    margin: 0;
    padding: 0;
}

.notiImageDiv img{
    height:120px;
}
.notiImageDiv {
    height:120px;
    width: 25%;
    border-radius:20px;
    text-align: center;
}

</style>