//Article en tête de page d'accueil
Vue.component('component-heroarticle', {
    data () {
        return {
            article: null,
            loading: true,
            errored: false
        }
    },
    mounted () {
        axios
        .get('https://api.cluboeno.com/articles.php/HERO')
        .then(response => (
            this.article = response.data.article) //a faire : catcher le message si aucun article à afficher
        )
        .catch(error => {
            console.log(error)
            this.errored = true
        })
        .finally(() => this.loading = false)
    },
    template: `<section  class="uk-section uk-section-small">
                    <div class="uk-container">
                        <div v-if="errored">
                        <p>Erreur de chargement</p>
                    </div>
                    <div v-else>
                        <div v-if="loading"><div uk-spinner="ratio: 6"></div></div>
                        <div v-else class="uk-height-large uk-cover-container uk-border-rounded">
                                <img v-bind:src="article.img" alt="Alt img" with="1300" height="500" data-uk-cover>
                                <div class="uk-overlay uk-overlay-primary uk-position-cover uk-flex uk-flex-center uk-flex-middle uk-light uk-text-center">
                                    <div data-uk-scrollspy="cls: uk-animation-slide-bottom-small">
                                        <span style="letter-spacing: 0.2em; font-size: 0.725rem">Présentation</span>
                                        <h1 class="uk-margin-top uk-margin-small-bottom uk-margin-remove-adjacent">{{article.title}}</h1>
                                        <p>{{article.resume}}</p>
                                        <a v-bind:href="'article.html?id='+article.link" class="uk-button uk-button-default uk-margin-top">Lire l'article</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>`
});

//Article en premier plan (tendances)
Vue.component('component-featuredarticleslist', {
    data () {
        return {
            articles: null,
            loading: true,
            errored: false
         }
     },
    mounted () {
        axios
        .get('https://api.cluboeno.com/articles.php/FEATURED/')
        .then(response => (
            this.articles = response.data.articles) //a faire : catcher le message si aucun article à afficher
        )
        .catch(error => {
            console.log(error)
            this.errored = true
        })
        .finally(() => this.loading = false)
    },
    template: ` <div class="uk-container">
                    <h4 class="uk-heading-line uk-text-bold"><span>Premier plan</span></h4>
                    <div v-if="errored">
                        <p>Erreur de chargement</p>
                    </div>
                    <div v-else>
                        <div v-if="loading"><div uk-spinner="ratio: 3"></div></div>
                        <div v-else data-uk-slider="velocity: 10" >
                            <div class="uk-position-relative">
                                <div class="uk-slider-container">
                                    <ul class="uk-slider-items uk-child-width-1-2@m uk-grid uk-grid-medium news-slide">
                                        <component-featuredarticlelistdetail v-for="article in articles" v-bind:article="article" >
                                        </component-featuredarticlelistdetail>
                                    </ul>
                                </div>
                                <div class="uk-hidden@l uk-light">
                                    <a class="uk-position-center-left uk-position-small" href="#" data-uk-slidenav-previous data-uk-slider-item="previous"></a>
                                    <a class="uk-position-center-right uk-position-small" href="#" data-uk-slidenav-next data-uk-slider-item="next"></a>
                                </div>
                                <div class="uk-visible@l">
                                    <a class="uk-position-center-left-out uk-position-small" href="#" data-uk-slidenav-previous data-uk-slider-item="previous"></a>
                                    <a class="uk-position-center-right-out uk-position-small" href="#" data-uk-slidenav-next data-uk-slider-item="next"></a>
                                </div>
                            </div>
                            <ul class="uk-slider-nav uk-dotnav uk-flex-center uk-margin"></ul>
                        </div>
                    </div>
                </div>`
}) ;

//Sous partie de la liste des articles premier plan (tendances)
Vue.component('component-featuredarticlelistdetail', {
    props: ['article'],
    template : `<li>
                    <div class="uk-card uk-card-default uk-card-body uk-card-small uk-flex uk-flex-middle uk-card-default uk-border-rounded">
                        <div class="uk-grid uk-grid-medium uk-flex uk-flex-middle" data-uk-grid>
                            <div class="uk-width-1-3@s uk-width-2-5@m uk-height-1-1">
                                <img v-bind:src="article.img" alt="">
                            </div>
                            <div class="uk-width-2-3@s uk-width-3-5@m">
                                <span class="uk-label uk-label-warning" style="font-size: 0.75rem">Tendance</span>
                                <h3 class="uk-card-title uk-margin-small-top uk-margin-remove-bottom">
                                    <a class="uk-link-reset" v-bind:href="'article.html?id='+article.link">{{article.title}}</a>
                                </h3>
                                <span class="uk-article-meta">Publié le {{article.publisheddate}}</span>
                                <p class="uk-margin-small">{{article.resume}}...</p>
                            </div>
                        </div>
                    </div>
                </li>`
});

