
function mostrarDirectorio(dependenciaFiltrada) {
    fetch('https://www.politecnicojic.edu.co/templates/politecnico-academy/js/directory.json')
      .then(response => response.json())
      .then(data => {
        // Filtrar los datos según la dependencia especificada
        const directoriosFiltrados = data.filter(directorio => directorio.dependencia === dependenciaFiltrada);

        // Obtener la referencia del elemento en el que mostraremos los datos
        const directoriosDiv = document.getElementById('directorios');

        // Limpiar el contenido HTML existente
        directoriosDiv.innerHTML = '';

        // Si no se encontraron coincidencias, mostrar un mensaje
        if (directoriosFiltrados.length === 0) {
          directoriosDiv.innerHTML = '<p>No se encontraron coincidencias para la dependencia especificada.</p>';
          return;
        }

        // Crear una variable para almacenar el contenido HTML
        let htmlContent = '';

        // Iterar sobre cada objeto filtrado y agregarlo al contenido HTML
        directoriosFiltrados.forEach(directorio => {
          htmlContent += `
            <div>
              <h3>${directorio.dependencia}</h3>
              <p>Cargo: ${directorio.cargo}</p>
              <p>Nombre: ${directorio.nombre}</p>
              <p>Extensión: ${directorio.extension}</p>
              <p>Correo electrónico: <a href="mailto:${directorio.correo}">${directorio.correo}</a></p>
            </div>
          `;
        });

        // Asignar el contenido HTML al elemento en el documento
        directoriosDiv.innerHTML = htmlContent;
      })
      .catch(error => console.error('Error al cargar el archivo JSON:', error));
  }

  // Llamamos a la función para mostrar el directorio filtrado cuando se cargue la página
  mostrarDirectorio(dependenciaFiltrada); // Pasamos la variable dependenciaFiltrada como parámetro