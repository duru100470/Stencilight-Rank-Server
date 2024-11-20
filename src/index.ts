import express, { Express, Request, Response } from 'express';
import handshakeRouter from './router/handshake';
import userRouter from './router/user';

const app: Express = express();
const port = 5000;

app.get('/', (req: Request, res: Response) => {
  res.send('Stencilight Rank Server');
});

app.listen(port, () => {
  console.log(`[server]: Server is running at <https://localhost>:${port}`);
});

app.use('/handshake', handshakeRouter);
app.use('/user', userRouter);