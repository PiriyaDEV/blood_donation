<template>
  <div class="section">
    <div class="page-container">
      <div class="section">
        <div>
          <h1 class="title">
            Further criteria regarding Coronavirus (COVID-19) test results
          </h1>
          <div class="section">
            <hr />
          </div>

          <div id="result-section">
            <div>
              <!-- Result -->
              <div class="small-pink section">
                <div>
                  <h1 class="detail">
                    If you have tested <span class="red">positive</span> and
                    <span class="red">had symptoms</span> of coronavirus you
                    must wait <span class="red">28 days</span> from resolution
                    of symptoms
                  </h1>
                </div>

                <div class="outer-circle">
                  <div class="inner-circle section">
                    <h1 class="number">28</h1>
                  </div>
                </div>
                <img class="find" src="@/assets/result/finding+.png" />
              </div>

              <!-- Result -->
              <div class="small-pink-right section">
                <div class="outer-circle-right">
                  <div class="inner-circle section">
                    <h1 class="number">28</h1>
                  </div>
                </div>
                <div>
                  <h1 class="detail">
                    If you have tested <span class="red">positive</span> and
                    <span class="red">not had symptoms</span> of coronavirus you
                    must wait <span class="red">28 days</span> from the date of
                    your last positive test
                  </h1>
                </div>

                <img
                  class="find-right reflect"
                  src="@/assets/result/finding+.png"
                />
              </div>

              <!-- Result -->
              <div class="small-pink section">
                <div>
                  <h1 class="detail">
                    If you have tested <span class="red">negative</span> but
                    <span class="red">had coronavirus symptoms</span> you must
                    wait <span class="red">14 days</span> from resolution of
                    symptoms
                  </h1>
                </div>

                <div class="outer-circle">
                  <div class="inner-circle section">
                    <h1 class="number">14</h1>
                  </div>
                </div>
                <img class="find" src="@/assets/result/finding-.png" />
              </div>

              <!-- Result -->
              <div class="small-pink-right section">
                <div class="outer-circle-right">
                  <div class="inner-circle section">
                    <h1 class="number">28</h1>
                  </div>
                </div>
                <div>
                  <h1 class="detail">
                    If you <span class="red">had coronavirus symptoms</span> but
                    have had no test or awaiting a result of a test you must
                    wait <span class="red">28 days</span> from resolution of
                    symptoms
                  </h1>
                </div>

                <img
                  class="find-right reflect"
                  src="@/assets/result/finding.png"
                />
              </div>
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
  margin-top: 50px;
}

#result-section {
  display: flex;
  justify-content: center;
  align-items: center;
}

.small-pink {
  border: 4px solid #ffc5c5;
  border-radius: 60px;
  padding: 3px 10px 3px 240px;
  margin: 50px 0px;
  position: relative;
}

.small-pink-right {
  border: 4px solid #ffc5c5;
  border-radius: 60px;
  padding: 3px 240px 3px 10px;
  margin: 70px 0px;
  position: relative;
}

.inner-circle {
  padding: 10px;
  border-radius: 60px;
  background-color: #10465b;
  width: 20px;
  height: 20px;
}

.outer-circle {
  padding: 10px;
  border-radius: 60px;
  background-color: #f45d73;
  margin-left: 20px;
}

.outer-circle-right {
  padding: 10px;
  border-radius: 60px;
  background-color: #f45d73;
  margin-right: 20px;
}

.number {
  color: #ffffff;
  font-size: 2.5em;
  font-weight: 100;
}

.detail {
  font-size: 2.5em;
  font-weight: 100;
  color: #000000;
  line-height: 1.25em;
}

.red {
  color: #a31717;
}

.find {
  position: absolute;
  z-index: 3;
  left: -10px;
  width: 180px;
}

.find-right {
  position: absolute;
  z-index: 3;
  right: -10px;
  width: 180px;
}

.reflect {
  -webkit-transform: scaleX(-1);
  transform: scaleX(-1);
}

@media screen and (max-width: 875px) {
  .find,
  .find-right {
    width: 135px;
  }

  .detail {
    font-size: 2em;
  }
}

@media screen and (max-width: 720px) {
  .small-pink {
    padding: 1px 10px 1px 200px;
    margin: 40px 0px;
  }

  .small-pink-right {
    padding: 1px 200px 1px 10px;
    margin: 60px 0px;
  }
}

@media screen and (max-width: 570px) {
  .find,
  .find-right {
    width: 100px;
  }

  .small-pink {
    padding: 1px 10px 1px 130px;
    margin: 40px 0px;
  }

  .small-pink-right {
    padding: 1px 130px 1px 10px;
    margin: 10px 0px;
  }

  .outer-circle {
    margin-left: 0px;
  }
}

@media screen and (max-width: 530px) {
  .title {
    font-size: 2.5em;
  }
}

@media screen and (max-width: 440px) {
  .small-pink {
    padding: 1px 10px 1px 100px;
  }

  .small-pink-right {
    padding: 1px 100px 1px 10px;
  }

  .small-pink,.small-pink-right {
    border-radius: 20px;
  }

  .find{
    left: -13px;
  }

   .find-right{
     right: -13px;
   }
}
</style>