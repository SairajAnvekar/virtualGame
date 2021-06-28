const express = require("express");
const app = express();
const port = 4000;

const server = app.listen(`${port}`, function () {
  console.log(`Server started on port ${port}`);
});

const io = require("socket.io")(server, {
  cors: {
    origin: "http://localhost:8080",
  },
});

app.get("/start", function (req, res) {
  io.to("room1").emit("newdata", getRandomValue());
  res.send({ test: "Some message" });
});

function getRandomValue() {
  return Math.floor(Math.random() * (50 - 5 + 1)) + 5;
}
io.on("connection", (socket) => {
  socket.on("join", function (room) {
    console.log("joined room", room);
    socket.join(room);
  });

  console.log("conected");

  console.log("A user with ID: " + socket.id + " connected");

  socket.on("disconnect", function () {
    console.log("A user with ID: " + socket.id + " disconnected");
  });
});
