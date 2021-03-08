
var app2;

app2 = new Vue({
    el: '#app-nav',
    template:
        '<div>'+
            '<nav class="navbar  navbar-expand-lg navbar-dark bg-dark">'+
                '<a class="navbar-brand" href="#">'+
                    '<img src="/doc/logo.png" width="96" height="96" alt="">'+
                '</a>'+
                '<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">'+
                    '<span class="navbar-toggler-icon"></span>'+
                '</button>'+
                '<div class="collapse navbar-collapse" id="navbarSupportedContent">'+
                    '<ul class="navbar-nav mr-auto">'+
                        '<li class="nav-item active">'+
                            '<a v-show="lang==1" class="nav-link" href="/">Главная <span class="sr-only">(current)</span></a>'+
                            '<a v-show="lang==2" class="nav-link" href="/">Accueil <span class="sr-only">(current)</span></a>'+
                            '<a v-show="lang==3" class="nav-link" href="/">Home <span class="sr-only">(current)</span></a>'+
                        '</li>'+
                        '<li class="nav-item dropdown">'+
                            '<a v-show="lang==1" class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Ресурсы</a>'+
                            '<a v-show="lang==2" class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Ressources</a>'+
                            '<a v-show="lang==3" class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Resources</a>'+
                            '<div class="dropdown-menu" aria-labelledby="navbarDropdown">'+
                                '<a v-show="lang==1" class="dropdown-item" href="/patent" >Патент на изобретение</a>'+
                                '<a v-show="lang==2" class="dropdown-item" href="/patent" >Brevet d\'invention</a>'+
                                '<a v-show="lang==3" class="dropdown-item" href="/patent" >Invention patent</a>'+
                                '<a v-show="lang==1" class="dropdown-item" href="/useragreement">Пользовательское соглашение</a>'+
                                '<a v-show="lang==2" class="dropdown-item" href="/useragreement">Conditions d\'utilisation</a>'+
                                '<a v-show="lang==3" class="dropdown-item" href="/useragreement">Terms of use</a>'+
                                '<a v-show="lang==1" class="dropdown-item" href="/manual">Инструкция</a>'+
                                '<a v-show="lang==2" class="dropdown-item" href="/manual">Spécification</a>'+
                                '<a v-show="lang==3" class="dropdown-item" href="/manual">Specification</a>'+
                                '<a v-show="lang==1" class="dropdown-item" href="https://play.google.com/store/apps/details?id=ru.geekbase.carcinomacalc">Приложение для Android</a>'+
                                '<a v-show="lang==2" class="dropdown-item" href="https://play.google.com/store/apps/details?id=ru.geekbase.carcinomacalc">Application Android</a>'+
                                '<a v-show="lang==3" class="dropdown-item" href="https://play.google.com/store/apps/details?id=ru.geekbase.carcinomacalc">Android application</a>'+
                            '</div>'+
                        '</li>'+
                    '</ul>'+
                    '<div style="alignment: left; " class="dropdown">'+
                        '<a v-show="lang==1" class="nav-link dropdown-toggle"  id="langDropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">RU</a>'+
                        '<a v-show="lang==2" class="nav-link dropdown-toggle"  id="langDropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">FR</a>'+
                        '<a v-show="lang==3" class="nav-link dropdown-toggle"  id="langDropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">EN</a>'+
                        '<div class="dropdown-menu" aria-labelledby="langDropdown">'+
                            '<a class="dropdown-item" v-on:click="lang=1">RU</a>'+
                            '<a class="dropdown-item" v-on:click="lang=2">FR</a>'+
                            '<a class="dropdown-item" v-on:click="lang=3">EN</a>'+
                        '</div>'+
                    '</div>'+

                '</div>'+
            '</nav>'+
        '</div>',

    data: {
        lang:1,
    },
    created: function () {

    },
    mounted() {
        if (localStorage.lang) {
            this.lang = localStorage.lang;
        }
    },

    watch: {
        lang(newLang) {
            if(localStorage.lang != newLang){
                localStorage.lang = newLang;
                location.reload();
            }

        }
    }
});