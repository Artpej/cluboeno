Vue.component('component-header', {
    data () {
        return {
            socials : [
                {   icon: 'facebook',             
                    link: '#'
                },
                {   icon: 'twitter',             
                    link: '#'
                },
                {   icon: 'instagram',             
                    link: '#'
                }
            ]
        }
    },
    template: ` <header style="background-color: #fff;" data-uk-sticky="show-on-up: true; animation: uk-animation-fade; media: @l">
                    <div class="uk-container">
                        <nav id="navbar" data-uk-navbar="mode: click;">
                            <div class="uk-navbar-left nav-overlay uk-visible@m">
                                <ul class="uk-navbar-nav">
                                    <li><a href="#" title="Subscribe" uk-tooltip="title: Bientôt disponible; pos: right">S'inscrire</a></li>
                                    <li><a href="#" title="Sign Up" uk-tooltip="title: Bientôt disponible; pos: right">Se connecter</a></li>
                                </ul>
                            </div>
                            <div class="uk-navbar-center nav-overlay">
                                <a class="uk-navbar-item uk-logo" href="index.html" title="Logo"><span uk-icon="icon:home;ratio:3"></span></a>
                            </div>
                            <div class="uk-navbar-right nav-overlay">
                                <a class="uk-navbar-toggle uk-visible@m" data-uk-search-icon uk-tooltip="title: Bientôt disponible; pos: right" data-uk-toggle="target: .nav-overlay; animation: uk-animation-fade" href="#"></a>
                                <div class="uk-navbar-item">
                                    <a v-for="social in socials" class="uk-visible@s" style="margin-right: 4px" v-bind:href="social.link" v-bind:data-uk-icon="social.icon" uk-tooltip="title: Bientôt disponible; pos: left"></a>
                                    <a class="uk-navbar-toggle uk-hidden@m" data-uk-toggle data-uk-navbar-toggle-icon href="#offcanvas-nav"></a>
                                </div>
                            </div>
                            <div class="nav-overlay uk-navbar-left uk-flex-1" hidden>
                                <div class="uk-navbar-item uk-width-expand">
                                    <form class="uk-search uk-search-navbar uk-width-1-1"><input class="uk-search-input" type="search" placeholder="Rechercher..."></form>
                                </div>
                                <a class="uk-navbar-toggle" data-uk-close data-uk-toggle="target: .nav-overlay; animation: uk-animation-fade" href="#"></a>
                            </div>
                        </nav>
                    </div>
                </header>`
})