<template>
  <div>
    <div id="impact-section">
      <div class="gradient-red section">
        <div class="page-container">
          <h1 id="impact-text">COVID-19 IMPACT ON BLOOD SUPPLY</h1>
        </div>
      </div>
    </div>

    <div id="impact-detail">
      <div id="impact-space" class="page-container">
        <div class="block">
          <div class="section">
            <img class="number" src="@/assets/impact/n0.png" />
          </div>
          <div class="section">
            <img class="impact-pic" src="@/assets/impact/1.png" />
          </div>
          <h1 class="impact-title">COVID-19</h1>
          <h1 class="impact-descript">Impacts communities</h1>
        </div>

        <div class="block">
          <div class="section">
            <img class="number" src="@/assets/impact/n1.png" />
          </div>
          <div class="section">
            <img class="impact-pic" src="@/assets/impact/2.png" />
          </div>
          <h1 class="impact-title">Business & Community Events</h1>
          <h1 class="impact-descript">
            Reduced social interactions and gatherings
          </h1>
        </div>

        <div class="block">
          <div class="section">
            <img class="number" src="@/assets/impact/n2.png" />
          </div>
          <div class="section">
            <img class="impact-pic" src="@/assets/impact/3.png" />
          </div>
          <h1 class="impact-title">High School & Colleges</h1>
          <h1 class="impact-descript">Causing closures</h1>
        </div>

        <div class="block">
          <div class="section">
            <img class="number" src="@/assets/impact/n3.png" />
          </div>
          <div class="section">
            <img class="impact-pic" src="@/assets/impact/4.png" />
          </div>
          <h1 class="impact-title">Blood Drives</h1>
          <h1 class="impact-descript">
            Are cancelled due to coronavirus fears
          </h1>
        </div>

        <div class="block">
          <div class="section">
            <img class="number" src="@/assets/impact/n4.png" />
          </div>
          <div class="section">
            <img class="impact-pic" src="@/assets/impact/5.png" />
          </div>
          <h1 class="impact-title">Fewer Blood Donations</h1>
          <h1 class="impact-descript">
            Leading to a servere shortage of blood components for patients in
            need
          </h1>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.gradient-red {
  background: rgb(252, 130, 99);
  background: linear-gradient(
    90deg,
    rgba(252, 130, 99, 1) 0%,
    rgba(253, 85, 86, 1) 100%
  );
}

#impact-section {
  padding-top: 40px;
  border-bottom: 15px solid #534966;
}

#impact-text {
  font-size: 5.5em;
  margin-top: 20px;
  margin-bottom: 0px;
  color: #ffffff;
  font-weight: 100;
  text-transform: uppercase;
  padding-top: 20px;
  padding-bottom: 20px;
  text-align: center;
}

.block {
  display: block;
  justify-content: center;
  align-items: center;
  width: 140px;
}

.number {
  width: 25px;
}

.impact-pic {
  height: 124px;
}

#impact-detail {
  padding: 90px 0px 80px 0px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.impact-title {
  text-align: center;
  font-size: 3em;
  text-transform: uppercase;
  font-weight: 100;
  line-height: 1em;
  margin: 0;
  color: #222221;
}

.impact-descript {
  text-align: center;
  font-size: 2.25em;
  font-weight: 100;
  line-height: 1em;
  color: #6f6f6e;
}

#impact-space {
  display: flex;
  justify-content: space-between;
}
</style>