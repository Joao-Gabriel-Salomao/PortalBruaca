import { Router } from 'express'

import { ExperienceController } from '../controller/ExperienceController'
import { STATUS, Experience } from '../entity/Experience'


export const routerExperience = Router()

const expCtrl = new ExperienceController()

routerExperience.post('/', async (req,res) => {
    const { 
        title,
        responsible,
        image,
        whats,
        email,
        description} = req.body

    const experience: Experience = 
        new Experience( 
        title,
        responsible,
        image,
        whats,
        email,
        description)
    const response =  experience.isValid()
    
    if(response == STATUS.OK){
        try{
            const savedApp = await expCtrl.registerExp(experience)
            return res.json(savedApp)
        } catch(error){
            return res.status(500).json({message: STATUS.REGISTER_ERROR})
        }
    }else{
        return res.status(400).json({message: response})
    }
})


routerExperience.get('/', async(req, res) => {
    
    const experiences = await expCtrl.getExp()
    return res.json(experiences)
})

routerExperience.get('/:id', async(req, res) => {
    const id =  parseInt(req.params.id)

    const experience = await expCtrl.getExpOne(id)

    if(experience) {
        res.status(200).json(experience)
    } else {
        res.status(404).json({mensagem: STATUS.EXPERIENCE_NOT_EXIST})
    }
})

routerExperience.put('/:id', async(req, res) => {
    const id = parseInt(req.params.id)

    const { 
        title,
        responsible,
        image,
        whats,
        email,
        description} = req.body

    const experience: Experience = 
        new Experience( 
        title,
        responsible,
        image,
        whats,
        email,
        description)

    const experienceUpdated = await expCtrl.updateExp(
        id,
        experience.title,
        experience.responsible,
        experience.image,
        experience.whats,
        experience.email,
        experience.description
    )

    if(experienceUpdated) {
        res.status(200).json({mensagem: STATUS.UPDATE_SUCESS})
    } else {
        res.status(404).json({mensagem: STATUS.EXPERIENCE_NOT_EXIST})
    }

})

routerExperience.delete("/:id", async(req, res) => {
    const id  = parseInt(req.params.id);

    if(await expCtrl.delete(id)){
        res.status(200).json({ mensagem: STATUS.DELETE_SUCESS});
    }else{
        res.status(404).json({ mensagem: STATUS.EXPERIENCE_NOT_EXIST});
    }

})