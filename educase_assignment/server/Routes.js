import express from 'express';
import addSchool from './controllers/addSchool.js'
import validateAddSchool from './validator.js';
import listSchools from './controllers/listSchool.js';
const router = express.Router();

//add schools to the database
router.post('/addschool',validateAddSchool , addSchool);
//list data of all the schools in the database
router.get('/listschools',listSchools);


export default router
