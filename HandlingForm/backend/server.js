// Agar app chahete ho ke apka backend seprate kaere to app npm project initialize kar sakte ho backend folder me seprately install karo aur agar chahte ho ke sath me challe to bagar he express ko install kar lo

// Backend ko bhi pehele humko run karna padega node backend/server.js -> npm i cors  ye command deke

import express from "express"
import cors from "cors"
import bodyParser from "body-parser"
const app = express()
const port = 3000

app.use(cors())
app.use(bodyParser.json())

app.get('/', (req, res) => {

  res.send('Hello World!')
})

app.post("/", (req, res) => {
  console.log(req.body);
  res.json({ message: "Data received successfully", data: req.body });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})