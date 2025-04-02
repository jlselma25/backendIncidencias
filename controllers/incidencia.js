const { executeQuery } = require('../database/operations');
const { formatoFecha } = require('../helpers/fechas');

const moment = require('moment');


addJob = async(req, res = response ) => {
   
    const { trabajo, empresa,fecha } = req.query;      

    const date = new Date(fecha);

    const fechaNew = formatoFecha(date);   
    const fechaFormateada = moment(fechaNew, 'DD/MM/YYYY HH:mm:ss').format('YYYY-MM-DD HH:mm:ss'); 

    const query ="INSERT INTO trabajos (trabajo, empresa, fecha) VALUES ('" + trabajo + "'," + empresa + ",'" + fechaFormateada +"')";
    
    console .log(query);
   
    const  data = await executeQuery(query);  
    return  res.json({
        resul: true
    })
}



addIncidencias = async(req, res = response ) => {
   
    const { incidencia, respuesta, tienda,fecha } = req.query;      

    const date = new Date(fecha);

    const fechaNew = formatoFecha(date);   
    const fechaFormateada = moment(fechaNew, 'DD/MM/YYYY HH:mm:ss').format('YYYY-MM-DD HH:mm:ss'); 

    const query ="INSERT INTO incidencias (Motivo, Respuesta,tienda, fecha) VALUES ('" + incidencia + "','" +  respuesta + "','" + tienda + "','" + fechaFormateada +"')";
    
   
    const  data = await executeQuery(query);  
    return  res.json({
        resul: true
    })
}

loadShops = async(req, res = response ) => {   
  

    const query ="SELECT  numero, nombre FROM Tiendas";
   
    const  data = await executeQuery(query);  
    return res.json(data);
}

loadIncidencias = async(req, res = response ) => {   
  
    const { fechaDesde, fechaHasta } = req.query;     
   

    const dateFrom = new Date(fechaDesde);
    const fechaNewFrom = formatoFecha(dateFrom);   

    const dateTo = new Date(fechaHasta);
    const fechaNewTo = formatoFecha(dateTo);   

    const fechaFrom = moment(fechaNewFrom, 'DD/MM/YYYY').format('YYYY-MM-DD');  
    const fechaTo = moment(fechaNewTo, 'DD/MM/YYYY').format('YYYY-MM-DD' );   


    const query ="SELECT CONVERT(VARCHAR, fecha, 103) fecha, motivo, respuesta, tienda, id FROM Incidencias WHERE Fecha >='" + fechaFrom + " 0:00:00' AND Fecha <='" + fechaTo + " 23:59:59'";
   
    const  data = await executeQuery(query);  
    
    return res.json(data);


}

loadJobs = async(req, res = response ) => {   
  
    const { fechaDesde, fechaHasta } = req.query;     
   

    const dateFrom = new Date(fechaDesde);
    const fechaNewFrom = formatoFecha(dateFrom);   

    const dateTo = new Date(fechaHasta);
    const fechaNewTo = formatoFecha(dateTo);   

    const fechaFrom = moment(fechaNewFrom, 'DD/MM/YYYY').format('YYYY-MM-DD');  
    const fechaTo = moment(fechaNewTo, 'DD/MM/YYYY').format('YYYY-MM-DD' );   


    const query ="SELECT CONVERT(VARCHAR, fecha, 103) fecha, trabajo job, E.Nombre empresa, estado, id FROM Trabajos T JOIN Empresas E ON T.Empresa = E.Numero WHERE Fecha >='" + fechaFrom + " 0:00:00' AND Fecha <='" + fechaTo + " 23:59:59'";
   
    const  data = await executeQuery(query);  
    
    return res.json(data);


}

getIncidencias = async(req, res = response ) => {   
  
    const { id } = req.query;    


    let query ="SELECT CONVERT(VARCHAR, fecha, 103) fecha, motivo, respuesta, tienda, id FROM Incidencias WHERE id =" + id;  
   
   
    const  data = await executeQuery(query);  
    
    return res.json(data);

}


updateIncidencias = async(req, res = response ) => {   
  
    const { incidencia, respuesta, tienda, fecha, id } = req.query;      

    const date = new Date(fecha);

    const fechaNew = formatoFecha(date);   
    const fechaFormateada = moment(fechaNew, 'DD/MM/YYYY HH:mm:ss').format('YYYY-MM-DD HH:mm:ss'); 


    let query ="DELETE FROM Incidencias WHERE id =" + id;

    await executeQuery(query); 

    query ="INSERT INTO incidencias (Motivo, Respuesta,tienda, fecha) VALUES ('" + incidencia + "','" +  respuesta + "','" + tienda + "','" + fechaFormateada +"')";
   
   
    const  data = await executeQuery(query);  
    
    return res.json({
         resul: true

    });
}

loadFactories = async(req, res = response ) => {   
  

    const query ="SELECT numero, nombre FROM Empresas";
   
    const  data = await executeQuery(query);  
    return res.json(data);
}


getJob = async(req, res = response ) => {   
  
    const { id } = req.query;    


    let query ="SELECT CONVERT(VARCHAR, fecha, 103) fecha, trabajo job, empresa, id FROM Trabajos WHERE id =" + id;  
   
   
    const  data = await executeQuery(query);  
    
    return res.json(data);

}

deleteReg = async(req, res = response ) => {   
  
    const { id, table } = req.query;    

    const  query ="DELETE FROM " + table + " WHERE id =" + id;   
   
    const  data = await executeQuery(query);  
    
    return res.json({
        resul: true
    });

}


module.exports = {       
    addIncidencias, 
    loadShops,
    loadIncidencias,
    getIncidencias,
    updateIncidencias,
    loadFactories,
    addJob,
    loadJobs,
    getJob,
    deleteReg
 }
