import express from 'express';

const app = express();

app.get('/',(req,res)=>{
res.send({Hi: 'there'})
})

const port = process.env.port||5000;

app.listen(port,()=>{
    console.log(`Server running on port:${port}`)
})