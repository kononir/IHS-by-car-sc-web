/**
 * Paint panel.
 */

AutopartSearcher.PaintPanel = function (containerId) {
	this.containerId = containerId;
};

let criterionRowsNum = 0;

AutopartSearcher.PaintPanel.prototype = {
	init: function () {
		this._initMarkup(this.containerId);
	},

	_initMarkup: function (containerId) {
		var container = $('#' + containerId);

		var self = this;

		$.get("static/components/html/autopart_searching/autopart-searching.html", function (data) {
			container.html(data);

			SCWeb.core.Server.resolveScAddr(['concept_autopart'], function (keynodes) {
				$('#type-of-autopart-label').attr("sc_addr", keynodes['concept_autopart']);
			});

			$('#article-value').click(function () {
				if ($('#article-value-list').children().length === 0) {
					self._findAllArticleValues();
				}
			});

			$('#find-autoparts-by-article').click(function () {
				var is_correct = self._validate($('#article-value'), $('#article-value-list'));

				if (!is_correct) {
					alert("Пожалуйста, выберите один из представленных артикулов");
					return;
				}

				self._findAutopartByArticle();
			});

			var type_of_autopart = $('#type-of-autopart');
			type_of_autopart.click(function () {
				if ($('#type-of-autopart-list').children().length === 0) {
					self._findAllAutopartTypes();
				}
			});

			type_of_autopart.change(function () {
				var criterion_rows_children = $('#criterion-rows').children();
				for (var i = 0; i < criterion_rows_children.length; i++) {
					$('#criterion-' + (i + 1) + '-list').children().remove();
				}
			});

			$('#manufacturer-value').click(function () {
				if ($('#manufacturer-value-list').children().length === 0) {
					self._findAllManufacturers();
				}
			});

			var add_criterion_row_btn = $('#add-criterion-row-btn');
			add_criterion_row_btn.click(function () {
				if (criterionRowsNum === 0) {
					add_criterion_row_btn.after(
						'<button id="remove-criterion-row-btn" class="btn btn-danger">-</button>');
					self._setOnClickRemoveCriterionRow();
				}

				criterionRowsNum++;

				var criterion_input_id = 'criterion-' + criterionRowsNum;
				var criterion_list_id = 'criterion-' + criterionRowsNum + '-list';
				var criterion_values_input_id = 'criterion-' + criterionRowsNum + '-value';
				var criterion_values_list_id = 'criterion-' + criterionRowsNum + '-value-list';

				$('#criterion-rows').append(
					'<div class="row criterion-row-' + criterionRowsNum + '"> \
						<div class="form-group col-md-3"> \
							<label for="' + criterion_input_id + '">Критерий</label> \
							<input type="text" id="' + criterion_input_id + '" class="form-control" placeholder="Введите критерий" \
								list="' + criterion_list_id + '"> \
							<datalist id="' + criterion_list_id + '"></datalist> \
						</div> \
						<div class="form-group col-md-3"> \
							<label for="' + criterion_values_input_id + '">Значение критерия</label> \
							<input type="text" id="' + criterion_values_input_id + '" class="form-control" placeholder="Введите значение" \
								list="' + criterion_values_list_id + '"> \
							<datalist id="' + criterion_values_list_id + '"></datalist> \
						</div> \
					</div>');

				var criterion_input = $('#' + criterion_input_id);
				var criterion_list = $('#' + criterion_list_id);
				var criterion_values_input = $('#' + criterion_values_input_id);
				var criterion_values_list = $('#' + criterion_values_list_id);

				self._setOnClickCriterionsSearching(criterion_input, criterion_list);
				self._setOnChangeRemoveCriterionValues(criterion_input, criterion_values_list);
				self._setOnClickCriterionsValuesSearching(criterion_input_id, criterion_list_id,
					criterion_values_input, criterion_values_list);
			});

			$('#find-autoparts').click(function () {
				var is_correct = self._validate($('#type-of-autopart'), $('#type-of-autopart-list'));

				if (!is_correct) {
					alert("Пожалуйста, выберите один из представленных типов запчасти");
					return;
				}

				var selected_criterions_num = $('#criterion-rows').children().length;
				for (var i = 1; i <= selected_criterions_num; i++) {
					is_correct = self._validate($('#criterion-' + i), $('#criterion-' + i + '-list'));
					if (!is_correct) {
						alert("Пожалуйста, выберите один из представленных критериев в строке " + i);
						return;
					}

					is_correct = self._validate($('#criterion-' + i + '-value'), $('#criterion-' + i + '-value-list'));
					if (!is_correct) {
						alert("Пожалуйста, выберите один из представленных значениев критерия '" + $('#criterion-' + i).val() + "'");
						return;
					}
				}

				is_correct = self._validate($('#manufacturer-value'), $('#manufacturer-value-list'));

				if (!is_correct && $('#manufacturer-value').val() !== "") {
					alert("Пожалуйста, выберите одну из представленных фирм-производителей");
					return;
				}

				self._findAutoparts();
			});
		});
	},

	_validate: function (input, list) {
		var selected_value = input.val();
		var values = list.children();

		var is_correct = false;
		for (var i = 0; i < values.length; i++) {
			if (selected_value === values[i].value) {
				is_correct = true;
			}
		}

		return is_correct;
	},

	_setOnClickRemoveCriterionRow: function () {
		var remove_criterion_row_btn = $('#remove-criterion-row-btn');
		remove_criterion_row_btn.click(function () {
			if (criterionRowsNum === 1) {
				remove_criterion_row_btn.remove();
			}

			$('#criterion-rows').children()[criterionRowsNum - 1].remove();

			criterionRowsNum--;
		});
	},

	_setOnClickCriterionsSearching: function (criterion_input, criterion_list) {
		var self = this;

		criterion_input.click(function () {
			if (criterion_list.children().length === 0) {
				var is_correct = self._validate($('#type-of-autopart'), $('#type-of-autopart-list'));

				if (!is_correct) {
					alert("Пожалуйста, выберите один из представленных типов");
					return;
				}

				self._findAllCriterions(criterion_list);
			}
		});
	},

	_setOnChangeRemoveCriterionValues: function (criterion_input, criterion_value_list) {
		criterion_input.change(function () {
			criterion_value_list.children().remove();
		});
	},

	_setOnClickCriterionsValuesSearching: function (criterion_input_id, criterion_list_id,
		criterion_value_input, criterion_values_list) {

		var self = this;

		criterion_value_input.click(function () {
			if (criterion_values_list.children().length === 0) {
				var is_correct = self._validate($('#' + criterion_input_id), $('#' + criterion_list_id));

				if (!is_correct) {
					alert("Пожалуйста, выберите один из представленных критериев");
					return;
				}

				self._findAllCriterionValues(criterion_input_id, criterion_list_id, criterion_values_list);
			}
		});
	},

	_findAllArticleValues: function () {
		var self = this;
		var article_values_set = new Set();

		SCWeb.core.Server.resolveScAddr(['concept_code_of_article'], function (keynodes) {
			var concept_code_of_article_addr = keynodes['concept_code_of_article'];

			window.sctpClient.iterate_elements(SctpIteratorType.SCTP_ITERATOR_3F_A_A, [
				concept_code_of_article_addr,
				sc_type_arc_pos_const_perm,
				sc_type_node
			]).done(function (identifiers) {
				for (var i = 0; i < identifiers.length; i++) {
					var article_value_addr = identifiers[i][2];
					self.addUniqueOption(article_values_set, $('#article-value-list'), article_value_addr);
				}
			});
		});
	},

	_findAutopartByArticle: function () {
		var self = this;

		var selected_article_value = $('#article-value').val();
		var selected_article_value_addr
			= $('#article-value-list [value="' + selected_article_value + '"]').data('value');

		SCWeb.core.Server.resolveScAddr(['nrel_article'], function (keynodes) {
			var nrel_article_addr = keynodes['nrel_article'];

			window.sctpClient.iterate_elements(SctpIteratorType.SCTP_ITERATOR_5A_A_F_A_F, [
				sc_type_node,
				sc_type_arc_common | sc_type_const,
				selected_article_value_addr,
				sc_type_arc_pos_const_perm,
				nrel_article_addr
			]).done(function (identifiers) {
				var found_autopart_addr = identifiers[0][0];

				self.addResultToFound($('#found-autopart-by-article'));
				self.addLinkToFound($('#found-autopart-by-article'), found_autopart_addr);
			});
		});
	},

	_findAllAutopartTypes: function () {
		var self = this;
		var autopart_types_set = new Set();

		SCWeb.core.Server.resolveScAddr(['concept_autopart', 'nrel_inclusion'], function (keynodes) {
			var concept_autopart_addr = keynodes['concept_autopart'];
			var nrel_inclusion_addr = keynodes['nrel_inclusion'];

			window.sctpClient.iterate_elements(SctpIteratorType.SCTP_ITERATOR_5F_A_A_A_F, [
				concept_autopart_addr,
				sc_type_arc_common | sc_type_const,
				sc_type_node,
				sc_type_arc_pos_const_perm,
				nrel_inclusion_addr
			]).done(function (identifiers) {
				for (var i = 0; i < identifiers.length; i++) {
					var autopart_type_addr = identifiers[i][2];
					self.addUniqueOption(autopart_types_set, $('#type-of-autopart-list'), autopart_type_addr);
				}
			});
		});
	},

	_findAllManufacturers: function () {
		var self = this;
		var manufacturer_set = new Set();

		SCWeb.core.Server.resolveScAddr(['concept_company', 'nrel_manufacturer'], function (keynodes) {
			var concept_company_addr = keynodes['concept_company'];
			var nrel_manufacturer_addr = keynodes['nrel_manufacturer'];

			window.sctpClient.iterate_elements(SctpIteratorType.SCTP_ITERATOR_3F_A_A, [
				concept_company_addr,
				sc_type_arc_pos_const_perm,
				sc_type_node
			]).done(function (identifiers_1) {
				for (var i1 = 0; i1 < identifiers_1.length; i1++) {
					var company_value_addr = identifiers_1[i1][2];

					window.sctpClient.iterate_elements(SctpIteratorType.SCTP_ITERATOR_5A_A_F_A_F, [
						sc_type_node,
						sc_type_arc_common | sc_type_const,
						company_value_addr,
						sc_type_arc_pos_const_perm,
						nrel_manufacturer_addr
					]).done(function (identifiers_2) {
						if (identifiers_2.length != 0) {
							var manufacturer_company_value_addr = identifiers_2[0][2];
							self.addUniqueOption(manufacturer_set, $('#manufacturer-value-list'), manufacturer_company_value_addr);
						}
					});
				}
			});
		});
	},

	_findAllCriterions: function (criterion_list) {
		var self = this;
		var criterion_set = new Set();

		var type_of_autopart = $('#type-of-autopart').val();

		var selected_type_of_autopart_addr
			= $('#type-of-autopart-list [value="' + type_of_autopart + '"]').data('value');

		SCWeb.core.Server.resolveScAddr(['nrel_inclusion', 'parameter'], function (keynodes) {
			var nrel_inclusion_addr = keynodes['nrel_inclusion'];
			var parameter_addr = keynodes['parameter'];

			window.sctpClient.iterate_elements(SctpIteratorType.SCTP_ITERATOR_5F_A_A_A_F, [
				selected_type_of_autopart_addr,
				sc_type_arc_common | sc_type_const,
				sc_type_node,
				sc_type_arc_pos_const_perm,
				nrel_inclusion_addr
			]).done(function (identifiers_1) {
				var autopart_addr = identifiers_1[0][2];

				window.sctpClient.iterate_elements(SctpIteratorType.SCTP_ITERATOR_5A_A_F_A_F, [
					sc_type_node,
					sc_type_arc_common | sc_type_const,
					autopart_addr,
					sc_type_arc_pos_const_perm,
					nrel_inclusion_addr
				]).done(function (identifiers_2) {
					for (var i2 = 0; i2 < identifiers_2.length; i2++) {
						var curr_parameter_value_addr = identifiers_2[i2][0];

						window.sctpClient.iterate_elements(SctpIteratorType.SCTP_ITERATOR_3A_A_F, [
							sc_type_node,
							sc_type_arc_pos_const_perm,
							curr_parameter_value_addr
						]).done(function (identifiers_3) {
							for (var i3 = 0; i3 < identifiers_3.length; i3++) {
								var some_node_addr = identifiers_3[i3][0];

								window.sctpClient.iterate_elements(SctpIteratorType.SCTP_ITERATOR_3F_A_F, [
									parameter_addr,
									sc_type_arc_pos_const_perm,
									some_node_addr
								]).done(function (identifiers_4) {
									if (identifiers_4.length != 0) {
										var parameter_type_addr = identifiers_4[0][2];

										self.addUniqueOption(criterion_set, criterion_list, parameter_type_addr);
									}
								});
							}
						});
					}
				});
			});
		});
	},

	_findAllCriterionValues: function (criterion_input_id, criterion_list_id, criterion_values_list) {
		var self = this;
		var criterion_values_set = new Set();

		var selected_criterion = $('#' + criterion_input_id).val();

		var selecte_criterion_addr
			= $('#' + criterion_list_id + ' [value="' + selected_criterion + '"]').data('value');

		window.sctpClient.iterate_elements(SctpIteratorType.SCTP_ITERATOR_3F_A_A, [
			selecte_criterion_addr,
			sc_type_arc_pos_const_perm,
			sc_type_node
		]).done(function (identifiers) {
			for (var i = 0; i < identifiers.length; i++) {
				var criterion_value_addr = identifiers[i][2];

				self.addUniqueOption(criterion_values_set, criterion_values_list, criterion_value_addr);
			}
		});
	},

	_findAutoparts: function () {
		var self = this;

		var selected_type_of_autopart = $('#type-of-autopart').val();
		var selected_type_of_autopart_addr
			= $('#type-of-autopart-list [value="' + selected_type_of_autopart + '"]').data('value');

		var selected_manufacturer = $('#manufacturer-value').val();
		var selected_manufacturer_addr;
		if (selected_manufacturer !== "") {
			selected_manufacturer_addr
				= $('#manufacturer-value-list [value="' + selected_manufacturer + '"]').data('value');
		}

		var selected_criterions_num = $('#criterion-rows').children().length;
		var selected_criterions_addrs = [];
		for (var i = 1; i <= selected_criterions_num; i++) {
			var selected_criterion = $('#criterion-' + i + '-value').val();
			if (selected_criterion !== "") {
				var selected_type_of_autopart_addr
					= $('#criterion-' + i + '-value-list [value="' + selected_criterion + '"]').data('value');
				selected_criterions_addrs.push(selected_type_of_autopart_addr);
			}
		}

		self.addResultToFound($('#found-autoparts'));

		SCWeb.core.Server.resolveScAddr(['nrel_manufacturer', 'nrel_inclusion'], function (keynodes) {
			var nrel_manufacturer_addr = keynodes['nrel_manufacturer'];
			var nrel_inclusion_addr = keynodes['nrel_inclusion'];

			window.sctpClient.iterate_elements(SctpIteratorType.SCTP_ITERATOR_5F_A_A_A_F, [
				selected_type_of_autopart_addr,
				sc_type_arc_common | sc_type_const,
				sc_type_node,
				sc_type_arc_pos_const_perm,
				nrel_inclusion_addr
			]).done(function (identifiers_1) {
				if (selected_manufacturer_addr !== undefined) {
					for (var i = 0; i < identifiers_1.length; i++) {
						var non_filtered_autopart_addr = identifiers_1[i][2];

						window.sctpClient.iterate_elements(SctpIteratorType.SCTP_ITERATOR_5F_A_F_A_F, [
							non_filtered_autopart_addr,
							sc_type_arc_common | sc_type_const,
							selected_manufacturer_addr,
							sc_type_arc_pos_const_perm,
							nrel_manufacturer_addr
						]).done(function (identifiers_2) {
							if (identifiers_2.length !== 0) {
								var autopart_of_manufacturer_addr = identifiers_2[0][0];
								self.filterAutopart(autopart_of_manufacturer_addr, selected_criterions_addrs);
							}
						});
					}
				} else {
					for (var i = 0; i < identifiers_1.length; i++) {
						var non_filtered_autopart_addr = identifiers_1[i][2];
						self.filterAutopart(non_filtered_autopart_addr, selected_criterions_addrs);
					}
				}
			});
		});
	},

	filterAutopart: function (autopart_addr, criterions_addrs) {
		var self = this;

		if (criterions_addrs.length === 0) {
			self.addLinkToFound($('#found-autoparts'), autopart_addr);
		} else {
			var criterions_addrs_copy = criterions_addrs.slice();
			var criterions_addr = criterions_addrs_copy.pop();

			SCWeb.core.Server.resolveScAddr(['nrel_inclusion'], function (keynodes) {
				var nrel_inclusion_addr = keynodes['nrel_inclusion'];

				window.sctpClient.iterate_elements(SctpIteratorType.SCTP_ITERATOR_5F_A_F_A_F, [
					criterions_addr,
					sc_type_arc_common | sc_type_const,
					autopart_addr,
					sc_type_arc_pos_const_perm,
					nrel_inclusion_addr
				]).done(function (identifiers) {
					if (identifiers.length !== 0) {
						self.filterAutopart(autopart_addr, criterions_addrs_copy);
					}
				});
			});
		}
	},

	addUniqueOption: function (options_set, select_item, element_addr) {
		var self = this;

		if (!options_set.has(element_addr)) {
			options_set.add(element_addr);
			self.addNewOptionAsElementWithAddr(select_item, element_addr);
		}
	},

	addNewOptionAsElementWithAddr: function (select_item, element_addr) {
		window.scHelper.getIdentifier(element_addr, SCWeb.core.Server._current_language).done(function (text) {
			select_item.append('<option data-value="' + element_addr + '" value="' + text + '"/>');
		});
	},

	addResultToFound: function (found_el_div) {
		found_el_div.children().remove();

		found_el_div.append('<br><h4>Результат:</h4>');
	},

	addLinkToFound: function (found_el_div, found_el_addr) {
		window.scHelper.getIdentifier(found_el_addr, SCWeb.core.Server._current_language).done(function (text) {
			found_el_div.append(
				'<a href="#" class="sc-element" sc_addr="' + found_el_addr + '">' + text + '</a><br>');
		});
	}
};