var autoTest = {};

function extend(child, parent) {
    var F = function () {
    };
    F.prototype = parent.prototype;
    child.prototype = new F();
    child.prototype.constructor = child;
    child.superclass = parent.prototype;
}

/**
 * autoTest component.
 */
autoTest.DrawComponent = {
    ext_lang: 'auto_test',
    formats: ['format_auto_test_json'],
    struct_support: true,
    factory: function (sandbox) {
        return new autoTest.DrawWindow(sandbox);
    }
};

autoTest.DrawWindow = function (sandbox) {
    this.sandbox = sandbox;
    this.paintPanel = new autoTest.PaintPanel(this.sandbox.container);
    this.paintPanel.init();
    this.recieveData = function (data) {
        console.log("in recieve data" + data);
    };

    var scElements = {};

    function drawAllElements() {
        var dfd = new jQuery.Deferred();
       // for (var addr in scElements) {
            jQuery.each(scElements, function(j, val){
                var obj = scElements[j];
                if (!obj || obj.translated) return;
// check if object is an arc
                if (obj.data.type & sc_type_arc_pos_const_perm) {
                    var begin = obj.data.begin;
                    var end = obj.data.end;
                    // logic for component update should go here
                }

        });
        SCWeb.ui.Locker.hide();
        dfd.resolve();
        return dfd.promise();
    }

// resolve keynodes
    var self = this;
    this.needUpdate = false;
    this.requestUpdate = function () {
        var updateVisual = function () {
// check if object is an arc
            var dfd1 = drawAllElements();
            dfd1.done(function (r) {
                return;
            });


/// @todo: Don't update if there are no new elements
            window.clearTimeout(self.structTimeout);
            delete self.structTimeout;
            if (self.needUpdate)
                self.requestUpdate();
            return dfd1.promise();
        };
        self.needUpdate = true;
        if (!self.structTimeout) {
            self.needUpdate = false;
            SCWeb.ui.Locker.show();
            self.structTimeout = window.setTimeout(updateVisual, 1000);
        }
    }
    
    this.eventStructUpdate = function (added, element, arc) {
        window.sctpClient.get_arc(arc).done(function (r) {
            var addr = r[1];
            window.sctpClient.get_element_type(addr).done(function (t) {
                var type = t;
                var obj = new Object();
                obj.data = new Object();
                obj.data.type = type;
                obj.data.addr = addr;
                if (type & sc_type_arc_mask) {
                    window.sctpClient.get_arc(addr).done(function (a) {
                        obj.data.begin = a[0];
                        obj.data.end = a[1];
                        scElements[addr] = obj;
                        self.requestUpdate();
                    });
                }
            });
        });
    };
// delegate event handlers
    this.sandbox.eventDataAppend = $.proxy(this.receiveData, this);
    this.sandbox.eventStructUpdate = $.proxy(this.eventStructUpdate, this);
    this.sandbox.updateContent();
};
SCWeb.core.ComponentManager.appendComponentInitialize(autoTest.DrawComponent);

/**
 * Paint panel.
 */

autoTest.PaintPanel = function (containerId) {
    this.containerId = containerId;
};

