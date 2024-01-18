import { google } from 'googleapis';

export default defineEventHandler (async event => {
    try {
        // Extract request parameters
        // Hardcoded right now
        const formData = [
          "Rajdeep",
          "7878787878",
          "rajdeepbarot23@gmail.com",
          "Vercel App"
        ]
    
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
            values: [formData],
          },
        });
    
        res.status(200).send("Success");
      } catch (error) {
        console.error(error);
        res.status(500).send("Error");
      }

    return {
        
    }
})