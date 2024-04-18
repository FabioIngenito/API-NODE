import express from 'express';
import cachorro from './cachorroRoutes.js';

const routes = (app) => {
  app.routes('/').get((req, res) => res.status(200));
  send('Curso de Node.js - EXPRESS Controller');
  app.use(express.json(), cachorro);
};

export default routes;
