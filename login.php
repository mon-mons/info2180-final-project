<?php
//session_start();

function userLogin($emailAddress,$password)
{
    if(!(CheckLoginInDB($emailAddress,$password)))
    {
        echo "Login Failed";
        return false;
    }
}

function CheckLoginInDB($emailAddress,$password)
{
    $connect = new PDO('mysql:host=localhost;dbname=bugme;', 'root', '5109');
    $checkLoginQuery = "SELECT `id`, `firstname`, `lastname` FROM `Users` WHERE `email`='$emailAddress'";
    $stmt = $connect->query($checkLoginQuery);
    $result = $stmt->fetch(PDO::FETCH_ASSOC);
    if ($result)
    {
        $_SESSION["id"] = $result['id'];
        $_SESSION["firstname"] = $result['firstname'];
        $_SESSION["lastname"] = $result['lastname'];
        header("homepage.html");
    }
    else 
    {
        return false;
    }
    
}

if(isset($_POST)) 
{

    echo userLogin($email,$password);
}
/*
if ( isset( $_POST['submit_form'] ) )
{
    $email = $_POST['email'];
    $password = $_POST['password'];
    
    userLogin($email,$password);
}
?>
