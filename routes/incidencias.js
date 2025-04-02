


const { Router } = require('express');
const router = Router();

const { 
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



} = require('../controllers/incidencia');


router.get('/addIncidencias/', addIncidencias );
router.get('/loadShops/', loadShops );
router.get('/loadIncidencias/', loadIncidencias );
router.get('/getIncidencias/', getIncidencias );
router.get('/updateIncidencias/', updateIncidencias );
router.get('/loadFactories/', loadFactories );
router.get('/addJob/', addJob );
router.get('/loadJobs/', loadJobs );
router.get('/getJob/', getJob );
router.get('/delete/', deleteReg );






module.exports = router;