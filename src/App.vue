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
  
    <HelloWorld msg="Welcome to Your Vue.js App" />
    
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
//devChallenges.io şifre
export default {
  name: "App",
  components: {
    HelloWorld,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 40px;
  
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
  color: #FFFFFF;
  cursor: pointer;
}
.add button:hover{
  background: #2b8850;
}
.forms{
  display: flex;
  width: 300px;
  height: 55px;
  border: 1px solid #BDBDBD;
  border-radius: 24px;
  padding-left: 20px;
  align-items: center;
}
.forms input{
  border: none;
  height: 50px;
}
</style>
