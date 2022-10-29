
const precioTicket = 200;

function resumen(event){
    event.preventDefault();
    let cantidad = document.getElementById('cantidad');
    let categoria = document.getElementById("seleccion");
    let input = document.getElementById('total');
    let value = categoria.options[categoria.selectedIndex].value;

    let stringEstudiante = 'Estudiante';
    let stringTrainee = 'Trainee';
    let stringJunior = 'Junior';
    
    let valorTicketEstudiante = precioTicket - (200 * 80) / 100;
    let valorTicketTrainee = precioTicket - (200 * 50) / 100;
    let valorTicketJunior = precioTicket - (200 * 15) / 100;

    if(value == stringEstudiante){
        let pago = valorTicketEstudiante * cantidad.value;
        input.placeholder = 'Total a pagar: $ ' + pago;
    }
    else if(value == stringTrainee){
        let pago = valorTicketTrainee * cantidad.value;
        input.placeholder = 'Total a pagar: $ ' + pago;
    }
    else if(value == stringJunior){
        
        let pago = valorTicketJunior * cantidad.value;
        input.placeholder = 'Total a pagar: $ ' + pago;
    }
}

function borrar(){
    document.getElementById('nombre').value = '';
    document.getElementById('apellido').value = '';
    document.getElementById('correo').value = '';
    document.getElementById('cantidad').value = '';
    document.getElementById('seleccion').value = '';
    document.getElementById('total').placeholder = 'Total a pagar: $ ';
}

botonResumen = document.getElementById('resumen');
botonResumen.addEventListener('click', resumen);

botonBorrar = document.getElementById('borrar');
botonBorrar.addEventListener('click', borrar);