<?php
    $conexion = mysqli_connect("localhost","root","","alumnos");
    
    if(isset($_GET["tablas"])){
        $tablas = mysqli_query($conexion,"SHOW COLUMNS FROM alumno");
        while($arrayTabla = mysqli_fetch_assoc($tablas)){
            echo $arrayTabla["Field"].",";
        };
    }

    if(isset($_GET["readall"])){
        $datos = mysqli_query($conexion, "SELECT * FROM alumno");
        while($arrayDatos = mysqli_fetch_assoc($datos)){
            echo json_encode($arrayDatos);
        }
    }
?>