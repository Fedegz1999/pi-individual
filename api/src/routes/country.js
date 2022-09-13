const { Router } = require ('express')
const { Op } = require ('sequelize')
const { Country, Activity } = require('../db');
const router = Router();
const axios = require ('axios');



router.get('/', async (req, res, next) => {
    const { name } = req.query      
    
        let allInfo = await axios.get('https://restcountries.com/v3/all')        
        const promises = allInfo.data?.map(e => { //si tiene data le mando un mapeo
        new Promise (async (resolve, reject) => { //traigo todo lo de la api           
            resolve(
                await Country.findOrCreate({ //crea las tablas o usa si ya existen
                where:   {     
                    id : e.cca3,           
                    name : e.name.common,                    
                    img : e.flags[1],
                    continent: e.continents[0],
                    capital: e.capital ? e.capital[0] : "",
                    population: e.population,
                    subregion: e.subregion || "",
                    area: e.area,
                },
            }))
            reject(err => next(err))
        })
    })
    await Promise.all(promises)//guardo la promesa de arriba en el promise.all
    if (!name) { //si no le paso un nombre por query
        let allCountries = await Country.findAll() //devuelve todos
        res.status(200).send(allCountries);
    } else {  // si le paso un query -> devuelve el que le pase y los similares
        try{   
        let searchCountry = await Country.findAll({        
            where: {
                name:{
                [Op.iLike]: `%${name}%` 
            }
            },
            include:{
                model : Activity                    
            } 
        })
        if (searchCountry.length){ //si tiene un largo < 0
            res.status(200).send(searchCountry) //lo traigo
        } else {
            res.send({message: 'Country not found'}) //si no tiro el error
        }
     
        } catch (err){
            next(err)
        }
    }            

});

router.get('/:codeID', async (req, res, next) => {
    const { codeID } = req.params
    let country
    if (codeID){ //si le paso un id por params
        country = await Country.findOne({ 
            where: {
                id:codeID.toUpperCase() //busco id con ese codeID y tambien hago minuscula
            },
            include: [{ //que incluyan actividad 
                model: Activity, 
                attributes: ["name", "season", "duration", "difficulty"], 
              }]           
        })
        if (country){ //si existe lo retorno
            res.send(country)
        } else { //sino tiro error
            res.send({message: 'Country not found'})
        }
    } else { //si (!country), lo busco en la api
        country = await axios.get('https://restcountries.com/v3/alpha/'+ codeID)
        const countryById = {
            id : country.cca3,           
            name : country.name.common,                    
            img : country.flags[1],
            continente: country.continents[0],
            capital: country.capital ? country.capital[0] : "",
            population: country.population,
            subregion: country.subregion || "",
            area: country.area,
        }
        return res.send(countryById) //lo retorno
    }  
});




module.exports = router;