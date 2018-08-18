/**************** D A T A   L O A D I N G  ****************/

var navigationlinks = [
    {   link: 'article/le_club_oeno',             
        title: 'Le club Oeno'
    },
    {   link: 'article/les_pays_producteurs',
        title: 'Les pays producteurs de vin'
    },
    {   link: 'article/les_regions_francaises',
        title: 'Les régions françaises'
    },
    {   link: 'page/les_cepages.html',                 
        title: 'Les cépages'
    },
    {   link: 'article/la_vinification', 
        title: 'La vinification'
    },
    {   link: 'article/l_oenologie',              
        title: 'L\'oenologie'
    }
];

/**************** C O M P O N E N T   A C T I V A T I O N ****************/
new Vue(
    { el: '#headerId' }
);

new Vue(
    { el: '#footerId' }
);

new Vue(
    { el: '#heroarticleId', 
    data () {
        return {
            articles: null,
            loading: true,
            errored: false
        }
    },
    mounted () {
        axios
        .post('https://api.cluboeno.com/articles.php/HERO')
        .then(response => (
            this.articles = response.data.articles) //a faire : catcher le message si aucun article à afficher
        )
        .catch(error => {
            console.log(error)
            this.errored = true
        })
        .finally(() => this.loading = false)
    }
   /* data: {
        article: {
            img : `https://picsum.photos/1300/500/?image=674`, 
            title : `Bienvenue sur Club Oeno`, 
            resume : `Le site référence pour les amoureux de l'oenologie` 
        }
    }*/
});

new Vue({
    el: '#navigationId', 
    data: {
        navlinks: navigationlinks
    }
});

new Vue({
    el: '#featuredarticleId',
    data () {
       return {
           articles: null,
           loading: true,
           errored: false
        }
    },
    mounted () {
        axios
        .post('https://api.cluboeno.com/articles.php/FEATURED/')
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

new Vue({
    el: '#contentindexId',
    data () {
        return {
            articles: [],
            writers : null,
            loadingarticles: true,
            erroredarticles: false,
            loadingwriters: true,
            erroredwriters: false
        }
    },
    mounted () {
        axios
        .post('https://api.cluboeno.com/articles.php/LAST/')
        .then(response => (
            Array.prototype.push.apply(this.articles, response.data.articles)) //a faire : catcher le message si aucun article à afficher
        )
        .catch(error => {
            console.log(error)
            this.erroredarticles = true
        })
        .finally(() => this.loadingarticles = false);
        axios
        .post('https://api.cluboeno.com/writers.php/ALL/')
        .then(response => (
            this.writers = response.data.writers) //a faire : catcher le message si aucun article à afficher
        )
        .catch(error => {
            console.log(error)
            this.erroredwriters = true
        })
        .finally(() => this.loadingwriters = false);
        

    }
});

new Vue({
    el: '#offcanvasId', 
    data: {
        navlinks: navigationlinks
    }
})