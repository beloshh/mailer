const {sendMail} = require('./reportSender');
var cron = require('node-cron');


        let counter = 1;
        cron.schedule('* * * * *', () => {
            /* 
                generate your report here then send the report using 
                any reportSender logic that you implemnted email, telegram bot,...
            */
            sendMail(`hello world ${counter}`, "this is email body it can contain html also");
            counter++;
        });