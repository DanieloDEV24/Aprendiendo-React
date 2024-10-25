<?php
if($_SERVER["REQUEST_METHOD"] == "POST")
{
    $data = file_get_contents('php://input');
    //Los convertimos en un array
    $data = json_decode($data, false);

    $todos = file_get_contents('todos.json');
    //Los convertimos en un array
    $todos = json_decode($data, false);


    if($data->opcion === "ChangeState")
    {
        $id = $data->id;
        $state = $data->state;
        $todos = $todos->todosSave;
        
    foreach($todos as $todo)
    {
        if($todo->id === $id)
        {
            $todo->completed = $state;
        }
    }

        $jsonNuevo = json_encode($todos);
        file_put_contents('todos.json', $jsonNuevo);

        echo json_encode($todos);
        exit;
    }
    
}
     
