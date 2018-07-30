//Article en tête de page d'accueil
Vue.component('component-heroarticle', {
    props: ['article' ],
    template: ` <section class="uk-section uk-section-small">
                    <div class="uk-container">
                        <div class="uk-height-large uk-cover-container uk-border-rounded">
                            <img v-bind:src="article.img" alt="Alt img" data-uk-cover>
                            <div class="uk-overlay uk-overlay-primary uk-position-cover uk-flex uk-flex-center uk-flex-middle uk-light uk-text-center">
                                <div data-uk-scrollspy="cls: uk-animation-slide-bottom-small">
                                    <span style="letter-spacing: 0.2em; font-size: 0.725rem">Présentation</span>
                                    <h1 class="uk-margin-top uk-margin-small-bottom uk-margin-remove-adjacent">{{article.title}}</h1>
                                    <p>{{article.subtitle}}</p>
                                    <a href="./article/le_club_oeno" class="uk-button uk-button-default uk-margin-top">Lire l'article</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>`
});

Vue.component('component-featuredarticleslist', {
    props: ['articles', 'errored', 'loading'],
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
                                        <component-featuredarticle v-for="article in articles" v-bind:article="article" >
                                        </component-featuredarticle>
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

//Sous partie de la liste des articles tendances
Vue.component('component-featuredarticle', {
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
                                    <a class="uk-link-reset" v-bind:href="article.link">{{article.title}}</a>
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
    props: ['articles'],
    template: ` <div>
                    <h4 class="uk-heading-line uk-text-bold"><span>Derniers articles</span></h4>
                    <componentarticle v-for="article in articles" v-bind:article="article">
                    </componentarticle>
                </div>
                `
}) ;

//Sous partie de la liste des articles (sauf les tendances)
Vue.component('componentarticle', {
    props: ['article'],
    template : `<article class="uk-section uk-section-small uk-padding-remove-top">
                    <header>
                        <h2 class="uk-margin-remove-adjacent uk-text-bold uk-margin-small-bottom"><a v-bing:title="article.title" class="uk-link-reset" href="#">{{article.title}}</a></h2>
                        <p class="uk-article-meta">Publié {{article.publisheddate}}. Posted in <a href="#">Blog</a> | <span data-uk-icon="icon: future"></span> Se lit en {{article.readingtime}}</p>
                    </header>
                    <figure>
                        <img v-bind:src="article.img" width="800" height="300"  alt="Alt text" class="lazy">
                        <figcaption class="uk-padding-small uk-text-center uk-text-muted">Caption of the image</figcaption>
                    </figure>
                    <p>{{article.text}}</p>
                    <a href="#" title="Read More" class="uk-button uk-button-default uk-button-small">Lire</a>
                    <hr>
                </article>`
});