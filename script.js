    document.getElementById('send').addEventListener('click', function(event) {
        event.preventDefault(); //evita que se recargue el formulario al enviarlo
        
        const name = document.getElementById('name').value;
        const lastName = document.getElementById('lastName').value;
        const dateBirth = document.getElementById('dateBirth').value;
                console.log('Valores de los campos:', name, lastName, dateBirth); //controla los valores de los campos
        //comprobar que los campos NO esten vacios
        if (!name || !lastName || !dateBirth) {
            alert('Por favor, completa todos los campos antes de enviar el formulario.');
            return; 
        }
        // objeto con los datos del formulario
        const formData = {
            name: name,
            lastName: lastName,
            dateBirth: dateBirth
        };

        // Configurar la solicitud
        const requestOptions = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        };
            console.log('Datos que se enviarán:', formData); //control para ver que datos serán enviados.
        // solicitud usando fetch
        fetch('https://jsonplaceholder.typicode.com/users', requestOptions)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Error de red o servidor no respondió correctamente');
                }
                return response.json();
            })
            .then(data => {
                console.log('Bloque .then ejecutado'); //control dee que se ejecute
                console.log('Datos recibidos:', data);
                alert('Datos enviados exitosamente'); //control de envio de datos, alerta usuario
            })
            .catch(error => {
                console.error('Error al enviar los datos:', error); 
                alert('Hubo un error al enviar los datos'); //alerta para el caso de errores, para el usuario
            });
    });

