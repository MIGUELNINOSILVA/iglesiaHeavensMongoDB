import mongoose from "mongoose";

const creyenteSchema = mongoose.Schema({

      nombre: {
        type: String,
        required: true,
      },
      ministerio: {
        type: String,
        enum: ["adoracion", "mujeres", "jovenes", "hombres"],
        required: true,
      },
      nivelFormacion: {
        type: String,
        enum: ["liderazgo", "anciano"],
        required: true,
      },
      edad: {
        type: Number,
        required: true,
      },
      nivelRuta: {
        type: String,
        enum: ["nuevo", "consolidado", "enviado"],
        required: true,
      }
    
});

const Creyente = mongoose.model('creyente', creyenteSchema);

export default Creyente;