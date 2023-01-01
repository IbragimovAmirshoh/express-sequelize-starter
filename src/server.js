import {} from 'dotenv/config';
import express from 'express';
import cors from 'cors';
import sequelize from './utils/sequelize.js';
import {} from './models/index.js';
import ErrorHandler from './middlewares/errorHandler.middleware.js';
import routes from './routes/routes.js';

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);
app.use(ErrorHandler);
app.use('/*', (_, res) =>
    res.status(404).json({
        status: 404,
        message: 'The page you are looking for does not exist',
    })
);

sequelize
    .authenticate()
    .then(() => console.info('Connected to database'))
    .catch((err) => console.error(err.message));

sequelize.sync({ force: true });

app.listen(
    process.env.PORT,
    console.info({ port: process.env.PORT, message: 'Server is running...' })
);
