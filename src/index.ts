import express, { Express, Request, Response } from 'express';

const app: Express = express();
const port = 5000;

app.get('/', (req: Request, res: Response) => {
  res.send('Stencilight Rank Server');
});

app.get('/handshake', (req: Request, res: Response) => {
  res.send('Hello!!');
});

app.listen(port, () => {
  console.log(`[server]: Server is running at <https://localhost>:${port}`);
});