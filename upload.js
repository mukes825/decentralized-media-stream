// upload.js

const fs = require("fs")

// Upload media function
function uploadMedia(title, type, creator, url) {

  // Validation
  if (!title || !type || !creator || !url) {
    console.log("❌ Invalid media upload. Missing fields.")
    return
  }

  // Read existing data
  const mediaData = JSON.parse(fs.readFileSync("media.json"))

  // Generate new ID
  const newId = mediaData.media.length + 1

  // Create new media object
  const newMedia = {
    id: newId,
    title: title,
    type: type,
    creator: creator,
    url: url,
    status: "available",
    uploadedOn: new Date().toISOString().split("T")[0]
  }

  // Push into array
  mediaData.media.push(newMedia)

  // Save back to file
  fs.writeFileSync("media.json", JSON.stringify(mediaData, null, 2))

  console.log("✅ Media uploaded successfully:", title)
}

// Example upload (test)
uploadMedia("Creator Demo Video", "video", "Aman", "creator-demo.mp4")

// Future Enhancements:
// - Add file size validation
// - Support multiple formats
// - Integrate IPFS upload
// - Add user authentication
