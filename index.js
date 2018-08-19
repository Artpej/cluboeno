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
/*--------------- Header ---------------*/
new Vue(
    { el: '#headerId' }
);

/*--------------- Footer ---------------*/
new Vue(
    { el: '#footerId' }
);

/*--------------- HeroArticle ---------------*/
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

/*--------------- Navigation ---------------*/
new Vue({
    el: '#navigationId', 
    data: {
        navlinks: navigationlinks
    }
});
/*--------------- FeaturedArticle ---------------*/
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
/*--------------- Articles & Writers ---------------*/
new Vue({
    el: '#contentindexId',
    data () {
        return {
            articles: [],
            writers : null,
            loadingarticles: true,
            erroredarticles: false,
            loadingwriters: true,
            erroredwriters: false,
            start:0,
            nb:5,
            end:false
        }
    },
    mounted () {
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

        // Initially load some articles and infinitescroll.
        this.getArticles();
        this.scroll(this.articles);
    },
    methods: {
        // Affichage des articles
        getArticles () {
            axios
            .post('https://api.cluboeno.com/articles.php/LAST/', { start: this.start, nb: this.nb })
            .then(response => {
                //if nothing then we stop by activating the "end flag"
                if (response.data.articles === undefined) {
                    this.end=true
                } else {
                    Array.prototype.push.apply(this.articles, response.data.articles)
                }
            })
            .catch(error => {
                console.log(error);
                this.erroredarticles = true
            })
            .finally(() => {
                this.loadingarticles = false;
                this.start+=this.nb //incremental for next articles
            });
        },
        // Infinite Scroll
        bottomVisible() {
            const scrollY = window.scrollY
            const visible = document.documentElement.clientHeight
            const pageHeight = document.documentElement.scrollHeight
            const bottomOfPage = visible + scrollY >= pageHeight
            return bottomOfPage || pageHeight < visible
          },
        scroll (articles) {
          window.onscroll = () => {
            //no need to try if loading is running or no data
            if (this.loadingarticles==false && this.end==false) { 
                if (this.bottomVisible()) {
                    this.loadingarticles=true;
                    this.getArticles ();
                }
            }
          };
        }
    },
});

/*--------------- OffCanvas ---------------*/
new Vue({
    el: '#offcanvasId', 
    data: {
        navlinks: navigationlinks
    }
})