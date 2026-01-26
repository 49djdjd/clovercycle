//used some help from ai and online references for this
import path from "path";
import {google} from "googleapis";

export default async function SurveyPage(){
    const keyFile = path.join(process.cwd(), "credentials/service.json");

    const auth = new google.auth.GoogleAuth({
        keyFile, scopes:["https://www.googleapis.com/auth/spreadsheets.readonly"],});
    const sheets = google.sheets({version:"v4", auth});
    const spreadsheetId="1AyoPpDhmiawH3e8IXrWEN_ezOsyttNFjQBdYer2UvFM";
    const range = "Form Responses 1!A1:Z100";
    const response = await sheets.spreadsheets.values.get({spreadsheetId, range,});
    const surveyData = response.data.values || [];
    console.log(response.data.values);
    return(
        <div className="p-4">
            <h2 className="text-2xl mb-4 text-black">Survey REsults</h2>
        <ul>
            {surveyData.map((row,i)=>(
                <li key={i} className="mb-2"></li>
            ))}
        </ul>
        
        </div>
    );
}