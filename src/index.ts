import express, { Express, Request, Response } from 'express';
import {openDB} from './database';

const initializeDatabase = async () => {
  const db = await openDB();

  const initQuery = `
  CREATE TABLE IF NOT EXISTS users(
    user_id INTEGER PRIMARY KEY AUTOINCREMENT,
    user_name VARCHAR(20)
  )
  `
  await db.exec(initQuery);
  await db.close();
};

const app: Express = express();
const port = 5000;

initializeDatabase().catch((err) => {
  console.error("Error initializing the database:", err);
});

app.get('/', (req: Request, res: Response) => {
  res.send('Stencilight Rank Server');
});

app.get('/handshake', (req: Request, res: Response) => {
  res.send('Hello!!');
});

app.get('/test1', async (req: Request, res: Response) => {
  const db = await openDB();

  await db.exec(`
    INSERT INTO users (user_name)
    VALUES ('duruchigy')
  `);

  await db.close();

  res.send('GOOD!');
});

app.listen(port, () => {
  console.log(`[server]: Server is running at <https://localhost>:${port}`);
});