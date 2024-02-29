import { GoogleSpreadsheet } from 'google-spreadsheet';
import { JWT } from 'google-auth-library'
const runtimeConfig = useRuntimeConfig();
const serviceAccountAuth = new JWT({
  email: runtimeConfig.GOOGLE_CLIENT_EMAIL,
  key: runtimeConfig.GOOGLE_PRIVATE_KEY,
  scopes: [
    'https://www.googleapis.com/auth/spreadsheets',
  ],
});

const doc = new GoogleSpreadsheet('12_6AF5KehrIbbwsDkc4WNA9CVfg-mwGcBJgsoo5kRdI', serviceAccountAuth);

// Load document info
doc.loadInfo();

export default defineEventHandler(async (event) => {
  try {
    const query = getQuery(event)
    // Select the appropriate sheet 
    const sheet = doc.sheetsByTitle[query.sheet];

    // Extract request parameters
    const formData = [
      query.name,
      query.phone,
      query.email,
      query.city || query.message, // Assuming either city or message exist
    ]

    // Append data as a new row
    await sheet.addRow(formData);

    return {
      res: formData
    }
  } catch (error) {
    console.error(error);
    return "Error"
  }
}
)