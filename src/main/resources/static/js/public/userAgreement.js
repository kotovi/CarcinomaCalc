

var app_userAgreement;

app_userAgreement = new Vue({
    el: '#app_userAgreement',
    template:
        '<div v-if="lang==1" class = "container h-100 "  style = "background: #fff;" >'+
            '<h1 class = "display-4 mt-5 mb-5" style = "padding-top: 50px;" > Пользовательское Соглашение </h1>'+
            '<p class="card-text">Настоящее Пользовательское Соглашение (Далее Соглашение) регулирует отношения ' +
        'между ФГБОУ ВО ИГМУ Минздрава России (далее Сайт для расчета риска развития гепатоциллюлярной карциномы) с ' +
        'одной стороны и пользователем сайта с другой. Сайт для расчета риска развития гепатоциллюлярной карциномы.</p>'+
            '<p class="card-text">Используя сайт, Вы соглашаетесь с условиями данного соглашения. Если Вы не согласны ' +
        'с условиями данного соглашения, не используйте Сайт для расчета риска развития гепатоциллюлярной карциномы!</p>'+
            '<h4 class="card-subtitle mb-2 text-muted">Предмет соглашения</h4>'+
            '<p class="card-text">'+
            '<h4 class="card-subtitle mb-2 text-muted">Права и обязанности сторон</h4>'+
            '</p>'+
            '<h6 class="card-subtitle mb-2 text-muted">Пользователь имеет право:</h6>'+
            '<p class="card-text">'+
            '<li class="list-unstyled"> - Осуществлять поиск информации на сайте;</li>'+
            '<li class="list-unstyled"> - Получать информацию на сайте;</li>'+
            '<li class="list-unstyled"> - Производить расчеты на основе имеющихся данных в распоряжении пользователя.</li>'+
            '</p>'+
            '<h6 class="card-subtitle mb-2 text-muted">Администрация имеет право:</h6>'+
            '<p class="card-text">'+
            '<li class="list-unstyled"> - По своему усмотрению и необходимости создавать, изменять, отменять правила;</li>'+
            '<li class="list-unstyled"> - Ограничивать доступ к любой информации на сайте;</li>'+
            '<li class="list-unstyled"> - Создавать, изменять, удалять информацию.</li>'+
            '</p>'+
            '<h6 class="card-subtitle mb-2 text-muted">Пользователь обязуется:</h6>'+
            '<p class="card-text">'+
            '<li class="list-unstyled"> - Обеспечить достоверность предоставляемой информации;</li>'+
            '<li class="list-unstyled"> - Не распространять информацию, которая направлена на пропаганду войны, ' +
        'разжигание национальной, расовой или религиозной ненависти и вражды, а также иной информации, ' +
        'за распространение которой предусмотрена уголовная или административная ответственность;'+
            '</li>'+
            '<li class="list-unstyled"> - Не нарушать работоспособность сайта;</li>'+
            '<li class="list-unstyled"> - Не использовать скрипты (программы) для автоматизированного сбора ' +
        'информации и/или взаимодействия с Сайтом и его Сервисами.'+
            '</li>'+
            '</p>'+
            '<h6 class="card-subtitle mb-2 text-muted">Администрация обязуется:</h6>'+
            '<p class="card-text">'+
            '<li class="list-unstyled"> - Поддерживать работоспособность сайта за исключением случаев, когда это ' +
        'невозможно по независящим от Администрации причинам.'+
            '</li>'+
            '</p>'+
            '<h6 class="card-subtitle mb-2 text-muted">Ответственность сторон:</h6>'+
            '<p class="card-text">'+
            '<li class="list-unstyled"> - Пользователь лично несет полную ответственность за распространяемую им информацию; </li>'+
            '<li class="list-unstyled"> - Администрация не несет никакой ответственности за услуги, предоставляемые третьими лицами; </li>'+
            '<li class="list-unstyled"> - В случае возникновения форс-мажорной ситуации (боевые действия, чрезвычайное' +
        ' положение, стихийное бедствие и т. д.) Администрация не гарантирует бесперебойную работу информационного ресурса. </li></p>'+
            '<h6 class="card-subtitle mb-2 text-muted">Условия действия Соглашения:</h6>'+
            '<p class="card-text">Данное Соглашение вступает в силу при любом использовании данного сайта. Соглашение ' +
        'перестает действовать при появлении его новой версии. Администрация оставляет за собой право в одностороннем порядке изменять данное соглашение по своему усмотрению. Администрация не оповещает пользователей об изменении в Соглашении.</p>'+
        '</div>'+

        '<div v-else-if="lang==2" class = "container h-100 "  style = "background: #fff;" >'+
        '<h1 class = "display-4 mt-5 mb-5" style = "padding-top: 50px;" > Conditions d\'utilisation </h1>'+
        '<p class="card-text">Cet accord d\'utilisation (ci-après l\'accord) régit la relation ' +
        'entre le FSBEI HE ISMU du Ministère de la Santé de Russie (ci-après le Site de calcul du risque de développer un carcinome hépatocyllulaire) avec ' +
        'd\'un côté et l\'utilisateur du site de l\'autre. Site Web de calcul du risque de développer un carcinome hépatocellulaire.</p>'+
        '<p class="card-text">En utilisant le site, vous acceptez les termes de cet accord. Si vous n\'êtes pas d\'accord ' +
        'aux termes de cet accord, n\'utilisez pas le Site pour calculer le risque de développer un carcinome hépatocyllulaire!</p>'+
        '<h4 class="card-subtitle mb-2 text-muted">Objet de l\'accord</h4>'+
        '<p class="card-text">'+
        '<h4 class="card-subtitle mb-2 text-muted">Droits et obligations des parties</h4>'+
        '</p>'+
        '<h6 class="card-subtitle mb-2 text-muted">L\'utilisateur a le droit:</h6>'+
        '<p class="card-text">'+
        '<li class="list-unstyled"> - Rechercher des informations sur le site;</li>'+
        '<li class="list-unstyled"> - Recevoir des informations sur le site;</li>'+
        '<li class="list-unstyled"> - Faites des calculs basés sur les données disponibles pour l\'utilisateur.</li>'+
        '</p>'+
        '<h6 class="card-subtitle mb-2 text-muted">L\'administration a le droit:</h6>'+
        '<p class="card-text">'+
        '<li class="list-unstyled"> - À votre discrétion et besoin de créer, modifier, annuler des règles;</li>'+
        '<li class="list-unstyled"> - Restreindre l\'accès à toute information sur le site;</li>'+
        '<li class="list-unstyled"> - Créer, modifier, supprimer des informations.</li>'+
        '</p>'+
        '<h6 class="card-subtitle mb-2 text-muted">L\'utilisateur s\'engage:</h6>'+
        '<p class="card-text">'+
        '<li class="list-unstyled"> - Assurer l\'exactitude des informations fournies;</li>'+
        '<li class="list-unstyled"> - Ne diffusez pas d\'informations visant à la propagande de guerre, ' +
        'l\'incitation à la haine et à l\'inimitié nationales, raciales ou religieuses, ainsi que d\'autres informations, ' +
        'pour la diffusion de laquelle la responsabilité pénale ou administrative est prévue;'+
        '</li>'+
        '<li class="list-unstyled"> - Ne pas perturber les performances du site;</li>'+
        '<li class="list-unstyled"> - N\'utilisez pas de scripts (programmes) pour la collecte automatisée d\'informations et / ou l\'interaction avec le site et ses services.'+
        '</li>'+
        '</p>'+
        '<h6 class="card-subtitle mb-2 text-muted">L\'administration s\'engage:</h6>'+
        '<p class="card-text">'+
        '<li class="list-unstyled"> - Maintenir la fonctionnalité du site, sauf lorsque cela est impossible pour des raisons indépendantes de la volonté de l\'Administration.'+
        '</li>'+
        '</p>'+
        '<h6 class="card-subtitle mb-2 text-muted">Responsabilité des parties:</h6>'+
        '<p class="card-text">'+
        '<li class="list-unstyled"> - L\'utilisateur est personnellement entièrement responsable des informations qu\'il diffuse; </li>'+
        '<li class="list-unstyled"> - L\'administration n\'assume aucune responsabilité pour les services fournis par des tiers; </li>'+
        '<li class="list-unstyled"> - En cas de situation de force majeure (action militaire, état d\'urgence, catastrophe naturelle, etc.), l\'Administration ne garantit pas le fonctionnement ininterrompu de la ressource informationnelle. </li></p>'+
        '<h6 class="card-subtitle mb-2 text-muted">Conditions de l\'accord:</h6>'+
        '<p class="card-text">Cet accord entre en vigueur avec toute utilisation de ce site. L\'accord expire lorsqu\'une nouvelle version apparaît. L\'administration se réserve le droit de modifier unilatéralement cet accord à sa discrétion. L\'administration n\'informe pas les utilisateurs des modifications apportées à l\'accord.</p>'+
        '</div>'+


        '<div v-else-if="lang==3" class = "container h-100 "  style = "background: #fff;" >'+
        '<h1 class = "display-4 mt-5 mb-5" style = "padding-top: 50px;" > Terms of use </h1>'+
        '<p class="card-text">This User Agreement (hereinafter the Agreement) governs the relationship ' +
        'between the FSBEI HE ISMU of the Ministry of Health of Russia (hereinafter the Site for calculating the risk of developing hepatocyllular carcinoma) with ' +
        'one side and the user of the site on the other. Website for calculating the risk of developing hepatocellular carcinoma.</p>'+
        '<p class="card-text">By using the site, you agree to the terms of this agreement. If you disagree ' +
        'with the terms of this agreement, do not use the Site to calculate the risk of hepatocyllular carcinoma!</p>'+
        '<h4 class="card-subtitle mb-2 text-muted">Subject of the agreement</h4>'+
        '<p class="card-text">'+
        '<h4 class="card-subtitle mb-2 text-muted">Rights and obligations of the parties</h4>'+
        '</p>'+
        '<h6 class="card-subtitle mb-2 text-muted">The user has the right:</h6>'+
        '<p class="card-text">'+
        '<li class="list-unstyled"> - Search for information on the site;</li>'+
        '<li class="list-unstyled"> - Receive information on the website;</li>'+
        '<li class="list-unstyled"> - Make calculations based on the data available to the user.</li>'+
        '</p>'+
        '<h6 class="card-subtitle mb-2 text-muted">The administration has the right:</h6>'+
        '<p class="card-text">'+
        '<li class="list-unstyled"> - At its discretion and need to create, change, cancel rules;</li>'+
        '<li class="list-unstyled"> - Restrict access to any information on the site;</li>'+
        '<li class="list-unstyled"> - Create, modify, delete information.</li>'+
        '</p>'+
        '<h6 class="card-subtitle mb-2 text-muted">The user undertakes:</h6>'+
        '<p class="card-text">'+
        '<li class="list-unstyled"> - Ensure the accuracy of the information provided;</li>'+
        '<li class="list-unstyled"> - Do not disseminate information that is aimed at propaganda of war, ' +
        'incitement to national, racial or religious hatred and enmity, as well as other information, ' +
        'for the distribution of which provides for criminal or administrative liability;'+
        '</li>'+
        '<li class="list-unstyled"> - Do not disrupt the site\'s performance;</li>'+
        '<li class="list-unstyled"> - Do not use scripts (programs) for automated collection of information and / or interaction with the Site and its Services.'+
        '</li>'+
        '</p>'+
        '<h6 class="card-subtitle mb-2 text-muted">The administration undertakes:</h6>'+
        '<p class="card-text">'+
        '<li class="list-unstyled"> - Maintain the site\'s functionality, except when it is impossible for reasons beyond the control of the Administration.'+
        '</li>'+
        '</p>'+
        '<h6 class="card-subtitle mb-2 text-muted">Responsibility of the parties:</h6>'+
        '<p class="card-text">'+
        '<li class="list-unstyled"> - The user is personally fully responsible for the information he disseminates; </li>'+
        '<li class="list-unstyled"> - The administration does not bear any responsibility for the services provided by third parties; </li>'+
        '<li class="list-unstyled"> - In the event of a force majeure situation (military action, state of emergency, natural disaster, etc.), the Administration does not guarantee the uninterrupted operation of the information resource.</li></p>'+
        '<h6 class="card-subtitle mb-2 text-muted">Terms of the Agreement:</h6>'+
        '<p class="card-text">This Agreement enters into force with any use of this site. The agreement expires when a new version of it appears. The administration reserves the right to unilaterally change this agreement at its discretion. The administration does not notify users about the change in the Agreement.</p>'+
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