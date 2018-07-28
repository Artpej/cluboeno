Vue.component('component-contentindex', {
    props: ['articles', 'writers'],
    template: ` <div class="uk-section uk-section-default">
                    <div class="uk-container">
                        <div class="uk-grid" data-ukgrid>
                            <div class="uk-width-2-3@m">
                                <component-articleslist v-bind:articles="articles"></component-articleslist>
                            </div>
                            <div class="uk-width-1-3@m">
                                <component-writerslist v-bind:writers="writers"></component-writerslist>
                            </div>
                        </div>
                    </div>
                </div>`
}) ;