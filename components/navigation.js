Vue.component('component-nav', {
    props: ['navlinks'],
    template: ` <div class="uk-container" id="navigation-index">
                    <nav class="nav-scroll" >
                        <ul class="uk-subnav uk-flex uk-flex-between uk-flex-nowrap" data-ukmargin >
                            <li v-for="navlink in navlinks"><a v-bind:href="navlink.link">{{navlink.title}}</a></li>
                        </ul>
                    </nav>
                </div>`
}) ;

