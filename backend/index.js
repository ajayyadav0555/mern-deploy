// const express=require("express");
// const app=express();
// const path=require("path");
// const cors=require("cors");

// app.use(express.json());    
// app.use(express.urlencoded({extended:true}));
// app.use(cors());
// app.use(express.static(path.join(__dirname,"../client/dist")));

// app.get("",(req,res)=>{
//     res.sendFile(path.join(__dirname,"../client/dist","index.html"));
// })



// app.listen(4000,()=>{
//     console.log("Server is running on port 4000");
// })

import express from "express";
import path from "path";
import cors from "cors";
import { fileURLToPath } from "url";
import { dirname } from "path";

const app = express();

// Construct __dirname equivalent
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// Serve static files from React/Vite build
app.use(express.static(path.join(__dirname, "../client/dist")));

// Handle all other routes by serving index.html (SPA fallback)
app.get(/^\/(?!api).*/, (req, res) => {
    res.sendFile(path.join(__dirname, "../client/dist", "index.html"));
  });
  

app.listen(4000, () => {
  console.log("Server is running on port 4000");
});
