//Récupération de l'article
var uri = document.location.href;
var components = URI.parse(uri);
var query = URI.parseQuery(components['query']);

/**************** C O M P O N E N T   A C T I V A T I O N ****************/
new Vue(
    { el: '#articleVue' }
);