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
        <a
          class="nav-text select"
          href="#home"
          v-smooth-scroll="{
            duration: 1000,
            updateHistory: false,
          }"
          >Home</a
        >

        <a
          class="nav-text select"
          href="#impact"
          v-smooth-scroll="{
            duration: 1000,
            offset: -80,
            updateHistory: false,
          }"
          >Covid 19 Impact</a
        >

        <a
          class="nav-text select"
          href="#question"
          v-smooth-scroll="{
            duration: 1000,
            offset: -130,
            updateHistory: false,
          }"
          >Donating Blood</a
        >

        <button
          id="pludge-btn"
          class="nav-text"
          href="#pludge"
          v-smooth-scroll="{
            duration: 1000,
            updateHistory: false,
          }"
        >
          pledge
        </button>
      </div>
      <!-- Button -->
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import vueSmoothScroll from "vue2-smooth-scroll";
Vue.use(vueSmoothScroll);
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

.select{
  display: default;
}

@media screen and (max-width: 760px) {
  .select{
    display: none;
  }

}
</style>