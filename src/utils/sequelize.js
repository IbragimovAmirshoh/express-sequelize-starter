import { Sequelize } from 'sequelize';

const sequelize = new Sequelize({
    host: process.env.D_HOST,
    port: process.env.D_PORT,
    username: process.env.D_USERNAME,
    password: process.env.D_PASSWORD,
    database: process.env.D_DATABASE,
    dialect: process.env.D_DIALECT,
});

export default sequelize;
