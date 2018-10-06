var pendragon = {
    data : {
        HomelandData : {// KINGDOM : [CULTURE, RELIGION]
            'Anglia' : ['Saxon', 'Wotanic'],
            'Benoic' : ['Pict', 'Christian'],
            'Brittany' : ['Cymric', 'Christian'],
            'Cambenet' : ['Cymric', 'Christian'],
            'Cameliard' : ['Cymric', 'Christian'],
            'Cornwall' : ['Cymric', 'Pagan'],
            'Exeter in Cornwall' : ['Roman', 'Christian'],
            'Escavalon' : ['Cymric', 'Christian'],
            'Glouster in Escavalon' : ['Roman', 'Christian'],
            'Venta Silurum in Escavalon' : ['Roman', 'Christian'],
            'Escoce' : ['Pict', 'Pagan'],
            'Essex' : ['Saxon', 'Wotanic'],
            'Estregales' : ['Irish', 'Christian'],
            'Ganis' : ['Cymric', 'Christian'],
            'Benwick in Ganis' : ['Cymric', 'Christian'],
            'Garloth' : ['Cymric', 'Pagan'],
            'Gomeret' : ['Cymric', 'Christian'],
            'Gorre' : ['Cymric', 'Pagan'],
            'Ireland' : ['Irish', 'Pagan'],
            'The Isles' : ['Cymric', 'Christian'],
            'Kent' : ['Saxon', 'Wotanic'],
            'Logres' : ['Cymric', 'Christian'],
            'Silchester in Logres' : ['Roman', 'Christian'],
            'Cirencester in Logres' : ['Roman', 'Christian'],
            'Dorchester in Logres' : ['Roman', 'Christian'],
            'London in Logres' : ['Roman', 'Christian'],
            'Lincoln in Logres' : ['Roman', 'Christian'],
            'Leicester in Logres' : ['Roman', 'Christian'],
            'Winchester in Logres' : ['Roman', 'Christian'],
            'Forests of Logres' : ['Cymric', 'Pagan'],
            'Long Isles' : ['Cymric', 'Christian'],
            'Lothian' : ['Cymric', 'Pagan'],
            'Malahaut' : ['Cymric', 'Christian'],
            'York in Malahaut' : ['Roman', 'Christian'],
            'Norgales' : ['Cymric', 'Christian'],
            'Northumberland' : ['Cymric', 'Christian'],
            'Orkneys' : ['Pict', 'Pagan'],
            'Out Isles' : ['Pict', 'Pagan'],
            'Strangor' : ['Cymric', 'Christian'],
            'Sugales' : ['Cymric', 'Pagan'],
            'Sussex' : ['Saxon', 'Wotanic']
        },
        HomelandTable : [['', 'Anglia', 'Anglia', 'Anglia', 'Benoic', 'Benoic', 'Brittany', 'Brittany', 'Brittany', 'Brittany', 'Brittany', 'Brittany', 'Brittany', 'Brittany', 'Brittany', 'Cambenet', 'Cambenet', 'Cambenet', 'Cameliard', 'Cameliard', 'Cameliard'], ['', 'Cornwall', 'Cornwall', 'Cornwall', 'Cornwall', 'Cornwall', 'Cornwall', 'Exeter in Cornwall', 'Escavalon', 'Escavalon', 'Glouster in Escavalon', 'Venta Silurum in Escavalon', 'Escoce', 'Escoce', 'Essex', 'Essex', 'Essex', 'Estregales', 'Estregales', 'Estregales', 'Estregales'], ['', 'Ganis', 'Ganis', 'Ganis', 'Benwick in Ganis', 'Garloth', 'Garloth', 'Garloth', 'Garloth', 'Gomeret', 'Gomeret', 'Gomeret', 'Gomeret', 'Gorre', 'Gorre', 'Gorre', 'Gorre', 'Ireland', 'Ireland', 'Ireland', 'Ireland'], ['', 'The Isles', 'The Isles', 'The Isles', 'Kent', 'Kent', 'Kent', 'Logres', 'Logres', 'Logres', 'Logres', 'Silchester in Logres', 'Cirencester in Logres', 'Dorchester in Logres', 'London in Logres', 'Lincoln in Logres', 'Leicester in Logres', 'Winchester in Logres', 'Forests of Logres', 'Forests of Logres', 'Forests of Logres'], ['', 'Long Isles', 'Long Isles', 'Long Isles', 'Long Isles', 'Lothian', 'Lothian', 'Lothian', 'Lothian', 'Lothian', 'Lothian', 'Malahaut', 'Malahaut', 'Malahaut', 'Malahaut', 'York in Malahaut', 'Norgales', 'Norgales', 'Norgales', 'Norgales', 'Norgales'], ['', 'Northumberland', 'Northumberland', 'Northumberland', 'Orkneys', 'Orkneys', 'Out Isles', 'Out Isles', 'Out Isles', 'Strangor', 'Strangor', 'Strangor', 'Strangor', 'Sugales', 'Sugales', 'Sugales', 'Sugales', 'Sugales', 'Sussex', 'Sussex', 'Sussex']],
        statMods : {
            'Pict' : {
                'SIZ' : -3,
                'DEX' : 3,
                'APP' : -3,
                'CON' : 0,
                'STR' : 0
            },
            'Saxon' : {
                'SIZ' : 3,
                'DEX' : -3,
                'STR' : 3,
                'CON' : 0,
                'APP' : 0
            },
            'Cymric' : {
                'SIZ' : 0,
                'DEX' : 0,
                'STR' : 0,
                'CON' : 3,
                'APP' : 0
            },
            'Irish' : {
                'SIZ' : 0,
                'DEX' : 0,
                'STR' : 0,
                'CON' : 3,
                'APP' : 0
            },
            'Roman' : {
                'SIZ' : 0,
                'DEX' : 3,
                'APP' : 3,
                'CON' : 0,
                'STR' : 0
            }
        },
        Names : {
            'Roman' : ['Albanus', 'Agorix', 'Arcavius', 'Artorius', 'Avitus', 'Belinus', 'Bellator', 'Brittonius', 'Burcanius', 'Calctus', 'Caracturus', 'Cartomandus', 'Catianus', 'Combaromarus', 'Cunobarrus', 'Cunobelinus', 'Carabellus', 'Cervidus', 'Dagwaldus', 'Decmus', 'Donicus', 'Dripennis', 'Dumnorix', 'Duterius', 'Egbutius', 'Elvorix', 'Galerus', 'Gessius', 'Ingenvinus', 'Isatis', 'Ivimarus', 'Luonercus', 'Litumarus', 'Lediccus', 'Lupinus', 'Maccalus', 'Macrinus', 'Magunnus', 'Marullinus', 'Metunus', 'Molacus', 'Nemnogenus', 'Nonius', 'Novellius', 'Olennius', 'Pertacus', 'Primanus', 'Nertomarus', 'Sarimarcus', 'Sudrenus', 'Tanicus', 'Taurinus', 'Trenus', 'Vepgenus', 'Vibennis', 'Vitalinus', 'Ulprus', 'Votcporix'],
            'Cymric' : ['Addonwy', 'Aeron', 'Aneirin', 'Aeddan', 'Athrwys', 'Arddur', 'Buddfannan', 'Blaen', 'Bradwen', 'Bleddig', 'Cadfannan', 'Cadwallon', 'Cilydd', 'Cynon', 'Cynfan', 'Cyfulch', 'Cynrain', 'Cunvelyn', 'Caradoc', 'Cibnio', 'Ceredig', 'Cadlew', 'Cynwal', 'Clydno', 'Cynhafal', 'Dwyai', 'Edar', 'Eiddef', 'Erthgi', 'Elad', 'Eudaf', 'Elffin', 'Gwefrfawr', 'Gwgon', 'Gwion', 'Gwyn', 'Gwarddur', 'Gwyleged', 'Gwrjen', 'Gwriad', 'Gorthyn', 'Gwaednerth', 'Gwengad', 'Grugyn', 'Gwenabwy', 'Gwrfelling', 'Gwair', 'Graid', 'Geraint', 'Gwanon', 'Hyfaidd', 'Ieuan', 'Marchlew', 'Moried', 'Morien', 'Myrddin', 'Madog', 'Morial', 'Mynyddog', 'Merin', 'Neilyn', 'Nwython', 'Nai', 'Nerthiad', 'Neddig', 'Owain', 'Peredur', 'Pwyll', 'Rhiwallon', 'Riderch', 'Rhodri', 'Rhufon', 'Rhun', 'Sywno', 'Tudfwlch', 'Tyngyr', 'Uren', 'Uwain', 'Ywain', 'Ysgarraoi'],
            'Pict' : ['Brude', 'Buban', 'Cian', 'Drust', 'Golistan', 'Llifiau', 'Mailcon', 'Peithan', 'Talorc', 'Wid'],
            'Saxon' : ['Aelfric', 'Aescwine', 'Bassa', 'Beorhtric', 'Caedwalla', 'Ceawlin', 'Centwine', 'Cenwalch', 'Cerdic', 'Coelred', 'Coelric', 'Coelwulf', 'Coenhelm', 'Coenrad', 'Coenwalch', 'Coenwulf', 'Cuthbert', 'Cuthred', 'Cuthwulf', 'Cyneagils', 'Cynewulf', 'Cynric', 'Eadbald', 'Eadberht', 'Eadric', 'Eardwulf', 'Edwin', 'Egbert', 'Eormanric', 'Erconberht', 'Ethelbald', 'Ethelbert', 'Ethelfrith', 'Ethelheard', 'Ethelrcd', 'Ethelwulf', 'Hengest', 'Hlothere', 'Horsa', 'Ine', 'Octa', 'Oeric', 'Osric', 'Oswald', 'Oswme', 'Oswulf', 'Oswy', 'Peada', 'Penda', 'Sigebryht', 'Wihtred', 'Wulfhere'],
            'Malorian' : ['Adtherp', 'Alein', 'Aliduke', 'Annecians', 'Archade', 'Arnold', 'Arrouse', 'Bandelaine', 'Bellangere', 'Bellias', 'Betel', 'Bersules', 'Bliant', 'Breunis', 'Briant', 'Car', 'Caulas', 'Chestelaine', 'Clegis', 'Cleremond', 'Dalan', 'Dinaunt', 'Driant', 'Ebel', 'Edward', 'Elias', 'Eliot', 'Elis', 'Emerause', 'Flannedrius', 'Florence', 'Floridas', 'Galardoun', 'Garnish', 'Gerin', 'Gauter', 'Gherard', 'Gilbert', 'Gilmere', 'Goneries', 'Gracian', 'Gumret', 'Guy', 'Gwinas', 'Harsouse', 'Harvis', 'Hebes', 'Hernison', 'Herawd', 'Heringdalc', 'Aerlews', 'Hermel', 'Hermind', 'Hervis', 'Hewgon', 'Idres', 'Jordans', 'Lardans', 'Leomie', 'Manasan', 'Maurel', 'Melion', 'Miles', 'Morganor', 'Morians', 'Moris', 'Nanowne', 'Nerovens', 'Pedivere', 'Pellandres', 'Pellogres', 'Perin', 'Phelot', 'Pillounes', 'Plaine', 'Plenorias', 'Sauseise', 'Selises', 'Selivant', 'Semond', 'Suppinabiles', 'Trian', 'Vains', 'Wisshard']
        },
        Features : {
            'Hair' : ['red hair', 'crewcut', 'excessively hairy', 'huge beard', 'prematurely gray', 'bald', 'white hair', 'braided hair'],
            'Body' : ['slouch', 'barrelchested', 'hunchback', 'tall', 'thin', 'broadshouldered', 'high shoulder', 'very muscular', 'burly', 'squat', 'albino', 'pale'],
            'Expression' : ['sneer', 'haughty expression', 'nice smile', 'hidden behind beard', 'straight teeth', 'dour', 'cheerful', 'squint', 'missing teeth'],
            'Speech' : ['lisp', 'stutter', 'accent', 'basso voice', 'sharp voice', 'nasal voice', 'shrill voice', 'squeaky voice', 'musical voice', 'loud voice', 'soft voice'],
            'Face' : ['noble nose', 'black eyes', 'bushy eyebrows', 'piercing glance', 'deepset eyes', 'high cheekbones', 'braided beard', 'big ears', 'long moustache', 'small nose', 'facial blemishes', 'birthmark'],
            'Limbs' : ['short legs', 'bulging biceps', 'one arm longer than the other', 'rough hands', 'long nails', 'hairy arms and hands', 'bow legs', 'limp', 'big feet', 'long fingers']
        },
        Skills : {
            'Cymric' : {
                'Awareness' : [5, 3, 4],
                'Boat': [4,1,0],
                'Chirurgery': [0,0,0],
                'Courtesy': [1,3,4],
                'Dance': [2,2,4],
                'First Aid': [6,2,2],
                'Folklore': [5,2,2],
                'Game': [4,3,4],
                'Hawking': [1,3,3],
                'Heraldry': [3,3,4],
                'Intrigue': [1,3,3],
                'Joust': [3,3,3],
                'Orate': [2,3,4],
                'Play': [2,3,2],
                'Recognize': [5,3,2],
                'Sing': [2,2,2],
                'Stewardship': [2,2,3],
                'Swim': [5,3,2],
                'Track': [5,2,1],
                'Worship': [2,2,2],
                'Cymric Custom': [4,4,4],
                'Cymric Literacy': [0,0,0],
                'Irish Custom': [2,3,4],
                'Roman Custom': [3,3,3],
                'Latin Literacy': [0,0,0],
                'Pictish Custom': [0,0,1],
                'Saxon Custom': [1,1,2],
                'Speak Cymric': [6,7,7],
                'Speak Irish': [1,1,1],
                'Speak Latin': [1,2,1],
                'Speak Pictish': [0,0,0],
                'Speak Saxon': [0,0,0],
                'Battle': [1,7,7],
                'Lance': [3,7,8],
                'Ride': [6,9,8],
                'Sword': [3,7,8]
            },
            'Saxon' : {
                'Awareness' : [5, 3, 4],
                'Boat': [5,1,1],
                'Chirurgery': [0,0,0],
                'Courtesy': [1,1,1],
                'Dance': [2,2,4],
                'First Aid': [5,2,2],
                'Folklore': [4,2,2],
                'Game': [2,3,4],
                'Hawking': [0,3,3],
                'Heraldry': [4,3,4],
                'Intrigue': [3,3,3],
                'Joust': [3,3,3],
                'Orate': [2,3,4],
                'Play': [2,3,2],
                'Recognize': [4,3,2],
                'Sing': [2,2,2],
                'Stewardship': [2,2,3],
                'Swim': [5,3,4],
                'Track': [5,3,1],
                'Worship': [0,0,0],
                'Cymric Custom': [1,1,2],
                'Cymric Literacy': [0,0,0],
                'Irish Custom': [0,0,0],
                'Roman Custom': [1,1,1],
                'Latin Literacy': [0,0,0],
                'Pictish Custom': [2,2,3],
                'Saxon Custom': [4,2,4],
                'Speak Cymric': [1,1,1],
                'Speak Irish': [1,1,1],
                'Speak Latin': [0,0,0],
                'Speak Pictish': [1,2,1],
                'Speak Saxon': [6,7,7],
                'Battle': [3,6,7],
                'Lance': [1,8,8],
                'Ride': [5,8,8],
                'Sword': [3,8,8]
            },
            'Irish' : {
                'Awareness' : [5, 3, 4],
                'Boat': [4,1,0],
                'Chirurgery': [0,0,0],
                'Courtesy': [2,3,4],
                'Dance': [2,2,4],
                'First Aid': [7,2,2],
                'Folklore': [5,2,2],
                'Game': [2,3,4],
                'Hawking': [2,2,3],
                'Heraldry': [3,3,4],
                'Intrigue': [2,3,3],
                'Joust': [3,3,3],
                'Orate': [2,2,4],
                'Play': [2,3,2],
                'Recognize': [3,3,2],
                'Sing': [2,2,2],
                'Stewardship': [2,2,3],
                'Swim': [5,2,2],
                'Track': [5,2,1],
                'Worship': [2,2,2],
                'Cymric Custom': [2,3,4],
                'Cymric Literacy': [0,0,0],
                'Irish Custom': [4,4,4],
                'Roman Custom': [1,1,1],
                'Latin Literacy': [0,0,0],
                'Pictish Custom': [1,1,2],
                'Saxon Custom': [1,1,3],
                'Speak Cymric': [1,1,1],
                'Speak Irish': [6,7,7],
                'Speak Latin': [0,0,1],
                'Speak Pictish': [0,0,0],
                'Speak Saxon': [0,0,0],
                'Battle': [1,6,7],
                'Lance': [1,8,8],
                'Ride': [6,8,8],
                'Sword': [2,8,8]
            },
            'Roman' : {
                'Awareness' : [5, 3, 4],
                'Boat': [1,1,0],
                'Chirurgery': [0,0,0],
                'Courtesy': [2,3,4],
                'Dance': [3,2,4],
                'First Aid': [6,3,2],
                'Folklore': [2,1,2],
                'Game': [2,3,4],
                'Hawking': [2,3,4],
                'Heraldry': [4,3,4],
                'Intrigue': [5,3,4],
                'Joust': [3,3,3],
                'Orate': [5,3,4],
                'Play': [2,3,2],
                'Recognize': [5,3,2],
                'Sing': [2,2,2],
                'Stewardship': [2,1,3],
                'Swim': [5,2,2],
                'Track': [3,2,1],
                'Worship': [2,2,2],
                'Cymric Custom': [3,3,3],
                'Cymric Literacy': [0,0,0],
                'Irish Custom': [1,3,4],
                'Roman Custom': [4,4,4],
                'Latin Literacy': [0,1,2],
                'Pictish Custom': [0,0,1],
                'Saxon Custom': [1,1,2],
                'Speak Cymric': [3,2,1],
                'Speak Irish': [1,1,1],
                'Speak Latin': [6,7,7],
                'Speak Pictish': [0,0,0],
                'Speak Saxon': [0,0,0],
                'Battle': [1,8,6],
                'Lance': [2,7,8],
                'Ride': [6,9,8],
                'Sword': [2,6,8]
            },
            'Pict' : {
                'Awareness' : [5, 3, 4],
                'Boat': [5,1,0],
                'Chirurgery': [0,0,0],
                'Courtesy': [1,3,4],
                'Dance': [2,2,3],
                'First Aid': [7,3,2],
                'Folklore': [5,3,4],
                'Game': [1,3,4],
                'Hawking': [0,2,2],
                'Heraldry': [3,3,3],
                'Intrigue': [1,1,3],
                'Joust': [1,2,3],
                'Orate': [1,3,2],
                'Play': [2,2,2],
                'Recognize': [5,3,2],
                'Sing': [2,2,2],
                'Stewardship': [1,1,2],
                'Swim': [5,3,2],
                'Track': [5,2,3],
                'Worship': [2,2,2],
                'Cymric Custom': [1,1,1],
                'Cymric Literacy': [0,0,0],
                'Irish Custom': [2,3,4],
                'Roman Custom': [1,1,1],
                'Latin Literacy': [0,0,0],
                'Pictish Custom': [4,4,4],
                'Saxon Custom': [2,2,2],
                'Speak Cymric': [1,2,2],
                'Speak Irish': [1,1,1],
                'Speak Latin': [0,0,0],
                'Speak Pictish': [6,7,7],
                'Speak Saxon': [0,0,0],
                'Battle': [1,5,7],
                'Lance': [1,8,8],
                'Ride': [6,8,8],
                'Sword': [2,8,8]
            }
        },
        'BattleSkills': {
            'Cymric' : {
                'Greatspear': [8,5,5],
                'Spear': [8,5,5]
            },
            'Saxon': {
                'Axe': [7,5,5],
                'Greataxe': [8,5,5],
                'Greatsword': [5,7,5]
            },
            'Irish': {
                'Axe': [7,5,5],
                'Mace': [5,7,3],
                'Spear': [8,5,2]
            },
            'Roman': {
                'Greatsword':[3,4,3],
                'Javelin': [8,5,1],
                'Spear': [5,3,3],
                'Dagger': [3,4,4],
                'Grapple': [5,3,3]
            },
            'Pict': {
                'Mace': [8,5,5],
                'Morning Star': [4,4,3],
                'Spear': [9,7,5]
            }
        }
    },
    Methods : {
        randomRoll : function(sides, dice, mod) {
            var total = 0,
                roll;
            //$('#log').append('Roll '+die+'d6 + '+mod);
            for (; dice > 0; dice--) {
                roll = Math.floor((Math.random() * sides) + 1);
                //$('#log').append(' = '+ roll);
                total = total + roll;
            }
            total = total + mod;
            //$('#log').append('+ ' + mod + ' = result = '+ total +'');
            return total;
        },
        initGame : function() {
            $('.randomEntry a.input-group-label').on('click', function() {

                var dataType = $(this).closest('.randomEntry').attr('data-type');
                if (dataType === "kingdom") {
                    var d6Roll = pendragon.Methods.randomRoll(6, 1, -1);
                    var d20Roll = pendragon.Methods.randomRoll(20, 1, 0);
                    var kingdom = pendragon.data.HomelandTable[d6Roll][d20Roll];
                    var homelandData = pendragon.data.HomelandData[kingdom];
                    var culture = homelandData[0];
                    var religion = homelandData[1];
                    var virtues = $('.input-group-label.' + religion.toLowerCase());
                    var iconClass = 'book-bookmark';
                    var iconHtml = '';
                    var relBonus = "+3 Armor";
                    $('.virtueIcons').remove();

                    $('#homeland').val(kingdom);
                    $('#culture').val(culture);
                    $('#religion').val(religion);

                    if (religion === 'Wotanic') {
                        iconClass = 'target';
                        relBonus = "+1d3 Dmg";

                    } else if (religion === 'Pagan') {
                        iconClass = 'trees';
                        relBonus = "+2 Heals";
                    }
                    iconHtml = '<i title="' + religion + ' Virtue" class="fi-' + iconClass + ' virtueIcons"></i> ';
                    virtues.prepend(iconHtml);
                    $('#relBonus').html(relBonus);
                } else if (dataType === "name") {
                    var inputField = $(this).closest('.randomEntry').find('input');
                    var randomName = pendragon.Methods.generateName();
                    inputField.val(randomName);
                } else if (dataType === "class" && $('#culture').val() !== '') {
                    var inputField = $(this).closest('.randomEntry').find('input');
                    var culture = $('#culture').val();
                    var d20Roll = pendragon.Methods.randomRoll(20, 1, 0);
                    var SocialClass = 'Squire';
                    if (culture === 'Pict') {//handle scots seperately
                        if (d20Roll <= 2) {
                            SocialClass = 'Knight';
                        }
                    } else if (d20Roll === 1) {
                        SocialClass = 'Noble';
                        inputField.attr('data-classlevel',2);
                    } else if (d20Roll <= 7) {
                        SocialClass = 'Knight';
                        inputField.attr('data-classlevel',1);
                    } else if (d20Roll <= 11 && culture === 'Roman') {
                        SocialClass = 'Knight';
                        inputField.attr('data-classlevel',1);
                    } else if ((culture === 'Cymric' || culture === 'Irish') && d20Roll <= 9) {
                        SocialClass = 'Knight';
                        inputField.attr('data-classlevel',1);
                    }
                    inputField.val(SocialClass);
                    pendragon.Methods.startingSkills();
                } else if (dataType === "son") {
                    var inputField = $(this).closest('.randomEntry').find('input');
                    var sonPosition = pendragon.Methods.randomRoll(6, 1, 0);
                    inputField.val(sonPosition);
                }
            });
            $('#rollVirtues').on('click', function() {
                $('#virtueBars > .row').each(function() {
                    var isReligiousVirtue = ($(this).find('label').first().find('.virtueIcons').length !== 0);
                    var isReligiousVice = ($(this).find('label').last().find('.virtueIcons').length !== 0);
                    var modifier = 0;
                    var diceRoll = 0;
                    var percentage = 0;
                    if (isReligiousVirtue) {
                        modifier = 3;
                    } else if (isReligiousVice) {
                        modifier = -3;
                    }
                    diceRoll = pendragon.Methods.randomRoll(6, 3, modifier);
                    if (diceRoll >= 19) {
                        diceRoll = 19;
                    }
                    percentage = (diceRoll / 20) * 100;
                    $(this).find('.progress-meter-text').text(diceRoll);
                    $(this).find('.progress-meter').css('width', percentage + '%');
                    $(this).find('label').first().attr('data-value', diceRoll);
                    $(this).find('label').last().attr('data-value', 20 - diceRoll);
                    $('#adjPoints').text('6');
                    $('.rollWarning').show();

                });
                pendragon.Methods.virtueBarActions();
                pendragon.Methods.checkForVirtueBonus();
            });
            $('#rollPassions').on('click', function() {
                var passionTable = $('#passionTable');
                var liegeRoll = pendragon.Methods.randomRoll(6, 2, 6);
                var familyRoll = pendragon.Methods.randomRoll(6, 2, 6);
                passionTable.find('td.Loyalty.Liege').text(liegeRoll);
                passionTable.find('td.Family.Love').text(familyRoll);
                $('#loyaltyValidation').text(liegeRoll);
                if(liegeRoll >= 15) {
                    $('#loyaltyValidation').closest('.failed').removeClass('failed').addClass('passed');
                    if ($('.ageCallout .failed').length === 0) {
                        $('#selfClass').val('Knight');
                        $('#charName').val('Sir '+ $('#charName').val());
                    }
                }
            });
            $('#rollStats').on('click', function() {
                pendragon.Methods.rollStats();
            });
            $('#ageKnight').on('click', function() {
                if($('#passionTable .Loyalty.Liege').text()!=='' && $('#culture').val() !== '') {
                    pendragon.Methods.ageKnight();
                }

            });
            pendragon.Methods.heraldryControls();

        },
        generateName : function() {
            var culture = $('#culture').val();
            var extraNames = pendragon.data.Names.Malorian;
            var names = (culture !== '' && culture !== 'Irish') ? extraNames.concat(pendragon.data.Names[culture]) : extraNames;
            var nameCount = names.length;
            var randomPick = pendragon.Methods.randomRoll(nameCount, 1, -1);
            var returnedName = names[randomPick];
            return returnedName;

        },
        virtueBarActions : function() {
            $('#virtueBars .viceButton, #virtueBars .virtueButton').unbind('click').on('click', function() {
                var currentPoints = Number($('#adjPoints').text());

                if (currentPoints > 0) {
                    var wrappingRow = $(this).closest('.input-group');
                    var currentValue = Number($(this).attr('data-value'));
                    var isVice = $(this).hasClass('viceButton');
                    var newValue = currentValue + 1;
                    var opposingTrait = wrappingRow.find('label').not($(this));
                    var opposingValue = 20 - newValue;
                    var meterValue = (isVice) ? opposingValue : newValue;
                    var percentage = (meterValue / 20) * 100;

                    $(this).attr('data-value', newValue);
                    opposingTrait.attr('data-value', opposingValue);
                    currentPoints--;
                    $('#adjPoints').text(currentPoints);
                    wrappingRow.find('.progress-meter-text').text(meterValue);
                    wrappingRow.find('.progress-meter').css('width', percentage + '%');
                    if (currentPoints === 0) {
                        $('.rollWarning').hide();
                    }
                    pendragon.Methods.checkForVirtueBonus();
                }

            });
        },
        checkForVirtueBonus : function() {
            var chivalryTotal = 0;
            $('#virtueBars .virtueIcons').each(function() {
                var value = Number($(this).closest('.virtueButton, .viceButton').attr('data-value'));
                if (value >= 16) {
                    $(this).addClass('bonusColor');
                } else {
                    $(this).removeClass('bonusColor');
                }
            });

            if ($('#virtueBars .virtueIcons.bonusColor').length === 5) {
                $('#noRelBonus').hide();
                $('#relBonus').show();
            }

            $('#virtueBars .chivalry').each(function() {
                var value = Number($(this).attr('data-value'));
                chivalryTotal=chivalryTotal+value;
            });
            $('#ChivTotal').val(chivalryTotal);
            if (chivalryTotal >= 80) {
                $('#ChivTotal').addClass('chivalrousTotal');
            }
        },
        rollStats : function() {
            var statWrapper = $('#statsWrapper');
            var culture = $('#culture').val();
            var mods = pendragon.data.statMods[culture];
            var rolls = [pendragon.Methods.randomRoll(6, 3, 0), pendragon.Methods.randomRoll(6, 3, 0), pendragon.Methods.randomRoll(6, 3, 0), pendragon.Methods.randomRoll(6, 3, 0), pendragon.Methods.randomRoll(6, 3, 0)];
            var stats = ['SIZ', 'DEX', 'STR', 'CON', 'APP'];
            var statValues = [];
            $.each(stats, function(key, stat) {
                var wrapper = $('.' + stat);
                var modifier = mods[stat];
                rolls[key] = rolls[key] + modifier;
                if (rolls[key] < 4) {
                    rolls[key] = rolls[key] + 6;
                }
                wrapper.find('label:last-child').text(rolls[key]);
                statValues.push(rolls[key]);
            });
            $('.HP').text(statValues[0] + statValues[3]);
            $('.Knockdown').text(statValues[0]);
            $('.Unconcious').text(Math.round((statValues[0] + statValues[3]) / 4));
            $('.Wound').text(statValues[3]);
            $('.Damage').text(Math.round((statValues[0] + statValues[2]) / 6));
            $('.Move').text(Math.round((statValues[0] + statValues[1]) / 10));
            $('.Healing').text(Math.round((statValues[3] + statValues[2]) / 10));
            pendragon.Methods.determinDistintiveFeatures(statValues[4]);
        },
        determinDistintiveFeatures : function(APP) {
            var isNegativeTraits = (APP <= 10);
            var count = 1;
            var listWrapper = $('#distinctiveFeaturesList');
            var traits = ['Hair', 'Body', 'Expression', 'Speech', 'Face', 'Limbs'];
            if (APP <= 4 || APP >= 17) {
                count = 3;
            }
            if (APP <= 8 || APP >= 13) {
                count = 3;
            }
            listWrapper.html('');
            while (count > 0) {
                var typeRoll = pendragon.Methods.randomRoll(6, 1, -1);
                var featureType = traits[typeRoll];
                var features = pendragon.data.Features[featureType];
                var featureCount = features.length;
                var specificRoll = pendragon.Methods.randomRoll(featureCount, 1, -1);
                var featureGranted = features[specificRoll];

                listWrapper.append('<li data-rollindex="'+specificRoll+'">' + featureType + ': ' + featureGranted + '</li>');
                count--;
            }
        },
        startingSkills: function() {
            var culture = $('#culture').val();
            var fatherClass = $('#fatherClass').attr('data-classlevel');
            var skillset = pendragon.data.Skills[culture];
            var addedBattleSkills = pendragon.data.BattleSkills[culture];
            var battleSkillWrapper = $('#battleSkills');

            $.each(skillset,function(skillname, values) {
                var startingValue = values[fatherClass];
                var skillNameCorrected = skillname.replace(' ','_');
                var targetInput = $('#skillWrapper input#skill-' + skillNameCorrected);
                targetInput.val(startingValue);
                if (startingValue === 0) {
                    targetInput.attr('disabled','disabled');
                }
                if (skillname.match(culture)!== null && skillname.match('Literacy') === null) {
                    var knightIcon = '<i class="fi-star"></i> ';
                    targetInput.closest('.input-group').addClass('knightSkill').find('.input-group-label').prepend(knightIcon);
                }
            });
            $.each(addedBattleSkills,function(skillname, values) {
                var startingValue = values[fatherClass];
                var skillNameCorrected = skillname.replace(' ','_');
                var templateHtml='<div class="input-group"><span class="input-group-label">'+skillname+'</span><input value="'+startingValue+'" class="input-group-field" type="number" id="skill-'+skillNameCorrected+'" /></div>';
                battleSkillWrapper.append(templateHtml);
            });
            $('.skillRollWarning').show();
            $('#skillWrapper input[type="number"]').on('change',function() {
                var pointsAvailable = Number($('#skillAdjPoints').text());
                var newPointsAvailable = pointsAvailable-1;
                $('#skillAdjPoints').text(newPointsAvailable);
                if (newPointsAvailable === 0){
                    $('.skillRollWarning').hide();
                    $('#skillWrapper input[type="number"]').attr('disabled','disabled');
                }
                if ($(this).closest('.input-group').hasClass('knightSkill')) {
                    if (Number($(this).val()) >= 10) {
                        var knightSkillsMet = $('.knightSkill.valueMet').length + 1;
                        $(this).closest('.knightSkill').addClass('valueMet');
                        $('#skillValidation').text(knightSkillsMet);
                        if (knightSkillsMet >= 7) {
                            $('#skillValidation').closest('.failed').removeClass('failed').addClass('passed');
                        }
                    }
                } else {
                    var nonKnightSkillsMet = 0;
                    $(this).closest('.input-group').addClass('valueMet');
					nonKnightSkillsMet=$('.valueMet').not('.knightSkill').length;
                    $('#electiveValidation').text(nonKnightSkillsMet);
                    if (nonKnightSkillsMet >= 2) {
                        $('#electiveValidation').closest('.failed').removeClass('failed').addClass('passed');
                    }
                }
                if ($('.ageCallout .failed').length === 0) {
                    $('#selfClass').val('Knight');
                    $('#charName').val('Sir '+ $('#charName').val());
                }
            });
        },
        ageKnight: function () {
            var ageInput = $('#knightAge');
            var currentAge = Number(ageInput.val());
            var yearBornInput = $('#yearBorn');
            var selfClassInput = $('#selfClass');
            var currentLoyalty = Number($('#passionTable .Loyalty.Liege').text());
            var knightlySkills = $('.knightSkill input');
            var ageWrapper = $('.ageCallout');
            var yearsAdded = 0;
            var baseYear = 495;
            var skillMessage = [];
            //first raise loyalty to the correct level
            if (currentLoyalty < 15) {
                yearsAdded = 15-currentLoyalty;
                currentAge = currentAge+yearsAdded;
                $('#passionTable .Loyalty.Liege, #loyaltyValidation').text('15');
                $('#loyaltyValidation').closest('.failed').removeClass('failed').addClass('passed');
                ageWrapper.append('<p>Aged '+ yearsAdded + ' years to raise loyalty to 15</p>');
            } else {
                var knightSkillRequired = 70;
                var knightSkillTotal = 0;
                $.each(knightlySkills, function () {
                    var thisValue = Number($(this).val());
                    if (thisValue<10) {
                        knightSkillTotal=knightSkillTotal+thisValue;
                        $(this).val('10');
                    }

                });
                while (knightSkillTotal < knightSkillRequired) {
                    var currentRoll = pendragon.Methods.randomRoll(6, 1, 0);
                    yearsAdded++;
                    knightSkillTotal=knightSkillTotal+currentRoll;
                    skillMessage.push(currentRoll);
                }
                currentAge = currentAge+yearsAdded;
                if (knightSkillTotal > knightSkillRequired) {
                    var remainder = knightSkillTotal-knightSkillRequired;
                    $('#skillAdjPoints').text(remainder);
                    $('.skillRollWarning').show();
                }
                $('#skillValidation').text('7').closest('.failed').removeClass('failed').addClass('passed');
                ageWrapper.append('<p>Aged '+ yearsAdded + ' years to raise skills.  Rolls were '+skillMessage.toString()+'</p>');
            }
            if ($('.ageCallout .failed').length === 0) {
                $('#selfClass').val('Knight');
                $('#charName').val('Sir '+ $('#charName').val());
            }
            ageInput.val(currentAge);
            yearBornInput.val(baseYear-currentAge);
        },
        heraldryControls: function() {
            $('#heraldOrdinaries').on('change',function () {
                var ordinary = $(this).val();
                $('#heraldWrapper').removeAttr('class').addClass(ordinary);
            });
            $('#heraldColorOne').on('change',function () {
                var color = $(this).val();
                $('#color-one').removeAttr('class').addClass(color);
            });
            $('#heraldColorTwo').on('change',function () {
                var color = $(this).val();
                $('#color-two').removeAttr('class').addClass(color);
            });
            $('#heraldChargeSelect').on('change',function () {
                var image = $(this).val();
                $('#heraldry #heraldChargeWrapper').css('background-image','url(images/'+image+'.png)');
            });

        }
    }
};
pendragon.Methods.initGame();
