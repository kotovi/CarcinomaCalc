
function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

function is_empty(x)
{
    return (
        (typeof x == 'undefined')
        ||
        (x == null)
        ||
        (x == false)  //same as: !x
        ||
        (x.length == 0)
        ||
        (x == "")
        ||
        (x.toString().replace(/\s/g,"") == "")
        ||
        (!/[^\s]/.test(x))
        ||
        (/^\s*$/.test(x))
    );
}
Vue.directive('age', {
    bind(el) {
        el.oninput = function(e) {
            if (!e.isTrusted) {
                return;
            }
            let x = this.value.replace(/[^\d]*/g, '')
                .replace(/^[^\d]*((\d{0,3})).*$/g, '$1');
            if(x > 7) {
                this.erythrocytesSizeAlert = true;
            } else{
                this.value = x;
                this.erythrocytesSizeAlert = false;
            }
            el.dispatchEvent(new Event('input'));
        }
    }
});

Vue.directive('erythrocytes', {
    bind(el) {
        el.oninput = function(e) {
            if (!e.isTrusted) {
                return;
            }
            let x = this.value.replace(/[^\d.]*/g, '')
                .replace(/([.])[.]+/g, '$1')
                .replace(/^[^\d]*((\d{0,1})+([.]\d{0,1})).*$/g, '$1');
                if(x > 7) {
                    this.erythrocytesSizeAlert = true;
                } else{
                    this.value = x;
                    this.erythrocytesSizeAlert = false;
                }
            el.dispatchEvent(new Event('input'));
        }
    }
});
Vue.directive('alt', {
    bind(el) {
        el.oninput = function(e) {
            if (!e.isTrusted) {
                return;
            }
            let x = this.value.replace(/[^\d.]*/g, '')
                .replace(/([.])[.]+/g, '$1')
                .replace(/^[^\d]*((\d{0,1})+([.]\d{0,1})).*$/g, '$1');

            if(parseFloat(x) >1000) {
                this.altSizeAlert = true;
            } else{
                this.value = x;
                this.altSizeAlert = false;
            }
            el.dispatchEvent(new Event('input'));
        }
    }
});
Vue.directive('afp', {
    bind(el) {
        el.oninput = function(e) {
            if (!e.isTrusted) {
                return;
            }
            let x = this.value.replace(/[^\d.]*/g, '')
                .replace(/([.])[.]+/g, '$1')
                .replace(/^[^\d]*((\d{0,1})+([.]\d{0,1})).*$/g, '$1');
            if(parseFloat(x) >10000) {
                this.afpSizeAlert = true;
            } else{
                this.value = x;
                this.afpSizeAlert = false;
            }
            el.dispatchEvent(new Event('input'));
        }
    }
});
Vue.directive('opn', {
    bind(el) {
        el.oninput = function(e) {
            if (!e.isTrusted) {
                return;
            }
            let x = this.value.replace(/[^\d.]*/g, '')
                .replace(/([.])[.]+/g, '$1')
                .replace(/^[^\d]*((\d{0,1})+([.]\d{0,1})).*$/g, '$1');
            if(parseFloat(x) >10000) {
                this.opnSizeAlert = true;
            } else{
                this.value = x;
                this.opnSizeAlert = false;
            }
            el.dispatchEvent(new Event('input'));
        }
    }
});

var markerApi = Vue.resource('/markerApi');
var app_calc;

