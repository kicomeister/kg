import express from 'express';
import session from 'express-session';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import { general } from './handlers/errorHandlers';
import routes from './routes';
import { Cors } from './middlewares/Cors';

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cookieParser());

app.use(Cors);

app.use(
  session({
    secret: process.env.SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: { secure: true },
  })
);

app.use('/', routes);

app.use(general);

module.exports = app;
