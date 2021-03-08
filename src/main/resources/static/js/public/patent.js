
var app_patent;

app_patent = new Vue({
    el: '#app_patent',
    template:

        '<div v-if="lang==1" class = "container h-100 "  style = "background: #fff;" >'+
            '<h1 className="display-4 mt-5 mb-5" style="padding-top: 50px;">Патент на изобретение</h1>'+
            '<img src="/doc/patent.png" className="img-thumbnail" alt="Патент">'+
            '<p className="card-text">Подробнее с патентом можно ознакомиться по <a href="/doc/patent.pdf">ссылке</a>.</p>'+
        '</div>'+

        '<div v-else-if="lang==2" class = "container h-100 "  style = "background: #fff;" >'+
            '<h1 className="display-4 mt-5 mb-5" style="padding-top: 50px;">Brevet d\'invention</h1>'+
            '<img src="/doc/patent.png" className="img-thumbnail" alt="Патент">'+
            '<p className="card-text">Plus de détails sur le brevet peuvent être trouvés à <a href="/doc/patent.pdf">le renvoi</a>.</p>'+
        '</div>'+

        '<div v-else-if="lang==3" class = "container h-100 "  style = "background: #fff;" >'+
            '<h1 className="display-4 mt-5 mb-5" style="padding-top: 50px;">Invention patent</h1>'+
            '<img src="/doc/patent.png" className="img-thumbnail" alt="Патент">'+
            '<p className="card-text">More details on the patent can be found at <a href="/doc/patent.pdf">link</a>.</p>'+
         '</div>',

    data: {

        lang:'',
    },


    mounted() {
        if (localStorage.lang) {
            this.lang = localStorage.lang;
        } else {
            this.lang=1;
        }}





});