import express from 'express';
import path from 'path';

const app = express(); 

/**
 * Configuração das paginas
 */

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');


/**
 * Rota inicial
 */
app.get('/', (req, res) => res.render('index'));

export default app;

/**
 * ROTA DA PÁGINA DE CLIENTES
 */

app.get('/clientes', (req, res) => res.render('clientes'));

export default app; 