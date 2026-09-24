const express=require ("express")
const path=require("path")
const app =express()
const fs=require("fs")


app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(express.static(path.join(__dirname,"public")))
app.set("view engine","ejs")

app.get("/",(req,resp)=>{
    fs.readdir("./files",(err,files)=>{
 resp.render("index",{files:files})
    })
   
})
app.post("/create",(req,resp)=>{
  fs.writeFile(
    `./files/${req.body.title.split(' ').join(' ')}.text`,
    req.body.detail,
    (err) => {
        resp.redirect("/")
    }
)
})

// app.get("/profile/:username",(req,resp)=>{
//     resp.send(`Welcom ${req.params.username} `)
// })
app.listen(3000,()=>{
    console.log("server is working")
})