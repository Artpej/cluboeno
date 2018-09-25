<?php
ini_set('display_errors', 1);
/*********** A L L O W   F U L L   A C C E S S***********/
header("Access-Control-Allow-Origin: *");
header("Content-type: application/json; charset=utf-8");
//header('Access-Control-Allow-Headers: Content-Type, X-XSRF-TOKEN');
//header('Access-Control-Allow-Methods: OPTIONS, GET, PUT, POST, DELETE, PATCH');
header("Access-Control-Allow-Credentials: true");
//header('Access-Control-Max-Age: 1728000');

include_once './db.php';
include_once './output.php';

class Writer{
    // database connection and table name
    private $connection;
    private $table_name = "writers";
  
    // constructor with $db as database connection
    public function __construct($db){
        $this->connection = $db;
    }

    // all writers
    function readallwriters(){
        $query = "SELECT p.id, p.name, p.pseudo, p.text, p.img 
                FROM " . $this->table_name . " p
                ORDER BY id ";
        $stmt = $this->connection->prepare($query);
        $stmt->execute();
        return $stmt;
    }

    // on writer
    function readonewriter($id){
        $query = "SELECT p.id, p.name, p.pseudo, p.text, p.img 
                FROM " . $this->table_name . " p
                WHERE id=:id";
        $stmt = $this->connection->prepare($query);
        $stmt->bindValue(':id', (int) $id,PDO::PARAM_INT);
        $stmt->execute();
        return $stmt;
    }
}

/***********************************************************************************************************************/
/************************************T H I S   I S   T H E   B E G I N N I N G *****************************************/
/***********************************************************************************************************************/

// authorized method catching
switch($_SERVER['REQUEST_METHOD']){
    case 'OPTIONS'  : die(); break;
    case 'GET'      : break;
    case 'POST'     : die(); break;
    case 'PUT'      : die(); break;
    case 'DELETE'   : die(); break;
    case 'PATCH'    : die(); break;
    default         : die('calling error');
}

// instantiate database and writer object
$database = new Database();
$db = $database->getConnection();

// initialize object
$writer = new Writer($db);
unset($db); 

//authorized personnel method catching
$tab = explode('/', trim($_SERVER['PATH_INFO'], '/'));
switch($tab[0]){
    case 'ALL'      :   $stmt = $writer->readallwriters(); 
                        $output = new Output($stmt) ;
                        $output->array_name="writers";
                        $output->array_flag=true;
                        break;
    case 'ONE'      :   $stmt = $writer->readonewriter($tab[1]);
                        $output = new Output($stmt) ;
                        $output->array_name="writer";
                        $output->array_flag=false;
                        break;
    default         : die('command error');
}

$result = $output->render();
echo(json_encode($result));
?>