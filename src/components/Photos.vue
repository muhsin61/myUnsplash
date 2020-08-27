<template>
  <div class="hello">
    <h1 @click="deneme">{{ msg }} msg</h1>
    <p @click="deneme">{{ $store.state.deneme }}</p>
    <div class="gallery" >
      <div
        class="gallery-item"
        v-for="item in $store.state.datas"
        :key="item.text"
      >
        <div class="content">
          <img :src="item.link" :alt="item.text" />
          </div>
          <button>Delete</button>
          <p class="p">{{item.text}}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Photos",
  props: {
    msg: String,
  },
    methods: {
    deneme: () => {
      alert("hover me")
    }
    }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.galery{
  
  display: grid;
  grid-template-columns: auto auto auto;
  background-color: #2196F3;
  padding: 10px;
}
.galery-item{
position: relative;
width: 32%;
}
.content{
width: 30%;

}
button{
  border: 1px solid #EB5757;
  box-sizing: border-box;
  border-radius: 12px;
  font-family: Montserrat;
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  line-height: 15px;
  text-transform: lowercase;
  color: #EB5757;
  background: none;

  z-index: 3;
  display: none;
  position: relative;
  top: 0px;
  cursor: pointer;
  transition: 0.5s;
}
.p{
  font-family: Montserrat;
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 22px;
  color: #FFFFFF;
  display: none;
  position: relative;
  margin-top: -50px;
  padding-left: 20px;
  transition: 0.5s;
}
.content:hover ~ .p{
  display: block!important;
}
.content:hover ~  button{
  display: block!important;
}
img{
  width: 100%;
  border-radius: 24px;
}
</style>
