//Récupération de l'article
var uri = document.location.href;
var components = URI.parse(uri);
var query = URI.parseQuery(components['query']);
var idwriter = 1;


/**************** C O M P O N E N T   A C T I V A T I O N ****************/
/*--------------- Header ---------------*/
new Vue(
    { el: '#headerId' }
);

/*--------------- Article ---------------*/
new Vue(
    { el: '#articleId', 
    data () {
        return {
            article: null,
            loading: true,
            errored: false
        }
    },
    mounted () {
        axios
        .get('https://api.cluboeno.com/articles.php/ONE/'+query['id'])
        .then(response => (
            this.article = response.data.article) //a faire : catcher le message si aucun article à afficher
        )
        .catch(error => {
            console.log(error)
            this.errored = true
        })
        .finally(() => this.loading = false)
    }
});

/*--------------- Article : more ---------------*/
new Vue(
    { el: '#morearcticleId', 
    data () {
        return {
            articles: null,
            loading: true,
            errored: false
        }
    },
    mounted () {
        axios
        .get('https://api.cluboeno.com/articles.php/WRITER/'+idwriter)
        .then(response => (
            this.articles = response.data.articles) //a faire : catcher le message si aucun article à afficher
        )
        .catch(error => {
            console.log(error)
            this.errored = true
        })
        .finally(() => this.loading = false)
    }
});

/*--------------- Writer ---------------*/
new Vue(
    { el: '#writerId', 
    data () {
        return {
            writer: null,
            loading: true,
            errored: false
        }
    },
    mounted () {
        axios
        .get('https://api.cluboeno.com/writers.php/ONE/'+idwriter)
        .then(response => (
            this.writer = response.data.writer) //a faire : catcher le message si aucun article à afficher
        )
        .catch(error => {
            console.log(error)
            this.errored = true
        })
        .finally(() => this.loading = false)
    }
});

/*--------------- Footer ---------------*/
new Vue(
    { el: '#footerId' }
);


/*--------------- OffCanvas ---------------*/
new Vue({
    el: '#offcanvasId', 
    data: {
        navlinks: navigationlinks
    }
})