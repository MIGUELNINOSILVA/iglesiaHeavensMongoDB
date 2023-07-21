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

export {
    getAllCreyentes,
}