autoTest.PaintPanel.prototype = {

    init: function () {
        this._initMarkup(this.containerId);
    },

    _initMarkup: function (containerId) {
        var container = $('#' + containerId);

        var self = this;

container.append('<div class="sc-no-default-cmd">Эксспресс-тест на знание Правил дорожного движения</div>');

//---------------------------------------------------------------------------------------------------------------------------------
container.append('</br>');		
container.append('1. Обязан ли водитель, являющийся участником дорожно-транспортного происшествия, </br>');
container.append('доставлять в организацию здравоохранения пострадавших? </br>');
container.append('</br>');		
//5
		container.append('<select size="1"   id="answer1" style="width:230px" > <option disabled selected>Выберите ответ</option>\
    					<option value="1">1. Обязан только если он является виновником данного происшествия.</option>\
    					<option value="2">2. Обязан только по просьбе пострадавшего.</option>\
    					<option value="3">3. Обязан, когда у водителя есть свободное время.</option>\
					<option value="4">4. Не обязан.</option>\
					<option value="5">5. Обязан в случае невозможности вызова скорой медицинской помощи и отсутствия попутных транспортных средств.</option>\
					   </select>');
			container.append('<table id="answer1_table" border="1"></table>');

//---------------------------------------------------------------------------------------------------------------------------------
container.append('</br>');		
					   container.append('2. Какими, согласно Правилам дорожного движения, могут быть сигналы светофоров в зависимости от назначения? </br>');
container.append('</br>');		
//3
	container.append('<select size="1"   id="answer2" style="width:230px" > <option disabled selected>Выберите ответ</option>\
    					<option value="1">1. T-образные.</option>\
    					<option value="2">2. Х-образные.</option>\
    					<option value="3">3. Y-образные.</option>\
					   </select>');
				container.append('<table id="answer2_table" border="1"></table>');
container.append('</br>');		

//-------------------------------------------------------------------------------------------------------------------------------

container.append('</br>');		
					   container.append('3.  Водитель должен остановиться, приближаясь к стоящему на обочине транспортному средству оперативного назначения с включенным проблесковым маячком:  </br>');
container.append('</br>');		
//2
	container.append('<select size="1"   id="answer3" style="width:230px" > <option disabled selected>Выберите ответ</option>\
    					<option value="1">1. Синего цвета.</option>\
    					<option value="2">2. Красного цвета.</option>\
    					<option value="3">3. Оранжевого цвета.</option>\
					   </select>');
				container.append('<table id="answer3_table" border="1"></table>');
container.append('</br>');		

//-------------------------------------------------------------------------------------------------------------------------------

container.append('</br>');		
					   container.append('4.  Водительское удостоверение на право управления транспортным средством категории "В" дает Вам право управления:  </br>');
container.append('</br>');		
//3
	container.append('<select size="1"   id="answer4" style="width:230px" > <option disabled selected>Выберите ответ</option>\
    					<option value="1">1. Только легковым автомобилем.</option>\
    					<option value="2">2. Легковым автомобилем и мотоциклом.</option>\
    					<option value="3">3. Автомобилем, технически допустимая общая масса которого не превышает 3500 килограммов.</option>\
					   </select>');
				container.append('<table id="answer4_table" border="1"></table>');
container.append('</br>');		

//-------------------------------------------------------------------------------------------------------------------------------

container.append('</br>');		
					   container.append('5.  Какой из перечисленных вариантов ответа соответствует термину "опережение"? </br>');
container.append('</br>');		
//2
	container.append('<select size="1"   id="answer5" style="width:230px" > <option disabled selected>Выберите ответ</option>\
    					<option value="1">1. Объезд стоящего транспортного средства.</option>\
    					<option value="2">2. Движение транспортного средства со скоростью, превышающей скорость попутно движущегося транспортного средства.</option>\
					   <option value="3">3. Все перечисленные соответствуют.</option>\
					   </select>');
				container.append('<table id="answer5_table" border="1"></table>');
container.append('</br>');		

//-------------------------------------------------------------------------------------------------------------------------------

container.append('</br>');		
					   container.append('6.  Разрешается ли обучать управлению механическим транспортным средством в индивидуальном порядке на дорогах общего пользования?  </br>');
container.append('</br>');		
//4
	container.append('<select size="1"   id="answer6" style="width:230px" > <option disabled selected>Выберите ответ</option>\
    					<option value="1">1. Разрешается в случае дополнительного оборудования автомобиля педалями привода сцепления и тормоза для обучающего.</option>\
    					<option value="2">2. Разрешается в случае дополнительного оборудования автомобиля необходимым количеством зеркал заднего вида для обучающего.</option>\
    					<option value="3">3. Разрешается только при выполнении обоих перечисленных условий.</option>\
					   <option value="4">4. Запрещается.</option>\
					   </select>');
				container.append('<table id="answer6_table" border="1"></table>');
container.append('</br>');		

//-------------------------------------------------------------------------------------------------------------------------------

container.append('</br>');		
					   container.append('7.  К чему из перечисленного Правила дорожного движения обязывают участников дорожного движения?  </br>');
container.append('</br>');		
//4
	container.append('<select size="1"   id="answer7" style="width:230px" > <option disabled selected>Выберите ответ</option>\
    					<option value="1">1. Принимать меры по недопущению загрязнения дорог.</option>\
    					<option value="2">2. Принимать меры по недопущению загрязнения окружающей среды.</option>\
    					<option value="3">3. Не выбрасывать мусор и иные предметы вне специально отведенных мест.</option>\
					   <option value="4">4. Ко всему перечисленному.</option>\
					   </select>');
				container.append('<table id="answer7_table" border="1"></table>');
container.append('</br>');		

//-------------------------------------------------------------------------------------------------------------------------------

container.append('</br>');		
					   container.append('8.  Что понимается под термином "железнодорожный переезд"?  </br>');
container.append('</br>');		
//3
	container.append('<select size="1"   id="answer8" style="width:230px" > <option disabled selected>Выберите ответ</option>\
    					<option value="1">1. Любое пересечение дороги с железнодорожными путями (в том числе и на разных уровнях).</option>\
    					<option value="2">2. Только такое пересечение дороги с железнодорожными путями, которое обозначено соответствующими дорожными знаками.</option>\
    					<option value="3">3. Пересечение дороги с железнодорожными путями на одном уровне.</option>\
					   </select>');
				container.append('<table id="answer8_table" border="1"></table>');
container.append('</br>');		

//-------------------------------------------------------------------------------------------------------------------------------

container.append('</br>');		
					   container.append('9.  В каком из перечисленных случаев водитель совершил вынужденную остановку?  </br>');
container.append('</br>');		
//3
	container.append('<select size="1"   id="answer9" style="width:230px" > <option disabled selected>Выберите ответ</option>\
    					<option value="1">1. Остановился на обочине из-за прокола колеса.</option>\
    					<option value="2">2. Остановился у тротуара из-за появившегося стука в подвеске левого колеса.</option>\
    					<option value="3">3. Во всех перечисленных случаях.</option>\
					   </select>');
				container.append('<table id="answer9_table" border="1"></table>');
		
container.append('</br>');		


//-------------------------------------------------------------------------------------------------------------------------------


					   container.append('10. Каким транспортным средствам из перечисленных устанавливается скорость движения на автомагистралях не более 90 км/ч?  </br>');
container.append('</br>');			  
//3
	container.append('<select size="1"   id="answer10" style="width:230px" > <option disabled selected>Выберите ответ</option>\
    					<option value="1">1. Легковым автомобилям.</option>\
    					<option value="2">2. Грузовым автомобилям с технически допустимой общей массой не более 3,5 тонны.</option>\
    					<option value="3">3. Легковым автомобилям при их движении с прицепом.</option>\
					   </select>');
				container.append('<table id="answer10_table" border="1"></table>');
container.append('</br>');	

			container.append('<button id="sendQuestBut" type="button">Отправить</button></br>');
			
			container.append('</br><table id="car_table" border="1"></table>');
			container.append('</br>');		
			container.append('</br>');		
			container.append('</br>');

        $('#sendQuestBut').click(function () {
			self._showResult();
		});
    },

    /* Call agent of searching semantic neighborhood,
	send ui_main_menu node as parameter and add it in web window history
	*/
	_showResult: function () {
		var correct_answers = 0;
		var table = document.getElementById('car_table');
		var table1 = document.getElementById('answer1_table');
		var table2 = document.getElementById('answer2_table');
		var table3 = document.getElementById('answer3_table');
		var table4 = document.getElementById('answer4_table');
		var table5 = document.getElementById('answer5_table');
		var table6 = document.getElementById('answer6_table');
		var table7 = document.getElementById('answer7_table');
		var table8 = document.getElementById('answer8_table');
		var table9 = document.getElementById('answer9_table');
		var table10 = document.getElementById('answer10_table');
		var answer1 = document.getElementById('answer1').value;
		var answer2 = document.getElementById('answer2').value;
		var answer3 = document.getElementById('answer3').value;
		var answer4 = document.getElementById('answer4').value;
		var answer5 = document.getElementById('answer5').value;
		var answer6 = document.getElementById('answer6').value;
		var answer7 = document.getElementById('answer7').value;
		var answer8 = document.getElementById('answer8').value;
		var answer9 = document.getElementById('answer9').value;
		var answer10 = document.getElementById('answer10').value;
		if (answer1 == "5"){correct_answers++; table1.innerHTML = "Верно!"} else if (answer1 == "Выберите ответ"){table1.innerHTML = "Вы не выбрали ответ";} else {table1.innerHTML = "Неверно!";}
		if (answer2 == "3"){correct_answers++; table2.innerHTML = "Верно!"} else if (answer2 == "Выберите ответ"){table2.innerHTML = "Вы не выбрали ответ";} else {table2.innerHTML = "Неверно!";}
		if (answer3 == "2"){correct_answers++; table3.innerHTML = "Верно!"} else if (answer3 == "Выберите ответ"){table3.innerHTML = "Вы не выбрали ответ";} else {table3.innerHTML = "Неверно!";}
		if (answer4 == "3"){correct_answers++; table4.innerHTML = "Верно!"} else if (answer4 == "Выберите ответ"){table4.innerHTML = "Вы не выбрали ответ";} else {table4.innerHTML = "Неверно!";}
		if (answer5 == "2"){correct_answers++; table5.innerHTML = "Верно!"} else if (answer5 == "Выберите ответ"){table5.innerHTML = "Вы не выбрали ответ";} else {table5.innerHTML = "Неверно!";}
		if (answer6 == "4"){correct_answers++; table6.innerHTML = "Верно!"} else if (answer6 == "Выберите ответ"){table6.innerHTML = "Вы не выбрали ответ";} else {table6.innerHTML = "Неверно!";}
		if (answer7 == "4"){correct_answers++; table7.innerHTML = "Верно!"} else if (answer7 == "Выберите ответ"){table7.innerHTML = "Вы не выбрали ответ";} else {table7.innerHTML = "Неверно!";}
		if (answer8 == "3"){correct_answers++; table8.innerHTML = "Верно!"} else if (answer8 == "Выберите ответ"){table8.innerHTML = "Вы не выбрали ответ";} else {table8.innerHTML = "Неверно!";}
		if (answer9 == "3"){correct_answers++; table9.innerHTML = "Верно!"} else if (answer9 == "Выберите ответ"){table9.innerHTML = "Вы не выбрали ответ";} else {table9.innerHTML = "Неверно!";}
		if (answer10 == "3"){correct_answers++; table10.innerHTML = "Верно!"} else if (answer10 == "Выберите ответ"){table10.innerHTML = "Выберите ответ!";} else {table10.innerHTML = "Неверно!";}
		// if (correct_answers == "10"){
			table.innerHTML = "Количество верных ответов - " + correct_answers + "/10";
		// } else {table.innerHTML = "Э, есть ошибки, переделывай";}
	},
};
