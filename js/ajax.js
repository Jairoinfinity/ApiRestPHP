$(document).ready(function(){
    var boton = $("#bto button");

    boton.eq(1).click(function(){
        var inputs = $("#campos input");
        var selects = $("#campos input");
        var datos = false;
        var valor = [];
        var key = [];

        inputs.each((i)=>{
            if(inputs.eq(i).val() != ""){
                valor.push(inputs.eq(i).val());
                key.push(selects.eq(i).val());
                datos = true;
            }
        });

        if(datos){
            console.log("------");
        }else{
            $.getJSON("php/api.php?readall", function(res){
                var dato = res;
                var tabla =`
                <hr>
                <table>
                <thead>
                <tr>
                <th>ID</th>
                <th>Nombre</th>
                <th>Apellido</th>
                <th>Edad</th>
                <th>Email</th>
                <th>Nota</th>
                </tr>
                </thead>
                <tbody>
                `;

                dato.forEach(e => {
                    tabla +=`
                    <tr>
                    <td>${e.idalumno}</td>
                    <td>${e.nombre}</td>
                    <td>${e.apellido}</td>
                    <td>${e.edad}</td>
                    <td>${e.email}</td>
                    <td>${e.nota}</td>
                    </tr>
                `;
                });

                tabla+=`
                    </tbody>
                    </table>
                `;

                $("body").append("<div>").append(tabla);
            });
        }

    });
});