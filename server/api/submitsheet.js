import { google } from 'googleapis';

export default defineEventHandler(async (event) => {
  try {
    // Extract request parameters
    const query = getQuery(event) 
    const formData = [
      query.name,
      query.phone,
      query.email,
      query.city || query.message,
    ]

    // Authenticate with Google Sheets
    const auth = new google.auth.GoogleAuth({
      keyFile: "credentials.json", // Ensure credentials.json is present in the function directory
      scopes: "https://www.googleapis.com/auth/spreadsheets",
    });
    const client = await auth.getClient();
    const googleSheets = google.sheets({ version: "v4", auth: client });
    const spreadsheetId = "12_6AF5KehrIbbwsDkc4WNA9CVfg-mwGcBJgsoo5kRdI";
    const range = query.sheet; 
    // Append data to Google Sheets
    await googleSheets.spreadsheets.values.append({
      auth,
      spreadsheetId,
      range,
      valueInputOption: "USER_ENTERED",
      resource: {
        values: [formData],
      },
    });

    return "Success"
  } catch (error) {
    console.error(error);
    return "Error"
  }
}
)
