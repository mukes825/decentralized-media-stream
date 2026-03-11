const fs = require("fs");

const media = JSON.parse(fs.readFileSync("media.json"));

function listMedia(){
 console.log("Available media files:\n");

 media.files.forEach(file=>{
  console.log(file.title,"|",file.type);
 });
}

listMedia();
