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
          <img class="card card-mobile" src="@/assets/card/web Gen111-23.png" />
          <img class="card card-mobile" src="@/assets/card/web Gen111-24.png" />
          <img class="card card-mobile" src="@/assets/card/web Gen111-25.png" />
          <img class="card card-mobile" src="@/assets/card/web Gen111-26.png" />
        </div>
        <div class="card-container">
          <img class="card card-web" src="@/assets/card/web Gen111-23.png" />
          <img class="card card-web" src="@/assets/card/web Gen111-24.png" />
          <img class="card card-web" src="@/assets/card/web Gen111-25.png" />
          <img class="card card-web" src="@/assets/card/web Gen111-26.png" />
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
  margin-top: 60px;
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

.card-mobile {
  display: none;
}

.card-web {
  display: block;
}

@media screen and (max-width: 1080px) {
  .card {
    width: 200px;
    list-style: none;
    margin-top: 30px;
  }
}

@media screen and (max-width: 820px) {
  .card-mobile {
    display: block;
  }

  .card-web {
    display: none;
  }

  .card-container {
    justify-content: space-evenly;
    flex-wrap: wrap;
    margin-bottom: 30px;
  }
}

@media screen and (max-width: 570px) {
  .title {
    font-size: 2.5em;
  }

  .card {
    width: 130px;
    margin-top: 20px;
  }
}

@media screen and (max-width: 530px) {
  .title {
    font-size: 2.5em;
  }
}
</style>