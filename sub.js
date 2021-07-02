const mqtt = require("mqtt");
const client = mqtt.connect("mqtt://localhost:1883");

client.on("connect", function () {
  client.subscribe("esp32/pub", function (err) {
    if (err) console.log(err);
    console.log("Worker is running...");
  });
});

client.on("message", function (topic, message) {
  // message is Buffer
  console.log(message.toString());
});
