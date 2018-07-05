var trendarticle = new Vue({
    el: '#trendarticle',
    data: {
        articles : [
        {
            title : 'Short Blog Title',
            publisheddate : '12th August 2018', 
            summation : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do', 
            img : 'https://picsum.photos/500/500/?random=1' 
        },
        {
            title : 'Short Blog Title',
            publisheddate : '12th August 2018', 
            summation : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do', 
            img : 'https://picsum.photos/500/500/?random=2' 
        },
        {
            title : 'Short Blog Title',
            publisheddate : '12th August 2018', 
            summation : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do', 
            img : 'https://picsum.photos/500/500/?random=3' 
        },
        {
            title : 'Short Blog Title',
            publisheddate : '12th August 2018', 
            summation : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do', 
            img : 'https://picsum.photos/500/500/?random=4' 
        },
        {
            title : 'Short Blog Title',
            publisheddate : '12th August 2018', 
            summation : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do', 
            img : 'https://picsum.photos/500/500/?random=5' 
        }
        ]
    }
})


var lastarticle = new Vue({
    el: '#lastarticle',
    data:  { 
        articles : [
        {
            title : 'Fusce facilisis tempus magna ac dignissim 1',
            publisheddate : '12th August 2018', 
            text : 'Vivamus sed consequat urna. Fusce vitae urna sed ante placerat iaculis. Suspendisse potenti. Pellentesque quis fringilla libero. In hac habitasse platea dictumst. Ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo', 
            img : 'https://picsum.photos/800/300/?random=1',
            readingtime : '8 minutes'
        }, 
        {
            title : 'Titre génial de l\'article 2' ,
            publisheddate : '12th August 2018', 
            text : 'du text balbalbal balbalba lbalba ba et x. et pis encore du text', 
            img : 'https://picsum.photos/800/300/?random=2',
            readingtime : '1 minutes' 
        }, 
        {
            title : 'Fusce facilisis tempus magna ac dignissim 3',
            publisheddate : '12th August 2018', 
            text : 'Vivamus sed consequat urna. Fusce vitae urna sed ante placerat iaculis. Suspendisse potenti. Pellentesque quis fringilla libero. In hac habitasse platea dictumst. Ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo', 
            img : 'https://picsum.photos/800/300/?random=3',
            readingtime : '2 minutes'  
        }, 
        {
            title : 'Fusce facilisis tempus magna ac dignissim 4',
            publisheddate : '12th August 2018', 
            text : 'Vivamus sed consequat urna. Fusce vitae urna sed ante placerat iaculis. Suspendisse potenti. Pellentesque quis fringilla libero. In hac habitasse platea dictumst. Ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo', 
            img : 'https://picsum.photos/800/300/?random=4',
            readingtime : '3 minutes' 
        }, 
        {
            title : 'Fusce facilisis tempus magna ac dignissim 5',
            publisheddate : '12th August 2018', 
            text : 'Vivamus sed consequat urna. Fusce vitae urna sed ante placerat iaculis. Suspendisse potenti. Pellentesque quis fringilla libero. In hac habitasse platea dictumst. Ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo', 
            img : 'https://picsum.photos/800/300/?random=5',
            readingtime : '4 minutes'  
        }
        ]
    }
})


var community = new Vue({
    el: '#writers',
    data:  { 
        writers : [
        {
            title : 'Romain Chapon',
            pseudo : 'LeChaps', 
            text : 'On en boira du plus mauvais', 
            img : 'https://picsum.photos/100/100/?random=6',
        }, 
        {
            title : 'Philippe Domerc',
            pseudo : 'Phil', 
            text : 'Laisser moi calculer...', 
            img : 'https://picsum.photos/100/100/?random=7',
        }
        ]
    }
})