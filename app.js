const express=require("express")
const mongoose=require("mongoose")
const cors=require("cors")
const {photosmodel}=require("./models/photos")

const app=express()
app.use(cors())
app.use(express.json())

mongoose.connect("mongodb+srv://alfiyakn:alfiyakn@cluster0.l8relji.mongodb.net/photosdb?retryWrites=true&w=majority&appName=Cluster0")

app.post("/",(req,res)=>
{
    let input=req.body
    let photos=new photosmodel(input)
    photos.save()
    console.log(photos)
    res.json({"status":"success"})
})

app.get("/view",(req,res)=>{
    photosmodel.find().then(
        (data)=>{
            res.json(data)
        }
    ).catch(
        (error)=>{
            res.json(error)
        }
    )
})
 
app.listen(8084,()=>{
    console.log("server started")
})