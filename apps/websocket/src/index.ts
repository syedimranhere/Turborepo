import { WebSocketServer } from "ws";
const wss = new WebSocketServer({ port: 3029 })
wss.on("connection", (ws) => {
    console.log("Someone connected")
})

