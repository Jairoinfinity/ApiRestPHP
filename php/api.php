<?php
    $conexion = mysqli_connect("localhost","root","","alumnos");
    mysqli_query($conexion,"SET NAMES 'utf8'");
    if(isset($_GET["tablas"])){
        $tablas = mysqli_query($conexion,"SHOW COLUMNS FROM alumno");
        while($arrayTabla = mysqli_fetch_assoc($tablas)){
            echo $arrayTabla["Field"].",";
        };
    }

    if(isset($_GET["readall"])){
        $datos = mysqli_query($conexion, "SELECT * FROM alumno");
        
        $a=array();
        $i = 0;
        while($arrayDatos = mysqli_fetch_array($datos, MYSQLI_ASSOC)){
            $a[$i] = $arrayDatos;
            $i++;
        }
        echo json_encode($a);
    }
?>