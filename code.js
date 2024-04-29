document.addEventListener('DOMContentLoaded', function () {
    const images = [
        {
            src: 'https://github.com/bellamoss77/PHT101-Final-Project-Gallery/blob/main/images/abandoned-hotel_1.png?raw=true',
            alt: 'door abandoned hotel',
            caption: 'Missing Door from Dilapidated Hotel Building',
            subCaption: 'The Inn at Afton, April 2024',
            category: 'Abandoned Hotel'
        }, {
            src: 'https://github.com/bellamoss77/PHT101-Final-Project-Gallery/blob/main/images/abandoned-hotel_10.png?raw=true',
            alt: 'overgrown abandoned hotel welcome building',
            caption: 'The Earth Swallows the Abandoned',
            subCaption: 'The Inn at Afton, April 2024',
            category: 'Abandoned Hotel'
        }, {
            src: 'https://github.com/bellamoss77/PHT101-Final-Project-Gallery/blob/main/images/abandoned-hotel_11.png?raw=true',
            alt: 'decaying roof of abandoned hotel',
            caption: 'Roof Decay',
            subCaption: 'The Inn at Afton, April 2024',
            category: 'Abandoned Hotel'
        }, {
            src: 'https://github.com/bellamoss77/PHT101-Final-Project-Gallery/blob/main/images/abandoned-hotel_12.png?raw=true',
            alt: 'rotting shingles',
            caption: 'Crumbling Shingles',
            subCaption: 'The Inn at Afton, April 2024',
            category: 'Abandoned Hotel'
        }, {
            src: 'https://github.com/bellamoss77/PHT101-Final-Project-Gallery/blob/main/images/abandoned-hotel_13.png?raw=true',
            alt: 'twisted tree trunk',
            caption: 'Twisted Tree Trunk',
            subCaption: 'The Inn at Afton, April 2024',
            category: 'Abandoned Hotel'
        }, {
            src: 'https://github.com/bellamoss77/PHT101-Final-Project-Gallery/blob/main/images/abandoned-hotel_14.png?raw=true',
            alt: 'abandoned motel roadside sign',
            caption: 'Advert for Abandon',
            subCaption: 'The Inn at Afton, April 2024',
            category: 'Abandoned Hotel'
        }, {
            src: 'https://github.com/bellamoss77/PHT101-Final-Project-Gallery/blob/main/images/abandoned-hotel_15.png?raw=true',
            alt: 'decaying hotel structure',
            caption: 'Rotting Reception',
            subCaption: 'The Inn at Afton, April 2024',
            category: 'Abandoned Hotel'
        }, {
            src: 'https://github.com/bellamoss77/PHT101-Final-Project-Gallery/blob/main/images/abandoned-hotel_16.png?raw=true',
            alt: 'grafitti on abandoned hotel near missing doorway',
            caption: 'Graffiti Greeting',
            subCaption: 'The Inn at Afton, April 2024',
            category: 'Abandoned Hotel'
        }, {
            src: 'https://github.com/bellamoss77/PHT101-Final-Project-Gallery/blob/main/images/abandoned-hotel_17.png?raw=true',
            alt: 'boarded up paint-peeling door',
            caption: 'Decaying Deterrence',
            subCaption: 'The Inn at Afton, April 2024',
            category: 'Abandoned Hotel'
        }, {
            src: 'https://github.com/bellamoss77/PHT101-Final-Project-Gallery/blob/main/images/abandoned-hotel_18.png?raw=true',
            alt: "collapsed room with remnants of bathroom tiles",
            caption: "Bathroom's Last Stand",
            subCaption: 'The Inn at Afton, April 2024',
            category: 'Abandoned Hotel'
        }, {
            src: 'https://github.com/bellamoss77/PHT101-Final-Project-Gallery/blob/main/images/abandoned-hotel_19.png?raw=true',
            alt: 'rags and detritus piled up in room with collapsed roof',
            caption: 'Cold Collapse',
            subCaption: 'The Inn at Afton, April 2024',
            category: 'Abandoned Hotel',
        }, {
            src: 'https://github.com/bellamoss77/PHT101-Final-Project-Gallery/blob/main/images/abandoned-hotel_2.png?raw=true',
            alt: 'Vines cover abandoned building',
            caption: 'Vine Embrace',
            subCaption: 'The Inn at Afton, April 2024',
            category: 'Abandoned Hotel'
        }, {
            src: 'https://github.com/bellamoss77/PHT101-Final-Project-Gallery/blob/main/images/abandoned-hotel_20.png?raw=true',
            alt: 'vines creep into broken window',
            caption: 'New Natural Tenant',
            subCaption: 'The Inn at Afton, April 2024',
            category: 'Abandoned Hotel'
        }, {
            src: 'https://github.com/bellamoss77/PHT101-Final-Project-Gallery/blob/main/images/abandoned-hotel_21.png?raw=true',
            alt: 'dead vines covering entryway to abandoned hotel building',
            caption: 'Dead Vine Doorway',
            subCaption: 'The Inn at Afton, April 2024',
            category: 'Abandoned Hotel'
        }, {
            src: 'https://github.com/bellamoss77/PHT101-Final-Project-Gallery/blob/main/images/abandoned-hotel_22.png?raw=true',
            alt: 'old soap dispenser',
            caption: 'Soapy Relic',
            subCaption: 'The Inn at Afton, April 2024',
            category: 'Abandoned Hotel'
        }, {
            src: 'https://github.com/bellamoss77/PHT101-Final-Project-Gallery/blob/main/images/abandoned-hotel_23.png?raw=true',
            alt: 'leaves frame a through window with graffiti',
            caption: 'Foliage Framing',
            subCaption: 'The Inn at Afton, April 2024',
            category: 'Abandoned Hotel'
        }, {
            src: 'https://github.com/bellamoss77/PHT101-Final-Project-Gallery/blob/main/images/abandoned-hotel_24.png?raw=true',
            alt: 'vines grow up to roof of abandoned hotel building',
            caption: 'Skybound Swallowing',
            subCaption: 'The Inn at Afton, April 2024',
            category: 'Abandoned Hotel'
        }, {
            src: 'https://github.com/bellamoss77/PHT101-Final-Project-Gallery/blob/main/images/abandoned-hotel_25.png?raw=true',
            alt: 'windows busted out of rooms in abandoned hotel',
            caption: 'Elemental Exposure',
            subCaption: 'The Inn at Afton, April 2024',
            category: 'Abandoned Hotel'
        }, {
            src: 'https://github.com/bellamoss77/PHT101-Final-Project-Gallery/blob/main/images/abandoned-hotel_26.png?raw=true',
            alt: 'vines grow over shattered entrance to hotel room',
            caption: 'Vine Invitation',
            subCaption: 'The Inn at Afton, April 2024',
            category: 'Abandoned Hotel'
        }, {
            src: 'https://github.com/bellamoss77/PHT101-Final-Project-Gallery/blob/main/images/abandoned-hotel_27.png?raw=true',
            alt: 'front view of abandoned hotel with windows shattered out',
            caption: 'Exposure',
            subCaption: 'The Inn at Afton, April 2024',
            category: 'Abandoned Hotel'
        }, {
            src: 'https://github.com/bellamoss77/PHT101-Final-Project-Gallery/blob/main/images/abandoned-hotel_28.png?raw=true',
            alt: 'ivy hangs down in outdoor corridor of abandoned hotel building',
            caption: 'Ivy Ornamentation',
            subCaption: 'The Inn at Afton, April 2024',
            category: 'Abandoned Hotel'
        }, {
            src: 'https://github.com/bellamoss77/PHT101-Final-Project-Gallery/blob/main/images/abandoned-hotel_3.png?raw=true',
            alt: 'old abandoned furniture tossed in room of abandoned hotel',
            caption: 'Overturned',
            subCaption: 'The Inn at Afton, April 2024',
            category: 'Abandoned Hotel'
        }, {
            src: 'https://github.com/bellamoss77/PHT101-Final-Project-Gallery/blob/main/images/abandoned-hotel_30.png?raw=true',
            alt: 'broken glass litters outdoor corridor to rooms in abandoned hotel',
            caption: 'Shattered',
            subCaption: 'The Inn at Afton, April 2024',
            category: 'Abandoned Hotel'
        }, {
            src: 'https://github.com/bellamoss77/PHT101-Final-Project-Gallery/blob/main/images/abandoned-hotel_31.png?raw=true',
            alt: 'broken window at abandoned hotel',
            caption: 'Open Wound',
            subCaption: 'The Inn at Afton, April 2024',
            category: 'Abandoned Hotel'
        }, {
            src: 'https://github.com/bellamoss77/PHT101-Final-Project-Gallery/blob/main/images/abandoned-hotel_32.png?raw=true',
            alt: 'bines overtake and grow into room of abandoned hotel',
            caption: 'Reclamation',
            subCaption: 'The Inn at Afton, April 2024', 
            category: 'Abandoned Hotel'
        }, {
            src: 'https://github.com/bellamoss77/PHT101-Final-Project-Gallery/blob/main/images/abandoned-hotel_33.png?raw=true',
            alt: 'view through window with panes broken out on abandoned hotel',
            captioned: 'Gaps and Growth',
            subCaption: 'The Inn at Afton, April 2024', 
            category: 'Abandoned Hotel'
        }, {
            src: 'https://github.com/bellamoss77/PHT101-Final-Project-Gallery/blob/main/images/abandoned-hotel_34.png?raw=true',
            alt: 'bines overtake side of abandoned hotel',
            caption: 'Vine Revival',
            subCaption: 'The Inn at Afton, April 2024',
            category: 'Abandoned Hotel'
        }, {
            src: 'https://github.com/bellamoss77/PHT101-Final-Project-Gallery/blob/main/images/abandoned-hotel_35.png?raw=true',
            alt: 'open window with missing panes',
            caption: 'Welcome to My Hovel',
            subCaption: 'The Inn at Afton, April 2024',
            category: 'Abandoned Hotel'
        }, {
            src: 'https://github.com/bellamoss77/PHT101-Final-Project-Gallery/blob/main/images/abandoned-hotel_36.png?raw=true',
            alt: 'a tree grows in center of abandoned hotel room',
            caption: 'New Natural Tenant 2',
            subCaption: 'The Inn at Afton, April 2024',
            category: 'Abandoned Hotel'
        }, {
            src: 'https://github.com/bellamoss77/PHT101-Final-Project-Gallery/blob/main/images/abandoned-hotel_37.png?raw=true',
            alt: 'missing tiles from bathroom wall',
            caption: 'Broken Bathroom',
            subCaption: 'The Inn at Afton, April 2024',
            category: 'Abandoned Hotel'
        }, {
            src: 'https://github.com/bellamoss77/PHT101-Final-Project-Gallery/blob/main/images/abandoned-hotel_38.png?raw=true',
            alt: 'road to dilapidated hotel building',
            caption: 'Road to Ruins',
            subCaption: 'The Inn at Afton, April 2024',
            category: 'Abandoned Hotel'
        }, {
            src: 'https://github.com/bellamoss77/PHT101-Final-Project-Gallery/blob/main/images/abandoned-hotel_39.png?raw=true',
            alt: 'window missing and walls covered in grafitti in abandoned hotel room',
            caption: 'Wide Open',
            subCaption: 'The Inn at Afton, April 2024',
            category: 'Abandoned Hotel'
        }, {
            src: 'https://github.com/bellamoss77/PHT101-Final-Project-Gallery/blob/main/images/abandoned-hotel_4.png?raw=true',
            alt: 'ivy overtakes abandoned hotel building',
            caption: 'Reclamation 2',
            subCaption: 'The Inn at Afton, April 2024',
            category: 'Abandoned Hotel'
        }, {
            src: 'https://github.com/bellamoss77/PHT101-Final-Project-Gallery/blob/main/images/abandoned-hotel_40.png?raw=true',
            alt: 'vines and foliage overtake abandoned hotel building',
            caption: 'Back to Nature',
            subCaption: 'The Inn at Afton, April 2024',
            category: 'Abandoned Hotel'
        }, {
            src: 'https://github.com/bellamoss77/PHT101-Final-Project-Gallery/blob/main/images/abandoned-hotel_41.png?raw=true',
            alt: 'abandoned hotel building next to empty hotel sign',
            caption: 'Empty to All But Earth',
            subCaption: 'The Inn at Afton, April 2024', 
            category: 'Abandoned Hotel'
        }, {
            src: 'https://github.com/bellamoss77/PHT101-Final-Project-Gallery/blob/main/images/abandoned-hotel_42.png?raw=true',
            alt: 'broken windows in abandoned hotel',
            caption: 'Hollow Holes',
            subCaption: 'The Inn at Afton, April 2024',
            category: 'Abandoned Hotel'
        }, {
            src: 'https://github.com/bellamoss77/PHT101-Final-Project-Gallery/blob/main/images/abandoned-hotel_44.png?raw=true',
            alt: 'exposed rafters of abandoned hotel',
            caption: 'Rafters Revealed',
            subCaption: 'The Inn at Afton, April 2024',
            category: 'Abandoned Hotel'
        }, {
            src: 'https://github.com/bellamoss77/PHT101-Final-Project-Gallery/blob/main/images/abandoned-hotel_46.png?raw=true',
            alt: 'door with missing knob at abandoned hotel',
            caption: 'Naked Knob',
            subCaption: 'The Inn at Afton, April 2024',
            category: 'Abandoned Hotel'
        }, {
            src: 'https://github.com/bellamoss77/PHT101-Final-Project-Gallery/blob/main/images/abandoned-hotel_47.png?raw=true',
            alt: 'graffiti covers wall of abandoned hotel room',
            caption: 'Written Ramblings',
            subCaption: 'The Inn at Afton, April 2024',
            category: 'Abandoned Hotel'
        }, {
            src: 'https://github.com/bellamoss77/PHT101-Final-Project-Gallery/blob/main/images/abandoned-hotel_49.png?raw=true',
            alt: 'missing side wall from abandoned hotel',
            caption: 'Holes in Habitat',
            subCaption: 'The Inn at Afton, April 2024',
            category: 'Abandoned Hotel'
        }, {
            src: 'https://github.com/bellamoss77/PHT101-Final-Project-Gallery/blob/main/images/abandoned-hotel_5.png?raw=true',
            alt: 'power line taken down by vines',
            caption: 'Reclamation 3',
            subCaption: 'The Inn at Afton, April 2024',
            category: 'Abandoned Hotel'
        }, {
            src: 'https://github.com/bellamoss77/PHT101-Final-Project-Gallery/blob/main/images/abandoned-hotel_50.png?raw=true',
            alt: 'black and white image of damaged room in abandoned hotel',
            caption: 'Unruly',
            subCaption: 'The Inn at Afton, April 2024',
            category: 'Abandoned Hotel'
        }, {
            src: 'https://github.com/bellamoss77/PHT101-Final-Project-Gallery/blob/main/images/abandoned-hotel_51.png?raw=true',
            alt: 'exposed roof on abandoned hotel',
            caption: 'Revelation of Ruins',
            subCaption: 'The Inn at Afton, April 2024',
            category: 'Abandoned Hotel'
        }, {
            src: 'https://github.com/bellamoss77/PHT101-Final-Project-Gallery/blob/main/images/abandoned-hotel_52.png?raw=true',
            alt: 'missing roof from abandoned hotel room',
            caption: 'Heavenly Hovel',
            subCaption: 'The Inn at Afton, April 2024',
            category: 'Abandoned Hotel'
        }, {
            src: 'https://github.com/bellamoss77/PHT101-Final-Project-Gallery/blob/main/images/abandoned-hotel_53.png?raw=true',
            alt: 'peeling walls, broken mirror in abandoned hotel room',
            caption: 'Wrecked',
            subCaption: 'The Inn at Afton, April 2024',
            category: 'Abandoned Hotel'
        }, {
            src: 'https://github.com/bellamoss77/PHT101-Final-Project-Gallery/blob/main/images/abandoned-hotel_54.png?raw=true',
            alt: 'grafitti around light switch',
            caption: 'Creative Destruction',
            subCaption: 'The Inn at Afton, April 2024',
            category: 'Abandoned Hotel'
        }, {
            src: 'https://github.com/bellamoss77/PHT101-Final-Project-Gallery/blob/main/images/abandoned-hotel_55.png?raw=true',
            alt: 'hole in roof of abandoned hotel room',
            caption: 'Roof Rot',
            subCaption: 'The Inn at Afton, April 2024',
            category: 'Abandoned Hotel'
        }, {
            src: 'https://github.com/bellamoss77/PHT101-Final-Project-Gallery/blob/main/images/abandoned-hotel_57.png?raw=true',
            alt: 'patio door at abandoned holiday inn',
            caption: '"Here Be Dragons"',
            subCaption: 'Old  Holiday Inn, Afton, VA, April 2024',
            category: 'Abandoned Hotel'
        }, {
            src: 'https://github.com/bellamoss77/PHT101-Final-Project-Gallery/blob/main/images/abandoned-hotel_59.png?raw=true', 
            alt: 'side facade of abandoned holiday inn',
            caption: 'Sentinal',
            subCaption: 'Old Holiday Inn, Afton, VA, April 2024',
            category: 'Abandoned Hotel'
        }, {
            src: 'https://github.com/bellamoss77/PHT101-Final-Project-Gallery/blob/main/images/abandoned-hotel_60.png?raw=true',
            alt: 'close up of graffiti on side of abandoned holiday inn',
            caption: 'Graffiti Sunset',
            subCaption: 'Old Holiday Inn, Afton, VA, April 2024',
            category: 'Abandoned Hotel'
        }, {
            src: 'https://github.com/bellamoss77/PHT101-Final-Project-Gallery/blob/main/images/abandoned-hotel_61.png?raw=true',
            alt: 'black and white side of old holiday inn',
            caption: '"Keep Out"',
            subCaption: 'Old Holiday Inn, Afton, VA, April 2024',
            category: 'Abandoned Hotel'
        }, {
            src: 'https://github.com/bellamoss77/PHT101-Final-Project-Gallery/blob/main/images/abandoned-hotel_62.png?raw=true', 
            alt: 'graffiti covered old holiday inn',
            caption: 'Blemish Amidst Beauty',
            subCaption: 'Old Holiday Inn, Afton, VA, April 2024',
            category: 'Abandoned Hotel'
        }, {
            src: 'https://github.com/bellamoss77/PHT101-Final-Project-Gallery/blob/main/images/abandoned-hotel_63.png?raw=true',
            alt: 'entrance to abandoned holiday inn',
            caption: 'Empty Entrance',
            subCaption: 'Old Holiday Inn, Afton, VA, April 2024',
            category: 'Abandoned Hotel'
        }, {
            src: 'https://github.com/bellamoss77/PHT101-Final-Project-Gallery/blob/main/images/abandoned-hotel_65.png?raw=true',
            alt: 'ivy hangs from ceiling and frames broken window of abandoned hotel',
            caption: 'Ivy Curtains',
            subCaption: 'The Inn at Afton, April 2024',
            category: 'Abandoned Hotel'
        }, {
            src: 'https://github.com/bellamoss77/PHT101-Final-Project-Gallery/blob/main/images/abandoned-hotel_66.png?raw=true',
            alt: 'white flowers in front of abandoned hotel',
            caption: 'Rebirth',
            subCaption: 'The Inn at Afton, April 2024',
            category: 'Abandoned Hotel'
        }, {
            src: 'https://github.com/bellamoss77/PHT101-Final-Project-Gallery/blob/main/images/abandoned-hotel_67.png?raw=true',
            alt: 'foliage covers facade of abandoned hotel',
            caption: 'Swallowed',
            subCaption: 'The Inn at Afton, April 2024',
            category: 'Abandoned Hotel'
        }, {
            src: 'https://github.com/bellamoss77/PHT101-Final-Project-Gallery/blob/main/images/abandoned-hotel_68.png?raw=true',
            alt: 'cushions in exposed abandoned hotel room',
            caption: 'Crumbled and Cushions',
            subCaption: 'The Inn at Afton, April 2024',
            category: 'Abandoned Hotel'
        }, {
            src: 'https://github.com/bellamoss77/PHT101-Final-Project-Gallery/blob/main/images/abandoned-hotel_69.png?raw=true',
            alt: 'ivy grows into open windows of abandoned hotel',
            caption: 'Welcome In',
            subCaption: 'The Inn at Afton, April 2024',
            category: 'Abandoned Hotel'
        }, {
            src: 'https://github.com/bellamoss77/PHT101-Final-Project-Gallery/blob/main/images/abandoned-hotel_7.png?raw=true',
            alt: 'overgrown path to entrance of abandoned hotel',
            caption: 'Obstructed',
            subCaption: 'The Inn at Afton, April 2024',
            category: 'Abandoned Hotel'
        }, {
            src: 'https://github.com/bellamoss77/PHT101-Final-Project-Gallery/blob/main/images/abandoned-hotel_71.png?raw=true',
            alt: 'graffiti and vines cover entrance to abandoned hotel',
            caption: 'Decay and Growth',
            subCaption: 'The Inn at Afton, April 2024',
            category: 'Abandoned Hotel'
        }, {
            src: 'https://github.com/bellamoss77/PHT101-Final-Project-Gallery/blob/main/images/abandoned-hotel_72.png?raw=true',
            alt: 'graffiti covers abandoned hotel room interior and exterior',
            caption: 'Wide Open',
            subCaption: 'The Inn at Afton, April 2024', 
            category: 'Abandoned Hotel'
        }, {
            src: 'https://github.com/bellamoss77/PHT101-Final-Project-Gallery/blob/main/images/abandoned-hotel_73.png?raw=true',
            alt: 'graffiti and piled up furniture',
            caption: '"Stay Outta VA"',
            subCaption: 'The Inn at Afton, April 2024',
            category: 'Abandoned Hotel'
        }, {
            src: 'https://github.com/bellamoss77/PHT101-Final-Project-Gallery/blob/main/images/abandoned-hotel_74.png?raw=true',
            alt: 'green graffiti on abandoned hotel next to white flowering tree',
            caption: 'Green Graffiti',
            subCaption: 'The Inn at Afton, April 2024',
            category: 'Abandoned Hotel'
        }, {
            src: 'https://github.com/bellamoss77/PHT101-Final-Project-Gallery/blob/main/images/abandoned-hotel_75.png?raw=true',
            alt: 'vines overtake abandoned hotel with abandoned holiday inn in background',
            caption: 'Reclamation 4',
            subCaption: 'The Inn at Afton, April 2024',
            category: 'Abandoned Hotel'
        }, {
            src: 'https://github.com/bellamoss77/PHT101-Final-Project-Gallery/blob/main/images/abandoned-hotel_76.png?raw=true',
            alt: 'black and white front view of abandoned hotel',
            caption: 'Broken',
            subCaption: 'The Inn at Afton, April 2024',
            category: 'Abandoned Hotel'
        }, {
            src: 'https://github.com/bellamoss77/PHT101-Final-Project-Gallery/blob/main/images/abandoned-hotel_77.png?raw=true',
            alt: 'vintage colors front view of abandoned hotel',
            caption: 'Vintage Broken',
            subCaption: 'The Inn at Afton, April 2024',
            category: 'Abandoned Hotel'
        }, {
            src: 'https://github.com/bellamoss77/PHT101-Final-Project-Gallery/blob/main/images/abandoned-hotel_78.png?raw=true',
            alt: 'back view of old holiday inn',
            caption: 'Decay',
            subCaption: 'Old Holiday Inn, Afton, VA, April 2024',
            category: 'Abandoned Hotel'
        }, {
            src: 'https://github.com/bellamoss77/PHT101-Final-Project-Gallery/blob/main/images/abandoned-hotel_79.png?raw=true',
            alt: 'daffodils grows where tulips used to be',
            caption: 'Daffodil Decoration',
            subCaption: 'Old Holiday Inn, Afton, VA, April 2024',
            category: 'Abandoned Hotel'
        }, {
            src: 'https://github.com/bellamoss77/PHT101-Final-Project-Gallery/blob/main/images/abandoned-hotel_8.png?raw=true',
            alt: 'single E on abandoned hotel sign',
            caption: 'Incomplete E',
            subCaption: 'The Inn at Afton, April 2024',
            category: 'Abandoned Hotel'
        }, {
            src: 'https://github.com/bellamoss77/PHT101-Final-Project-Gallery/blob/main/images/abandoned-hotel_80.png?raw=true',
            alt: 'room doors to abandoned holiday inn rooms',
            caption: '"No Smoking"',
            subCaption: 'Old Holiday Inn, Afton, VA, April 2024',
            category: 'Abandoned Hotel'
        }, {
            src: 'https://github.com/bellamoss77/PHT101-Final-Project-Gallery/blob/main/images/abandoned-hotel_81.png?raw=true',
            alt: 'intact abandoned hotel room',
            caption: 'Time Capsule',
            subCaption: 'Old Holiday Inn, Afton, VA, April 2024',
            category: 'Abandoned Hotel'
        }, {
            src: 'https://github.com/bellamoss77/PHT101-Final-Project-Gallery/blob/main/images/abandoned-hotel_82.png?raw=true', 
            alt: 'Lobby entrance to abandoned holiday inn',
            caption: 'Time Gone By',
            subCaption: 'Old Holiday Inn, Afton, VA, April 2024', 
            category: 'Abandoned Hotel'
        }, {
            src: 'https://github.com/bellamoss77/PHT101-Final-Project-Gallery/blob/main/images/abandoned-hotel_83.png?raw=true',
            alt: 'Lobby entrance driveway old holiday inn',
            caption: 'Majestic Ruin',
            subCaption: 'Old Holiday Inn, Afton, VA, April 2024',
            category: 'Abandoned Hotel'
        }, {
            src: 'https://github.com/bellamoss77/PHT101-Final-Project-Gallery/blob/main/images/abandoned-hotel_84.png?raw=true',
            alt: 'round wooden cover',
            caption: 'Wooden Logo',
            subCaption: 'Old Holiday Inn, Afton, VA, April 2024',
            category: 'Abandoned Hotel'
        }, {
            src: 'https://github.com/bellamoss77/PHT101-Final-Project-Gallery/blob/main/images/abandoned-hotel_85.png?raw=true',
            alt: 'old millstone',
            caption: 'Millstone Memories',
            subCaption: 'Old Holiday Inn, Afton, VA, April 2024',
            category: 'Abandoned Hotel'
        }, {
            src: 'https://github.com/bellamoss77/PHT101-Final-Project-Gallery/blob/main/images/abandoned-hotel_86.png?raw=true',
            alt: 'side of abandoned holiday inn',
            caption: 'Open Abyss',
            subCaption: 'Old Holiday Inn, Afton, VA, April 2024',
            category: 'Abandoned Hotel'
        }, {
            src: 'https://github.com/bellamoss77/PHT101-Final-Project-Gallery/blob/main/images/abandoned-hotel_87.png?raw=true',
            alt: 'patio of abandoned holiday inn',
            caption: 'Eerie Echoes',
            subCaption: 'Old Holiday Inn, Afton, VA, April 2024',
            category: 'Abandoned Hotel'
        }, {
            src: 'https://github.com/bellamoss77/PHT101-Final-Project-Gallery/blob/main/images/abandoned-hotel_88.png?raw=true',
            alt: 'side view of old holiday inn',
            caption: 'Abandoned in the Air',
            subCaption: 'Old Holiday Inn, Afton, VA, April 2024',
            category: 'Abandoned Hotel'
        }, {
            src: 'https://github.com/bellamoss77/PHT101-Final-Project-Gallery/blob/main/images/abandoned-hotel_89.png?raw=true',
            alt: 'ivy crows over abandoned holiday inn',
            caption: 'Reclamation 5',
            subCaption: 'Old Holiday Inn, Afton, VA, April 2024',
            category: 'Abandoned Hotel'
        }, {
            src: 'https://github.com/bellamoss77/PHT101-Final-Project-Gallery/blob/main/images/abandoned-hotel_9.png?raw=true',
            alt: 'ivy covers abandoned hotel',
            caption: 'Resistance to Ruin',
            subCaption: 'The Inn at Afton, April 2024', 
            category: 'Abandoned Hotel'
        }, {
            src: 'https://github.com/bellamoss77/PHT101-Final-Project-Gallery/blob/main/images/abandoned-hotel_90.png?raw=true',
            alt: 'pool and patio of abandoned holiday inn',
            caption: 'Recreation in Ruin',
            subCaption: 'Old Holiday Inn, Afton, VA, April 2024',
            category: 'Abandoned Hotel'
        }, {
            src: 'https://github.com/bellamoss77/PHT101-Final-Project-Gallery/blob/main/images/abandoned-hotel_91.png?raw=true',
            alt: 'graffiti on stone wall of old holiday inn',
            caption: 'Colored Cry',
            subCaption: 'Old Holiday Inn, Afton, VA, April 2024',
            category: 'Abandoned Hotel'
        }, {
            src: 'https://github.com/bellamoss77/PHT101-Final-Project-Gallery/blob/main/images/abandoned-hotel_92.png?raw=true',
            alt: 'pool and patio of abandoned holiday inn',
            caption: 'Recreation in Ruin 2',
            subCaption: 'Old Holiday Inn, Afton, VA, April 2024',
            category: 'Abandoned Hotel'
        }, {
            src: 'https://github.com/bellamoss77/PHT101-Final-Project-Gallery/blob/main/images/old-abandoned_1.png?raw=true',
            alt: 'old cannon in palmyra',
            caption: 'At Cannon Point',
            subCaption: 'Historic District, Palmyra, VA, April 2024',
            category: 'Historical Structures'
        }, {
            src: 'https://github.com/bellamoss77/PHT101-Final-Project-Gallery/blob/main/images/old-abandoned_10.png?raw=true',
            alt: 'childhood toy in wrecked home',
            caption: 'Childhood Memories',
            subCaption: 'Abandoned Family Home, Roland Road, Abemarle, VA, April 2024',
            category: 'Abandoned Family Home'
        }, {
            src: 'https://github.com/bellamoss77/PHT101-Final-Project-Gallery/blob/main/images/old-abandoned_11.png?raw=true',
            alt: 'busted stairs to collapsed house',
            caption: 'Wrecked Abode',
            subCaption: 'Abandoned Family Home, Roland Road, Abemarle, VA, April 2024',
            category: 'Abandoned Family Home'
        }, {
            src: 'https://github.com/bellamoss77/PHT101-Final-Project-Gallery/blob/main/images/old-abandoned_13.png?raw=true',
            alt: 'ivy through window of abandoned stone structure',
            caption: 'Ivy Curtains 2',
            subCaption: 'Decrepit Stone Structure Near Riverbank, Palmyra, VA, April 2024',
            category: 'Crumbling Stuctures'
        }, {
            src: 'https://github.com/bellamoss77/PHT101-Final-Project-Gallery/blob/main/images/old-abandoned_14.png?raw=true',
            alt: 'decaying stone structure',
            caption: 'Reclamation 6',
            subCaption: 'Decrepit Stone Structure Near Riverbank, Palmyra, VA, April 2024',
            category: 'Crumbling Structures'
        }, {
            src: 'https://github.com/bellamoss77/PHT101-Final-Project-Gallery/blob/main/images/old-abandoned_16.png?raw=true',
            alt: 'old bank building palmyra',
            caption: 'Bank On This',
            subCaption: 'Old Bank Building, Historic District Palmyra, VA, April 2024',
            category: 'Historical Structures'
        }, {
            src: 'https://github.com/bellamoss77/PHT101-Final-Project-Gallery/blob/main/images/old-abandoned_17.png?raw=true',
            alt: 'Abandoned Family Home',
            caption: 'Abandoned Family Home',
            subCaption: 'Historic District, Palmyra, VA, April 2024',
            category: 'Abandoned Family Home'
        }, {
            src: 'https://github.com/bellamoss77/PHT101-Final-Project-Gallery/blob/main/images/old-abandoned_18.png?raw=true',
            alt: 'old storage shed/storm cellar',
            caption: 'Wrapped',
            subCaption: 'Farm shelter/storage shed, Historic Palmyra, VA, April 2024',
            category: 'Crumbling Structures'
        }, {
            src: 'https://github.com/bellamoss77/PHT101-Final-Project-Gallery/blob/main/images/old-abandoned_19.png?raw=true',
            alt: 'old storage shed/storm cellar',
            caption: 'Nestled',
            subCaption: 'Farm shelter/storage shed, Historic Palmyra, VA, April 2024',
            category: 'Crumbling Structures'
        }, {
            src: 'https://github.com/bellamoss77/PHT101-Final-Project-Gallery/blob/main/images/old-abandoned_21.png?raw=true',
            alt: 'ivy grows over wall of abandoned family home',
            caption: 'Greenery Garnish',
            subCaption: 'Abandoned Family Home, Historic Palmyra, VA, April 2024',
            category: 'Abandoned Family Home'
        }, {
            src: 'https://github.com/bellamoss77/PHT101-Final-Project-Gallery/blob/main/images/old-abandoned_22.png?raw=true',
            alt: 'ivy overtakes porch of abandoned home',
            caption: 'Reclamation 7',
            subCaption: 'Abandoned Family Home, Historic Palmyra, VA, April 2024',
            category: 'Abandoned Family Home'
        }, {
            src: 'https://github.com/bellamoss77/PHT101-Final-Project-Gallery/blob/main/images/old-abandoned_23.png?raw=true',
            alt: 'overgrown steps to abandoned family home',
            caption: 'Swallowing Stairs',
            subCaption: 'Abandoned Family Home, Historic Palmyra, VA, April 2024',
            category: 'Abandoned Family Home'
        }, {
            src: 'https://github.com/bellamoss77/PHT101-Final-Project-Gallery/blob/main/images/old-abandoned_3.png?raw=true',
            alt: 'burlap over rafters',
            caption: 'Burlap Draped Rafters',
            subCaption: 'Old Slave Quarters, Buck Island, VA, April 2024',
            category: 'Crumbling Structures'
        }, {
            src: 'https://github.com/bellamoss77/PHT101-Final-Project-Gallery/blob/main/images/old-abandoned_4.png?raw=true',
            alt: 'collapsing slave quarters',
            caption: 'Reclamation 8', 
            subCaption: 'Old Slave Quarters, Buck Island, VA, April 2024',
            category: 'Crumbling Structures'
        }, {
            src: 'https://github.com/bellamoss77/PHT101-Final-Project-Gallery/blob/main/images/old-abandoned_5.png?raw=true',
            alt: 'old slave quarters from a distance',
            caption: 'Devoured',
            subCaption: 'Old Slave Quarters, Buck Island, VA, April 2024',
            category: 'Crumbling Structures'
        }, {
            src: 'https://github.com/bellamoss77/PHT101-Final-Project-Gallery/blob/main/images/old-abandoned_6.png?raw=true',
            alt: 'collapsed family home',
            caption: 'Collapse',
            subCaption: 'Abandoned Family Home, Roland Road, Abemarle, VA, April 2024',
            category: 'Abandoned Family Home'
        }, {
            src: 'https://github.com/bellamoss77/PHT101-Final-Project-Gallery/blob/main/images/old-abandoned_7.png?raw=true',
            alt: 'collapsed family home',
            caption: 'Wreckage',
            subCaption: 'Abandoned Family Home, Roland Road, Abemarle, VA, April 2024',
            category: 'Abandoned Family Home'
        }, {
            src: 'https://github.com/bellamoss77/PHT101-Final-Project-Gallery/blob/main/images/old-abandoned_8.png?raw=true',
            alt: 'roof of abandoned family home',
            caption: 'Sliding Shingles',
            subCaption: 'Abandoned Family Home, Roland Road, Abemarle, VA, April 2024',
            category: 'Abandoned Family Home'
        }, {
            src: 'https://github.com/bellamoss77/PHT101-Final-Project-Gallery/blob/main/images/old-abandoned_9.png?raw=true',
            alt: 'abandoned family home',
            caption: 'Broken Dreams',
            subCaption: 'Abandoned Family Home, Roland Road, Abemarle, VA, April 2024',
            category: 'Abandoned Family Home'
        }
    ];

    const gallery = document.getElementById('gallery');
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const closeBtn = document.getElementById('close-btn');
    const nextBtn = document.getElementById('next-btn');
    const prevBtn = document.getElementById('prev-btn');
    const likedImages = document.getElementById('liked-images');
    const likedList = document.getElementById('liked-list');
    const toggleLike = document.getElementById('toggle-like');

    let currentIndex = 0;
    let liked = [];

    images.forEach((img, index) => {
        const imageElement = document.createElement('img');
        imageElement.src = img.src;
        imageElement.alt = img.alt;
        imageElement.caption = img.caption;
        imageElement.subCaption = img.subCaption;
        const likeButton = document.createElement('button');
        likeButton.innerHTML = `<i class="fa-solid fa-heart"></i>`;
        likeButton.classList.add('like-btn');
        likeButton.addEventListener('click', () => {
            toggleLiked(index);
        });
        const imageContainer = document.createElement('div');
        imageContainer.appendChild(imageElement);
        imageContainer.appendChild(likeButton);
        gallery.appendChild(imageContainer);

        imageElement.addEventListener('click', () => {
            currentIndex = index;
            openLightbox()
        });
        gallery.appendChild(imageElement);
    });

    function toggleLiked(index) {
        const likedIndex = liked.indexOf(index);
        if (likedIndex === -1) {
            liked.push(index);
        } else {
            liked.splice(likedIndex, 1);
        };
        updateLikedImages();
    };

    function updateLikedImages() {
        likedList.innerHTML = '';
        liked.forEach((index) => {
            const image = images[index];
            const likedItem = document.createElement('div');
            likedItem.textContent = `${image.caption} - ${image.subCaption}`;
            likedList.appendChild(likedItem);
        });
    }

    function openLightbox() {
        if (animationInProgress) return;
        animationInProgress = true;

        const image = images[currentIndex];
        lightbox.classList.remove('hidden');
        lightboxImg.src = image.src;
        lightboxImg.alt = image.alt;
        document.getElementById('lightbox-caption').textContent = image.caption;
        document.getElementById('lightbox-subcaption').textContent = image.subCaption;
        gsap.fromTo(lightboxImg, { opacity: 0 }, { 
            opacity: 1, 
            duration: 0.5, 
            ease: 'power2.inOut',
            onComplete: function() {
                animationInProgress = false;
            } 
        });
    }

    closeBtn.addEventListener('click', () => {
        lightbox.classList.add('hidden');
    });

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' || e.code === 'Escape') {
            lightbox.classList.add('hidden');
        }
    })

    document.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowLeft') {
            currentIndex = (currentIndex - 1 + images.length) % images.length;
            openLightbox();
        } else if (e.key === 'ArrowRight') {
            currentIndex = (currentIndex + 1) % images.length;
            openLightbox();
        }
    })
    nextBtn.addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % images.length;
        openLightbox();
    });
    prevBtn.addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        openLightbox();
    });
    toggleLiked.addEventListener('click', () => {
        likedImages.classList.toggle('hidden');
    });
});