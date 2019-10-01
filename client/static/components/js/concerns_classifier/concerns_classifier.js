var ConcernsClassifier = {};

function extend(child, parent) {
    var F = function () {
    };
    F.prototype = parent.prototype;
    child.prototype = new F();
    child.prototype.constructor = child;
    child.superclass = parent.prototype;
}

/**
 * ConcernsClassifier component.
 */
ConcernsClassifier.DrawComponent = {
    ext_lang: 'concerns_classifier',
    formats: ['format_concerns_classifier_json'],
    struct_support: true,
    factory: function (sandbox) {
        return new ConcernsClassifier.DrawWindow(sandbox);
    }
};

ConcernsClassifier.DrawWindow = function (sandbox) {
    this.sandbox = sandbox;
    this.paintPanel = new ConcernsClassifier.PaintPanel(this.sandbox.container);
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
SCWeb.core.ComponentManager.appendComponentInitialize(ConcernsClassifier.DrawComponent);

/**
 * Paint panel.
 */
defect_set = [];
common_count = 0;

ConcernsClassifier.PaintPanel = function (containerId) {
    this.containerId = containerId;
};

ConcernsClassifier.PaintPanel.prototype = {

    init: function () {
        this._initMarkup(this.containerId);
    },

    _initMarkup: function (containerId) {
        var container = $('#' + containerId);

		var self = this;
		
		container.append('<div class="sc-no-default-cmd">Классификатор автомобилей по концернам</div>');

		container.append('</br><table id="concern_table" border="1"></table>');
		var table = document.getElementById('concern_table');
		
		  
		table.innerHTML='<tr><td><button class="button" id="ford"><img src="/static/components/images/ford.jpg" width="150" height="150"></button></td><td >'+
		'<button class="button" id="PSA"><img src="/static/components/images/PSA.jpg" width="150" height="150"></button></td>' 
				+ '<td ><button class="button" id="taiota"><img src="/static/components/images/taiota.jpg" width="150" height="150"></button> </td>' 
				+ '<td ><button class="button" id="Daimler"><img src="/static/components/images/Daimler.jpg" width="150" height="150"></button></td>' 
			+'</tr>'
			+'<tr>' 
				+'<td > <button class="button" id="mazda"><img src="/static/components/images/mazda.jpg" width="150" height="150"></button> </td>' 
				+'<td > <button class="button" id="VW"><img src="/static/components/images/VW.jpg" width="150" height="150"></button> </td> '
				+'<td > <button class="button" id="BMW"><img src="/static/components/images/BMW.png" width="150" height="150"></button> </td> '
				+'<td > <button class="button" id="honda"><img src="/static/components/images/honda.jpg" width="150" height="150"></button> </td>'
			+'</tr>'
			+'<tr> '
				+'<td > <button class="button" id="FIAT"><img src="/static/components/images/FIAT.png" width="150" height="150"></button> </td>'
				+'<td > <button class="button" id="GM"><img src="/static/components/images/GM.png" width="150" height="150"></button> </td>'
				+'<td > <button class="button" id="SUZUKI"><img src="/static/components/images/SUZUKI.png" width="150" height="150"></button> </td>'
				+'<td > <button class="button" id="RNM"><img src="/static/components/images/RNM.jpg" width="150" height="150"></button> </td>'
			+'</tr>';


		
		$('#ford').click(function () {
			defect_set = [];
			$("#concern_table").remove();
			container.append('</br><table id="marks_table" border="1"></table>');
			var table = document.getElementById('marks_table');
			table.innerHTML='<tr> <td > <button class="button" id="lincoln"><img src="/static/components/images/lincoln.png" width="100" height="100"></button>'+
				'<button class="button" id="ford"><img src="/static/components//static/components/images/ford.jpg" width="100" height="100"></button>'
			'</tr>';
		
		});
		$('#PSA').click(function () {
			defect_set = [];
			$("#concern_table").remove();
			container.append('</br><table id="marks_table" border="1"></table>');
			var table = document.getElementById('marks_table');
			table.innerHTML='<tr> <td > <button class="button" id="Ok"><img src="/static/components/images/Peugeot.png" width="100" height="100"></button>'+
				'<button class="button" id="Ok"><img src="/static/components/images/Citroen.png" width="100" height="100"></button>'
				+'<button class="button" id="Ok"><img src="/static/components/images/Opel.png" width="100" height="100"></button></td> '
			+'</tr>';
		
		});
		$('#taiota').click(function () {
			defect_set = [];
			$("#concern_table").remove();
			container.append('</br><table id="marks_table" border="1"></table>');
			var table = document.getElementById('marks_table');
			table.innerHTML='<tr> <td > <button class="button" id="Ok"><img src="/static/components/images/lexus.png" width="100" height="100"></button>'+
				'<button class="button" id="Ok"><img src="/static/components/images/taiota.jpg" width="100" height="100"></button>'
				+'<button class="button" id="Ok"><img src="/static/components/images/subaru.jpg" width="100" height="100"></button></td> '
			+'</tr>';
		
		});
		$('#Daimler').click(function () {
			defect_set = [];
			$("#concern_table").remove();
			container.append('</br><table id="marks_table" border="1"></table>');
			var table = document.getElementById('marks_table');
			table.innerHTML='<tr> <td > <button class="button" id="Ok"><img src="/static/components/images/smart.png" width="100" height="100"></button>'+
				'<button class="button" id="Ok"><img src="/static/components/images/mersedes.jpg" width="100" height="100"></button>'
				+'<button class="button" id="Ok"><img src="/static/components/images/Maybach.png" width="100" height="100"></button></td> '
			+'</tr>';
		
		});
		$('#mazda').click(function () {
			defect_set = [];
			$("#concern_table").remove();
			container.append('</br><table id="marks_table" border="1"></table>');
			var table = document.getElementById('marks_table');
			table.innerHTML='<tr> <td > <button class="button" id="Ok"><img src="/static/components/images/mazda.jpg" width="100" height="100"></button></td> '
			+'</tr>';
		
		});
		$('#VW').click(function () {
			defect_set = [];
			$("#concern_table").remove();
			container.append('</br><table id="marks_table" border="1"></table>');
			var table = document.getElementById('marks_table');
			table.innerHTML='<tr> <td > <button class="button" id="Ok"><img src="/static/components/images/bentley.png" width="100" height="100"></button>'+
				'<button class="button" id="Ok"><img src="/static/components/images/porsche.jpg" width="100" height="100"></button>'
				+'<button class="button" id="Ok"><img src="/static/components/images/Lamborghini.png" width="100" height="100"></button></td> '
			+'</tr>'
			+'<tr> '
				+'<td > <button class="button" id="VW_model"><img src="/static/components/images/VW.jpg" align="center" width="340" height="350"></button> </td> '
			+'</tr>'
			+'<tr> '
				+'<td > <button class="button" id="Ok"><img src="/static/components/images/Audi.png" width="100" height="100"></button> '
				+'<button class="button" id="Ok"><img src="/static/components/images/skoda.jpg" width="100" height="100"></button> '
				+'<button class="button" id="Ok"><img src="/static/components/images/seat.png" width="100" height="100"></button> </td>'
			+'</tr>';
		$('#VW_model').click(function () {
		$("#marks_table").remove();
			container.append('</br><table id="models_table" border="1"></table>');
			var table = document.getElementById('models_table');
			table.innerHTML='<tr> <th>Модели</th></tr> <tr><td><button id="Golf" type="button">Golf</button></td></tr>'
  +'<tr><td><button id="Golf" type="button">Jetta</button></td></tr><tr><td><button id="Golf" type="button">Polo</button></td></tr>'
  +'<tr><td><button id="Golf" type="button">Passat</button></td></tr><tr><td><button id="Golf" type="button">Multivan</button></td></tr>'
  +'<tr>   <td><button id="Golf" type="button">Tiguan</button></td>  </tr>  <tr><td><button id="Golf" type="button">Touareg</button></td> </tr>'
  +'<tr> <td><button id="Golf" type="button">Caddy</button></td> </tr> <tr><td><button id="Golf" type="button">Transporter</button></td> </tr>'
  +'<tr> <td><button id="Golf" type="button">Caravelle</button></td> </tr> <tr> <td><button id="Golf" type="button">Fox</button></td> </tr>'
  +'<tr><td><button id="Golf" type="button">Beetle</button></td> </tr>';

  				$('#Golf').click(function () {
  					$("#models_table").remove();
			container.append('</br><table id="golf_table" border="1"></table>');
			var table = document.getElementById('golf_table');
			table.innerHTML='<tr> <th>Модификация</th> <th>Мощность, кВт(л.с.)/об</th> <th>Расход топлива (средний), л/100 км</th> <th>Вес (масса), кг</th> <th>Год (начала производства), г</th> <th>Страна производства</th> </tr>'
  				+'<tr> <td>Golf VII 1.2 TSI BlueMotion (86 лс)</td> <td>63(86)/4300-5300</td> <td>4.9</td> <td>1205</td> <td>2012</td> <td>Germany</td> </tr>'
  				+'<tr> <td>Golf VII 1.4 TSI BlueMotion (140 лс)</td> <td>103(140)/4500-6000</td> <td>5.3</td> <td>1268</td> <td>2012</td> <td>Germany</td> </tr>'
  				+'<tr> <td>Golf VII 1.6 TDI 4Motion (105 лс)</td> <td>77(105)/3000-4000</td> <td>4.5</td> <td>1410</td> <td>2012</td> <td>Germany</td> </tr>'
  				+'<tr> <td>Golf VII 1.6 TDI BlueMotion (105 лс)</td> <td>77(105)/3000-4000</td> <td>3.8</td> <td>1295</td> <td>2012</td> <td>Germany</td> </tr>'
  				+'<tr> <td>Golf VII 1.6 TDI BlueMotion АКПП (105 лс)</td> <td>77(105)/3000-4000</td> <td>3.9</td> <td>1313</td> <td>2012</td> <td>Germany</td> </tr>'
  				+'<tr> <td>Golf VII 1.6 TDI BlueMotion АКПП (105 лс)</td> <td>77(105)/3000-4000</td> <td>3.9</td> <td>1313</td> <td>2012</td> <td>Germany</td> </tr>'
  				+'<tr> <td>Golf VII 2.0 TDI BlueMotion (150 лс)</td> <td>110(150)/3500-4000</td> <td>3.1</td> <td>1354</td> <td>2012</td> <td>Germany</td> </tr>'
  				+'<tr> <td>Golf VII 2.0 TDI BlueMotion АКПП (150 лс)</td> <td>110(150)/3500-4000</td> <td>4.4</td> <td>1365</td> <td>2012</td> <td>Germany</td> </tr>'
  				+'<tr> <td>Golf VI 2,0 TDI (110 лс)</td> <td>81(110)/4200</td> <td>4.5</td> <td>1266</td> <td>2008</td> <td>Germany</td> </tr>'
  				+'<tr> <td>Golf VI 2,0 TDI (140 лс)</td> <td>103(140)/4200</td> <td>4.9</td> <td>1299</td> <td>2008</td> <td>Germany</td> </tr>'
  				+'<tr> <td>Golf VI 1,4 16V</td> <td>59(80)/5000</td> <td>6.4</td> <td>1142</td> <td>2008</td> <td>Germany</td> </tr>'
  				+'<tr> <td>Golf VI 1,4 TSI (122 лс)</td> <td>90(122)/5000</td> <td>6.2</td> <td>1215</td> <td>2008</td> <td>Germany</td> </tr>'
  				+'<tr> <td>Golf VI 1,4 TSI (160 лс)</td> <td>118(160)/5800</td> <td>6.3</td> <td>1271</td> <td>2008</td> <td>Germany</td> </tr>'
  				+'<tr> <td>Golf VI 1.6 </td> <td>75(102)/5600</td> <td>7.1</td> <td>1157</td> <td>2008</td> <td>Germany</td> </tr>'
  				+'<tr> <td>Golf VI 1.2 TSI DSG</td> <td>(105)/5000</td> <td>5.8</td> <td>-</td> <td>2008</td> <td>Germany</td> </tr>'
  				+'<tr> <td>Golf VI 1.2 TSI MT</td> <td>(105)/5000</td> <td>5.7</td> <td>1142</td> <td>2008</td> <td>Germany</td> </tr>';
  				});
});
		});
		$('#BMW').click(function () {
			defect_set = [];
			$("#concern_table").remove();
			container.append('</br><table id="marks_table" border="1"></table>');
			var table = document.getElementById('marks_table');
			table.innerHTML='<tr> <td > <button class="button" id="Ok"><img src="/static/components/images/mini.jpg" width="100" height="100"></button>'+
				'<button class="button" id="Ok"><img src="/static/components/images/BMW.png" width="100" height="100"></button>'
				+'<button class="button" id="Ok"><img src="/static/components/images/rolls_royce.jpg" width="100" height="100"></button></td> '
			+'</tr>';
		
		});
		$('#honda').click(function () {
			defect_set = [];
			$("#concern_table").remove();
			container.append('</br><table id="marks_table" border="1"></table>');
			var table = document.getElementById('marks_table');
			table.innerHTML='<tr> <td > <button class="button" id="Ok"><img src="/static/components/images/Acura.png" width="100" height="100"></button>'+
				'<button class="button" id="Ok"><img src="/static/components/images/honda.jpg" width="100" height="100"></button>'
			+'</tr>';
		
		});
		$('#FIAT').click(function () {
			defect_set = [];
			$("#concern_table").remove();
			container.append('</br><table id="marks_table" border="1"></table>');
			var table = document.getElementById('marks_table');
			table.innerHTML='<tr> <td > <button class="button" id="Ok"><img src="/static/components/images/ferrari.jpg" width="100" height="100"></button>'+
				'<button class="button" id="Ok"><img src="/static/components/images/FIAT.png" width="100" height="100"></button>'
				+'<button class="button" id="Ok"><img src="/static/components/images/jeep.jpg" width="100" height="100"></button></td> '
			+'</tr><button class="button" id="Ok"><img src="/static/components/images/seat.png" width="100" height="100"></button> </td>'
			+'</tr>';
		
		});
		$('#GM').click(function () {
			defect_set = [];
			$("#concern_table").remove();
			container.append('</br><table id="marks_table" border="1"></table>');
			var table = document.getElementById('marks_table');
			table.innerHTML='<tr> <td > <button class="button" id="Ok"><img src="/static/components/images/cadillac.jpg" width="100" height="100"></button>'+
				'<button class="button" id="Ok"><img src="/static/components/images/chevrolet.jpg" width="100" height="100"></button>'
				+'<button class="button" id="Ok"><img src="/static/components/images/daewoo.jpg" width="100" height="100"></button></td> '
			+'</tr>';
		
		});
		$('#SUZUKI').click(function () {
			defect_set = [];
			$("#concern_table").remove();
			container.append('</br><table id="marks_table" border="1"></table>');
			var table = document.getElementById('marks_table');
			table.innerHTML='<tr> <td > <button class="button" id="SUZUKI_model"><img src="/static/components/images/SUZUKI.png" width="100" height="100"></button></td>'
				+'</tr>';
				$('#SUZUKI_model').click(function () {
		$("#marks_table").remove();
			container.append('</br><table id="models_table" border="1"></table>');
			var table = document.getElementById('models_table');
			table.innerHTML='<tr> <th>Модели</th></tr> <tr><td><button id="Vitara" type="button">Vitara</button></td></tr><tr><td><button id="Kizashi" type="button">Kizashi</button></td></tr>'
  +'<tr><td><button id="SX4" type="button">SX4</button></td></tr><tr><td><button id="Solio" type="button">Solio</button></td></tr>'
  +'<tr><td><button id="Splash" type="button">Splash</button></td></tr>'
  +'<tr>   <td><button id="Swift" type="button">Swift</button></td>  </tr>  <tr><td><button id="Aerio" type="button">Aerio</button></td> </tr>'
  +'<tr> <td><button id="Liana" type="button">Liana</button></td> </tr> <tr><td><button id="Cultus" type="button">Cultus</button></td> </tr>'
  +'<tr> <td><button id="Baleno" type="button">Baleno</button></td> </tr> <tr> <td><button id="Every" type="button">Every</button></td> </tr>'
  +'<tr><td><button id="Alto" type="button">Alto</button></td> </tr>';

  				$('#Kizashi').click(function () {
  					$("#models_table").remove();
			container.append('</br><table id="Kizashi_table" border="1"></table>');
			var table = document.getElementById('Kizashi_table');
			table.innerHTML='<tr> <th>Модификация</th> <th>Мощность, кВт(л.с.)/об</th> <th>Расход топлива (средний), л/100 км</th> <th>Вес (масса), кг</th> <th>Год (начала производства), г</th> <th>Страна производства</th> </tr>'
  				+'<tr> <td>KIZASHI 2.4</td> <td>138(185)/6500</td> <td>9</td> <td>1470</td> <td>2008</td> <td>Япония</td> </tr>'
  				+'<tr> <td>KIZASHI 2.4 4x2 CVT</td> <td>(178)/6500</td> <td>8</td> <td>1530</td> <td>2008</td> <td>Япония</td> </tr>'
  				+'<tr> <td>KIZASHI 2.4 4x2 MT</td> <td>(178)/6500</td> <td>7.9</td> <td>1490</td> <td>2008</td> <td>Япония</td> </tr>'
  				+'<tr> <td>KIZASHI 2.4 4x4 CVT	</td> <td>(178)/6500</td> <td>8.3</td> <td>1600</td> <td>2008</td> <td>Япония</td> </tr>'
				  });
				});
		});
		$('#RNM').click(function () {
			defect_set = [];
			$("#concern_table").remove();
			container.append('</br><table id="marks_table" border="1"></table>');
			var table = document.getElementById('marks_table');
			table.innerHTML='<tr> <td > <button class="button" id="Ok"><img src="/static/components/images/renault.png" width="100" height="100"></button>'+
				'<button class="button" id="Ok"><img src="/static/components/images/nissan.png" width="100" height="100"></button>'
				+'<button class="button" id="Ok"><img src="/static/components/images/mitsubishi.png" width="100" height="100"></button></td> '
			+'</tr>';
		});

    },

	/*_sort_defect_set: function () {
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
		}*/
}
