<template>
  <div id="home">
    <div id="main-section" class="section">
      <div class="page-container">
        <div id="main-box">
          <div>
            <h1 id="blood-title">BLOOD DONATION</h1>
            <h1 id="blood-subtitle">during covid-19</h1>
            <h1 id="blood-descript">
              THE NEED FOR <span style="color: #5a131a">BLOOD</span> IS ALWAYS
              THERE.
            </h1>
          </div>

          <div class="youtube">

            <iframe
              class="video-wrapper"
              src="https://www.youtube.com/embed/JurPFO0wFE8?rel=0"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
        </div>
      </div>
    </div>

    <div id="scroll-section">
      <div class="page-container">
        <div class="vert-move">
          <h1 id="scrolldown">scroll down</h1>
          <div class="section">
            <img id="icon" src="@/assets/icon/icons8-chevron-down-96.png" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
#main-box {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 180px 0px 250px 0px;
}

#main-section {
  background-image: url("../assets/back-red-mainpage.png");
  background-repeat: no-repeat;
  background-size: 100% auto;
  background-position: center top;
}

.video-wrapper {
  width: 470px;
  height: 278px;
}

#blood-title {
  font-size: 9em;
  margin: 0;
  color: #ffffff;
  font-weight: 100;
}

#blood-subtitle {
  font-size: 7em;
  margin-top: 20px;
  margin-bottom: 0px;
  color: #ffd56e;
  font-weight: 100;
  text-transform: uppercase;
}

#blood-descript {
  font-size: 3em;
  margin-top: 30px;
  margin-bottom: 0px;
  font-weight: 100;
  color: #ffffff;
  text-transform: uppercase;
}

#scrolldown {
  font-size: 3em;
  color: #5e5e6d;
  margin-bottom: 5px;
  margin-top: 10px;
  text-transform: uppercase;
  text-align: center;
}

#scroll-section {
  padding-top: 20px;
  border-bottom: 1px solid black;
  padding-bottom: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
}

#icon {
  width: 18px;
}
</style>