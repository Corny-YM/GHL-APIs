const axios = require("axios");
const fs = require("fs");
const qs = require("qs");

const { clientId, clientSecret, redirectUrl } = require("../data");

async function callback(req, res) {
  const code = req.query.code; // GHL return
  const getTokenUrl = "https://services.leadconnectorhq.com/oauth/token";

  const data = qs.stringify({
    client_id: clientId,
    client_secret: clientSecret,
    grant_type: "authorization_code",
    code: code,
    user_type: "Location",
    redirect_uri: redirectUrl,
  });

  const config = {
    url: getTokenUrl,
    method: "post",
    maxBodyLength: Infinity,
    headers: {
      Accept: "application/json",
      "Content-Type": "application/x-www-form-urlencoded",
    },
    data: data,
  };

  const responseData = await axios
    .request(config)
    .then((res) => {
      if (res?.data) fs.writeFileSync("data.json", JSON.stringify(res.data));
      return res.data;
    })
    .catch((err) => {
      console.log(err);
    });

  return res.json({ data: responseData });
}

module.exports = callback;
