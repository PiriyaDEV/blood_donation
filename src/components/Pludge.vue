<template>
  <div id="pludge" class="section">
    <div class="page-container">
      <div class="section">
        <div id="border">
          <div class="section">
            <img id="hand" src="@/assets/hand.png" />
          </div>
          <div id="button-section">
            <div>
              <h1 id="title">DONATED BLOOD TOGETHER</h1>
              <form v-on:submit.prevent="insertToContact(email, name)">
                <div class="section">
                  <h1 class="input-text">NAME :</h1>
                  <input class="input" type="text" v-model="name" />
                </div>

                <div class="section">
                  <h1 class="input-text">EMAIL :</h1>
                  <input class="input" type="email" v-model="email" />
                </div>

                <div class="section">
                  <button
                    id="pludge-btn"
                    class="nav-text"
                    type="submit"
                  >
                    pledge
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
// import * as firebase from "firebase";
import firebase from "firebase";
var config = {
  apiKey: "AIzaSyCF8cgvh9fEKuHD4A-l2pdeD3rbbp4e68Y",
  authDomain: "cpe2-blood.firebaseapp.com",
  databaseURL: "https://cpe2-blood-default-rtdb.firebaseio.com",
  projectId: "cpe2-blood",
  storageBucket: "cpe2-blood.appspot.com",
  messagingSenderId: "256036783936",
  appId: "1:256036783936:web:9eb9d717367b55f81e9ca5",
};
firebase.initializeApp(config);
firebase.analytics();

var database = firebase.database();
var contactRef = database.ref("/contacts");

export default {
  data() {
    return {
      contacts: {},
      email: "",
      name: "",
    };
  },
  mounted() {
    contactRef.on("value", (snapshot) => {
      this.contacts = snapshot.val();
    });
  },
  methods: {
    insertToContact(email, name) {
      let data = {
        email: email,
        name: name,
      };

      if (email == '' && name == '') {
        alert("Please Enter Infomation!");
      }
      else{
        contactRef.push(data);
        alert("Thank you for your pledge, " + this.name);
        this.email = "";
        this.name = "";
      }
    },
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
  margin-top: 20px;
  border: none;
  border-radius: 14px;
  background-color: #ff5f72;
  padding: 10px 40px;
  color: #ffffff;
  text-transform: uppercase;
}

@media screen and (max-width: 900px) {
  #hand {
    width: 170px;
    height: 170px;
  }

  #border {
    display: block;
    justify-content: center;
    padding: 20px;
    margin-top: 0px;
  }
}

@media screen and (max-width: 570px) {
  #title {
    font-size: 2.5em;
  }

  .input-text {
    font-size: 2em;
  }

  #pludge-btn {
    font-size: 2em;
  }
}

@media screen and (max-width: 530px) {
  #title {
    font-size: 2.5em;
    margin-bottom: 10px;
  }
}

@media screen and (max-width: 480px) {
  #hand {
    width: 100px;
    height: 100px;
  }

  .input {
    width: 150px;
  }
}
</style>