document.addEventListener('DOMContentLoaded', (event) => {
    const loginBtn = document.getElementById('loginBtn');
    const registerBtn = document.getElementById('registerBtn');
    const loginModal = document.getElementById('loginModal');
    const registerModal = document.getElementById('registerModal');
    const closeBtns = document.querySelectorAll('.close');
    const loginForm = document.getElementById('loginForm');
    const registerForm = document.getElementById('registerForm');

    loginBtn.onclick = function () {
        loginModal.style.display = 'block';
    }

    registerBtn.onclick = function () {
        registerModal.style.display = 'block';
    }

    closeBtns.forEach(btn => {
        btn.onclick = function () {
            const modalId = btn.getAttribute('data-modal');
            document.getElementById(modalId).style.display = 'none';
        }
    });


    // Validación de formulario de inicio de sesión
    loginForm.addEventListener('submit', function (event) {
        event.preventDefault();
        const email = loginForm.email.value;
        const password = loginForm.password.value;
        let validEmail = false;
        let validPassword = false;
        let validEmailPassword = false;

        // Validación de correo electrónico
        if (!validateEmail(email)) {
            showError('loginEmailError', 'Correo electrónico no válido');
            validEmail = false;
        } else {
            validEmail = true;
            hideError('loginEmailError');
        }

        // Validación de contraseña ingresada 
        if (password.trim() === '') {
            showError('loginPasswordError', 'La contraseña es obligatoria');
            validPassword = false;
        } else {
            validPassword = true;
            hideError('loginPasswordError');
        }


        // Verificar usuario autorizado
        // simulacion de haber buscado en base de datos de usuarios
        // Usuario : usuario@email.com
        // password : 1234

        if (validEmail && validPassword) {
            if (email.trim() === 'usuario@email.com' && password.trim() === '1234') {
                // datos correctos 
                validEmailPassword = true;
                hideError('loginPasswordError');
            } else {
                validEmailPassword = false;
                showError('loginPasswordError', 'Usuario o Password ingresados Invalidos');
            }
        }

        if (validEmailPassword) {

            const loginData = { email, password };
            console.log('Datos de Inicio de Sesión:', loginData);
            
            loginModal.style.display = 'none';
            // Redirigir a la página de bienvenida después del registro exitoso
            window.location.href = './pages/peliculas.html';

        }
    });

    // Validación de formulario de registro
    registerForm.addEventListener('submit', function (event) {
        console.log('paso por aca')
        event.preventDefault();
        const nombre = registerForm.nombre.value;
        const apellido = registerForm.apellido.value;

        const email = registerForm.email.value;
        const password = registerForm.password.value;
        const confirmPassword = registerForm.confirm_password.value;
        
        const fechaNacimiento = document.getElementById('fechaNacimiento').value;        

        const terminos = document.getElementById('terminos').checked;

        console.log(terminos);

        const pais = registerForm.pais.value;

       console.log(pais);

        let valid = true;

        // Validación de nombre
        if (!validateNombre(nombre)) {
            showError('registerNombreError', 'Ingresar Nombre');
            valid = false;
        } else {
            hideError('registerNombreError');
        }

        // Validación del apellido
        if (!validateNombre(apellido)) {
            showError('registerApellidoError', 'Ingresar Apellido');
            valid = false;
        } else {
            hideError('registerApellidoError');
        }


        // Validación de correo electrónico
        if (!validateEmail(email)) {
            showError('registerEmailError', 'Correo electrónico no válido');
            valid = false;
        } else {
            hideError('registerEmailError');
        }

        // Validación de contraseña
        if (password.trim() === '') {
            showError('registerPasswordError', 'La contraseña es obligatoria');
            valid = false;
        } else {
            hideError('registerPasswordError');
        }

        // Validación de confirmación de contraseña
        if (confirmPassword !== password) {
            showError('registerConfirmPasswordError', 'Las contraseñas no coinciden');
            valid = false;
        } else {
            hideError('registerConfirmPasswordError');
        }

        // Validación de fecha Nacimiento
        if (!validateFechaNacimiento(fechaNacimiento)) {
            showError('registerFechaError', 'Ingresar Fecha Nacimiento');
            valid = false;
        } else {
            hideError('registerFechaError');
        }



        // Validación de pais
        if (!validatePais(pais)) {
            showError('registerPaisError', 'Ingresar Pais');
            valid = false;
        } else {
            hideError('registerPaisError');
        }


       if(!terminos) {
         showError('registerTerminosError','Aceptar Terminos');
         valid = false;
       } else {
        hideError('registerTerminosError');
       }

        if (valid) {
            const registerData = { email, password, confirmPassword };
            console.log('Datos de Registro:', registerData);
            registerModal.style.display = 'none';
        }
    });

    // Función para validar correo electrónico
    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(String(email).toLowerCase());
    }


    function validateNombre(nombre) {
        if (nombre.length === 0) {
            return false;
        } else {
            return true;
        }
    }

    function validatePais(pais) {
        if (pais.length === 0) {
            return false;
        } else {
            return true;
        }
    }

    function validateFechaNacimiento(fechaNacimiento) {
        console.log(fechaNacimiento); 
        if (!fechaNacimiento) {
            return false;
        } else {
            return true;
        }
    }


    // Función para mostrar errores
    function showError(elementId, message) {
        const errorElement = document.getElementById(elementId);
        errorElement.textContent = message;
        errorElement.style.display = 'block';
    }

    // Función para ocultar errores
    function hideError(elementId) {
        const errorElement = document.getElementById(elementId);
        errorElement.textContent = '';
        errorElement.style.display = 'none';
    }
});

