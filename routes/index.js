var express = require('express');
var router = express.Router();
const basedatos = require('../basedatos/models')

router.get("/dashboard", function(req, res, next) {
  res.render(index');
});
router.get('/',(req,res)=>{
  res.render('index');
});


router.get('/producto', (req,res)=>{
  basedatos.getproducto()
  .then(data =>{
    console.log(data)
    res.render('producto', { producto:data});
  })
})
.catch(err => {
  res.render('producto',{ producto: [] });
});

router.get('/agrgarproducto', (req,res)=>{
  res.render('/agrgarproducto')
})

router.post('/agregarproducto',(req,res)=>{
const {codigo, nombre,genero,descripcion, precio, category_id} = req.body;
console.log(codigo, nombre,genero,descripcion, precio, category_id);
basedatos.insertproducto(codigo, nombre,genero,descripcion, precio, category_id)
.then(()=>{
  res.redirect('producto')
})
.catch(err =>{
  console.log(err);
})
})

