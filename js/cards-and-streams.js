$(document).ready(function() {

	$('table#hs-streams').hide();
	$("table#table-card-list").hide();
	
	chrome.storage.sync.get("showStreams", function(data) {
		if (typeof data.showStreams != "undefined"){
			if(data.showStreams){
				renderStreams();
			} else {

				renderCards();
			}
		} else {
			renderCards();
		}
	});
	
	$("#showStreams").click(function() {
		$("body").animate({ scrollTop: 0 }, 1);	
		if ($("table#table-card-list").is(':visible')){
			renderStreams();
			chrome.storage.sync.set({'showStreams':true});
		} else {		
			renderCards();
			chrome.storage.sync.set({'showStreams':false});
		}
	});
	
	$("#refreshButton").click(function() {
		$(this).find("i").addClass("fa-spin");
		
		refreshStreams();
		
		setTimeout(function(){
			$("#refreshButton").find("i").removeClass('fa-spin')
		},1000);
	});
	
	function renderStreams(){
		refreshStreams(); // get stream list with ajax
		
		var streams = $('table#hs-streams').tablesorter({
			sortReset      : true,
			theme: 'blackice',
			widgets: ["filter"],
			widgetOptions : {
			  filter_anyMatch : true,
			  filter_columnFilters: false
			}
		});
		$.tablesorter.filter.bindSearch( streams, $('.search') );
		$(".search").focus();

		$("table#hs-streams").show();
		$("table#table-card-list").hide();
		$("#tierListCheckboxWrapper").hide();
		$("#refreshButton").show();
		$("#showStreams").prop('value', 'Show cards');
	}
	
	function renderCards(){
		$("table#hs-streams").hide();
		$("table#table-card-list").show();
		$("#tierListCheckboxWrapper").show();
		$("#refreshButton").hide();
		$("#showStreams").prop('value', 'Show Twitch.tv');

		// load options
		chrome.storage.sync.get("arenaTiers", function(data) {
			if (typeof data.arenaTiers != "undefined"){
				if (data.arenaTiers){
					$("#tierListCheckboxWrapper input").prop('checked', true);
					$('td:nth-child(7)').show();
					$('th:nth-child(7)').show();
				} else {
					$("#tierListCheckboxWrapper input").prop('checked', false);
					$('td:nth-child(7)').hide();
					$('th:nth-child(7)').hide();
				}
			} else {
				// show the tier list by default
				$("#tierListCheckboxWrapper input").prop('checked', true);
				$('td:nth-child(7)').show();
				$('th:nth-child(7)').show();
			}
		});
			
		// show or hide the column when the checkbox is clicked
		$('#tierListCheckboxWrapper input').change(function() {
			var arenaTiers = null;
			if($(this).is(":checked")) {
				arenaTiers = true;
				$('td:nth-child(7)').show();
				$('th:nth-child(7)').show();
			} else {
				arenaTiers = false;
				$('td:nth-child(7)').hide();
				$('th:nth-child(7)').hide();
			}
			
			// save user setting
			chrome.storage.sync.set({'arenaTiers':arenaTiers});
		});
		
		var cards = $('table#table-card-list').tablesorter({
			sortReset      : true,
			theme: 'blackice',
			widgets: ["filter"],
			textExtraction: {
				6: function(node, cards, cellIndex){ return $(node).find(".arenaRankTier").text();}
			},
			widgetOptions : {
			  filter_anyMatch : true,
			  filter_columnFilters: false
			}
		});
		$.tablesorter.filter.bindSearch( cards, $('.search') );
		$(".search").focus();
		
		// change background on hovering above a table row
		$( "table#table-card-list tr" ).hover(
			function() {
				$( this ).find("td").css({"background":"#151515"});
			}, function() {
				$( this ).find("td").css({"background":"#000"});
			}
		);
	}
	
	function refreshStreams(){
		$.ajax({
			url: "https://api.twitch.tv/kraken/streams?game=Hearthstone:+Heroes+of+Warcraft",
			cache: true,
			dataType: 'json',
			type: 'GET',
			success: function (data) {
				var table = "";
				for (var key in data.streams) {
					var stream = data.streams[key];

					var channel = $.isArray(stream.channel) ? stream.channel[0] : stream.channel;

					if (channel) {
						var display_name = (channel.display_name && channel.display_name.length) ? channel.display_name : channel.name;
						var status = (channel.status && channel.status.length) ? channel.status : "";
						var page_url = channel.url;
						var page_popout_url = channel.url + '/popout';
						var chat_url = 'http://www.twitch.tv/chat/embed?channel=' + channel.name + '&popout_chat=true';
						
						table += '<tr id="' + channel._id + '">';
						table += '<td class="channel_name"><a href="' + page_url + '" target="_blank">' + display_name + '</a></td>';
						table += '<td class="status"><a href="' + page_url + '" target="_blank">' + status + '</a></td>';				
						table += '<td class="viewers">' + stream.viewers + '</td>';				
						table += '</tr>';
					}
				}

				$('table#hs-streams tbody').html(table).trigger("update").trigger("appendCache");
				
				// change background on hovering above a table row
				$( "table#hs-streams tr" ).hover(
					function() {
						$( this ).find("td").css({"background":"#151515"});
					}, function() {
						$( this ).find("td").css({"background":"#000"});
					}
				);
			}
		});
	}
	
	// scroll to top when searching
	$( ".search" ).keypress(function() {
		$("body").animate({ scrollTop: 0 }, 1);
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
	
	// remove the &power part from the url to load the proper website on click
	$("[rel=popover]").on('click', function(){
		$(this).prop('href', this.href.substring(0, this.href.length - 6));
	});
	
	$(function(){
		$("[rel=popover]").popover({
			html:true,
			trigger: 'hover focus',
			placement:get_popover_placement,
			viewport:'#table-card-list',
			content: function() {
				$.ajax({
					url: this.href,
					cache: true,
					dataType: 'html',
					type: 'GET',
					async: false,
					success: function( data ) {
						var imgTag = data.substring(data.indexOf("tooltip_enus: '")+15);
						imgTag = imgTag.substring(0,imgTag.lastIndexOf("tooltip_premium_enus"));
						if (imgTag.indexOf("<table>") > 1)
						{
							imgTag = imgTag.substring(0,imgTag.indexOf("<table>"));
						}
						imgTag = imgTag.substring(imgTag.indexOf('src="')+5);
						imgTag = imgTag.substring(0,imgTag.indexOf('class="')-1);
						imgTag = "https:" + imgTag;
						document.imageUrl = imgTag;
					}
				});
				return '<img style="width:auto;height:303px;" src="' + document.imageUrl + '" />';
			}
		});		
	});
	
	// calculate the popover placement on the fly depending on the table cell position
	function get_popover_placement(pop, dom_el) {
		var elementPositionFromTop = $(dom_el).position().top;
		var heightScrolledFromTop = $(window).scrollTop();
		var relativeElementPosition = elementPositionFromTop - heightScrolledFromTop;
		if (relativeElementPosition < 300)
		{
			return 'bottom';
		}
		else
		{
			return 'top';
		}
	}
});