const entrada = document.getElementById('text-input');
        const checkBtn = document.getElementById('check-btn');
        const resultado = document.getElementById('result');

        function ValidarInput() {

            let textoUsuario = entrada.value.toLowerCase().replace(/[^a-z0-9]/g, '');
            let arrayUsuario = textoUsuario.split('');
            let longitud = arrayUsuario.length;
            let mitad = Math.floor(longitud / 2);
            let esPalindromo = true;

            if (textoUsuario.trim() === '') {
                return alert("Please input a value");
            } else if (/^[A-Za-z0-9]$/.test(entrada.value.trim())) { // verifica si es una sola letra o número
                resultado.textContent = `${entrada.value} is a palindrome`;
                return;
            }


            for (let i = 0; i < mitad; i++){
               if (arrayUsuario[i] !== arrayUsuario[longitud - 1 - i]){
                esPalindromo = false;
                break;
               }
            }

            if (esPalindromo){
                resultado.textContent = `${entrada.value} is a palindrome`;
            } else {
                resultado.textContent = `${entrada.value} is not a palindrome`;
            }
        }

        checkBtn.addEventListener('click', ValidarInput) //cundo el usuario


        VANTA.WAVES({ //del Vanta.js
            el: "#vanta-background",
            mouseControls: true,
            touchControls: true,
            gyroControls: false,
            minHeight: 20.00,
            minWidth: 20.00,
            scale: 1.00,
            scaleMobile: 1.00,
            color: 0x6a90e2,
            shininess: 35.00,
            waveHeight: 15.00,
            waveSpeed: 0.75,
            zoom: 0.65
          });
