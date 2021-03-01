import express from "express";
import BaseController from "../utils/BaseController";
import { FAKEDB } from "../db/FAKEDB";
import { burgersService } from "../services/BurgersService"

export class BurgersController extends BaseController{
    constructor(){
        super('api/burger');
        this.router
        .get("", this.getAll)
        .get("/:id", this.getOne )
        .post("", this.create)
        .delete("/:id", this.delete)
        .put("/:id", this.edit)
    }

    getOne(req, res, next){
        try {
            res.send(burgersService.getOne(req.params.id))

        } catch (error) {
            next(error)
        }
    }

    edit(req, res, next){
        try {
            let editedBurger = req.body

            const burger = burgersService.edit(editedBurger, req.params.id)

            res.send(burger)

        } catch (error) {
            next(error)
        }
    }

    getAll(req, res, next){
        try {
            const burgers = burgersService.getAll()

            res.send(burgers)

        } catch (error) {
            next(error)
        }
    }

    create(req, res, next){
        try {
            let rawBurger = req.body

            const burger = burgersService.create(rawBurger)

            res.status(201).send({data: burger, message:"Burger Created", count: FAKEDB.burgers.length});

        } catch (error) {
            next(error)
        }
    }

    delete(req, res, next){
        try {
            const id = req.params.id

            burgersService.delete(id)

            res.send("Burger Eaten")

        } catch (error) {
            next(error)
        }
    }
}