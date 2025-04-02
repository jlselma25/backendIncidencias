
const  express  = require('express');
const app = express();
 const cors = require('cors');
 require('dotenv').config();


 app.use(cors());
 app.use(express.json());

app.use('/INCIDENCIAS', require('./routes/incidencias'));

app.listen(process.env.PORT, (err) => {
    if (err) throw new Error(err);
    console.log('Servidor corriendo en puerto', process.env.PORT);
});