<?php
class Output{
    public $array_name; //Nom du tableau de résultat (si tableau activé)
    public $array_flag; //Activation des résultats en tableau

    // constructor with $stmt as data recordset
    public function __construct($stmt){
        $this->stmt = $stmt;
    }

    // fonction de rendu
    function render(){
        $num        = $this->stmt->rowCount();
        if($num>0){
            $data_array=array();
            if ($this->array_flag) {
                $data_array[$this->array_name]=array();
                // fetch() is faster than fetchAll() : http://stackoverflow.com/questions/2770630/pdofetchall-vs-pdofetch-in-a-loop
                while ($row = $this->stmt->fetch(PDO::FETCH_ASSOC)){
                    array_push($data_array[$this->array_name], $row);   
                }
            }
            else {
                $row = $this->stmt->fetch(PDO::FETCH_ASSOC);
                if ($this->array_name==null)
                    $data_array = $row;
                else
                    $data_array[$this->array_name]=$row;
            }
            sleep(1);
            return $data_array;
        }
        else {
            return array("message" => "No data found");
        }

    }

}
?>