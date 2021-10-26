import { getManager } from "typeorm"

import { Experience } from "../entity/Experience"


export class ExperienceController {
    
    async registerExp(experience: Experience): Promise<Experience> {
        try{
            const savedExperience = await getManager().save(experience)
            return savedExperience
        } catch(error){
            throw new Error(error)
        }
    }

    async getExp() {
        const experiences = await getManager().find(Experience)
        return experiences
    }
    
    async getExpOne(id) {
        let experience = await getManager().findOne(Experience, id)
        return experience
    }


    async updateExp(
        id: number,
        title: string,
        responsible: string,
        image: string,
        whats: string,
        email: string,
        description: string
       ) {

        let experience = await getManager().findOne(Experience, id)

        experience.title = title;
        experience.responsible = responsible;
        experience.image = image;
        experience.whats = whats;
        experience.email = email;
        experience.description = description;

        if(experience) {
            const update = await getManager().save(experience)
            return update
        }else{
            return false
        }
    }

    async delete(id: number) {

        let experience = await getManager().findOne(Experience, id)

        if(!experience) {
            return false
        } else {
            const remove = await getManager().remove(experience)
            return remove
        }

    }


}