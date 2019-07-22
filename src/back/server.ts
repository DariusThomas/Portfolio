import * as express from "express"
import * as path from "path"
import config from "./config"

const Nexmo= require("nexmo")
const app=express();
const p = path.join(__dirname,"../public")

const nexmo = new Nexmo({
apiKey:config.DM.KEY,
apiSecret:config.DM.SECRET
}, {debug:true})

app.use(express.static(p))
app.use(express.json())

app.post("/DM",async (req,res,next)=>{

    const {Name,Tel,Email,Message} = req.body

    const text = `Name: ${Name} \nNumber: ${Tel} \nEmail: ${Email} \nMessage: ${Message}\n`

    await nexmo.message.sendSms(
        config.DM.VIRTUAL_NUMBER,
        config.DM.PERSONAL_NUMBER,
        text,
        {type: 'unicode'},
        (err:any,apiResponse:any)=>{
            if(err){
                console.log("ERROR", err)
                res.sendStatus(500)
            }else{
                if(apiResponse.messages[0]['error-text']){
                    res.sendStatus(500)
                }else{
                    res.sendStatus(200)
                }      
            }
        }
    )
})

app.use("*",(req,res)=>{
    res.sendFile(path.join(__dirname,"../public/index.html"))
})

const port = process.env.PORT|| 3000;
app.listen(port,()=>{
    console.log(`Server listening on port: ${port}`)
})