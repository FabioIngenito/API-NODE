import express from 'express';
import cachorros from './cachorroRoutes.js';
import tutores from './tutorRoutes.js';

const routes = (app) => {
  app
    .route('/')
    .get((req, res) =>
      res.status(200).send('Curso de Node.js - EXPRESS Controller'),
    );
  app.use(express.json(), cachorros, tutores);
};

export default routes;
