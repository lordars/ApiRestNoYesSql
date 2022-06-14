const {IncomingWebhook} =require("@slack/webhook")

const webHook= new IncomingWebhook(process.env.URL_SLACK_HOOK)

const loggerStream={
    write: message =>{
        webHook.send({
        text: message
        })//pode conectar a discord telegram outros 
    }
}


module.exports = loggerStream

