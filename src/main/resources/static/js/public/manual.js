
var app_manual;

app_manual = new Vue({
    el: '#app_manual',
    template:

        '<div v-if="lang==1" class = "container h-100 "  style = "background: #fff;" >'+
            '<h1 class = "display-4 mt-5 mb-5" style = "padding-top: 50px;" > Инструкция по использованию </h1>'+
            '<p class="card-text">Данное приложение(сайт) позволяет произвести оценку риска развития гепатоциллюлярной карциномы у больных хроническим геппатитом С.</p>'+
            '<p class="card-text">Для оценки риска необходимо ввести следующие маркеры:</p>'+
            '<p class="card-text">'+
            '<li class="list-unstyled"> - Пол пациента;</li>'+
            '<li class="list-unstyled"> - Возраст пациэнта;</li>'+
            '<li class="list-unstyled"> - Эритроциты (от 1 до 7 ×10 12 /л);</li>'+
            '<li class="list-unstyled"> - Аланинаминотрансфераза (от 1 до 1 000 Ед/л);</li>'+
            '<li class="list-unstyled"> - Альфа-фетопротеин (от 1 до 10 000 МЕ/мл);</li>'+
            '<li class="list-unstyled"> - Остеопонтин (от 1 до 10 000 нг/мл).</li>'+
            '</p>'+
            '<p class="card-text">В результате анализа соотношения введенных маркеров определяется риск развития гепатоциллюлярной карциномы, даются рекомендации по дальнейшему ведению пациентов.</p>'+
        '</div>'+

        '<div v-else-if="lang==2" class = "container h-100 "  style = "background: #fff;" >'+
            '<h1 class = "display-4 mt-5 mb-5" style = "padding-top: 50px;" > Mode d\'emploi </h1>'+
            '<p class="card-text">Cette application (site) permet d\'évaluer le risque de développer un carcinome hépatocyllulaire chez les patients atteints d\'hépatite C chronique.</p>'+
            '<p class="card-text">Pour évaluer le risque, les marqueurs suivants doivent être saisis:</p>'+
            '<p class="card-text">'+
            '<li class="list-unstyled"> - Sexe du patient;</li>'+
            '<li class="list-unstyled"> - L\'âge du patient;</li>'+
            '<li class="list-unstyled"> - Érythrocytes (de 1 à 7 × 10 12 / l);</li>'+
            '<li class="list-unstyled"> - Alanine aminotransférase (de 1 à 1000 U / L);</li>'+
            '<li class="list-unstyled"> - Alpha-foetoprotéine (1 à 10 000 UI / ml);</li>'+
            '<li class="list-unstyled"> - Ostéopontine (1 à 10 000 ng / ml).</li>'+
            '</p>'+
            '<p class="card-text">À la suite de l\'analyse du rapport des marqueurs introduits, le risque de développer un carcinome hépatocyllulaire est déterminé et des recommandations sont données pour la prise en charge ultérieure des patients.</p>'+
        '</div>'+
        '<div v-else-if="lang==3" class = "container h-100 "  style = "background: #fff;" >'+
            '<h1 class = "display-4 mt-5 mb-5" style = "padding-top: 50px;" > Instructions for use </h1>'+
            '<p class="card-text">This application (web site) allows to assess the risk of developing hepatocyllular carcinoma in patients with chronic hepatitis C.</p>'+
            '<p class="card-text">To assess the risk, the following markers must be entered:</p>'+
            '<p class="card-text">'+
            '<li class="list-unstyled"> - Patient gender;</li>'+
            '<li class="list-unstyled"> - Patient\'s age;</li>'+
            '<li class="list-unstyled"> - Erythrocytes (from 1 to 7 × 10 12 / l);</li>'+
            '<li class="list-unstyled"> - Alanine aminotransferase (from 1 to 1000 U / L);</li>'+
            '<li class="list-unstyled"> - Alpha-fetoprotein (1 to 10,000 IU / ml);</li>'+
            '<li class="list-unstyled"> - Osteopontin (1 to 10,000 ng / ml).</li>'+
            '</p>'+
            '<p class="card-text">As a result of the analysis of the ratio of the introduced markers, the risk of developing hepatocyllular carcinoma is determined, and recommendations are given for the further management of patients.</p>'+
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