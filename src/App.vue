<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: "app",
  methods: {
    track () {
      this.$ga.page('/')
    }
  }
};
</script>

<style>
@font-face {
  font-family: Supermarket;
  src: url("../src/fonts/supermarket.ttf");
  font-weight: normal;
}

@font-face {
  font-family: LeagueSpartan;
  src: url("../src/fonts/LeagueSpartan-Bold.otf");
  font-weight: normal;
}

body,
html,
input,
textarea,
button {
  padding: 0;
  margin: 0;
  font-family: "Supermarket";
  font-size: 8px;
  overflow-x: hidden;
}

input[type="password"]::-ms-reveal,
input[type="password"]::-ms-clear {
  display: none;
}

input::-webkit-credentials-auto-fill-button {
  background-color: white;
}
::placeholder {
  color: #cccccc;
}
/* Change the white to any color */
input:-webkit-autofill,
input:-webkit-autofill:hover,
input:-webkit-autofill:focus,
input:-webkit-autofill:active {
  -webkit-box-shadow: 0 0 0 30px white inset !important;
}

hr {
  background-color: #f3725f;
  border: 2px solid #f3725f;
  width: 60px;
  text-align: center;
}

a {
  text-decoration: none;
  color: inherit;
}

button {
  outline: 0;
  cursor: pointer;
  -webkit-transform: perspective(1px) translateZ(0);
  transform: perspective(1px) translateZ(0);
  box-shadow: 0 0 1px rgba(0, 0, 0, 0);
  -webkit-transition-duration: 0.3s;
  transition-duration: 0.3s;
  -webkit-transition-property: transform;
  transition-property: transform;
}

button:hover, button:focus, button:active {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}



.section {
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2;
}

.page-container {
  width: 1440px;
  max-width: 1440px;
  padding: 0;
}

.navbar-container {
  width: 1440px;
  max-width: 1440px;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1001;
  padding: 0;
}

@media screen and (max-width: 1920px) {
  .page-container,
  .navbar-container {
    width: 1280px;
    max-width: 1280px;
  }
}
@media screen and (max-width: 1650px) {
}
@media screen and (max-width: 1440px) {
  .page-container,
  .navbar-container {
    width: 1024px;
    max-width: 1024px;
  }
}
@media screen and (max-width: 1024px) {
  .page-container,
  .navbar-container {
    width: 960px;
    max-width: 960px;
    padding-left: 20px;
    padding-right: 20px;
  }
}
@media screen and (max-width: 768px) {
  .page-container,
  .navbar-container {
    width: 720px;
    max-width: 720px;
  }
}
@media screen and (max-width: 767px) {
  .page-container,
  .navbar-container {
    width: 720px;
    max-width: 720px;
  }
}
@media screen and (max-width: 600px) {
}
@media screen and (max-width: 414px) {
  .page-container,
  .navbar-container {
    width: 374px;
    max-width: 374px;
  }
}
@media screen and (max-width: 375px) {
  .page-container,
  .navbar-container {
    width: 355px;
    max-width: 355px;
  }
}
@media screen and (max-width: 360px) {
  .page-container,
  .navbar-container {
    width: 335px;
    max-width: 335px;
  }
}
</style>
