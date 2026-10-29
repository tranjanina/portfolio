var PORTFOLIO_DATA = // Data for Janina · Food, Dining & Hospitality Portfolio
{
  creator: {
    name: "Janina",
    title: "Food, Dining & Hospitality",
    tagline: "Content for dining rooms, hawker counters and hotels worth the journey. Photographed at the table and written with a poet's ear.",
    email: "tranjanina@gmail.com",
    locations: ["Singapore", "Bali", "Hong Kong"],
    experience: "Since 2017",
    education: "BA English · University of Waterloo & Athabasca University",
    bio: [
      "I've lived in Hong Kong, Bali and Singapore and eaten my way through all three. Before making content of my own, I spent years in brand strategy and copywriting, so I know what a brief is really asking for.",
      "I've also worked in business development, so I think about your content the way you do. Will it stop the scroll? Will it fill tables? Will people trust it? From 2027, food is my full-time work.",
      "I shoot the way I write my essays. I look for the small, true moment: the crackle on the pork, the first sip, the second you decide you're coming back."
    ]
  },

  clients: [
    { name: "Butcher's Block", note: "Raffles Arcade, Singapore" },
    { name: "Bottega di Carne", note: "Mondrian Duxton, Singapore" },
    { name: "The Cave by Ryan Clift", note: "Uluwatu, Bali" },
    { name: "Medusa", note: "Dining Room & Bar, Singapore" },
    { name: "Bakalaki Greek Taverna", note: "Martin Road, Singapore" },
    { name: "Pete's Place", note: "Grand Hyatt Singapore" },
    { name: "Tanjong Beach Club", note: "Sentosa, Singapore" },
    { name: "Solo Ristorante", note: "Amoy Street, Singapore" },
    { name: "Cloudstreet", note: "2-Star Michelin, Singapore" },
    { name: "El Kabron", note: "Cliffside, Uluwatu, Bali" },
    { name: "SUSHISAMBA", note: "Capital Tower, Singapore" }
  ],

  dishes: [
    {
      id: "j02",
      image: "img/j02.jpg",
      objectPosition: "50% 75%",
      title: "Wagyu Sliders",
      restaurant: "Butcher's Block",
      location: "Raffles Arcade, Singapore",
      category: "fine",
      cuisine: "Wood-fire Steakhouse",
      stamp: "Butcher's Block",
      hook: "Why this stops the scroll: The glossy brioche sheen against charcoal-charred Australian wagyu and melted gruyère.",
      caption: "A bite of pure excess. Rich, wood-smoked wagyu ground coarse enough to hold its fat, tucked into milk buns so soft they yield before your teeth even press down.",
      sensoryNotes: "Smoked marrow butter · Caramelized shallots · Brioche pillow",
      format: "4:5 Portrait · Available for Reel cut"
    },
    {
      id: "j18",
      image: "img/j18.jpg",
      objectPosition: "50% 30%",
      title: "Caviar at Brunch",
      restaurant: "Tanjong Beach Club",
      location: "Sentosa, Singapore",
      category: "me",
      cuisine: "Coastal Beach Club & Brunch",
      stamp: "Tanjong Beach Club",
      hook: "Why this stops the scroll: Crisp natural sunlight, mother-of-pearl spoons, and the relaxed beachside glamour of Sunday champagne dining.",
      caption: "Some brunches are for fuel; this one was for leisurely afternoon beach club living in Singapore. Briny pearls of oscietra against whipped cultured butter, eaten with fingers while the sea breeze moves the linen curtains.",
      sensoryNotes: "Sea salt brine · Whipped Guernsey butter · Warm focaccia",
      format: "4:5 Portrait · Creator on-camera"
    },
    {
      id: "m01",
      image: "img/m01.jpg",
      title: "The Red Room",
      restaurant: "Medusa",
      location: "Singapore",
      category: "bar",
      cuisine: "Late-Night Dining & Room",
      stamp: "Medusa",
      hook: "Why this stops the scroll: Lacquer crimson walls, amber orb lighting, and the cinematic tension of high-fashion supper clubs.",
      caption: "The kind of dining room Wong Kar-wai would film in. Deep red velvet banquettes, low lighting that forgives everything, and cocktails poured cold enough to leave frost on your glass.",
      sensoryNotes: "Negroni bitter · Red leather · Low murmur of jazz",
      format: "4:5 Portrait · Ambiance & Interior"
    },
    {
      id: "j06",
      image: "img/j06.jpg",
      title: "Angel Hair & Caviar",
      restaurant: "Fine Dining",
      location: "Singapore",
      category: "fine",
      cuisine: "Contemporary French-Japanese",
      stamp: "Fine Dining",
      hook: "Why this stops the scroll: Tableside twirl of delicate capellini glistening with kombu oil, crowned with dark sturgeon caviar.",
      caption: "Cold angel hair pasta is an art of restraint. One twirl coats the palate in truffled dashi, followed by the crisp, mineral pop of caviar. Elegant, quiet, unforgettable.",
      sensoryNotes: "Chilled capellini · White truffle emulsion · Sevruga caviar",
      format: "4:5 Portrait · Tableside Precision"
    },
    {
      id: "j07",
      image: "img/j07.jpg",
      title: "Bresaola & 24-Month Parmesan",
      restaurant: "Casa Vostra",
      location: "Singapore",
      category: "bar",
      cuisine: "Aperitivo & Salumeria",
      stamp: "Casa Vostra",
      hook: "Why this stops the scroll: Paper-thin crimson cured beef draped loosely over rustic sourdough with aged parmigiano shavings.",
      caption: "The golden hour table. Aperol spritz in hand, waiting for the pizza while tearing through paper-thin air-dried beef and chunks of salty, crystal-flecked parmesan.",
      sensoryNotes: "Nutty aged parmigiano · Peppery beef cure · Cold sparkling wine",
      format: "4:5 Portrait · Aperitivo Culture"
    },
    {
      id: "k07",
      image: "img/k07.jpg",
      objectPosition: "50% 80%",
      title: "Signature Uni Tagliolini",
      restaurant: "Solo Ristorante",
      location: "Amoy Street, Singapore",
      category: "fine",
      cuisine: "Authentic Northern Italian",
      stamp: "Solo Ristorante",
      hook: "Why this stops the scroll: Hokkaido sea urchin tongues melting into warm, handmade egg pasta ribbons with fresh bottarga dust.",
      caption: "The single dish I recommend most in Tanjong Pagar. The uni melts into the pasta water to create an emulsion so rich it feels like sea butter. Not a single drop left on the plate.",
      sensoryNotes: "Hokkaido bafun uni · Sardinian bottarga · Hand-rolled tagliolini",
      format: "4:5 Portrait · Cult Signature Dish"
    },
    {
      id: "j28",
      image: "img/j28.jpg",
      title: "Mezze for the Whole Table",
      restaurant: "Alati",
      location: "Amoy Street, Singapore",
      category: "fine",
      cuisine: "Greek Seafood Taverna",
      stamp: "Alati",
      hook: "Why this stops the scroll: A bountiful spread of whitewashed ceramics, charred pita, taramasalata, and deep-fried calamari.",
      caption: "Greek hospitality means ordering until the table runs out of room. Smoky melitzanosalata, whipped cod roe, and charred sourdough that vanished in five minutes flat.",
      sensoryNotes: "Smoky roasted eggplant · Greek olive oil · Sea-salted pita",
      format: "4:5 Portrait · Communal Dining Spread"
    },
    {
      id: "k06",
      image: "img/k06.jpg",
      title: "Hotpot for One",
      restaurant: "Haidilao",
      location: "Singapore",
      category: "me",
      cuisine: "Sichuan Hotpot & Comfort",
      stamp: "Haidilao",
      hook: "Why this stops the scroll: Authentic, unpretentious solo dining joy: bubbling mala broth, premium beef rolls, and dipping sauce mastery.",
      caption: "People look at you funny when you order hotpot alone until they see the setup. Two broths, a mountain of sliced ribeye, and nobody stealing the bamboo fungus you left to soften.",
      sensoryNotes: "Sichuan peppercorn numbing broth · Sesame paste · Ribeye rolls",
      format: "4:5 Portrait · Creator Lifestyle & Solo Dining"
    },
    {
      id: "k11",
      image: "img/k11.jpg",
      title: "T-Bone with Charred Rosemary",
      restaurant: "Nomada",
      location: "Steakhouse, Bali",
      category: "fine",
      cuisine: "Open-Fire Grill",
      stamp: "Nomada",
      hook: "Why this stops the scroll: The cross-hatch grill marks on a thick bone-in Florentine cut, smoking with fresh rosemary sprigs.",
      caption: "Cut three fingers thick and kissed by dry coffee wood flames. The crust is salty and crunching, the center ruby-red and trembling with rendered beef tallow.",
      sensoryNotes: "Smoky rosemary smoke · Flaky Maldon salt · Charred fat cap",
      format: "4:5 Portrait · Open Flame Drama"
    },
    {
      id: "m02",
      image: "img/m02.jpg",
      title: "The Front Bar",
      restaurant: "People People",
      location: "Singapore",
      category: "bar",
      cuisine: "Neighborhood Cocktail Room",
      stamp: "People People",
      hook: "Why this stops the scroll: Warm brass accents, curved wooden stools, and bartenders shaking citrus in natural evening twilight.",
      caption: "A bar that knows when to turn the music up and when to let the room hum on its own. The first round is always something bitter and clean.",
      sensoryNotes: "Campari rinse · Fresh grapefruit zest · Oak wood finish",
      format: "4:5 Portrait · Bar Ambiance & Architecture"
    },
    {
      id: "j10",
      image: "img/j10.jpg",
      objectPosition: "50% 80%",
      title: "Tiger Prawns on Ice",
      restaurant: "Lavo",
      location: "Marina Bay Sands, Singapore",
      category: "bar",
      cuisine: "Rooftop Italian Seafood",
      stamp: "Lavo",
      hook: "Why this stops the scroll: Giant wild prawns piled over crushed crystal ice with fresh lemon wheels 57 stories above the skyline.",
      caption: "Cold shellfish, hot city. The prawns are sweet and snap when bitten, served with a cocktail sauce that doesn't hold back on fresh horseradish.",
      sensoryNotes: "Horseradish punch · Fresh lemon oil · Crisp sea prawns",
      format: "4:5 Portrait · Luxury Rooftop Dining"
    },
    {
      id: "k16",
      image: "img/k16.jpg",
      objectPosition: "50% 85%",
      title: "Steak on Bone Marrow Mash",
      restaurant: "Butcher's Block",
      location: "Raffles Arcade, Singapore",
      category: "fine",
      cuisine: "Wood-fire Steakhouse",
      stamp: "Butcher's Block",
      hook: "Why this stops the scroll: Sizzling wood-fired steak carved over rich, buttery bone marrow mash with a glossy beef jus.",
      caption: "Wood-fired steak cooked to medium-rare perfection over open coals, resting atop a decadent whipped bone marrow potato mash. Every bite combines intense smoky crust with melt-in-the-mouth richness.",
      sensoryNotes: "Smoky wood-fired crust · Bone marrow whipped mash · Glossy beef jus reduction",
      format: "4:5 Portrait · Wood-fire Steak Close-up"
    },
    {
      id: "j25",
      image: "img/j25.jpg",
      title: "Smokehouse Platter",
      restaurant: "Meatsmith",
      location: "Telok Ayer, Singapore",
      category: "fine",
      cuisine: "Texas Barbecue Craft",
      stamp: "Meatsmith",
      hook: "Why this stops the scroll: The deep black bark and pink smoke ring on slow-smoked brisket next to glistening glazed pork ribs.",
      caption: "No cutlery required. Smoked over hickory until the brisket trembles when you nudge the cutting board. Tangy pickles and warm jalapeño cornbread on the side.",
      sensoryNotes: "Hickory wood smoke · Peppery black bark · Sweet vinegar mop",
      format: "4:5 Portrait · BBQ Meat Craft"
    },
    {
      id: "k09",
      image: "img/k09.jpg",
      objectPosition: "50% 80%",
      title: "Golden Broth Poured Tableside",
      restaurant: "Birds of a Feather",
      location: "Amoy Street, Singapore",
      category: "fine",
      cuisine: "Modern Sichuan-French",
      stamp: "Birds of a Feather",
      hook: "Why this stops the scroll: The golden chicken and pumpkin consommé steaming as it cascades over silken scallops and wild mushrooms.",
      caption: "The sound of hot broth meeting a cool porcelain bowl. Gentle numbing Sichuan heat balanced against the sweetness of reduced poultry stock. Pure comfort theater.",
      sensoryNotes: "Green Sichuan pepper · Steaming poultry stock · Sweet wild fungus",
      format: "4:5 Portrait · Tableside Action"
    },
    {
      id: "j12",
      image: "img/j12.jpg",
      objectPosition: "50% 80%",
      title: "Hand-Cut Steak Tartare",
      restaurant: "Fine Dining",
      location: "Singapore",
      category: "fine",
      cuisine: "Classic Parisian Bistro",
      stamp: "Fine Dining",
      hook: "Why this stops the scroll: Bright golden egg yolk resting on hand-diced tenderloin with capers, shallots, and warm sourdough crisps.",
      caption: "Diced with a knife, never minced through a grinder. The meat has texture and chew, seasoned with just enough cornichon and Dijon to wake up your palate.",
      sensoryNotes: "Dijon mustard grain · Golden yolk richness · Crisp toasted sourdough",
      format: "4:5 Portrait · Bistro Classic"
    },
    {
      id: "k08",
      image: "img/k08.jpg",
      title: "Two Pies, One Table",
      restaurant: "Da Michele",
      location: "Singapore",
      category: "cafe",
      cuisine: "Neapolitan Pizzeria",
      stamp: "Da Michele",
      hook: "Why this stops the scroll: Charred leopard-spotted crusts steaming hot from the wood oven, fresh buffalo mozzarella bubbling in San Marzano sauce.",
      caption: "The hallmark of genuine Neapolitan pizza: the center is soupy, the crust is puffed and blistering with charcoal bubbles, and you fold it in quarters to eat.",
      sensoryNotes: "San Marzano acidity · Wood-ash char · Melted fior di latte",
      format: "4:5 Portrait · Pizzeria Casual"
    },
    {
      id: "j13",
      image: "img/j13.jpg",
      objectPosition: "50% 70%",
      title: "Smash Burger & Rosemary Fries",
      restaurant: "People People",
      location: "Singapore",
      category: "cafe",
      cuisine: "Casual Eatery & Craft Beer",
      stamp: "People People",
      hook: "Why this stops the scroll: Crisp lacy patty edges extending past the potato roll, dripping with secret burger sauce.",
      caption: "When a kitchen takes comfort food seriously. Beef smashed paper-thin on screaming hot chrome, American cheese welded to the meat, served with fries dusted in rosemary salt.",
      sensoryNotes: "Crisp lace beef edge · Rosemary salt · Sweet potato bun",
      format: "4:5 Portrait · Casual Comfort"
    },
    {
      id: "m03",
      image: "img/m03.jpg",
      title: "Dinner in the Cave",
      restaurant: "Cavern Restaurant",
      location: "Bali",
      category: "bar",
      cuisine: "Subterranean Dining & Experience",
      stamp: "Cavern Restaurant",
      hook: "Why this stops the scroll: Bioluminescent stone textures, subterranean candle flicker, and an otherworldly dining atmosphere.",
      caption: "Dining deep within limestone walls carved thousands of years ago. The acoustics drop to a whisper, and every plate arrives glowing under warm amber downlights.",
      sensoryNotes: "Damp cave mineral stone · Flickering beeswax candle · Aged single malt",
      format: "4:5 Portrait · Experiential Interior"
    },
    {
      id: "k03",
      image: "img/k03.jpg",
      objectPosition: "50% 70%",
      title: "Steak, Foie Gras & Tacos",
      restaurant: "El Kabron",
      location: "Uluwatu, Bali",
      category: "fine",
      cuisine: "Cliffside Spanish & Sunset",
      stamp: "El Kabron",
      hook: "Why this stops the scroll: Seared foie gras and wagyu beef tacos framed against the Indian Ocean crashing on cliffs 200 feet below.",
      caption: "Sunsets in Uluwatu are loud with color. Spanish tapas reimagined with premium ingredients, washed down with sangria while the sky turns bruised violet.",
      sensoryNotes: "Seared foie gras fat · Crisp corn tortilla · Lime and smoked paprika",
      format: "4:5 Portrait · Destination Dining"
    },
    {
      id: "j23",
      image: "img/j23.jpg",
      objectPosition: "50% 80%",
      title: "Wild Herb Lettuce Cup",
      restaurant: "Butcher's Block",
      location: "Raffles Arcade, Singapore",
      category: "fine",
      cuisine: "Wood-fire Gastronomy",
      stamp: "Butcher's Block",
      hook: "Why this stops the scroll: Refreshing burst of crisp butterhead lettuce cradle filled with smoked beef tartare and finger lime caviar.",
      caption: "A bite of pure freshness midway through an intensive wood-fire tasting menu. The finger lime pearls pop with sharp citrus, resetting the palate for the steaks ahead.",
      sensoryNotes: "Finger lime pearls · Wood-fire embers · Crisp butterhead leaf",
      format: "4:5 Portrait · Palate Cleanser"
    },
    {
      id: "j26",
      image: "img/j26.jpg",
      objectPosition: "50% 50%",
      title: "Dry-Aged Tomahawk",
      restaurant: "Bottega di Carne",
      location: "Mondrian Duxton, Singapore",
      category: "fine",
      cuisine: "Italian Butchery & Grill",
      stamp: "Bottega di Carne",
      hook: "Why this stops the scroll: The majestic carved bone handle and glistening sliced ribeye fanned across an olive wood carving board.",
      caption: "Dry-aged for 45 days in Italian butchery traditions. Dario Cecchini's philosophy on full display: respect the animal, burn the wood hot, carve it thick.",
      sensoryNotes: "Nutty dry-age funky aroma · Tuscan olive oil · Sea salt flakes",
      format: "4:5 Portrait · Centerpiece Meat Cut"
    },
    {
      id: "j16",
      image: "img/j16.jpg",
      objectPosition: "50% 75%",
      title: "The French Dip",
      restaurant: "Temper",
      location: "Singapore",
      category: "cafe",
      cuisine: "Craft Sandwich Counter",
      stamp: "Temper",
      hook: "Why this stops the scroll: The mid-dunk moment as warm crusty baguette soaks up deep dark beef consommé.",
      caption: "A sandwich that commands two hands and absolute silence. Shaved prime rib piled high with melted provolone and horseradish cream, dipped into rich piping-hot jus.",
      sensoryNotes: "Deep beef consommé · Crusty French roll · Sharp horseradish",
      format: "4:5 Portrait · The Perfect Dunk"
    },
    {
      id: "k10",
      image: "img/k10.jpg",
      title: "Botanical Petits Fours",
      restaurant: "Cloudstreet",
      location: "Amoy Street, Singapore",
      category: "fine",
      cuisine: "2-Star Michelin Experiential",
      stamp: "Cloudstreet",
      hook: "Why this stops the scroll: Exquisite jewel-like mignardises displayed on handmade volcanic stone slabs.",
      caption: "The curtain call of a three-hour Michelin meal. Smoked vanilla, fermented black garlic chocolate, and native Australian botanicals crafted with obsessive precision.",
      sensoryNotes: "Smoked vanilla bean · Black garlic cocoa · Finger lime gel",
      format: "4:5 Portrait · Michelin Precision"
    },
    {
      id: "j20",
      image: "img/j20.jpg",
      objectPosition: "50% 70%",
      title: "Charred Mediterranean Octopus",
      restaurant: "Alati",
      location: "Amoy Street, Singapore",
      category: "fine",
      cuisine: "Greek Taverna",
      stamp: "Alati",
      hook: "Why this stops the scroll: Perfectly blackened tentacle suction cups on yellow split pea fava with caper berries.",
      caption: "Brought in wild from the Aegean Sea. Slow-braised in red wine vinegar then charred over volcanic coals until the exterior is crisp as bacon and the inside tender as custard.",
      sensoryNotes: "Aegean sea salt · Santorini fava puree · Pickled caper berries",
      format: "4:5 Portrait · Seafood Textures"
    },
    {
      id: "j14",
      image: "img/j14.jpg",
      objectPosition: "50% 75%",
      title: "Wild Sea Bream in Saffron Broth",
      restaurant: "Medusa",
      location: "Singapore",
      category: "fine",
      cuisine: "Mediterranean Coastal",
      stamp: "Medusa",
      hook: "Why this stops the scroll: Shimmering gold saffron oil pooling around pan-seared sea bream with blistered cherry tomatoes.",
      caption: "Light, clean, and deeply aromatic. The skin shatters under the fork, releasing sweet white flakes that soak up saffron, white wine, and fresh fennel pollen.",
      sensoryNotes: "Persian saffron strands · Sweet sea bream · Blistered tomato sweet acidity",
      format: "4:5 Portrait · Broth & Fish"
    },
    {
      id: "k14",
      image: "img/k14.jpg",
      objectPosition: "50% 85%",
      title: "Sashimi Above the Clouds",
      restaurant: "SUSHISAMBA",
      location: "Capital Tower 52F, Singapore",
      category: "fine",
      cuisine: "Japanese-Brazilian-Peruvian",
      stamp: "SUSHISAMBA",
      hook: "Why this stops the scroll: Glistening bluefin otoro and yellowtail sashimi floating against the panoramic 360-degree Singapore skyline.",
      caption: "Dining at 200 meters above sea level. Yellowtail tiradito with truffle oil and yuzu soy, framed by the sunset glow reflecting off downtown skyscrapers.",
      sensoryNotes: "Melting fatty tuna · Yuzu soy citrus · Shiso leaf aroma",
      format: "4:5 Portrait · High-Altitude Dining"
    },
    {
      id: "m05",
      image: "img/m05.jpg",
      objectPosition: "50% 70%",
      title: "Neon Sashimi & Late Beats",
      restaurant: "Kinki",
      location: "Customs House, Singapore",
      category: "bar",
      cuisine: "Urban Japanese & Rooftop",
      stamp: "Kinki",
      hook: "Why this stops the scroll: Neon graffiti glows illuminating premium nigiri platters by Marina Bay's glistening waters.",
      caption: "A high-octane rooftop where traditional Japanese knife work meets streetwear energy. Fresh salmon belly nigiri paired with spicy yuzu highballs.",
      sensoryNotes: "Wasabi zing · Torched salmon belly fat · Chilled soda highball",
      format: "4:5 Portrait · High Energy Bar"
    },
    {
      id: "j17",
      image: "img/j17.jpg",
      title: "Cantabrian Anchovy & Piquillo",
      restaurant: "Solo Ristorante",
      location: "Singapore",
      category: "fine",
      cuisine: "Spanish-Italian Tapas",
      stamp: "Solo Ristorante",
      hook: "Why this stops the scroll: Glistening silver anchovy fillet draped over sweet wood-roasted piquillo peppers on crystal toast.",
      caption: "The definition of an umami bomb. Not the salty anchovies from a tin, but fat, meaty Cantabrian fillets cured in olive oil that dissolve on the tongue.",
      sensoryNotes: "Sweet charred pepper · Salty umami anchovy · Crunchy toasted pan con tomate",
      format: "4:5 Portrait · Aperitivo Perfection"
    },
    {
      id: "j22",
      image: "img/j22.jpg",
      title: "Fried Montanara with San Daniele",
      restaurant: "Fortuna",
      location: "Craig Road, Singapore",
      category: "fine",
      cuisine: "Neapolitan Trattoria",
      stamp: "Fortuna",
      hook: "Why this stops the scroll: Puffy golden flash-fried pizza dough cloud smothered in buffalo stracciatella and prosciutto crudo.",
      caption: "First fried to create an impossibly airy, hollow crust, then baked with sweet tomato sauce and topped cold with sweet 24-month prosciutto. Decadent.",
      sensoryNotes: "Airy fried dough · Cool milky stracciatella · Salty cured prosciutto",
      format: "4:5 Portrait · Cult Italian Trend"
    },
    {
      id: "j27",
      image: "img/j27.jpg",
      title: "The Marchand Artisan Cheese Table",
      restaurant: "10 Scotts",
      location: "Grand Hyatt, Singapore",
      category: "bar",
      cuisine: "French Fromagerie & Wine Bar",
      stamp: "10 Scotts",
      hook: "Why this stops the scroll: Over twenty wheels of raw French farmhouse cheeses with honeycomb and dried muscatels.",
      caption: "Curated by the Marchand brothers from Nancy, France. From runny, barnyardy Époisses de Bourgogne to crystalline 36-month Comté, this table is pure ritual.",
      sensoryNotes: "Pungent truffle brie · Crystalline aged Comté · Wild wildflower honey",
      format: "4:5 Portrait · The Cheese Ritual"
    },
    {
      id: "j05",
      image: "img/j05.jpg",
      objectPosition: "50% 70%",
      title: "Warm Rice Tuna Hand Roll",
      restaurant: "Rappu",
      location: "Duxton, Singapore",
      category: "fine",
      cuisine: "Modern Hand Roll Bar",
      stamp: "Rappu",
      hook: "Why this stops the scroll: The audible snap of crisp Saga nori wrapped around warm seasoned sushi rice and glistening negitoro.",
      caption: "Handed directly from chef to diner within four seconds so the nori stays shatteringly crisp. Warm rice against cold fatty tuna is one of dining's greatest contrasts.",
      sensoryNotes: "Shattering nori crunch · Warm seasoned shari rice · Melted negitoro fat",
      format: "4:5 Portrait · Counter Seat Theater"
    },
    {
      id: "k02",
      image: "img/k02.jpg",
      objectPosition: "50% 70%",
      title: "Bolognese Tagliatelle al Ragù",
      restaurant: "Caffe Italia",
      location: "Singapore",
      category: "fine",
      cuisine: "Traditional Emilia-Romagna",
      stamp: "Caffe Italia",
      hook: "Why this stops the scroll: Fresh hand-rolled golden tagliatelle coated in slow-simmered beef and pork ragù, showered with Parmigiano-Reggiano.",
      caption: "No cream, no shortcuts. Simmered for six hours with milk, wine, and beef shin until it clings to the hand-cut pasta like a velvet glove.",
      sensoryNotes: "Slow-simmered ragù · Hand-cranked pasta · Nutty aged parmesan",
      format: "4:5 Portrait · Heritage Italian"
    },
    {
      id: "k12",
      image: "img/k12.jpg",
      objectPosition: "50% 75%",
      title: "Charred Skewers & Chilled Wine",
      restaurant: "Capasso",
      location: "Singapore",
      category: "fine",
      cuisine: "Contemporary Oenoteca & Grill",
      stamp: "Capasso",
      hook: "Why this stops the scroll: Charred lamb arrosticini with fresh oregano herbs alongside a sweating crystal glass of chilled Italian white wine.",
      caption: "Late evening supper done right. Smoky lamb skewers sizzling right off the binchotan charcoal, washed down with a cold glass of crisp Italian white wine.",
      sensoryNotes: "Charcoal binchotan grill · Wild oregano · Chilled crisp white wine",
      format: "4:5 Portrait · Wine & Skewers"
    },
    {
      id: "medusa-welcome",
      image: "img/medusa_welcome.jpg",
      title: "Dinner & Drinks at Medusa",
      restaurant: "Medusa",
      location: "Orchard, Singapore",
      category: "me",
      cuisine: "Supper Club & Late-Night Dining",
      stamp: "Medusa",
      hook: "Why this stops the scroll: Saturated crimson leather, amber orbs, and effortless supper club glamour.",
      caption: "When dinner slips past midnight into drinks and house tracks. Medusa is all crimson velvet, retro pop art, and high-energy dining in Singapore.",
      sensoryNotes: "Red leather banquette · Negroni on ice · Deep house bass",
      format: "4:5 Portrait · Creator on-camera"
    },
    {
      id: "medusa-chili-crunch",
      image: "img/medusa_chili_crunch.jpg",
      title: "Signature Chilli Crunch",
      restaurant: "Medusa",
      location: "Orchard, Singapore",
      category: "bar",
      cuisine: "Modern Asian & Supper Club",
      stamp: "Medusa",
      hook: "Why this stops the scroll: Golden chili oil dripping from the spoon with toasted garlic flakes and Sichuan crisp.",
      caption: "Spoon it on everything. Fragrant toasted aromatics, slow-rendered chili oil, and crispy shallots made in-house.",
      sensoryNotes: "Crispy shallot · Smoky roasted chili · Star anise oil",
      format: "4:5 Portrait · Macro Culinary Detail"
    },
    {
      id: "medusa-telefono",
      image: "img/medusa_telefono.jpg",
      title: "The Telefono Booth",
      restaurant: "Medusa",
      location: "Orchard, Singapore",
      category: "bar",
      cuisine: "Nightlife & Experiential Venue",
      stamp: "Medusa",
      hook: "Why this stops the scroll: Neon archways, infinity mirror reflections, and the quintessential venue selfie stop.",
      caption: "Every great dining venue has that one spot everyone posts from. At Medusa, it's the glowing red Telefono booth on the way to the cocktail lounge.",
      sensoryNotes: "Neon red glow · Polished brass · Nightlife energy",
      format: "4:5 Portrait · Ambiance & Venue Feature"
    },
    {
      id: "bakalaki-mezze",
      image: "img/bakalaki_mezze.jpg",
      title: "Greek Mezze Dips Platter",
      restaurant: "Bakalaki Greek Taverna",
      location: "Martin Road, Singapore",
      category: "fine",
      cuisine: "Authentic Hellenic & Mediterranean",
      stamp: "Bakalaki",
      hook: "Why this stops the scroll: Five vivid Mediterranean bowls — whipped taramosalata crowned with roe, smoky eggplant melitzanosalata, and spicy whipped feta htipiti with toasted pine nuts.",
      caption: "The only proper way to open a Greek feast. Warm grilled pita dipped into chilled tzatziki, salted roe tarama, and smoky charred melitzanosalata made with Greek extra virgin olive oil.",
      sensoryNotes: "Kalamata extra virgin olive oil · Garlic dill strained yogurt · Toasted pine nuts",
      format: "4:5 Portrait · Culinary Dish Highlight"
    },
    {
      id: "bakalaki-seabass",
      image: "img/bakalaki_seabass.jpg",
      title: "Whole Greek Sea Bass (Lavraki)",
      restaurant: "Bakalaki Greek Taverna",
      location: "Martin Road, Singapore",
      category: "fine",
      cuisine: "Aegean Seafood",
      stamp: "Bakalaki",
      hook: "Why this stops the scroll: Tender, flaky Mediterranean sea bass deboned tableside with aromatic ladolemono and sea salt.",
      caption: "Baked in a golden sea salt crust and cracked open tableside. Flaky, tender white fish finished with cold-pressed Greek extra virgin olive oil, fresh lemon emulsion, and wild Aegean oregano.",
      sensoryNotes: "Ladolemono emulsion · Flaky white sea bass · Wild Greek oregano",
      format: "4:5 Portrait · Tableside Signature Dish"
    },
    {
      id: "bakalaki-market",
      image: "img/bakalaki_market.jpg",
      title: "Aegean Fresh Catch Display",
      restaurant: "Bakalaki Greek Taverna",
      location: "Martin Road, Singapore",
      category: "fine",
      cuisine: "Fresh Catch & Market Dining",
      stamp: "Bakalaki",
      hook: "Why this stops the scroll: Pristine whole Mediterranean fish flown in fresh, resting on crushed ice with fresh rosemary and handwritten Greek slates.",
      caption: "You pick your catch directly from the ice counter before it hits the charcoal grill. Hellenic seafood provenance at its most authentic.",
      sensoryNotes: "Fresh rosemary · Sea salt air · Crushed ice chill",
      format: "4:5 Portrait · Provenance & Counter"
    },
    {
      id: "bakalaki-portrait",
      image: "img/bakalaki_portrait.jpg",
      title: "Taverna Living at Bakalaki",
      restaurant: "Bakalaki Greek Taverna",
      location: "Martin Road, Singapore",
      category: "me",
      cuisine: "Mediterranean Hospitality",
      stamp: "Bakalaki",
      hook: "Why this stops the scroll: Whitewashed Cycladic arches, reed ceilings, and effortless Mediterranean dining presence.",
      caption: "Stepping inside feels like an afternoon escape to the Cyclades. Warm hospitality, Greek wines, and that golden Mediterranean light right on Martin Road.",
      sensoryNotes: "Whitewashed stone · Mediterranean breeze · Linen & citrus",
      format: "4:5 Portrait · Creator on-camera"
    }
  ],

    reels: [
    {
      id: "reel-tomahawk",
      title: "The Tomahawk Tableside Tasting",
      establishment: "Bottega di Carne · Mondrian",
      category: "Steakhouse & Grill",
      videoSrc: "video/IMG_5617.MOV",
      videoThumb: "video/thumbs/IMG_5617.MOV.png",
      hookText: "If your steakhouse server doesn't feed you the bone like this, are you even dining?",
      audioTrack: "Original Tableside Audio · Dining Room Energy",
      duration: "0:10",
      stats: { views: "248.5K", saves: "6.8K", bookings: "+54 Tables" },
      scriptTimeline: [
        { time: "00:00 - 00:03", action: "Visual Hook: Server presenting the sizzling tomahawk bone tableside." },
        { time: "00:04 - 00:07", action: "The Taste: Biting into the juicy, perfectly pink charred tomahawk crust." },
        { time: "00:08 - 00:10", action: "Authentic Reaction: Pure unscripted dining joy and tableside banter." }
      ]
    },
    {
      id: "reel-cave",
      title: "Dinner Inside a Prehistoric Cave",
      establishment: "The Cave by Chef Ryan Clift · Bali",
      category: "Experiential Destination Dining",
      videoSrc: "video/reel_cave.mp4",
      videoThumb: "video/thumbs/reel_cave.jpg",
      beautyFilter: true,
      hookText: "Would you eat dessert 50 feet underground inside a prehistoric cave? 🕯️✨",
      audioTrack: "Ambient Cave Acoustics · Whispers & Glass",
      duration: "0:12",
      stats: { views: "312.4K", saves: "8.9K", bookings: "+70 Covers" },
      scriptTimeline: [
        { time: "00:00 - 00:03", action: "Visual Hook: Subterranean limestone stalactites, glowing beauty radiance & candlelight." },
        { time: "00:04 - 00:08", action: "Sensory Detail: Spooning gold-flecked cocktail dessert from a chilled champagne coupe." },
        { time: "00:09 - 00:12", action: "The Experience & CTA: Dramatic acoustics and subterranean wonder of Uluwatu cliffs." }
      ]
    },
    {
      id: "reel-affogato",
      title: "The Tableside Affogato Tasting",
      establishment: "Pete's Place · Grand Hyatt Singapore",
      category: "Authentic Italian Trattoria & Dessert",
      videoSrc: "video/reel_affogato.mp4",
      videoThumb: "video/thumbs/reel_affogato.jpg",
      hookText: "Would you share this tableside affogato, or finish both spoons yourself? 🍨☕",
      audioTrack: "Original Tableside Audio · Crystal Spoons & Room Chatter",
      duration: "0:08",
      stats: { views: "389.2K", saves: "11.4K", bookings: "+92 Tables" },
      scriptTimeline: [
        { time: "00:00 - 00:03", action: "Visual Hook: Shaved dark chocolate curls resting over cold vanilla gelato in a crystal coupe." },
        { time: "00:03 - 00:06", action: "Macro Food Action: Two silver spoons diving into warm espresso and melting cream." },
        { time: "00:06 - 00:08", action: "Sensory Climax: Lifting the decadent bittersweet spoonful straight toward the lens." }
      ]
    },
    {
      id: "reel-glamour",
      title: "Cocktail Hour & Dining Glamour",
      establishment: "Medusa · Dining Room & Bar",
      category: "Evening Dining & Hospitality Presence",
      videoSrc: "video/reel_glamour.mp4",
      videoThumb: "video/thumbs/reel_glamour.jpg",
      hookText: "The dress code for a 9PM reservation when the night has just begun ✨🍸",
      audioTrack: "Original Ambient Audio · Night Breeze & Courtyard Glow",
      duration: "0:09",
      stats: { views: "326.7K", saves: "9.3K", bookings: "+68 Reservations" },
      scriptTimeline: [
        { time: "00:00 - 00:03", action: "Visual Hook: Radiant evening entrance in backless silk halter under glowing fairy lights." },
        { time: "00:03 - 00:06", action: "Atmospheric Motion: Fluid over-the-shoulder turn revealing the lush garden dining courtyard." },
        { time: "00:06 - 00:09", action: "High-End Allure & CTA: Walking toward the dining room doors as dinner service peaks." }
      ]
    },
    {
      id: "reel-brunch",
      title: "Tropical Villa Sunday Brunch",
      establishment: "El Kabron · Bali Lifestyle Dining",
      category: "Brunch & Tropical Hospitality",
      videoSrc: "video/reel_villa_brunch.mp4",
      videoThumb: "video/thumbs/reel_villa_brunch.jpg",
      hookText: "The secret to Bali villa mornings: Organic scrambled eggs, crusty sourdough & zero rush 🥑🍳",
      audioTrack: "Original Villa Audio · Tropical Garden Breeze",
      duration: "0:10",
      stats: { views: "264.1K", saves: "7.5K", bookings: "+48 Bookings" },
      scriptTimeline: [
        { time: "00:00 - 00:03", action: "Visual Hook: Sunlit open-air breakfast table with seeded sourdough avocado toast." },
        { time: "00:03 - 00:07", action: "Authentic Reaction: Tasting golden farm-fresh scrambled eggs ('Mm nice eggs')." },
        { time: "00:07 - 00:10", action: "Lifestyle Feel & CTA: Slow morning vacation pacing and tropical garden relaxation." }
      ]
    },
    {
      id: "reel-bougatsa",
      title: "Tableside Bougatsa Tower",
      establishment: "Bakalaki Greek Taverna · Singapore",
      category: "Hellenic Dessert & Tableside Theater",
      videoSrc: "video/reel_bakalaki_bougatsa.mp4",
      videoThumb: "video/thumbs/reel_bakalaki_bougatsa.jpg",
      hookText: "The tableside dessert crack at Bakalaki you need to experience.",
      audioTrack: "Original Tableside Audio · Dining Room Energy",
      duration: "0:09",
      stats: { views: "194.2K", saves: "8.1K", bookings: "+42 Tables" },
      scriptTimeline: [
        { time: "00:00 - 00:03", action: "Visual Hook: Tall multi-tiered crispy filo pastry tower dusted with cinnamon sugar." },
        { time: "00:04 - 00:06", action: "Action Crack: Server using two silver forks to dramatically smash through the crunchy filo layers." },
        { time: "00:07 - 00:09", action: "The Reveal: Vanilla ice cream and warm Greek cream filling pooling beneath golden pastry shards." }
      ]
    }
  ],

  caseStudies: [
    {
      id: "cs-butchers",
      client: "Butcher's Block",
      location: "Raffles Hotel Arcade, Singapore",
      type: "Luxury Steakhouse & Wood-Fire Gastronomy",
      headline: "How Sensory Wood-Fire Storytelling Turned Premium Cuts into Coveted Bookings",
      challenge: "High-end diners perceived the steakhouse as primarily corporate dinners rather than an intimate, sensory culinary destination for food lovers.",
      strategy: [
        "Hook: Focused on the elemental drama of wood-fire smoke, ember basting, and glistening rendered fat.",
        "Angle: Framed the dining room as warm and sensual rather than intimidatingly formal.",
        "Copywriting: Written with deep meat-craft terminology that food connoisseurs respect."
      ],
      results: [
        { label: "Organic Views", val: "148,000+" },
        { label: "Direct Saves", val: "3,200+" },
        { label: "Reservation Surge", val: "+42 Bookings in 14 Days" }
      ],
      deliverables: "1 Vertical Reel · 8 High-Res Table Stills · 3 Tested Ad Hooks"
    },
    {
      id: "cs-medusa",
      client: "Medusa",
      location: "Dining Room & Bar, Singapore",
      type: "Experiential Late-Night Hospitality",
      headline: "Cinematic Mood & Fashion Aesthetics: Driving The Post-9PM Supper Crowd",
      challenge: "Launching an intimate red-room concept in a saturated neighborhood where cocktail bars blend into one another.",
      strategy: [
        "Hook: Leveraged high-contrast lacquer red lighting, black attire, and noir cinematography.",
        "Angle: Positioned Medusa as the late-night haven for discerning creatives, hospitality insiders, and date nights.",
        "Voice: Evocative storytelling linking mood, music, and Mediterranean small plates."
      ],
      results: [
        { label: "Organic Views", val: "210,000+" },
        { label: "Shares to DMs", val: "4,600+" },
        { label: "Late Supper Covers", val: "+65 Walk-ins & Tables" }
      ],
      deliverables: "2 Reels · 10 Lifestyle Stills · Hook Testing for Paid Boosting"
    },
    {
      id: "cs-solo",
      client: "Solo Ristorante",
      location: "Amoy Street, Singapore",
      type: "Authentic Northern Italian",
      headline: "The Cult Dish Flywheel: Turning One Tagliolini into a Reservation Magnet",
      challenge: "Positioning authentic Northern Italian craft above commercialized pasta chains through organic UGC that builds deep culinary trust.",
      strategy: [
        "Hook: Centered entirely on the craft of melting fresh sea urchin into pasta water tableside.",
        "Angle: Emphasized that this is where chefs and restaurant managers eat on their days off.",
        "CTA: Clean, actionable recommendation with booking guidance for counter seats."
      ],
      results: [
        { label: "Organic Views", val: "182,000+" },
        { label: "Save Rate", val: "7.1% (3x Industry Avg)" },
        { label: "Counter Seats", val: "Fully Booked for 3 Weeks" }
      ],
      deliverables: "1 Vertical Reel · 6 Food Stills · Long-form Caption & Newsletter Feature"
    }
  ],

  essays: [
    {
      id: "essay-1",
      title: "Seven Minutes in Heaven",
      subtitle: "On infatuation, fresh bread, and the appetite that returns when love does.",
      url: "https://janinatran.substack.com/p/seven-minutes-in-heaven",
      readTime: "4 min read",
      excerpt: "The world looks a bit more vibrant, songs hold new meaning, and an absolute plus… everything tastes better. A bowl of cold noodles at two in the morning becomes an event. You find yourself ordering dessert you don't even like just to keep the table for another twenty minutes. Food is never just calories; it's the currency of time spent wanting someone across a candle.",
      quote: "The world looks a bit more vibrant, songs hold new meaning, and an absolute plus… everything tastes better."
    },
    {
      id: "essay-2",
      title: "The Gift of Forgetting",
      subtitle: "Walking through foreign supermarkets and letting old grief stay in the past.",
      url: "https://janinatran.substack.com/p/the-gift-of-forgetting",
      readTime: "5 min read",
      excerpt: "No one can grieve forever and nobody can long forever. Eventually the palate resets. You find yourself in an unfamiliar alley in Hong Kong, smelling roast goose fat and white pepper broth, and you realize you haven't thought of their voice all afternoon. The senses are the first thing heartbreak takes, and the very first thing that heals you.",
      quote: "No one can grieve forever and nobody can long forever."
    },
    {
      id: "essay-3",
      title: "Late Suppers in Tanjong Pagar",
      subtitle: "Why the best meals happen after the kitchen has started wiping down the stove.",
      url: "https://janinatran.substack.com/archive",
      readTime: "3 min read",
      excerpt: "At midnight in Singapore, the heat finally lets go of the pavement. The city exhales. You slip into a banquette with cold mineral wine and skewers that crackle under sea salt. The chefs are pouring themselves a beer at the corner of the bar. It is the only hour when dining feels entirely honest, stripped of performance and full of appetite.",
      quote: "It is the only hour when dining feels entirely honest, stripped of performance and full of appetite."
    }
  ],

  packages: [
    {
      id: "pkg-taste",
      name: "The Taste",
      subtitle: "An Introduction",
      summary: "One vertical video crafted to test hooks, introduce a hero dish, and deliver immediate social proof.",
      deliverables: [
        "1 Vertical Video (15–30s) in 9:16",
        "3 Strategic Hook Variations",
        "Poetic, SEO-Optimized Caption",
        "Delivered within 7 business days"
      ],
      idealFor: "New seasonal menu item, cocktail feature, or single hero dish launch"
    },
    {
      id: "pkg-story",
      name: "The Story",
      badge: "Most Requested",
      subtitle: "Comprehensive Storytelling",
      summary: "A robust narrative package covering the food, the room, and the hospitality experience from entrance to last bite.",
      deliverables: [
        "3 Vertical Videos (15–60s) for Reels/TikTok",
        "Custom Voiceover Scripts & Audio",
        "10 High-Resolution Editorial Stills (4:5)",
        "Captions & Tested Ad Hook Copy"
      ],
      idealFor: "Established restaurants seeking high-converting organic content and fresh photo assets"
    },
    {
      id: "pkg-season",
      name: "The Season",
      subtitle: "Launches & Retainers",
      summary: "Full-scale editorial partnership across an entire launch campaign or ongoing monthly storytelling.",
      deliverables: [
        "6+ Vertical Videos spaced across month",
        "Full Content Plan Built from Brief",
        "20+ Editorial Photography Stills & Carousels",
        "Paid Ad Cuts & Whitelisting Consultation"
      ],
      idealFor: "Grand openings, seasonal brand revamps, or hotel hospitality partnerships"
    }
  ],

  addOns: [
    { id: "opt-paid-30", name: "30-Day Paid Whitelisting / Ad Rights", desc: "Permits using videos/photos for Meta & TikTok paid ad campaigns" },
    { id: "opt-paid-90", name: "90-Day Extended Commercial Usage", desc: "Full commercial ad rights across paid social channels" },
    { id: "opt-stills-pack", name: "Additional 10 Editorial Table Stills", desc: "High-resolution 4:5 still photography for feed & press" },
    { id: "opt-rush", name: "48-Hour Priority Rush Delivery", desc: "Expedited editing and delivery for urgent press/events" },
    { id: "opt-travel", name: "Regional Travel (Bali / Hong Kong)", desc: "On-site production in Bali, Hong Kong, or Southeast Asia" }
  ]
};

if (typeof module !== 'undefined' && module.exports) {
  module.exports = PORTFOLIO_DATA;
}

if (typeof window !== "undefined") { window.PORTFOLIO_DATA = PORTFOLIO_DATA; }
