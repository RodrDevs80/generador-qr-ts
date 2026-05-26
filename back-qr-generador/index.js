import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import dotenv from 'dotenv';
import qrRouter from './qr/qr.router.js';

dotenv.config();

const app = express();

app.use(express.json());
app.use(cors());
app.use(morgan('dev'));

const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send('app qr generador funciona correctamente');
});

app.use('/api/qr', qrRouter);

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});


