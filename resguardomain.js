function mostrarPrincipal() {
    var x = document.getElementById("central");
    var y = document.getElementById("secundario");
    var z = document.getElementById("btn-principal");
    var w = document.getElementById("btn-servicios");

    if (x.style.display === "none") {
        x.style.display = "block";
        y.style.display = "none";
        w.setAttribute('class', 'nav-link active');
        z.removeAttribute('class','active' );
        z.setAttribute('class', 'nav-link');
    } else {
        x.style.display = "none";
        y.style.display = "block";
        z.setAttribute('class', 'nav-link active');
        w.removeAttribute('class','active' );
        w.setAttribute('class', 'nav-link');
    }
}

function mostrarServicios() {
    var x = document.getElementById("central");
    var y = document.getElementById("secundario");
    var z = document.getElementById("btn-principal");
    var w = document.getElementById("btn-servicios");

    if (x.style.display === "none") {
        x.style.display = "block";
        y.style.display = "none";
        w.setAttribute('class', 'nav-link active');
        z.removeAttribute('class','active' );
        z.setAttribute('class', 'nav-link');
    } else {
        x.style.display = "none";
        y.style.display = "block";
        z.setAttribute('class', 'nav-link active');
        w.removeAttribute('class','active' );
        w.setAttribute('class', 'nav-link');
    }
}
console.log("Hola perro");
