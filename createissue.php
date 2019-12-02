<?php


$conn = new mysqli('localhost', 'root', 'password', 'bugme') 
or die ('Cannot connect to db');

    $result = $conn->query("SELECT id, firstname FROM Users");

    echo "<html>";
    echo "<body>";
    echo "<select id='assign'>";
    
    

    while ($row = $result->fetch_assoc()) {
                
                  unset($id, $firstname);
                  $id = $row['id'];
                  $name = $row['firstname']; 
                  echo '<option value="'.$id.'">'.$firstname.'</option>';

}

    echo "</select>";
    echo "</body>";
    echo "</html>";
?> 