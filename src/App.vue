<template>
  <div id="app">
    <div class="header">
      <img alt="unsplah logo" src="./my_unsplash_logo.svg" />
      <div class="forms">
        <span class="material-icons">search</span>
        <input type="text" placeholder="Search by name" />
      </div>
      <button @click="add">Add a photo</button>
    </div>
    <Photos msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
import Photos from "./components/Photos.vue";
import * as firebase from "firebase/app";
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
    Photos,
  },
  //devchallenges.io
  //muhsin.io@horsemail.com
  created() {
    firebase
      .database()
      .ref()
      .on("value", (snapshot) => {
        console.log("val değeri :");
        let datas = snapshot.val();
        let photos = JSON.parse(datas["users"]["links"]);
        this.$store.state.datas = photos;
        this.$store.commit("dataSplice");
        /*photos.forEach((item) => {
          console.log(item);
        });*/
      });
  },
  methods: {
    add: () => {
      alert("add");
    },
    fire: () => {
      //alert(this.$store.state.deneme);

      /*firebase
        .auth()
        .signInWithEmailAndPassword(
          "muhsin.io@horsemail.com",
          "devChallenges.io"
        )
        .catch(function(error) {
          console.log(error.code);
          console.log(error.message);
        });*/

      let links = [
        {
          text: "tarihsel merkez",
          link:
            "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.rtOVS7gQbo-2fD87sh17VgHaLJ%26pid%3DApi&f=1",
        },
      ];

      firebase
        .database()
        .ref("users/")
        .set({
          links: JSON.stringify(links),
        });
    },
  },
};
</script>

<style>
* {
  box-sizing: border-box;
}
.header {
  display: flex;
  align-items: center;
  border: black 1px solid;
  padding: 30px;
  margin: 50px;
}
.headerText p {
  padding: 0;
  margin: 0;
}
button {
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
  margin: 0 auto;
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
