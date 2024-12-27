const http = require("http");
const fil = require("fs")
const exp = require("express")
const app = exp()

app.get('/',(req,res)=>{
    const log = `new req at && ${req.url}`
    fil.appendFile("./req.txt",log,(err,data)=>{
        console.log("saved 01");
    })
    return res.send("At homepage !");
})
app.get('/about',(req,res)=>{
    const log = `new req at && ${req.url}`
    fil.appendFile("./req.txt",log,(err,data)=>{
        console.log("saved 02");
    })
    return res.send("At about page");
})

const ser = http.createServer(app);

ser.listen(8000,()=>console.log("server started again"));















































