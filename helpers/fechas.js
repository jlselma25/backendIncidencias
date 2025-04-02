function formatoFecha(fecha){
       
    const dd = String(fecha.getUTCDate()).padStart(2, '0');
    const mm = String(fecha.getUTCMonth() + 1).padStart(2, '0'); // Mes empieza en 0
    const yyyy = fecha.getUTCFullYear();
    const hh =String(fecha.getHours()).padStart(2, '0');
   // const hh = String(fecha.getUTCHours()).padStart(2, '0'); // **Obtener la hora en UTC**
    const min = String(fecha.getUTCMinutes()).padStart(2, '0');
    const ss = String(fecha.getUTCSeconds()).padStart(2, '0');


    let fechaNueva = dd + '/' + mm + '/' + yyyy + ' ' + hh + ':' + min + ':' + ss;

    return fechaNueva;
 }



 module.exports = {       
    formatoFecha, 
 }
