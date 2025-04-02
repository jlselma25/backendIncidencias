

const config=  {
    user: 'sa',
    password: 'pk',
   // server: '192.168.1.200', 
   server:'supercarmelaoficina.dvrdns.org',   
    database: 'BDIncidencias',
    port: 1433,
    options: {
        encrypt: false, // Usa `true` si tu servidor requiere encriptación
        trustServerCertificate: false // Usa `true` si confías en el certificado del servidor
    }
};



module.exports = { config };