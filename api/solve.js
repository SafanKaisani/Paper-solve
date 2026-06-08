// api/solve.js (Alternative for 100% free Gemini API)
export default async function handler(req, res) {
  // ... keep the exact same CORS headers code here ...

  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    return res.status(500).json({ error: 'Gemini API Key is missing.' });
  }

  try {
    const { systemPrompt, messages } = req.body;
    const userPrompt = messages[0].content;

    // Call Google Gemini instead of Anthropic
    const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${apiKey}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        contents: [{ parts: [{ text: userPrompt }] }],
        systemInstruction: { parts: [{ text: systemPrompt }] }
      })
    });

    const data = await response.json();
    
    // Format the response so your frontend index.html doesn't break
    const textOutput = data.candidates[0].content.parts[0].text;
    return res.status(200).json({
      content: [{ text: textOutput }]
    });

  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
}
