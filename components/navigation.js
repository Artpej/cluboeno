var navlinks = [
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

Vue.component('component-nav', {
    data () {
        return {
            navlinks
        }
    },
    template: ` <div class="uk-container" id="navigation-index">
                    <nav class="nav-scroll nav-overlay uk-visible@m" >
                        <ul class="uk-subnav uk-flex uk-flex-between uk-flex-nowrap" data-ukmargin >
                            <li v-for="navlink in navlinks"><a v-bind:href="navlink.link">{{navlink.title}}</a></li>
                        </ul>
                    </nav>
                </div>`
}) ;

Vue.component('component-offcanvas', {
    data () {
        return {
            navlinks
        }
    },
    template: ` <div id="offcanvas-nav" data-uk-offcanvas="flip: true; overlay: true">
                    <div class="uk-offcanvas-bar uk-offcanvas-bar-animation uk-offcanvas-slide">
                        <button class="uk-offcanvas-close uk-close" type="button" data-uk-close></button>
                        <ul class="uk-nav uk-nav-default">
                            <li class="uk-nav-header">Menu</li>
                            <li v-for="navlink in navlinks"><a v-bind:href="navlink.link">{{navlink.title}}</a></li>
                        </ul>
                    </div>
                </div>`
}) ;