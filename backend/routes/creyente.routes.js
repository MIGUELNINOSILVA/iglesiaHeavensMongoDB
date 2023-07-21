import { Router } from "express";
import { check } from "express-validator";
import { getCreyente, getOneCreyente, addOneCreyente, deleteCreyente, updateCreyente} from "../controllers/creyente.controllers.js";
import { validateDocuments } from "../middlewares/validate.documents.js";

const router = Router();

router.get('/', getCreyente);
router.get('/:id', getOneCreyente);
router.post('/add', [
    check("nombre", "El nombre es obligatorio").not().isEmpty(),
    check('ministerio', 'No es un ROL válido').isIn(["adoracion", "mujeres", "jovenes", "hombres"]),
    check('nivelFormacion', "No es un nivel de formación válido").isIn(["liderazgo", "anciano"]),
    check('nivelRuta', "No es un nivel de ruta válido").isIn(["nuevo", "consolidado", "enviado"]),
    validateDocuments
],addOneCreyente);
router.delete('/delete/:id', deleteCreyente);
router.patch('/update/:id', [
    check("nombre", "El nombre es obligatorio").not().isEmpty(),
    check('ministerio', 'No es un ROL válido').isIn(["adoracion", "mujeres", "jovenes", "hombres"]),
    check('nivelFormacion', "No es un nivel de formación válido").isIn(["liderazgo", "anciano"]),
    check('nivelRuta', "No es un nivel de ruta válido").isIn(["nuevo", "consolidado", "enviado"]),
    validateDocuments
],updateCreyente);
export default router;
