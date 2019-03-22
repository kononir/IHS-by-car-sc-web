/**
 * Paint panel.
 */
defect_set = [];
common_count = 0;

DefectsIndicator.PaintPanel = function (containerId) {
    this.containerId = containerId;
};

DefectsIndicator.PaintPanel.prototype = {

    init: function () {
        this._initMarkup(this.containerId);
    },

    _initMarkup: function (containerId) {
        var container = $('#' + containerId);

        var self = this;
		container.append('<div class="sc-no-default-cmd">Агент подбора множества неисправностей по выбранным признакам</div>');
		//container.append('<select name="Звук" size="3"></br>');
		container.append('Звук:</br>');
		container.append('<select size="1"   id="sound" style="width:230px" >\
						 <option disabled selected>Выберите звук</option>\
						 <option value="concept_hissing">шипение</option>\
						 <option value="concept_clatter">клацание</option>\
						 <option value="concept_squealing_under_the_hood">визжание под капотом</option>\
						 <option value="concept_metal_squeal">металлический визг</option>\
						 <option value="concept_crack">треск</option>\
						 <option value="concept_growl">рычание</option>\
						 <option value="concept_whistle_under_the_hood">свист под капотом</option>\
						 <option value="concept_rattle">дребезжание под капотом</option>\
						 <option value="concept_howl">вой</option>\
						 </select>');
	
		container.append('Запах:</br>');
		container.append('<select size="1"   id="smell" style="width:230px" >\
						<option disabled selected>Выберите запах</option>\
    					<option value="concept_exhaust">выхлопные газы</option>\
    					<option value="concept_rotten_egg">тухлые яйца</option>\
    					<option value="concept_sweet">сладкое</option>\
    					<option value="concept_melting_insulation">плавящаяся изоляция</option>\
    					<option value="concept_fuel">топливо</option>\
    					<option value="concept_burning_oil">горящее масло</option>\
    					<option value="concept_cinder">гарь</option>\
						<option value="concept_dampness">сырость</option>\
						</select>');

		/*container.append('Тактильные ощущения:</br>');
		container.append('<select size="1"   id="driving_feeling" style="width:230px" >\
						<option disabled selected>Выберите ощущение</option>\
    					<option value="concept_vibration">вибрация</option>\
						<option value="concept_impact>толчки</option>\
    					<option value="concept_increased_streering_force">повышенное усилие руля</option>\
						</select>');*/

		//container.append('<input type="text" value="" id="driving_feeling" /></br>');
		container.append('Визуальная оценка:</br>');
		container.append('<select size="1"   id="car_state" style="width:230px" >\
						<option disabled selected>Выберите состояние автомобиля</option>\
						<option value="concept_increased_tire_wear">повышенный износ шин</option>\
						<option value="concept_many_warning_signs_on_the_dashboard">множество предупреждающих значков на приборной панели</option>\
						</select>');

		//container.append('<input type="text" value="" id="car_state" /></br>');	
		container.append('Поведение автомобиля:</br>');
		container.append('<select size="1"   id="car_behavior" style="width:230px"  >\
						<option disabled selected>Выберите поведение автомобиля</option>\
						<option value="concept_consumes_a_lot_of_oil">потребляет много масла</option>\
						<option value="concept_pull_away">тянет в сторону</option>\
						<option value="concept_stalls">глохнет</option>\
						<option value="concept_vibration">вибрация</option>\
						<option value="concept_impacts>толчки</option>\
    					<option value="concept_increased_streering_force">повышенное усилие руля</option>\
						</select>');
	
		//container.append('<input type="text" value="" id="car_behavior" /></br>');
		
		container.append('</br><button id="pick_up_defects" type="button">Подобрать неисправности</button></br>');
		container.append('</br><table id="defect_table" border="1"></table>');
		container.append('</br><button id="pick_up_clear" type="button">Сбросить</button></br>');

		$('#pick_up_clear').click(function () {
			defect_set = [];
			$("#defect_table tr").remove();
			document.getElementById("sound").options[0].selected=true;
			document.getElementById("smell").options[0].selected=true;
			//document.getElementById("driving_feeling").options[0].selected=true;
			document.getElementById("car_state").options[0].selected=true;
			document.getElementById("car_behavior").options[0].selected=true;
		});
		$('#pick_up_defects').click(function () {
			defect_set = [];
			common_count = 0;	
			self._sound();
			setTimeout(self._smell, 1000);	
			//setTimeout(self._driving_feeling, 2000);	
			setTimeout(self._car_state, 3000);
			setTimeout(self._car_behavior, 4000);
			setTimeout(self._sort_defect_set, 5000);
		});
    },
	_sound: function () {
		var sound = document.getElementById("sound");
		if (sound.options[sound.selectedIndex].value != "Выберите звук") {
			common_count++;
			var sound = sound.options[sound.selectedIndex].value;
			SCWeb.core.Server.findIdentifiersSubStr(sound, function(sound_addr) {
				var sound_addr_numb = sound_addr.sys[0][0];
				SCWeb.core.Server.resolveScAddr(['nrel_sound'],function(keynodes){
					var nrel_sound_addr_numb = keynodes['nrel_sound'];
					window.sctpClient.iterate_elements(SctpIteratorType.SCTP_ITERATOR_5A_A_F_A_F,[
						sc_type_node,
						sc_type_arc_common | sc_type_const,
						sound_addr_numb,
						sc_type_arc_pos_const_perm,
						nrel_sound_addr_numb]).done(function(element_of_concept_sound_to_elements_of_concept_defect_mas){
							for (count = 0; count < element_of_concept_sound_to_elements_of_concept_defect_mas.length; count++){
								window.scHelper.getIdentifier(element_of_concept_sound_to_elements_of_concept_defect_mas[count][0],SCWeb.core.Server._current_language).done(function (defect) {
									defect_set.push(defect);
								})
							}
						});
				});
			});
		}
	},
	_smell: function () {
		var smell = document.getElementById("smell");
		if (smell.options[smell.selectedIndex].value != "Выберите запах") {
			common_count++;
			var smell = smell.options[smell.selectedIndex].value;
			SCWeb.core.Server.findIdentifiersSubStr(smell, function(smell_addr) {
				var smell_addr_numb = smell_addr.sys[0][0];
				SCWeb.core.Server.resolveScAddr(['nrel_smell'],function(keynodes){
					var nrel_smell_addr_numb = keynodes['nrel_smell'];
					window.sctpClient.iterate_elements(SctpIteratorType.SCTP_ITERATOR_5A_A_F_A_F,[
						sc_type_node,
						sc_type_arc_common | sc_type_const,
						smell_addr_numb,
						sc_type_arc_pos_const_perm,
						nrel_smell_addr_numb]).done(function(element_of_concept_smell_to_elements_of_concept_defect_mas){
							for (count = 0; count < element_of_concept_smell_to_elements_of_concept_defect_mas.length; count++){
								window.scHelper.getIdentifier(element_of_concept_smell_to_elements_of_concept_defect_mas[count][0],SCWeb.core.Server._current_language).done(function (defect) {
									defect_set.push(defect);
								})
							}
						});
				});
			});
		}
	},
/*	_driving_feeling: function () {
		alert('1');
		var driving_feeling = document.getElementById("driving_feeling");
		if (driving_feeling.options[driving_feeling.selectedIndex].value != "Выберите поведение автомобиля") {
			alert('2');
			common_count++;
			var driving_feeling = driving_feeling.options[driving_feeling.selectedIndex].value;		
			SCWeb.core.Server.findIdentifiersSubStr(driving_feeling, function(driving_feeling_addr) {
				var driving_feeling_addr_numb = driving_feeling_addr.sys[0][0];
				SCWeb.core.Server.resolveScAddr(['nrel_driving_feeling'],function(keynodes){
					var nrel_driving_feeling_addr_numb = keynodes['nrel_driving_feeling'];
					window.sctpClient.iterate_elements(SctpIteratorType.SCTP_ITERATOR_5A_A_F_A_F,[
						sc_type_node,
						sc_type_arc_common | sc_type_const,
						driving_feeling_addr_numb,
						sc_type_arc_pos_const_perm,
						nrel_driving_feeling_addr_numb]).done(function(element_of_concept_driving_feeling_to_elements_of_concept_defect_mas){
							for (count = 0; count < element_of_concept_driving_feeling_to_elements_of_concept_defect_mas.length; count++){
								alert('3');
								window.scHelper.getIdentifier(element_of_concept_driving_feeling_to_elements_of_concept_defect_mas[count][0],SCWeb.core.Server._current_language).done(function (defect) {
									defect_set.push(defect);
								})
							}
						});
				});
			});
		}
	},*/
	_car_state: function (){
		var car_state = document.getElementById("car_state");
		if (car_state.options[car_state.selectedIndex].value != "Выберите состояние автомобиля") {
			common_count++;
			var car_state = car_state.options[car_state.selectedIndex].value;	
			SCWeb.core.Server.findIdentifiersSubStr(car_state, function(car_state_addr){
				var car_state_addr_numb = car_state_addr.sys[0][0];
				SCWeb.core.Server.resolveScAddr(['nrel_car_state'],function(keynodes){
				var nrel_car_state_addr_numb = keynodes['nrel_car_state'];
				window.sctpClient.iterate_elements(SctpIteratorType.SCTP_ITERATOR_5A_A_F_A_F,[
					sc_type_node,
					sc_type_arc_common | sc_type_const,
					car_state_addr_numb,
					sc_type_arc_pos_const_perm,
					nrel_car_state_addr_numb]).done(function(element_of_concept_car_state_to_elements_of_concept_defect_mas){
						for(count = 0; count < element_of_concept_car_state_to_elements_of_concept_defect_mas.length; count++){
							window.scHelper.getIdentifier(element_of_concept_car_state_to_elements_of_concept_defect_mas[count][0],SCWeb.core.Server._current_language).done(function(defect){
								defect_set.push(defect);
							})
						}
					})
				})
			})
		}
	},
	_car_behavior: function(){
		var car_behavior = document.getElementById("car_behavior");
		if (car_behavior.options[car_behavior.selectedIndex].value != "Выберите поведение автомобиля") {
			common_count++;
			var car_behavior = car_behavior.options[car_behavior.selectedIndex].value;	
			SCWeb.core.Server.findIdentifiersSubStr(car_behavior, function(car_behavior_addr) {
				var car_behavior_addr_numb = car_behavior_addr.sys[0][0];
				SCWeb.core.Server.resolveScAddr(['nrel_car_behavior'],function(keynodes){
					var nrel_car_behavior_addr_numb = keynodes['nrel_car_behavior'];
					window.sctpClient.iterate_elements(SctpIteratorType.SCTP_ITERATOR_5A_A_F_A_F,[
						sc_type_node,
						sc_type_arc_common | sc_type_const,
						car_behavior_addr_numb,
						sc_type_arc_pos_const_perm,
						nrel_car_behavior_addr_numb]).done(function(element_of_concept_car_behavior_to_elements_of_concept_defect_mas){
							for (count = 0; count < element_of_concept_car_behavior_to_elements_of_concept_defect_mas.length; count++){
								window.scHelper.getIdentifier(element_of_concept_car_behavior_to_elements_of_concept_defect_mas[count][0],SCWeb.core.Server._current_language).done(function (defect) {
									defect_set.push(defect);
								})
							}
						});
				});
			});
		}
	},
	_sort_defect_set: function () {
		var table = document.getElementById('defect_table');
		table.innerHTML = "";
		var result_defect_set = [];
		var control_count = 0;
		for (var count = 0; count < defect_set.length; count++){
			control_count = 0;	
			for (var count1 = 0; count1 < defect_set.length; count1++){
				if (defect_set[count] == defect_set[count1]) {
					control_count++;
				}
			}	
			if (control_count == common_count) {
				result_defect_set.push(defect_set[count])
			}
		}
		for (var count = 0; count < result_defect_set.length; count++){
			for (var count1 = count+1; count1 < result_defect_set.length; count1++){
				if (result_defect_set[count] == result_defect_set[count1]) {
					result_defect_set.splice(count1, 1);
					count1--;
				}
			}
		}
		for (count = 0; count < result_defect_set.length; count++) {
			table.innerHTML+='<tr><td>'+result_defect_set[count]+'</td></tr>';
		}
	}, 
}
