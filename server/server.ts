import express from 'express';
import { Request, Response } from 'express';
import { createServer } from 'http';

const app = express();
const server = createServer(app);

app.use(express.json());
app.set('view engine', 'ejs');


app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', 'http://localhost:3000'); // Substitua pelo URL do seu frontend
    res.header('Access-Control-Allow-Methods', 'GET,HEAD,PUT,PATCH,POST,DELETE');
    res.header('Access-Control-Allow-Credentials', 'true');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
});

app.get("/", (req: Request, res: Response) =>{
    res.status(200).json("Eu sou lindo na requisição base");
})

server.listen(3001, () => {
    console.log('Servidor ouvindo na porta 3001');
  });