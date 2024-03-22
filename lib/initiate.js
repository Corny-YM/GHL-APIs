const { baseUrl, redirectUrl, clientId } = require("../data");

/**
 *
 * @param {import("express").Request} req
 * @param {import("express").Response} res
 * @returns
 */
async function initiateAuth(req, res) {
  const scopes = [
    "calendars.readonly",
    "campaigns.readonly",
    "contacts.readonly",
  ];
  // const url = `${baseUrl}/`;

  return res.redirect(
    `${baseUrl}/oauth/chooselocation?response_type=code&redirect_uri=${redirectUrl}&client_id=${clientId}&scope=${scopes.join(
      " "
    )}`
  );
}

module.exports = initiateAuth;
