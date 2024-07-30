const app = require('./app');
const connectDtabase = require('./config/database');
const { serverPort } = require('./screte');


app.listen(serverPort, async () => {
    console.log(`server runing localhost://${serverPort}`);
    await connectDtabase();
})