Vue.component('component-contentindex', {
    props: ['articles', 'writers', 'loadingarticles', 'erroredarticles', 'loadingwriters', 'erroredwriters'],
    template: ` <div class="uk-section uk-section-default">
                    <div class="uk-container">
                        <div class="uk-grid" data-ukgrid>
                            <div class="uk-width-2-3@m">
                                <component-articleslist v-bind:articles="articles" v-bind:loadingarticles="loadingarticles" v-bind:erroredarticles="erroredarticles"></component-articleslist>
                            </div>
                            <div class="uk-width-1-3@m">
                                <component-writerslist v-bind:writers="writers" v-bind:loadingwriters="loadingwriters" v-bind:erroredwriters="erroredwriters"></component-writerslist>
                            </div>
                        </div>
                    </div>
                </div>`
}) ;