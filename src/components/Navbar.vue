<template>
  <div id="navbar" class="section">
    <div id="menu-container" class="navbar-container">
      <!-- Logo -->
      <div>
        <img id="logo" src="@/assets/logo.png" alt="" />
      </div>
      <!-- Logo -->

      <!-- Button -->
      <div id="nav-btn">
        <h1 class="nav-text">Home</h1>

        <h1 class="nav-text">Covid 19 Impact</h1>

        <h1 class="nav-text">Donating Blood</h1>

        <button id="pludge-btn" class="nav-text">pludge</button>
      </div>
      <!-- Button -->
    </div>
  </div>
</template>

<script>
export default {
  name: "navbar",
};
</script>

<style scoped>
#logo {
  height: 50px;
}

#navbar {
  /* background-color:rgba(0, 0, 0, 0.05); */
  background-color: #534966;
  z-index: 10000;
  position: fixed;
  width: 100%;
  padding: 15px 0px 15px 0px;
}

#menu-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.nav-text {
  color: #ffffff;
  font-size: 2em;
  margin-left: 70px;
  text-transform: uppercase;
  font-weight: 100;
}

#nav-btn {
  display: flex;
  justify-content: center;
  align-items: center;
}

#pludge-btn {
  background-color: #ff5f72;
  color: #ffffff;
  border: none;
  padding: 8px 25px;
  border-radius: 14px;
}
</style>