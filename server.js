const express = require('express');
const path = require('path');

const app = express();
const PORT =1010;

app.use(express.static('/css'));
app.use(express.static('images'));
app.use(express.static('/js'));

app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname+'/index.html'));
});

app.listen(PORT,()=>{
    console.log('Server is running');
})