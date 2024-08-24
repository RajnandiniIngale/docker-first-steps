const express = require('express');


const app = express();

app.get('/', (req,res)=> {
    res.json("Hello from my first dockerfile! 🚀");
})


const PORT = process.env.PORT || 3000;


app.listen(PORT,()=> {
    console.log(`Server listening on http://localhost:${PORT}`)
})