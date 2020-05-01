// const { Router } = require('express');
import {Router} from 'express';

const routes = new Router();

routes.get('/', (req, res) => {
    res.send("Obter - Fabio Lima"); 
});

//module.exports = routes;
export default routes;