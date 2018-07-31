import express from 'express';
import path from 'path';
import React from 'react';
import { renderToString } from 'react-dom/server';
import PageContainer from './src/containers/PageContainer.js';

const app = express();

// Serve built files with static files middleware
app.use('/build', express.static(path.join(__dirname, 'build')));

app.get('/', (req, res) => {
    res.write('<!DOCTYPE html><html><head><title>My Page</title></head><body>');
    res.write('<div id="app">');
    res.write(renderToString(<PageContainer />));
    res.write('</div>');
    res.write('<script src="build/index.js"></script>');
    res.write('</body></html>');
    res.end();
});

// Start server
app.listen(3000);