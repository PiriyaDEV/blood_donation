<template>
  <div id="pludge" class="section">
    <div class="page-container">
      <div class="section">
        <div id="border">
          <img id="hand" src="@/assets/hand.png" />
          <div id="button-section">
            <div>
              <h1 id="title">DONATED BLOOD TOGETHER</h1>
              <div class="section">
                <h1 class="input-text">NAME :</h1>
                <input class="input" type="text" />
              </div>

              <div class="section">
                <h1 class="input-text">EMAIL :</h1>
                <input class="input" type="text" />
              </div>

              <div class="section">
                <button id="pludge-btn" class="nav-text">pludge</button>
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
#border {
  border: 3px dashed #585857;
  padding: 30px 100px;
  border-radius: 25px;
  display: flex;
  justify-content: space-between;
  align-content: center;
  width: 100%;
  margin-top: 30px;
}

#hand {
  width: 260px;
}

#button-section {
  display: flex;
  justify-content: center;
  align-items: center;
}

#title {
  font-size: 3em;
  font-weight: 100;
  text-align: center;
  margin-bottom: 30px;
}

.input-text {
  font-size: 2.25em;
  font-weight: 100;
  margin-right: 10px;
  margin-top: 20px;
}

.input {
  border-radius: 10px;
  border: 1px solid #000000;
  padding: 7px 10px;
  font-size: 2.25em;
  font-weight: 100;
  width: 250px;
}

#pludge-btn {
  font-size: 3em;
  font-weight: 100;
  width: 150px;
  margin-top:20px;
  border: none;
  border-radius: 14px;
  background-color: #ff5f72;
  padding: 10px 40px;
  color: #FFFFFF;
  text-transform: uppercase;
}
</style>