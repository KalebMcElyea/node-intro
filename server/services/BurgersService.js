import { FAKEDB } from "../db/FAKEDB";

let id = 4

class BurgersService{
    getAll(){
        return FAKEDB.burgers
    }

    create(rawBurger){
        rawBurger.id = id++

        FAKEDB.burgers.push(rawBurger)

        return rawBurger
    }

    delete(id){
        newBurger(id)
        FAKEDB.burgers = FAKEDB.burgers.filter(b => b.id != id)
    }

    edit(editedBurger, id){
        const differentBurger = newBurger(id)
        Object.keys(editedBurger).forEach(key =>{
            differentBurger[key] = editedBurger[key]
        })
        return differentBurger
    }

    getOne(id){
        const differentBurger = newBurger(id)

        return differentBurger
    }
}

function newBurger(id){
    let differentBurger = FAKEDB.burgers.find(b => b.id == id)

    if(!differentBurger) { throw new Error("invalid id") }
    return differentBurger
}

export const burgersService = new BurgersService()