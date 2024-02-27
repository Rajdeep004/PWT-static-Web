import { GoogleSpreadsheet } from 'google-spreadsheet';
import { JWT } from 'google-auth-library'
const runtimeConfig = useRuntimeConfig()

export default defineEventHandler( event => {
  
    const serviceAccountAuth = new JWT({
      email: runtimeConfig.GOOGLE_CLIENT_EMAIL,
      key: runtimeConfig.GOOGLE_PRIVATE_KEY,
      scopes: [
        'https://www.googleapis.com/auth/spreadsheets',
      ],
    });
    // Create a new Google Spreadsheet document instance
    const doc = new GoogleSpreadsheet('12_6AF5KehrIbbwsDkc4WNA9CVfg-mwGcBJgsoo5kRdI', serviceAccountAuth);

    // Load document info
    doc.loadInfo();
    // Extract request parameters
    const query = getQuery(event)
    // Select the appropriate sheet 
    const sheet = doc.sheetsByTitle[query.sheet];

    const formData = [
      query.name,
      query.phone,
      query.email,
      query.city || query.message, // Assuming either city or message exist
    ]

    // Append data as a new row
    sheet.addRow(formData);

    return {
      res: formData
    }
  }
}
)
