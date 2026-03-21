// server.js

const express = require("express")
const fs = require("fs")

const app = express()
const PORT = 3000

// Load media data
const mediaData = JSON.parse(fs.readFileSync("media.json"))

// List media in console
function listMedia() {
  console.log("📂 Available Media Files:\n")

  mediaData.media.forEach(file => {
    console.log(`🎬 ${file.title} | ${file.type} | ${file.status}`)
  })
}

// API endpoint to get media list
app.get("/media", (req, res) => {
  res.json(mediaData)
})

// Root route
app.get("/", (req, res) => {
  res.send("🎬 Decentralized Media Streaming Server Running")
})

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Streaming server running on http://localhost:${PORT}`)
  listMedia()
})

// Future Enhancements:
// - Integrate IPFS for decentralized storage
// - Add streaming endpoints for media playback
// - Implement authentication for creators
// - Enable real-time media updates
