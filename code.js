document.addEventListener('DOMContentLoaded', function() {
    gsap.registerPlugin(ScrollTrigger);

    gsap.from('#galleryTitle', {
        duration: 1,
        autoAlpha: 0,
        ease: 'power2.inOut'
    });

    ScrollTrigger.create({
        trigger: '#galleryTitle',
        start: '+=300',
        end: '+=1000',
        markers: false,
        scrub: true,
        onEnter: () => {
            gsap.to('#galleryTitle h1', {
                duration: 2,
                fontSize: '1.2rem',
                top: '10px',
                left: '10px',
                position: 'fixed',
                toggleActions: 'play reverse play reverse'
            });
        },
        onLeaveBack: (self) => {
            gsap.to('#galleryTitle h1', {
                duration: 1,
                fontSize: '5rem',
                top: '50%',
                left: '50%',
                position: 'absolute',
                clearProps: 'top,left,position,fontSize'
            });
        }
    });

    const explanationLines = document.querySelectorAll('.explanation-text p');
    explanationLines.forEach((line, index) => {
        gsap.fromTo(line, 
        { autoAlpha: 0 },
        { 
            duration: 1,
            autoAlpha: 1,
            scrollTrigger: {
                trigger: line,
                start: 'top bottom',
                end: '+=500',
                //pin: true,
                scrub: true,
                markers: false, 
                toggleActions: 'play reverse play reverse'
            }
          }
        );
    });

    gsap.from('.decrepit-vector', { autoAlpha: 0, duration: 2, ease: 'power2.inOut' });

    ScrollTrigger.create({
        trigger: '.decrepit-vector',
        start: 'top top - 30px',
        end: '+=500',
        scrub: true,
        //pin: true,
        markers: false,
        toggleActions: 'play reverse play reverse',
        onEnter: () => {
            gsap.to('.vector-container img', {
                autoAlpha: 1,
                duration: 3,
                width: '75px', 
                position: 'fixed',
                top: '45px',
                left: '5%',
                transform: 'translateX(-50%)'
            });
        },
        onLeaveBack: () => {
            gsap.to('.vector-container img', {
                duration: 1,
                width: '90vw',
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                clearProps: 'width,position,top,left,transform'
            });
        }
    });


    const images = [
        {
            src: 'https://github.com/bellamoss77/PHT101-Final-Project-Gallery/blob/main/images/abandoned-hotel_1.png?raw=true',
            alt: 'door abandoned hotel',
            caption: 'Doorway Abyss',
            subCaption: 'Old Howard Johnson Restaurant, April 2024',
            category: 'Abandoned Restaurant',
            id: '1',
            location: 'Afton Mountain, VA',
            featured: false
        }, {
            src: 'https://github.com/bellamoss77/PHT101-Final-Project-Gallery/blob/main/images/abandoned-hotel_10.png?raw=true',
            alt: 'overgrown abandoned hotel welcome building',
            caption: 'The Earth Swallows the Abandoned',
            subCaption: 'Old Howard Johnson Restaurant, April 2024',
            category: 'Abandoned Restaurant',
            id: '2',
            location: 'Afton Mountain, VA',
            featured: true
        }, {
            src: 'https://github.com/bellamoss77/PHT101-Final-Project-Gallery/blob/main/images/abandoned-hotel_11.png?raw=true',
            alt: 'decaying roof of abandoned hotel',
            caption: 'Roof Decay',
            subCaption: 'Old Howard Johnson Restaurant, April 2024',
            category: 'Abandoned Restaurant',
            id: '3',
            location: 'Afton Mountain, VA',
            featured: true
        }, {
            src: 'https://github.com/bellamoss77/PHT101-Final-Project-Gallery/blob/main/images/abandoned-hotel_12.png?raw=true',
            alt: 'rotting shingles',
            caption: 'Crumbling Shingles',
            subCaption: 'The Inn at Afton, April 2024',
            category: 'Abandoned Hotel',
            id: '4',
            location: 'Afton Mountain, VA',
            featured: false
        }, {
            src: 'https://github.com/bellamoss77/PHT101-Final-Project-Gallery/blob/main/images/abandoned-hotel_13.png?raw=true',
            alt: 'twisted tree trunk',
            caption: 'Twisted Tree Trunk',
            subCaption: 'The Inn at Afton, April 2024',
            category: 'Abandoned Hotel',
            id: '5',
            location: 'Afton Mountain, VA',
            featured: false
        }, {
            src: 'https://github.com/bellamoss77/PHT101-Final-Project-Gallery/blob/main/images/abandoned-hotel_14.png?raw=true',
            alt: 'abandoned motel roadside sign',
            caption: 'Advert for Abandon',
            subCaption: 'The Inn at Afton, April 2024',
            category: 'Abandoned Hotel',
            id: '6',
            location: 'Afton Mountain, VA',
            featured: true
        }, {
            src: 'https://github.com/bellamoss77/PHT101-Final-Project-Gallery/blob/main/images/abandoned-hotel_15.png?raw=true',
            alt: 'decaying hotel structure',
            caption: 'Rotting Reception',
            subCaption: 'The Inn at Afton, April 2024',
            category: 'Abandoned Hotel',
            id: '7',
            location: 'Afton Mountain, VA',
            featured: true
        }, {
            src: 'https://github.com/bellamoss77/PHT101-Final-Project-Gallery/blob/main/images/abandoned-hotel_16.png?raw=true',
            alt: 'grafitti on abandoned hotel near missing doorway',
            caption: 'Graffiti Greeting',
            subCaption: 'Old Howard Johnson Restaurant, April 2024',
            category: 'Abandoned Restaurant',
            id: '8',
            location: 'Afton Mountain, VA',
            featured: false
        }, {
            src: 'https://github.com/bellamoss77/PHT101-Final-Project-Gallery/blob/main/images/abandoned-hotel_17.png?raw=true',
            alt: 'boarded up paint-peeling door',
            caption: 'Decaying Deterrence',
            subCaption: 'Old Howard Johnson Restaurant, April 2024',
            category: 'Abandoned Restaurant',
            id: '9',
            location: 'Afton Mountain, VA',
            featured: false
        }, {
            src: 'https://github.com/bellamoss77/PHT101-Final-Project-Gallery/blob/main/images/abandoned-hotel_18.png?raw=true',
            alt: "collapsed room with remnants of bathroom tiles",
            caption: "Bathroom's Last Stand",
            subCaption: 'Old Howard Johnson Restaurant, April 2024',
            category: 'Abandoned Restaurant',
            id: '10',
            location: 'Afton Mountain, VA',
            featured: true
        }, {
            src: 'https://github.com/bellamoss77/PHT101-Final-Project-Gallery/blob/main/images/abandoned-hotel_19.png?raw=true',
            alt: 'rags and detritus piled up in room with collapsed roof',
            caption: 'Cold Collapse',
            subCaption: 'Old Howard Johnson Restaurant, April 2024',
            category: 'Abandoned Restaurant',
            id: '11',
            location: 'Afton Mountain, VA',
            featured: true
        }, {
            src: 'https://github.com/bellamoss77/PHT101-Final-Project-Gallery/blob/main/images/abandoned-hotel_2.png?raw=true',
            alt: 'Vines cover abandoned building',
            caption: 'Vine Embrace',
            subCaption: 'Old Howard Johnson Restaurant, April 2024',
            category: 'Abandoned Restaurant',
            id: '12',
            location: 'Afton Mountain, VA',
            featured: false
        }, {
            src: 'https://github.com/bellamoss77/PHT101-Final-Project-Gallery/blob/main/images/abandoned-hotel_20.png?raw=true',
            alt: 'vines creep into broken window',
            caption: 'New Natural Tenant',
            subCaption: 'Old Howard Johnson Restaurant, April 2024',
            category: 'Abandoned Restaurant',
            id: '13',
            location: 'Afton Mountain, VA',
            featured: false
        }, {
            src: 'https://github.com/bellamoss77/PHT101-Final-Project-Gallery/blob/main/images/abandoned-hotel_21.png?raw=true',
            alt: 'dead vines covering entryway to abandoned hotel building',
            caption: 'Dead Vine Doorway',
            subCaption: 'Old Howard Johnson Restaurant, April 2024',
            category: 'Abandoned Restaurant',
            id: '14',
            location: 'Afton Mountain, VA',
            featured: false
        }, {
            src: 'https://github.com/bellamoss77/PHT101-Final-Project-Gallery/blob/main/images/abandoned-hotel_22.png?raw=true',
            alt: 'old soap dispenser',
            caption: 'Soapy Relic',
            subCaption: 'Old Howard Johnson Restaurant, April 2024',
            category: 'Abandoned Restaurant',
            id: '15',
            location: 'Afton Mountain, VA',
            featured: true
        }, {
            src: 'https://github.com/bellamoss77/PHT101-Final-Project-Gallery/blob/main/images/abandoned-hotel_23.png?raw=true',
            alt: 'leaves frame a through window with graffiti',
            caption: 'Foliage Framing',
            subCaption: 'Old Howard Johnson Restaurant, April 2024',
            category: 'Abandoned Restaurant',
            id: '16',
            location: 'Afton Mountain, VA',
            featured: true
        }, {
            src: 'https://github.com/bellamoss77/PHT101-Final-Project-Gallery/blob/main/images/abandoned-hotel_24.png?raw=true',
            alt: 'vines grow up to roof of abandoned hotel building',
            caption: 'Skybound Swallowing',
            subCaption: 'The Inn at Afton, April 2024',
            category: 'Abandoned Hotel',
            id: '17',
            location: 'Afton Mountain, VA',
            featured: false
        }, {
            src: 'https://github.com/bellamoss77/PHT101-Final-Project-Gallery/blob/main/images/abandoned-hotel_25.png?raw=true',
            alt: 'windows busted out of rooms in abandoned hotel',
            caption: 'Elemental Exposure',
            subCaption: 'The Inn at Afton, April 2024',
            category: 'Abandoned Hotel',
            id: '18',
            location: 'Afton Mountain, VA',
            featured: false
        }, {
            src: 'https://github.com/bellamoss77/PHT101-Final-Project-Gallery/blob/main/images/abandoned-hotel_26.png?raw=true',
            alt: 'vines grow over shattered entrance to hotel room',
            caption: 'Vine Invitation',
            subCaption: 'The Inn at Afton, April 2024',
            category: 'Abandoned Hotel',
            id: '19',
            location: 'Afton Mountain, VA',
            featured: false
        }, {
            src: 'https://github.com/bellamoss77/PHT101-Final-Project-Gallery/blob/main/images/abandoned-hotel_27.png?raw=true',
            alt: 'front view of abandoned hotel with windows shattered out',
            caption: 'Exposure',
            subCaption: 'The Inn at Afton, April 2024',
            category: 'Abandoned Hotel',
            id: '20',
            location: 'Afton Mountain, VA',
            featured: true
        }, {
            src: 'https://github.com/bellamoss77/PHT101-Final-Project-Gallery/blob/main/images/abandoned-hotel_28.png?raw=true',
            alt: 'ivy hangs down in outdoor corridor of abandoned hotel building',
            caption: 'Ivy Ornamentation',
            subCaption: 'The Inn at Afton, April 2024',
            category: 'Abandoned Hotel',
            id: '21',
            location: 'Afton Mountain, VA',
            featured: true
        }, {
            src: 'https://github.com/bellamoss77/PHT101-Final-Project-Gallery/blob/main/images/abandoned-hotel_3.png?raw=true',
            alt: 'old abandoned furniture tossed in room of abandoned hotel',
            caption: 'Overturned',
            subCaption: 'The Inn at Afton, April 2024',
            category: 'Abandoned Hotel',
            id: '22',
            location: 'Afton Mountain, VA',
            featured: true
        }, {
            src: 'https://github.com/bellamoss77/PHT101-Final-Project-Gallery/blob/main/images/abandoned-hotel_30.png?raw=true',
            alt: 'broken glass litters outdoor corridor to rooms in abandoned hotel',
            caption: 'Shattered',
            subCaption: 'The Inn at Afton, April 2024',
            category: 'Abandoned Hotel',
            id: '23',
            location: 'Afton Mountain, VA',
            featured: true
        }, {
            src: 'https://github.com/bellamoss77/PHT101-Final-Project-Gallery/blob/main/images/abandoned-hotel_31.png?raw=true',
            alt: 'broken window at abandoned hotel',
            caption: 'Open Wound',
            subCaption: 'The Inn at Afton, April 2024',
            category: 'Abandoned Hotel',
            id: '24',
            location: 'Afton Mountain, VA',
            featured: true
        }, {
            src: 'https://github.com/bellamoss77/PHT101-Final-Project-Gallery/blob/main/images/abandoned-hotel_32.png?raw=true',
            alt: 'bines overtake and grow into room of abandoned hotel',
            caption: 'Reclamation',
            subCaption: 'The Inn at Afton, April 2024', 
            category: 'Abandoned Hotel',
            id: '25',
            location: 'Afton Mountain, VA',
            featured: false
        }, {
            src: 'https://github.com/bellamoss77/PHT101-Final-Project-Gallery/blob/main/images/abandoned-hotel_33.png?raw=true',
            alt: 'view through window with panes broken out on abandoned hotel',
            captioned: 'Gaps and Growth',
            subCaption: 'The Inn at Afton, April 2024', 
            category: 'Abandoned Hotel',
            id: '26',
            location: 'Afton Mountain, VA',
            featured: false
        }, {
            src: 'https://github.com/bellamoss77/PHT101-Final-Project-Gallery/blob/main/images/abandoned-hotel_34.png?raw=true',
            alt: 'bines overtake side of abandoned hotel',
            caption: 'Vine Revival',
            subCaption: 'The Inn at Afton, April 2024',
            category: 'Abandoned Hotel',
            id: '27',
            location: 'Afton Mountain, VA',
            featured: false
        }, {
            src: 'https://github.com/bellamoss77/PHT101-Final-Project-Gallery/blob/main/images/abandoned-hotel_35.png?raw=true',
            alt: 'open window with missing panes',
            caption: 'Welcome to My Hovel',
            subCaption: 'The Inn at Afton, April 2024',
            category: 'Abandoned Hotel',
            id: '28',
            location: 'Afton Mountain, VA',
            featured: false
        }, {
            src: 'https://github.com/bellamoss77/PHT101-Final-Project-Gallery/blob/main/images/abandoned-hotel_36.png?raw=true',
            alt: 'a tree grows in center of abandoned hotel room',
            caption: 'New Natural Tenant 2',
            subCaption: 'The Inn at Afton, April 2024',
            category: 'Abandoned Hotel',
            id: '29',
            location: 'Afton Mountain, VA',
            featured: true
        }, {
            src: 'https://github.com/bellamoss77/PHT101-Final-Project-Gallery/blob/main/images/abandoned-hotel_37.png?raw=true',
            alt: 'missing tiles from bathroom wall',
            caption: 'Broken Bathroom',
            subCaption: 'The Inn at Afton, April 2024',
            category: 'Abandoned Hotel',
            id: '30',
            location: 'Afton Mountain, VA',
            featured: false
        }, {
            src: 'https://github.com/bellamoss77/PHT101-Final-Project-Gallery/blob/main/images/abandoned-hotel_38.png?raw=true',
            alt: 'road to dilapidated hotel building',
            caption: 'Road to Ruins',
            subCaption: 'The Inn at Afton, April 2024',
            category: 'Abandoned Hotel',
            id: '31',
            location: 'Afton Mountain, VA',
            featured: false
        }, {
            src: 'https://github.com/bellamoss77/PHT101-Final-Project-Gallery/blob/main/images/abandoned-hotel_39.png?raw=true',
            alt: 'window missing and walls covered in grafitti in abandoned hotel room',
            caption: 'Wide Open',
            subCaption: 'The Inn at Afton, April 2024',
            category: 'Abandoned Hotel',
            id: '32',
            location: 'Afton Mountain, VA',
            featured: false
        }, {
            src: 'https://github.com/bellamoss77/PHT101-Final-Project-Gallery/blob/main/images/abandoned-hotel_4.png?raw=true',
            alt: 'ivy overtakes abandoned hotel building',
            caption: 'Reclamation 2',
            subCaption: 'The Inn at Afton, April 2024',
            category: 'Abandoned Hotel',
            id: '33',
            location: 'Afton Mountain, VA',
            featured: false
        }, {
            src: 'https://github.com/bellamoss77/PHT101-Final-Project-Gallery/blob/main/images/abandoned-hotel_40.png?raw=true',
            alt: 'vines and foliage overtake abandoned hotel building',
            caption: 'Back to Nature',
            subCaption: 'The Inn at Afton, April 2024',
            category: 'Abandoned Hotel',
            id: '34',
            location: 'Afton Mountain, VA',
            featured: false
        }, {
            src: 'https://github.com/bellamoss77/PHT101-Final-Project-Gallery/blob/main/images/abandoned-hotel_41.png?raw=true',
            alt: 'abandoned hotel building next to empty hotel sign',
            caption: 'Empty to All But Earth',
            subCaption: 'The Inn at Afton, April 2024', 
            category: 'Abandoned Hotel',
            id: '35',
            location: 'Afton Mountain, VA',
            featured: false
        }, {
            src: 'https://github.com/bellamoss77/PHT101-Final-Project-Gallery/blob/main/images/abandoned-hotel_42.png?raw=true',
            alt: 'broken windows in abandoned hotel',
            caption: 'Hollow Holes',
            subCaption: 'The Inn at Afton, April 2024',
            category: 'Abandoned Hotel',
            id: '36',
            location: 'Afton Mountain, VA',
            featured: false
        }, {
            src: 'https://github.com/bellamoss77/PHT101-Final-Project-Gallery/blob/main/images/abandoned-hotel_43.png?raw=true',
            alt: 'view of red roof of howard johnson restaurant and old holiday inn on hill',
            caption: 'Crumbling Consumerism',
            subCaption: 'Old Howard Johnson Restaurant & Old Holiday Inn, April 2024',
            category: 'Abandoned Hotel',
            id: '37',
            location: 'Afton Mountain, VA',
            featured: true

        }, {
            src: 'https://github.com/bellamoss77/PHT101-Final-Project-Gallery/blob/main/images/abandoned-hotel_44.png?raw=true',
            alt: 'exposed rafters of abandoned hotel',
            caption: 'Rafters Revealed',
            subCaption: 'The Inn at Afton, April 2024',
            category: 'Abandoned Hotel',
            id: '38',
            location: 'Afton Mountain, VA',
            featured: false
        }, {
            src: 'https://github.com/bellamoss77/PHT101-Final-Project-Gallery/blob/main/images/abandoned-hotel_46.png?raw=true',
            alt: 'door with missing knob at abandoned hotel',
            caption: 'Naked Knob',
            subCaption: 'The Inn at Afton, April 2024',
            category: 'Abandoned Hotel',
            id: '39',
            location: 'Afton Mountain, VA',
            featured: false
        }, {
            src: 'https://github.com/bellamoss77/PHT101-Final-Project-Gallery/blob/main/images/abandoned-hotel_47.png?raw=true',
            alt: 'graffiti covers wall of abandoned hotel room',
            caption: 'Written Ramblings',
            subCaption: 'The Inn at Afton, April 2024',
            category: 'Abandoned Hotel',
            id: '40',
            location: 'Afton Mountain, VA',
            featured: true
        }, {
            src: 'https://github.com/bellamoss77/PHT101-Final-Project-Gallery/blob/main/images/abandoned-hotel_49.png?raw=true',
            alt: 'missing side wall from abandoned hotel',
            caption: 'Holes in Habitat',
            subCaption: 'The Inn at Afton, April 2024',
            category: 'Abandoned Hotel',
            id: '41',
            location: 'Afton Mountain, VA',
            featured: false
        }, {
            src: 'https://github.com/bellamoss77/PHT101-Final-Project-Gallery/blob/main/images/abandoned-hotel_5.png?raw=true',
            alt: 'power line taken down by vines',
            caption: 'Reclamation 3',
            subCaption: 'The Inn at Afton, April 2024',
            category: 'Abandoned Hotel',
            id: '42',
            location: 'Afton Mountain, VA',
            featured: false
        }, {
            src: 'https://github.com/bellamoss77/PHT101-Final-Project-Gallery/blob/main/images/abandoned-hotel_50.png?raw=true',
            alt: 'black and white image of damaged room in abandoned hotel',
            caption: 'Unruly',
            subCaption: 'The Inn at Afton, April 2024',
            category: 'Abandoned Hotel',
            id: '43',
            location: 'Afton Mountain, VA',
            featured: false
        }, {
            src: 'https://github.com/bellamoss77/PHT101-Final-Project-Gallery/blob/main/images/abandoned-hotel_51.png?raw=true',
            alt: 'exposed roof on abandoned hotel',
            caption: 'Revelation of Ruins',
            subCaption: 'The Inn at Afton, April 2024',
            category: 'Abandoned Hotel',
            id: '44',
            location: 'Afton Mountain, VA',
            featured: true
        }, {
            src: 'https://github.com/bellamoss77/PHT101-Final-Project-Gallery/blob/main/images/abandoned-hotel_52.png?raw=true',
            alt: 'missing roof from abandoned hotel room',
            caption: 'Heavenly Hovel',
            subCaption: 'The Inn at Afton, April 2024',
            category: 'Abandoned Hotel',
            id: '45',
            location: 'Afton Mountain, VA',
            featured: false
        }, {
            src: 'https://github.com/bellamoss77/PHT101-Final-Project-Gallery/blob/main/images/abandoned-hotel_53.png?raw=true',
            alt: 'peeling walls, broken mirror in abandoned hotel room',
            caption: 'Wrecked',
            subCaption: 'The Inn at Afton, April 2024',
            category: 'Abandoned Hotel',
            id: '46',
            location: 'Afton Mountain, VA',
            featured: true
        }, {
            src: 'https://github.com/bellamoss77/PHT101-Final-Project-Gallery/blob/main/images/abandoned-hotel_54.png?raw=true',
            alt: 'grafitti around light switch',
            caption: 'Creative Destruction',
            subCaption: 'The Inn at Afton, April 2024',
            category: 'Abandoned Hotel',
            id: '47',
            location: 'Afton Mountain, VA',
            featured: true
        }, {
            src: 'https://github.com/bellamoss77/PHT101-Final-Project-Gallery/blob/main/images/abandoned-hotel_55.png?raw=true',
            alt: 'hole in roof of abandoned hotel room',
            caption: 'Roof Rot',
            subCaption: 'The Inn at Afton, April 2024',
            category: 'Abandoned Hotel',
            id: '48',
            location: 'Afton Mountain, VA',
            featured: false
        }, {
            src: 'https://github.com/bellamoss77/PHT101-Final-Project-Gallery/blob/main/images/abandoned-hotel_57.png?raw=true',
            alt: 'patio door at abandoned holiday inn',
            caption: '"Here Be Dragons"',
            subCaption: 'Old  Holiday Inn, Afton, VA, April 2024',
            category: 'Abandoned Hotel',
            id: '49',
            location: 'Afton Mountain, VA',
            featured: false
        }, {
            src: 'https://github.com/bellamoss77/PHT101-Final-Project-Gallery/blob/main/images/abandoned-hotel_59.png?raw=true', 
            alt: 'side facade of abandoned holiday inn',
            caption: 'Sentinal',
            subCaption: 'Old Holiday Inn, Afton, VA, April 2024',
            category: 'Abandoned Hotel',
            id: '50',
            location: 'Afton Mountain, VA',
            featured: false
        }, {
            src: 'https://github.com/bellamoss77/PHT101-Final-Project-Gallery/blob/main/images/abandoned-hotel_60.png?raw=true',
            alt: 'close up of graffiti on side of abandoned holiday inn',
            caption: 'Graffiti Sunset',
            subCaption: 'Old Holiday Inn, Afton, VA, April 2024',
            category: 'Abandoned Hotel',
            id: '51',
            location: 'Afton Mountain, VA',
            featured: true
        }, {
            src: 'https://github.com/bellamoss77/PHT101-Final-Project-Gallery/blob/main/images/abandoned-hotel_61.png?raw=true',
            alt: 'black and white side of old holiday inn',
            caption: '"Keep Out"',
            subCaption: 'Old Holiday Inn, Afton, VA, April 2024',
            category: 'Abandoned Hotel',
            id: '52',
            location: 'Afton Mountain, VA',
            featured: false
        }, {
            src: 'https://github.com/bellamoss77/PHT101-Final-Project-Gallery/blob/main/images/abandoned-hotel_62.png?raw=true', 
            alt: 'graffiti covered old holiday inn',
            caption: 'Blemish Amidst Beauty',
            subCaption: 'Old Holiday Inn, Afton, VA, April 2024',
            category: 'Abandoned Hotel',
            id: '53',
            location: 'Afton Mountain, VA',
            featured: false
        }, {
            src: 'https://github.com/bellamoss77/PHT101-Final-Project-Gallery/blob/main/images/abandoned-hotel_63.png?raw=true',
            alt: 'entrance to abandoned holiday inn',
            caption: 'Empty Entrance',
            subCaption: 'Old Holiday Inn, Afton, VA, April 2024',
            category: 'Abandoned Hotel',
            id: '54',
            location: 'Afton Mountain, VA',
            featured: true
        }, {
            src: 'https://github.com/bellamoss77/PHT101-Final-Project-Gallery/blob/main/images/abandoned-hotel_65.png?raw=true',
            alt: 'ivy hangs from ceiling and frames broken window of abandoned hotel',
            caption: 'Ivy Curtains',
            subCaption: 'The Inn at Afton, April 2024',
            category: 'Abandoned Hotel',
            id: '55',
            location: 'Afton Mountain, VA',
            featured: false
        }, {
            src: 'https://github.com/bellamoss77/PHT101-Final-Project-Gallery/blob/main/images/abandoned-hotel_66.png?raw=true',
            alt: 'white flowers in front of abandoned hotel',
            caption: 'Rebirth',
            subCaption: 'The Inn at Afton, April 2024',
            category: 'Abandoned Hotel',
            id: '56',
            location: 'Afton Mountain, VA',
            featured: true
        }, {
            src: 'https://github.com/bellamoss77/PHT101-Final-Project-Gallery/blob/main/images/abandoned-hotel_67.png?raw=true',
            alt: 'foliage covers facade of abandoned hotel',
            caption: 'Swallowed',
            subCaption: 'The Inn at Afton, April 2024',
            category: 'Abandoned Hotel',
            id: '57',
            location: 'Afton Mountain, VA',
            featured: false
        }, {
            src: 'https://github.com/bellamoss77/PHT101-Final-Project-Gallery/blob/main/images/abandoned-hotel_68.png?raw=true',
            alt: 'cushions in exposed abandoned hotel room',
            caption: 'Crumbled and Cushions',
            subCaption: 'The Inn at Afton, April 2024',
            category: 'Abandoned Hotel',
            id: '58',
            location: 'Afton Mountain, VA',
            featured: false
        }, {
            src: 'https://github.com/bellamoss77/PHT101-Final-Project-Gallery/blob/main/images/abandoned-hotel_69.png?raw=true',
            alt: 'ivy grows into open windows of abandoned hotel',
            caption: 'Welcome In',
            subCaption: 'The Inn at Afton, April 2024',
            category: 'Abandoned Hotel',
            id: '59',
            location: 'Afton Mountain, VA',
            featured: false
        }, {
            src: 'https://github.com/bellamoss77/PHT101-Final-Project-Gallery/blob/main/images/abandoned-hotel_7.png?raw=true',
            alt: 'overgrown path to entrance of abandoned hotel',
            caption: 'Obstructed',
            subCaption: 'The Inn at Afton, April 2024',
            category: 'Abandoned Hotel',
            id: '60',
            location: 'Afton Mountain, VA',
            featured: false
        }, {
            src: 'https://github.com/bellamoss77/PHT101-Final-Project-Gallery/blob/main/images/abandoned-hotel_71.png?raw=true',
            alt: 'graffiti and vines cover entrance to abandoned hotel',
            caption: 'Decay and Growth',
            subCaption: 'The Inn at Afton, April 2024',
            category: 'Abandoned Hotel',
            id: '61',
            location: 'Afton Mountain, VA',
            featured: false
        }, {
            src: 'https://github.com/bellamoss77/PHT101-Final-Project-Gallery/blob/main/images/abandoned-hotel_72.png?raw=true',
            alt: 'graffiti covers abandoned hotel room interior and exterior',
            caption: 'Wide Open',
            subCaption: 'The Inn at Afton, April 2024', 
            category: 'Abandoned Hotel',
            id: '62',
            location: 'Afton Mountain, VA',
            featured: false
        }, {
            src: 'https://github.com/bellamoss77/PHT101-Final-Project-Gallery/blob/main/images/abandoned-hotel_73.png?raw=true',
            alt: 'graffiti and piled up furniture',
            caption: '"Stay Outta VA"',
            subCaption: 'The Inn at Afton, April 2024',
            category: 'Abandoned Hotel',
            id: '63',
            location: 'Afton Mountain, VA',
            featured: false
        }, {
            src: 'https://github.com/bellamoss77/PHT101-Final-Project-Gallery/blob/main/images/abandoned-hotel_74.png?raw=true',
            alt: 'green graffiti on abandoned hotel next to white flowering tree',
            caption: 'Green Graffiti',
            subCaption: 'The Inn at Afton, April 2024',
            category: 'Abandoned Hotel',
            id: '64',
            location: 'Afton Mountain, VA',
            featured: false
        }, {
            src: 'https://github.com/bellamoss77/PHT101-Final-Project-Gallery/blob/main/images/abandoned-hotel_75.png?raw=true',
            alt: 'vines overtake abandoned hotel with abandoned holiday inn in background',
            caption: 'Reclamation 4',
            subCaption: 'The Inn at Afton, April 2024',
            category: 'Abandoned Hotel',
            id: '65',
            location: 'Afton Mountain, VA',
            featured: false
        }, {
            src: 'https://github.com/bellamoss77/PHT101-Final-Project-Gallery/blob/main/images/abandoned-hotel_76.png?raw=true',
            alt: 'black and white front view of abandoned hotel',
            caption: 'Broken',
            subCaption: 'The Inn at Afton, April 2024',
            category: 'Abandoned Hotel',
            id: '66',
            location: 'Afton Mountain, VA',
            featured: false
        }, {
            src: 'https://github.com/bellamoss77/PHT101-Final-Project-Gallery/blob/main/images/abandoned-hotel_77.png?raw=true',
            alt: 'vintage colors front view of abandoned hotel',
            caption: 'Vintage Broken',
            subCaption: 'The Inn at Afton, April 2024',
            category: 'Abandoned Hotel',
            id: '67',
            location: 'Afton Mountain, VA',
            featured: false
        }, {
            src: 'https://github.com/bellamoss77/PHT101-Final-Project-Gallery/blob/main/images/abandoned-hotel_78.png?raw=true',
            alt: 'back view of old holiday inn',
            caption: 'Decay',
            subCaption: 'Old Holiday Inn, Afton, VA, April 2024',
            category: 'Abandoned Hotel',
            id: '68',
            location: 'Afton Mountain, VA',
            featured: false
        }, {
            src: 'https://github.com/bellamoss77/PHT101-Final-Project-Gallery/blob/main/images/abandoned-hotel_79.png?raw=true',
            alt: 'daffodils grows where tulips used to be',
            caption: 'Daffodil Decoration',
            subCaption: 'Old Holiday Inn, Afton, VA, April 2024',
            category: 'Abandoned Hotel',
            id: '69',
            location: 'Afton Mountain, VA',
            featured: false
        }, {
            src: 'https://github.com/bellamoss77/PHT101-Final-Project-Gallery/blob/main/images/abandoned-hotel_8.png?raw=true',
            alt: 'single E on abandoned hotel sign',
            caption: 'Incomplete E',
            subCaption: 'The Inn at Afton, April 2024',
            category: 'Abandoned Hotel',
            id: '70',
            location: 'Afton Mountain, VA',
            featured: false
        }, {
            src: 'https://github.com/bellamoss77/PHT101-Final-Project-Gallery/blob/main/images/abandoned-hotel_80.png?raw=true',
            alt: 'room doors to abandoned holiday inn rooms',
            caption: '"No Smoking"',
            subCaption: 'Old Holiday Inn, Afton, VA, April 2024',
            category: 'Abandoned Hotel',
            id: '71',
            location: 'Afton Mountain, VA',
            featured: false
        }, {
            src: 'https://github.com/bellamoss77/PHT101-Final-Project-Gallery/blob/main/images/abandoned-hotel_81.png?raw=true',
            alt: 'intact abandoned hotel room',
            caption: 'Time Capsule',
            subCaption: 'Old Holiday Inn, Afton, VA, April 2024',
            category: 'Abandoned Hotel',
            id: '72',
            location: 'Afton Mountain, VA',
            featured: true
        }, {
            src: 'https://github.com/bellamoss77/PHT101-Final-Project-Gallery/blob/main/images/abandoned-hotel_82.png?raw=true', 
            alt: 'Lobby entrance to abandoned holiday inn',
            caption: 'Time Gone By',
            subCaption: 'Old Holiday Inn, Afton, VA, April 2024', 
            category: 'Abandoned Hotel',
            id: '73',
            location: 'Afton Mountain, VA',
            featured: false
        }, {
            src: 'https://github.com/bellamoss77/PHT101-Final-Project-Gallery/blob/main/images/abandoned-hotel_83.png?raw=true',
            alt: 'Lobby entrance driveway old holiday inn',
            caption: 'Majestic Ruin',
            subCaption: 'Old Holiday Inn, Afton, VA, April 2024',
            category: 'Abandoned Hotel',
            id: '74',
            location: 'Afton Mountain, VA',
            featured: false
        }, {
            src: 'https://github.com/bellamoss77/PHT101-Final-Project-Gallery/blob/main/images/abandoned-hotel_84.png?raw=true',
            alt: 'round wooden cover',
            caption: 'Wooden Logo',
            subCaption: 'Old Holiday Inn, Afton, VA, April 2024',
            category: 'Abandoned Hotel',
            id: '75',
            location: 'Afton Mountain, VA',
            featured: false
        }, {
            src: 'https://github.com/bellamoss77/PHT101-Final-Project-Gallery/blob/main/images/abandoned-hotel_85.png?raw=true',
            alt: 'old millstone',
            caption: 'Millstone Memories',
            subCaption: 'Old Holiday Inn, Afton, VA, April 2024',
            category: 'Abandoned Hotel',
            id: '76',
            location: 'Afton Mountain, VA',
            featured: false
        }, {
            src: 'https://github.com/bellamoss77/PHT101-Final-Project-Gallery/blob/main/images/abandoned-hotel_86.png?raw=true',
            alt: 'side of abandoned holiday inn',
            caption: 'Open Abyss',
            subCaption: 'Old Holiday Inn, Afton, VA, April 2024',
            category: 'Abandoned Hotel',
            id: '77',
            location: 'Afton Mountain, VA',
            featured: true
        }, {
            src: 'https://github.com/bellamoss77/PHT101-Final-Project-Gallery/blob/main/images/abandoned-hotel_87.png?raw=true',
            alt: 'patio of abandoned holiday inn',
            caption: 'Eerie Echoes',
            subCaption: 'Old Holiday Inn, Afton, VA, April 2024',
            category: 'Abandoned Hotel',
            id: '78',
            location: 'Afton Mountain, VA',
            featured: true
        }, {
            src: 'https://github.com/bellamoss77/PHT101-Final-Project-Gallery/blob/main/images/abandoned-hotel_88.png?raw=true',
            alt: 'side view of old holiday inn',
            caption: 'Abandoned in the Air',
            subCaption: 'Old Holiday Inn, Afton, VA, April 2024',
            category: 'Abandoned Hotel',
            id: '79',
            location: 'Afton Mountain, VA',
            featured: false
        }, {
            src: 'https://github.com/bellamoss77/PHT101-Final-Project-Gallery/blob/main/images/abandoned-hotel_89.png?raw=true',
            alt: 'ivy crows over abandoned holiday inn',
            caption: 'Reclamation 5',
            subCaption: 'Old Holiday Inn, Afton, VA, April 2024',
            category: 'Abandoned Hotel',
            id: '80',
            location: 'Afton Mountain, VA',
            featured: false
        }, {
            src: 'https://github.com/bellamoss77/PHT101-Final-Project-Gallery/blob/main/images/abandoned-hotel_9.png?raw=true',
            alt: 'ivy covers abandoned hotel',
            caption: 'Resistance to Ruin',
            subCaption: 'The Inn at Afton, April 2024', 
            category: 'Abandoned Hotel',
            id: '81',
            location: 'Afton Mountain, VA',
            featured: false
        }, {
            src: 'https://github.com/bellamoss77/PHT101-Final-Project-Gallery/blob/main/images/abandoned-hotel_90.png?raw=true',
            alt: 'pool and patio of abandoned holiday inn',
            caption: 'Recreation in Ruin',
            subCaption: 'Old Holiday Inn, Afton, VA, April 2024',
            category: 'Abandoned Hotel',
            id: '82',
            location: 'Afton Mountain, VA',
            featured: false
        }, {
            src: 'https://github.com/bellamoss77/PHT101-Final-Project-Gallery/blob/main/images/abandoned-hotel_91.png?raw=true',
            alt: 'graffiti on stone wall of old holiday inn',
            caption: 'Colored Cry',
            subCaption: 'Old Holiday Inn, Afton, VA, April 2024',
            category: 'Abandoned Hotel',
            id: '83',
            location: 'Afton Mountain, VA',
            featured: false
        }, {
            src: 'https://github.com/bellamoss77/PHT101-Final-Project-Gallery/blob/main/images/abandoned-hotel_92.png?raw=true',
            alt: 'pool and patio of abandoned holiday inn',
            caption: 'Recreation in Ruin 2',
            subCaption: 'Old Holiday Inn, Afton, VA, April 2024',
            category: 'Abandoned Hotel',
            id: '84',
            location: 'Afton Mountain, VA',
            featured: false
        }, {
            src: 'https://github.com/bellamoss77/PHT101-Final-Project-Gallery/blob/main/images/old-abandoned_1.png?raw=true',
            alt: 'old cannon in palmyra',
            caption: 'At Cannon Point',
            subCaption: 'Historic District, Palmyra, VA, April 2024',
            category: 'Historical Structures',
            id: '85',
            location: 'Palmyra, VA',
            featured: false
        }, {
            src: 'https://github.com/bellamoss77/PHT101-Final-Project-Gallery/blob/main/images/old-abandoned_10.png?raw=true',
            alt: 'childhood toy in wrecked home',
            caption: 'Childhood Memories',
            subCaption: 'Abandoned Family Home, Roland Road, Abemarle, VA, April 2024',
            category: 'Abandoned Family Home',
            id: '86',
            location: 'Albemarle County, VA',
            featured: false
        }, {
            src: 'https://github.com/bellamoss77/PHT101-Final-Project-Gallery/blob/main/images/old-abandoned_11.png?raw=true',
            alt: 'busted stairs to collapsed house',
            caption: 'Wrecked Abode',
            subCaption: 'Abandoned Family Home, Roland Road, Abemarle, VA, April 2024',
            category: 'Abandoned Family Home',
            id: '87',
            location: 'Albemarle County, VA',
            featured: false
        }, {
            src: 'https://github.com/bellamoss77/PHT101-Final-Project-Gallery/blob/main/images/old-abandoned_13.png?raw=true',
            alt: 'ivy through window of abandoned stone structure',
            caption: 'Ivy Curtains 2',
            subCaption: 'Decrepit Stone Structure Near Riverbank, Palmyra, VA, April 2024',
            category: 'Crumbling Stuctures',
            id: '88',
            location: 'Palmyra, VA',
            featured: false
        }, {
            src: 'https://github.com/bellamoss77/PHT101-Final-Project-Gallery/blob/main/images/old-abandoned_14.png?raw=true',
            alt: 'decaying stone structure',
            caption: 'Reclamation 6',
            subCaption: 'Decrepit Stone Structure Near Riverbank, Palmyra, VA, April 2024',
            category: 'Crumbling Structures',
            id: '89',
            location: 'Palmyra, VA',
            featured: false
        }, {
            src: 'https://github.com/bellamoss77/PHT101-Final-Project-Gallery/blob/main/images/old-abandoned_16.png?raw=true',
            alt: 'old bank building palmyra',
            caption: 'Bank On This',
            subCaption: 'Old Bank Building, Historic District Palmyra, VA, April 2024',
            category: 'Historical Structures',
            id: '90',
            location: 'Palmyra, VA',
            featured: false
        }, {
            src: 'https://github.com/bellamoss77/PHT101-Final-Project-Gallery/blob/main/images/old-abandoned_17.png?raw=true',
            alt: 'Abandoned Family Home',
            caption: 'Abandoned Family Home',
            subCaption: 'Historic District, Palmyra, VA, April 2024',
            category: 'Abandoned Family Home',
            id: '91',
            location: 'Palmyra, VA',
            featured: false
        }, {
            src: 'https://github.com/bellamoss77/PHT101-Final-Project-Gallery/blob/main/images/old-abandoned_18.png?raw=true',
            alt: 'old storage shed/storm cellar',
            caption: 'Wrapped',
            subCaption: 'Farm shelter/storage shed, Historic Palmyra, VA, April 2024',
            category: 'Crumbling Structures',
            id: '92',
            location: 'Palmyra, VA',
            featured: false
        }, {
            src: 'https://github.com/bellamoss77/PHT101-Final-Project-Gallery/blob/main/images/old-abandoned_19.png?raw=true',
            alt: 'old storage shed/storm cellar',
            caption: 'Nestled',
            subCaption: 'Farm shelter/storage shed, Historic Palmyra, VA, April 2024',
            category: 'Crumbling Structures',
            id: '93',
            location: 'Palmyra, VA',
            featured: false
        }, {
            src: 'https://github.com/bellamoss77/PHT101-Final-Project-Gallery/blob/main/images/old-abandoned_21.png?raw=true',
            alt: 'ivy grows over wall of abandoned family home',
            caption: 'Greenery Garnish',
            subCaption: 'Abandoned Family Home, Historic Palmyra, VA, April 2024',
            category: 'Abandoned Family Home',
            id: '94',
            location: 'Palmyra, VA',
            featured: false
        }, {
            src: 'https://github.com/bellamoss77/PHT101-Final-Project-Gallery/blob/main/images/old-abandoned_22.png?raw=true',
            alt: 'ivy overtakes porch of abandoned home',
            caption: 'Reclamation 7',
            subCaption: 'Abandoned Family Home, Historic Palmyra, VA, April 2024',
            category: 'Abandoned Family Home',
            id: '95',
            location: 'Palmyra, VA',
            featured: false
        }, {
            src: 'https://github.com/bellamoss77/PHT101-Final-Project-Gallery/blob/main/images/old-abandoned_23.png?raw=true',
            alt: 'overgrown steps to abandoned family home',
            caption: 'Swallowing Stairs',
            subCaption: 'Abandoned Family Home, Historic Palmyra, VA, April 2024',
            category: 'Abandoned Family Home',
            id: '96',
            location: 'Palmyra, VA',
            featured: false
        }, {
            src: 'https://github.com/bellamoss77/PHT101-Final-Project-Gallery/blob/main/images/old-abandoned_3.png?raw=true',
            alt: 'burlap over rafters',
            caption: 'Burlap Draped Rafters',
            subCaption: 'Old Slave Quarters, Buck Island, VA, April 2024',
            category: 'Crumbling Structures',
            id: '97',
            location: 'Albemarle County, VA',
            featured: false
        }, {
            src: 'https://github.com/bellamoss77/PHT101-Final-Project-Gallery/blob/main/images/old-abandoned_4.png?raw=true',
            alt: 'collapsing slave quarters',
            caption: 'Reclamation 8', 
            subCaption: 'Old Slave Quarters, Buck Island, VA, April 2024',
            category: 'Crumbling Structures',
            id: '98',
            location: 'Albemarle County, VA',
            featured: false
        }, {
            src: 'https://github.com/bellamoss77/PHT101-Final-Project-Gallery/blob/main/images/old-abandoned_5.png?raw=true',
            alt: 'old slave quarters from a distance',
            caption: 'Devoured',
            subCaption: 'Old Slave Quarters, Buck Island, VA, April 2024',
            category: 'Crumbling Structures',
            id: '99',
            location: 'Albemarle County, VA',
            featured: false
        }, {
            src: 'https://github.com/bellamoss77/PHT101-Final-Project-Gallery/blob/main/images/old-abandoned_6.png?raw=true',
            alt: 'collapsed family home',
            caption: 'Collapse',
            subCaption: 'Abandoned Family Home, Roland Road, Abemarle, VA, April 2024',
            category: 'Abandoned Family Home',
            id: '100',
            location: 'Albemarle County, VA',
            featured: false
        }, {
            src: 'https://github.com/bellamoss77/PHT101-Final-Project-Gallery/blob/main/images/old-abandoned_7.png?raw=true',
            alt: 'collapsed family home',
            caption: 'Wreckage',
            subCaption: 'Abandoned Family Home, Roland Road, Abemarle, VA, April 2024',
            category: 'Abandoned Family Home',
            id: '101',
            location: 'Albemarle County, VA',
            featured: false
        }, {
            src: 'https://github.com/bellamoss77/PHT101-Final-Project-Gallery/blob/main/images/old-abandoned_8.png?raw=true',
            alt: 'roof of abandoned family home',
            caption: 'Sliding Shingles',
            subCaption: 'Abandoned Family Home, Roland Road, Abemarle, VA, April 2024',
            category: 'Abandoned Family Home',
            id: '102',
            location: 'Albemarle County, VA',
            featured: false
        }, {
            src: 'https://github.com/bellamoss77/PHT101-Final-Project-Gallery/blob/main/images/old-abandoned_9.png?raw=true',
            alt: 'abandoned family home',
            caption: 'Broken Dreams',
            subCaption: 'Abandoned Family Home, Roland Road, Abemarle, VA, April 2024',
            category: 'Abandoned Family Home',
            id: '103',
            location: 'Albemarle County, VA',
            featured: false
        }
        ];
    
    const gallery = document.getElementById('imageGalleryContainer');
    const likedDropdownList = document.getElementById('likedDropdownList');
    let currentImageIndex = 0;

    if (!gallery || !likedDropdownList) {
        console.error('Gallery or liked-list container not found in the DOM!');
        return;
    } else {
        console.log('Gallery and Liked List initialized correctly.');
    }

    document.addEventListener('keydown', (e) => {
        const lightboxContainer = document.getElementById('lightboxContainer');
        if (lightboxContainer.style.display === 'block') {
            if (e.key === 'Escape') {
                closeLightbox();
            } else if (e.key === 'ArrowLeft') {
                currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
                openLightbox(currentImageIndex);
            } else if (e.key === 'ArrowRight') {
                currentImageIndex = (currentImageIndex + 1) % images.length;
                openLightbox(currentImageIndex);
            };
        }
        
    })

    const savedImgsBtn = document.getElementById('savedImgs');
    const likedContainer = document.getElementById('savedContainer');
    const itemsList = likedDropdownList.querySelector('ol');
    
    function updatedLikedImagesDisplay() {
        console.log('Updating liked images display.');
        if (!itemsList) {
            console.error('Items list not found!');
        }
        itemsList.innerHTML = '';

        const likedImages = images.filter(img => img.liked)
        console.log(`Liked images count: ${likedImages.length}`);
        likedImages.forEach(image => {
            const listItem = document.createElement('li');
            listItem.textContent = `${image.id} - ${image.caption}`;
            itemsList.appendChild(listItem);
        });

        
        if (likedImages.length > 0) {
            likedContainer.style.display = 'block';
            likedContainer.style.visibility = 'visible'
            gsap.set(itemsList, { autoAlpha: 0 });
            gsap.set(arrowSaved, { rotation: 0 });
        } else {
            likedContainer.style.display = 'none';
        }
    }
    savedImgsBtn.addEventListener('click', () => {
        const isVisible = likedDropdownList.classList.contains('visible');
        console.log(`Dropdown visible: ${isVisible}`);
    
        if (isVisible) {
            console.log('Hiding dropdown list.');
            gsap.to(likedDropdownList, { autoAlpha: 0, duration: 0.3, ease: 'power2.inOut', onComplete: () => {
                likedDropdownList.style.visibility = 'hidden';
                likedDropdownList.classList.remove('visible');
                itemsList.style.opacity = 0;
                itemsList.style.visibility = 'hidden'
            } });
            gsap.to(arrowSaved, { duration: 0.3, rotation: 0, ease: 'power2.inOut' });
        } else {
            console.log('Showing dropdown list.');
            likedDropdownList.style.visibility = 'visible';
            likedDropdownList.style.display = 'block';
            likedDropdownList.classList.add('visible');
            gsap.to(likedDropdownList, { autoAlpha: 1, opacity: 1, duration: 0.3, ease: 'power2.inOut', onStart: () => {
                itemsList.style.opacity = '1';
                itemsList.style.visibility = 'visible';
                itemsList.style.display = 'block'
            } })
            gsap.to(arrowSaved, { duration: 0.3, rotation: 180, ease: 'power2.inOut' })
        }
        updatedLikedImagesDisplay()
    });
    

    function updateLikeStatus(imageIndex) {
        console.log(`Toggling like status for image index: ${imageIndex}`);
        const image = images[imageIndex];
        image.liked = !image.liked;

        document.querySelectorAll('.gallery-image').forEach((imgElement, idx) => {
            if (idx === imageIndex) {
                const likeBtn = imgElement.parentNode.querySelector('.like-btn');
                setSvgStyle(likeBtn.querySelector('svg'), image.liked ? 'active' : 'inactive');
            }
        });
        updatedLikedImagesDisplay();

        const lightboxImg = document.querySelector('.lightbox-img');
        if (lightboxImg && lightboxImg.src === image.src) {
            const likeBtn = document.querySelector('lightbox-content, .like-btn');
            setSvgStyle(likeBtn.querySelector('svg'), image.liked ? 'active' : 'inactive');
        }
        updatedLikedImagesDisplay
    }
    
    const filterContainer = document.getElementById('filterButtonContainer');
    const openFiltersBtn = document.getElementById('filterToggle');
    const filterOptions = document.querySelector('.filter-options');
    const filterButtons = document.querySelectorAll('.filter-option');


    openFiltersBtn.addEventListener('click', function() {
        filterOptions.style.display = filterOptions.style.display === 'none' ? 'block' : 'none';
    });

    gsap.to(filterContainer, {
        scrollTrigger: {
            trigger: '#imageGalleryContainer',
            start: 'top center',
            toggleActions: 'play reverse play reverse'
        },
        right: 10,
        duration: 1,
        ease: 'elastic'
    });

    ScrollTrigger.create({
        trigger: '#imageGalleryContainer',
        start: 'top center',
        end: 'bottom bottom',
        toggleClass: {targets: filterContainer, className: 'fixed'},
        markers: false
    })

    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            const filterType = this.getAttribute('data-filter');
            const filterValue = this.getAttribute('data-value');
            applyFilter(filterType, filterValue);
        });
    });

    function applyFilter(filterType, filterValue) {
        let filteredImages = [];
        if (filterType === 'location') {
            filteredImages = images.filter(img => img.location === filterValue);
        } else if (filterType === 'featured' && filterValue === 'true') {
            filteredImages = images.filter(img => img.featured);
        } else if (filterType === 'category') {
            filteredImages = images.filter(img => img.category === filterValue)
        }
        console.log(`Found ${filteredImages.length} images`)
        displayImages(filteredImages);
        updateActiveFilterDisplay(filterType, filterValue);
    }

    function updateActiveFilterDisplay(filterType, filterValue) {
        const activeFilterDiv = document.getElementById('activeFilter');
        activeFilterDiv.textContent = `${filterType}: ${filterValue}`;
        activeFilterDiv.style.display = 'block';
    }

    function displayImages(imagesToDisplay) {
        console.log(`Displaying ${imagesToDisplay.length} images`);
        const gallery = document.getElementById('imageGalleryContainer');
        gallery.innerHTML = '';
        imagesToDisplay.forEach((image, index) => {
            const imgContent = document.createElement('div');
            imgContent.classList.add('img-content');

            const imgElement = document.createElement('img');
            imgElement.classList.add('filtered-imgs');
            imgElement.src = image.src;
            imgElement.alt = image.alt;
            imgElement.classList.add('gallery-image');

            imgContent.appendChild(imgElement);
            gallery.appendChild(imgElement)
            console.log(`Added image ${image.id} to gallery`);
        });
        bindLightboxEvents();
    }

    images.forEach((image, index) => {
        const imgContent = document.createElement('div');
        imgContent.classList.add('img-content');

        const imgElement = document.createElement('img');
        imgElement.src = image.src;
        imgElement.alt = image.alt;
        imgElement.classList.add('gallery-image');
        imgElement.addEventListener('click', () => openLightbox(index));
        imgContent.appendChild(imgElement);

        const likeBtn = document.createElement('button');
        likeBtn.innerHTML = `<svg id="MERGED_ICON" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 46.26 41" width="2rem" height="2rem">
        <defs>
            <style>
            .cls-1 {
                stroke-width: 0px;
            }
        
            .cls-1, .cls-2 {
                fill: rgba(255, 255, 255, 0.5);
            }
        
            .cls-2, .cls-3, .cls-4 {
                stroke-miterlimit: 10;
            }
        
            .cls-2, .cls-4 {
                stroke: rgba(255, 255, 255, 0.5);
                stroke-width: 2px;
            }
        
            .cls-3 {
                stroke: rgba(255, 255, 255, 0.5);
                stroke-width: 4px;
            }
        
            .cls-3, .cls-4 {
                fill: none;
            }
            </style>
        </defs>
        <path id="IMAGE" class="cls-4" d="M23.43,11.19c10.17,0,9.49-1.75,9.49,9.1s1.13,9.68-9.44,9.68-9.54,1.43-9.54-11.15c0-8.8,1.12-7.63,9.49-7.63Z"/>
        <path id="IMG-MOUNTAINS" class="cls-2" d="M14.91,26.25c3.91-5.28,3.91-6.85,6.07-2.74,3.13-3.52,3.13-7.41,7.04-2.33s4.78,6.51,4.78,6.51c0,0-.72,1.15-9.37,1.3s-8.51-2.74-8.51-2.74Z"/>
        <g id="IMG-SUN">
            <path class="cls-1" d="M19.41,15.1c2.35,0,3.33,3.64,0,3.64s-2.35-3.64,0-3.64Z"/>
        </g>
        <path id="HEART" class="cls-3" d="M22.76,8.25C12.57-3.29,2,3.36,2,14.32c0,9.98,20.76,24.26,20.76,24.26,0,0,21.5-14.67,21.5-25.24S30.96-3.29,22.76,8.25Z"/>
        </svg>`;
        likeBtn.classList.add('like-btn');

        const svgElement = likeBtn.querySelector('svg');
        setSvgStyle(svgElement, image.liked ? 'active' : 'inactive');

        likeBtn.addEventListener('click', (event) => {
            event.stopPropagation();
            updateLikeStatus(index);
        });

        likeBtn.addEventListener('mouseenter', () => setSvgStyle(svgElement, 'hover'));
        likeBtn.addEventListener('mouseleave', () => setSvgStyle(svgElement, image.liked ? 'active' : 'inactive'));

        imgContent.appendChild(likeBtn);
        gallery.appendChild(imgContent);
    });

    function setSvgStyle(svg, state) {
        const cls1 = svg.querySelector('.cls-1');
        const cls2 = svg.querySelector('.cls-2');
        const cls3 = svg.querySelector('.cls-3');
        const cls4 = svg.querySelector('.cls-4');

        switch (state) {
            case 'active':
                cls2.style.fill = '#1d3050';
                cls4.style.stroke = '#1d3050';
                cls3.style.stroke = '#ed1c24';
                svg.style.opacity = '1';
                break;
            case 'hover':
                cls1.style.fill = 'white';
                cls1.style.stroke = 'white';
                cls2.style.fill = 'white';
                cls2.style.stroke = 'white';
                cls3.style.stroke = 'white';
                cls4.style.stroke = 'white'
                svg.style.opacity = '1';
                break;
            case 'inactive':
                cls1.style.fill = 'rgba(255, 255, 255, 0.5)';
                cls1.style.stroke = 'rgba(255, 255, 255, 0.5)';
                cls2.style.fill = 'rgba(255, 255, 255, 0.5)';
                cls2.style.stroke = 'rgba(255, 255, 255, 0.5)';
                cls3.style.stroke = 'rgba(255, 255, 255, 0.5)';
                cls4.style.stroke = 'rgba(255, 255, 255, 0.5)';                
                break;
        }
    }

    function openLightbox(index) {
        currentImageIndex = index;
        const image = filteredImages.length > 0 ? filteredImages[index] : images[index];
        const lightboxContainer = document.getElementById('lightboxContainer');
        if (!lightboxContainer) {
            console.error('Lightbox container not found in DOM!');
            return;
        }

        lightboxContainer.innerHTML = '';
        lightboxContainer.style.display = 'block';

        const lightboxContent = document.createElement('div');
        lightboxContent.className = 'lightbox-content';

        let touchStartX = 0;
        let touchEndX = 0;

        function handleTouchMove(e) {
            touchEndX = e.changedTouches[0].clientX;
        };

        function handleTouchEnd() {
            if (touchEndX < touchStartX - 40) {
                nextImage();
            } else if (touchEndX > touchStartX + 40) {
                previousImage();
            }
        }
        

        const lightboxImg = document.createElement('img');
        lightboxImg.className = 'lightbox-img';
        lightboxImg.src = images[index].src;
        lightboxImg.alt = images[index].alt;
        lightboxContent.appendChild(lightboxImg);

        const captionContainer = document.createElement('div');
        captionContainer.className = 'caption-container';

        const lightboxCaption = document.createElement('h3');
        lightboxCaption.className = 'lightbox-caption';
        lightboxCaption.textContent = images[index].caption;
        captionContainer.appendChild(lightboxCaption);

        const lightboxSubCaption = document.createElement('p');
        lightboxSubCaption.className = 'lightbox-sub-caption';
        lightboxSubCaption.textContent = images[index].subCaption;
        captionContainer.appendChild(lightboxSubCaption);

        lightboxContent.appendChild(captionContainer);
        lightboxContainer.appendChild(lightboxContent);

        const prevBtn = document.createElement('button');
        prevBtn.classList.add('prev');
        prevBtn.innerHTML = `<i class="fa-solid fa-angles-left"></i>`;

        prevBtn.addEventListener('click', () => {
            currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
            openLightbox(currentImageIndex);
        })

        const nextBtn = document.createElement('button');
        nextBtn.classList.add('next');
        nextBtn.innerHTML = `<i class="fa-solid fa-angles-right"></i>`;

        nextBtn.addEventListener('click', () => {
            currentImageIndex = (currentImageIndex + 1) % images.length;
            openLightbox(currentImageIndex)
        })

        lightboxContent.appendChild(prevBtn);
        lightboxContent.appendChild(nextBtn);

        const likeBtn = document.createElement('button');
        likeBtn.innerHTML = `<svg id="MERGED_ICON" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 46.26 41" width="2rem" height="2rem">
        <defs>
            <style>
            .cls-1 {
                stroke-width: 0px;
            }
        
            .cls-1, .cls-2 {
                fill: rgba(255, 255, 255, 0.5);
            }
        
            .cls-2, .cls-3, .cls-4 {
                stroke-miterlimit: 10;
            }
        
            .cls-2, .cls-4 {
                stroke: rgba(255, 255, 255, 0.5);
                stroke-width: 2px;
            }
        
            .cls-3 {
                stroke: rgba(255, 255, 255, 0.5);
                stroke-width: 4px;
            }
        
            .cls-3, .cls-4 {
                fill: none;
            }
            </style>
        </defs>
        <path id="IMAGE" class="cls-4" d="M23.43,11.19c10.17,0,9.49-1.75,9.49,9.1s1.13,9.68-9.44,9.68-9.54,1.43-9.54-11.15c0-8.8,1.12-7.63,9.49-7.63Z"/>
        <path id="IMG-MOUNTAINS" class="cls-2" d="M14.91,26.25c3.91-5.28,3.91-6.85,6.07-2.74,3.13-3.52,3.13-7.41,7.04-2.33s4.78,6.51,4.78,6.51c0,0-.72,1.15-9.37,1.3s-8.51-2.74-8.51-2.74Z"/>
        <g id="IMG-SUN">
            <path class="cls-1" d="M19.41,15.1c2.35,0,3.33,3.64,0,3.64s-2.35-3.64,0-3.64Z"/>
        </g>
        <path id="HEART" class="cls-3" d="M22.76,8.25C12.57-3.29,2,3.36,2,14.32c0,9.98,20.76,24.26,20.76,24.26,0,0,21.5-14.67,21.5-25.24S30.96-3.29,22.76,8.25Z"/>
        </svg>`;
        likeBtn.classList.add('lightbox-like-btn');

        const svgElement = likeBtn.querySelector('svg');
        setSvgStyle(svgElement, image.liked ? 'active' : 'inactive');

        likeBtn.addEventListener('click', (event) => {
            event.stopPropagation();
            updateLikeStatus(currentImageIndex);
        });

        likeBtn.addEventListener('mouseenter', () => setSvgStyle(svgElement, 'hover'));
        likeBtn.addEventListener('mouseleave', () => setSvgStyle(svgElement, image.liked ? 'active' : 'inactive'));

        lightboxContent.appendChild(likeBtn);
        

        const closeBtn = document.createElement('button');
        closeBtn.innerHTML = `<i class="fa-solid fa-xmark"></i>`;
        closeBtn.className = 'lightbox-close';
        closeBtn.onclick = () => {
            lightboxContainer.style.display = 'none';
        };
        
        lightboxContent.appendChild(closeBtn);
    }

    function bindLightboxEvents() {
        const galleryImages = document.querySelectorAll('.gallery-image');
        galleryImages.forEach((img, index) => {
            img.removeEventListener('click', handleImageClick);
            img.addEventListener('click', () => handleImageClick(index));
        });
    }

    function handleImageClick(index) {
        openLightbox(index);
    }

    function updateLightboxContent(container, image) {
        container.innerHTML = '';

        
    }

    function closeLightbox() {
        const lightboxContainer = document.getElementById('lightboxContainer');
        if (lightboxContainer && lightboxContainer.style.display === 'block') {
            lightboxContainer.style.display = 'none';
        }
    }

});  