//Liste des articles (sauf les tendances)
Vue.component('component-articleslist', {
    props: ['articles', 'loadingarticles', 'erroredarticles'],
    template: ` <div>
                    <h4 class="uk-heading-line uk-text-bold"><span>Derniers articles</span></h4>
                    <div v-if="erroredarticles">
                        <p>Erreur de chargement</p>
                    </div>
                    <div v-else>
                        <component-articlelistdetail v-for="article in articles" v-bind:article="article"></component-articlelistdetail>
                        <div v-if="loadingarticles"><div uk-spinner="ratio: 3"></div></div>
                    </div>
                </div>
                `
}) ;

//Sous partie de la liste des articles (sauf les tendances)
Vue.component('component-articlelistdetail', {
    props: ['article'],
    template : `<article class="uk-section uk-section-small uk-padding-remove-top">
                    <header>
                        <h2 class="uk-margin-remove-adjacent uk-text-bold uk-margin-small-bottom"><a v-bing:title="article.title" class="uk-link-reset" v-bind:href="'article.html?id='+article.link">{{article.title}}</a></h2>
                        <p class="uk-article-meta">Publié {{article.publisheddate}} | <span data-uk-icon="icon: future"></span> Se lit en {{article.readingtime}}</p>
                    </header>
                    <figure>
                        <img v-bind:src="article.img" width="800" height="300"  alt="Alt text" class="lazy">
                        <figcaption class="uk-padding-small uk-text-center uk-text-muted">Caption of the image</figcaption>
                    </figure>
                    <p>{{article.resume}}</p>
                    <a v-bind:href="'article.html?id='+article.link" title="Lire" class="uk-button uk-button-default uk-button-small">Lire</a>
                    <hr>
                </article>`
});

//Page dédié aux articles
Vue.component('component-articledetail', {
    data () {
        return {
            article: null,
            loading: true,
            errored: false
        }
    },
    mounted () {
        axios
        .get('https://api.cluboeno.com/articles.php/ONE/'+idlink)
        .then(response => (
            this.article = response.data.article) //a faire : catcher le message si aucun article à afficher
        )
        .catch(error => {
            console.log(error)
            this.errored = true
        })
        .finally(() => this.loading = false)
    },
    template : `<section class="uk-section uk-article">
                    <div v-if="errored">
                        <p>Erreur de chargement</p>
                    </div>
                    <div v-else>
                        <div v-if="loading" class="uk-container uk-container-small"><div uk-spinner="ratio: 6"></div></div>
                        <div v-else> 
                            <div class="uk-container uk-container-small">
                                <h2 class="uk-text-bold uk-h1 uk-margin-remove-adjacent uk-margin-remove-top">{{article.title}}</h2>
                                <p class="uk-article-meta">Publié {{article.publisheddate}}  | <span data-uk-icon="icon: future"></span> Se lit en {{article.readingtime}}</p>
                                <p class="uk-text-lead">{{article.resume}}</p>
                            </div>
                            <!-- large image -->
                            <div class="uk-container uk-section">
                                <div class="uk-position-relative uk-visible-toggle uk-light" data-uk-slideshow="ratio: 7:3; animation: push; min-height: 270;">
                                    <ul class="uk-slideshow-items">
                                        <component-articledetailgalerylargeimage v-for="image in article.galery" v-bind:image="image"></component-articledetailgalerylargeimage>
                                    </ul>
                                    <a class="uk-position-center-left uk-position-small uk-hidden-hover" href="#" data-uk-slidenav-previous="ratio: 1.5" data-uk-slideshow-item="previous"></a>
                                    <a class="uk-position-center-right uk-position-small uk-hidden-hover" href="#" data-uk-slidenav-next="ratio: 1.5" data-uk-slideshow-item="next"></a>
                                </div>
                            </div>
                            <!-- /large image -->

                            <!-- text -->
                            <div class="uk-container uk-container-small" v-html="article.contents"></div>
                            <!-- text -->

                            <!-- gallery -->
                            <div class="uk-container uk-container-small uk-margin-medium">
                                <div class="uk-grid uk-grid-medium uk-child-width-1-2 uk-child-width-1-3@s" data-uk-grid data-uk-lightbox>
                                    <component-articledetailgalery v-for="image in article.galery" v-bind:image="image"></component-articledetailgalery>
                                </div>
                            </div>
                            <!-- /gallery -->
                        </div>
                    </div>
                </section>`
});

