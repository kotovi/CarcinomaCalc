

var app_footer;

app_footer = new Vue({
    el: '#app_footer',
    template:
        '<footer  class="py-5  pt-md-5 border-top bg-dark ">'+
            '<div v-if="lang==1">'+
                '<div  class="container">'+
                    '<div class="row">'+
                        '<div class="col-6 ">'+
                            '<h5 class="text-light">Изобретение</h5>'+
                            '<hr class="color: white; border: 1">'+
                            '<ul class="list-unstyled text-small">'+
                                '<li><p class="text-light  lead">Расчет определения риска развития гепатоцеллюлярной карциномы у больных хроническим гепатитом С</p></li>'+
                            '</ul>'+
                        '</div>'+
                        '<div class="col-3 ">'+
                            '<h5 class="text-light">Ресурсы</h5>'+
                            '<hr class="color: white;">'+
                            '<ul class="list-unstyled text-small">'+
                                '<li><a class="text-light" href="/">Главная</a></li>'+
                                '<li><a class="text-light" href="/patent">Патент на изобретение</a></li>'+
                                '<li><a class="text-light" href="/useragreement">Пользовательское соглашение</a></li>'+
                                '<li><a class="text-light" href="https://play.google.com/store/apps/details?id=ru.geekbase.carcinomacalc" target="_blank">Приложение для Android</a></li>'+
                            '</ul>'+
                        '</div>'+
                        '<div class="col-3 ">'+
                            '<h5 class="text-light">Контакты</h5>'+
                            '<hr class="color: white;">'+
                            '<ul class="list-unstyled text-small">'+
                                '<li><a class="text-light" href="https://mir.ismu.baikal.ru">Иркутский государственный медицинский университет</a></li>'+
                                '<li><a class="text-light" href="https://goo.gl/maps/uKw74bXdpqnqG2Tg6"> Адрес:г.Иркутск, ул. Красного Восстания, 1</a></li>'+
                                '<li><a class="text-light" href="mailto:it@ismu.baikal.ru">E-mail: it@ismu.baikal.ru</a></li>'+
                            '</ul>'+
                        '</div>'+
                    '</div>'+
                '</div>'+
                '<div class="footer-copyright py-3 text-center bg-dark">'+
                    '<small class="d-block text-center text-muted"><a class="text-muted" href="mailto:kotov.irk@gmail.com">Разработка - Иван Котов</a> &copy; 2020гг.</small>'+
                '</div>'+
            '</div>'+

            '<div v-if="lang==2">' +
                '<div class="container">'+
                    '<div class="row">'+
                        '<div class="col-6 ">'+
                            '<h5 class="text-light">Invention</h5>'+
                            '<hr class="color: white; border: 1">'+
                            '<ul class="list-unstyled text-small">'+
                                '<li><p class="text-light  lead">Calcul de la détermination du risque de développer un carcinome hépatocellulaire chez les patients atteints d\'hépatite C chronique</p></li>'+
                            '</ul>'+
                        '</div>'+
                        '<div class="col-3 ">'+
                            '<h5 class="text-light">Ressources</h5>'+
                            '<hr class="color: white;">'+
                            '<ul class="list-unstyled text-small">'+
                                '<li><a class="text-light" href="/">Domicile</a></li>'+
                                '<li><a class="text-light" href="/patent">Brevet d\'invention</a></li>'+
                                '<li><a class="text-light" href="/useragreement">Conditions d\'utilisation</a></li>'+
                                '<li><a class="text-light" href="https://play.google.com/store/apps/details?id=ru.geekbase.carcinomacalc" target="_blank">Application Android</a></li>'+
                            '</ul>'+
                        '</div>'+
                        '<div class="col-3 ">'+
                            '<h5 class="text-light">Contacts</h5>'+
                            '<hr class="color: white;">'+
                            '<ul class="list-unstyled text-small">'+
                                '<li><a class="text-light" href="https://mir.ismu.baikal.ru">Université médicale d\'État d\'Irkoutsk</a></li>'+
                                '<li><a class="text-light" href="https://goo.gl/maps/uKw74bXdpqnqG2Tg6"> Adresse: Irkoutsk, st. Soulèvement rouge, 1</a></li>'+
                                '<li><a class="text-light" href="mailto:it@ismu.baikal.ru">E-mail: it@ismu.baikal.ru</a></li>'+
                            '</ul>'+
                        '</div>'+
                    '</div>'+
                '</div>'+
                '<div class="footer-copyright py-3 text-center bg-dark">'+
                    '<small class="d-block text-center text-muted"><a class="text-muted" href="mailto:kotov.irk@gmail.com">Développement - Ivan Kotov</a> &copy; 2020гг.</small>'+
                '</div>'+
            '</div>'+

            '<div v-if="lang==3">' +
                '<div class="container">'+
                    '<div class="row">'+
                        '<div class="col-6 ">'+
                            '<h5 class="text-light">Invention</h5>'+
                            '<hr class="color: white; border: 1">'+
                            '<ul class="list-unstyled text-small">'+
                                '<li><p class="text-light  lead">Calculation of the determination of the risk of developing hepatocellular carcinoma in patients with chronic hepatitis C</p></li>'+
                            '</ul>'+
                        '</div>'+
                        '<div class="col-3 ">'+
                            '<h5 class="text-light">Resources</h5>'+
                            '<hr class="color: white;">'+
                            '<ul class="list-unstyled text-small">'+
                                '<li><a class="text-light" href="/">Home</a></li>'+
                                '<li><a class="text-light" href="/patent">Invention patent</a></li>'+
                                '<li><a class="text-light" href="/useragreement">Terms of use</a></li>'+
                                '<li><a class="text-light" href="https://play.google.com/store/apps/details?id=ru.geekbase.carcinomacalc" target="_blank">Android app</a></li>'+
                            '</ul>'+
                        '</div>'+
                        '<div class="col-3 ">'+
                            '<h5 class="text-light">Contacts</h5>'+
                            '<hr class="color: white;">'+
                            '<ul class="list-unstyled text-small">'+
                                '<li><a class="text-light" href="https://mir.ismu.baikal.ru">Irkutsk State Medical University</a></li>'+
                                '<li><a class="text-light" href="https://goo.gl/maps/uKw74bXdpqnqG2Tg6"> Address: Irkutsk, st. Red Uprising, 1</a></li>'+
                                '<li><a class="text-light" href="mailto:it@ismu.baikal.ru">E-mail: it@ismu.baikal.ru</a></li>'+
                            '</ul>'+
                        '</div>'+
                    '</div>'+
                '</div>'+
                '<div class="footer-copyright py-3 text-center bg-dark">'+
                    '<small class="d-block text-center text-muted"><a class="text-muted" href="mailto:kotov.irk@gmail.com">Development - Ivan Kotov</a> &copy; 2020гг.</small>'+
                '</div>'+
            '</div>'+
        '</footer>',
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