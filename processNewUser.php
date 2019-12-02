<?php

/**
 * THIS IS A TEMPLATE... NEEDS TO BE EDITED
 */

$host = "localhost";
$username = "root";
$password = "";
$database = "bugme";
$dsn = "mysql:host=$host;dbname=$database";

TRY {
$conn = new PDO( $dsn, $username, $password );
$conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

if (isset($_POST['submit'])) {
    $firstname = $_POST['firstname'];
    $lastname = $_POST['lastname'];
    $gender = $_POST['gender'];
    $Console = $_POST['Console'];

    if (isset($_POST['id'])) {
        //update mode, we have both POST data and ID, update the record
        $id = $_POST['id'];

        $sql = "UPDATE userprofile SET"
            . "firstname=".$conn->quote($firstname)
            . ",lastname=".$conn->quote($lastname)
            . ",sex=".$conn->quote($gender)
            . ",console=".$conn->quote($Console)
            . " WHERE id = ".$conn->quote($id);
        $userdata = $conn->query($sql);