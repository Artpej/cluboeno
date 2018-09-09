//Article en tête de page d'accueil
Vue.component('component-heroarticle', {
    props: ['article', 'errored', 'loading'],
    template: `<section  class="uk-section uk-section-small">
                    <div class="uk-container">
                        <div v-if="errored">
                        <p>Erreur de chargement</p>
                    </div>
                    <div v-else>
                        <div v-if="loading"><div uk-spinner="ratio: 6"></div></div>
                        <div v-else class="uk-height-large uk-cover-container uk-border-rounded">
                                <img v-bind:src="article.img" alt="Alt img" data-uk-cover>
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
                </section>
`
});

//Article en premier plan (tendances)
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


//Page dédié des articles
Vue.component('component-articledetail', {
    props: ['article', 'loading', 'errored'],
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
                                        <li>
                                            <img src="http://www.zurcherarquitectos.com/files/cache/w1300h600q75-landscape-introweb-qt-.jpg" alt="" data-uk-cover>
                                            <div class="uk-position-bottom uk-position-medium uk-text-center uk-light">
                                                <h3 class="uk-margin-remove">Sed consequat urna.</h3>
                                                <p class="uk-margin-remove uk-visible@s">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                            </div>
                                        </li>
                                        <li>
                                            <img src="http://www.patriciatravels.com/wp-content/uploads/2016/02/verdura-springs.jpg" alt="" data-uk-cover>
                                            <div class="uk-position-bottom uk-position-medium uk-text-center uk-light">
                                                <h3 class="uk-margin-remove">Vivamus sed consequat urna.</h3>
                                                <p class="uk-margin-remove uk-visible@s">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                            </div>
                                        </li>
                                        <li>
                                            <img src="http://www.slpoty.co.uk/wp-content/uploads/2015/01/Craig_Aitchison-Buachaille_Etive_Mor.jpg" alt="" data-uk-cover>
                                            <div class="uk-position-bottom uk-position-medium uk-text-center uk-light">
                                                <h3 class="uk-margin-remove">Sed consequat urna.</h3>
                                                <p class="uk-margin-remove uk-visible@s">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                            </div>
                                        </li>
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
                                    <div>
                                        <figure>
                                            <a data-caption="Image Caption" title="Image Caption" href="http://www.zurcherarquitectos.com/files/cache/w1300h600q75-landscape-introweb-qt-.jpg"><img src="https://unsplash.it/300/170/?random" alt="Image Caption"></a>
                                            <figcaption class="uk-text-small uk-text-muted uk-text-center uk-padding-small uk-visible@s">Aenean vitae est</figcaption>
                                        </figure>
                                    </div>
                                    <div>
                                        <figure>
                                            <a data-caption="Image Caption" title="Image Caption" href="http://www.zurcherarquitectos.com/files/cache/w1300h600q75-landscape-introweb-qt-.jpg"><img src="https://unsplash.it/300/170/?random" alt="Image Caption"></a>
                                            <figcaption class="uk-text-small uk-text-muted uk-text-center uk-padding-small uk-visible@s">Aenean vitae est</figcaption>
                                        </figure>
                                    </div>
                                    <div>
                                        <figure>
                                            <a data-caption="Image Caption" title="Image Caption" href="http://www.zurcherarquitectos.com/files/cache/w1300h600q75-landscape-introweb-qt-.jpg"><img src="https://unsplash.it/300/170/?random" alt="Image Caption"></a>
                                            <figcaption class="uk-text-small uk-text-muted uk-text-center uk-padding-small uk-visible@s">Aenean vitae est</figcaption>
                                        </figure>
                                    </div>
                                    <div>
                                        <figure>
                                            <a data-caption="Image Caption" title="Image Caption" href="http://www.zurcherarquitectos.com/files/cache/w1300h600q75-landscape-introweb-qt-.jpg"><img src="https://unsplash.it/300/170/?random" alt="Image Caption"></a>
                                            <figcaption class="uk-text-small uk-text-muted uk-text-center uk-padding-small uk-visible@s">Aenean vitae est</figcaption>
                                        </figure>
                                    </div>
                                    <div>
                                        <figure>
                                            <a data-caption="Image Caption" title="Image Caption" href="http://www.zurcherarquitectos.com/files/cache/w1300h600q75-landscape-introweb-qt-.jpg"><img src="https://unsplash.it/300/170/?random" alt="Image Caption"></a>
                                            <figcaption class="uk-text-small uk-text-muted uk-text-center uk-padding-small uk-visible@s">Aenean vitae est</figcaption>
                                        </figure>
                                    </div>
                                    <div>
                                        <figure>
                                            <a data-caption="Image Caption" title="Image Caption" href="http://www.zurcherarquitectos.com/files/cache/w1300h600q75-landscape-introweb-qt-.jpg"><img src="https://unsplash.it/300/170/?random" alt="Image Caption"></a>
                                            <figcaption class="uk-text-small uk-text-muted uk-text-center uk-padding-small uk-visible@s">Aenean vitae est</figcaption>
                                        </figure>
                                    </div>
                                    
                                </div>
                            </div>
                            <!-- /gallery -->
                        </div>
                    </div>
                </section>`
});