import express, { Request, Response } from "express";
import http from "http";
import { AppDataSource } from "./data-source";
import 'reflect-metadata';
import { useSwagger } from "./utils/swagger";

//Import Routers
import memberRouter from "./routes/member";

const app = express();
const port = 8000;
const server = http.createServer(app);
useSwagger(app);

AppDataSource.initialize()
  .then(() => {
    console.log("DB Connected!")
    
  })
  .catch((error) => console.log("DB Connection Error:", error));

app.use(express.json());
//console.log('AppDataSource:', (AppDataSource.options as any).username);

//console.log('현재 디렉토리:', process.cwd());


app.get('/', (req: Request, res: Response) => {
  res.send("Typescript on");
})

//Use Routers
app.use('/member', memberRouter);

server.listen(port, () => {
  console.log(`Server is now open at port ${port}!`)
})
