<?php
session_start();

// Datos de conexión a la base de datos
$servername = "localhost";
$username = "tu_usuario";
$password = "tu_contraseña";
$dbname = "nombre_de_tu_base_de_datos";

// Conexión a la base de datos
$conn = mysqli_connect($servername, $username, $password, $dbname);

// Verificar si la conexión a la base de datos es exitosa
if (!$conn) {
    die("La conexión a la base de datos falló: " . mysqli_connect_error());
}

// Verificar las credenciales ingresadas
$username = mysqli_real_escape_string($conn, $_POST['username']);
$password = mysqli_real_escape_string($conn, $_POST['password']);
$sql = "SELECT * FROM usuarios WHERE username='$username' AND password='$password'";
$result = mysqli_query($conn, $sql);

if (mysqli_num_rows($result) == 1) {
    // Credenciales correctas, redirigir al usuario a la página de destino
    $_SESSION['loggedin'] = true;
    header('Location: pagina-segura.php');
    exit;
} else {
    // Credenciales incorrectas, mostrar un mensaje de error
    header('Location: login.html?error=1');
    exit;
}
?>