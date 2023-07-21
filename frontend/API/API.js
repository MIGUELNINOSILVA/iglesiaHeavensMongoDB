
const creyentesUrl = "http://localhost:8000/api/creyentes";

const getAllCreyentes = async () => {
    try {
        const creyentes = await fetch(`${creyentesUrl}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        });
        return creyentes.json();
    } catch (error) {
        console.log(error);
    };
};

const getOneCreyente = async (id) => {
    try {
        const creyente = await fetch(`${creyentesUrl}/${id}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        });
        return creyente.json();
    } catch (error) {
        console.log(error);
    };
}

const deleteCreyente = async (id) => {
    try {
        const response = await fetch(`${creyentesUrl}/delete/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        });
        if (response.ok) {
            Swal.fire(
                'Eliminado sin problemas!',
                'Creyente Eliminado Satisfactoriamente!',
                'success'
            );
            setTimeout(() => {
                window.location = "creyentes.html";
            }, 1500); // 3000 milisegundos (3 segundos)
        } else {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Error al eliminar Creyente!'
            })
        }
    } catch (error) {
        console.error('Error en la solicitud DELETE:', error);
    }
};

export {
    getAllCreyentes,
    getOneCreyente,
    deleteCreyente
}