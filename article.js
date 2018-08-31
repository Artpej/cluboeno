//Récupération de l'article
var uri = document.location.href;
var components = URI.parse(uri);
var query = URI.parseQuery(components['query']);
//alert(query['id']);


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
        .post('https://api.cluboeno.com/articles.php/HERO') //post('https://api.cluboeno.com/articles.php/ONE', { link: query['id'] } )
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

/*--------------- Writer ---------------*/
new Vue(
    { el: '#writerId', 
    data: {
        writer: {
            name : "Romain Chapon",
            pseudo : "LeChaps",
            text : "On en boira toujours du plus mauvais!",
            img : `https://picsum.photos/100/100/?random=10`
        }
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