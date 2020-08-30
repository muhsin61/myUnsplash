<template>
  <div id="app">
    <div class="header">
      <img alt="unsplah logo" src="./my_unsplash_logo.svg" />
      <div class="forms">
        <span class="material-icons">search</span>
        <form @submit="findText">
        <input type="text" v-model="$store.state.searchText" placeholder="Search by name" />
        </form>
      </div>
      <button @click="$store.state.isShow = 'block'" class="addButton">
        Add a photo
      </button>
    </div>
    <div class="add" :style="{ display: $store.state.isShow }" @click="add">
      <div class="addContent">
        <div>
          <h1>Add a new photo</h1>
          <p>Label</p>
          <input
            v-model="addText"
            type="text"
            placeholder="Suspendisse elit massa"
          />
          <p>Photo URL</p>
          <input
            v-model="addLink"
            type="text"
            placeholder="https://images.unsplash.com/photo-1584395630827-860eee694d7b?ixlib=r..."
          />
          <div class="buttons">
            <button @click="$store.state.isShow = 'none'">Cancel</button>
            <button @click="fire">Submit</button>
          </div>
        </div>
      </div>
    </div>
    <Photos @delete:item="deletes" msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
import Photos from "./components/Photos.vue";
import * as firebase from "firebase/app";
import "firebase/analytics";
import "firebase/database";

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

firebase.initializeApp(firebaseConfig);
firebase.analytics();

export default {
  name: "App",
  components: {
    Photos,
  },
  data() {
    return {
      addText: "",
      addLink: "",
    };
  },
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
    add(e) {
      if (e.target.className == "add") {
        this.$store.state.isShow = "none";
      }
    },
    fire() {
      if(this.addText && this.addLink){
        let oldData = this.$store.state.datas;
        oldData.unshift({ text: this.addText, link: this.addLink });
        console.log(oldData);
        this.$store.state.datas = oldData;
  
        firebase
          .database()
          .ref("users/")
          .set({
            links: JSON.stringify(oldData),
          });
  
          this.addLink = "";
          this.addText = "";
          this.$store.state.isShow = "none"
      }else{
        alert("Please write something..")
      }
    },
    deletes(item) {
      let newData = this.$store.state.datas;
      newData.splice(newData.indexOf(item), 1);
      this.$store.state.datas = newData;
      console.log(newData);
      this.$store.commit("dataSplice");
      firebase
        .database()
        .ref("users/")
        .set({
          links: JSON.stringify(newData),
        });
    },
    findText(e){
      if(this.$store.state.searchText){
        this.$store.commit("findText")
      }else{
        alert("Please write something...")
        this.$store.commit("dataSplice")
      }
      e.preventDefault();
    }
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
  margin-left: 100px;
  padding: 5px;
}
.headerText p {
  padding: 0;
  margin: 0;
}
.addButton {
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
.add {
  top: 0;
  left: 0;
  position: fixed;
  z-index: 5;
  width: 100%;
  height: 100rem;
  background-color: rgba(0, 0, 0, 0.4); /* Black w/ opacity */
}
.addContent {
  width: 40%;
  height: 330px;
  padding: 40px;
  position: relative;
  background: #ffffff;
  border-radius: 12px;
  margin: 5% auto 15% auto;
}
.addContent h1 {
  font-family: Noto Sans;
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 33px;
  color: #000000;
  margin: 0;
  padding: 0;
}
.addContent p {
  font-family: Noto Sans;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 19px;
  color: #4f4f4f;
  padding: 0;
  margin: 5px;
}
.addContent input[type="text"] {
  border: 1px solid #4f4f4f;
  box-sizing: border-box;
  filter: drop-shadow(0px 1px 6px rgba(0, 0, 0, 0.1));
  border-radius: 12px;
  width: 100%;
  height: 55px;
  font-size: 20px;
}
.buttons {
  float: right;
}
.buttons button {
  background: none;
  border: none;
  cursor: pointer;
}
.buttons button:nth-child(1) {
  font-family: Noto Sans;
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 25px;
  color: #bdbdbd;
}
.buttons button:nth-child(2) {
  margin: 10px;
  padding: 15px;
  background: #3db46d;
  box-shadow: 0px 1px 6px rgba(0, 0, 0, 0.1);
  border-radius: 24px;
  font-family: Noto Sans;
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  line-height: 19px;
  color: #ffffff;
}
.buttons button:nth-child(2):hover {
  background: #36a763;
}
input:focus{
  outline: none;
}
</style>
