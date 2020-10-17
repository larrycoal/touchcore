const express = require("express");
const bodyPaser = require("body-parser");

const app = express();

app.use(bodyPaser.json());
app.use(bodyPaser.urlencoded({ extended: true }));
const PORT = process.env.PORT || 3080;


let newData = [];
let paymentPlan

const logic = (info) => {
  let temp = {...info}
  let po = temp.amount; //principal outstanding
  let ppp = 0;
  for (let i = 0; i < temp.duration; i++) {
    po = po - ppp;  
    let ipp = (po * temp.rate) / 100; //interest payment for the period
    ppp = temp.amount / temp.duration;//principal payment
    let tp = ipp + ppp; //total payment

    newData.push({
      principal: po,
      interest: ipp,
      period: ppp,
      total: tp,
    });
  }
  return newData;
};

app.post("/api", (req, res) => {
  newData=[]
  res.setHeader("Access-Control-Allow-Origin", "*");
  let info =JSON.parse(Object.keys(req.body));
  paymentPlan=logic(info)
  res.json(paymentPlan)
});


app.listen(PORT, () => {
  console.log("server started");
});
