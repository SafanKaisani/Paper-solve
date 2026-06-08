// api/solve.js (Configured for Google Gemini API)
export default async function handler(req, res) {
  // 1. Configure CORS headers so your frontend index.html can communicate safely
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader('Access-Control-Allow-Headers', 'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  // 2. Validate that your Vercel Environment Variable exists
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    return res.status(500).json({ error: 'GEMINI_API_KEY is missing on the Vercel dashboard configuration.' });
  }

  try {
    const { systemPrompt, messages } = req.body;
    
    // Extract the raw text from the incoming array block
    const userMessageText = messages[0].content;

    // 3. Make the API call using the official Gemini endpoint and structure
    // Note: Upgraded to 'gemini-2.5-flash' for optimal speed, compliance, and formatting
    const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${apiKey}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        contents: [
          {
            parts: [{ text: userMessageText }]
          }
        ],
        systemInstruction: {
          parts: [{ text: systemPrompt }]
        }
      })
    });

    // 4. Safely check for explicit response errors from Google AI Studio
    if (!response.ok) {
      const errPayload = await response.json();
      return res.status(response.status).json({ error: errPayload.error?.message || 'Gemini upstream generation failed.' });
    }

    const data = await response.json();
    
    // 5. Send the raw object payload directly back to your modern frontend structure handler
    return res.status(200).json(data);

  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
}
