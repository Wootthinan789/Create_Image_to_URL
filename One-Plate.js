const express = require('express');
const app = express();
app.use(express.json());
const axios = require('axios');

app.post('/Test-One', function (req, res) {
    const king = 'wootthinan'
    const apiUrl = 'https://platform.one.th/chat/api/v1/chatbot-api/message'
    const data = {
        to: "96819c51-d43e-4e4e-a1f2-5f54964a7d79",
        message: `name ${king}`,
        type: "text",
        custom_notification: "KING TEST"
    };

    axios.post(apiUrl, data, {
        headers: {
            'Content-type': 'application/json',
            'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJib3RfaWQiOiI2YzBlYzVjNS0zNmNmLTQ1NDgtYTE2Zi0wOGNkNGIxNzE0MjQiLCJib3Rfc2lnbmF0dXJlIjoiMjg4MDQ4MTBkNTFiYjRiYTRlMzg2YjNjZGNlZGU4ODc2OTg0Y2JhY2QxYTJhMDRkNTM4MGQ0YzA0YmUzNDA5YyIsImVudiI6InByZCIsInVzZXJfaWQiOiI5Y2RlOGYyZC1lNGQzLTQ4Y2EtYjNmYi1mOGQ0NDg1YzQzNTIifQ.M5ldqd1f0z6-3Da9iukVFaRk7AMGXc6HZ1NWMNhJz14'
        }
    })
    .then(function (response) {
        console.log('Notification sent successfully:', response.data);
        res.status(200).send('Notification sent successfully');
    })
    .catch(function (error) {
        console.error('Error sending notification:', error.message);
        console.error('Response data:', error.response?.data);
        res.status(error.response?.status || 500).send('Error sending notification');
    });
});

console.log("hello88...");
app.listen(5000, function () {
    console.log('Server is running on port 5000');
});
