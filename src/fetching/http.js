export const HTTP = {
    // GET: async (url, headers = { 'Content-Type': 'application/json' }) => {
    //     try {
    //         const response = await fetch(url, {
    //             method: 'GET',
    //             headers: headers
    //         });
    //         if (!response.ok) {
    //             throw new Error(`Error HTTP: ${response.status}`);
    //         }
    //         return response.json();
    //     }
    //     catch (error) {
    //         console.error("Error en HTTP GET:", error);
    //         throw error;
    //     }
    // },
    GET: async (url, headers) => {
        const response = await fetch(url, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': localStorage.getItem('token')
            }
        })
        return response.json()
    },
    POST: async (url, body) => {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + localStorage.getItem('token')
            },
            body: JSON.stringify(body)
        });
        return response.json();
    },
    PUT: async (url, body) => {
        try {
            const response = await fetch(url, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + localStorage.getItem('token')
                },
                body: JSON.stringify(body)
            });
            if (!response.ok) {
                throw new Error(`Error HTTP: ${response.status}`);
            }
            return response.json();
        } catch (error) {
            console.error("Error en HTTP PUT:", error);
            throw error;
        }
    },
    DELETE: async (url, headers = { 'Content-Type': 'application/json' }) => {
        try {
            const response = await fetch(url, {
                method: 'DELETE',
                headers: headers
            })
            if (!response.ok) {
                throw new Error(`Error HTTP: ${response.status}`);
            }
            return response.json();
        }

        catch (error) {
            console.error("Error en HTTP DELETE:", error);
            throw error;
        }
    }
};

export const URL = {
    URL_API: 'http://localhost:4040'
}