app_calc = new Vue({
    el: '#app_calc',
    template:
        '<div style="width:80%; margin-top:20px; margin-left: 40px;">'+

            '<div v-if="showMarker" >'+
                '<div v-if="badNews">'+
                    '<div class="modal-mask">'+
                        '<div class="modal-wrapper">'+
                            '<div v-if="lang==1" class="modal-container">'+
                                '<div class="modal-title">'+
                                    '<button class="close" @click="cancel">&times;</button>'+
                                    '<h1>Результат расчета</h1>'+
                                '</div>'+
                                '<p>Высокий риск развития гепатоцеллюлярной карциномы.</p>' +
                                '<p>Рекомендовано:</p>'+
                                '<ul>'+
                                    '<li>Узи печени;</li>'+
                                    '<li>Компьютерная томография (КТ) печени с контрастированием;</li>'+
                                    '<li>В случае отрицательного результата контроль через пол года.</li>'+
                                '</ul>'+
                                '<br>'+
                                '<br>'+
                                '<button class="btn btn-primary" @click="cancel">Закрыть</button>'+
                            '</div>'+

                            '<div v-if="lang==2" class="modal-container">'+
                                '<div class="modal-title">'+
                                    '<button class="close" @click="cancel">&times;</button>'+
                                    '<h1>Résultat du calcul</h1>'+
                                '</div>'+
                                '<p>Risque élevé de développer un carcinome hépatocellulaire.</p>' +
                                '<p>Conseillé:</p>'+
                                '<ul>'+
                                    '<li>Échographie hépatique;</li>'+
                                    '<li>Tomodensitométrie (TDM) du foie avec contraste;</li>'+
                                    '<li>En cas de résultat négatif, contrôle après six mois.</li>'+
                                '</ul>'+
                                '<br>'+
                                '<br>'+
                                '<button class="btn btn-primary" @click="cancel">Clore</button>'+
                            '</div>'+

                            '<div v-if="lang==3" class="modal-container">'+
                                '<div class="modal-title">'+
                                    '<button class="close" @click="cancel">&times;</button>'+
                                    '<h1>Calculation result</h1>'+
                                '</div>'+
                                '<p>High risk of developing hepatocellular carcinoma.</p>' +
                                '<p>Recommended:</p>'+
                                '<ul>'+
                                    '<li>Liver ultrasound;</li>'+
                                    '<li>Computed tomography (CT) of the liver with contrast;</li>'+
                                    '<li>In case of a negative result, control after half a year.</li>'+
                                '</ul>'+
                                '<br>'+
                                '<br>'+
                                '<button class="btn btn-primary" @click="cancel">Close</button>'+
                            '</div>'+
                        '</div>'+
                    '</div>'+
                '</div>'+
                '<div v-if="!badNews">'+
                    '<div class="modal-mask">'+
                        '<div class="modal-wrapper">'+
                            '<div v-if="lang==1" class="modal-container">'+
                                '<div class="modal-title">'+
                                    '<button class="close" @click="cancel">&times;</button>'+
                                    '<h1>Результат расчета</h1>'+
                                '</div>'+
                                '<p>Низкий риск развития гепатоцеллюлярной карциномы.</p>' +
                                '<p>Рекомендуется повторить обследование через год.</p>'+
                                '<br>'+
                                '<button class="btn btn-primary" @click="cancel">Закрыть</button>'+
                            '</div>'+
                            '<div v-if="lang==2" class="modal-container">'+
                                '<div class="modal-title">'+
                                    '<button class="close" @click="cancel">&times;</button>'+
                                    '<h1>Résultat du calcul</h1>'+
                                '</div>'+
                                '<p>Faible risque de développer un carcinome hépatocellulaire.</p>' +
                                '<p>Il est recommandé de répéter l\'examen après un an.</p>'+
                                '<br>'+
                                '<button class="btn btn-primary" @click="cancel">Закрыть</button>'+
                            '</div>'+
                            '<div v-if="lang==3" class="modal-container">'+
                                '<div class="modal-title">'+
                                    '<button class="close" @click="cancel">&times;</button>'+
                                    '<h1>Calculation result</h1>'+
                                '</div>'+
                                '<p>Low risk of developing hepatocellular carcinoma.</p>' +
                                '<p>It is recommended to repeat the examination after a year.</p>'+
                                '<br>'+
                                '<button class="btn btn-primary" @click="cancel">Close</button>'+
                            '</div>'+
                        '</div>'+
                    '</div>'+
                '</div>'+

            '</div>'+
            '<div >'+
                '<h1 v-if="lang==1" class="display-4 mt-5 mb-5" style="padding-top:20px;" >Риск развития гепатоцеллюлярной карциномы</h1>'+
                '<h1 v-if="lang==2" class="display-4 mt-5 mb-5" style="padding-top:20px;" >Risque de développer un carcinome hépatocellulaire</h1>'+
                '<h1 v-if="lang==3" class="display-4 mt-5 mb-5" style="padding-top:20px;" >Risk of developing hepatocellular carcinoma</h1>'+

        '<div v-if="lang==1" class="card"  style="margin: 15px; width: 80%;">'+
                    '<div class="card-header text-white bg-dark"><h3>Маркеры</h3></div>'+
                    '<div class="card-body">'+
                        '<form>'+
                            '<div  class="form-group col" style="width: 90%;">'+
                                '<label for="gender">Пол</label>'+
                                '<select class="custom-select" id="gender" v-model="gender">'+
                                    '<option selected value="0" >Выбрать...</option>'+
                                    '<option  value="1">Мужчина</option>'+
                                    '<option  value="2">Женщина</option>'+
                                '</select>'+
                                '<p class="alert alert-danger" v-show ="genderAlert">Укажите пол пациента!</p>'+
                            '</div>'+
                            '<div class="form-group col" style="width: 90%;">'+
                                '<label for="age">Возраст</label>'+
                                '<input type="text" class="form-control" id="age" v-model="age" placeholder="Возраст" v-age required maxlength="3">'+
                                '<p class="alert alert-danger" v-show ="ageAlert">Укажите возраст пациента!</p>'+
                                '<p class="alert alert-danger" v-if ="ageSizeAlert">Возраст не может превышать 150 лет!</p>'+
                            '</div>'+
                            '<div class="form-group col" style="width: 90%;">'+
                                '<label for="erythrocytes">Эритроциты (×10 12 /л)</label>'+
                                '<input type="text" class="form-control" id="erythrocytes" v-model="erythrocytes" placeholder="Эритроциты" v-erythrocytes required maxlength="3">'+
                                '<p class="alert alert-danger" v-show ="erythrocytesAlert">Укажите Эритроциты!</p>'+
                                '<p class="alert alert-danger" v-if ="erythrocytesSizeAlert">Значение не должно превышать 7!</p>'+
                            '</div>'+
                            '<div class="form-group col" style="width: 90%;">'+
                                '<label for="alt">Аланинаминотрансфераза (Ед/л)</label>'+
                                '<input type="text" class="form-control" id="alt" v-model="alt" placeholder="Аланинаминотрансфераза" v-alt required maxlength="6">'+
                                '<p class="alert alert-danger" v-show ="altAlert">Укажите аланинаминотрансферазу!</p>'+
                                '<p class="alert alert-danger" v-show ="altSizeAlert">Значение не должно превышать 1 000!</p>'+
                            '</div>'+
                            '<div class="form-group col" style="width: 90%;">'+
                                '<label for="afp">Альфа-фетопротеин (МЕ/мл)</label>'+
                                '<input type="text" class="form-control" id="afp" v-model="afp" placeholder="Альфа-фетопротеин" v-afp required maxlength="7">'+
                                '<p class="alert alert-danger" v-show ="afpAlert">Укажите альфа-фетопротеин!</p>'+
                                '<p class="alert alert-danger" v-show ="afpSizeAlert">Значение не должно превышать 10 000!</p>'+
                            '</div>'+
                            '<div class="form-group col" style="width: 90%;">'+
                                '<label for="opn">Остеопонтин (нг/мл)</label>'+
                                '<input type="text" class="form-control" id="opn" v-model="opn" placeholder="Остеопонтин" v-opn required maxlength="7">'+
                                '<p class="alert alert-danger" v-show ="opnAlert">Укажите остеопонтин!</p>'+
                                '<p class="alert alert-danger" v-show ="opnSizeAlert">Значение не должно превышать 10 000!</p>'+
                            '</div>'+
                            '<div class="form-group row">'+
                                '<div class="col-sm-10">'+
                                    '<input style="margin: 5px;" type = "button"  class="btn btn-primary " value="Расчитать" @click="save"/>'+
                                    '<input style="margin: 5px;" type="button" class="btn btn-danger " value="Сброс" @click="cancel">'+
                                '</div>'+
                            '</div>'+
                        '</form>'+
                    '</div>'+
                '</div>'+

        '<div v-if="lang==2" class="card"  style="margin: 15px; width: 80%;">'+
        '<div class="card-header text-white bg-dark"><h3>Marqueurs</h3></div>'+
        '<div class="card-body">'+
        '<form>'+
        '<div  class="form-group col" style="width: 90%;">'+
        '<label for="gender">Sexe</label>'+
        '<select class="custom-select" id="gender" v-model="gender">'+
        '<option selected value="0" >Désigner...</option>'+
        '<option  value="1">Homme</option>'+
        '<option  value="2">Femme</option>'+
        '</select>'+
        '<p class="alert alert-danger" v-show ="genderAlert">Indiquez le sexe du patient!</p>'+
        '</div>'+
        '<div class="form-group col" style="width: 90%;">'+
        '<label for="age">Âge</label>'+
        '<input type="text" class="form-control" id="age" v-model="age" placeholder="Âge" v-age required maxlength="3">'+
        '<p class="alert alert-danger" v-show ="ageAlert">Indiquez l\'âge du patient!</p>'+
        '<p class="alert alert-danger" v-if ="ageSizeAlert">L\'âge ne peut excéder 150 ans!</p>'+
        '</div>'+
        '<div class="form-group col" style="width: 90%;">'+
        '<label for="erythrocytes">Érythrocytes (×10^12 /l)</label>'+
        '<input type="text" class="form-control" id="erythrocytes" v-model="erythrocytes" placeholder="Érythrocytes" v-erythrocytes required maxlength="3">'+
        '<p class="alert alert-danger" v-show ="erythrocytesAlert">Indiquer les érythrocytes!</p>'+
        '<p class="alert alert-danger" v-if ="erythrocytesSizeAlert">La valeur ne doit pas dépasser 7!</p>'+
        '</div>'+
        '<div class="form-group col" style="width: 90%;">'+
        '<label for="alt">Alanine aminotransférase (unité / l)</label>'+
        '<input type="text" class="form-control" id="alt" v-model="alt" placeholder="Alanine aminotransférase" v-alt required maxlength="6">'+
        '<p class="alert alert-danger" v-show ="altAlert">Spécifier l\'alanine aminotransférase!</p>'+
        '<p class="alert alert-danger" v-show ="altSizeAlert">La valeur ne doit pas dépasser 1000!</p>'+
        '</div>'+
        '<div class="form-group col" style="width: 90%;">'+
        '<label for="afp">Alpha-foetoprotéine (UI/ml)</label>'+
        '<input type="text" class="form-control" id="afp" v-model="afp" placeholder="Alpha-foetoprotéine" v-afp required maxlength="7">'+
        '<p class="alert alert-danger" v-show ="afpAlert">Spécifiez l\'alpha-foetoprotéine!</p>'+
        '<p class="alert alert-danger" v-show ="afpSizeAlert">La valeur ne doit pas dépasser 10 000!</p>'+
        '</div>'+
        '<div class="form-group col" style="width: 90%;">'+
        '<label for="opn">Ostéopontine (ng / ml)</label>'+
        '<input type="text" class="form-control" id="opn" v-model="opn" placeholder="Ostéopontine" v-opn required maxlength="7">'+
        '<p class="alert alert-danger" v-show ="opnAlert">Indiquez l\'ostéopontine!</p>'+
        '<p class="alert alert-danger" v-show ="opnSizeAlert">La valeur ne doit pas dépasser 10 000!</p>'+
        '</div>'+
        '<div class="form-group row">'+
        '<div class="col-sm-10">'+
        '<input style="margin: 5px;" type = "button"  class="btn btn-primary " value="Calculer" @click="save"/>'+
        '<input style="margin: 5px;" type="button" class="btn btn-danger " value="Réinitialiser" @click="cancel">'+
        '</div>'+
        '</div>'+
        '</form>'+
        '</div>'+
        '</div>'+


        '<div v-if="lang==3" class="card"  style="margin: 15px; width: 80%;">'+
        '<div class="card-header text-white bg-dark"><h3>Markers</h3></div>'+
        '<div class="card-body">'+
        '<form>'+
        '<div  class="form-group col" style="width: 90%;">'+
        '<label for="gender">Gender</label>'+
        '<select class="custom-select" id="gender" v-model="gender">'+
        '<option selected value="0" >Choose...</option>'+
        '<option  value="1">Male</option>'+
        '<option  value="2">Female</option>'+
        '</select>'+
        '<p class="alert alert-danger" v-show ="genderAlert">Select patient gender!</p>'+
        '</div>'+
        '<div class="form-group col" style="width: 90%;">'+
        '<label for="age">Age</label>'+
        '<input type="text" class="form-control" id="age" v-model="age" placeholder="Age" v-age required maxlength="3">'+
        '<p class="alert alert-danger" v-show ="ageAlert">Select patient age!</p>'+
        '<p class="alert alert-danger" v-if ="ageSizeAlert">Age cannot be more than 150 years!</p>'+
        '</div>'+
        '<div class="form-group col" style="width: 90%;">'+
        '<label for="erythrocytes">Erythrocytes (× 10^12 / l)</label>'+
        '<input type="text" class="form-control" id="erythrocytes" v-model="erythrocytes" placeholder="Erythrocytes" v-erythrocytes required maxlength="3">'+
        '<p class="alert alert-danger" v-show ="erythrocytesAlert">Indicate Erythrocytes!</p>'+
        '<p class="alert alert-danger" v-if ="erythrocytesSizeAlert">The value must not exceed 7!!</p>'+
        '</div>'+
        '<div class="form-group col" style="width: 90%;">'+
        '<label for="alt">Alanineaminotransferase (U/L)</label>'+
        '<input type="text" class="form-control" id="alt" v-model="alt" placeholder="Alanineaminotransferase" v-alt required maxlength="6">'+
        '<p class="alert alert-danger" v-show ="altAlert">Specify alanine aminotransferase!</p>'+
        '<p class="alert alert-danger" v-show ="altSizeAlert">The value should not exceed 1000!</p>'+
        '</div>'+
        '<div class="form-group col" style="width: 90%;">'+
        '<label for="afp">Alpha-fetoprotein (IU / ml)</label>'+
        '<input type="text" class="form-control" id="afp" v-model="afp" placeholder="Alpha-fetoprotein" v-afp required maxlength="7">'+
        '<p class="alert alert-danger" v-show ="afpAlert">Specify alpha-fetoprotein!</p>'+
        '<p class="alert alert-danger" v-show ="afpSizeAlert">The value must not exceed 10,000!</p>'+
        '</div>'+
        '<div class="form-group col" style="width: 90%;">'+
        '<label for="opn">Osteopontin (ng/ml)</label>'+
        '<input type="text" class="form-control" id="opn" v-model="opn" placeholder="Osteopontin" v-opn required maxlength="7">'+
        '<p class="alert alert-danger" v-show ="opnAlert">Specify osteopontin!</p>'+
        '<p class="alert alert-danger" v-show ="opnSizeAlert">The value must not exceed 10,000!</p>'+
        '</div>'+
        '<div class="form-group row">'+
        '<div class="col-sm-10">'+
        '<input style="margin: 5px;" type = "button"  class="btn btn-primary " value="Calculate" @click="save"/>'+
        '<input style="margin: 5px;" type="button" class="btn btn-danger " value="Reset" @click="cancel">'+
        '</div>'+
        '</div>'+
        '</form>'+
        '</div>'+
        '</div>'+
            '</div>'+
        '</div>',
    data: {
        age:'',
        gender:0,
        erythrocytes:'',
        alt:'',
        afp:'',
        opn:'',
        genderAlert:false,
        ageAlert:false,
        erythrocytesAlert:false,
        altAlert:false,
        afpAlert:false,
        opnAlert:false,
        calculatedMarker:null,
        showMarker:false,
        badNews:null,
        erythrocytesSizeAlert:false,
        altSizeAlert:false,
        afpSizeAlert:false,
        opnSizeAlert:false,
        ageSizeAlert:false,
        lang:'',
    },
    methods: {
        cancel: function() {
            this.age='';
            this.gender=0;
            this.erythrocytes='';
            this.alt='';
            this.afp='';
            this.opn='';
            this.genderAlert=false;
            this.ageAlert=false;
            this.erythrocytesAlert=false;
            this.altAlert=false;
            this.afpAlert=false;
            this.opnAlert=false;
            this.calculatedMarker=null;
            this.showMarker=false;
            this.badNews=false;
            this.ageSizeAlert=false;
            this.erythrocytesSizeAlert=false;
            this.altSizeAlert=false;
            this.afpSizeAlert=false;
        },
        save: function () {

            if(this.gender>0){
                this.genderAlert = false;
            } else {
                this.genderAlert = true;
            }
            if(is_empty(this.age)){
                this.ageAlert = true;
            } else {
                if(this.age>150){
                    this.ageSizeAlert=true;
                } else {
                    this.ageSizeAlert=false;
                    this.ageAlert = false;
                }

            }
            if(is_empty(this.erythrocytes)){
                this.erythrocytesAlert = true;
            } else {
                if(this.erythrocytes>7){
                    this.erythrocytesSizeAlert=true;
                } else {
                    this.erythrocytesSizeAlert=false;
                }
                this.erythrocytesAlert = false;
            }
            if(is_empty(this.alt)){
                this.altAlert = true;
            } else {
                if(this.alt>1000){
                    this.altSizeAlert=true;
                } else {
                    this.altSizeAlert=false;
                }
                this.altAlert = false;
            }
            if(is_empty(this.afp)){
                this.afpAlert = true;
            } else {
                if(this.afp>10000){
                    this.afpSizeAlert=true;
                } else {
                    this.afpSizeAlert=false;
                }
                this.afpAlert = false;
            }
            if(is_empty(this.opn)){
                this.opnAlert = true;
            } else {
                if(this.opn>10000){
                    this.opnSizeAlert=true;
                } else {
                    this.opnSizeAlert=false;
                }
                this.opnAlert = false;
            }

            var marker = {
                gender: this.gender,
                age: this.age,
                erythrocytes: this.erythrocytes,
                alt: this.alt,
                afp: this.afp,
                opn: this.opn,
            };

            if (
                (!this.genderAlert) &
                (!this.erythrocytesAlert) &
                (!this.ageAlert) &
                (!this.altAlert) &
                (!this.afpAlert) &
                (!this.opnAlert) &
                (!this.erythrocytesSizeAlert) &
                (!this.altSizeAlert) &
                (!this.afpSizeAlert) &
                (!this.ageSizeAlert) &
                (!this.opnSizeAlert)

            ) {
                markerApi.save({}, marker).then(result =>
                        result.json().then(data => {
                            this.calculatedMarker=data;
                            this.badNews = data.badNews;
                        })
                    );
                this.showMarker=true;
                this.ageSizeAlert=false;
                this.erythrocytesSizeAlert=false;
                this.altSizeAlert=false;
                this.afpSizeAlert=false;
            }
        }
    },
    mounted() {
        if (localStorage.lang) {
            this.lang = localStorage.lang;
        } else {
            this.lang=1;
        }
    },
});