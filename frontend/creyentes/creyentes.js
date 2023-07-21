import { getAllCreyentes } from "../API/API.js";

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
                    confirmButtonText: 'Save',
                    denyButtonText: `Don't save`,
                }).then((result) => {
                    if (result.isConfirmed) {
                        console.log("Confirmado");
                        // Aquí puedes agregar la lógica para eliminar el dato
                    } else if (result.isDenied) {
                        console.log("Denegado");
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
