<template>
  <div id="pludge" class="section">
    <div class="page-container">
      <div class="section">
        <div id="border">
          <img id="hand" src="@/assets/hand.png" />
          <div id="button-p-section">
            <div>
              <h1 id="title">DONATED BLOOD TOGETHER</h1>
              <form @submit.prevent="updateFirebase">
                <div class="section">
                  <h1 class="input-text-p">NAME :</h1>
                  <input class="input-p" type="text" v-model="formData.name" />
                </div>

                <div class="section">
                  <h1 class="input-text-p">EMAIL :</h1>
                  <input class="input-p" type="email" v-model="formData.email" />
                </div>

                <div class="section">
                  <button id="pludge-btn" class="nav-text" type="submit">
                    pludge
                  </button>
                  <!-- {{ firebaseData }} -->
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import { db } from './firebase';

// const documentPath = 'form/user';

export default {
  data() {
    return {
      formData: {},
    }
  },
};
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
  height: 260px;
}

#button-p-section {
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

.input-text-p {
  font-size: 2.25em;
  font-weight: 100;
  margin-right: 10px;
  margin-top: 20px;
}

.input-p {
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
  margin-top: 20px;
  border: none;
  border-radius: 14px;
  background-color: #ff5f72;
  padding: 10px 40px;
  color: #ffffff;
  text-transform: uppercase;
}
</style>