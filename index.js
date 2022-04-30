import express from 'express';
import bodyParser from 'body-parser';
import usersRoutes from './routes/users.js';

const app = express();
const PORT = 3000;

// Middlewares
app.use(bodyParser.json());

// Routes
app.use('/users', usersRoutes);

app.get('/', (req, res) => {
	console.log('Ok');
	res.send('<h1>Hello World</h1>')
});

app.listen(PORT, () => console.log(`Le server demarre sur le port ${PORT}`));