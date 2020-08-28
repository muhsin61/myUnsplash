<template>
  <div class="hello">
    <div class="row">
      <div class="column">
        <div
          v-for="item in $store.state.newDatas[0]"
          :key="item.text"
          class="imgs"
        >
          <img :src="item.link" :alt="item.text" />
          <button @click="deletes(item)">Delete</button>
          <p class="p">{{ item.text }}</p>
        </div>
      </div>
      <div class="column">
        <div
          v-for="item in $store.state.newDatas[1]"
          :key="item.text"
          class="imgs"
        >
          <img :src="item.link" :alt="item.text" />
          <button @click="deletes(item)">Delete</button>
          <p class="p">{{ item.text }}</p>
        </div>
      </div>
      <div class="column">
        <div
          v-for="item in $store.state.newDatas[2]"
          :key="item.text"
          class="imgs"
        >
          <img :src="item.link" :alt="item.text" />
          <button @click="deletes(item)">Delete</button>
          <p class="p">{{ item.text }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Photos",
  methods: {
    deletes(item) {
      console.log(item);
      this.$emit('delete:item', item)
    },
  },
};
</script>

<style scoped>
.row {
  display: flex;
  flex-wrap: wrap;
  padding: 0 4px;
  justify-content: center;
}
.column {
  flex: 30%;
  max-width: 30%;
  padding: 0 4px;
}
.column img {
  margin-top: 8px;
  vertical-align: middle;
  width: 100%;
  border-radius: 24px;
}
.imgs {
  position: relative;
}
button {
  border: 1px solid #eb5757;
  border-radius: 12px;
  background: none;
  font-family: Montserrat;
  font-style: normal;
  font-weight: 400;
  font-size: 10px;
  line-height: 15px;
  text-transform: lowercase;
  color: #eb5757;
  z-index: 3;
  position: absolute;
  cursor: pointer;
  top: 20px;
  right: 16px;
  font-size: 18px;
  opacity: 0;
  padding: 7px;
}
button:hover {
  opacity: 1;
  border: 1px solid #cc4b4b;
}
p {
  font-family: Montserrat;
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 22px;
  color: #ffffff;
  position: relative;
  margin-top: -40px;
  padding-left: 20px;
  z-index: 3;
  opacity: 0;
}
img:hover {
  filter: grayscale(100%);
}
img:hover ~ button {
  opacity: 1;
}
img:hover ~ p {
  opacity: 1;
}
</style>
