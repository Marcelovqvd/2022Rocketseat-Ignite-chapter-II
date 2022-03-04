import express, { Request, Response} from "express"

const app = express()

app.get("/", (request, response) => {
  return response.send()
})

app.listen(3333, () => console.log("running at 3333"))