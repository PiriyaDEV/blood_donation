<template>
  <div id="home">
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
    />
    <div id="main-section" class="section">
      <div class="page-container">
        <div id="main-box">
          <div id="info-box">
            <h1 id="blood-title">BLOOD DONATION</h1>
            <h1 id="blood-subtitle">during covid-19</h1>
            <h1 id="blood-descript">
              THE NEED FOR <span style="color: #5a131a">BLOOD</span> IS ALWAYS
              THERE.
            </h1>

            <div id="scoll-section">
              <button
                id="scrolldown"
                class="nav-text select"
                href="#impact"
                v-smooth-scroll="{
                  duration: 1000,
                  offset: -80,
                  updateHistory: false,
                }"
              >
                Read More
                <i class="fa fa-chevron-down"></i>
              </button>
            </div>
          </div>

          <div class="youtube">
            <iframe
              class="video-wrapper"
              src="https://www.youtube.com/embed/YHxdhI5ZrHc?rel=0"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
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
  padding: 180px 0px 200px 0px;
}

#main-section {
  background-image: url("../assets/bg-red.png");
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
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
  color: rgb(252, 130, 99);
  margin-bottom: 5px;
  margin-top: 30px;
  text-transform: uppercase;
  text-align: left;
  background-color: #ffffff;
  border: 2px solid #ffffff;
  padding: 8px 25px;
  border-radius: 14px;
}

i {
  width: 18px;
  margin-left: 10px;
}

@media screen and (max-width: 1200px) {
  #main-box {
    /* flex-direction: column-reverse; */
    padding: 180px 0px 50px 0px;
  }

  #blood-title {
    font-size: 7.5em;
  }

  #blood-subtitle {
    font-size: 5em;
  }

  #blood-descript {
    font-size: 2em;
  }

  #scrolldown {
    font-size: 2.5em;
  }
}

@media screen and (max-width: 960px) {
  #main-box {
    flex-direction: column-reverse;
    padding: 180px 0px 20px 0px;
  }

  .video-wrapper {
    width: 550px;
    height: 400px;
  }

  #main-section {
    /* background-image: url("../assets/bg-red-mobile.png"); */
  }

  #blood-title {
    margin-top: 20px;
  }

  #info-box {
    background: rgb(252, 130, 99);
    background: linear-gradient(
      90deg,
      rgba(252, 130, 99, 1) 0%,
      rgba(253, 85, 86, 1) 100%
    );
    padding: 20px;
    /* border-radius: 20px; */
    width: calc(100% - 40px);
    margin-top: 20px;
  }

  #blood-subtitle,
  #blood-descript,
  #scrolldown,
  #blood-title {
    text-align: center;
  }

  #blood-title {
    font-size: 6em;
  }

  #scoll-section {
    display: flex;
    justify-content: center;
  }
}

@media screen and (max-width: 730px) {
  .video-wrapper {
    width: 350px;
    height: 260px;
  }
}

@media screen and (max-width: 540px) {
  #main-box {
    padding: 130px 0px 20px 0px;
  }

  #blood-title {
    font-size: 4em;
  }

  #blood-subtitle {
    font-size: 2.5em;
  }

  #blood-descript {
    font-size: 2em;
  }

  #scrolldown {
    font-size: 2.5em;
  }
}

@media screen and (max-width: 540px) {
  .video-wrapper {
    width: 330px;
  }
}
</style>
