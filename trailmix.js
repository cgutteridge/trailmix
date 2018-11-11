jQuery(document).ready(function() {
	var card = jQuery( "<div style='box-shadow: 2px 2px 8px 2px rgba(0,0,0,0.2);padding:0.2em;border: solid 1px black; background-color:#eee; position:absolute;max-width:30%;'></div>" ).hide();
	jQuery('body').append( card );
	var cards = {};
	jQuery(".pkm-n").each( function(i,e) {
		var section = jQuery(e);
		cards[section.attr("id")] = {	
			icon: section.find(".pkm-i").parent().html(),
			title: section.find('div').first().html(),
			led: section.find(".pkm-led").text(), // using text to lose the br and b etc.
			content: section.find(".pkm-s").html()
		};

	});
	jQuery("a").each( function(i,e) {
		var link = jQuery(e);
		var href = link.attr('href');
		if( !href || !href.match( /^#[a-z0-9]+$/i )) { return; }
		var id = href.substr(1);
		var cardData = cards[id];
	
		// make a yellow tint to the active links	
		link.css( 'background-color','rgb(255,255,0,0.2)');

		link.mouseover( function(e) {
			card.show();
			card.html("");
			var tdom = jQuery("<div style='font-weight:bold;margin-bottom:5px;border-bottom: solid 1px black;'></div>").html(cardData.title);
			tdom.prepend(jQuery("<div style='float:right;margin:0 0 10px 10px'></div>").append(cardData.icon));
			tdom.append(jQuery("<div style='clear:right'></div>"));
			card.append( tdom );
			card.append( jQuery("<div style='padding:5px'></div>").text(cardData.content));
			var left = e.pageX-card.width()/2;
			card.css( 'left',left );
			card.css( 'top',e.pageY+10 );
			console.log(cardData);
		});
		link.mouseout( function(e) {
			card.hide();
		});
			
	});

});


/*
<div id="S28117cc" class="pkm-n">
<p><b><img class="pkm-i" style="max-height: 36px;max-width: 36px" src="https://yt3.ggpht.com/-C0SCkshJlVU/AAAAAAAAAAI/AAAAAAAAAAA/mYYQv4aNs1M/s88-c-k-no-mo-rj-c0xffffff/photo.jpg" /></b></p>
<div>Inter Planetary File System</div>
<p><span style="float: right"><br />
<span class="pkm-led"><br />
Nov06<br />
</span></span></p>
<p>&nbsp;</p>
<div class="pkm-s">IPFS is the Distributed Web</div>
<div class="pkm-b">&#8230;</div>
<hr />
</div>
*/
