window.addEventListener('click', ()=> {
    const form = document.getElementById('formRegister');
    const nameInput = document.getElementById('nameInput');
    const phoneInput = document.getElementById('phoneInput');
    const tableBody = document.getElementById('tableBody');

    let data = JSON.parse(localStorage.getItem('formData')) || [];

    form.addEventListener('submit', function (event) {
        event.preventDefault();
        const name = nameInput.value;
        const phone = phoneInput.value;
        
        if (name && phone) {
            const newData = {name,phone};
            data.push(newData);
            saveDataToLocalStorage();
            renderTable();
            form.reset();
        } else {
            alert('Todos los datos son obligatorios');
        }
    })

    function saveDataToLocalStorage() {
        localStorage.setItem('formData', JSON.stringify(data));
    };

    function renderTable() {
        tableBody.innerHTML = '';

        data.forEach(function(item, index) {
            const row = document.createElement('tr');
            const nameCell = document.createElement('td');
            const phoneCell= document.createElement('td');
            const actionCell = document.createElement('td');
            const editButton = document.createElement('button');
            const deleteButton = document.createElement('button');

            nameCell.textContent = item.name;
            phoneCell.textContent = item.phone;
            editButton.textContent = 'Edit';
            deleteButton.textContent = 'Delete';

            editButton.classList.add('button', 'button--secondary');
            deleteButton.classList.add('button', 'button--tertiary');

            editButton.addEventListener('click', function() {
                editData(index);
            })

            deleteButton.addEventListener('click', function() {
                deleteData(index);
            })

            actionCell.appendChild(editButton);
            actionCell.appendChild(deleteButton);

            row.appendChild(nameCell);
            row.appendChild(phoneCell);
            row.appendChild(actionCell);

            tableBody.appendChild(row);
        })
    }

    function editData(index) {
        const item = data[index];
        nameInput.value = item.name;
        phoneInput.value = item.phone;
        data.splice(index, 1);
        abrir('paginaAgregar');
        saveDataToLocalStorage();
        renderTable();
    }


    function deleteData(index) {
        data.splice(index, 1);
        saveDataToLocalStorage();
        renderTable();
    }

    function abrir(idElemento) {
        let element = document.getElementById(idElemento);
        element.style.height = '100%';
            if (idElemento.includes('pagina')){
                document.getElementById(idElemento).style.backgroundColor = 'azure';
            };
    };
    function cerrar(idElemento) {
        let element = document.getElementById(idElemento)
        element.style.height = '0%';
    }
    // Botones del menu
    document.getElementById('openNavButton').addEventListener('click', function() {abrir('myNav')});
    document.querySelector('.closebtn').addEventListener('click', function() {cerrar('myNav')});

    // Botones Pagina Agregar
    document.getElementById('openPaginaAgregar').addEventListener('click', function() {abrir('paginaAgregar')});
    document.querySelector('.closeAgregarBtn').addEventListener('click', function() {cerrar('paginaAgregar')});

    // Botones Pagina Mostrar
    document.getElementById('openPaginaMostrar').addEventListener('click', function() {abrir('paginaMostrar')});
    document.querySelector('.closeMostrarBtn').addEventListener('click', function() {cerrar('paginaMostrar')});

});
