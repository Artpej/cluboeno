Vue.component('component-writerslist', {
    props: ['writers'],
    template: ` <div>
                    <h4 class="uk-heading-line uk-text-bold"><span>Les contributeurs</span></h4>
                    <ul class="uk-list" >
                        <component-writer v-for="writer in writers" 
                            v-bind:img="writer.img" 
                            v-bind:title="writer.title" 
                            v-bind:pseudo="writer.pseudo" 
                            v-bind:text="writer.text" >
                        </component-writer>
                    </ul>
                </div>
                `
}) ;

Vue.component('component-writer', {
    props: ['img', 'title', 'pseudo','text'],
    template : ` <li>
                    <div class="uk-card uk-card-default" >
                        <div class="uk-card-header">
                            <div class="uk-grid-small uk-flex-middle" uk-grid>
                                <div class="uk-width-auto">
                                    <img class="uk-border-circle" width="90" height="90" v-bind:src="img">
                                </div>
                                <div class="uk-width-expand">
                                    <h3 class="uk-card-title uk-margin-remove-bottom">{{title}}</h3>
                                    <p class="uk-text-meta uk-margin-remove-top">{{pseudo}}</p>
                                </div>
                            </div>
                        </div>
                        <div class="uk-card-body uk-text-small uk-text-center">{{text}}</div>
                    </div>
                </li>`
})