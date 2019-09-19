const express = require('express');
const path = require('path');

const app = express();
const PORT =1010;

app.use(express.static('static-files'));

app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname+'/index.html'));
});

app.listen(process.env.PORT || PORT, function(){
    console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
  });