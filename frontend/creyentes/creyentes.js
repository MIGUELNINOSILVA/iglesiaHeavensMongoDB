import {
    getAllCreyentes,
    getOneCreyente,
    deleteCreyente
} from "../API/API.js";

document.addEventListener('DOMContentLoaded', showData);

const contentCreyentes = document.querySelector('#contentCreyentes');

async function showData() {
    const creyentes = await getAllCreyentes();
    creyentes.forEach(creyente => {
        console.log(creyente._id);
        contentCreyentes.innerHTML += `
        <div class="card">
                <div class="card-border-top">
                </div>
                <div class="img">
                    <img src="../img/iglesia.png" alt="" width="100%">
                </div>
                <span> ${creyente.nombre}</span >
                <p class="job"> Ministerio : ${capitalizeFirstLetter(creyente.ministerio)}</p >
                <p class="job"> Nivel Formación : ${capitalizeFirstLetter(creyente.nivelFormacion)}</p >
                <p class="job"> Nivel Ruta : ${capitalizeFirstLetter(creyente.nivelRuta)}</p >
                <p class="job"> Edad : ${creyente.edad}</p >
            <div class="boton-position d-flex gap-1">

                <button> Editar </button>
                <button class="boton-eliminar" id="${creyente._id}"> Eliminar </button>
            </div >
            </div >
            `;
        // Agregar evento click a cada botón eliminar
        const botonesEliminar = document.querySelectorAll('.boton-eliminar');
        botonesEliminar.forEach((boton) => {
            boton.addEventListener('click', () => {
                Swal.fire({
                    title: '¿Estás seguro de eliminar el dato?',
                    showDenyButton: true,
                    showCancelButton: true,
                    confirmButtonText: 'Eliminar',
                    denyButtonText: `No eliminar`,
                }).then(async (result) => {
                    if (result.isConfirmed) {
                        await deleteCreyente(boton.id);
                        setTimeout(() => {
                            window.location = "creyentes.html";
                        }, 3000); // 3000 milisegundos (3 segundos)

                    } else if (result.isDenied) {
                        Swal.fire({
                            icon: 'Cancel',
                            title: 'Cancel',
                            text: 'Has cancelado la eliminación del creyente!'
                        })
                    }
                });
            });
        });
    });

}

// Resto del código...

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}