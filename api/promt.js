import 'dotenv/config';
import { GoogleGenerativeAI } from "@google/generative-ai";
import { GoogleAIFileManager } from "@google/generative-ai/server";

const apiKey = process.env.API_KEY;
const genAI = new GoogleGenerativeAI(apiKey);
const fileManager = new GoogleAIFileManager(apiKey);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

/**
 * Generates a description based on the provided text prompt.
 * @param {string} text - The prompt text to describe.
 * @returns {Promise<string>} - The generated description.
 */
async function generateDescription(text) {
    const result = await model.generateContent([
        {
            text: `${text}\n\nDeskripsikan teks ini secara mendetail dan informatif.`
        },
    ]);

    const response = await result.response;
    const description = await response.text();

    return description;
}

/**
 * Generates a roast based on the provided text prompt.
 * @param {string} text - The prompt text to roast.
 * @returns {Promise<string>} - The generated roast.
 */
async function generateRoast(text) {
    const result = await model.generateContent([
        {
            text: `${text}\n\nBuatlah roast dari teks ini dengan gaya yang sangat pedas, termasuk sedikit kata-kata kasar ringan, dan menggunakan bahasa yang populer di kalangan anak muda Indonesia.`
        },
    ]);

    const response = await result.response;
    const roast = await response.text();

    return roast;
}

/**
 * API endpoint handler.
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 */
export default async function handler(req, res) {
    const { query } = req;
    const prompt = query.isi;

    if (!prompt) {
        return res.status(400).json({ error: "Parameter 'isi' diperlukan." });
    }

    try {
        const description = await generateDescription(prompt);
        const roast = await generateRoast(description);

        res.status(200).json({
            description,
            roast
        });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}
