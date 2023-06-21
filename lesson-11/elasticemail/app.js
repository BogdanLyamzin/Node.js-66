const ElasticEmail = require('@elasticemail/elasticemail-client');
require("dotenv").config();

const { ELASTICEMAIL_API_KEY } = process.env;

const defaultClient = ElasticEmail.ApiClient.instance;

const { apikey } = defaultClient.authentications;
apikey.apiKey = ELASTICEMAIL_API_KEY;

const api = new ElasticEmail.EmailsApi();

const email = ElasticEmail.EmailMessageData.constructFromObject({
    Recipients: [
        new ElasticEmail.EmailRecipient("nerel40098@anomgo.com")
    ],
    Content: {
        Body: [
            ElasticEmail.BodyPart.constructFromObject({
                ContentType: "HTML",
                Content: "<p>Verify email</p>"
            })
        ],
        Subject: "Verify email",
        From: "bogdan.lyamzin.d@gmail.com"
    }
});

const callback = function (error, data, response) {
    if (error) {
        console.error(error);
    } else {
        console.log('API called successfully.');
    }
};

api.emailsPost(email, callback);