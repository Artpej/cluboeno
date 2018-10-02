<?php
class Database{
    private $host = "127.0.0.1";
    private $db_name = "YOU THINK I'M GOING TO GIVE YOU MY IDs?!";
    private $username = "YOU REALLY THINK?!";
    private $password = "I'M JOKING!!";
    public $connection;
 
    // DB Connection
    public function getConnection(){
        $this->connection = null;
        try{
            $this->connection = new PDO("mysql:host=" . $this->host . ";dbname=" . $this->db_name, $this->username, $this->password, array(PDO::MYSQL_ATTR_INIT_COMMAND => "SET NAMES utf8"));
            $this->connection->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        }catch(PDOException $e) {
            $msg = 'ERREUR PDO dans ' . $e->getFile() . ' L.' . $e->getLine() . ' : ' . $e->getMessage();
            die($msg);
        }
        return $this->connection;
    }
}
?>