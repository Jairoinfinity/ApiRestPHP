$(document).ready(function(){
    //Petición ajax para listar las columnas de mysql
    var campos = "";
    $.get("php/api.php?tablas=1",function(res){
        var datos = res.split(",");
        campos = `<select>
            <option>${datos[0]}</option>
            <option>${datos[1]}</option>
            <option>${datos[2]}</option>
            <option>${datos[3]}</option>
            <option>${datos[4]}</option>
            <option>${datos[5]}</option>
            </select>
            <input type="text"><br>`;
        $("#campos").append(campos);
    });


    $("#formulario button").click(function(){
        $("#campos").append(campos);
    });
});