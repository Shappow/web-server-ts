import { createServer, ServerResponse, IncomingMessage  } from "http"
console.log(process.env.PING_LISTEN_PORT)
const PORT = process.env.PING_LISTEN_PORT ?? 8080

const serverListener = function(request : IncomingMessage, response : ServerResponse)  {
    if (request.method === "GET" && request.url === "/ping") {
        response.setHeader("Content-Type", "application/json")
        response.write(JSON.stringify(request.headers))
        response.end();
    }
    else {
        response.statusCode = 404
        response.end()
    }
}
const server = createServer(serverListener)
server.listen(PORT)
console.log("Starting server on port : " + PORT)
