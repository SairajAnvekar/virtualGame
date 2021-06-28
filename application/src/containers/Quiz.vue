<template>
  <div>
    <div class="p-grid nested-grid p-jc-evenly">
      <div class="p-sm-10 p-md-6 p-shadow-12">
        {{ message }}
        <div class="p-col-12">
          <div class="p-grid">
            <div class="p-col-12 p-md-6 p-lg-3">dsffsdfsdfsdfsdfsfsdfsdfs</div>
            <div class="p-col-12 p-md-6 p-lg-3">B</div>
          </div>
          <div class="p-grid">
            <div class="p-col-12 p-md-6 p-lg-3">C</div>
            <div class="p-col-12 p-md-6 p-lg-3">D</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Quiz",
  props: {
    msg: String,
  },

  data() {
    return {
      message: "Hello quiz!",
    };
  },
  created() {
    this.$socket.emit('join', 'room1');
    this.getRealtimeData();
  },
  methods: {
    getRealtimeData() {

       this.$socket.on("newdata", (fetchedData) => {
        console.log(fetchedData);
        this.message = fetchedData
      });
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
      list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
