const express = require("express");
const request = require("request-promise-native");
const cheerio = require("cheerio");

const app = express();

const PORT = process.env.PORT || 4000;

const domain = `https://3g.dxy.cn`;

app.get("/ncov/api", (req, res) => {
  const option = {
    uri: `${domain}/newh5/view/pneumonia`,
    transform(body) {
      return cheerio.load(body);
    }
  };

  request(option)
    .then($ => {
      // const html = $("#root").html();

      const staticData = $("#getStatisticsService").get()[0].children[0].data;
      const splitStart = staticData.split(
        /(try { window.getStatisticsService = )/
      );
      const splitEnd = splitStart[2].split(/(}catch\(e\){})/);

      res.send(splitEnd[0]);

      // res.send(splitEnd[0]);
    })
    .catch(err => console.log(err.message));
});

app.get("/ncov/api/location", (req, res) => {
  const option = {
    uri: `${domain}/newh5/view/pneumonia`,
    transform(body) {
      return cheerio.load(body);
    }
  };

  request(option).then($ => {
    const text = $("#getAreaStat").get()[0].children[0].data;
    const splitStart = text.split(/(try { window.getAreaStat = )/);
    const splitEnd = splitStart[2].split(/(}catch\(e\){})/);

    res.send(splitEnd[0]);
  });
});

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
