<template>
  <div class="section">
    <div class="page-container">
      <div class="section">
        <div>
          <h1 class="title">COVID 19 vaccine</h1>
          <div class="section">
            <hr />
          </div>

          <div id="box">
            <h1 class="text">
              You need to wait 7 clear days from the vaccine before donating as
              long as you are well and have no ongoing reactions to the vaccine.
            </h1>

            <div id="medicine-box">
              <img id="medicine" src="@/assets/medicine.png" />
            </div>
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
.title {
  font-size: 3em;
  font-weight: 100;
  color: #3d3d3d;
  margin-bottom: 10px;
  text-align: center;
}

#box {
  background-color: #ffe9e1;
  padding: 50px 60px 50px 400px;
  margin: 30px 0px;
  position: relative;
}

.text {
  font-size: 3em;
  font-weight: 100;
  color: #333333;
  text-align: center;
  line-height: 1.25em;
}

#medicine {
  width: 300px;
  height: 250px;
  position: absolute;
  z-index: 3;
  left: 0px;
  bottom: 0px;
}
@media screen and (max-width: 875px) {
  .text {
    font-size: 2em;
  }

  #medicine {
    width: 230px;
    height: 180px;
  }

  #box {
    padding: 35px 60px 35px 270px;
  }
}

@media screen and (max-width: 720px) {
  #medicine {
    width: 200px;
    height: 150px;
  }
}

@media screen and (max-width: 570px) {
  .title {
    font-size: 2.5em;
    margin-top: 60px;
  }

  #box {
    padding: 35px 60px 35px 230px;
  }

  #medicine {
    width: 190px;
    height: 150px;
  }
}
@media screen and (max-width: 530px) {
  .title {
    font-size: 2.5em;
  }

  #box {
    padding: 35px 60px 35px 200px;
  }

  #medicine {
    width: 160px;
    height: 130px;
  }
}

@media screen and (max-width: 440px) {
  #medicine {
    width: 120px;
    height: 90px;
    position: relative;
  }

  #box {
    padding: 20px 10px 20px 10px;
  }

  #medicine-box {
    display: flex;
    justify-content: center;
  }
}
</style>