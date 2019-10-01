/**
 * Paint panel.
 */
car_set = [];
common_count = 0;

oil_rep_km = [];
oil_rep_month = [];
air_filter_rep_km = [];
air_filter_rep_month = [];
fuel_filter_rep_km = [];
fuel_filter_rep_month = [];
spark_plug_trans_rep_km = [];
spark_plug_trans_rep_month = [];
grm_rep_km = [];
grm_rep_month = [];
coolant_rep_km = [];
coolant_rep_month = [];
cabin_filter_rep_km = [];
cabin_filter_rep_month = [];
oil_trans_rep_km = [];
oil_trans_rep_month = [];

 //var container = $('#' + containerId);

AutoHelp.PaintPanel = function (containerId) {
    this.containerId = containerId;
};
//var container = $('#' + containerId);
AutoHelp.PaintPanel.prototype = {

    init: function () {
		this._initMarkup(this.containerId);
		//this._get_model(this.containerId);
    },

    _initMarkup: function (containerId) {
        var container = $('#' + containerId);

        var self = this;
        container.append('<div class="sc-no-default-cmd">Help-система для автомобилиста</div>');
		container.append('Выберете марку::</br>');
		container.append('<select size="1"   id="markaSel" style="width:230px" > <option disabled selected>Выберите марку</option>\
    					<option value="Audi">Audi</option>\
    					<option value="BMW">BMW</option>\
    					<option value="Volkswagen">Volkswagen</option>\
					   </select></br>');
					   container.append('Выберете модель::</br>');
					   container.append('<select size="1"   id="modelSel" style="width:230px" >\
									  <option disabled selected>Выберите модель</option>\
									  <option value="Golf">Golf</option>\
									  <option value="Jetta">Jetta</option>\
									  <option value="Passat">Passst</option>\
									 </select></br>');
					   container.append('Выберете год выпуска:</br>');	
					   container.append('<select size="1"   id="yaerSel" style="width:230px" >\
					   <option disabled selected>Выберите год выпуска</option>\
					   <option value="2018">2018</option>\
					   <option value="2017">2017</option>\
					   <option value="2016">2016</option>\
					   <option value="2015">2015</option>\
					   <option value="2014">2014</option>\
					   <option value="2013">2013</option>\
					   <option value="2012">2012</option>\
					   <option value="2011">2011</option>\
					   <option value="2010">2010</option>\
					   <option value="2009">2009</option>\
					   <option value="2008">2008</option>\
					   <option value="2007">2007</option>\
					   <option value="2006">2006</option>\
					   <option value="2005">2005</option>\
					   <option value="2004">2004</option>\
					   <option value="2003">2003</option>\
					   <option value="2002">2002</option>\
					   <option value="2001">2001</option>\
					   <option value="2000">2000</option>\
					   <option value="1999">1999</option>\
					   <option value="1998">1998</option>\
					   <option value="1997">1997</option>\
					   <option value="1996">1996</option>\
					   <option value="1995">1995</option>\
					   <option value="1994">1994</option>\
					   <option value="1993">1993</option>\
					  </select></br>');	
			   
					  container.append('Выберете модификацию:</br>');
					   container.append('<select size="1"   id="modifSel" style="width:230px" >\
									  <option disabled selected>Выберите модификацию</option>\
									  <option value="VW_Golf_3_5d_1992_1997_h_1781_90hp">VW_Golf_3_5d_1992_1997_h_1781_90hp</option>\
									  <option value="VW_Golf_3_5d_1992_1997_h_1984_115hp">VW_Golf_3_5d_1992_1997_h_1984_115hp</option>\
									 </select></br>');
					  
					  container.append('Введите текущий пробег автомобиля:</br>');
					   container.append('<input type="text" value="" id="mileage" placeholder="Введите пробег"  /></br>');
					   /*ntainer.append('Модель:</br>');
					   container.append('<input type="text" value="" id="model" /></br>');
					   container.append('Год производства:</br>');
					   container.append('<input type="text" value="" id="manufacture_year" /></br>');
					   container.append('Объём двигателя:</br>');
					   container.append('<input type="text" value="" id="engine_volume_number" /></br>');
					   container.append('Тип кузова:</br>');
					   container.append('<input type="text" value="" id="car_body" /></br>');
					   container.append('Тип коробки передач:</br>');
					   container.append('<input type="text" value="" id="transmission_principle_of_operations" /></br>');
					   container.append('Тип топлива:</br>');
					   container.append('<input type="text" value="" id="fuel" /></br>');
					   container.append('Тип привода:</br>');
					   container.append('<input type="text" value="" id="drive_unit" /></br>');*/
					   //container.append('<button id="pick_up_cars" type="button">Отправить</button></br>');
					  // container.append('</br><table id="car_table" border="1"></table>');
					  container.append('Как давно вы меняли масло и масляной фильтр? (Если Вы не знаете укажите в пробеге 0)</br>');
			container.append('Укажите дату:');
			container.append('<br><input type = "date" name = "dateOil"><br>');
			container.append('Укажите пробег:');
			container.append(' <input type="text" id = "milOil" size="10"></br>');
			container.append('Как давно вы меняли салонный фильтр? (Если Вы не знаете укажите в пробеге 0)</br>');
			container.append('Укажите дату:');
			container.append('<br><input type = "date" name = "dateSalFil"><br>');
			container.append('Укажите пробег:');
			container.append('<input type="text" id = "milSalFil"size="10"></br>');
			container.append('Как давно вы меняли воздушный фильтр? (Если Вы не знаете укажите в пробеге 0)</br>');
			container.append('Укажите дату:');
			container.append('<br><input type = "date" name = "dateAirFil"><br>');
			container.append('Укажите пробег:');
			container.append('<input type="text" id = "milAirFil" size="10"></br>');
			container.append('Как давно вы меняли ремень ГРМ/ цепь? (Если Вы не знаете укажите в пробеге 0)</br>');
			container.append('Укажите дату:');
			container.append('<br><input type = "date" name = "dateGRM"><br>');
			container.append('Укажите пробег:');
			container.append('<input type="text" id = "milGRM" size="10"></br>');
			container.append('Как давно вы меняли охлаждающую жидкость двигателя? (Если Вы не знаете укажите в пробеге 0)</br>');
			container.append('Укажите дату:');
			container.append('<br><input type = "date" name = "dateCool"><br>');
			container.append('Укажите пробег:');
			container.append('<input type="text" id = "milCool" size="10"></br>');
			container.append('Как давно вы меняли свечи зажигания? (Если Вы не знаете укажите в пробеге 0)</br>');
			container.append('Укажите дату:');
			container.append('<br><input type = "date" name = "dateSparkPlag"><br>');
			container.append('Укажите пробег:');
			container.append('<input type="text" id = "milSparkPlag" size="10"></br>');
			container.append('Как давно вы меняли топливный фильтр? (Если Вы не знаете укажите в пробеге 0)</br>');
			container.append('Укажите дату:');
			container.append('<br><input type = "date" name = "dateFuelFiit"><br>');
			container.append('Укажите пробег:');
			container.append('<input type="text" id = "milFuelFilt" size="10"></br>');
			container.append('Как давно вы меняли масло в коробке? (Если Вы не знаете укажите в пробеге 0)</br>');
			container.append('Укажите дату:');
			container.append('<br><input type = "date" name = "dateOilTrans"><br>');
			container.append('Укажите пробег:');
			container.append('<input type="text" id = "milOilTrans" size="10"></br>');
			container.append('<button id="sendQuestBut" type="button">Отправить</button></br>');
			
			container.append('</br><table id="car_table" border="1"></table>');	

		$('#pick_up_cars').click(function () {
			car_brand_list = [];
			car_model_list = [];
			car_set = [];
			common_count = 0;

			/*container.append('Как давно вы меняли масло и масляной фильтр? (Если Вы не знаете укажите в пробеге 0)</br>');
			container.append('Укажите дату:');
			container.append('<br><input type = "date" name = "dateOil"><br>');
			container.append('Укажите пробег:');
			container.append(' <input type="text" id = "milOil" size="10"></br>');
			container.append('Как давно вы меняли салонный фильтр? (Если Вы не знаете укажите в пробеге 0)</br>');
			container.append('Укажите дату:');
			container.append('<br><input type = "date" name = "dateSalFil"><br>');
			container.append('Укажите пробег:');
			container.append('<input type="text" id = "milSalFil"size="10"></br>');
			container.append('Как давно вы меняли воздушный фильтр? (Если Вы не знаете укажите в пробеге 0)</br>');
			container.append('Укажите дату:');
			container.append('<br><input type = "date" name = "dateAirFil"><br>');
			container.append('Укажите пробег:');
			container.append('<input type="text" id = "milAirFil" size="10"></br>');
			container.append('Как давно вы меняли ремень ГРМ/ цепь? (Если Вы не знаете укажите в пробеге 0)</br>');
			container.append('Укажите дату:');
			container.append('<br><input type = "date" name = "dateGRM"><br>');
			container.append('Укажите пробег:');
			container.append('<input type="text" id = "milGRM" size="10"></br>');
			container.append('Как давно вы меняли охлаждающую жидкость двигателя? (Если Вы не знаете укажите в пробеге 0)</br>');
			container.append('Укажите дату:');
			container.append('<br><input type = "date" name = "dateCool"><br>');
			container.append('Укажите пробег:');
			container.append('<input type="text" id = "milCool" size="10"></br>');
			container.append('Как давно вы меняли свечи зажигания? (Если Вы не знаете укажите в пробеге 0)</br>');
			container.append('Укажите дату:');
			container.append('<br><input type = "date" name = "dateSparkPlag"><br>');
			container.append('Укажите пробег:');
			container.append('<input type="text" id = "milSparkPlag" size="10"></br>');
			container.append('Как давно вы меняли топливный фильтр? (Если Вы не знаете укажите в пробеге 0)</br>');
			container.append('Укажите дату:');
			container.append('<br><input type = "date" name = "dateFuelFiit"><br>');
			container.append('Укажите пробег:');
			container.append('<input type="text" id = "milFuelFilt" size="10"></br>');
			container.append('Как давно вы меняли масло в коробке? (Если Вы не знаете укажите в пробеге 0)</br>');
			container.append('Укажите дату:');
			container.append('<br><input type = "date" name = "dateOilTrans"><br>');
			container.append('Укажите пробег:');
			container.append('<input type="text" id = "milOilTrans" size="10"></br>');
			container.append('<button id="sendQuestBut" type="button">Отправить</button></br>');
			
			container.append('</br><table id="car_table" border="1"></table>');	*/
			//alert("work");
			//self._get_oil_repl();	
			//setTimeout(self._get_oil_repl, 1000);
			//setTimeout(self._manufacture_year, 2000);
			//setTimeout(self._engine_volume_number, 3000);
			//setTimeouzeout(self._transmission,5000);
			//setTimeout(self._fuel,6000);
			//setTimeout(self._drive_unit,7000);
			//setTimeout(self._sort_car_set, 8000);
		});
		 /*var marka_select = document.getElementById("markaSel");
		$('#markaSel').change (function () {
			//car_brand_list = [];
			//car_model_list = [];
			//var concept_model_mas = [];
			//car_set = [];
			//common_count = 0;	
			//alert("work");
			//self._get_oil_repl();	
			self._get_model();	
			//setTimeout(self._model, 1000);
			//setTimeout(self._get_oil_repl, 1000);
			//setTimeout(self._manufacture_year, 2000);
			//setTimeout(self._engine_volume_number, 3000);
			//setTimeouzeout(self._transmission,5000);
			//setTimeout(self._fuel,6000);
			//setTimeout(self._drive_unit,7000);
			//setTimeout(self._sort_car_set, 8000);
		});
		var marka_select = document.getElementById("modelSel");
		$('#modelSel').change (function () {
			//car_brand_list = [];
			//car_model_list = [];
			//var concept_model_mas = [];
			//car_set = [];
			//common_count = 0;	
			//alert("work");
			//self._get_oil_repl();	
			//self._get_model();	
			self._model();
			//setTimeout(self._get_oil_repl, 1000);
			//setTimeout(self._manufacture_year, 2000);
			//setTimeout(self._engine_volume_number, 3000);
			//setTimeouzeout(self._transmission,5000);
			//setTimeout(self._fuel,6000);
			//setTimeout(self._drive_unit,7000);
			//setTimeout(self._sort_car_set, 8000);
		});*/

		$('#sendQuestBut').click(function () {
			oil_rep_km = [];
			oil_rep_month = [];
			air_filter_rep_km = [];
			air_filter_rep_month = [];
			fuel_filter_rep_km = [];
			fuel_filter_rep_month = [];
			spark_plug_trans_rep_km = [];
			spark_plug_trans_rep_month = [];
			grm_rep_km = [];
			grm_rep_month = [];
			coolant_rep_km = [];
			coolant_rep_month = [];
			cabin_filter_rep_km = [];
			cabin_filter_rep_month = [];
			oil_trans_rep_km = [];
			oil_trans_rep_month = [];	


			self._get_oil_repl();
			setTimeout(self._get_air_filter_repl, 500);
			setTimeout(self._get_fuel_filter_repl, 1000);
			setTimeout(self._get_spark_plug_repl, 1500);
			setTimeout(self._get_grm_repl,2000);
			setTimeout(self._get_coolant_repl,2500);
			setTimeout(self._get_cabin_filter_repl,3000);
			setTimeout(self._get_gearbox_oil_repl, 3500);
			setTimeout(self._calculate, 4000);

		});

	
	},
	
	_calculate: function () {
		var date = new Date();
		var dateMilisec = date.getTime();
		var probeg = document.getElementById('mileage').value;
		var table = document.getElementById('car_table');
		var oilHTML =  '<table border= \" 1\"> <tr> <th>Спектр проводимых работ </th> \
		<th>Рекомендация</th> <th>Комментарий</th> </tr>';

//--------------------------------------------------------------------------------------------------------------------		
		oilHTML += '<tr> <td > Замена масла и масляного фильтра </td> ';
		var oilRep = 0;
	   if ( document.getElementById('milOil').value != ""){
	 	   var oil__km = document.getElementById('milOil').value;
	 	   if (oil__km ==  0){
					oilHTML += '<td>Посетить станцию технического обслуживания</td>';	
					oilRep = -5;	
	 	   }
			   oil__km = probeg - oil__km;
			   if (oil__km > oil_rep_km[0]){
				 //  oilHTML += '<td>Требуется замена масла</td>';
				 oilRep++;
			   }
			   /*else{
				   oilHTML += '<td> Замена масла не требуется</td>';
			   }*/
	   }
	   
	   
		if ( document.querySelector('input[name = dateOil]').value != null){
			var oil_month = document.querySelector('input[name = dateOil]').value;

			var year = parseInt(oil_month.substring(0,4));
    		var month = parseInt(oil_month.substring(5,7));
    		var day = parseInt(oil_month.substring(8,10));
    		var milisecYear = (year - 1970)*31536000000 + month*30*86400000  + (day-15) *86400000 ;
    		var resultDay = Math.trunc ( (dateMilisec - milisecYear) / 24 / 60 / 60 /1000);
			console.log(resultDay);
			console.log(oil_rep_month[0]*30);
    		if (resultDay > oil_rep_month[0]*30) {
    			oilRep++;
    		}

		}
			if(oilRep > 0){
				oilHTML += '<td>Требуется замена масла</td>';		
			}
			if(oilRep == 0){
				oilHTML += '<td> Замена масла не требуется</td>';	
			}
		oilHTML += '<td > Замену моторного масла и масляного фильтра стоит проводить каждые 7000 км или 10 месяцев </td></tr>';

//--------------------------------------------------------------------------------------------------------------------
		oilHTML += '<tr> <td > Замена воздушного фильтра </td> ';
		var airFiltRep = 0;
		if ( document.getElementById('milAirFil').value != ""){
			var air_filter_km =  document.getElementById('milAirFil').value;
			if (air_filter_km ==  0){
					oilHTML += '<td>Посетить станцию технического обслуживания</td>';	
					airFiltRep = -5;	
	 	   }
			   air_filter_km = probeg - air_filter_km;
			   if (air_filter_km > air_filter_rep_km[0]){
				   //oilHTML += '<td>Требуется замена воздушного фильтра</td>';
				   airFiltRep++;
			   }
			   /*else{
				   oilHTML += '<td> Замена воздушного фильтра не требуется</td>';
			   }*/
		}
		
		if ( document.getElementById('dateAirFil')!= ""){
			var air_filter_month =  document.querySelector('input[name = dateAirFil]').value;
			var year = parseInt(air_filter_month.substring(0,4));
    		var month = parseInt(air_filter_month.substring(5,7));
    		var day = parseInt(air_filter_month.substring(8,10));
    		var milisecYear = (year - 1970)*31536000000 + month*30*86400000  + (day-15) *86400000 ;
    		var resultDay = Math.trunc ( (dateMilisec - milisecYear) / 24 / 60 / 60 /1000);

    		if (resultDay > air_filter_rep_month[0]) {
    			airFiltRep++;
    		}
		}
		if(airFiltRep > 0){
				oilHTML += '<td>Требуется замена воздушного фильтра</td>';		
			}
			if(airFiltRep == 0){
				oilHTML += '<td> Замена воздушного фильтра не требуется</td>';	
			}

		oilHTML += '<td >Замену воздушного фильтра стоит проводить каждые 25000 км. или 21 месяц </td></tr>';
//--------------------------------------------------------------------------------------------------------------------

		oilHTML += '<tr> <td > Замена топливного фильтра </td> ';
		var fuelFiltRep = 0;
		if ( document.getElementById('milFuelFilt').value != ""){
			var fuel_filter_km =  document.getElementById('milFuelFilt').value;
			if (fuel_filter_km  ==  0){
					oilHTML += '<td>Посетить станцию технического обслуживания</td>';
					fuelFiltRep = -5;		
	 	   }
			   fuel_filter_km = probeg - fuel_filter_km;
			   if (fuel_filter_km > fuel_filter_rep_km[0]){
			   	fuelFiltRep++;
				  // oilHTML += '<td>Требуется замена воздушного фильтра</td>';
			   }
			   /*else{
				   oilHTML += '<td> Замена воздушного фильтра не требуется</td>';
			   }*/
		}

		if ( document.querySelector('input[name = dateFuelFiit]')!= ""){
			var fuel_filter_month =  document.querySelector('input[name = dateFuelFiit]').value;
			var year = parseInt(fuel_filter_month.substring(0,4));
    		var month = parseInt(fuel_filter_month.substring(5,7));
    		var day = parseInt(fuel_filter_month.substring(8,10));
    		var milisecYear = (year - 1970)*31536000000 + month*30*86400000  + (day-15) *86400000 ;
    		var resultDay = Math.trunc ( (dateMilisec - milisecYear) / 24 / 60 / 60 /1000);

    		if (resultDay > fuel_filter_rep_month[0]) {
    			fuelFiltRep++;
    		}
		}
		if(fuelFiltRep > 0){
				oilHTML += '<td>Требуется замена топливного фильтра</td>';		
			}
			if(fuelFiltRep == 0){
				oilHTML += '<td> Замена топливного фильтра не требуется</td>';	
			}

		oilHTML += '<td >Замену топливного фильтра стоит проводить каждые 83000 км. или 66 месяцев </td></tr>';

//--------------------------------------------------------------------------------------------------------------------
		oilHTML += '<tr> <td > Замена  свечей зажигания </td> '
		var sparkPlugRep = 0;
		if ( document.getElementById('milSparkPlag').value != ""){
			var spark_plug_trans_km =  document.getElementById('milSparkPlag').value;
			if (spark_plug_trans_km ==  0){
					oilHTML += '<td>Посетить станцию технического обслуживания</td>';
					sparkPlugRep = -5;		
	 	   }
			   spark_plug_trans_km = probeg - spark_plug_trans_km;
			   if (spark_plug_trans_km > spark_plug_trans_rep_km[0]){
			   		sparkPlugRep++;
				   //oilHTML += '<td>Требуется замена воздушного фильтра</td>';
			   }
			   /*else{
				   oilHTML += '<td> Замена воздушного фильтра не требуется</td>';
			   }*/
		}
		if ( document.querySelector('input[name = dateSparkPlag]')!= ""){
			var spark_plug_month =  document.querySelector('input[name = dateSparkPlag]').value;
			var year = parseInt(spark_plug_month.substring(0,4));
    		var month = parseInt(spark_plug_month.substring(5,7));
    		var day = parseInt(spark_plug_month.substring(8,10));
    		var milisecYear = (year - 1970)*31536000000 + month*30*86400000  + (day-15) *86400000 ;
    		var resultDay = Math.trunc ( (dateMilisec - milisecYear) / 24 / 60 / 60 /1000);

    		if (resultDay > spark_plug_trans_rep_month[0]) {
    			sparkPlugRep++;
    		}
		}
		if(sparkPlugRep > 0){
				oilHTML += '<td>Требуется замена свечей зажигания фильтра</td>';		
			}
			if(sparkPlugRep == 0){
				oilHTML += '<td> Замена свечей зажигания не требуется</td>';	
			}

		oilHTML += '<td >Замену свечей зажигания стоит проводить каждые 27000 км. или 27 месяцев </td></tr>';
//--------------------------------------------------------------------------------------------------------------------
		oilHTML += '<tr> <td > Замена ремень ГРМ/ цепь </td> '
		var GRMRep = 0;

		if ( document.getElementById('milGRM').value != ""){
			var grm_km =  document.getElementById('milGRM').value;
			if (grm_km ==  0){
					oilHTML += '<td>Посетить станцию технического обслуживания</td>';	
					GRMRep = -5;	
	 	   }
			   grm_km = probeg - grm_km
			   if (grm_km > grm_rep_km[0]){
			   	GRMRep++;
				  // oilHTML += '<td>Требуется замена воздушного фильтра</td>';
			   }
			  /* else{
				   oilHTML += '<td> Замена воздушного фильтра не требуется</td>';
			   }*/
		}
		if ( document.querySelector('input[name = dateGRM]')!= ""){
			var grm_month =  document.querySelector('input[name = dateGRM]').value;
			var year = parseInt(grm_month.substring(0,4));
    		var month = parseInt(grm_month.substring(5,7));
    		var day = parseInt(grm_month.substring(8,10));
    		var milisecYear = (year - 1970)*31536000000 + month*30*86400000  + (day-15) *86400000 ;
    		var resultDay = Math.trunc ( (dateMilisec - milisecYear) / 24 / 60 / 60 /1000);

    		if (resultDay > grm_rep_month[0]) {
    			GRMRep++;
    		}
		}
		if(GRMRep > 0){
				oilHTML += '<td>Требуется замена ремня ГРМ/цепи </td>';		
			}
			if(GRMRep == 0){
				oilHTML += '<td> Замена ремня ГРМ/цепи не требуется</td>';	
			}

		oilHTML += '<td >Замену ремня ГРМ/цепи стоит проводить каждые 25000 км. или 23 месяца </td></tr>';
//--------------------------------------------------------------------------------------------------------------------
		oilHTML += '<tr> <td > Замена охлаждающей жидкости </td> '
		var CoolRep = 0;		
		if ( document.getElementById('milCool').value != ""){
			var coolant_km =  document.getElementById('milCool').value;
			if (coolant_km ==  0){
					oilHTML += '<td>Посетить станцию технического обслуживания</td>';	
					CoolRep = -5;	
	 	   }
			   coolant_km = probeg - coolant_km;
			   if (coolant_km > coolant_rep_km[0]){
			   	CoolRep++;
				   //oilHTML += '<td>Требуется замена воздушного фильтра</td>';
			   }
			   /*else{
				   oilHTML += '<td> Замена воздушного фильтра не требуется</td>';
			   }*/
		}
		if ( document.querySelector('input[name = dateCool]')!= ""){
			var cool_mounth =  document.querySelector('input[name = dateCool]').value;
			var year = parseInt(cool_mounth.substring(0,4));
    		var month = parseInt(cool_mounth.substring(5,7));
    		var day = parseInt(cool_mounth.substring(8,10));
    		var milisecYear = (year - 1970)*31536000000 + month*30*86400000  + (day-15) *86400000 ;
    		var resultDay = Math.trunc ( (dateMilisec - milisecYear) / 24 / 60 / 60 /1000);

    		if (resultDay > coolant_rep_month[0]) {
    			CoolRep++;
    		}
		}
		if(CoolRep > 0){
				oilHTML += '<td>Требуется замена охлаждающей жидкости </td>';		
			}
			if(CoolRep == 0){
				oilHTML += '<td> Замена охлаждающей жидкости не требуется</td>';	
			}

		oilHTML += '<td >Замену охлаждающей жидкости двигателя стоит проводить каждые 67000 км. или 36 месяцев </td></tr>';
//--------------------------------------------------------------------------------------------------------------------
		oilHTML += '<tr> <td > Замена салонного фильтра </td> '
		var SalFiltRep = 0		
		if ( document.getElementById('milSalFil').value != ""){
			var cabin_filter_km =  document.getElementById('milSalFil').value;
			if (cabin_filter_km ==  0){
					oilHTML += '<td>Посетить станцию технического обслуживания</td>';
					SalFiltRep = -5;		
	 	   }
			   cabin_filter_km = probeg - cabin_filter_km;
			   if (cabin_filter_km > cabin_filter_rep_km[0]){
			   	SalFiltRep++;
				   //oilHTML += '<td>Требуется замена воздушного фильтра</td>';
			   }
			   /*else{
				   oilHTML += '<td> Замена воздушного фильтра не требуется</td>';
			   }*/
		}
		if ( document.querySelector('input[name = dateSalFil]')!= ""){
		var sal_fil_mounth =  document.querySelector('input[name = dateSalFil]').value;
			var year = parseInt(sal_fil_mounth.substring(0,4));
    		var month = parseInt(sal_fil_mounth.substring(5,7));
    		var day = parseInt(sal_fil_mounth.substring(8,10));
    		var milisecYear = (year - 1970)*31536000000 + month*30*86400000  + (day-15) *86400000 ;
    		var resultDay = Math.trunc ( (dateMilisec - milisecYear) / 24 / 60 / 60 /1000);

    		if (resultDay > cabin_filter_rep_month[0]) {
    			SalFiltRep++;
    		}
		}
		if(SalFiltRep > 0){
				oilHTML += '<td>Требуется замена фильтра салона </td>';		
			}
			if(SalFiltRep == 0){
				oilHTML += '<td> Замена фильтра салона не требуется</td>';	
			}

		oilHTML += '<td >Замену салонного фильтра стоит проводить каждые 24000 км. или 17 месяцев </td></tr>';
//--------------------------------------------------------------------------------------------------------------------
		oilHTML += '<tr> <td > Замена масла в коробке передач </td> '
		var OilTransRep = 0		
		
		if ( document.getElementById('milOilTrans').value != ""){
			var oil_trans_km =  document.getElementById('milOilTrans').value;
			if (oil_trans_km ==  0){
					oilHTML += '<td>Посетить станцию технического обслуживания</td>';
					OilTransRep = -5;		
	 	   }
			   oil_trans_km = probeg - oil_trans_km;
			   if (oil_trans_km > oil_trans_rep_km[0]){
			   	OilTransRep++;
				   //oilHTML += '<td>Требуется замена воздушного фильтра</td>';
			   }
			   /*else{
				   oilHTML += '<td> Замена воздушного фильтра не требуется</td>';
			   }*/
		}
		if ( document.querySelector('input[name = dateOilTrans]')!= ""){
			var oil_trans_mounth =  document.querySelector('input[name = dateOilTrans]').value;
			var year = parseInt(oil_trans_mounth.substring(0,4));
    		var month = parseInt(oil_trans_mounth.substring(5,7));
    		var day = parseInt(oil_trans_mounth.substring(8,10));
    		var milisecYear = (year - 1970)*31536000000 + month*30*86400000  + (day-15) *86400000 ;
    		var resultDay = Math.trunc ( (dateMilisec - milisecYear) / 24 / 60 / 60 /1000);

    		if (resultDay > oil_trans_rep_month[0]) {
    			OilTransRep++;
    		}
		}
		if(OilTransRep > 0){
				oilHTML += '<td>Требуется замена масла в коробке </td>';		
			}
			if(OilTransRep == 0 ){
				oilHTML += '<td> Замена масла в коробке не требуется</td>';	
			}

		oilHTML += '<td >Замену масла в коробке передач стоит проводить каждые 35000 км или 31 месяц </td></tr>';

		oilHTML += '</table>';

		table.innerHTML = oilHTML;
		//var table = document.getElementById('car_table');
		//table.innerHTML = "";

		/*var temp_oil = probeg - oil__km;
		table.innerHTML+='<tr><td>'+temp_oil+'</td></tr>';*/

	},


 
    _get_model: function (containerId) {
		var container = $('#' + containerId);
    	var table = document.getElementById('car_table');
		table.innerHTML = "";
		var containerInp = '<select size="1"   id="modelSel" style="width:230px" >';
		containerInp += '<option disabled selected>Выберите модель</option>';
		
		//if (document.getElementById('markaSel').value != "") {
			common_count++;
			var concept_model_mas = [];
			var marka_select = document.getElementById("markaSel");
			var car_brand = marka_select.options[marka_select.selectedIndex].value;
			
			//var mas_of_elements_of_concept_car = [];
			SCWeb.core.Server.findIdentifiersSubStr(car_brand,function(car_brand_addr) {
				var car_brand_addr_numb = car_brand_addr.sys[0][0];
				SCWeb.core.Server.resolveScAddr(['nrel_model_type'],function(keynodes){
					var nrel_model_type_addr_numb = keynodes['nrel_model_type'];
					//var nrel_car_modification_type_addr_numb = keynodes['nrel_car_modification_type'];
					//var nrel_inclusion_addr_numb = keynodes['nrel_inclusion'];
					window.sctpClient.iterate_elements(SctpIteratorType.SCTP_ITERATOR_5F_A_A_A_F,[
						car_brand_addr_numb,
						sc_type_arc_common | sc_type_const,
						sc_type_node,
						sc_type_arc_pos_const_perm,
						nrel_model_type_addr_numb]).done(function(concept_car_brand_to_concept_model_mas){
								//container.append('Выберете модель:</br>');

							for (var count = 0; count < concept_car_brand_to_concept_model_mas.length; count++) {
								//concept_model_mas.push(concept_car_brand_to_concept_model_mas[0][2]);
								window.scHelper.getIdentifier(concept_car_brand_to_concept_model_mas[count][2],SCWeb.core.Server._current_language).done(function (model_sel) {
									concept_model_mas.push (model_sel);
									table.innerHTML+='<tr><td>'+model_sel+'</td></tr>';
									console.log ('<option value="' + model_sel + '">'+ model_sel + '</option>' );
									var qwer = '<option value="' + model_sel + '">'+ model_sel + '</option>' ;
									console.log (qwer);
									containerInp += qwer;
									container.append(containerInp);
									/*containerInp += '<option value="';
									containerInp += model_sel;
									containerInp += '">';
									containerInp += model_sel;
									containerInp += '</option>';*/
								})
								console.log(containerInp);
							}
							console.log(containerInp);
						});
				});
			});
			setTimeout (console.log("sleep"), 10000);
		//};
		/*console.log(concept_model_mas.length);
		for (var result = 0; result< concept_model_mas.length; result++){
			containerInp += '<option value="';
									containerInp += concept_model_mas[result];
									containerInp += '">';
									containerInp += concept_model_mas[result];
									containerInp += '</option>';	
		}*/
		console.log(containerInp);
		//container.append(containerInp);*/
	},	



	_model: function() {
		//if (document.getElementById('model').value != "") {
			common_count++;
			var table = document.getElementById('car_table');
		table.innerHTML = "";
			var model = document.getElementById('modelSel').value;
			var mas_of_elements_of_concept_car = [];
			SCWeb.core.Server.findIdentifiersSubStr(model, function(model_addr) {
				var model_addr_numb = model_addr.sys[0][0];
				SCWeb.core.Server.resolveScAddr(['nrel_car_modification_type','nrel_inclusion'],function(keynodes){
					var nrel_car_modification_type_addr_numb = keynodes['nrel_car_modification_type'];
					var nrel_inclusion_addr_numb = keynodes['nrel_inclusion'];
					window.sctpClient.iterate_elements(SctpIteratorType.SCTP_ITERATOR_5F_A_A_A_F,[
						model_addr_numb,
						sc_type_arc_common | sc_type_const,
						sc_type_node,
						sc_type_arc_pos_const_perm,
						nrel_car_modification_type_addr_numb]).done(function(concept_model_to_elements_of_concept_car_mas){
							for (var count = 0; count < concept_model_to_elements_of_concept_car_mas.length; count++){
								mas_of_elements_of_concept_car.push(concept_model_to_elements_of_concept_car_mas[0][2]);
							}
							for (var count = 0; count < mas_of_elements_of_concept_car.length; count++) {
								window.sctpClient.iterate_elements(SctpIteratorType.SCTP_ITERATOR_5F_A_A_A_F,[
									mas_of_elements_of_concept_car[count],
									sc_type_arc_common | sc_type_const,
									sc_type_node,
									sc_type_arc_pos_const_perm,
									nrel_inclusion_addr_numb]).done(function(concept_model_to_elements_of_concept_car_mas){
										for (count = 0; count < concept_model_to_elements_of_concept_car_mas.length; count++){
											window.scHelper.getIdentifier(concept_model_to_elements_of_concept_car_mas[count][2],SCWeb.core.Server._current_language).done(function (modification_set) {
												//car_set.push(car_name);
												table.innerHTML+='<tr><td>'+modification_set+'</td></tr>';
											})
										}
									});
							}
						});
				});
			});	
		//};
	},	


	_manufacture_year: function () {
		if (document.getElementById('manufacture_year').value != "") {
			common_count++;
			var manufacture_year = document.getElementById('manufacture_year').value;
			var concept_amount_mas = [];
			var mas_of_elements_of_year_nodes = [];
			SCWeb.core.Server.findIdentifiersSubStr(manufacture_year, function(manufacture_year_addr) {
				var manufacture_year_addr_numb = manufacture_year_addr.sys[0][0];
				SCWeb.core.Server.resolveScAddr(['nrel_manufacture_year','rrel_number_of_the_year','nrel_measurement_according_to_the_Gregorian_calendar'],function(keynodes){
					var nrel_manufacture_year_addr_numb = keynodes['nrel_manufacture_year'];
					var rrel_number_of_the_year_addr_numb = keynodes['rrel_number_of_the_year'];
					var nrel_measurement_according_to_the_Gregorian_calendar_addr_numb = keynodes['nrel_measurement_according_to_the_Gregorian_calendar'];
					window.sctpClient.iterate_elements(SctpIteratorType.SCTP_ITERATOR_5A_A_F_A_F,[
						sc_type_const,
						sc_type_arc_pos_const_perm,
						manufacture_year_addr_numb,
						sc_type_arc_pos_const_perm,
						rrel_number_of_the_year_addr_numb]).done(function(number_of_year_node_to_sc_node_mas){
							for (var count = 0; count < number_of_year_node_to_sc_node_mas.length; count++) {
								concept_amount_mas.push(number_of_year_node_to_sc_node_mas[count][0]);
							}
							for (var count = 0; count < concept_amount_mas.length; count++){
								window.sctpClient.iterate_elements(SctpIteratorType.SCTP_ITERATOR_5A_A_F_A_F,[
									sc_type_const,
									sc_type_arc_common | sc_type_const,
									concept_amount_mas[count],
									sc_type_arc_pos_const_perm,
									nrel_measurement_according_to_the_Gregorian_calendar_addr_numb]).done(function(sc_node_to_year_node_mas){
										for (var count = 0; count < sc_node_to_year_node_mas.length; count++){
											mas_of_elements_of_year_nodes.push(sc_node_to_year_node_mas[count][0]);
										}
										for (var count = 0; count < mas_of_elements_of_year_nodes.length; count++) {
											window.sctpClient.iterate_elements(SctpIteratorType.SCTP_ITERATOR_5A_A_F_A_F,[
												sc_type_node,
												sc_type_arc_common | sc_type_const,
												mas_of_elements_of_year_nodes[count],
												sc_type_arc_pos_const_perm,
												nrel_manufacture_year_addr_numb]).done(function(year_node_to_elements_of_concept_car_mas){
													for (count = 0; count < year_node_to_elements_of_concept_car_mas.length; count++){
														window.scHelper.getIdentifier(year_node_to_elements_of_concept_car_mas[count][0],SCWeb.core.Server._current_language).done(function (car_name) {
															car_set.push(car_name);
														})
													}
												});
										}
									});
							}
						});
				});
			});
		};
	},




	

	_sort_car_set: function () {
		var table = document.getElementById('car_table');
		table.innerHTML = "";
		var result_car_set = [];
		var control_count = 0;
		for (var count = 0; count < car_set.length; count++){
			control_count = 0;	
			for (var count1 = 0; count1 < car_set.length; count1++){
				if (car_set[count] == car_set[count1]) {
					control_count++;
				}
			}	
			if (control_count == common_count) {
				result_car_set.push(car_set[count])
			}
		}
		for (var count = 0; count < result_car_set.length; count++){
			for (var count1 = count+1; count1 < result_car_set.length; count1++){
				if (result_car_set[count] == result_car_set[count1]) {
					result_car_set.splice(count1, 1);
					count1--;
				}
			}
		}
		for (count = 0; count < result_car_set.length; count++) {
			table.innerHTML+='<tr><td>'+result_car_set[count]+'</td></tr>';
		}
	},

_get_oil_repl: function () {
	//if (document.getElementById('car_brand').value != "") {
	var table = document.getElementById('car_table');
table.innerHTML = "";																																																																	
	common_count++;
	var modification = document.getElementById('modifSel').value;
	//var modofication;
	var concept_engine_mas = [];
	var mas_of_consuble = [];
	var mas_of_consuble_oil = [];
	var mas_of_consuble_oil_value = [];
	var mas_of_consuble_oil_value_concept = [];
	var replacement_policy_km = [];
	var replacement_policy_mounth = [];
	SCWeb.core.Server.findIdentifiersSubStr(modification,function(modification_addr) {
		var modification_addr_numb = modification_addr.sys[0][0];
		SCWeb.core.Server.resolveScAddr(['nrel_engine_type','nrel_consunble','nrel_replacement_policy','rrel_km','rrel_mounth','concept_oil','nrel_value'],function(keynodes){
			var nrel_engine_type_addr_numb = keynodes['nrel_engine_type'];
			var nrel_consunble_addr_numb = keynodes['nrel_consunble'];
			var nrel_replacement_policy_addr_numb = keynodes['nrel_replacement_policy'];
			var rrel_km_addr_numb = keynodes['rrel_km'];
			var rrel_mounth_addr_numb = keynodes['rrel_mounth'];
			var concept_oil_addr_numb = keynodes['concept_oil'];
			var nrel_value_addr_numb = keynodes['nrel_value'];
			window.sctpClient.iterate_elements(SctpIteratorType.SCTP_ITERATOR_5F_A_A_A_F,[
				modification_addr_numb,
				sc_type_arc_common | sc_type_const,
				sc_type_node,
				sc_type_arc_pos_const_perm,
				nrel_engine_type_addr_numb]).done(function(engine_type_mass){
					for (var count = 0; count < engine_type_mass.length; count++) {
						concept_engine_mas.push(engine_type_mass[count][2]);
					}//alert("work1");
					for (var count = 0; count < concept_engine_mas.length; count++) {
						window.sctpClient.iterate_elements(SctpIteratorType.SCTP_ITERATOR_5F_A_A_A_F,[
							concept_engine_mas[count],
							sc_type_arc_common | sc_type_const,
							sc_type_node,
							sc_type_arc_pos_const_perm,
							nrel_consunble_addr_numb]).done(function(consumble_mas){
								for (var count = 0; count < consumble_mas.length; count++){
									mas_of_consuble.push(consumble_mas[count][2]);
								}//alert("work2");
								console.log ( "mas_of_consuble_length = " +  mas_of_consuble.length);
								for (var count = 0; count < mas_of_consuble.length; count++) {
									window.sctpClient.iterate_elements(SctpIteratorType.SCTP_ITERATOR_3F_A_F,[
										concept_oil_addr_numb,
										sc_type_arc_pos_const_perm,
										mas_of_consuble[count]]).done(function(consumble_mas_oil){
											//alert("work1");//that all
											for (var count = 0; count < consumble_mas_oil.length; count++){
												mas_of_consuble_oil.push(consumble_mas_oil[count][2]);
											}//alert("work2");
											for (var count = 0; count < mas_of_consuble_oil.length; count++) {
												window.sctpClient.iterate_elements(SctpIteratorType.SCTP_ITERATOR_5F_A_A_A_F,[
													mas_of_consuble_oil[count],
													sc_type_arc_common | sc_type_const,
													sc_type_node,
													sc_type_arc_pos_const_perm,
													nrel_replacement_policy_addr_numb]).done(function(consumble_mas_oil_value){
														for (var count = 0; count < consumble_mas_oil_value.length; count++){
															mas_of_consuble_oil_value.push(consumble_mas_oil_value[count][2]);
														}//alert("work3");
														for (var count = 0; count < mas_of_consuble_oil_value.length; count++) {
															window.sctpClient.iterate_elements(SctpIteratorType.SCTP_ITERATOR_5A_A_F_A_F,[
																sc_type_node,
																sc_type_arc_common | sc_type_const,
																mas_of_consuble_oil_value[count],
																sc_type_arc_pos_const_perm,
																nrel_value_addr_numb]).done(function(consumble_mas_oil_value_concept){
																	for (var count = 0; count < consumble_mas_oil_value_concept.length; count++){
																		mas_of_consuble_oil_value_concept.push(consumble_mas_oil_value_concept[count][0]);
																	}//alert("work4");
																	for (var count = 0; count < mas_of_consuble_oil_value_concept.length; count++) {
																		//alert("work5");
																		window.sctpClient.iterate_elements(SctpIteratorType.SCTP_ITERATOR_5F_A_A_A_F,[
																			mas_of_consuble_oil_value_concept[count],
																			sc_type_arc_pos_const_perm,
																			sc_type_node,//reboot
																			sc_type_arc_pos_const_perm,
																			rrel_km_addr_numb]).done(function(replacement_policy_km_mas){
																				for (count = 0; count < replacement_policy_km_mas.length; count++){
																					window.scHelper.getIdentifier(replacement_policy_km_mas[count][2],SCWeb.core.Server._current_language).done(function (replacement_policy_km_web) {
																					oil_rep_km.push(replacement_policy_km_web);
																					//table.innerHTML+='<tr><td>'+replacement_policy_km_web+'</td></tr>';
																					})
																				}
								
																			});
																		window.sctpClient.iterate_elements(SctpIteratorType.SCTP_ITERATOR_5F_A_A_A_F,[
																			mas_of_consuble_oil_value_concept[count],
																			sc_type_arc_pos_const_perm,
																			sc_type_node,
																			sc_type_arc_pos_const_perm,
																			rrel_mounth_addr_numb]).done(function(replacement_policy_mounth_mas){
																				for (count = 0; count < replacement_policy_mounth_mas.length; count++){
																					window.scHelper.getIdentifier(replacement_policy_mounth_mas[count][2],SCWeb.core.Server._current_language).done(function (replacement_policy_mounth_web) {
																					oil_rep_month.push(replacement_policy_mounth_web);
																					//table.innerHTML+='<tr><td>'+replacement_policy_mounth_web+'</td></tr>';
																					})
																				}
																				//table.innerHTML+='<tr><td>'+replacement_policy_km[0]+'</td></tr>';
																				//table.innerHTML+='<tr><td>'+replacement_policy_mounth[0]+'</td></tr>';
																			});
																	}
							
																});
														}
								
													});
											}
										});
								}
							});
					}
					
				});
		});
	});
//};
},	

_get_air_filter_repl: function () {
	//if (document.getElementById('car_brand').value != "") {
	//var table = document.getElementById('car_table');
//table.innerHTML = "";																																																																	
	common_count++;
	var modification = document.getElementById('modifSel').value;
	var table = document.getElementById('car_table');
		table.innerHTML = "";
	//var modofication;
	var concept_engine_mas = [];
	var mas_of_consuble = [];
	var mas_of_consuble_air_filter = [];
	var mas_of_consuble_air_filter_value = [];
	var mas_of_consuble_air_filter_value_concept = [];
	var replacement_policy_km = [];
	var replacement_policy_mounth = [];
	SCWeb.core.Server.findIdentifiersSubStr(modification,function(modification_addr) {
		var modification_addr_numb = modification_addr.sys[0][0];
		SCWeb.core.Server.resolveScAddr(['nrel_engine_type','nrel_consunble','nrel_replacement_policy','rrel_km','rrel_mounth','concept_air_filter','nrel_value'],function(keynodes){
			var nrel_engine_type_addr_numb = keynodes['nrel_engine_type'];
			var nrel_consunble_addr_numb = keynodes['nrel_consunble'];
			var nrel_replacement_policy_addr_numb = keynodes['nrel_replacement_policy'];
			var rrel_km_addr_numb = keynodes['rrel_km'];
			var rrel_mounth_addr_numb = keynodes['rrel_mounth'];
			var concept_air_filter_addr_numb = keynodes['concept_air_filter'];
			var nrel_value_addr_numb = keynodes['nrel_value'];
			window.sctpClient.iterate_elements(SctpIteratorType.SCTP_ITERATOR_5F_A_A_A_F,[
				modification_addr_numb,
				sc_type_arc_common | sc_type_const,
				sc_type_node,
				sc_type_arc_pos_const_perm,
				nrel_engine_type_addr_numb]).done(function(engine_type_mass){
					for (var count = 0; count < engine_type_mass.length; count++) {
						concept_engine_mas.push(engine_type_mass[count][2]);
					}//alert("work1");
					for (var count = 0; count < concept_engine_mas.length; count++) {
						window.sctpClient.iterate_elements(SctpIteratorType.SCTP_ITERATOR_5F_A_A_A_F,[
							concept_engine_mas[count],
							sc_type_arc_common | sc_type_const,
							sc_type_node,
							sc_type_arc_pos_const_perm,
							nrel_consunble_addr_numb]).done(function(consumble_mas){
								for (var count = 0; count < consumble_mas.length; count++){
									mas_of_consuble.push(consumble_mas[count][2]);
								}//alert("work2");
								console.log ( "mas_of_consuble_length = " +  mas_of_consuble.length);
								for (var count = 0; count < mas_of_consuble.length; count++) {
									window.sctpClient.iterate_elements(SctpIteratorType.SCTP_ITERATOR_3F_A_F,[
										concept_air_filter_addr_numb,
										sc_type_arc_pos_const_perm,
										mas_of_consuble[count]]).done(function(consumble_mas_air_filter){
											//alert("work1");//that all
											for (var count = 0; count < consumble_mas_air_filter.length; count++){
												mas_of_consuble_air_filter.push(consumble_mas_air_filter[count][2]);
											}//alert("work2");
											for (var count = 0; count < mas_of_consuble_air_filter.length; count++) {
												window.sctpClient.iterate_elements(SctpIteratorType.SCTP_ITERATOR_5F_A_A_A_F,[
													mas_of_consuble_air_filter[count],
													sc_type_arc_common | sc_type_const,
													sc_type_node,
													sc_type_arc_pos_const_perm,
													nrel_replacement_policy_addr_numb]).done(function(consumble_mas_air_filter_value){
														for (var count = 0; count < consumble_mas_air_filter_value.length; count++){
															mas_of_consuble_air_filter_value.push(consumble_mas_air_filter_value[count][2]);
														}//alert("work3");
														for (var count = 0; count < mas_of_consuble_air_filter_value.length; count++) {
															window.sctpClient.iterate_elements(SctpIteratorType.SCTP_ITERATOR_5A_A_F_A_F,[
																sc_type_node,
																sc_type_arc_common | sc_type_const,
																mas_of_consuble_air_filter_value[count],
																sc_type_arc_pos_const_perm,
																nrel_value_addr_numb]).done(function(consumble_mas_air_filter_value_concept){
																	for (var count = 0; count < consumble_mas_air_filter_value_concept.length; count++){
																		mas_of_consuble_air_filter_value_concept.push(consumble_mas_air_filter_value_concept[count][0]);
																	}//alert("work4");
																	for (var count = 0; count < mas_of_consuble_air_filter_value_concept.length; count++) {
																		//alert("work5");
																		window.sctpClient.iterate_elements(SctpIteratorType.SCTP_ITERATOR_5F_A_A_A_F,[
																			mas_of_consuble_air_filter_value_concept[count],
																			sc_type_arc_pos_const_perm,
																			sc_type_node,//reboot
																			sc_type_arc_pos_const_perm,
																			rrel_km_addr_numb]).done(function(replacement_policy_km_mas){
																				for (count = 0; count < replacement_policy_km_mas.length; count++){
																					window.scHelper.getIdentifier(replacement_policy_km_mas[count][2],SCWeb.core.Server._current_language).done(function (replacement_policy_km_web) {
																					air_filter_rep_km.push(replacement_policy_km_web);
																					//table.innerHTML+='<tr><td>'+replacement_policy_km_web+'</td></tr>';
																					})
																				}
								
																			});
																		window.sctpClient.iterate_elements(SctpIteratorType.SCTP_ITERATOR_5F_A_A_A_F,[
																			mas_of_consuble_air_filter_value_concept[count],
																			sc_type_arc_pos_const_perm,
																			sc_type_node,
																			sc_type_arc_pos_const_perm,
																			rrel_mounth_addr_numb]).done(function(replacement_policy_mounth_mas){
																				for (count = 0; count < replacement_policy_mounth_mas.length; count++){
																					window.scHelper.getIdentifier(replacement_policy_mounth_mas[count][2],SCWeb.core.Server._current_language).done(function (replacement_policy_mounth_web) {
																					air_filter_rep_month.push(replacement_policy_mounth_web);
																					//table.innerHTML+='<tr><td>'+replacement_policy_mounth_web+'</td></tr>';
																					})
																				}
																				//table.innerHTML+='<tr><td>'+replacement_policy_km[0]+'</td></tr>';
																				//table.innerHTML+='<tr><td>'+replacement_policy_mounth[0]+'</td></tr>';
																			});
																	}
							
																});
														}
								
													});
											}
										});
								}
							});
					}
					
				});
		});
	});
//};
},	

_get_fuel_filter_repl: function () {
	//if (document.getElementById('car_brand').value != "") {
	var table = document.getElementById('car_table');
table.innerHTML = "";																																																																	
	common_count++;
	var modification = document.getElementById('modifSel').value;
	//var modofication;
	var concept_engine_mas = [];
	var mas_of_consuble = [];
	var mas_of_consuble_fuel_filter = [];
	var mas_of_consuble_fuel_filter_value = [];
	var mas_of_consuble_fuel_filter_value_concept = [];
	var replacement_policy_km = [];
	var replacement_policy_mounth = [];
	SCWeb.core.Server.findIdentifiersSubStr(modification,function(modification_addr) {
		var modification_addr_numb = modification_addr.sys[0][0];
		SCWeb.core.Server.resolveScAddr(['nrel_engine_type','nrel_consunble','nrel_replacement_policy','rrel_km','rrel_mounth','concept_fuel_filter','nrel_value'],function(keynodes){
			var nrel_engine_type_addr_numb = keynodes['nrel_engine_type'];
			var nrel_consunble_addr_numb = keynodes['nrel_consunble'];
			var nrel_replacement_policy_addr_numb = keynodes['nrel_replacement_policy'];
			var rrel_km_addr_numb = keynodes['rrel_km'];
			var rrel_mounth_addr_numb = keynodes['rrel_mounth'];
			var concept_fuel_filter_addr_numb = keynodes['concept_fuel_filter'];
			var nrel_value_addr_numb = keynodes['nrel_value'];
			window.sctpClient.iterate_elements(SctpIteratorType.SCTP_ITERATOR_5F_A_A_A_F,[
				modification_addr_numb,
				sc_type_arc_common | sc_type_const,
				sc_type_node,
				sc_type_arc_pos_const_perm,
				nrel_engine_type_addr_numb]).done(function(engine_type_mass){
					for (var count = 0; count < engine_type_mass.length; count++) {
						concept_engine_mas.push(engine_type_mass[count][2]);
					}//alert("work1");
					for (var count = 0; count < concept_engine_mas.length; count++) {
						window.sctpClient.iterate_elements(SctpIteratorType.SCTP_ITERATOR_5F_A_A_A_F,[
							concept_engine_mas[count],
							sc_type_arc_common | sc_type_const,
							sc_type_node,
							sc_type_arc_pos_const_perm,
							nrel_consunble_addr_numb]).done(function(consumble_mas){
								for (var count = 0; count < consumble_mas.length; count++){
									mas_of_consuble.push(consumble_mas[count][2]);
								}//alert("work2");
								console.log ( "mas_of_consuble_length = " +  mas_of_consuble.length);
								for (var count = 0; count < mas_of_consuble.length; count++) {
									window.sctpClient.iterate_elements(SctpIteratorType.SCTP_ITERATOR_3F_A_F,[
										concept_fuel_filter_addr_numb,
										sc_type_arc_pos_const_perm,
										mas_of_consuble[count]]).done(function(consumble_mas_fuel_filter){
											//alert("work1");//that all
											for (var count = 0; count < consumble_mas_fuel_filter.length; count++){
												mas_of_consuble_fuel_filter.push(consumble_mas_fuel_filter[count][2]);
											}//alert("work2");
											for (var count = 0; count < mas_of_consuble_fuel_filter.length; count++) {
												window.sctpClient.iterate_elements(SctpIteratorType.SCTP_ITERATOR_5F_A_A_A_F,[
													mas_of_consuble_fuel_filter[count],
													sc_type_arc_common | sc_type_const,
													sc_type_node,
													sc_type_arc_pos_const_perm,
													nrel_replacement_policy_addr_numb]).done(function(consumble_mas_fuel_filter_value){
														for (var count = 0; count < consumble_mas_fuel_filter_value.length; count++){
															mas_of_consuble_fuel_filter_value.push(consumble_mas_fuel_filter_value[count][2]);
														}//alert("work3");
														for (var count = 0; count < mas_of_consuble_fuel_filter_value.length; count++) {
															window.sctpClient.iterate_elements(SctpIteratorType.SCTP_ITERATOR_5A_A_F_A_F,[
																sc_type_node,
																sc_type_arc_common | sc_type_const,
																mas_of_consuble_fuel_filter_value[count],
																sc_type_arc_pos_const_perm,
																nrel_value_addr_numb]).done(function(consumble_mas_fuel_filter_value_concept){
																	for (var count = 0; count < consumble_mas_fuel_filter_value_concept.length; count++){
																		mas_of_consuble_fuel_filter_value_concept.push(consumble_mas_fuel_filter_value_concept[count][0]);
																	}//alert("work4");
																	for (var count = 0; count < mas_of_consuble_fuel_filter_value_concept.length; count++) {
																		//alert("work5");
																		window.sctpClient.iterate_elements(SctpIteratorType.SCTP_ITERATOR_5F_A_A_A_F,[
																			mas_of_consuble_fuel_filter_value_concept[count],
																			sc_type_arc_pos_const_perm,
																			sc_type_node,//reboot
																			sc_type_arc_pos_const_perm,
																			rrel_km_addr_numb]).done(function(replacement_policy_km_mas){
																				for (count = 0; count < replacement_policy_km_mas.length; count++){
																					window.scHelper.getIdentifier(replacement_policy_km_mas[count][2],SCWeb.core.Server._current_language).done(function (replacement_policy_km_web) {
																					fuel_filter_rep_km.push(replacement_policy_km_web);
																					//table.innerHTML+='<tr><td>'+replacement_policy_km_web+'</td></tr>';
																					})
																				}
								
																			});
																		window.sctpClient.iterate_elements(SctpIteratorType.SCTP_ITERATOR_5F_A_A_A_F,[
																			mas_of_consuble_fuel_filter_value_concept[count],
																			sc_type_arc_pos_const_perm,
																			sc_type_node,
																			sc_type_arc_pos_const_perm,
																			rrel_mounth_addr_numb]).done(function(replacement_policy_mounth_mas){
																				for (count = 0; count < replacement_policy_mounth_mas.length; count++){
																					window.scHelper.getIdentifier(replacement_policy_mounth_mas[count][2],SCWeb.core.Server._current_language).done(function (replacement_policy_mounth_web) {
																					fuel_filter_rep_month.push(replacement_policy_mounth_web);
																					//table.innerHTML+='<tr><td>'+replacement_policy_mounth_web+'</td></tr>';
																					})
																				}
																				//table.innerHTML+='<tr><td>'+replacement_policy_km[0]+'</td></tr>';
																				//table.innerHTML+='<tr><td>'+replacement_policy_mounth[0]+'</td></tr>';
																			});
																	}
							
																});
														}
								
													});
											}
										});
								}
							});
					}
					
				});
		});
	});
//};
},	


_get_spark_plug_repl: function () {
	//if (document.getElementById('car_brand').value != "") {
	var table = document.getElementById('car_table');
	table.innerHTML = "";																																																																	
	common_count++;
	var modification = document.getElementById('modifSel').value;
	//var modofication;
	var concept_engine_mas = [];
	var mas_of_consuble = [];
	var mas_of_consuble_spark_plug = [];
	var mas_of_consuble_spark_plug_value = [];
	var mas_of_consuble_spark_plug_value_concept = [];
	var replacement_policy_km = [];
	var replacement_policy_mounth = [];
	SCWeb.core.Server.findIdentifiersSubStr(modification,function(modification_addr) {
		var modification_addr_numb = modification_addr.sys[0][0];
		SCWeb.core.Server.resolveScAddr(['nrel_engine_type','nrel_consunble','nrel_replacement_policy','rrel_km','rrel_mounth','concept_spark_plug','nrel_value'],function(keynodes){
			var nrel_engine_type_addr_numb = keynodes['nrel_engine_type'];
			var nrel_consunble_addr_numb = keynodes['nrel_consunble'];
			var nrel_replacement_policy_addr_numb = keynodes['nrel_replacement_policy'];
			var rrel_km_addr_numb = keynodes['rrel_km'];
			var rrel_mounth_addr_numb = keynodes['rrel_mounth'];
			var concept_spark_plug_addr_numb = keynodes['concept_spark_plug'];
			var nrel_value_addr_numb = keynodes['nrel_value'];
			window.sctpClient.iterate_elements(SctpIteratorType.SCTP_ITERATOR_5F_A_A_A_F,[
				modification_addr_numb,
				sc_type_arc_common | sc_type_const,
				sc_type_node,
				sc_type_arc_pos_const_perm,
				nrel_engine_type_addr_numb]).done(function(engine_type_mass){
					for (var count = 0; count < engine_type_mass.length; count++) {
						concept_engine_mas.push(engine_type_mass[count][2]);
					}//alert("work1");
					for (var count = 0; count < concept_engine_mas.length; count++) {
						window.sctpClient.iterate_elements(SctpIteratorType.SCTP_ITERATOR_5F_A_A_A_F,[
							concept_engine_mas[count],
							sc_type_arc_common | sc_type_const,
							sc_type_node,
							sc_type_arc_pos_const_perm,
							nrel_consunble_addr_numb]).done(function(consumble_mas){
								for (var count = 0; count < consumble_mas.length; count++){
									mas_of_consuble.push(consumble_mas[count][2]);
								}//alert("work2");
								console.log ( "mas_of_consuble_length = " +  mas_of_consuble.length);
								for (var count = 0; count < mas_of_consuble.length; count++) {
									window.sctpClient.iterate_elements(SctpIteratorType.SCTP_ITERATOR_3F_A_F,[
										concept_spark_plug_addr_numb,
										sc_type_arc_pos_const_perm,
										mas_of_consuble[count]]).done(function(consumble_mas_spark_plug){
											//alert("work1");//that all
											for (var count = 0; count < consumble_mas_spark_plug.length; count++){
												mas_of_consuble_spark_plug.push(consumble_mas_spark_plug[count][2]);
											}//alert("work2");
											for (var count = 0; count < mas_of_consuble_spark_plug.length; count++) {
												window.sctpClient.iterate_elements(SctpIteratorType.SCTP_ITERATOR_5F_A_A_A_F,[
													mas_of_consuble_spark_plug[count],
													sc_type_arc_common | sc_type_const,
													sc_type_node,
													sc_type_arc_pos_const_perm,
													nrel_replacement_policy_addr_numb]).done(function(consumble_mas_spark_plug_value){
														for (var count = 0; count < consumble_mas_spark_plug_value.length; count++){
															mas_of_consuble_spark_plug_value.push(consumble_mas_spark_plug_value[count][2]);
														}//alert("work3");
														for (var count = 0; count < mas_of_consuble_spark_plug_value.length; count++) {
															window.sctpClient.iterate_elements(SctpIteratorType.SCTP_ITERATOR_5A_A_F_A_F,[
																sc_type_node,
																sc_type_arc_common | sc_type_const,
																mas_of_consuble_spark_plug_value[count],
																sc_type_arc_pos_const_perm,
																nrel_value_addr_numb]).done(function(consumble_mas_spark_plug_value_concept){
																	for (var count = 0; count < consumble_mas_spark_plug_value_concept.length; count++){
																		mas_of_consuble_spark_plug_value_concept.push(consumble_mas_spark_plug_value_concept[count][0]);
																	}//alert("work4");
																	for (var count = 0; count < mas_of_consuble_spark_plug_value_concept.length; count++) {
																		//alert("work5");
																		window.sctpClient.iterate_elements(SctpIteratorType.SCTP_ITERATOR_5F_A_A_A_F,[
																			mas_of_consuble_spark_plug_value_concept[count],
																			sc_type_arc_pos_const_perm,
																			sc_type_node,//reboot
																			sc_type_arc_pos_const_perm,
																			rrel_km_addr_numb]).done(function(replacement_policy_km_mas){
																				for (count = 0; count < replacement_policy_km_mas.length; count++){
																					window.scHelper.getIdentifier(replacement_policy_km_mas[count][2],SCWeb.core.Server._current_language).done(function (replacement_policy_km_web) {
																					spark_plug_trans_rep_km.push(replacement_policy_km_web);
																					//table.innerHTML+='<tr><td>'+replacement_policy_km_web+'</td></tr>';
																					})
																				}
								
																			});
																		window.sctpClient.iterate_elements(SctpIteratorType.SCTP_ITERATOR_5F_A_A_A_F,[
																			mas_of_consuble_spark_plug_value_concept[count],
																			sc_type_arc_pos_const_perm,
																			sc_type_node,
																			sc_type_arc_pos_const_perm,
																			rrel_mounth_addr_numb]).done(function(replacement_policy_mounth_mas){
																				for (count = 0; count < replacement_policy_mounth_mas.length; count++){
																					window.scHelper.getIdentifier(replacement_policy_mounth_mas[count][2],SCWeb.core.Server._current_language).done(function (replacement_policy_mounth_web) {
																					spark_plug_trans_rep_month.push(replacement_policy_mounth_web);
																					//table.innerHTML+='<tr><td>'+replacement_policy_mounth_web+'</td></tr>';
																					})
																				}
																				//table.innerHTML+='<tr><td>'+replacement_policy_km[0]+'</td></tr>';
																				//table.innerHTML+='<tr><td>'+replacement_policy_mounth[0]+'</td></tr>';
																			});
																	}
							
																});
														}
								
													});
											}
										});
								}
							});
					}
					
				});
		});
	});
//};
},	


_get_grm_repl: function () {
	//if (document.getElementById('car_brand').value != "") {
	var table = document.getElementById('car_table');
table.innerHTML = "";																																																																	
	common_count++;
	var modification = document.getElementById('modifSel').value;
	//var modofication;
	var concept_engine_mas = [];
	var mas_of_consuble = [];
	var mas_of_consuble_grm = [];
	var mas_of_consuble_grm_value = [];
	var mas_of_consuble_grm_value_concept = [];
	var replacement_policy_km = [];
	var replacement_policy_mounth = [];
	SCWeb.core.Server.findIdentifiersSubStr(modification,function(modification_addr) {
		var modification_addr_numb = modification_addr.sys[0][0];
		SCWeb.core.Server.resolveScAddr(['nrel_engine_type','nrel_consunble','nrel_replacement_policy','rrel_km','rrel_mounth','concept_grm','nrel_value'],function(keynodes){
			var nrel_engine_type_addr_numb = keynodes['nrel_engine_type'];
			var nrel_consunble_addr_numb = keynodes['nrel_consunble'];
			var nrel_replacement_policy_addr_numb = keynodes['nrel_replacement_policy'];
			var rrel_km_addr_numb = keynodes['rrel_km'];
			var rrel_mounth_addr_numb = keynodes['rrel_mounth'];
			var concept_grm_addr_numb = keynodes['concept_grm'];
			var nrel_value_addr_numb = keynodes['nrel_value'];
			window.sctpClient.iterate_elements(SctpIteratorType.SCTP_ITERATOR_5F_A_A_A_F,[
				modification_addr_numb,
				sc_type_arc_common | sc_type_const,
				sc_type_node,
				sc_type_arc_pos_const_perm,
				nrel_engine_type_addr_numb]).done(function(engine_type_mass){
					for (var count = 0; count < engine_type_mass.length; count++) {
						concept_engine_mas.push(engine_type_mass[count][2]);
					}//alert("work1");
					for (var count = 0; count < concept_engine_mas.length; count++) {
						window.sctpClient.iterate_elements(SctpIteratorType.SCTP_ITERATOR_5F_A_A_A_F,[
							concept_engine_mas[count],
							sc_type_arc_common | sc_type_const,
							sc_type_node,
							sc_type_arc_pos_const_perm,
							nrel_consunble_addr_numb]).done(function(consumble_mas){
								for (var count = 0; count < consumble_mas.length; count++){
									mas_of_consuble.push(consumble_mas[count][2]);
								}//alert("work2");
								console.log ( "mas_of_consuble_length = " +  mas_of_consuble.length);
								for (var count = 0; count < mas_of_consuble.length; count++) {
									window.sctpClient.iterate_elements(SctpIteratorType.SCTP_ITERATOR_3F_A_F,[
										concept_grm_addr_numb,
										sc_type_arc_pos_const_perm,
										mas_of_consuble[count]]).done(function(consumble_mas_grm){
											//alert("work1");//that all
											for (var count = 0; count < consumble_mas_grm.length; count++){
												mas_of_consuble_grm.push(consumble_mas_grm[count][2]);
											}//alert("work2");
											for (var count = 0; count < mas_of_consuble_grm.length; count++) {
												window.sctpClient.iterate_elements(SctpIteratorType.SCTP_ITERATOR_5F_A_A_A_F,[
													mas_of_consuble_grm[count],
													sc_type_arc_common | sc_type_const,
													sc_type_node,
													sc_type_arc_pos_const_perm,
													nrel_replacement_policy_addr_numb]).done(function(consumble_mas_grm_value){
														for (var count = 0; count < consumble_mas_grm_value.length; count++){
															mas_of_consuble_grm_value.push(consumble_mas_grm_value[count][2]);
														}//alert("work3");
														for (var count = 0; count < mas_of_consuble_grm_value.length; count++) {
															window.sctpClient.iterate_elements(SctpIteratorType.SCTP_ITERATOR_5A_A_F_A_F,[
																sc_type_node,
																sc_type_arc_common | sc_type_const,
																mas_of_consuble_grm_value[count],
																sc_type_arc_pos_const_perm,
																nrel_value_addr_numb]).done(function(consumble_mas_grm_value_concept){
																	for (var count = 0; count < consumble_mas_grm_value_concept.length; count++){
																		mas_of_consuble_grm_value_concept.push(consumble_mas_grm_value_concept[count][0]);
																	}//alert("work4");
																	for (var count = 0; count < mas_of_consuble_grm_value_concept.length; count++) {
																		//alert("work5");
																		window.sctpClient.iterate_elements(SctpIteratorType.SCTP_ITERATOR_5F_A_A_A_F,[
																			mas_of_consuble_grm_value_concept[count],
																			sc_type_arc_pos_const_perm,
																			sc_type_node,//reboot
																			sc_type_arc_pos_const_perm,
																			rrel_km_addr_numb]).done(function(replacement_policy_km_mas){
																				for (count = 0; count < replacement_policy_km_mas.length; count++){
																					window.scHelper.getIdentifier(replacement_policy_km_mas[count][2],SCWeb.core.Server._current_language).done(function (replacement_policy_km_web) {
																					grm_rep_km.push(replacement_policy_km_web);
																					//table.innerHTML+='<tr><td>'+replacement_policy_km_web+'</td></tr>';
																					})
																				}
								
																			});
																		window.sctpClient.iterate_elements(SctpIteratorType.SCTP_ITERATOR_5F_A_A_A_F,[
																			mas_of_consuble_grm_value_concept[count],
																			sc_type_arc_pos_const_perm,
																			sc_type_node,
																			sc_type_arc_pos_const_perm,
																			rrel_mounth_addr_numb]).done(function(replacement_policy_mounth_mas){
																				for (count = 0; count < replacement_policy_mounth_mas.length; count++){
																					window.scHelper.getIdentifier(replacement_policy_mounth_mas[count][2],SCWeb.core.Server._current_language).done(function (replacement_policy_mounth_web) {
																					grm_rep_month.push(replacement_policy_mounth_web);
																					//table.innerHTML+='<tr><td>'+replacement_policy_mounth_web+'</td></tr>';
																					})
																				}
																				//table.innerHTML+='<tr><td>'+replacement_policy_km[0]+'</td></tr>';
																				//table.innerHTML+='<tr><td>'+replacement_policy_mounth[0]+'</td></tr>';
																			});
																	}
							
																});
														}
								
													});
											}
										});
								}
							});
					}
					
				});
		});
	});
//};
},	




_get_coolant_repl: function () {
	//if (document.getElementById('car_brand').value != "") {
	var table = document.getElementById('car_table');
table.innerHTML = "";																																																																	
	common_count++;
	var modification = document.getElementById('modifSel').value;
	//var modofication;
	var concept_engine_mas = [];
	var mas_of_consuble = [];
	var mas_of_consuble_coolant = [];
	var mas_of_consuble_coolant_value = [];
	var mas_of_consuble_coolant_value_concept = [];
	var replacement_policy_km = [];
	var replacement_policy_mounth = [];
	SCWeb.core.Server.findIdentifiersSubStr(modification,function(modification_addr) {
		var modification_addr_numb = modification_addr.sys[0][0];
		SCWeb.core.Server.resolveScAddr(['nrel_engine_type','nrel_consunble','nrel_replacement_policy','rrel_km','rrel_mounth','concept_coolant','nrel_value'],function(keynodes){
			var nrel_engine_type_addr_numb = keynodes['nrel_engine_type'];
			var nrel_consunble_addr_numb = keynodes['nrel_consunble'];
			var nrel_replacement_policy_addr_numb = keynodes['nrel_replacement_policy'];
			var rrel_km_addr_numb = keynodes['rrel_km'];
			var rrel_mounth_addr_numb = keynodes['rrel_mounth'];
			var concept_coolant_addr_numb = keynodes['concept_coolant'];
			var nrel_value_addr_numb = keynodes['nrel_value'];
			window.sctpClient.iterate_elements(SctpIteratorType.SCTP_ITERATOR_5F_A_A_A_F,[
				modification_addr_numb,
				sc_type_arc_common | sc_type_const,
				sc_type_node,
				sc_type_arc_pos_const_perm,
				nrel_engine_type_addr_numb]).done(function(engine_type_mass){
					for (var count = 0; count < engine_type_mass.length; count++) {
						concept_engine_mas.push(engine_type_mass[count][2]);
					}//alert("work1");
					for (var count = 0; count < concept_engine_mas.length; count++) {
						window.sctpClient.iterate_elements(SctpIteratorType.SCTP_ITERATOR_5F_A_A_A_F,[
							concept_engine_mas[count],
							sc_type_arc_common | sc_type_const,
							sc_type_node,
							sc_type_arc_pos_const_perm,
							nrel_consunble_addr_numb]).done(function(consumble_mas){
								for (var count = 0; count < consumble_mas.length; count++){
									mas_of_consuble.push(consumble_mas[count][2]);
								}//alert("work2");
								console.log ( "mas_of_consuble_length = " +  mas_of_consuble.length);
								for (var count = 0; count < mas_of_consuble.length; count++) {
									window.sctpClient.iterate_elements(SctpIteratorType.SCTP_ITERATOR_3F_A_F,[
										concept_coolant_addr_numb,
										sc_type_arc_pos_const_perm,
										mas_of_consuble[count]]).done(function(consumble_mas_coolant){
											//alert("work1");//that all
											for (var count = 0; count < consumble_mas_coolant.length; count++){
												mas_of_consuble_coolant.push(consumble_mas_coolant[count][2]);
											}//alert("work2");
											for (var count = 0; count < mas_of_consuble_coolant.length; count++) {
												window.sctpClient.iterate_elements(SctpIteratorType.SCTP_ITERATOR_5F_A_A_A_F,[
													mas_of_consuble_coolant[count],
													sc_type_arc_common | sc_type_const,
													sc_type_node,
													sc_type_arc_pos_const_perm,
													nrel_replacement_policy_addr_numb]).done(function(consumble_mas_coolant_value){
														for (var count = 0; count < consumble_mas_coolant_value.length; count++){
															mas_of_consuble_coolant_value.push(consumble_mas_coolant_value[count][2]);
														}//alert("work3");
														for (var count = 0; count < mas_of_consuble_coolant_value.length; count++) {
															window.sctpClient.iterate_elements(SctpIteratorType.SCTP_ITERATOR_5A_A_F_A_F,[
																sc_type_node,
																sc_type_arc_common | sc_type_const,
																mas_of_consuble_coolant_value[count],
																sc_type_arc_pos_const_perm,
																nrel_value_addr_numb]).done(function(consumble_mas_coolant_value_concept){
																	for (var count = 0; count < consumble_mas_coolant_value_concept.length; count++){
																		mas_of_consuble_coolant_value_concept.push(consumble_mas_coolant_value_concept[count][0]);
																	}//alert("work4");
																	for (var count = 0; count < mas_of_consuble_coolant_value_concept.length; count++) {
																		//alert("work5");
																		window.sctpClient.iterate_elements(SctpIteratorType.SCTP_ITERATOR_5F_A_A_A_F,[
																			mas_of_consuble_coolant_value_concept[count],
																			sc_type_arc_pos_const_perm,
																			sc_type_node,//reboot
																			sc_type_arc_pos_const_perm,
																			rrel_km_addr_numb]).done(function(replacement_policy_km_mas){
																				for (count = 0; count < replacement_policy_km_mas.length; count++){
																					window.scHelper.getIdentifier(replacement_policy_km_mas[count][2],SCWeb.core.Server._current_language).done(function (replacement_policy_km_web) {
																					coolant_rep_km.push(replacement_policy_km_web);
																					//table.innerHTML+='<tr><td>'+replacement_policy_km_web+'</td></tr>';
																					})
																				}
								
																			});
																		window.sctpClient.iterate_elements(SctpIteratorType.SCTP_ITERATOR_5F_A_A_A_F,[
																			mas_of_consuble_coolant_value_concept[count],
																			sc_type_arc_pos_const_perm,
																			sc_type_node,
																			sc_type_arc_pos_const_perm,
																			rrel_mounth_addr_numb]).done(function(replacement_policy_mounth_mas){
																				for (count = 0; count < replacement_policy_mounth_mas.length; count++){
																					window.scHelper.getIdentifier(replacement_policy_mounth_mas[count][2],SCWeb.core.Server._current_language).done(function (replacement_policy_mounth_web) {
																					coolant_rep_month.push(replacement_policy_mounth_web);
																					//table.innerHTML+='<tr><td>'+replacement_policy_mounth_web+'</td></tr>';
																					})
																				}
																				//table.innerHTML+='<tr><td>'+replacement_policy_km[0]+'</td></tr>';
																				//table.innerHTML+='<tr><td>'+replacement_policy_mounth[0]+'</td></tr>';
																			});
																	}
							
																});
														}
								
													});
											}
										});
								}
							});
					}
					
				});
		});
	});
//};
},	


_get_gearbox_oil_repl: function () {
	//if (document.getElementById('car_brand').value != "") {
	var table = document.getElementById('car_table');
table.innerHTML = "";																																																																	
	common_count++;
	var modification = document.getElementById('modifSel').value;
	//var modofication;
	var concept_transmission_mas = [];
	var mas_of_consuble = [];
	var mas_of_consuble_gearbox_oil = [];
	var mas_of_consuble_gearbox_oil_value = [];
	var mas_of_consuble_gearbox_oil_value_concept = [];
	var replacement_policy_km = [];
	var replacement_policy_mounth = [];
	SCWeb.core.Server.findIdentifiersSubStr(modification,function(modification_addr) {
		var modification_addr_numb = modification_addr.sys[0][0];
		SCWeb.core.Server.resolveScAddr(['nrel_transmission_type','nrel_consunble','nrel_replacement_policy','rrel_km','rrel_mounth','concept_gearbox_oil','nrel_value'],function(keynodes){
			var nrel_transmission_type_addr_numb = keynodes['nrel_transmission_type'];
			var nrel_consunble_addr_numb = keynodes['nrel_consunble'];
			var nrel_replacement_policy_addr_numb = keynodes['nrel_replacement_policy'];
			var rrel_km_addr_numb = keynodes['rrel_km'];
			var rrel_mounth_addr_numb = keynodes['rrel_mounth'];
			var concept_gearbox_oil_addr_numb = keynodes['concept_gearbox_oil'];
			var nrel_value_addr_numb = keynodes['nrel_value'];
			window.sctpClient.iterate_elements(SctpIteratorType.SCTP_ITERATOR_5F_A_A_A_F,[
				modification_addr_numb,
				sc_type_arc_common | sc_type_const,
				sc_type_node,
				sc_type_arc_pos_const_perm,
				nrel_transmission_type_addr_numb]).done(function(transmission_type_mass){
					for (var count = 0; count < transmission_type_mass.length; count++) {
						concept_transmission_mas.push(transmission_type_mass[count][2]);
					}//alert("work1");
					for (var count = 0; count < concept_transmission_mas.length; count++) {
						window.sctpClient.iterate_elements(SctpIteratorType.SCTP_ITERATOR_5F_A_A_A_F,[
							concept_transmission_mas[count],
							sc_type_arc_common | sc_type_const,
							sc_type_node,
							sc_type_arc_pos_const_perm,
							nrel_consunble_addr_numb]).done(function(consumble_mas){
								for (var count = 0; count < consumble_mas.length; count++){
									mas_of_consuble.push(consumble_mas[count][2]);
								}//alert("work2");
								console.log ( "mas_of_consuble_length = " +  mas_of_consuble.length);
								for (var count = 0; count < mas_of_consuble.length; count++) {
									window.sctpClient.iterate_elements(SctpIteratorType.SCTP_ITERATOR_3F_A_F,[
										concept_gearbox_oil_addr_numb,
										sc_type_arc_pos_const_perm,
										mas_of_consuble[count]]).done(function(consumble_mas_gearbox_oil){
											//alert("work1");//that all
											for (var count = 0; count < consumble_mas_gearbox_oil.length; count++){
												mas_of_consuble_gearbox_oil.push(consumble_mas_gearbox_oil[count][2]);
											}//alert("work2");
											for (var count = 0; count < mas_of_consuble_gearbox_oil.length; count++) {
												window.sctpClient.iterate_elements(SctpIteratorType.SCTP_ITERATOR_5F_A_A_A_F,[
													mas_of_consuble_gearbox_oil[count],
													sc_type_arc_common | sc_type_const,
													sc_type_node,
													sc_type_arc_pos_const_perm,
													nrel_replacement_policy_addr_numb]).done(function(consumble_mas_gearbox_oil_value){
														for (var count = 0; count < consumble_mas_gearbox_oil_value.length; count++){
															mas_of_consuble_gearbox_oil_value.push(consumble_mas_gearbox_oil_value[count][2]);
														}//alert("work3");
														for (var count = 0; count < mas_of_consuble_gearbox_oil_value.length; count++) {
															window.sctpClient.iterate_elements(SctpIteratorType.SCTP_ITERATOR_5A_A_F_A_F,[
																sc_type_node,
																sc_type_arc_common | sc_type_const,
																mas_of_consuble_gearbox_oil_value[count],
																sc_type_arc_pos_const_perm,
																nrel_value_addr_numb]).done(function(consumble_mas_gearbox_oil_value_concept){
																	for (var count = 0; count < consumble_mas_gearbox_oil_value_concept.length; count++){
																		mas_of_consuble_gearbox_oil_value_concept.push(consumble_mas_gearbox_oil_value_concept[count][0]);
																	}//alert("work4");
																	for (var count = 0; count < mas_of_consuble_gearbox_oil_value_concept.length; count++) {
																		//alert("work5");
																		window.sctpClient.iterate_elements(SctpIteratorType.SCTP_ITERATOR_5F_A_A_A_F,[
																			mas_of_consuble_gearbox_oil_value_concept[count],
																			sc_type_arc_pos_const_perm,
																			sc_type_node,//reboot
																			sc_type_arc_pos_const_perm,
																			rrel_km_addr_numb]).done(function(replacement_policy_km_mas){
																				for (count = 0; count < replacement_policy_km_mas.length; count++){
																					window.scHelper.getIdentifier(replacement_policy_km_mas[count][2],SCWeb.core.Server._current_language).done(function (replacement_policy_km_web) {
																					oil_trans_rep_km.push(replacement_policy_km_web);
																					//table.innerHTML+='<tr><td>'+replacement_policy_km_web+'</td></tr>';
																					})
																				}
								
																			});
																		window.sctpClient.iterate_elements(SctpIteratorType.SCTP_ITERATOR_5F_A_A_A_F,[
																			mas_of_consuble_gearbox_oil_value_concept[count],
																			sc_type_arc_pos_const_perm,
																			sc_type_node,
																			sc_type_arc_pos_const_perm,
																			rrel_mounth_addr_numb]).done(function(replacement_policy_mounth_mas){
																				for (count = 0; count < replacement_policy_mounth_mas.length; count++){
																					window.scHelper.getIdentifier(replacement_policy_mounth_mas[count][2],SCWeb.core.Server._current_language).done(function (replacement_policy_mounth_web) {
																					oil_trans_rep_month.push(replacement_policy_mounth_web);
																					//table.innerHTML+='<tr><td>'+replacement_policy_mounth_web+'</td></tr>';
																					})
																				}
																				//table.innerHTML+='<tr><td>'+replacement_policy_km[0]+'</td></tr>';
																				//table.innerHTML+='<tr><td>'+replacement_policy_mounth[0]+'</td></tr>';
																			});
																	}
							
																});
														}
								
													});
											}
										});
								}
							});
					}
					
				});
		});
	});
//};
},


_get_cabin_filter_repl: function () {
	//if (document.getElementById('car_brand').value != "") {
	var table = document.getElementById('car_table');
table.innerHTML = "";																																																																	
	common_count++;
	var modification = document.getElementById('modifSel').value;
	//var modofication;
	var concept_air_system_mas = [];
	var mas_of_consuble = [];
	var mas_of_consuble_cabin_filter = [];
	var mas_of_consuble_cabin_filter_value = [];
	var mas_of_consuble_cabin_filter_value_concept = [];
	var replacement_policy_km = [];
	var replacement_policy_mounth = [];
	SCWeb.core.Server.findIdentifiersSubStr(modification,function(modification_addr) {
		var modification_addr_numb = modification_addr.sys[0][0];
		SCWeb.core.Server.resolveScAddr(['nrel_conditioning_air_system','nrel_consunble','nrel_replacement_policy','rrel_km','rrel_mounth','concept_cabin_filter','nrel_value'],function(keynodes){
			var nrel_conditioning_air_system_addr_numb = keynodes['nrel_conditioning_air_system'];
			var nrel_consunble_addr_numb = keynodes['nrel_consunble'];
			var nrel_replacement_policy_addr_numb = keynodes['nrel_replacement_policy'];
			var rrel_km_addr_numb = keynodes['rrel_km'];
			var rrel_mounth_addr_numb = keynodes['rrel_mounth'];
			var concept_cabin_filter_addr_numb = keynodes['concept_cabin_filter'];
			var nrel_value_addr_numb = keynodes['nrel_value'];
			window.sctpClient.iterate_elements(SctpIteratorType.SCTP_ITERATOR_5F_A_A_A_F,[
				modification_addr_numb,
				sc_type_arc_common | sc_type_const,
				sc_type_node,
				sc_type_arc_pos_const_perm,
				nrel_conditioning_air_system_addr_numb]).done(function(air_system_type_mass){
					for (var count = 0; count < air_system_type_mass.length; count++) {
						concept_air_system_mas.push(air_system_type_mass[count][2]);
					}//alert("work1");
					for (var count = 0; count < concept_air_system_mas.length; count++) {
						window.sctpClient.iterate_elements(SctpIteratorType.SCTP_ITERATOR_5F_A_A_A_F,[
							concept_air_system_mas[count],
							sc_type_arc_common | sc_type_const,
							sc_type_node,
							sc_type_arc_pos_const_perm,
							nrel_consunble_addr_numb]).done(function(consumble_mas){
								for (var count = 0; count < consumble_mas.length; count++){
									mas_of_consuble.push(consumble_mas[count][2]);
								}//alert("work2");
								console.log ( "mas_of_consuble_length = " +  mas_of_consuble.length);
								for (var count = 0; count < mas_of_consuble.length; count++) {
									window.sctpClient.iterate_elements(SctpIteratorType.SCTP_ITERATOR_3F_A_F,[
										concept_cabin_filter_addr_numb,
										sc_type_arc_pos_const_perm,
										mas_of_consuble[count]]).done(function(consumble_mas_cabin_filter){
											//alert("work1");//that all
											for (var count = 0; count < consumble_mas_cabin_filter.length; count++){
												mas_of_consuble_cabin_filter.push(consumble_mas_cabin_filter[count][2]);
											}//alert("work2");
											for (var count = 0; count < mas_of_consuble_cabin_filter.length; count++) {
												window.sctpClient.iterate_elements(SctpIteratorType.SCTP_ITERATOR_5F_A_A_A_F,[
													mas_of_consuble_cabin_filter[count],
													sc_type_arc_common | sc_type_const,
													sc_type_node,
													sc_type_arc_pos_const_perm,
													nrel_replacement_policy_addr_numb]).done(function(consumble_mas_cabin_filter_value){
														for (var count = 0; count < consumble_mas_cabin_filter_value.length; count++){
															mas_of_consuble_cabin_filter_value.push(consumble_mas_cabin_filter_value[count][2]);
														}//alert("work3");
														for (var count = 0; count < mas_of_consuble_cabin_filter_value.length; count++) {
															window.sctpClient.iterate_elements(SctpIteratorType.SCTP_ITERATOR_5A_A_F_A_F,[
																sc_type_node,
																sc_type_arc_common | sc_type_const,
																mas_of_consuble_cabin_filter_value[count],
																sc_type_arc_pos_const_perm,
																nrel_value_addr_numb]).done(function(consumble_mas_cabin_filter_value_concept){
																	for (var count = 0; count < consumble_mas_cabin_filter_value_concept.length; count++){
																		mas_of_consuble_cabin_filter_value_concept.push(consumble_mas_cabin_filter_value_concept[count][0]);
																	}//alert("work4");
																	for (var count = 0; count < mas_of_consuble_cabin_filter_value_concept.length; count++) {
																		//alert("work5");
																		window.sctpClient.iterate_elements(SctpIteratorType.SCTP_ITERATOR_5F_A_A_A_F,[
																			mas_of_consuble_cabin_filter_value_concept[count],
																			sc_type_arc_pos_const_perm,
																			sc_type_node,//reboot
																			sc_type_arc_pos_const_perm,
																			rrel_km_addr_numb]).done(function(replacement_policy_km_mas){
																				for (count = 0; count < replacement_policy_km_mas.length; count++){
																					window.scHelper.getIdentifier(replacement_policy_km_mas[count][2],SCWeb.core.Server._current_language).done(function (replacement_policy_km_web) {
																					cabin_filter_rep_km.push(replacement_policy_km_web);
																					//table.innerHTML+='<tr><td>'+replacement_policy_km_web+'</td></tr>';
																					})
																				}
								
																			});
																		window.sctpClient.iterate_elements(SctpIteratorType.SCTP_ITERATOR_5F_A_A_A_F,[
																			mas_of_consuble_cabin_filter_value_concept[count],
																			sc_type_arc_pos_const_perm,
																			sc_type_node,
																			sc_type_arc_pos_const_perm,
																			rrel_mounth_addr_numb]).done(function(replacement_policy_mounth_mas){
																				for (count = 0; count < replacement_policy_mounth_mas.length; count++){
																					window.scHelper.getIdentifier(replacement_policy_mounth_mas[count][2],SCWeb.core.Server._current_language).done(function (replacement_policy_mounth_web) {
																					cabin_filter_rep_month.push(replacement_policy_mounth_web);
																					//table.innerHTML+='<tr><td>'+replacement_policy_mounth_web+'</td></tr>';
																					})
																				}
																				//table.innerHTML+='<tr><td>'+replacement_policy_km[0]+'</td></tr>';
																				//table.innerHTML+='<tr><td>'+replacement_policy_mounth[0]+'</td></tr>';
																			});
																	}
							
																});
														}
								
													});
											}
										});
								}
							});
					}
					
				});
		});
	});
//};
}




}
