$(document).ready(function(){


///// TILES & UP/DOWN BUTTONS /////


var verticalimages = [	"0px", "627px", "1254px", "1881px", "2508px"];

var lightboxCurrent = 0;

function downclick() {

	lightboxCurrent += 1

 	$("#internalwrapper").animate({"bottom": verticalimages[lightboxCurrent]}, 1000)
 	$("#upbutton").fadeIn()

 	if (lightboxCurrent==(verticalimages.length - 1)) {

 		$("#downbutton").fadeOut()
 		$("#upbutton").fadeIn()
 		$("rightbutton").fadeIn()

 	}


}

function upclick() {


	lightboxCurrent -= 1

 	$("#internalwrapper").animate({"bottom": verticalimages[lightboxCurrent]}, 1000)

 	$("#downbutton").fadeIn()

 	if (lightboxCurrent==(verticalimages.length - 31)) {  //NB  "-5" needs to be whatever length of array is

 		$("#upbutton").fadeOut()
 	}


}



  $("#downbutton").click(function(event) {      	

  	event.preventDefault();

  	downclick()

	});


  $("#upbutton").click(function(event) {      	

  	event.preventDefault();

  	upclick()

	});

 ///// END OF TILES & UP/DOWN BUTTONS ///// 


 $("#explore").click(function(event) {       

    event.preventDefault();

    $("#slider").animate({"left": "-940px"}, 1000, function(){

      $("#buttons").fadeIn()
      $("#tooltip").fadeIn()
    })

  });


var boxs = [
    {
        selector: '#cover1',
        headline: 'Headline1',
        copy: 'COPY1',
        content: '<iframe class="vine-embed" src="https://vine.co/v/bxTmwB0uIbm/embed/simple" width="560" height="560" frameborder="0"></iframe><script async src="//platform.vine.co/static/scripts/embed.js" charset="utf-8"></script>'
    },

    {
        selector: '#cover2',
        headline: 'Headline2',
        copy: 'COPY2',
        content: '<img src="images/airstreams.jpg">'
    },

    {
        selector: '#cover3',
        headline: 'Headline3',
        copy: 'COPY3',
        content: '<img src="images/boldbean.jpg">'
    },

    {
        selector: '#cover4',
        headline: 'Headline4',
        copy: 'COPY4',
        content: '<img src="images/fox.jpg">'
    },

    {
        selector: '#cover5',
        headline: 'Headline5',
        copy: 'COPY5',
        content: '<img src="images/houseofbeer.jpg">'
    },

    {
        selector: '#cover6',
        headline: 'Headline6',
        copy: 'COPY6',
        content: '<img src="images/tarpon1.jpg">'
    },

    {
        selector: '#cover7',
        headline: 'Headline7',
        copy: 'COPY7',
        content: '<img src="images/biff1.jpg">'
    },

    {
        selector: '#cover8',
        headline: 'Headline8',
        copy: 'COPY8',
        content: '<img src="images/fred2.jpg">'
    },

    {
        selector: '#cover9',
        headline: 'Headline9',
        copy: 'COPY9',
        content: '<img src="images/sherry1.jpg">'
    },

    {
        selector: '#cover10',
        headline: 'Headline10',
        copy: 'COPY10',
        content: '<img src="images/wynwood.jpg">'
    },

    {
        selector: '#cover11',
        headline: 'Headline11',
        copy: 'COPY11',
        content: '<img src="images/cigar3.jpg">'
    },

    {
        selector: '#cover12',
        headline: 'Headline12',
        copy: 'COPY12',
        content: '<img src="images/donut2.jpg">'
    },

    {
        selector: '#cover13',
        headline: 'Headline13',
        copy: 'COPY13',
        content: '<img src="images/bigcypress.jpg">'
    },

    {
        selector: '#cover14',
        headline: 'Headline14',
        copy: 'COPY14',
        content: '<img src="images/dougs1.jpg">'
    },

    {
        selector: '#cover15',
        headline: 'Headline15',
        copy: 'COPY15',
        content: '<img src="images/noname.jpg">'
    },

    {
        selector: '#cover16',
        headline: 'Headline16',
        copy: 'COPY16',
        content: '<iframe class="vine-embed" src="https://vine.co/v/bQJhluAenzT/embed/simple" width="560" height="560" frameborder="0"></iframe><script async src="//platform.vine.co/static/scripts/embed.js" charset="utf-8"></script>'
    },

    {
        selector: '#cover18',
        headline: 'Headline18',
        copy: 'COPY18',
        content: '<img src="images/sunset.jpg">'
    },

    {
        selector: '#cover17',
        headline: 'Headline17',
        copy: 'COPY17',
        content: '<img src="images/news.jpg">'
    },

    {
        selector: '#cover19',
        headline: 'Headline19',
        copy: 'COPY19',
        content: '<img src="images/garbo2.jpg">'
    },

    {
        selector: '#cover20',
        headline: 'Headline20',
        copy: 'COPY20',
        content: '<img src="images/hemmingway.jpg">'
    },

    {
        selector: '#cover21',
        headline: 'Headline21',
        copy: 'COPY21',
        content: '<img src="images/hotel.jpg">'
    },

    {
        selector: '#cover22',
        headline: 'Headline22',
        copy: 'COPY22',
        content: '<img src="images/bluehaven.jpg">'
    }


 ]

 function processPlaceClick(box) {

    $("#buttons").fadeOut();
    $(".dayofweek").fadeOut();
    $("#tooltip").fadeOut();
    $("#lightbox").fadeIn(function(event){      
      $("#content").html(box.content);
      $("#copyheader").html(box.headline)
      $("#copy").html(box.copy)
    });

 }

 $.each(boxs, function(i, box) {
        $(box.selector).on('click', function(e){
            e.preventDefault();
            processPlaceClick(box);
        });
    });


  $("#close").click(function(event) {        

    event.preventDefault();


    $("#lightbox").fadeOut(function(event){
       $("#buttons").fadeIn();
      $("#content").html('');
      $("#copyheader").html('')
      $("#copy").html('')
       $(".dayofweek").fadeIn();

    })

  });








}); //ready

