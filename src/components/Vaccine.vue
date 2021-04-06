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

            <img id="medicine" src="@/assets/medicine-white.png" />
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
  width: 200px;
  position: absolute;
  z-index: 3;
  left: 0px;
  bottom: 0px;
  width: 300px;
}
</style>