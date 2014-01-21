$(document).ready(function() {
	var wowhead_tooltips = { "colorlinks": true, "iconizelinks": true, "renamelinks": true }
	$('#hsdeck-content table').filterTable();
	$(".filter-table input").focus();
	
	$('table#table-card-list').tablesorter({
		sortReset      : true,
		theme: 'blackice',
	});
});