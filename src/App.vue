<template>
  <div id="app">
    <div class="header">
      <div class="icons">
        <img alt="Vue logo" src="./my_unsplash_logo.svg" />
      </div>
      <div class="forms">
        <span class="material-icons">search</span>
        <input type="text" placeholder="Search by name" />
      </div>
      <div class="add"><button>Add a photo</button></div>
    </div>
    <div class="login">
      <div class="loginText">
        <h1 @click="fire">deneem</h1>
        <p>deneem</p>
      </div>
    </div>

    <HelloWorld msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";

import * as firebase from "firebase/app";

// If you enabled Analytics in your project, add the Firebase SDK for Analytics
import "firebase/analytics";
import "firebase/database";
// Add the Firebase products that you want to use
import "firebase/auth";
var firebaseConfig = {
  apiKey: "AIzaSyBJqRMlOYjnWSkgm-1JabStYp5txI01xr0",
  authDomain: "myunsplash-bc144.firebaseapp.com",
  databaseURL: "https://myunsplash-bc144.firebaseio.com",
  projectId: "myunsplash-bc144",
  storageBucket: "myunsplash-bc144.appspot.com",
  messagingSenderId: "371717531220",
  appId: "1:371717531220:web:ccb23fa29c1dc9a10befc1",
  measurementId: "G-D18QF2T5E3",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();
//devChallenges.io şifre
export default {
  name: "App",
  components: {
    HelloWorld,
  },
  //devchallenges.io
  //muhsin.io@horsemail.com
  methods: {
    fire: async () => {
      alert("tıklandı");

      await firebase
        .auth()
        .signInWithEmailAndPassword(
          "muhsin.io@horsemail.com",
          "devChallenges.io"
        )
        .then((data) => {
          console.log(data);
        })
        .catch((error) => {
          // Handle Errors here.
          console.log(error.code);
          console.log(error.message);
          // ...
        });
      var ref = firebase.database().ref();

      ref.on(
        "value",
        function(snapshot) {
          console.log(snapshot.val());
        },
        function(error) {
          console.log("Error: " + error.code);
        }
      );


    var playersRef = firebase.database().ref("players/");

playersRef.set ({
   
	
   Amanda: {
      number: 2,
      age: 20
   }
});


      firebase
        .database()
        .ref("users/" + "userId")
        .set({
          username: "name",
          email: "email",
          profile_picture: "imageUrl",
        });
    },
  },
};
</script>

<style>
#app {
  /*  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 40px;*/
}
.header {
  display: flex;
  justify-content: center;
  align-items: center;
  border: black 1px solid;
}
.headerText p {
  padding: 0;
  margin: 0;
}
.icons {
  display: flex;
  justify-content: center;
}
.add {
  margin: 0 auto;
}
.add button {
  background: #3db46d;
  box-shadow: 0px 1px 6px rgba(0, 0, 0, 0.1);
  border-radius: 24px;
  border: none;
  width: 137px;
  height: 55px;
  font-family: Noto Sans;
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  line-height: 19px;
  color: #ffffff;
  cursor: pointer;
}
.add button:hover {
  background: #2b8850;
}
.forms {
  display: flex;
  width: 300px;
  height: 55px;
  border: 1px solid #bdbdbd;
  border-radius: 24px;
  padding-left: 20px;
  align-items: center;
}
.forms input {
  border: none;
  height: 50px;
}
.login {
  /*top: -30px;
  position: absolute;
  width: 100%;
  height: 100vh;
  background: gray;
  opacity: 0.5;
  display: flex;
  justify-content: center;
  z-index: -1;*/
  border: green 1px solid;
}
.loginText {
  opacity: 1;
  padding-top: 200px;
  z-index: 1;
  width: 620px;
  height: 367.2px;
  left: 424.36px;
  top: 250.64px;
  background: #ffffff;
  border: green 1px solid;
  border-radius: 12px;
}
</style>