//Page dédié aux articles : partie galerie d'image
Vue.component('component-articledetailgalerylargeimage', {
    props: ['image'],
    template : `
    <li>
        <img v-bind:src="image.img" alt="" data-uk-cover>
        <div class="uk-position-bottom uk-position-medium uk-text-center uk-light">
            <h3 class="uk-margin-remove">{{image.title}}</h3>
            <p class="uk-margin-remove uk-visible@s">{{image.text}}</p>
        </div>
    </li>`
});

//Page dédié aux articles : partie galerie d'image
Vue.component('component-articledetailgalery', {
    props: ['image'],
    template : `
    <div>
        <figure>
            <a v-bind:data-caption="image.title" v-bind:title="image.title" v-bind:href="image.img"><img v-bind:src="image.img" with="300" height="170" v-bind:alt="image.title"></a>
            <figcaption class="uk-text-small uk-text-muted uk-text-center uk-padding-small uk-visible@s">{{image.title}}</figcaption>
        </figure>
    </div>`
});

//Page dédié aux articles : plus d'article de l'auteur
Vue.component('component-morearticle', {
    props: ['idwriter'],
    data () {
        return {
            articles: null,
            loading: true,
            errored: false
        }
    },
    mounted () {
        axios
        .get('https://api.cluboeno.com/articles.php/WRITER/'+this.idwriter) //+idwriter)
        .then(response => (
            this.articles = response.data.articles) //a faire : catcher le message si aucun article à afficher
        )
        .catch(error => {
            console.log(error)
            this.errored = true
        })
        .finally(() => this.loading = false)
    },
    template : `<section class="uk-section uk-section-muted">
                    <div v-if="errored">
                        <p>Erreur de chargement</p>
                    </div>
                    <div v-else>
                        <div v-if="loading" class="uk-container uk-container-small"><div uk-spinner="ratio: 6"></div></div>
                        <div v-else> 
                            <div class="uk-container">
                                <h2 class="uk-text-bold">Articles du même auteur</h2>
                                <div data-uk-slider="velocity: 5">
                                    <div class="uk-position-relative">
                                        <div class="uk-slider-container">
                                            <ul class="uk-slider-items uk-child-width-1-2@s uk-child-width-1-3@m uk-grid uk-grid-medium">
                                                <component-morearticledetail v-for="article in articles" v-bind:article="article"></component-morearticledetail>
                                            </ul>
                                        </div>
                                        <ul class="uk-slider-nav uk-dotnav uk-flex-center uk-margin">
                                        </ul>
                                        <div class="uk-hidden@m uk-light">
                                            <a class="uk-position-center-left uk-position-small" href="#" data-uk-slidenav-previous data-uk-slider-item="previous"></a>
                                            <a class="uk-position-center-right uk-position-small" href="#" data-uk-slidenav-next data-uk-slider-item="next"></a>
                                        </div>
                                        <div class="uk-visible@m">
                                            <a class="uk-position-center-left-out uk-position-small" href="#" data-uk-slidenav-previous data-uk-slider-item="previous"></a>
                                            <a class="uk-position-center-right-out uk-position-small" href="#" data-uk-slidenav-next data-uk-slider-item="next"></a>
                                        </div>
                                    </div>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </section>`
});

//Page dédié aux articles : plus d'article de l'auteur -> détail
Vue.component('component-morearticledetail', {
    props: ['article'],
    template : `<li>
                    <!-- card -->
                    <div>
                        <div class="uk-card uk-card-default uk-card-small" style="box-shadow: none;">
                            <div class="uk-card-media-top">
                                <a href="#"><img v-bind:src="article.img" with="620" height="350" alt=""></a>
                            </div>
                            <div class="uk-card-header">
                                <div class="uk-grid-small uk-flex-middle" data-uk-grid>
                                    <div class="uk-width-auto">
                                        <img class="uk-border-circle" alt="" width="40" height="40" src="https://unsplash.it/60/60/?random">
                                    </div>
                                    <div class="uk-width-expand">
                                        <h6 class="uk-margin-remove-bottom uk-text-bold">Author Name</h6>
                                        <p class="uk-text-meta uk-margin-remove-top uk-text-small"><time datetime="2016-04-01T19:00">April 01, 2016</time></p>
                                    </div>
                                </div>
                            </div>
                            <div class="uk-card-body">
                                <h4 class="uk-margin-small-bottom uk-text-bold">{{article.title}}</h4>
                                <span class="uk-text-small">{{article.resume}}</span>
                                <a class="uk-button uk-button-text uk-text-bold uk-margin-small" v-bind:href="'article.html?id='+article.link">LIRE...</a>
                            </div>
                        </div>
                    </div>
                    <!-- /card -->
                </li>`
});