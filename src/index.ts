import http from 'http'

const server = http.createServer((req, res) => {
    console.log(req.url)
    if (req.url?.toLowerCase() === '/users/details') {
        const user = {
            name: "Carlos",
            edad: 35
        }
        res.writeHead(200, { "Content-Type": "application/json" });
        res.write("Response is ok")
        res.end(JSON.stringify(user));
    } else {
        res.writeHead(200, { "Content-Type": "text/plain" });
        res.write("Response is ok")
        res.end()
    }
})
server.listen(3000)