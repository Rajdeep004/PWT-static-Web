import { google } from 'googlseapis';

export default async function handler(req, res) {
  if (req.method === 'POST' && req.url === '/democlass') {
    await handleDemoClass(req, res);
  } else if (req.method === 'GET' && req.url === '/inquiry') {
    await handleInquiry(req, res);
  } else {
    res.status(404).send('Not found');
  }
}

async function handleDemoClass(req, res) {
  try {
    // Extract request parameters
    const { name, phone, email, city } = req.query;

    // Authenticate with Google Sheets
    const auth = new google.auth.GoogleAuth({
      keyFile: "../credentials.json", // Ensure credentials.json is present in the function directory
      scopes: "https://www.googleapis.com/auth/spreadsheets",
    });
    const client = await auth.getClient();
    const googleSheets = google.sheets({ version: "v4", auth: client });
    const spreadsheetId = "12_6AF5KehrIbbwsDkc4WNA9CVfg-mwGcBJgsoo5kRdI";

    // Append data to Google Sheets
    await googleSheets.spreadsheets.values.append({
      auth,
      spreadsheetId,
      range: "DemoClass!A:D",
      valueInputOption: "USER_ENTERED",
      resource: {
        values: [[name, phone, email, city]],
      },
    });

    res.status(200).send("Success");
  } catch (error) {
    console.error(error);
    res.status(500).send("Error");
  }
}

// Implement handleInquiry function similarly, reusing authentication logic
