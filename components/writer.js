Vue.component('component-writerslist', {
    props: ['writers', 'loadingwriters', 'erroredwriters'],
    template: ` <div>
                    <h4 class="uk-heading-line uk-text-bold"><span>Les contributeurs</span></h4>
                    <div v-if="erroredwriters">
                        <p>Erreur de chargement</p>
                    </div>
                    <div v-else>
                        <div v-if="loadingwriters"><div uk-spinner="ratio: 3"></div></div>
                        <ul v-else class="uk-list" > 
                            <component-writer v-for="writer in writers" v-bind:writer="writer"></component-writer>
                        </ul>
                    </div>
                </div>
                `
}) ;

Vue.component('component-writer', {
    props: ['writer'],
    template : ` <li>
                    <div class="uk-card uk-card-default" >
                        <div class="uk-card-header">
                            <div class="uk-grid-small uk-flex-middle" uk-grid>
                                <div class="uk-width-auto">
                                    <img class="uk-border-circle" width="90" height="90" v-bind:src="writer.img">
                                </div>
                                <div class="uk-width-expand">
                                    <h3 class="uk-card-title uk-margin-remove-bottom">{{writer.name}}</h3>
                                    <p class="uk-text-meta uk-margin-remove-top">{{writer.pseudo}}</p>
                                </div>
                            </div>
                        </div>
                        <div class="uk-card-body uk-text-small uk-text-center">{{writer.text}}</div>
                    </div>
                </li>`
}) ;

Vue.component('component-articlewriter', {
    props: ['writer'],
    template : `<section class="uk-section uk-section-small">
                    <div id="author-wrap" class="uk-container uk-container-small">
                        <div class="uk-grid uk-grid-medium uk-flex uk-flex-middle" data-uk-grid>
                            <div class="uk-width-auto">
                                <img v-bind:src="writer.img" alt="" class="uk-border-circle">
                            </div>
                            <div class="uk-width-expand">
                                <h4 class="uk-margin-remove uk-text-bold">{{writer.name}} ({{writer.pseudo}})</h4>
                                <span class="uk-text-small uk-text-muted">{{writer.text}}</span>
                            </div>
                        </div>
                    </div>
                </section>`
}) ;