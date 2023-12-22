import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import { google } from 'googleapis';

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.post('/democlass', async (req, res) => {
    // requesting parameters
    const { name, phone, email, city } = req.query;  


    const auth = new google.auth.GoogleAuth({
        keyFile: "./credentials.json",
        scopes: "https://www.googleapis.com/auth/spreadsheets",
    });

    const client = await auth.getClient();
    const googleSheets = google.sheets({ version: "v4", auth: client });
    const spreadsheetId = "12_6AF5KehrIbbwsDkc4WNA9CVfg-mwGcBJgsoo5kRdI";

    // get meta data
    const metaData = await googleSheets.spreadsheets.get({
        auth,
        spreadsheetId,
    });

    // write rows
    await googleSheets.spreadsheets.values.append({
        auth,
        spreadsheetId,
        range: "DemoClass!A:D",
        valueInputOption: "USER_ENTERED",
        resource: {
            values: [
                [name,phone,email,city]
            ],
        },
    });
    res.status(200).send("Success");
});

app.get('/inquiry', async (req, res) => {
  // requesting parameters
  const { name, phone, email, message } = req.query;  


  const auth = new google.auth.GoogleAuth({
      keyFile: "./credentials.json",
      scopes: "https://www.googleapis.com/auth/spreadsheets",
  });

  const client = await auth.getClient();
  const googleSheets = google.sheets({ version: "v4", auth: client });
  const spreadsheetId = "12_6AF5KehrIbbwsDkc4WNA9CVfg-mwGcBJgsoo5kRdI";

  // write rows
  await googleSheets.spreadsheets.values.append({
      auth,
      spreadsheetId,
      range: "Inquiry!A:D",
      valueInputOption: "USER_ENTERED",
      resource: {
          values: [
              [name,phone,email,message]
          ],
      },
  });
  res.status(200).send("Success");
});

app.listen(3002, () => {
  console.log('Example app listening on port 3002!');
});

