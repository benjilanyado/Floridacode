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

 	if (lightboxCurrent==(verticalimages.length - 5)) {  //NB  "-5" needs to be whatever length of array is

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
        selector: '#cover3',
        headline: 'Bold Bean Cafe',
        copy: "First stop of the day - <a href='http://www.boldbeancoffee.com/pages/cafe'>Bold Bean Cafe</a> (869 Stockton Street, Jacksonville). Thanks to <a href='https://twitter.com/pricesquire'>@pricesquire</a> for the tip. My Americano was very nice, as was the the breadline pie I had with it. It's quite a hip place.",
        address: "• <a href='http://www.boldbeancoffee.com/pages/cafe'>boldbeancoffee.com</a>",
        content: '<img src="images/boldbean.jpg">'
    },

    {
        selector: '#cover2',
        headline: 'Airstream ranch',
        copy: 'On the way west along the I-4, I pulled in at Airstream Ranch.  Eight trailers/caravans shoved in the ground, lengthways. Frank and Dorothy Bates erected them in 2007. In 2010,<a href="http://www.tampabay.com/news/localgovernment/airstream-ranch-along-i-4-does-not-violate-law-judges-rule/1072831%20"> after a legal battle</a>, a judge ruled they could keep them up.',
        content: '<img src="images/airstreams.jpg">',
        address: ''
    },

    {
        selector: '#cover1',
        headline: 'St Augustine',
        copy: "St Augustine was recommended by <a href='https://twitter.com/pwells228/status/328888221004079105'>@pwells228</a> and <a href='https://twitter.com/karenzander/status/328625389264056321'>@karenzander</a> – who volunteered to give me a tour around the city. It’s the oldest continuously occupied European-established settlement in the US, with Spanish style architecture and a narrow, pedestrian only downtown.<br/>The Quarter re-opened in March, after $3m was spent on its creation. It's on St George street right in the center of St Augustine. Cindy Stavely gave me a whistle stop tour round the living museum, which has a blacksmith, old newspaper printing press, and a gunsmith.",
        content: '<img src="images/gunner.jpg">',
        address: "• <a href='http://colonialquarter.com/'>colonialquarter.com</a>"
    },

    {
        selector: '#cover4',
        headline: 'Fox Diner',
        copy: "A neighbourhood institution since the 1940s. It's just a couple of blocks away from Boone Park in the Avondale neighbourhood of Jacksonville, a pretty affluent suburb where two-storey white houses have sprawling lawns. It's an old-style diner with a long bar and booths you can slide into. For decoration, action figures line the walls, including Spiderman, C-3PO and Mr T.",
        content: '<img src="images/fox.jpg">',
        address: "• <a href='http://www.yelp.co.uk/biz/fox-restaurant-jacksonville'>Yelp page</a>"
    },

    {
        selector: '#cover5',
        headline: 'Headline5',
        copy: 'COPY5',
        content: '<img src="images/houseofbeer.jpg">'
    },

    {
        selector: '#cover6',
        headline: 'Spongeorama',
        copy: "<a href='https://twitter.com/ariellec'>@ariellec</a> suggested a trip to Tarpon Springs to take in the sponge-diving museum. Spongeorama is a sponge-diving museum (free entry) on Dodecanese Boulevard, which is worth visiting for the circa 1960s sponge film they show alone. The film introduces man's quest for sponge in quite grandiose fashion. 'The treasure sought is a gift of the sea, taken for granted by most,' a deep voice says as we watch grainy pictures of weather beaten sailors heading out to the ocean. 'Since before the time of Christ, since before the time of Moses, since before the beginning of recorded history, man has sought and prized the natural sponge.'",
        content: '<img src="images/tarpon1.jpg">',
        address: "• <a href='http://www.spongeorama.com/'>spongeorama.com</a>"
    },

    {
        selector: '#cover7',
        headline: 'Biff Burger',
        copy: 'Biff Burger was <a href="http://www.guardian.co.uk/travel/2013/apr/29/florida-road-trip-day-one#comment-23164388">recommended by julianem</a> in the comments. It’s a St Petersburg institution and one of the last relics of a failed franchise bid by the Biff owners in the 1960s.<br/>Back then, buoyed by the success of this small drive-in diner, the owners expanded across Florida and the rest of south-east US. They sold the rights to 800 Biff burgers at $13,000 each, which included built-in friers and rest rooms. Now only two Biff burgers remain, and only one of those retains the once-sort-of-famous Biff name: this one.',
        content: '<img src="images/biff1.jpg">',
        address: '• <a href="http://biffburgers.com/">biffburgers.com</a>'
    },

    {
        selector: '#cover8',
        headline: 'Fred Howard Park',
        copy: 'Fred Howard Park is a sandbar that shoots out from the coast of Tarpon Springs. You can drive right out into the Gulf of Mexico along a narrow, sloping blacktop road which plunges down into the water on either side.  At its tip, the sandbar fans out like the letter T, with a beautiful white sandy beach  acing out to the west and palm trees galore. Some people have choose to ignore the beach and sunbathe on the side of the road beside their cars.',
        content: '<img src="images/fred2.jpg">',
        address: '• <a href="http://www.pinellascounty.org/park/06_howard.htm">pinellascounty.org</a>'
    },

    {
        selector: '#cover9',
        headline: "Sharkey's",
        copy: '<a href="http://www.guardian.co.uk/discussion/user/id/11335116">Marcia Douglas</a> recommended Sharkey’s, a bar and restaurant on the beach just south of Venice. It has it’s own pier and is a popular fishing spot. I had a “cajun blackened” grouper sandwich then a swim – despite the shark teeth on the beach and the men fishing for sharks from the end of the pier.',
        content: '<img src="images/sherry1.jpg">',
        address: '• <a href="http://www.sharkysonthepier.com/">sharkysonthepier.com</a>'
    },

    {
        selector: '#cover10',
        headline: 'Wynwood',
        copy: 'Wynwood came<a href="http://discussion.guardian.co.uk/comment-permalink/23210268"> recommended by Richard Cole</a> in the blog comments. The neighbourhood is noted for its graffiti and trendy bars and restaurants. I headed straight to Wynwood Walls, a little park-cum-outdoor eating space with beautiful street art all along the warehouse type buildings that surround it. Wood Tavern was a personal favourite, a hip bar with a big outdoor drinking area and a 1960s Mercury Commuter estate (think chrome and space-age styling), converted into a taco truck. The tacos, served by a friendly woman called Sury, were $1 and delicious.',
        content: '<img src="images/wynwood.jpg">',
        address: '• <a href="http://woodtavernmiami.com/">woodtavernmiami.com</a>'

    },

    {
        selector: '#cover11',
        headline: 'Calle Ocho',
        copy: "In Miami went straight to<a href='http://www.guardian.co.uk/travel/2008/feb/09/miami.travelfoodanddrink'> Little Havana</a>, as per<a href='http://www.twitter.com/angustcat'> @AngusTCat</a>,<a href='http://www.twitter.com/discoverusauk'> @discoverusaUK</a> and<a href='http://www.twitter.com/ariellec'> @ariellec</a>'s instruction - Cuban cafes, restaurants and cigar shops packed into this little neighbourhood, with old men playing dominoes in Maximo Gomez Park on the corner. I know nothing about cigars but was waved into the Cuban Cigar Corporation by a woman called Dunia. She showed me how she was keeping some of the cigars moist, in a wooden casket with a glass of brandy and two glasses of water inside. She then flogged me three cigars for the price of two and insisted I smoke one there and then.",
        content: '<img src="images/cigar3.jpg">',
        address: '• <a href="http://www.cubatobaccocigarco.com/">cubatobaccocigarco.com</a>'
    },

    {
        selector: '#cover12',
        headline: 'Peace, Love & Little Donuts',
        copy: '<a href="https://twitter.com/ParadiseCoast/statuses/329539274347266048">@paradisecoast</a> suggested Peace, Love & Little Donuts for breakfast. I obliged. It’s a drive-thru doughnut place at the start of the <a href="http://en.wikipedia.org/wiki/Tamiami_Trail">Tamiami Trail</a> – the road that runs across the Everglades to Miami. Keen to get in the spirit, I plumped for a bacon and maples doughnut as well as more conventional chocolate ones. It wasn’t too bad. But I’m not sure I’d have it again.',
        content: '<img src="images/donut2.jpg">',
        address: '• <a href="https://www.facebook.com/Peaceloveandlittledonutsofnaples">Facebook page</a>'
    },

    {
        selector: '#cover13',
        headline: 'Big Cypress Gallery',
        copy: "The Big Cypress Gallery in Ochopee was recommended by<a href='https://twitter.com/01steven/status/329330955540111360'> @01steven</a> on Twitter. It's a showcase of photographer<a href='http://www.clydebutcher.com/''> Clyde Butcher's work</a>, set just off Tamiami trail around 20 miles east of Everglades City. Butcher eschews digital methods and takes all his pictures using large format cameras, which create up to 12x20 negatives and up to 10’x4’ finished images. He develops his photos by hand in a 1,600-square-foot darkroom in Venice.",
        content: '<img src="images/bigcypress.jpg">',
        address: '• <a href="http://www.clydebutcher.com/home.php">clydebutcher.com</a>'
    },

    {
        selector: '#cover14',
        headline: 'Everglades City Airboats',
        copy: 'The first thing you notice about an airboat is that is it very, very loud. Even with the ear protectors they provide, the noise of the engine, the air blades, and the wind howling past is incredible. The boats are designed to just skim the surface of the water - the six-seater boat I was in had just a 6.5-inch "draft", meaning only half a foot of it dipped beneath the surface. We saw two alligators during the ride - one of which was lingering ominously beside a family of raccoons that Captain Dwain stopped to feed. ',
        content: '<img src="images/dougs1.jpg">',
        address: "• <a href='http://captaindougs.com/'>Captain Doug's tours</a>"
    },

    {
        selector: '#cover15',
        headline: 'No Name Pub',
        copy: 'No Name Pub came recommended by <a href="https://twitter.com/TooMuchMe/statuses/329969367238467584">@toomuchme</a>. It’s a roaring locals joint about 3 miles off US 1 on Big Pine Key - one of the number of islands that makes up the road down to Key West. You immediately notice the thousands and thousands of dollar bills lining the walls and ceiling - between $65,000 to $75,000 hangs in the bar. The bills have all been left by customers, with personalised messages, so I left one from the Guardian, stapled into the ceiling with a staple gun provided staff.',
        content: '<img src="images/noname.jpg">',
        address: "• <a href='http://www.nonamepub.com/'>nonamepub.com</a>"
    },

    {
        selector: '#cover16',
        headline: 'Driving to the Keys',
        copy: 'It’s a four-and-a-half-hour drive from Miami Beach to Key West. For the majority of that drive it absolutely poured down – the worst rain in months, according to locals. It meant the driving was less scenic, but more exciting. And definitely more dangerous. ',
        content: '<iframe class="vine-embed" src="https://vine.co/v/bQJhluAenzT/embed/simple" width="560" height="560" frameborder="0"></iframe><script async src="//platform.vine.co/static/scripts/embed.js" charset="utf-8"></script>',
        address: ''
    },

    {
        selector: '#cover18',
        headline: 'Sunset @ Mallory Square',
        copy: "Arriving in Key West at around 6.30pm I headed straight down to Mallory Square, a famous point for watching the sunset. Hundreds of people had gathered at the water to see nightfall, and it didn't disappoint - the rain had long departed and left behind beautiful blue skies. I grabbed a piña colada, housed in a coconut and joined everyone by the pier to look on. A lovely end to the day.",
        content: '<img src="images/sunset.jpg">',
        address: ''
    },

    {
        selector: '#cover17',
        headline: 'News Cafe',
        copy: '<a href="https://twitter.com/hangingwithmr">@hangingwithmr</a> suggested this place. Trivia: Giovanni Versace bought magazines from News Cafe on 15 July 1997. He then walked the short distance home, where he was shot dead on his doorstep by<a href="http://abcnews.go.com/Archives/video/july-15-1997-suspect-versace-murder-10363773"> Andrew Cunanan</a>. The service was a little slow. And not very friendly. But the decor inside was quite nice, with red leather booths and black and white photos on the walls, while outside is a good spot for people watching.',
        content: '<img src="images/news.jpg">',
        address: "• <a href='http://www.newscafe.com/welcome.html'>newscafe.com</a>"
    },

    {
        selector: '#cover19',
        headline: "Garbo's",
        copy: "<a href='http://discussion.guardian.co.uk/comment-permalink/23261367'>Mike Ward</a> suggested getting a fish taco from Garbo's, a little food truck permanently situated on Greene Street one block from the harbour. Two mahi mahi fish tacos are $8.75, while you can grab your own drink from a big cooler in front of the truck. There's usually quite a wait, and they cook all their food on the tiny griddle in the truck, but it's well worth it. A little shaded seating area next to the truck makes for a perfect dining spot, watching people walk by and keeping an eye on a cockerel that was strutting around",
        content: '<img src="images/garbo2.jpg">',
        address: "• <a href='http://garbosgrillkw.com/'>garbosgrillkw.com</a>"
    },

    {
        selector: '#cover20',
        headline: 'Hemmingway Home',
        copy: "Hemingway lived here for 10 years in the 1930s, and the home is now kitted out with posters, books and, best of all, six-toed cats - bringers of good luck, according to the tour guide. The house and grounds of this restored home/museum are beautiful - it was built in 1851 and has big high ceilings and yellow shutters over the windows. It's a big white-washed two-storey place, with a wrought iron balcony running round the house.",
        content: '<img src="images/hemmingway.jpg">',
        address: "• <a href='http://www.hemingwayhome.com/'>hemingwayhome.com</a>"
    },

    {
        selector: '#cover21',
        headline: 'Southernmost House',
        copy: 'The southernmost hotel in mainland in America. At $192 for the room, plus tax it was more expensive than I averaged on the trip, but one of the cheaper options available in Key West, at least that night, so worth booking in advance. Five US presidents have stayed here, the last being Jimmy Carter. The hotel has been here since 1896, but had a revamp in the 90s and is very pleasant indeed – marble-heavy bathrooms and four-poster beds.',
        content: '<img src="images/hotel.jpg">',
        address: "• <a href='http://www.southernmosthouse.com/'>southernmosthouse.com</a>"
    },

    {
        selector: '#cover22',
        headline: 'Blue Haven',
        copy: "<a href='https://twitter.com/vanessavideocam/status/330060529504759810'>@vanessavideocam</a> recommended Blue Heaven,  as did <a href='http://discussion.guardian.co.uk/comment-permalink/23148741'>Cautious Optimist</a> through Guardian Witness. It's an open air bar-cum-restaurant and was packed on Friday morning - a 45-minute wait for a table. If you can afford to wait though, it’s well worth it. Even at 10.30am a band was playing and people were getting jolly at the bar, despite a heavy shower. Key West is a drinking place. Big bottles of Grolsch and bloody maries were the drinks of choice here.",
        content: '<img src="images/bluehaven.jpg">',
        address: "• <a href='http://www.blueheavenkw.com/'>blueheavenkw.com</a>"
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
      $("#address").html(box.address)
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
      $("#copyheader").html('');
      $("#copy").html('');
      $("#address").html('')
       $(".dayofweek").fadeIn();

    })

  });








}); //ready

