/**
 * Paint panel.
 */
model_set = [];
common_count = 0;

FindModel.PaintPanel = function (containerId) {
    this.containerId = containerId;
};

FindModel.PaintPanel.prototype = {

    init: function () {
        this._initMarkup(this.containerId);
    },

    _initMarkup: function (containerId) {
        var container = $('#' + containerId);

        var self = this;
		container.append('<div class="sc-no-default-cmd">Спецификация моделей автомобиля. Найди свою модель:</div>');
		container.append('Марка автомобиля:</br>');
		container.append('<select size="1"   id="auto_mark" style="width:300px" >\
						 <option disabled selected>Выберите марку автомобиля</option>\
						 <option value="concept_Volkswagen">Volkswagen</option>\
						 <option value="concept_Audi">Audi</option>\
						 <option value="concept_Mercedec">Mercedec</option>\
						 </select></br>');
	
		container.append('Кузов автомобиля:</br>');
		container.append('<select size="1"   id="car_body" style="width:300px" >\
						<option disabled selected>Выберите желаемый кузов</option>\
    					<option value="concept_sedan">Седан</option>\
    					<option value="concept_hatchback">Хэтчбек</option>\
    					<option value="concept_universal">Универсал</option>\
    					<option value="concept_crossover">Кроссовер</option>\
						</select></br>');

		container.append('Период производства:</br>');
		container.append('<select size="1"   id="production_period" style="width:300px" >\
						<option disabled selected>Выберите период производства</option>\
						<option value="concept_period_1993_1997">1993-1997</option>\
						<option value="concept_period_1998_2004">1998-2004</option>\
						<option value="concept_period_2005_2010">2005-2010</option>\
						<option value="concept_period_2011_2015">2011-2015</option>\
						<option value="concept_period_2016_2019">2016-2019</option>\
						</select></br>');
		
		container.append('</br><button id="pick_up_models" type="button">Найти модель</button></br>');
		container.append('</br><table id="model_table" border="1"></table>');
		container.append('</br><button id="clear" type="button">Сбросить</button></br>');

		$('#clear').click(function () {
			model_set = [];
			$("#model_table tr").remove();
			document.getElementById("auto_mark").options[0].selected=true;
			document.getElementById("car_body").options[0].selected=true;
			document.getElementById("production_period").options[0].selected=true;
		});
		$('#pick_up_models').click(function () {
			model_set = [];
			common_count = 0;	
			self._auto_mark();
			setTimeout(self._auto_mark, 1000);	
			setTimeout(self._car_body, 2000);	
			setTimeout(self._production_period, 3000);
			setTimeout(self._sort_model_set, 4000);
		});
    },
	_auto_mark: function () {
		var auto_mark = document.getElementById("auto_mark");
		if (auto_mark.options[auto_mark.selectedIndex].value != "Выберите марку автомобиля") {
			common_count++;
			var auto_mark = auto_mark.options[auto_mark.selectedIndex].value;
			SCWeb.core.Server.findIdentifiersSubStr(auto_mark, function(auto_mark_addr) {
				var auto_mark_addr_numb = auto_mark_addr.sys[0][0];
				SCWeb.core.Server.resolveScAddr(['nrel_auto_mark'],function(keynodes){
					var nrel_auto_mark_addr_numb = keynodes['nrel_auto_mark'];
					window.sctpClient.iterate_elements(SctpIteratorType.SCTP_ITERATOR_5A_A_F_A_F,[
						sc_type_node,
						sc_type_arc_common | sc_type_const,
						auto_mark_addr_numb,
						sc_type_arc_pos_const_perm,
						nrel_auto_mark_addr_numb]).done(function(element_of_concept_auto_mark_to_elements_of_concept_model_mas){
							for (count = 0; count < element_of_concept_auto_mark_to_elements_of_concept_model_mas.length; count++){
								window.scHelper.getIdentifier(element_of_concept_auto_mark_to_elements_of_concept_model_mas[count][0],SCWeb.core.Server._current_language).done(function(model) {
									model_set.push(model);
								})
							}
						});
				});
			});
		}
	},
	_car_body: function () {
		var car_body = document.getElementById("car_body");
		if (car_body.options[car_body.selectedIndex].value != "Выберите желаемый кузов") {
			common_count++;
			var car_body = car_body.options[car_body.selectedIndex].value;
			SCWeb.core.Server.findIdentifiersSubStr(car_body, function(car_body_addr) {
				var car_body_addr_numb = car_body_addr.sys[0][0];
				SCWeb.core.Server.resolveScAddr(['nrel_car_body'],function(keynodes){
					var nrel_car_body_addr_numb = keynodes['nrel_car_body'];
					window.sctpClient.iterate_elements(SctpIteratorType.SCTP_ITERATOR_5A_A_F_A_F,[
						sc_type_node,
						sc_type_arc_common | sc_type_const,
						car_body_addr_numb,
						sc_type_arc_pos_const_perm,
						nrel_car_body_addr_numb]).done(function(element_of_concept_car_body_to_elements_of_concept_model_mas){
							for (count = 0; count < element_of_concept_car_body_to_elements_of_concept_model_mas.length; count++){
								window.scHelper.getIdentifier(element_of_concept_car_body_to_elements_of_concept_model_mas[count][0],SCWeb.core.Server._current_language).done(function(model) {
									model_set.push(model);
								})
							}
						});
				});
			});
		}
	},
	_production_period: function (){
		var production_period = document.getElementById("production_period");
		if (production_period.options[production_period.selectedIndex].value != "Выберите приемлемый период производства") {
			common_count++;
			var production_period = production_period.options[production_period.selectedIndex].value;	
			SCWeb.core.Server.findIdentifiersSubStr(production_period, function(production_period_addr){
				var production_period_addr_numb = production_period_addr.sys[0][0];
				SCWeb.core.Server.resolveScAddr(['nrel_production_period'],function(keynodes){
				var nrel_production_period_addr_numb = keynodes['nrel_production_period'];
				window.sctpClient.iterate_elements(SctpIteratorType.SCTP_ITERATOR_5A_A_F_A_F,[
					sc_type_node,
					sc_type_arc_common | sc_type_const,
					production_period_addr_numb,
					sc_type_arc_pos_const_perm,
					nrel_production_period_addr_numb]).done(function(element_of_concept_production_period_to_elements_of_concept_model_mas){
						for(count = 0; count < element_of_concept_production_period_to_elements_of_concept_model_mas.length; count++){
							window.scHelper.getIdentifier(element_of_concept_production_period_to_elements_of_concept_model_mas[count][0],SCWeb.core.Server._current_language).done(function(model){
								model_set.push(model);
							})
						}
					});
				});
			});
		}
	},
	_sort_model_set: function () {
		var table = document.getElementById('model_table');
		table.innerHTML = "";
		var result_model_set = [];
		var control_count = 0;
		for (var count = 0; count < model_set.length; count++){
			control_count = 0;	
			for (var count1 = 0; count1 < model_set.length; count1++){
				if (model_set[count] == model_set[count1]) {
					control_count++;
				}
			}	
			if (control_count == common_count) {
				result_model_set.push(model_set[count])
			}
		}
		for (var count = 0; count < result_model_set.length; count++){
			for (var count1 = count+1; count1 < result_model_set.length; count1++){
				if (result_model_set[count] == result_model_set[count1]) {
					result_model_set.splice(count1, 1);
					count1--;
				}
			}
		}
		for (count = 0; count < result_model_set.length; count++) {
			table.innerHTML+='<tr><td>'+result_model_set[count]+'</td></tr>';
		}
	}, 
}
