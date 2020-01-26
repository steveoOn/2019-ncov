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
      const text = $("#getAreaStat").get()[0].children[0].data;
      const splitStart = text.split(/(try { window.getAreaStat = )/);
      const splitEnd = splitStart[2].split(/(}catch\(e\){})/);

      const checkTime = $("#root").find($(".mapTitle___2QtRg"));
      // const location = $("#root")
      //   .find($(".subBlock3___3mcDz"))
      //   .parent()
      //   .map((i, el) => $(el).html());

      const count = $("#root").find($(".confirmedNumber___3WrF5"));

      const data = $(count)
        .children()
        .children()
        .map((i, el) => $(el).text());

      console.log(typeof data, data[0], data[1], data[2], data[3]);
      // console.log(location.toArray());

      res.send({
        trend: {
          diagnosis: data[0],
          suspected: data[1],
          cured: data[2],
          deceased: data[3]
        },
        time: checkTime.text()
      });

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
