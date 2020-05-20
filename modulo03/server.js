const express = require("express")
const nunjuncks = require("nunjucks")

const server = express()

const videos = require("./data")

server.use(express.static("public"))

server.set("view engine", "njk")

nunjuncks.configure("views", {
    express: server,
    autoescape: false,
    noCache: true
})

server.get("/", function (req, res) {
    const about = {
        avatarUrl: "data:image/jpeg;base64,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",
        name: "Vitor Eduardo",
        role: 'curso launchbase da <a href="https://rocketseat.com.br/" target="_blank">rockseat</a>',
        description: "Estudando PG",
        links: [
            { name: "Skylab", url: "https://skylab.rocketseat.com.br/account" },
            { name: "Github", url: "https://github.com/vitormedeiros911" },
        ]
    }

    return res.render("about", { about })
})

server.get("/portfolio", function (req, res) {
    return res.render("portfolio", { items: videos })
})

server.get("/video", function( req, res){
        const id = req.query.id

        const video = videos.find(function(video){
            return video.id == id
        })
        if (!video){
            return res.send("Video not found")
        }
        
        return res.render("video", {item: video})
})

server.listen(5000, function () {
    console.log("server is running")
})