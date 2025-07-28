// app.js
require('dotenv').config(); // Load environment variables

const axios = require('axios');

const apiKey = process.env.FORM_RECOGNIZER_KEY;
const endpoint = process.env.FORM_RECOGNIZER_ENDPOINT;

if (!apiKey || !endpoint) {
    console.error("❌ FORM_RECOGNIZER_KEY or FORM_RECOGNIZER_ENDPOINT is not defined.");
    process.exit(1);
}

// Example request
const analyzeDocument = async () => {
    try {
        const response = await axios.post(
            `${endpoint}/formrecognizer/documentModels/prebuilt-read:analyze?api-version=2023-07-31`,
            { urlSource: "https://example.com/your-pdf-or-image.pdf" },
            {
                headers: {
                    'Ocp-Apim-Subscription-Key': apiKey,
                    'Content-Type': 'application/json'
                }
            }
        );
        console.log("✅ Response:", response.data);
    } catch (error) {
        console.error("❌ Error:", error.response ? error.response.data : error.message);
    }
};

analyzeDocument();
