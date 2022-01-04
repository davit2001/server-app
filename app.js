import express from 'express';
import path from 'path';

const app = express();
app.use(express.static('public'));

app.get('/', (req, res) => {
  res.sendFile(path.resolve('public/index.html'));
});

app.get('*', (req, res) => {
  res.sendFile(path.resolve('public/404-page.html'));
});

app.listen(process.env.PORT || 3000);