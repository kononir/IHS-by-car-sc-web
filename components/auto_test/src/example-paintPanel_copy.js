/**
 * Paint panel.
 */

answer1 = [];
answer2 = [];
answer3 = [];
answer4 = [];
answer5 = [];
answer6 = [];
answer7 = [];
answer8 = [];
answer9 = [];
answer10 = [];
correct_answers = 0;

var container = $('#' + containerId);

autoTest.PaintPanel = function (containerId) {
    this.containerId = containerId;
};

var container = $('#' + containerId);

autoTest.PaintPanel.prototype = {

    init: function () {
		this._initMarkup(this.containerId);
		this._get_model(this.containerId);
    },

    _initMarkup: function (containerId) {
        var container = $('#' + containerId);

        var self = this;
        container.append('<div class="sc-no-default-cmd">Эксспресс-тест на знание Правил дорожного движения</div>');

//---------------------------------------------------------------------------------------------------------------------------------
		container.append('Обязан ли водитель, являющийся участником дорожно-транспортного происшествия, доставлять в организацию здравоохранения пострадавших?</br>');
//5
		container.append('<select size="1"   id="answer1" style="width:230px" > <option disabled selected>Выберите ответ</option>\
    					<option value="1">1. Обязан только если он является виновником данного происшествия.</option>\
    					<option value="2">2. Обязан только по просьбе пострадавшего.</option>\
    					<option value="3">3. Обязан, когда у водителя есть свободное время.</option>\
					<option value="4">4. Не обязан.</option>\
					<option value="5">5. 5. Обязан в случае невозможности вызова скорой медицинской помощи и отсутствия попутных транспортных средств.</option>\
					   </select></br>');
//---------------------------------------------------------------------------------------------------------------------------------

					   container.append(' Какими, согласно Правилам дорожного движения, могут быть сигналы светофоров в зависимости от назначения? </br>');
					  
//2
	container.append('<select size="1"   id="answer2" style="width:230px" > <option disabled selected>Выберите ответ</option>\
    					<option value="1">1. 1. T-образные.</option>\
    					<option value="2">2. 2. Х-образные.</option>\
    					<option value="3">3. 3. Y-образные.</option>\
					   </select></br>');

//-------------------------------------------------------------------------------------------------------------------------------

					   container.append('  Каким транспортным средствам из перечисленных устанавливается скорость движения на автомагистралях не более 90 км/ч?  </br>');
					  
//3
	container.append('<select size="1"   id="answer3" style="width:230px" > <option disabled selected>Выберите ответ</option>\
    					<option value="1">1. 1. Легковым автомобилям.</option>\
    					<option value="2">2. 2. Грузовым автомобилям с технически допустимой общей массой не более 3,5 тонны.</option>\
    					<option value="3">3. 3. Легковым автомобилям при их движении с прицепом.</option>\
					   </select></br>');

			container.append('<button id="sendQuestBut" type="button">Отправить</button></br>');
			
			container.append('</br><table id="car_table" border="1"></table>');

		

		$('#sendQuestBut').click(function () {

			self._get_result();
	
		});

	
	},
	
	_get_result: function () {
		var date = new Date();
		var table = document.getElementById('car_table');
		var answer1 = document.getElementById('answer1').value;
		var answer2 = document.getElementById('answer2').value;
		var answer3 = document.getElementById('answer3').value;
		if (answer1 == "5"){correct_answers++;}
		if (answer2 == "3"){correct_answers++;}
		if (answer3 == "2"){correct_answers++;}
		if (correct_answers == "3"){table.innerHTML = "Красавчик !!";}
	}
}
