const express=require("express")
const { BugModules } = require("../module/bug")

const bugroutes=express.Router()

bugroutes.get("/bugs",async(req,res)=>{
    try {
        const bugs=await BugModules.find(req.query)
        res.status(200).send({"bugs":bugs})
    } catch (error) {
        res.send(error)
    }
})
bugroutes.get("/bugs/:id",async(req,res)=>{
    const {id}=req.params
    try {
        const bugs=await BugModules.findOne({_id:id})
        res.status(200).send({"bugs":bugs})
    } catch (error) {
        res.send(error)
    }
})
bugroutes.post("bugs",async(req,res)=>{
    try {
        const newbug=new BugModules(req.body)
        await newbug.save()
        res.status(200).send("new bug was created")
    } catch (error) {
        res.send(error)
    }
})


bugroutes.patch("/bugs/:id",async(req,res)=>{
    const {id}=req.params
    try {
        const updatedBug = await Bug.findByIdAndUpdate({_id: id}, req.body)
        if (!updatedBug) {
        res.status(404).json({ error: 'Bug not found' });
          }
          res.json(updatedBug);
        
    } catch (error) {
        res.send(error)
    }
})
bugroutes.delete("/bugs/:id",async(req,res)=>{
    const {id}=req.params
    try {
       await Bug.findByIdAndDelete({_id: id})
       res.send("The bug was Deleted succefully")
    } catch (error) {
        res.send(error)
    }
})

module.exports=bugroutes;