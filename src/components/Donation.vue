<template>
  <div class="section">
    <div class="page-container">
      <div class="section">
        <div>
          <h1 class="title">Who can give blood</h1>
          <div class="section">
            <hr />
          </div>
        </div>
      </div>

      <div class="card-section">
        <div class="card-container">
            <img class="card" src="@/assets/card/web Gen111-19.png" />
            <img class="card" src="@/assets/card/web Gen111-20.png" />
            <img class="card" src="@/assets/card/web Gen111-21.png" />
            <img class="card" src="@/assets/card/web Gen111-22.png" />
        </div>
        <div class="card-container">
            <img class="card" src="@/assets/card/web Gen111-23.png" />
            <img class="card" src="@/assets/card/web Gen111-24.png" />
            <img class="card" src="@/assets/card/web Gen111-25.png" />
            <img class="card" src="@/assets/card/web Gen111-26.png" />
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
  margin-top:60px;
}

.card {
  width: 240px;
}

.card-section {
  margin-top: 30px;
}

.card-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 50px;
}
</style>