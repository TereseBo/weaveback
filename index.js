const server = require("./server")
const db = require("./database/database")

db.connect()

server.listen(process.env.PORT,()=>{
    console.log(`Server is running on port ${process.env.PORT}`)
})
