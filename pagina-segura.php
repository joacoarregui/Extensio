<?php
session_start();

// Datos de conexión a la base de datos
include_once 'config.php';

// Conexión a la base de datos
$conn = mysqli_connect($servername, $username, $password, $dbname);

// Verificar si la conexión a la base de datos es exitosa
if (!$conn) {
    die("La conexión a la base de datos falló: " . mysqli_connect_error());
}

// Verificar si hay una sesión iniciada
if (!isset($_SESSION['loggedin']) || $_SESSION['loggedin'] !== true) {
    header('Location: login.html');
    exit;
}
?>

<!DOCTYPE html>
<html>
<head>
    <title>Página segura</title>
</head>
<body>
    <h1>Bienvenido</h1>
    <p>Esta es una página segura.</p>
    <a href="logout.php">Cerrar sesión</a>
</body>
</html>