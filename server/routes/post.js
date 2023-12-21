import { google } from "googleapis"

// routes/users.post.ts
export default defineEventHandler(async event => {
    const auth = new google.auth.GoogleAuth({
        keyFile: "credentials.json",
        scopes: ['https://www.googleapis.com/auth/spreadsheets']
    })

    const client = await auth.getClient()
    const googleSheets = google.sheets({ version: 'v4', auth: client })

    // get meta data
    const spreadsheetId = process.env.SHEET_ID
    const metadata = await googleSheets.spreadsheets.get({
        auth,
        spreadsheetId
    })

    return {
        metadata
    }
})
  