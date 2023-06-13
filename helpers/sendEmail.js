const nodemailer = require("nodemailer");

const { UKRNET_MAIL, UKRNET_PASWORD } = process.env;

const configOptions = {
  host: "smtp.ukr.net",
  port: 465,
  secure: true,
  auth: {
    user: UKRNET_MAIL,
    pass: UKRNET_PASWORD,
  },
};

const transport = nodemailer.createTransport(configOptions);

const sendEmail = async (data) => {
  const email = { ...data, from: UKRNET_MAIL };
  await transport.sendMail(email);
  return true;
};

module.exports = sendEmail;
