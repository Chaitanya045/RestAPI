const express = require("express");

const app = express();
app.use(express.json());

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log("Server listening on PORT : ", PORT);
});

app.get("/status", (request, response) => {
  const status = {
    Status: "Running",
  };

  response.send(status);
});

app.post("/similar", (request, response) => {
  const data = request.body;
  console.log(data);
  response.status(201).send(data);
});
