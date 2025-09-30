        var random = Math.floor(Math.random() * 100) + 1;
        alert("¡Adivina el número entre 1 y 100!");

        for(var i = 0; i <= 7; i++) {
            var numero = Number(prompt("Dime tu número"));

            if(numero > random) {
                alert("Es menor que la suposición");
            } else if(numero < random) {
                alert("Es mayor que la suposición");
            } else {
                alert("¡Acertaste!");
                break;
            }

            if(i == 7) {
                alert("Has perdido. El número era " + random + ".");
            }
        }