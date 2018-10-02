<?php
ini_set('display_errors', 1);
/*********** A L L O W   F U L L   A C C E S S***********/
header("Access-Control-Allow-Origin: *");
header("Content-type: application/json; charset=utf-8");
header('Access-Control-Allow-Headers: Content-Type, X-XSRF-TOKEN');
//header('Access-Control-Allow-Methods: OPTIONS, GET, PUT, POST, DELETE, PATCH');
header("Access-Control-Allow-Credentials: true");
//header('Access-Control-Max-Age: 1728000');

include_once './db.php';
include_once './output.php';

class Article{
    // database connection and table name
    private $connection;
    private $table_name = "articles";  
    private $galery_table_name = "galery";   
    private $nbfeaturedarticles=10;
    private $nbheroarticle=1;
 
    // constructor with $db as database connection
    public function __construct($db){
        $this->connection = $db;
    }

    // featured articles
    function readfeaturedarticles(){
        $query = "SELECT p.id, p.title, p.link, p.publisheddate, p.resume, p.img, p.contents, p.readingtime
                FROM " . $this->table_name . " p
                WHERE isfeatured=1
                ORDER BY p.publisheddate DESC
                LIMIT 0, :nb ";
        $stmt = $this->connection->prepare($query);
        $stmt->bindValue(':nb', (int) $this->nbfeaturedarticles,PDO::PARAM_INT);
        $stmt->execute();
        return $stmt;
    }

    // hero article
    function readheroarticle(){
       $query = "SELECT p.id, p.title, p.link, p.publisheddate, p.resume, p.img, p.contents, p.readingtime
               FROM " . $this->table_name . " p
               WHERE ishero=1
               ORDER BY p.publisheddate DESC, p.id DESC
               LIMIT 0, :nb ";
       $stmt = $this->connection->prepare($query);
       $stmt->bindValue(':nb', (int) $this->nbheroarticle,PDO::PARAM_INT);
       $stmt->execute();
       return $stmt;
   }

   // flow article
   function readflowarticle($start, $nb){
        $query = "SELECT p.id, p.title, p.link, p.publisheddate, p.resume, p.img, p.contents, p.readingtime
                FROM " . $this->table_name . " p
                WHERE ishero=0 and isfeatured=0
                ORDER BY p.publisheddate DESC
                LIMIT :start, :nb";
        $stmt = $this->connection->prepare($query);
        $stmt->bindValue(':start', (int) $start,PDO::PARAM_INT);
        $stmt->bindValue(':nb', (int) $nb,PDO::PARAM_INT);
        $stmt->execute();
        return $stmt;
    }

    // read all articles from one writer
    function readwriterarticles($writer){
        $query = "SELECT p.id, p.title, p.link, p.publisheddate, p.resume, p.img, p.contents, p.readingtime
                FROM " . $this->table_name . " p
                WHERE idwriter=:writer";
        $stmt = $this->connection->prepare($query);
        $stmt->bindValue(':writer', (int) $writer,PDO::PARAM_INT);
        $stmt->execute();
        return $stmt;
    }

    // one article
    function readonearticle($link){
        $query = "SELECT p.id, p.title, p.link, p.publisheddate, p.resume, p.img, p.contents, p.readingtime, p.idwriter
                FROM " . $this->table_name . " p
                WHERE link=:link
                ORDER BY p.publisheddate DESC";
        $stmt = $this->connection->prepare($query);
        $stmt->bindValue(':link', (string) $link,PDO::PARAM_STR);
        $stmt->execute();
        return $stmt;
    }

    // one article
    function readgalery($link){
        $query = "SELECT p.img, p.title, p.text
                FROM " . $this->galery_table_name . " p
                WHERE idarticle in (select id from " . $this->table_name . " WHERE link=:link)";
        $stmt = $this->connection->prepare($query);
        $stmt->bindValue(':link', (string) $link,PDO::PARAM_STR);
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

// instantiate database and article object
$database = new Database();
$db = $database->getConnection();

// initialize object
$article = new Article($db);
unset($db); 

//authorized personnel method catching
$tab = explode('/', trim($_SERVER['PATH_INFO'], '/'));
switch($tab[0]){
    case 'FEATURED' :   $stmt = $article->readfeaturedarticles();
                        $output = new Output($stmt);
                        $output->array_name="articles";    
                        $output->array_flag=true ;
                        $result = $output->render();   
                        break;
    case 'HERO'     :   $stmt = $article->readheroarticle();
                        $output = new Output($stmt);
                        $output->array_name="article";
                        $output->array_flag=false;
                        $result = $output->render();
                        break;
    case 'FLOW'     :   //$json = file_get_contents('php://input'); 
                        //$post = json_decode($json, true);
                        //$stmt = $article->readflowarticle($post["start"], $post["nb"]);
                        $stmt = $article->readflowarticle($tab[1], $tab[2]);
                        $output = new Output($stmt);
                        $output->array_name="articles";
                        $output->array_flag=true;
                        $result = $output->render();
                        break;
    case 'ONE'     :    //article part
                        $stmt = $article->readonearticle($tab[1]);
                        $output = new Output($stmt);
                        $output->array_name="article";
                        $output->array_flag=false;
                        $result = $output->render();
                        //galery part
                        $stmt2= $article->readgalery($tab[1]);
                        $output2 = new Output($stmt2);
                        $output2->array_name="galery";
                        $output2->array_flag=true;
                        $result2 = $output2->render();
                        //merge for final result
                        $result["article"]=array_merge($result["article"], $result2) ;
                        break;
    case 'WRITER'   :   $stmt = $article->readwriterarticles($tab[1]);
                        $output = new Output($stmt);
                        $output->array_name="articles";
                        $output->array_flag=true;
                        $result = $output->render();
                        break;
    default         :   die('command error');
}

echo(json_encode($result));
?>