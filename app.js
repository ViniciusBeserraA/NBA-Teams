import express from 'express';
import routes from './routes.js';

const app = express()


//Habilitar leitura json express
app.use(express.json())

//usar router
app.use(routes)

export default app;

