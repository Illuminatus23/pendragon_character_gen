var pendragon = {
    data: {
        skillTotal: 0,
        playerTitleSelectionPool: [],
        Names: {
            'Roman': ['Albanus', 'Agorix', 'Arcavius', 'Artorius', 'Avitus', 'Belinus', 'Bellator', 'Brittonius', 'Burcanius', 'Calctus', 'Caracturus', 'Cartomandus', 'Catianus', 'Combaromarus', 'Cunobarrus', 'Cunobelinus', 'Carabellus', 'Cervidus', 'Dagwaldus', 'Decmus', 'Donicus', 'Dripennis', 'Dumnorix', 'Duterius', 'Egbutius', 'Elvorix', 'Galerus', 'Gessius', 'Ingenvinus', 'Isatis', 'Ivimarus', 'Luonercus', 'Litumarus', 'Lediccus', 'Lupinus', 'Maccalus', 'Macrinus', 'Magunnus', 'Marullinus', 'Metunus', 'Molacus', 'Nemnogenus', 'Nonius', 'Novellius', 'Olennius', 'Pertacus', 'Primanus', 'Nertomarus', 'Sarimarcus', 'Sudrenus', 'Tanicus', 'Taurinus', 'Trenus', 'Vepgenus', 'Vibennis', 'Vitalinus', 'Ulprus', 'Votcporix'],
            'Cymric': ['Addonwy', 'Aeron', 'Aneirin', 'Aeddan', 'Athrwys', 'Arddur', 'Buddfannan', 'Blaen', 'Bradwen', 'Bleddig', 'Cadfannan', 'Cadwallon', 'Cilydd', 'Cynon', 'Cynfan', 'Cyfulch', 'Cynrain', 'Cunvelyn', 'Caradoc', 'Cibnio', 'Ceredig', 'Cadlew', 'Cynwal', 'Clydno', 'Cynhafal', 'Dwyai', 'Edar', 'Eiddef', 'Erthgi', 'Elad', 'Eudaf', 'Elffin', 'Gwefrfawr', 'Gwgon', 'Gwion', 'Gwyn', 'Gwarddur', 'Gwyleged', 'Gwrjen', 'Gwriad', 'Gorthyn', 'Gwaednerth', 'Gwengad', 'Grugyn', 'Gwenabwy', 'Gwrfelling', 'Gwair', 'Graid', 'Geraint', 'Gwanon', 'Hyfaidd', 'Ieuan', 'Marchlew', 'Moried', 'Morien', 'Myrddin', 'Madog', 'Morial', 'Mynyddog', 'Merin', 'Neilyn', 'Nwython', 'Nai', 'Nerthiad', 'Neddig', 'Owain', 'Peredur', 'Pwyll', 'Rhiwallon', 'Riderch', 'Rhodri', 'Rhufon', 'Rhun', 'Sywno', 'Tudfwlch', 'Tyngyr', 'Uren', 'Uwain', 'Ywain', 'Ysgarraoi'],
            'Pict': ['Brude', 'Buban', 'Cian', 'Drust', 'Golistan', 'Llifiau', 'Mailcon', 'Peithan', 'Talorc', 'Wid'],
            'Saxon': ['Aelfric', 'Aescwine', 'Bassa', 'Beorhtric', 'Caedwalla', 'Ceawlin', 'Centwine', 'Cenwalch', 'Cerdic', 'Coelred', 'Coelric', 'Coelwulf', 'Coenhelm', 'Coenrad', 'Coenwalch', 'Coenwulf', 'Cuthbert', 'Cuthred', 'Cuthwulf', 'Cyneagils', 'Cynewulf', 'Cynric', 'Eadbald', 'Eadberht', 'Eadric', 'Eardwulf', 'Edwin', 'Egbert', 'Eormanric', 'Erconberht', 'Ethelbald', 'Ethelbert', 'Ethelfrith', 'Ethelheard', 'Ethelrcd', 'Ethelwulf', 'Hengest', 'Hlothere', 'Horsa', 'Ine', 'Octa', 'Oeric', 'Osric', 'Oswald', 'Oswme', 'Oswulf', 'Oswy', 'Peada', 'Penda', 'Sigebryht', 'Wihtred', 'Wulfhere'],
            'Malorian': ['Adtherp', 'Alein', 'Aliduke', 'Annecians', 'Archade', 'Arnold', 'Arrouse', 'Bandelaine', 'Bellangere', 'Bellias', 'Betel', 'Bersules', 'Bliant', 'Breunis', 'Briant', 'Car', 'Caulas', 'Chestelaine', 'Clegis', 'Cleremond', 'Dalan', 'Dinaunt', 'Driant', 'Ebel', 'Edward', 'Elias', 'Eliot', 'Elis', 'Emerause', 'Flannedrius', 'Florence', 'Floridas', 'Galardoun', 'Garnish', 'Gerin', 'Gauter', 'Gherard', 'Gilbert', 'Gilmere', 'Goneries', 'Gracian', 'Gumret', 'Guy', 'Gwinas', 'Harsouse', 'Harvis', 'Hebes', 'Hernison', 'Herawd', 'Heringdalc', 'Aerlews', 'Hermel', 'Hermind', 'Hervis', 'Hewgon', 'Idres', 'Jordans', 'Lardans', 'Leomie', 'Manasan', 'Maurel', 'Melion', 'Miles', 'Morganor', 'Morians', 'Moris', 'Nanowne', 'Nerovens', 'Pedivere', 'Pellandres', 'Pellogres', 'Perin', 'Phelot', 'Pillounes', 'Plaine', 'Plenorias', 'Sauseise', 'Selises', 'Selivant', 'Semond', 'Suppinabiles', 'Trian', 'Vains', 'Wisshard'],
            malename: ["Adtherp", "Alein", "Aliduke", "Annecians", "Archade", "Arnold",
                "Arrouse", "Bandelaine", "Bellangere", "Bellias", "Berel", "Bersules",
                "Bliant", "Breunis", "Briant", "Caulas", "Chestelaine", "Clegis",
                "Cleremond", "Dalan", "Dinaunt", "Driant", "Ebel", "Edward", "Elias",
                "Eliot", "Emerause", "Flannedrius", "Florence", "Floridas", "Galardoun",
                "Garnish", "Gerin", "Gauter", "Gherard", "Gilbert", "Gilmere",
                "Goneries", "Gracian", "Gumret", "Guy", "Gwinas", "Harsouse", "Harvis",
                "Hebes", "Hemison", "Herawd", "Heringdale", "Herlews", "Hermel", "Hermind",
                "Hervis", "Hewgon", "Idres", "Jordans", "Lardans", "Leomie",
                "Manasan", "Maurel", "Melion", "Miles", "Morganor", "Morians",
                "Moris", "Nanowne", "Nerovens", "Pedivere", "Pellandres", "Pellogres",
                "Perin", "Phelot", "Pillounes", "Plaine", "Plenorias", "Sauseise", "Selises",
                "Selivant", "Semond"],
            femalename: ["Ade", "Alis", "Arnive", "Astrigis", "Bene", "Blancheflor", "Carsenefide",
                "Calire", "Cunneware", "Diane", "Elidis", "Enide", "Elizabeth", "Esclarmonde",
                "Feimurgan", "Felelolie", "Felinete", "Feunete", "Florie",
                "Gloris", "Heliap", "Iblis", "Idain", "Imane", "Jeschute", "Laufamour",
                "Liaze", "Lore", "Loorette", "Laudine", "Malvis", "Maugalie", "Melior",
                "Morchades", "Obie", "Obilot", "Oruale", "Repanse", "Sangive", "Tanree",
                "Tryamour", "Violette"],
            epithets: ['the Foul', 'the Mad', 'of the Sword', 'the Accursed', 'the Bald', 'the Beautiful', 'the Black', 'the Bold', 'the Brave', 'the Chaste', 'the Cruel', 'the Rose', 'the Eager',
                'the Fair', 'Farstrider', 'the Fat', 'the Fearless', 'the Fortunate', 'the Generous', 'the Good', 'the Giant', 'the Grim', 'the Hairy',
                'the Handsome', 'the Hermit', 'the Holy', 'the Just', 'the Lame', 'the Learned', 'the Lion', 'the Monk', 'the Little', 'the Elder', 'the Younger',
                'the Lucky', 'the Mad', 'the Kind', 'the Merciful', 'the Mighty', 'the Mild', 'the Pious', 'the Proud', 'the Prudent',
                'the Rash', 'the Red', 'the Short', 'the Silent', 'the Simple', 'the Small', 'the Steadfast', 'the Stout', 'the Strict', 'the Strong',
                'the Tall', 'the Terrible', 'the Valiant', 'the White', 'the Wise', 'the Wild', 'of Salisbury', 'the Briton', 'de Logres', 'de Sarum', 'Caer Caradduc',
                'the Energetic', 'the Forgiving', 'the Honest', 'the Modest', 'the Prudent', 'the Spiritual', 'the Pagan', 'the Temperate', 'the Trusting', 'the Valorous',
                'the Lusty', 'the Sloth', 'the Dragon', 'the Bear', 'the Owl', 'the Stag', 'the Vengeful', 'the Cruel', 'the Viper', 'the Reckless', 'the Worldly', 'the Malordorous',
                'the Brute', 'the Lithe', 'the Monk', 'the Quick', 'the Strong', 'the Ox', 'the Griffon', 'the Vain', 'the Passionate', 'the Loyal', 'the Cymric',
                'the One-Eyed', 'the Thin', 'the Brawny', 'the Fat', 'of the Shield', 'the Fox'],
            titles: {
                Chaste: ['the Chaste', 'the Celibate', 'the Virgin', 'the Wholesome', 'the Undefiled', 'the Innocent', 'the Pure'],
                Energetic: ['the Energetic', 'the Spirited', 'the Rugged', 'the Sturdy', 'the Bee', 'the Tireless', 'the Driven'],
                Forgiving: ['the Forgiving', 'the Kind', 'the Magnanimous', 'the Compassionate', 'the Kindly', 'the Tolerant', 'the Monk'],
                Generous: ['the Generous', 'the Charitable', 'the Good', 'the Kind', 'the Host', 'the Benevolent', 'the Fortunate'],
                Honest: ['the Honest', 'the Honorable', 'the Virtuous', 'the Trustworthy', 'the Forthright'],
                Just: ['the Just', 'the Fair', 'the Lion', 'the Judge', 'the Altruistic', 'the Impartial', 'the Strict'],
                Merciful: ['the Merciful', 'the Compassionate', 'the Kind', 'the Wise'],
                Modest: ['the Modest', 'the Humble', 'the Hermit', 'the Simple', 'the Moderate', 'the Frugal', 'the Mild'],
                Prudent: ['the Prudent', 'the Restrained', 'the Cautious', 'the Shrewd', 'the Canny', 'the Owl', 'the Practical'],
                Spiritual: ['the Spiritual', 'the Sacred', 'the Priest', 'the Holy', 'the Faithful', 'the Moral', 'the Sublime', 'the Blessed'],
                Temperate: ['the Temperate', 'the Sober', 'the Restrained', 'the Gallant'],
                Trusting: ['the Trusting', 'the Credulous', 'the Loyal', 'the Innocent', 'the Undoubting', 'the Hound'],
                Valorous: ['the Valorous', 'the Bold', 'the Brave', 'the Bear', 'the Fearless','the Lion'],
                Lustful: ['the Lustful', 'the Lewd', 'the Foul', 'the Impure', 'the Wicked', 'the Lech'],
                Lazy: ['the Lazy', 'the Sloth', 'the Lame', 'the Unmoved', 'the Steadfast', 'the Langurous', 'the Weary'],
                Vengeful: ['the Vengeful', 'the Rancorous', 'the Spiteful', 'the Unforging', 'the Intolerant', 'the Avenger'],
                Selfish: ['the Selfish', 'the Terrible', 'the Merchant', 'the Miserly', 'the Covetous', 'the Rapacious'],
                Deceitful: ['the Deceitful', 'the Viper', 'the Beguiling', 'the Silver-tongued', 'the Cunning', 'the Crafty', 'the Trickster', 'the Fox', 'the Sly'],
                Arbitrary: ['the Arbitrary', 'the Fanciful', 'the Wayward', 'the Capricious'],
                Cruel: ['the Cruel', 'the Accursed', 'the Torturer', 'the Barbarous', 'the Hard', 'the Merciless', 'the Heartless'],
                Proud: ['the Proud', 'the Aloof', 'the Cavalier', 'the Imperious', 'the Beautiful', 'the Rose', 'the Peacock', 'the Haughty', 'the Lofty'],
                Reckless: ['the Reckless', 'the Wanton', 'the Brave', 'the Headstrong', 'the Daring', 'the Brash', 'the Venturous'],
                Worldly: ['the Worldly', 'the Cynic', 'the Farstrider', 'the Earthly', 'the Learned', 'the Scholar'],
                Indulgent: ['the Indulgent', 'the Sloth', 'the Glutton', 'the Coarse', 'the Fat', 'the Unrestrained'],
                Suspicious: ['the Suspicious', 'the Shrewd', 'the Watchful', 'the Wary', 'the Skeptic', 'the Careful'],
                Cowardly: ['the Cowardly', 'the Dastardly', 'the Craven', 'the Timorous', 'the Weasel', 'the Timid', 'the Mouse'],
                SIZ: ['the Ox','the Bear','the Portly','the Mountain','the Stout','the Tower'],
                DEX: ['the Lithe','the Sure-footed','the Dancer','the Deft','the Nimble','the Spry'],
                STR: ['the Bear','the Ox','the Strong','the Unmoving','the Unyeilding','the Enduring'],
                CON: ['the Robust','the Hearty','the Virile','the Stalwart','the Vigorous']
            },
            manors: ["Baverstock", "Berwick St. James", "Broughton", "Burcombe", "Cholderton", "Dinton", "Durnford", "Idmiston", "Laverstock", "Newton",
                "Newton Tony", "Pitton", "Shrewton", "Stapleford", "Steeple Langford", "Tisbury", "Winterbourne Gunnet", "Winterbourne Stoke",
                "Woodford", "Wylye"]
        },
        familySkill: [['being good with horses', 'Horsemanship', 5], ['being good with horses', 'Horsemanship', 5], ['having an excellent voice', 'Sing', 10], ['having keen senses', 'Awareness', 5],
            ['having keen senses', 'Awareness', 5], ['having keen senses', 'Awareness', 5], ['having keen senses', 'Awareness', 5], ['their naturecraft', 'Hunting', 5],
            ['being light-footed', 'Dance', 10], ['being natural healers', 'First_Aid', 5], ['being naturally lovable', 'Flirting', 10], ['never forgetting a face', 'Recognize', 10],
            ['being remarkably deductive', 'Intrigue', 5], ['being like otters', 'Swim', 10], ['being natural speakers', 'Orate', 10], ['being natural musicians', 'Play', 15],
            ['being good with words', 'Compose', 15], ['their love of arms', 'Heraldry', 10], ['being good with birds', 'Falconry', 15], ['Clever', 'Gaming', 10]],
        belongings: {
            base: ['Money', 'Money', 'Money', 'Money', 'Money', 'Money', 'Money', 'Relic', 'Heirloom', 'Heirloom', 'Heirloom', 'Ring', 'Armband', 'Cloak',
                'Horse', 'Horse', 'Horse', 'Horse', 'Horse', 'Double'],
            Money: [[3, 20, 0, 'd'], [3, 20, 100, 'd'], [3, 20, 10, 'd'], [1, 1, 0, '&pound;'], [1, 1, 0, '&pound;'], [1, 1, 0, '&pound;'], [1, 6, 0, '&pound;']],
            Ring: ['Silver Ring worth 120d', 'Silver Ring worth 120d', 'Silver Ring worth 120d', 'Silver Ring worth 120d', 'Gold Ring worth &pound;2', 'Gold Ring worth &pound;2'],
            Armband: ['Silver armband worth &pound;1', 'Silver armband worth &pound;1', 'Silver armband worth &pound;1', 'Silver armband worth &pound;1',
                'Silver armband worth &pound;1', 'Gold armband worth &pound;8'],
            Cloak: ['Valuable Byzantium cloak worth &pound;1', 'Valuable Byzantium cloak worth &pound;1', 'Valuable German cloak worth &pound;1',
                'Valuable Spanish cloak worth &pound;1', 'Valuable Spanish cloak worth &pound;1', 'Valuable Roman cloak worth &pound;1'],
            Heirloom: ['Ancient bronze sword worth &pound;2', 'Blessed lance worth 25d', 'Decorated saddle worth &pound;1', 'A magic healing potion (1d6 heal)'],
            Horse: ['An extra rouncy', 'An extra rouncy', 'A second charger', 'A courser'],
            Relic: ['Finger of', 'Tears of', 'Hair of', 'Hair of', 'Bone fragment of', 'Blood of'],
            Saints: ['Germanus', 'Peter', 'Mark the Evangelist', 'Jude the Apostle', 'Paul the Apostle', 'Alban', 'Julius', 'Aaron', 'Valentine', 'Bran the Blessed',
                'Aaron the Martyr', 'Julius the Martyr', 'Saint Pelagius', 'Saint Patrick', 'Saint George the Dragonslayer', 'Saint Theodore the Recruit',
                'Saint Demetrius the Proconsul', 'Saint Procopius the Officer', 'Saint Mercury the Soldier', 'Saint Maurice']
        },
        Features: {
            'Hair': ['red hair', 'crewcut', 'excessively hairy', 'huge beard', 'prematurely gray', 'bald', 'white hair', 'braided hair'],
            'Body': ['slouch', 'barrelchested', 'hunchback', 'tall', 'thin', 'broadshouldered', 'high shoulder', 'very muscular', 'burly', 'squat', 'albino', 'pale'],
            'Expression': ['sneer', 'haughty expression', 'nice smile', 'hidden behind beard', 'straight teeth', 'dour', 'cheerful', 'squint', 'missing teeth'],
            'Speech': ['lisp', 'stutter', 'accent', 'basso voice', 'sharp voice', 'nasal voice', 'shrill voice', 'squeaky voice', 'musical voice', 'loud voice', 'soft voice'],
            'Face': ['noble nose', 'black eyes', 'bushy eyebrows', 'piercing glance', 'deepset eyes', 'high cheekbones', 'braided beard', 'big ears', 'long moustache', 'small nose', 'facial blemishes', 'birthmark'],
            'Limbs': ['short legs', 'bulging biceps', 'one arm longer than the other', 'rough hands', 'long nails', 'hairy arms and hands', 'bow legs', 'limp', 'big feet', 'long fingers']
        }
    },
    Methods: {
        randomRoll: function (sides, dice, mod) {
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
        randomSelection: function (dataSet) {
            var setLength = dataSet.length;
            var roll = pendragon.Methods.randomRoll(setLength, 1, -1);
            return dataSet[roll];
        },
        initGame: function () {
            var statInputs = $('#statsWrapper input[type="number');
            var skillInputs = $('#skillWrapper input[type="number');

            pendragon.Methods.randomRollers();
            pendragon.Methods.traitAdjustments();
            pendragon.Methods.heraldryControls();

            statInputs.on('click', function () {
                pendragon.Methods.statPointBuy($(this));
            }).on('blur', function () {
                pendragon.Methods.statPointBuy($(this));
            });
            skillInputs.on('click', function () {
                pendragon.Methods.initiateSkillPointBuy($(this));
            }).on('blur', function () {
                pendragon.Methods.initiateSkillPointBuy($(this));
            });
            $('.Hate.Saxons').text(pendragon.Methods.randomRoll(6, 3, 0));
            $('#startCreation').on('click',function () {
                pendragon.Methods.highlightSection($('.callout[data-step="1"]'));
            });

            pendragon.Methods.stepThroughProcess();
            pendragon.Methods.computeFamSkillandHeirloom();
            pendragon.Methods.skillSelectWizard();
            $('.AgeKnight').on('click', function () {
                extraYears = Number($(this).attr('data-extrayears'));
                if (extraYears === 4) {
                    $(this).hide();
                }
                $(this).attr('data-extrayears', extraYears + 1);
                pendragon.Methods.ageKnight();
            });

        },
        randomRollers: function () {
            $('.randomEntry a.input-group-label').on('click', function () {
                var dataType = $(this).closest('.randomEntry').attr('data-type');
                if (dataType === "name") {
                    var inputField = $(this).closest('.randomEntry').find('input');
                    var randomName = pendragon.Methods.randomSelection(pendragon.data.Names.malename);
                    inputField.val(randomName);
                } else if (dataType === "title") {
                    var inputField = $(this).closest('.randomEntry').find('input');
                    var randomName = pendragon.Methods.randomSelection(pendragon.data.Names.epithets);
                    inputField.val(randomName);
                } else if (dataType === "manor") {
                    var inputField = $(this).closest('.randomEntry').find('input');
                    var randomName = pendragon.Methods.randomSelection(pendragon.data.Names.manors);
                    inputField.val(randomName);
                }
            });
            $('#randomFeatures').on('click', function () {
                pendragon.Methods.determinDistintiveFeatures();
            });
        },
        traitAdjustments: function () {
            $('#charReligionPopup').on('change', function () {
                $('#charReligion').val($('#charReligionPopup').val()).trigger('change');

            });
            $('#charReligion, #famousTrait').on('change', function () {
                var selection = $('#charReligion').val();

                if (selection === "pagan") {
                    pendragon.Methods.setReligiousVirtues('fi-eye');
                } else if (selection === "roman") {
                    pendragon.Methods.setReligiousVirtues('fi-book-bookmark');
                } else {
                    pendragon.Methods.setReligiousVirtues('fi-crown');
                }
                if ($('#charTitle').val() === '' && $('#famousTrait').val() !== '-1') {
                    var famousTrait = $('#famousTrait').val();
                    var dataSet = pendragon.data.Names.titles[famousTrait];
                    var charTitle = pendragon.Methods.randomSelection(dataSet);
                    $('#charTitle').val(charTitle);
                }
                pendragon.Methods.computeChivRelTotals();
            });


        },
        setReligiousVirtues: function (icon) {
            var allIcons = $('#virtueBars').find('i.fi-book-bookmark, i.fi-eye, i.fi-crown');
            var offIcons = allIcons.not('.' + icon);
            var onIcons = $('.' + icon);
            var wrapper = offIcons.closest('.input-group');
            offIcons.hide();
            onIcons.show();
            wrapper.find('.progress-meter-text').text('10');
            wrapper.find('.progress').attr('aria-valuenow', '50').find('.progress-meter').css('width', '50%');

            onIcons.each(function () {
                var virtueName = $.trim($(this).closest('label').text());
                pendragon.Methods.setVirtueBarValue(virtueName, 13);

            });
            if ($('#famousTrait').val() !== '-1') {
                var virtueName = $('#famousTrait').val();
                pendragon.Methods.setVirtueBarValue(virtueName, 17);
            }

        },
        setVirtueBarValue: function (virtueName, value) {
            var label = $('#virtueBars label:contains("' + virtueName + '")');
            var onWrapper = label.closest('.input-group');
            var isVice = (label.hasClass('viceButton'));
            var percent = value * 5;
            if (isVice) {
                value = 20 - value;
                percent = 100 - percent;

            }
            onWrapper.find('.progress-meter-text').text(value);
            onWrapper.find('.progress').attr('aria-valuenow', percent).find('.progress-meter').css('width', percent + '%');
        },
        adjustVirtueBar: function (virtueName, adjustment) {
            var label = $('#virtueBars label:contains("' + virtueName + '")');
            var onWrapper = label.closest('.input-group');
            var isVice = (label.hasClass('viceButton'));
            var newAdjustment = (isVice)?adjustment*(-1):adjustment;
            var bar = onWrapper.find('.progress-meter-text');
            var value = Number(bar.text())+newAdjustment;
            var percent = value * 5;
            if (isVice) {
                value = 20 - value;
                percent = 100 - percent;

            }
            onWrapper.find('.progress-meter-text').text(value);
            onWrapper.find('.progress').attr('aria-valuenow', percent).find('.progress-meter').css('width', percent + '%');
        },
        virtueBarActions: function () {
            $('#virtueBars .viceButton, #virtueBars .virtueButton').unbind('click').on('click', function () {
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
        checkForVirtueBonus: function () {
            var chivalryTotal = 0;
            $('#virtueBars .virtueIcons').each(function () {
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

            $('#virtueBars .chivalry').each(function () {
                var value = Number($(this).attr('data-value'));
                chivalryTotal = chivalryTotal + value;
            });
            $('#ChivTotal').val(chivalryTotal);
            if (chivalryTotal >= 80) {
                $('#ChivTotal').addClass('chivalrousTotal');
            }
        },
        determinDistintiveFeatures: function () {
            var APP = Number($('#APPattr').val());
            var isNegativeTraits = (APP <= 10);
            var count = 1;
            var listWrapper = $('#distinctiveFeaturesList');
            var traits = ['Hair', 'Body', 'Expression', 'Speech', 'Face', 'Limbs'];
            if (APP <= 6 || APP >= 17) {
                count = 3;
            } else if (APP <= 9 || APP >= 13) {
                count = 2;
            }
            listWrapper.html('');
            while (count > 0) {
                var typeRoll = pendragon.Methods.randomRoll(6, 1, -1);
                var featureType = traits[typeRoll];
                var features = pendragon.data.Features[featureType];
                var featureCount = features.length;
                var specificRoll = pendragon.Methods.randomRoll(featureCount, 1, -1);
                var featureGranted = features[specificRoll];

                listWrapper.append('<li data-rollindex="' + specificRoll + '">' + featureType + ': ' + featureGranted + '</li>');
                count--;
            }
        },
        ageKnight: function () {
            var ageInput = $('#knightAge');
            var yearBornInput = $('#yearBorn');
            var newAge = Number(ageInput.val()) + 1;
            var newYearBorn = Number(yearBornInput.val()) - 1;

            ageInput.val(newAge);
            yearBornInput.val(newYearBorn);
            pendragon.Methods.highlightSection($('#ageKnight'));
            $('#submitAgeKnight').on('click', function () {

                $('.overlay').hide();
                $('#ageKnight').removeClass('highlighted');
                pendragon.Methods.ageKnightSelection();
            });
        },
        ageKnightSelection: function () {
            var selection = $('#ageKnightSelection').val();
            var activePanel = $('#skillData');
            if (selection === 'skillAdd') {
                var skillPoints = pendragon.Methods.randomRoll(6, 1, 0);

                $('#skillPoints').val(skillPoints).attr('data-total',skillPoints);
                $('.skillstep-1').hide();
                $('.skillstep-2').show();
                $('.skillstep-2 p').html('You can spend your additional skill points.  No skill may exceed 15 points this way.');
                pendragon.Methods.setBaselineSkills();

            } else if (selection === 'statAdd') {
                activePanel = $('#statsData');
                activePanel.find('.pendragonTooltip').first().hide();
                $('#statRaiseWrapper').show();
                $('#submitStatRaiseOne').on('click', function (e) {
                    var statName = $('#statRaiseOne').val();
                    var statInput = $('#'+statName);
                    var currentValue = Number(statInput.val());
                    
                    e.preventDefault();
                    
                    statInput.val(currentValue+1);
                    pendragon.Methods.computeDerivedStats();
                    $('#statsData').removeClass('highlighted');
                    $('.overlay, #statRaiseWrapper').hide();
                });
            }
            if (selection === 'traitAdd') {
                activePanel = $('#traitData');
                activePanel.find('.pendragonTooltip').first().hide();
                $('#traitRaiseWrapper').show();
                $('#submitTraitRaiseOne').on('click', function (e) {
                    var virtueName = $('#traitRaiseOne').val();
                    e.preventDefault();
                    pendragon.Methods.adjustVirtueBar(virtueName, 1);
                    $('#traitData').removeClass('highlighted');
                    $('.overlay, #traitRaiseWrapper').hide();
                });
            }
            pendragon.Methods.highlightSection(activePanel);
        },
        heraldryControls: function () {
            $('#heraldOrdinaries').on('change', function () {
                var ordinary = $(this).val();
                $('#heraldWrapper').removeAttr('class').addClass(ordinary);
            });
            $('#heraldColorOne').on('change', function () {
                var color = $(this).val();
                $('#color-one').removeAttr('class').addClass(color);
            });
            $('#heraldColorTwo').on('change', function () {
                var color = $(this).val();
                $('#color-two').removeAttr('class').addClass(color);
            });
            $('#heraldChargeSelect').on('change', function () {
                var image = $(this).val();
                $('#heraldry #heraldChargeWrapper').css('background-image', 'url(images/' + image + '.png)');
            });

        },
        statPointBuy: function (statInput) {
            var pointsInput = $('#attrPoints');
            var points = Number(pointsInput.val());
            var thisValue = Number(statInput.val());
            var preValue = Number(statInput.attr('data-prevalue'));
            var minValue = Number(statInput.attr('data-min'));
            var maxValue = Number(statInput.attr('data-max'));

            if (points === 0) {
                statInput.val(preValue);
            } else if (thisValue < minValue) {
                statInput.val(minValue);
            } else if (thisValue > maxValue) {
                statInput.val(maxValue);
            } else {
                var base = 63;
                var statValues = [Number($('#SIZattr').val()), Number($('#DEXattr').val()), Number($('#STRattr').val()),
                    Number($('#CONattr').val()), Number($('#APPattr').val())];
                var stats = statValues[0] + statValues[1] + statValues[2] + statValues[3] + statValues[4];
                var total = base - stats;
                statInput.attr('data-prevalue', statInput.val());
                pointsInput.val(total);
                pendragon.Methods.computeDerivedStats();
                
            }
        },
        computeDerivedStats: function() {
            var statValues = [Number($('#SIZattr').val()), Number($('#DEXattr').val()), Number($('#STRattr').val()),
                    Number($('#CONattr').val()), Number($('#APPattr').val())];
                
            $('.Damage').text(Math.round((statValues[0] + statValues[2]) / 6));
                $('.Healing').text(Math.round((statValues[3] + statValues[2]) / 10));
                $('.Move').text(Math.round((statValues[1] + statValues[2]) / 10));
                $('.HP').text(statValues[0] + statValues[3]);
                $('.Unconcious').text(Math.round((statValues[0] + statValues[3]) / 4));
                $('.Knockdown').text(statValues[0]);
                $('.Wound').text(statValues[3]);
        },
        computeChivRelTotals: function () {
            var chivTraits = $('.fi-shield').closest('.input-group');
            var religTraits = $('.fi-crown, .fi-eye, .fi-book-bookmark').filter(':visible').closest('.input-group');
            var chivTotal = 0;
            var religTraitCount = 0;

            chivTraits.each(function () {
                var value = Number($(this).find('.progress-meter-text').text());
                chivTotal = chivTotal + value;
            });
            $('#chivTotal').text(chivTotal);
            if (chivTotal > 80) {
                $('#chivTotal').css('color', 'green');
            } else {
                $('#chivTotal').css('color', 'red');
            }
            religTraits.each(function () {
                var value = Number($(this).find('.progress-meter-text').text());
                var isPaganVice = ($(this).hasClass('paganVice'));
                if (isPaganVice && value <= 4) {
                    religTraitCount++;
                } else if (!isPaganVice && value >= 16) {
                    religTraitCount++;
                }
            });
            $('#religTotal').text(religTraitCount);
            if (religTraitCount === 5) {
                $('#relBonus').css('color', 'green');
            } else {
                $('#relBonus').css('color', 'red');
            }
        },
        computeFamSkillandHeirloom: function () {
            var familySkill = pendragon.Methods.randomSelection(pendragon.data.familySkill);
            var rolls = 1;

            $('#famSkillReason').text(familySkill[0]);
            $('#famSkillNumber').text(familySkill[2]);
            $('#famSkillName').text(familySkill[1]);

            for (var i = 0; i < rolls; i++) {
                var heirloom = pendragon.Methods.randomSelection(pendragon.data.belongings.base);
                var textLine = '';
                if (heirloom === 'Double') {
                    rolls = rolls + 2;
                } else {
                    var secondaryRoll = pendragon.Methods.randomSelection(pendragon.data.belongings[heirloom]);

                    if (heirloom === 'Money') {
                        var amount = pendragon.Methods.randomRoll(secondaryRoll[0], secondaryRoll[1], secondaryRoll[2]);
                        textLine = 'An extra ' + amount + secondaryRoll[3];
                    } else if (heirloom === 'Relic') {
                        var saint = pendragon.Methods.randomSelection(pendragon.data.belongings.Saints);
                        textLine = secondaryRoll + ' ' + saint;
                    } else {
                        textLine = secondaryRoll;
                    }
                    $('#gear ul').append('<li>Special Inheritance:  ' + textLine + '</li>');
                }
            }
        },
        setBaselineSkills: function () {
            $('#skillWrapper .input-group-field').each(function () {
                $(this).attr('data-startingVal', $(this).val());
                pendragon.data.skillTotal = pendragon.data.skillTotal + Number($(this).val());
            });
        },
        skillSelectWizard: function () {
            var expertSkillDD = $('#expertSkillSelect');
            var commonSkillGridInputs = $('#commonSkillSelect input');

            pendragon.Methods.setBaselineSkills();

            expertSkillDD.on('change', function () {
                var preValue = $(this).attr('data-prevalue');
                var currentValue = $(this).val();
                var skillInput = $('#' + currentValue);
                var oldInput = $('#' + preValue);
                $(this).attr('data-prevalue', currentValue);

                skillInput.val('15');
                oldInput.val(oldInput.attr('data-startingVal'));
            });
            commonSkillGridInputs.on('click', function (e) {
                var checkedBoxes = $('#commonSkillSelect input:checked');
                var currentSkillCheck = $(this);
                var currentValue = currentSkillCheck.val();
                var skillInput = $('#' + currentValue);

                if (checkedBoxes.length <= 3 && currentSkillCheck.filter(':checked').length !== 0) {
                    skillInput.val('10');
                } else if (currentSkillCheck.filter(':checked').length === 0) {
                    skillInput.val(skillInput.attr('data-startingVal'));
                } else if (checkedBoxes.length > 3) {
                    currentSkillCheck.removeAttr('checked');
                }
            });
        },
        stepThroughProcess: function () {
            $('.stepButton').on('click', function (e) {
                var activePanel = $('.callout.highlighted');
                var step = Number(activePanel.attr('data-step'));
                var nextStep = step + 1;
                var nextPanel = $('.callout[data-step="' + nextStep + '"]');
                var valid = pendragon.Methods.validateSection(activePanel);
                var errorMsg = activePanel.find('.tooltip small.error');
                var addFamSkill = ($(this).hasClass('addFamSkill'));

                e.preventDefault();

                if (valid[0]) {
                    if (addFamSkill) {
                        pendragon.Methods.addFamilySkill();
                    }
                    if (nextPanel.length === 0) {
                        $('.overlay').hide();
                        activePanel.removeClass('highlighted');
                        $('.button.AgeKnight').show();
                    } else {
                        activePanel.removeClass('highlighted');
                        nextPanel.addClass('highlighted');
                        $('html, body').animate({
                            scrollTop: nextPanel.offset().top - 10
                        }, 500);

                    }
                    if ($(this).hasClass('computeDistinctiveFeatures')) {
                        pendragon.Methods.determinDistintiveFeatures();
                    }
                } else {
                    if (errorMsg.length === 0) {
                        activePanel.find('.tooltip').append('<small class="error"><strong>' + valid[1] + '</strong></small>');
                    } else {
                        errorMsg.find('strong').text(valid[1]);
                    }

                }

            });
            $('.subStepButton').on('click', function (e) {

                e.preventDefault();
                if ($('#expertSkillSelect').val() === '-1' || $('#commonSkillSelect input:checked').length !== 3) {
                    //isValid=false;
                } else {
                    $('.skillstep-1').slideUp();
                    $('.skillstep-2').slideDown();
                    pendragon.Methods.setBaselineSkills();

                }

            });
        },
        initiateSkillPointBuy: function (inputChanged) {
            var newAmount = Number(inputChanged.val());
            var origAmount = Number(inputChanged.attr('data-startingval'));
            var delta = 0;
            var skillPtInput = $('#skillPoints');
            var total = Number(skillPtInput.attr('data-total'));
            if (newAmount <= origAmount) {
                inputChanged.val(origAmount);
                inputChanged.removeClass('altered').removeAttr('data-delta');
            } else {
                inputChanged.addClass('altered');
                inputChanged.attr('data-delta', newAmount - origAmount);

            }
            $('#skillWrapper input[type="number"].altered').each(function () {
                delta = delta + Number($(this).attr('data-delta'));

            });
            skillPtInput.val(total - delta);
        },
        addFamilySkill: function () {
            var skillName = $('span#famSkillName').text();
            var skillAdj = Number($('span#famSkillNumber').text());
            var skillInput = $('#skillWrapper input#skill-' + skillName);
            var currentAmt = Number(skillInput.val());

            skillInput.val(currentAmt + skillAdj);
        },
        highlightSection: function (elementToHighlight) {
            $('.overlay').show();
            elementToHighlight.addClass('highlighted');
            $('html, body').animate({
                scrollTop: elementToHighlight.offset().top - 10
            }, 500);

        },
        validateSection: function (section) {
            var requiredItems = section.find('.required');
            var isValid = true;
            var message = '';
            requiredItems.each(function () {
                if ($(this).hasClass('pointSpend') && $(this).val() !== "0") {
                    isValid = false;
                    message = 'Points left to spend.';
                } else if ($(this).val() === "" || $(this).val() === "-1") {
                    isValid = false;
                    message = 'Complete all fields.';
                }
            });

            return [isValid, message];
        }
    }
};
