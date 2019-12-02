<?php
$host = "localhost";
$username = "root";
$password = "password";
$database = "bugme";
$dsn = "mysql:host=$host;dbname=$database";

TRY{
$conn = new PDO( $dsn, $username, $password );
$conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

if (isset($_POST['submit'])) {
    $firstname = $_POST['firstname'];
    $lastname = $_POST['lastname'];
    $password = $_POST['password'];
    $email = $_POST['email'];

    if (isset($_POST['id'])) {
        //update mode, have both POST data and ID, update the record
        $id = $_POST['id'];

        $sql = "UPDATE Users SET"
            . "firstname=".$conn->quote($firstname)
            . ",lastname=".$conn->quote($lastname)
            . ",password=".$conn->quote($password)
            . ",email=".$conn->quote($email)
            . " WHERE id = ".$conn->quote($id);
        $userdata = $conn->query($sql);
    }
}
}
?>