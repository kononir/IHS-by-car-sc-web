/**
 * Paint panel.
 */

var myAddr1, myAddr2;

IntercheangableCar.PaintPanel = function(containerId) {
  this.containerId = containerId;
  this.sc_type_arc_pos_var_perm =
    sc_type_arc_access | sc_type_var | sc_type_arc_pos | sc_type_arc_perm;
};

IntercheangableCar.PaintPanel.prototype = {
  init: function() {
    this._initMarkup(this.containerId);
  },

  _initMarkup: function(containerId) {
    var container = $("#" + containerId);

    new Promise(function(resolve) {
      window.sctpClient
        .create_node(sc_type_node | sc_type_const)
        .done(function(allEventsNode)
         {
          window.sctpClient.create_link().done(function(allEventsNodeLink) {
          window.sctpClient
            .create_arc(
                sc_type_arc_common | sc_type_const,
                allEventsNode,
                allEventsNodeLink
              )
              .done(function(generatedCommonArc) {
                window.sctpClient
                  .create_arc(
                    sc_type_arc_pos_const_perm,
                    scKeynodes.nrel_system_identifier,
                    generatedCommonArc
                  )
                  .done(function() {
                    resolve(allEventsNode);
                  });
              });
          });
        });
    }).then(response => {
      var self = this;
      container.append('<div class="sc-no-default-cmd"><h3 ">Найти модель, имеющую взаимозаменяемую деталь к исходной</h3></div>');

      container.append("<br>");
      container.append(
        '<input style="width:30%" type = "button" class = "btn btn-success sc-no-default-cmd" value = "Найти" id= "define-button">'
      );
      $("#define-button").click(function() {
        //self._print();
        self._defineAgeLimit(response);
      });
      
      self._showBooks(containerId);
      container.append("<br>");

      self._showDetails(containerId);

      container.append("<br>");

  
    });

  },

  _defineAgeLimit: function(allEventsNode) {
    var self = this;
    myAddr1=$("#car_type option:selected").val();
    //self._addToSearchList(allEventsNode, myAddr1);
    myAddr2=$("#detail_type option:selected").val();
    //self._addToSearchList(allEventsNode, myAddvr2);
    
    SCWeb.core.Server.resolveScAddr(["ui_menu_find_car_with_interchangeable_detail"], function(data) {
      var cmd = data["ui_menu_find_car_with_interchangeable_detail"];
      SCWeb.core.Main.doCommand(cmd, [myAddr1, myAddr2], function(result) {
        if (result.question != undefined) {
          SCWeb.ui.WindowManager.appendHistoryItem(result.question);
        }
      });
    });
  },

  _addToSearchList: function(response, addr) {
    window.scHelper
      .checkEdge(response, sc_type_arc_pos_const_perm, addr)
      .fail(function() {
        window.sctpClient.create_arc(sc_type_arc_pos_const_perm, response, addr);
      });
  },

  _showBooks: function(divId) {
    var container1 = $("#" + divId);
    SCWeb.core.Server.resolveScAddr(["concept_automobili"], function(keynodes) {
      var concept_automobili_addr = keynodes["concept_automobili"];
      window.sctpClient
        .iterate_elements(SctpIteratorType.SCTP_ITERATOR_3F_A_A, [
          concept_automobili_addr,
          sc_type_arc_pos_const_perm | sc_type_const,
          sc_type_node
        ])
        .done(function(concept_cars) {
          var concept_cars_addr = concept_cars.map(event => event[2]);

          SCWeb.core.Server.resolveIdentifiers(concept_cars_addr, function(keynodes) {
            container1.append('<div class="sc-no-default-cmd"><h4 ">Выберите модель : </h4></div>');
            container1.append("<br>");

            var concept_car_name = [];
            var strProm = '<select id ="car_type" class="form-control" style="width:30%;">';
            for (var i = 0; i <= concept_cars_addr.length - 1; i++) {
              concept_car_name[i] = keynodes[concept_cars_addr[i]];
              strProm += '<option value="' + concept_cars_addr[i];
              strProm += '">' + concept_car_name[i] + "</option>";
            }
            strProm += "</select>";

            container1.append(strProm);
          });
        });
    });
  },

   _showDetails: function(divId) {
    var container2 = $("#" + divId);
    SCWeb.core.Server.resolveScAddr(["details_kurs"], function(keynodes) {
      var details_kurs_addr = keynodes["details_kurs"];
      window.sctpClient
        .iterate_elements(SctpIteratorType.SCTP_ITERATOR_3F_A_A, [
          details_kurs_addr,
          sc_type_arc_pos_const_perm | sc_type_const,
          sc_type_node
        ])
        .done(function(concept_details) {
          var concept_details_addr = concept_details.map(event => event[2]);

          SCWeb.core.Server.resolveIdentifiers(concept_details_addr, function(keynodes) {
            container2.append('<div class="sc-no-default-cmd"><h4 ">Выберите деталь : </h4></div>');
            container2.append("<br>");

            var concept_detail_name = [];
            var strProm2 = '<select id ="detail_type" class="form-control" style="width:30%;">';
            for (var i = 0; i <= concept_details_addr.length - 1; i++) {
              concept_detail_name[i] = keynodes[concept_details_addr[i]];
              strProm2 += '<option value="' + concept_details_addr[i];
              strProm2 += '">' + concept_detail_name[i] + "</option>";
            }
            strProm2 += "</select>";

            container2.append(strProm2);

            
            container2.append("<br>");
          });
        });
    });
  },
  
  sleep: function(timeMil) {
    var t = (new Date()).getTime();
    var i = 0;
    while(((new Date()).getTime() - t) < timeMil) {
      i++;
    }
  }
};

