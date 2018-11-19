const mongoose = require('mongoose');

const server = 'localhost'
const port = '27017'
const bd = 'red_social_bd'

mongoose.Promise =  global.Promise;
mongoose.connect(`mongodb://${server}:${port}/${bd}`, { useNewUrlParser: true } ).then(
  () => {
    console.log('Conexion establecida con mongo...')
  }).catch(err => console.log(err))