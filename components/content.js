Vue.component('component-contentindex', {
    data () {
        return {
            articles: [],
            loadingarticles: true,
            erroredarticles: false,
            start:0,
            nb:5,
            end:false
        }
    },
    mounted () {
        this.getArticles();
        this.scroll(this.articles);
    },
    methods: {
        // Affichage des articles
        getArticles () {
            axios
            .get('https://api.cluboeno.com/articles.php/FLOW/'+this.start+'/'+this.nb)
            .then(response => {
                //if nothing then we stop by activating the "end flag"
                if (response.data.articles === undefined) {
                    this.end=true
                } else {
                    Array.prototype.push.apply(this.articles, response.data.articles)
                }
            })
            .catch(error => {
                console.log(error);
                this.erroredarticles = true
            })
            .finally(() => {
                this.loadingarticles = false;
                this.start+=this.nb //incremental for next articles
            });
        },
        // Infinite Scroll
        bottomVisible() {
            const scrollY = window.scrollY
            const visible = document.documentElement.clientHeight
            const pageHeight = document.documentElement.scrollHeight
            const bottomOfPage = visible + scrollY >= pageHeight
            return bottomOfPage || pageHeight < visible
          },
        scroll (articles) {
          window.onscroll = () => {
            //no need to try if loading is running or no data
            if (this.loadingarticles==false && this.end==false) { 
                if (this.bottomVisible()) {
                    this.loadingarticles=true;
                    this.getArticles ();
                }
            }
          };
        }
    },
    template: ` <div class="uk-section uk-section-default">
                    <div class="uk-container">
                        <div class="uk-grid" data-ukgrid>
                            <div class="uk-width-2-3@m">
                                <component-articleslist v-bind:articles="articles" v-bind:loadingarticles="loadingarticles" v-bind:erroredarticles="erroredarticles"></component-articleslist>
                            </div>
                            <div class="uk-width-1-3@m">
                                <component-writerslist></component-writerslist>
                            </div>
                        </div>
                    </div>
                </div>`
}) ;