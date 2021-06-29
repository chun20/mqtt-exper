const mqtt = require("mqtt");
const client = mqtt.connect("mqtt://localhost:1883");

client.on("connect", function () {
  client.publish("sensor1", "foo", (err) => {
    if (err) {
      console.log(err);
      process.exit(1);
    }
    console.log('message send')
  });
});
