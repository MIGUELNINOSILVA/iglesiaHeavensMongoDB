import Creyente from "../models/Creyente.js";
import bcryptjs from "bcryptjs";
import { validationResult } from "express-validator";

const getCreyente = async (req, res) => {
    try {
        const creyente = await Creyente.find();
        res.json(creyente);
    } catch (error) {
        res.status(500);
        res.send(error);
    }
}

const getOneCreyente = async (req, res) => {
    try {
        const creyente = await Creyente.findOne({ _id: req.params.id });
        res.json(creyente);
    } catch (error) {
        res.status(500);
        res.send(error);
    }
}

const addOneCreyente = async (req, res) => {
    const creyente = new Creyente(req.body);
    const {nombre} = creyente;
    try {
        /* Verificar si el nombre ya existe */
        const nombreExiste = await Creyente.findOne({ nombre });
        if (nombreExiste) {
            return res.status(400).json({
                message: "Nombre ya registrado en la base de datos."
            });
        }
        const nuevoCreyente = await creyente.save();
        res.json(nuevoCreyente);
    } catch (error) {
        res.status(500);
        res.send(error);
    }
}

export {
    getCreyente,
    getOneCreyente,
    addOneCreyente
}