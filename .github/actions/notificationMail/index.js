require('dotenv').config()

let API_KEY = process.env.API_KEY;
let DOMAIN = process.env.DOMAIN;
let linter_job = process.env.linter_job
let cypress_job = process.env.cypress_job
let add_badge_job = process.env.add_badge_job
let deploy_job = process.env.deploy_job

const mailgun = require('mailgun-js')
       ({apiKey: API_KEY, domain: DOMAIN});


function getMessage() {
    const body = '';
    return {
      to: 'serbidaw@gmail.com',
      from: 'sbiosca94@gmail.com',
      subject: 'Emails Action Bioskin',
      text: body,
      html: `<strong>${linter_job}</strong><br>
              <strong>${cypress_job}</strong><br>
              <strong>${add_badge_job}</strong><br>
              <strong>${deploy_job}</strong><br>`,
    };
}

async function sendEmail() {
    try {
      await mailgun.messages().send(getMessage(), function (error, body) {
        if(error) console.log(error)
        else console.log(body);
      });
    } catch (error) {
      console.error('Error sending test email');
      console.error(error);
      if (error.response) {
        console.error(error.response.body)
      }
    }
}

sendEmail();