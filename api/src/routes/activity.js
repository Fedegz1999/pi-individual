const { Router } = require ('express')
const router = Router();
const { Activity, Country } = require('../db')
const { v4: uuidv4 } = require ('uuid')

router.get('/', async (req, res, next) => {
    try {
        let act = await Activity.findAll({
            include: [
                {
                    model: Country    
                }
            ]
        })
        res.send(act)
    } catch (err) {
        console.log(err)
    }
})

router.post('/create', async (req, res, next) => {
    const {name, difficulty, duration, season, countries} = req.body
    try {
        let newActivity = await Activity.create({  //creo la nueva actividad
            id: uuidv4(),      
            name,
            difficulty,
            season,
            duration
        })
        
         const promises = countries?.map(country => {    //si me pasan un pais por body, la mapeo
             return new Promise (async (resolve, reject) => { //retorno una nueva promesa
                 let countryFound = await Country.findOne({ //busco en Country
                     where: {
                         name:country //un pais que coincida con el param del body
                     }
                 })
                resolve( //si lo encuentra lo agrega como nueva actividad al pais
                     newActivity.addCountry(countryFound)
                 )
                 reject(err => next(err)) 
             })
        
        })
        await Promise.all(promises) //guardo la promesa
        
        let aResultado = await Activity.findOne({ //busco la id que cree
                where:{
                    id:newActivity.id  //que matchee con la nueva actividad creada
                },
                include: [
                    {
                        model: Country    //y que incluya el pais
                    }
                ] 
        })
        res.send(aResultado) //la retorno
    } catch (err) {
        res.send(err)
    }
})


module.exports = router;