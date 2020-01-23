const express = require("express");
const request = require("request-promise-native");
const cheerio = require("cheerio");

const app = express();

const PORT = process.env.PORT || 4000;

const domain = `https://3g.dxy.cn`;

app.get("/", (req, res) => {
  const option = {
    uri: `${domain}/newh5/view/pneumonia`,
    transform: body => cheerio.load(body)
  };

  request(option)
    .then($ => {
      //   console.log($("#root"));
      const html = $("#root").html();
      res.send(html);
    })
    .catch(err => console.log(err.message));
});

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
