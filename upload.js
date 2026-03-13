const fs = require("fs");

function uploadMedia(title,type){

 const media = JSON.parse(fs.readFileSync("media.json"));

 media.files.push({title,type});

 fs.writeFileSync("media.json",JSON.stringify(media,null,2));

 console.log("Media uploaded");
}

uploadMedia("Creator Demo Video","video");
if (!title || !url) {
 console.log("Invalid media upload")
 return
}
