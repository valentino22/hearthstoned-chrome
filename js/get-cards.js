$(document).ready(function() {
	var wowhead_tooltips = { "colorlinks": true, "iconizelinks": true, "renamelinks": true }
	
	$('#hsdeck-content table').filterTable();
	$(".filter-table input").focus();
	
	$('table#table-card-list').tablesorter({
		sortReset      : true,
		theme: 'blackice',
	});
	
	$("p.filter-table").after('<label id="tierListCheckboxWrapper"><input type="checkbox" value="tierList" name="tierListCheckbox">Show Arena Tier List (by Trump)</label>');
	$("label#tierListCheckboxWrapper").after("<div id='tierListLegend'><ul><li>1-15: Excellent, </li><li>16-24: Good, </li><li>25-43: Average, </li><li>44-60: Poor, </li><li>61-83: Terrible</li></ul></div>");
	$("#tierListLegend").after("<div class='clear'></div>");
	
	// show the tier list by default
	$("#tierListCheckboxWrapper input").prop('checked', true);
	$('td:nth-child(7)').show();
	$('th:nth-child(7)').show();
	$('#tierListLegend').show();

	// load options
	chrome.storage.sync.get("arenaTiers", function(data) {
		if (typeof data.arenaTiers != "undefined"){
			if (data.arenaTiers){
				$("#tierListCheckboxWrapper input").prop('checked', true);
				$('td:nth-child(7)').show();
				$('th:nth-child(7)').show();
				$('#tierListLegend').show();
			} else {
				$("#tierListCheckboxWrapper input").prop('checked', false);
				$('td:nth-child(7)').hide();
				$('th:nth-child(7)').hide();
				$('#tierListLegend').hide();
			}
		}
	});
		
	// show or hide the column when the checkbox is clicked
	//$('#tierListCheckboxWrapper input').val($(this).is(':checked'));
	$('#tierListCheckboxWrapper input').change(function() {
		var arenaTiers = null;
        if($(this).is(":checked")) {
			arenaTiers = true;
            $('td:nth-child(7)').show();
			$('th:nth-child(7)').show();
			$('#tierListLegend').show();
        } else {
			arenaTiers = false;
			$('td:nth-child(7)').hide();
			$('th:nth-child(7)').hide();
			$('#tierListLegend').hide();
		}
		
		// save user setting
		chrome.storage.sync.set({'arenaTiers':arenaTiers});
    });
	
	// keep the search bar on the top, when scrolling (this is needed to keep all the other options remaining visible while on the top)
	$(function() {
		var sticky_navigation_offset_top = $('.filter-table').offset().top;
		var sticky_navigation = function(){
			var scroll_top = $(window).scrollTop();
			if (scroll_top > sticky_navigation_offset_top) {
				$('.filter-table').css({ 'position': 'fixed'});
			} else {
				$('.filter-table').css({ 'position': 'relative' });
			}  
		};
		sticky_navigation();		 
		$(window).scroll(function() {
			 sticky_navigation();
		});
	});
});