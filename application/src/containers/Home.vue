<template>
  <div class="container">
    <div class="wrapper p-d-flex">
      <div class="left-side p-d-flex">3</div>
      <div class="right-side p-d-flex p-flex-column p-jc-around">
        <div class="p-d-flex p-jc-around">
          <div class="room-container p-d-flex">
            <CreateRoom></CreateRoom>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import CreateRoom from "../components/CreateRoom.vue";
export default {
  name: "Home",
  components: {
    CreateRoom
  },
  data() {
    return {
      message: "Hello quiz!"
    };
  }
};
</script>

<style scoped>
.container {
  background: #ecf6ff;
}
.wrapper {
  height: 100vh;
}
.left-side {
  border: 1px solid;
  width: 70%;
}
.right-side {
  border: 1px solid;
  width: 30%;
}
.room-container {
  flex-direction: row;
  align-items: flex-end;
  align-content: center;
  justify-content: space-evenly;
  flex-wrap: wrap;
  flex: 0.8;
}
</style>
