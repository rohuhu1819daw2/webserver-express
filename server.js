

const express = require('express');
const app  = express();

const hbs = require('hbs');
require('./hbs/helpers');

const port = process.env.PORT || 3000;


app.use(express.static( __dirname + '/public'));

//express hbs engine
hbs.registerPartials( __dirname + '/views/parciales');

app.set('view engine', 'hbs');


app.get('/', (req,res)=>{

    res.render('home',{
        nombre:'Roger'
    });

    // let salida =  {
    //     nombre: 'Roger',
    //     apellido: 'Huanuco',
    //     edad: 27,
    //     url: req.url
    // };
    // res.send(salida); // detectara que es un objeto y lo enviara directamente en formato json

    //res.send('Hola Mundo')
});

app.get('/about', (req,res)=>{

    res.render('about');
});

app.get('/data', (req,res)=>{

    res.send('Hola Data')

});

app.listen(port,()=>{
    console.log(`Escuchando peticiones en el puerto ${port}`);
});