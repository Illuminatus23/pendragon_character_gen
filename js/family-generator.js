$.fn.random = function() {
return this.eq(Math.floor(Math.random() * this.length));
}
pendragonfamily = {
    speedGen: false,
    data : {
        name: ["Adtherp", "Alein", "Aliduke", "Annecians", "Archade", "Arnold",
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
        epithets: ['the Foul','the Mad','of the Sword','the Accursed','the Bald','the Beautiful','the Black','the Bold','the Brave','the Chaste','the Cruel','the Rose','the Eager',
            'the Fair','Farstrider','the Fat','the Fearless','the Fortunate','the Generous','the Good','the Giant','the Grim','the Hairy',
            'the Handsome','the Hermit','the Holy','the Just','the Lame','the Learned','the Lion','the Monk','the Little','the Elder','the Younger',
            'the Lucky','the Mad','the Kind','the Merciful','the Mighty','the Mild','the Pious','the Proud','the Prudent',
            'the Rash','the Red','the Short','the Silent','the Simple','the Small','the Steadfast','the Stout','the Strict','the Strong',
            'the Tall','the Terrible','the Valiant','the White','the Wise','the Wild', 'of Salisbury','the Briton','de Logres', 'de Sarum', 'Caer Caradduc',
            'the Energetic','the Forgiving','the Honest','the Modest','the Prudent','the Spiritual','the Pagan','the Temperate','the Trusting','the Valorous',
            'the Lusty','the Sloth','the Dragon','the Bear','the Owl','the Stag','the Vengeful','the Cruel','the Viper','the Reckless','the Worldly', 'the Malordorous',
            'the Brute','the Lithe','the Monk','the Quick','the Strong','the Ox','the Griffon','the Vain','the Passionate','the Loyal','the Cymric',
            'the One-Eyed','the Thin','the Brawny','the Fat','of the Shield','the Fox'],
        manors: ["Baverstock","Berwick St. James","Broughton","Burcombe","Cholderton","Dinton","Durnford","Idmiston","Laverstock","Newton",
                "Newton Tony", "Pitton", "Shrewton", "Stapleford","Steeple Langford","Tisbury","Winterbourne Gunnet","Winterbourne Stoke",
                "Woodford","Wylye"],
        extendedNames: {
            suffix: ['ian','in','el','on','ens','ein','ians','ade','old','es','ouse','is','ert','ere','ind','ot','e','ond','ot','ies','ard','ews','ause','aunt'],
            mids: ['a','e','ec','an','el','tel','rem','er','in','iv','ow','as','ed'],
            prefix: ['Ad','Al','An','Arch','Arn','Arr','Band','Bell','Ber','Bl','Bre','Caul','Chest','Cleg','Cler','Dal','Din','Dr','Eb','Ed','El','Em','Flann','Flor','Gal',
                'Gar','Ger','Gaut','Gher','Gil','Gon','Grac','Gum','Gwin','Har','Heb','Hem','Her','Hewg','Hew','Id','Jord','Lard','Leom','Leon','Man','Maur','Mel','Mil','Mor',
                'Nan','Ner','Ped','Pell','Per','Phel','Pill','Pl','Plen','Saus','Sel','Sem','Tel','Thel','Wa','Wor','Tim']
        },
        death: {
            male: ["In battle -- personal feud", "In battle -- personal feud",
                "In battle -- neighboring land", "In battle -- neighboring land",
                "In battle -- neighboring land", "In battle -- foreign invaders",
                "In battle -- foreign invaders", "Hunting accident", "Hunting accident",
                "Accidental", "Accidental", "Natual causes", "Natual causes", "Natual causes",
                "Natual causes", "Natual causes", "Unknown", "Unknown", "Unknown", "Unknown"],
            female: ["Killed by raiders", "Captured by raiders - died in captivity",
                "Accidental", "Accidental", "Accidental", "In pregnancy", "In pregnancy",
                "In pregnancy", "In pregnancy", "In pregnancy", "In pregnancy", "Natual causes",
                "Natual causes", "Natual causes", "Natual causes", "Natual causes", "Natual causes",
                "Natual causes", "Unknown", "Unknown"]
        }
    },
    familydata : {
        ggfather : {
            deathyear: 0,
            glory: 0,
            name: ''
        },
        gfather : {
            birthyear: 0,
            deathyear: 0,
            knightyear: 0,
            name: ''
        },
        father : {
            
        },
        yourAge: 21,
        manor: {
            name: '',
            oldKnights: 0,
            midKnights: 0,
            youngKnights: 0,
            lineageFighters: 0,
            levy: 0
        },
        extendedFamily: {
            knights: [], //full name, relation, age
            others: []
        },
        template: {
            name: '',
            id: '2.440.jon', //gen, birth name
            dad: '2.440.jon', //or spouse
            birthyear: 0,
            deathyear: 0,
            gender: 'male',
            bastard: false,
            spousename: '',
            spousebirthyear: 0,
            spousedeathyear: 0
        }
    },
    currentYear : 438,
    yearData: {
        439:['gfDied','Nothing','Nothing','Nothing','Nothing','Nothing','gfBattle','gfBattle','gfBattle',
        'gfBattle','gfBattle','gfBattle','gfBattle','gfBattle','gfBattle',
        'gfBattle','gfBattle','gfBattle','gfBattle','gfBattle'],
        440: ['gfDied','gfGarrisonDiedPict','gfGarrisonDiedPict','gfGarrisonDiedPict','gfGarrisonDiedPict',
        'gfGarrisonDiedPict','gfGarrisonDiedPict','gfGarrisonDiedPict','gfGarrisonDiedPict','gfGarrisonSurvivedPict',
        'gfGarrisonSurvivedPict','gfGarrisonSurvivedPict','gfGarrisonSurvivedPict','gfGarrisonSurvivedPict',
        'gfGarrisonSurvivedPict','gfGarrisonSurvivedPict','gfGarrisonSurvivedPict','gfGarrisonSurvivedPict',
        'gfConstanSurvived','gfConstanDied'],
        441: ['gfDied','gfGarrisonDied','gfGarrisonDied','gfGarrisonDied','gfGarrisonDied','gfGarrisonDied',
        'gfGarrisonSurvived','gfGarrisonSurvived','gfGarrisonSurvived','gfGarrisonSurvived','gfGarrisonSurvived',
        'gfGarrisonSurvived','gfGarrisonSurvived','gfGarrisonSurvived','gfGarrisonSurvived','gfGarrisonSurvived',
        'gfGarrisonSurvived','gfGarrisonSurvived','gfGarrisonSurvived','gfGarrisonSurvived'],
        442: ['gfDied','gfGarrisonDied','gfGarrisonDied','gfGarrisonDied','gfGarrisonDied','gfGarrisonDied',
        'gfGarrisonSurvived','gfGarrisonSurvived','gfGarrisonSurvived','gfGarrisonSurvived','gfGarrisonSurvived',
        'gfGarrisonSurvived','gfGarrisonSurvived','gfGarrisonSurvived','gfGarrisonSurvived','gfGarrisonSurvived',
        'gfGarrisonSurvived','gfGarrisonSurvived','gfGarrisonSurvived','gfGarrisonSurvived'],
        443: ['gfDied','gfGarrisonDied','gfGarrisonDied','gfGarrisonDied','gfGarrisonDied',
        'gfGarrisonDied','gfGarrisonDied','gfGarrisonDied','gfGarrisonDied','gfGarrisonDied',
        'gfGarrisonSurvived','gfGarrisonSurvived','gfGarrisonSurvived','gfGarrisonSurvived',
        'gfGarrisonSurvived','gfGarrisonSurvived','gfGarrisonSurvived','gfGarrisonSurvived',
        'gfConstanSurvived','gfConstanDied'],
        444: ['gfDied', 'gfGarrisonDied', 'gfGarrisonSurvived','gfGarrisonSurvived','gfGarrisonSurvived',
        'gfGarrisonSurvived','gfGarrisonSurvived','gfGarrisonSurvived','gfGarrisonSurvived','gfGarrisonSurvived',
        'gfGarrisonSurvived','gfGarrisonSurvived','gfGarrisonSurvived','gfGarrisonSurvived','gfGarrisonSurvived',
        'gfGarrisonSurvived','Nothing','Nothing','Nothing','Nothing'],
        445: ['gfDied', 'gfGarrisonDied', 'gfGarrisonSurvived','gfGarrisonSurvived','gfGarrisonSurvived',
        'gfGarrisonSurvived','gfGarrisonSurvived','gfGarrisonSurvived','gfGarrisonSurvived','gfGarrisonSurvived',
        'gfGarrisonSurvived','gfGarrisonSurvived','gfGarrisonSurvived','gfGarrisonSurvived','gfGarrisonSurvived',
        'gfGarrisonSurvived','Nothing','Nothing','Nothing','Nothing'],
        446:['gfDied','Nothing','Nothing','Nothing','Nothing','gfBattle','gfBattle','gfBattle','gfBattle',
        'gfBattle','gfBattle','gfBattle','gfBattle','gfBattle','gfBattle',
        'gfBattle','gfBattle','gfBattle','gfBattle','gfBattle'],
        447:['gfDied','Nothing','Nothing','Nothing','Nothing','Nothing','Nothing','Nothing','Nothing',
        'Nothing','Nothing','Nothing','Nothing','Nothing','Nothing',
        'Nothing','Nothing','Nothing','Nothing','Nothing'],
        448:['gfDied','Nothing','Nothing','Nothing','Nothing','Nothing','Nothing','Nothing','Nothing',
        'Nothing','Nothing','Nothing','Nothing','Nothing','Nothing',
        'Nothing','Nothing','Nothing','Nothing','Nothing'],
        449:['gfDied','Nothing','Nothing','Nothing','Nothing','Nothing','Nothing','Nothing','Nothing',
        'Nothing','Nothing','Nothing','Nothing','Nothing','Nothing',
        'Nothing','Nothing','Nothing','Nothing','Nothing'],
        450:['gfDied','Nothing','Nothing','Nothing','Nothing','vrWedding','vrWedding',
        'vrWedding','vrWedding','vrWedding','vrWedding','vrWedding','vrWedding','vrWedding',
        'vrWedding','vrWedding','vrWedding','vrWedding','vrWeddingPreg','vrWeddingPreg'],
        451:['gfDied','Nothing','Nothing','Nothing','Nothing','Nothing','Nothing','Nothing','Nothing',
        'Nothing','Nothing','Nothing','Nothing','Nothing','Nothing',
        'Nothing','Nothing','Nothing','Nothing','Nothing'],
        452:['gfLoyaltyCheck'],
        453:['gfDied','Nothing','Nothing','Nothing','Nothing','Nothing','Nothing','Nothing','Nothing',
        'Nothing','Nothing','Nothing','Nothing','Nothing','Nothing','Nothing','Nothing','Nothing','Nothing','Nothing'],
        454:['gfLoyaltyCheck2'],
        455:['gfDied','Nothing','Nothing','Nothing','Nothing','Nothing','Nothing','Nothing','Nothing',
        'Nothing','Nothing','Nothing','Nothing','Nothing','Nothing',
        'Nothing','Nothing','Nothing','Nothing','Nothing'],
        456:['gfDied','Nothing','Nothing','Nothing','Nothing','Nothing','Nothing','Nothing','Nothing',
        'Nothing','Nothing','Nothing','Nothing','Nothing','Nothing',
        'Nothing','Nothing','Nothing','Nothing','Nothing'],
        457:['gfDied','Nothing','Nothing','Nothing','Nothing','gfBattle','gfBattle','gfBattle','gfBattle',
        'gfBattle','gfBattle','gfBattle','gfBattle','gfBattle','gfBattle',
        'gfBattle','gfBattle','gfBattle','gfBattle','gfBattle'],
        458:['gfDied','Nothing','Nothing','Nothing','Nothing','Nothing','Nothing','Nothing','Nothing',
        'Nothing','Nothing','Nothing','Nothing','Nothing','Nothing',
        'Nothing','Nothing','Nothing','Nothing','Nothing'],
        459:['gfDied','Nothing','Nothing','Nothing','Nothing','Nothing','Nothing','Nothing','Nothing',
        'Nothing','Nothing','Nothing','Nothing','Nothing','Nothing',
        'Nothing','Nothing','Nothing','Nothing','Nothing'],
        461:['gfDied','Nothing','Nothing','Nothing','Nothing','Nothing','Nothing','Nothing','Nothing',
        'Nothing','Nothing','Nothing','Nothing','Nothing','Nothing',
        'Nothing','Nothing','Nothing','Nothing','Nothing'],
        462:['gfDied','Nothing','Nothing','Nothing','Nothing','gfBattle','gfBattle','gfBattle','gfBattle',
        'gfBattle','gfBattle','gfBattle','gfBattle','gfBattle','gfBattle',
        'gfBattle','gfBattle','gfBattle','gfBattle','gfBattle'],
        463: ['longKnives'],
        464: ['fmarried'],
        465: ['born'],
        466: ['fdied', 'Nothing', 'Nothing', 'Nothing', 'Nothing','fBattle','fBattle',
        'fBattle','fBattle','fBattle','fBattle','fBattle','fBattle','fBattle','fBattle',
        'fBattle','fBattle','fBattle','fBattle','fBattle'],
        467: ['fdied', 'Nothing', 'Nothing', 'Nothing', 'Nothing','fBattle','fBattle',
        'fBattle','fBattle','fBattle','fBattle','fBattle','fBattle','fBattle','fBattle',
        'fBattle','fBattle','fBattle','fBattle','fBattle'],
        468: ['fdied', 'Nothing', 'Nothing', 'Nothing', 'Nothing','fBattle','fBattle',
        'fBattle','fBattle','fBattle','fBattle','fBattle','fBattle','fBattle','fBattle',
        'fBattle','fBattle','fBattle','fBattle','fBattle'],
        469: ['raid'],
        470: ['raid'],
        471: ['raid'],
        472: ['raid'],
        473: ['fdied','Nothing','Nothing','Nothing','Nothing','Nothing','Nothing','Nothing','Nothing','Nothing',
        'fBattle','fBattle','fBattle','fBattle','fBattle','fBattle','fBattle','fBattle','fBattle','fBattle'],
        474: ['fdied', 'fGarDied', 'fGarDied', 'fGarDied', 'fGar','fGar','fGar','fGar','fGar','fGar','fGar',
        'fGar','fGar','fGar','fGar','fGar','fGar','fGar','fGar','fGar'],
        475: ['fdied', 'fGarDied', 'fGarDied', 'fGarDied', 'fGar','fGar','fGar','fGar','fGar','fGar','fGar',
        'fGar','fGar','fGar','fGar','fGar','fGar','fGar','fGar','fGar'],
        476: ['fdied', 'fGarDied', 'fGarDied', 'fGarDied', 'fGar','fGar','fGar','fGar','fGar','fGar','fGar',
        'fGar','fGar','fGar','fGar','fGar','fGar','fGar','fGar','fGar'],
        477: ['Nothing'],
        478: ['fdied','fBattle','fBattle','fBattle','fBattle','fBattle','fBattle2','fBattle2','fBattle2','fBattle2',
        'fBattle2','fBattle2','fBattle2','fBattle2','fBattle2','fBattle2','fBattle2','fBattle2','fBattle2','fBattle2'],
        479: ['fdied','fBattle','fBattle','fBattle','fBattle','fBattle','fBattle2','fBattle2','fBattle2','fBattle2',
        'fBattle2','fBattle2','fBattle2','fBattle2','fBattle2','fBattle2','fBattle2','fBattle2','fBattle2','fBattle2'],
        480: ['fdied','Nothing','fBattle','fBattle','fBattle','fBattle','fBattle','fBattle','fBattle','fBattle',
        'fBattle','fBattle','fBattle','fBattle','fBattle','fBattle','fBattle','fBattle','fBattle','fBattle'],
        481: ['fdied', 'fGar', 'fGar', 'fGar', 'Nothing','Nothing','Nothing','Nothing','Nothing','Nothing','Nothing',
        'Nothing','Nothing','Nothing','Nothing','Nothing','Nothing','Nothing','Nothing','Nothing'],
        482: ['fdied', 'fGar', 'fGar', 'fGar', 'Nothing','Nothing','Nothing','Nothing','Nothing','Nothing','Nothing',
        'Nothing','Nothing','Nothing','Nothing','Nothing','Nothing','Nothing','Nothing','Nothing'],
        483: ['fdied', 'fGar', 'fGar', 'fGar', 'Nothing','Nothing','Nothing','Nothing','Nothing','Nothing','Nothing',
        'Nothing','Nothing','Nothing','Nothing','Nothing','Nothing','Nothing','Nothing','Nothing'],
        484: ['fdied', 'fGar', 'fGar', 'fBattle', 'fBattle','fBattle','fBattle','fBattle','fBattle','fBattle','fBattle',
        'fBattle','fBattle','fBattle','fBattle','fBattle','fBattle','fBattle','fBattle','fBattle'],
        485: ['Finish']
    },
    yearEvents: {
        439: ['Battle of Carlion', 'Constantinus is able to muster a significant force in an effort to drive the Irish firmly out of Escavalon. The Irish, led by their cruel chieftian Niall, \n\
        were confident in their strength and met Constantinus on the field of battle outside of Carlion, an old Roman city in southeastern Cambria. Despite being outnumbered, \n\
        the Irish fought the battle to a standstill. Late in the afternoon several young and brave warriors from Salisbury broke through Irish lines and captured their standard single-handed, \n\
        waving it as a rallying cry before being cut down. In the mad rush to recapture their standard, the Irish collectively turned their backs on Constantinus soldiers. \n\
        The center collapsed and the battle quickly became a massacre as the disciplined British forces capitalized on the moment. \n\
        Only a handful of the warriors from Salisbury survived, and as a reward for their bravery, they were granted lands of their own.'],
        440: ['Death of Constantin', 'King Constantin is murdered by one of his own guards.'],
        441: ['Constans made King', 'At the urging of Duke Vortigern of the Gewessi, the High Council chooses Constans, the young son of Constantin, as king. Constans is a young, \n\
        bookish type, however, so he relies on his uncle, Duke Vortigern, for advice.'],
        442: ['Nothing'],
        443: ['Death of Constans', 'Young King Constans is murdered by his Pictish bodyguards. After much debate, Duke Vortigern is selected to be \n\
        the next King of the Britons. The younger brothers of King Constans are taken away to Brittany in secret. \n\
        Also this year, a prelate from the pope, the saintly Germanus, comes to Britain to condemn and combat British \n\
        Christianity. Your grandfather either resists or supports this, depending upon the family’s choice of religion.'],
        444: ['Pict Invasion', 'The Picts stage a massive invasion, with their armies occupying much of the north and bands of raiders penetrating \n\
        all the way into Logres. Rather than risk a great loss, King Vortigern orders his armies to dig in and garrison \n\
        their homes and holdings.'],
        445: ['Nothing'],
        446: ['Battle of Lincoln','King Vortigern realizes that he needs assistance against \n\
        the furious Picts and, in good Roman fashion, hires new barbarians to fight the old barbarians. The Saxon kings Hengest \n\
        and Horsa come from the Continent with their bands of warriors to join Vortigern\’s army. Thus reinforced, the Briton \n\
        army marches north against the Picts. Battle is met near the city of Lincoln, and it is a great victory for the British.'],
        447: ['Saxons Fight the Picts','During this time, King Vortigern spares his own army, \n\
        using the Saxons to drive the Picts out of the north. More Saxons come to Britain, including many families, and Hengest\’s \n\
        daughter Rowena becomes a favorite at Vortigern’s court. News from the Continent is persistent in saying that new \n\
        foes, the Huns, are defeating the German tribes right and left. These savages are thought to be half demon, half horse.'],
        448: ['Nothing'],
        449: ['Nothing'],
        450: ['Voritgern Marries Rowena','Vortigern, impressed with the battle prowess of the \n\
        Saxons and even more so with the talents of Rowena, the daughter of the Saxon chief Hengest, marries her this year \n\
        in a lavish celebration.'],
        451: ['The Huns Attack Rome', 'News comes from the continent that the Huns, led \n\
        by their king, Attila, reached the walls of Rome itself but were unable to storm or besiege it. Some say the Huns were  \n\
        stopped because they lacked siege engines, others that they failed because of the pope’s piety.'],
        452: ['', 'The lands of Britain are relatively quiet. Yet many Britons  \n\
        complain to Vortigern that he is falling away from their noble ways and selling the country to the Saxons. \n\
        Decide whether your grandfather was one of those who complained or not. \n\
        <br><br><a class="button loyaltyCheck" id="dissents">Grandfather Complains</a>&nbsp;<a class="button loyaltyCheck" id="loyal">Grandfather Stays Loyal</a>'],
        453: ['Nothing'],
        454: ['Huns in Chalons','After failing to smash or bluff Rome into submission, \n\
        the Hun army turns to Gaul for pillage and plunder, scouring the land of its wealth, slaughtering as it goes. The commander \n\
        in Gaul, Aetius, sends for help from all who will send it, and Vortigern sends a small contingent. The allied \n\
        army meets the Huns at Chalons, where the Huns are defeated and driven from Europe.'],
        455 : ['Fall of Rome', 'News arrives that Rome, the center of the civilized \n\
        world, has been sacked! The tribe of Germans called the Vandals has done the impossible and brought Rome low. \n\
        The Western Empire is finished.'],
        456: ['Nothing'],
        457: ['', 'The eastern Britons rebel, protesting the policies of \n\
        King Vortigern. The king summons his army, including the Saxons, and marches against them. A great battle ensues at \n\
        Kent, in which the rebels are crushed. Vortigern gives the great lands of the Kantii tribe to his loyal Saxons. Many \n\
        Britons pack up and depart the land, moving to Brittany to escape the rule of Vortigern.'],
        458: ['', 'Many dissident Britons depart from the island, moving \n\
        with their families and possessions to Brittany. Your grandfather, loyal to the Count of Salisbury, remains.'],
        459: ['Nothing'],
        461: ['Nothing'],
        462: ['', 'The rule of King Vortigern has proved unwise and very \n\
        oppressive, often favoring his Saxon mercenaries (and inlaws) over his lawful subjects. Many nobles have talked of \n\
        rebellion, and when Vortigern\’s eldest son (by his first marriage) agrees to lead the nobles, general rebellion breaks \n\
        loose. The Count of Salisbury is among the rebels to fight in the Battle of Cambridge.'],
        463: ['Night of the Long Knives', 'Ostensibly to bring peace to all sides, Vortigern and \n\
        Hengest call a council of all combatants to meet at Stonehenge for a feast of peace. Seeking reconciliation, almost \n\
        all British knights attend. The Saxons prove their worth through great treachery, though, and the majority of the \n\
        nobles of Britain are slain in the “Night of Long Knives.” In the subsequent confusion, a large part of their armies are \n\
        dispersed or slain. The Earl of Salisbury is among the dead.'],
        464: ['', 'In this year, your father marries to procure an heir \n\
        (rather than for love). He is fortunate in that his own father was favored by the Earl of Salisbury, and that there \n\
        are many heiresses now, in the wake of the Night of Long Knives, needing protection. \n\
        He marries a widow with a manor of her own, who, thanks to her former husband, also has a modicum of Glory \n\
        before she remarries (which thus accrues to your father).'],
        465: ['You are born', 'Vortigern, with his Saxons, marches back and forth \n\
        across Britain, extracting tribute and plunder. Many more Britons flee the land. Your father, a young knight, remains \n\
        in his lands, tends to his manor, and waits with his lord. Vortigern escapes from the Saxons and takes refuge in \n\
        Gomeret, attempting to build a fortress. The youthful Merlin makes his appearance and begins his career here.'],
        466: ['Siege of Carlion', 'Aurelius Ambrosius, son of the former King Constantin \n\
        and brother of Constans, lands in Hampshire with an army from Brittany. He carries a great banner with a red \n\
        dragon upon it. All across the land, discontented nobles muster their armies and join him. Vortigern seeks to escape, \n\
        but his Saxon allies go back home to Kent, and many other allies desert him.'],
        467: ['', 'After besieging a portion of Vortigern’s army at Carlion, \n\
        Aurelius Ambrosius marches through the entire island, accepting the submission of those loyal to Vortigern.'],
        468: ['Vortigern Defeated','Aurelius Ambrosius and his army pursue Vortigern and \n\
        besiege him in his new castle on Mount Snowdon. A battle ensues, at which Vortigern is killed and his army scattered. \n\
        Aurelius Ambrosius summons the High Council, and they elect him High King. He takes the title of Pendragon (“high \n\
        dragon” or “head dragon”), derived from his great battle banner.'],
        469: ['', 'Many Saxons come over from the Continent and settle in \n\
        Kent under their king, Hengest. High King Aurelius Ambrosius maintains an unsteady peace with the Saxons, Irish, and \n\
        Picts, despite their raiding. His younger brother, Uther, makes a name for himself as a great warrior in countering these raids \n\
        and leading picked warriors on raids into enemy territory.'],
        470: ['', 'Uther leads more raids into enemy territory.'],
        471: ['', 'Uther leads more raids into enemy territory.'],
        472: ['', 'Uther leads more raids into enemy territory.'],
        473: ['Saxons invade Windsor', 'The Saxons, confident of victory, march into the \n\
        Thames Valley. King Aurelius Ambrosius raises an army to resist, but loses the battle in a major Saxon victory.'],
        474: ['','The Saxons of Kent roam and pillage the land. Only fortified places are safe, and the peasants suffer terribly.'],
        475: ['','The Saxons of Kent roam and pillage the land. Only fortified places are safe, and the peasants suffer terribly.'],
        476: ['','The Saxons of Kent roam and pillage the land. Only fortified places are safe, and the peasants suffer terribly.'],
        477: ['Second Saxon Invasion', 'Another Saxon king, Ælle, lands in southern Britain \n\
        with a large army and takes over the area. Many of the peasants flee, but others are captured and enslaved. Ælle \n\
        renames the land South Saxony, or Sussex. Aurelius Ambrosius marches with his army to oppose \n\
        the foe, who is reinforced at the last moment by the Saxons from Kent. Ambrosius is lucky to escape with his army. The \n\
        Saxons remain.'],
        478: ['', 'For years, Aurelius Ambrosius has been building a fleet \n\
        of ships in the ports of his western lands. In this year, he musters his army and sets sail, sweeping around the southern \n\
        coast, where he destroys the fleets of the Saxons in Britain. Then he sails to the Continent, destroying all the \n\
        hostile shipping as he goes. The British army lands in Frisia, doing great damage to \n\
        the Saxons there, and winning a battle against the barbarians. The Saxons in Britain begin vicious raiding in retaliation.'],
        479: ['Nothing'],
        480: ['King Ambrosius dies', 'An army of Saxons sails up the Port River into Salisbury. \n\
        While planning for the battle, Aurelius Ambrosius is poisoned by a false doctor. Despite his illness, Ambrosius \n\
        marches with Uther against the enemy, whom they meet at Menevia. Ambrosius confronts the foe while Uther takes \n\
        his army around to the Saxons’ rear and cuts them off from their ships, attacking them with great vigor. \n\
        It is a great victory for the British, but Ambrosius is killed in the fighting.'],
        481: ['','The Saxons are relatively quiet during this time, with \n\
        small bands raiding here and there but no armies marching. It is reported that many of their women and children have \n\
        now settled in their lands.'],
        482: ['Nothing'],
        483: ['Nothing'],
        484: ['Uther attacks Eburacum','Another wave of Saxons arrives by boat and settles \n\
        in the land of Diera. Aided by the Saxons in Britain and some rebellious northern Britons, they attack in the land of \n\
        Malahaut. Their army defeats the northern defenders, then lays siege to the city of Eburacum. King Uther raises his \n\
        army and hastens northward to join battle. However, King Uther, anxious to relieve the sorry inhabitants \n\
        of Eburacum, is drawn into a trap and fights a desperate battle, from which he barely escapes with great loss.'],
        485: ['Campaign Year', 'You are knighted this year.']
    },
    battleData: {
        439: {
            name: 'Battle of Carlion',
            survival : ['died gloriously','died'],
            glory: [15,[1,6,0],1],
            passion: ['Hate','Irish',[3,6,0],'Damned Irish! They don\’t fight like real men.',16]
        },
        440: {
            passion: ['Mistrust','Silchester knights',[1,6,6],'I always said those damned Silchester men can\’t be trusted!',11]
        },
        443: {
            passion: ['Hate','Picts)',[1,6,6],'You have to be a fool to trust a Pict!',11]
        },
        446: {
            name: 'Battle of Lincoln',
            survival : ['died gloriously','died','died'],
            glory: [30,[1,6,0],2],
            passion: ['Hate','Picts',[1,6,6],'You have to be a fool to trust a Pict!',11]
        },
        454: {
            name: 'Battle of Chalons',
            survival: ['died gloriously','died gloriously','died','died','died'],
            glory: [45,[1,6,0],2],
            passion: 'none'
        },
        457: {
            name: 'Battle of Kent',
            survival: ['died gloriously','died','died'],
            glory: [30,[1,6,0],2],
            passion: 'none'
        },
        462: {
            name: 'Battle of Cambridge',
            survival: ['died gloriously', 'died', 'died'],
            glory: [30,[1,6,0],1],
            passion: 'none'
        },
        466: {
            name: 'Siege of Carlion',
            survival: ['died gloriously', 'died', 'died'],
            glory: [15,[1,6,0],1],
            passion: 'none'
        },
        467: {
            name: 'Siege of Carlion',
            survival: ['died gloriously', 'died', 'died'],
            glory: [15,[1,6,0],1],
            passion: 'none'
        },
        468: {
            name: 'Fall of Carlion',
            survival: ['died gloriously'],
            glory: [15,[1,3,0],2],
            passion: 'none'
        },
        473: {
            name: 'Battle of Windsor',
            survival: ['died gloriously','died','died','died','died','died','died','died','died','died'],
            glory: [30,[1,6,0],0.5],
            passion: ['Hate','Saxons',[2,6,6],'The Saxons are a plague on our house!',1]
        },
        478: {
            name: 'Saxon Raids on Salisbury',
            survival: ['died gloriously', 'died', 'died', 'died', 'died'],
            glory: [20,[1,6,0],2],
            passion: 'none'
        },
        4781: {
            name: 'Battle of Frisia',
            survival: ['died gloriously', 'died', 'died', 'died', 'died'],
            glory: [15,[1,6,0],2],
            passion: 'none'
        },
        479: {
            name: 'Saxon Raids on Salisbury',
            survival: ['died gloriously', 'died', 'died', 'died', 'died'],
            glory: [20,[1,6,0],2],
            passion: 'none'
        },
        480: {
            name: 'Battle of Salisbury',
            survival: ['died gloriously', 'died', 'died', 'died', 'died'],
            glory: [45,[1,6,0],2],
            passion: 'none'
        },
        484: {
            name: 'Battle of Eburacum',
            survival: ['died gloriously', 'died', 'died', 'died', 'died', 'died', 'died', 'died', 'died',
            'died', 'died', 'died', 'died', 'died', 'died'],
            glory: [30,[1,6,0],0.5],
            passion: 'none'
        }
    },
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
        var roll = pendragonfamily.randomRoll(setLength, 1, -1);
        return dataSet[roll];
    },
    extendedNameGenerator: function () {
        var nameData = pendragonfamily.data.extendedNames;
        var prefix = pendragonfamily.randomSelection(nameData.prefix);
        var mid = pendragonfamily.randomSelection(nameData.mids);
        var suffix = pendragonfamily.randomSelection(nameData.suffix);
        var newName = '';
        if (pendragonfamily.randomRoll(6,1,0)===6) {
            newName=prefix+mid+suffix;
        } else {
            newName=prefix+suffix;
        }
        return newName;
    },
    calculateStartingValues: function () {
        var base = 1000;
        var gain = pendragonfamily.randomRoll(20,1,0)*100;
        var greatGrandF = base+gain;
        var GrandFbase = pendragonfamily.randomRoll(20,2,0);
        var GrandF = (greatGrandF/10)+GrandFbase+1000;
        var yearKnighted = pendragonfamily.currentYear - (Math.floor(GrandFbase/5) +1);
        var gfBirthYear = yearKnighted-pendragonfamily.randomRoll(6,1,0)-20;

        var ggfName = pendragonfamily.randomSelection(pendragonfamily.data.name);
        var gfName = pendragonfamily.randomSelection(pendragonfamily.data.name);
        var fatherName = pendragonfamily.randomSelection(pendragonfamily.data.name);
        
        pendragonfamily.familydata.ggfather = {
            deathyear: yearKnighted-1,
            glory: greatGrandF,
            name : ggfName,
            birthyear : yearKnighted-17-(greatGrandF/100)
        },
        pendragonfamily.familydata.gfather = {
            birthyear: gfBirthYear,
            deathyear: 0,
            knightyear: yearKnighted,
            glory: GrandF,
            loyal: true,
            name: gfName
        };
        pendragonfamily.familydata.father = {
            name: fatherName,
            deathyear: 0,
            birthyear: 439,
            knightyear: 0,
            glory: 0,
            wife: pendragonfamily.randomSelection(pendragonfamily.data.femalename),
            wifeborn: 0
        };
        pendragonfamily.appendTimeline(gfBirthYear, gfName+ ' your grandfather is born', '', true);
        pendragonfamily.appendTimeline(yearKnighted-1, 'Death of your great-grandfather '+ggfName, '', true);
        pendragonfamily.appendTimeline(yearKnighted, gfName + ' knighted by Count Reginald of Salisbury and swears fealty to King Constantin.', '', true);
        pendragonfamily.appendTimeline(439, 'Birth of your father '+fatherName, '', true);
        
        $('#glory .ggf, #glory-ggfather').text(greatGrandF);
        $('#glory .gf, #glory-gfather').text(GrandF);

    },
    appendTimeline: function (year, event, desc, family) {
        var yearText = year.toString();
        var timeline = $('#timeline');
        var famClass= (family)?' class="family"':'';
        timeline.append('<p'+famClass+'>'+yearText+' A. D. -- '+event+'<br><small>'+desc+'</small></p>');
    },
    writeProperNames: function() {
        var ggfname = pendragonfamily.familydata.ggfather.name;
        var gfname = pendragonfamily.familydata.gfather.name;
        var fname = pendragonfamily.familydata.father.name;
        
        $('.name-ggfather').text(ggfname);
        $('.name-gfather').text(gfname);
        $('.name-father').text(fname);
        
    },
    initPendragonFamily: function () {
        pendragonfamily.calculateStartingValues();
        pendragonfamily.writeProperNames();
        //pendragonfamily.createFamilyTree();
        
        $('#advanceYear').on('click', function() {
            pendragonfamily.speedGen = false;
            pendragonfamily.advanceYear();
        });
        $('#speedGenerate').on('click', function() {
            pendragonfamily.speedGen = true;
            $('#speedGenerate').text('Speed Generate Father\'s Life');
            pendragonfamily.advanceYear();
        });
    },
    advanceYear: function () {
        var event = '';
        var yearDesc = [];
        pendragonfamily.currentYear = pendragonfamily.currentYear+1;
        $('#campaignyeardesc').text('YEAR');
        $('#campaignyear').text(pendragonfamily.currentYear);
        $('#currentYearPanel').html('');
        
        if (pendragonfamily.currentYear === 481) {
            $('#currentYearPanel').append('<p>Your father attends the funeral of High King Aurelius Ambrosius who is interred with great ceremony and sorrow\n\
             at Giants\' Dance (Stonehenge). Afterward, the High Council meets and unanimously elects Uther to be the new Pendragon; your father \n\
            is present at the coronation. Your father gains 50 Glory for each event</p>');
            pendragonfamily.familydata.father.glory = pendragonfamily.familydata.father.glory + 100;
            $('#glory .father').text(pendragonfamily.familydata.father.glory);
        }
        if (pendragonfamily.currentYear === 485) {
            if (pendragonfamily.familydata.father.deathyear === 0) {
                var glory = 90*(pendragonfamily.randomRoll(6,1,0));
                var deathRoll = pendragonfamily.randomRoll(20,1,0);
                $('#currentYearPanel').append('<p>King Uther refuses to give up. With the battered remnants \n\
                of his army, he sneaks north under cover of darkness, and falls upon the celebrating Saxons who are drunk \n\
                on both victory and ale. The Saxons are slaughtered and Uther claims a great victory.</p>');
                $('#currentYearPanel').append('<p>Your father fights in the Battle of Mt Damen and dies.  He gains '+glory+' Glory</p>');
                if (deathRoll ===1) {
                    $('#currentYearPanel').append('<p>His death is heroic and gains an additional 1000 Glory</p>'); 
                    glory=glory+1000;
                }
                pendragonfamily.appendTimeline(484, 'Death of your father '+pendragonfamily.familydata.father.name + '.  ', 'Died in the Battle of Mt. Damen', true);


                pendragonfamily.killFather(glory);
            }
        }
        
        if (pendragonfamily.currentYear === 460) {
            pendragonfamily.createFatherGlory();
        } else {
            yearDesc=pendragonfamily.yearEvents[pendragonfamily.currentYear];
            event =  pendragonfamily.randomSelection(pendragonfamily.yearData[pendragonfamily.currentYear]);
            if (yearDesc.length >=2) {
                if (yearDesc[0] !== '') {
                     pendragonfamily.appendTimeline(pendragonfamily.currentYear, yearDesc[0], '', false);
                }
               
                $('#currentYearPanel').append('<p>'+yearDesc[1]+'</p>');
            }
            if (event==="gfDied" && pendragonfamily.familydata.gfather.deathyear === 0) {
                var death = pendragonfamily.getDeath('male');
                $('#currentYearPanel').append('<p>Your grandfather died this year: '+death+'</p>');
                pendragonfamily.appendTimeline(pendragonfamily.currentYear, 'Death of your grandfather '+pendragonfamily.familydata.gfather.name + '.  ', death, true);
                pendragonfamily.killGrandfather(0);
            }
            if (event==="fdied") {
                var death = pendragonfamily.getDeath('male');
                $('#currentYearPanel').append('<p>Your father died this year: '+death+'</p>');
                pendragonfamily.appendTimeline(pendragonfamily.currentYear, 'Death of your father '+pendragonfamily.familydata.father.name + '.  ', death, true);
                pendragonfamily.killFather(0);
            }
            if (event==="Nothing") {
                $('#currentYearPanel').append('<p>Nothing significant happened to your family this year.</p>');
            }
            if (event==="gfBattle") {
                if (pendragonfamily.familydata.gfather.deathyear ===0) {
                    pendragonfamily.computeBattle(pendragonfamily.currentYear, 'grand-father', pendragonfamily.familydata.gfather.name);
                } else {
                    $('#currentYearPanel').append('<p>Nothing significant happened to your family this year.</p>');
                }
            }
            if (event==="fBattle") {
                pendragonfamily.computeBattle(pendragonfamily.currentYear, 'father', pendragonfamily.familydata.father.name);
            }
            if (event==="fBattle2") {
                pendragonfamily.computeBattle(4781, 'father', pendragonfamily.familydata.father.name);
            }
            if (event==="gfGarrisonDiedPict") {
                $('#currentYearPanel').append('<p>Your grandfather served garrison duty and was killed by Pictish raiders.  He gained 20 Glory.</p>');
                pendragonfamily.appendTimeline(pendragonfamily.currentYear, 'Death of '+pendragonfamily.familydata.gfather.name, 'Died in a Pict raid', true);
                pendragonfamily.killGrandfather(20);
            }
            if (event==="gfGarrisonSurvivedPict") {

                $('#currentYearPanel').append('<p>Your grandfather served garrison duty and survived a Pictish raid.  He gained 10 Glory.</p>');
                pendragonfamily.familydata.gfather.glory = pendragonfamily.familydata.gfather.glory + 10;
                $('#glory .gf').text(pendragonfamily.familydata.gfather.glory);
            }
            
            if (event ==="gfGarrisonDied") {
                $('#currentYearPanel').append('<p>Your grandfather served garrison duty and was killed by raiders. He gained 20 Glory.</p>');
                pendragonfamily.appendTimeline(pendragonfamily.currentYear, 'Death of '+pendragonfamily.familydata.gfather.name, 'Killed by raiders', true);
                pendragonfamily.killGrandfather(20);
            }
            if (event==="gfGarrisonSurvived") {

                $('#currentYearPanel').append('<p>Your grandfather served garrison duty and survived a raid.  He gained 20 Glory.</p>');
                pendragonfamily.familydata.gfather.glory = pendragonfamily.familydata.gfather.glory + 20;
                $('#glory .gf').text(pendragonfamily.familydata.gfather.glory);

            }
            if (event==="gfConstanSurvived" || event==="gfConstanDied") {
                var passionData = pendragonfamily.battleData[pendragonfamily.currentYear].passion;
                var passionRoll = pendragonfamily.randomRoll(20,1,0);
                var kingName = (pendragonfamily.currentYear===443)?'Constans':'Constantin';

                $('#currentYearPanel').append('<p>Your grandfather was present when '+kingName+' is murdered.</p>');

                if (event==="gfConstanDied") {
                    $('#currentYearPanel').append('<p>He died gloriously trying to protect his king.  He gains 1000 glory.</p>');
                    pendragonfamily.appendTimeline(pendragonfamily.currentYear,pendragonfamily.familydata.gfather.name+' dies protecting King '+kingName,'', true);
                    pendragonfamily.killGrandfather(1000);
                } else {
                    $('#currentYearPanel').append('<p>He is unable to protect his king.</p>');
                    pendragonfamily.appendTimeline(pendragonfamily.currentYear,pendragonfamily.familydata.gfather.name+' witnesses the murder of ' +kingName,'', true);
                }
                if (passionRoll >= 11) {
                    pendragonfamily.createNewPassion(passionData,8);
                }
            }
            if (event === 'vrWeddingPreg'||event==="vrWedding") {
                $('#currentYearPanel').append('<p>Your grandfather is in attendence at the wedding of King Vortigern and Rowena.  He gains 5 Glory.</p>');
                pendragonfamily.familydata.gfather.glory = pendragonfamily.familydata.gfather.glory + 5;
                pendragonfamily.appendTimeline(pendragonfamily.currentYear,pendragonfamily.familydata.gfather.name+' attends the wedding of King Vortigern and Rowena','', true);
                if (event === 'vrWeddingPreg') {
                    $('#currentYearPanel').append('<p>At the wedding he notices Rowena is pregnant. Quite a scandal and 5 more Glory.</p>');
                    pendragonfamily.familydata.gfather.glory = pendragonfamily.familydata.gfather.glory + 5;
                }
            }
            if (event==="gfLoyaltyCheck"){
                $('#dissents').on('click', function() {
                    $('.loyaltyCheck').hide();
                    $('#currentYearPanel').append('<p>Your grandfather complains to the King.</p>');
                    pendragonfamily.familydata.gfather.loyal = false;
                });
                $('#loyal').on('click', function() {
                    $('.loyaltyCheck').hide();
                    $('#currentYearPanel').append('<p>Your grandfather stays loyal to the King.</p>');
                });
                
                if (pendragonfamily.randomRoll(20,1,0)===1) {
                    var death = pendragonfamily.getDeath('male');
                    $('#currentYearPanel').append('<p>Your grandfather died this year: '+death+'</p>');
                    pendragonfamily.appendTimeline(pendragonfamily.currentYear, 'Death of your grandfather '+pendragonfamily.familydata.gfather.name + '.  ',death, true);
                    pendragonfamily.killGrandfather(0);
                }
            }
            if (event==="gfLoyaltyCheck2") {
                if (pendragonfamily.randomRoll(20,1,0)===1) {
                    var death = pendragonfamily.getDeath('male');
                    $('#currentYearPanel').append('<p>Your grandfather died this year: '+death+'</p>');
                    pendragonfamily.appendTimeline(pendragonfamily.currentYear, 'Death of your grandfather '+pendragonfamily.familydata.gfather.name + '.  ', death, true);
                    pendragonfamily.killGrandfather(0);
                } else {
                    $('#currentYearPanel').append('<p>King Vortigern sends percieved trouble makers to the Battle of Chalons.</p>');
                    if (pendragonfamily.familydata.gfather.loyal) {
                        $('#currentYearPanel').append('<p>As a loyalist, your grandfather remains in Briton, serving in the garrison and having an uneventful year.</p>');
                    } else {
                        $('#currentYearPanel').append('<p>As one who complained, your grand-father is sent to Chalons.  The survivors, all of whom were knights \n\
                        dissatisfied with Vortigern\’s policies, return to Britain with great glory; Vortigern welcomes them with honeyed words, but a bitter heart.</p>');
                        pendragonfamily.computeBattle(pendragonfamily.currentYear, 'grand-father', pendragonfamily.familydata.gfather.name);
                    }                    
                }

            }
            if (event==="longKnives") {
                if (pendragonfamily.familydata.gfather.deathyear === 0) {
                    var passionScore = pendragonfamily.randomRoll(6,3,6);
                    $('#currentYearPanel').append('<p>Your grandfather along with your liege, the Earl of Salisbury, and many others is murdered and burried at Stonehenge.</p>');
                    pendragonfamily.appendTimeline(pendragonfamily.currentYear, 'Death of your grandfather '+pendragonfamily.familydata.gfather.name + '.','Murdered by Saxons during the Night of the Long Knives.', true);
                    pendragonfamily.killGrandfather(0);
                    $('#currentYearPanel').append('<p>Your family gains a new passion.  Hate (Saxons) '+passionScore+'</p>');
                    $('#passions tbody').append('<tr><td>Hate (Saxons)</td><td>'+passionScore+'</td></tr>');
                } else {
                    $('#currentYearPanel').append('<p>Though a turbulent time, your father does not become emeshed in drama or violence this year.  His liege, the Earl of Salisbury is among the murdered.</p>');
                }
            }
            if (event==="fmarried") {
                var gloryArray = [25,25,25,25,50,50,50,100,100,100,100,100,100,100,100,100,100,200,200,350];
                var gloryValue = pendragonfamily.randomSelection(gloryArray);
                var motherName = pendragonfamily.familydata.father.wife;
                pendragonfamily.familydata.father.glory = pendragonfamily.familydata.father.glory + gloryValue;
                $('#glory .father').text(pendragonfamily.familydata.father.glory);
                pendragonfamily.appendTimeline(pendragonfamily.currentYear, pendragonfamily.familydata.father.name + ' maries '+motherName,'', true);
                $('#currentYearPanel').append('<p>Your father marries '+motherName+' and gains '+gloryValue+' Glory</p>');
            }
            if (event==="born") {
                $('#currentYearPanel').append('<p>You are born this year.</p>');
            }
            if (event==="raid") {
                var gloryArray = [0,25,25,25,25,50,50,50,50,50,100,100,100,100,100,200,200,200,200,200];
                var gloryValue = pendragonfamily.randomSelection(gloryArray);
                if (gloryValue===0) {
                    var death = pendragonfamily.getDeath('male');
                    $('#currentYearPanel').append('<p>Your father died this year: '+death+'</p>');
                    pendragonfamily.appendTimeline(pendragonfamily.currentYear, 'Death of your father '+pendragonfamily.familydata.father.name + '.  ', death, true);
                    pendragonfamily.killFather(0);
                } else {
                    $('#currentYearPanel').append('<p>Your father joins Uther in his raids and gains '+gloryValue+' Glory.</p>');
                    pendragonfamily.familydata.father.glory = pendragonfamily.familydata.father.glory + gloryValue;
                    $('#glory .father').text(pendragonfamily.familydata.father.glory);
                }
            }
            if (event==="fGar" || event==="fGarDied") {
                $('#currentYearPanel').append('<p>Your father mans a garrison and gains 25 Glory.</p>');
                pendragonfamily.familydata.father.glory = pendragonfamily.familydata.father.glory + 25;
                $('#glory .father').text(pendragonfamily.familydata.father.glory);
                if (event==="fGarDied") {
                    $('#currentYearPanel').append('<p>He dies in battle.</p>');
                    pendragonfamily.appendTimeline(pendragonfamily.currentYear, 'Death of your father '+pendragonfamily.familydata.father.name + '.  ', 'Killed defending his homeland from Saxons.', true);
                    pendragonfamily.killFather(0);
                }
            }
            if (event==="Finish") {
                $('#advanceYear, #speedGenerate').hide();
                pendragonfamily.createManor();
                pendragonfamily.createExtendedFamily();
            } else {
                //test only, remove for loops
                if (pendragonfamily.speedGen) {
                    pendragonfamily.advanceYear();
                }
                
            }
        }
        
    },
    killGrandfather: function(glory) {
        pendragonfamily.familydata.gfather.glory = pendragonfamily.familydata.gfather.glory + glory;
        $('#glory .gf').text(pendragonfamily.familydata.gfather.glory);
        pendragonfamily.familydata.gfather.deathyear = pendragonfamily.currentYear;
        if (pendragonfamily.currentYear < 459) {
            pendragonfamily.currentYear = 459;
        }
    },
    killFather: function (glory) {
        pendragonfamily.familydata.father.glory = pendragonfamily.familydata.father.glory + glory;
        $('#glory .father').text(pendragonfamily.familydata.father.glory);
        $('#glory .you').text(Math.floor(pendragonfamily.familydata.father.glory/10));
        pendragonfamily.familydata.father.deathyear = pendragonfamily.currentYear;
        
        pendragonfamily.currentYear = 484;
    },
    getDeath: function(gender) {
        var death = pendragonfamily.randomSelection(pendragonfamily.data.death[gender]);
        return death;
    },
    computeBattle: function (year, person, name) {
        var battle = pendragonfamily.battleData[year];
        var survivalRoll = pendragonfamily.randomRoll(20,1,0);
        var gloryMod = pendragonfamily.randomRoll(battle.glory[1][1],battle.glory[1][0],battle.glory[1][2]);
        var gloryTotal = battle.glory[0]*gloryMod*battle.glory[2];
        var passionRoll = pendragonfamily.randomRoll(20,1,0);
        var passionData = battle.passion;
        var desc = "";
        var subdesc = "";
        var year = pendragonfamily.currentYear;
        //['Hate','Irish',[3,6],'Damned Irish! They don\’t fight like real men.',16]
        
        var survival = (survivalRoll > battle.survival.length)? 'fought': battle.survival[survivalRoll-1];
        
        desc = name + ' '+survival+ ' in the '+battle.name;
        if (survival === 'died gloriously') { gloryTotal = gloryTotal+1000; }
        $('#currentYearPanel').append('<p>Your '+person+' '+ survival +' in the '+battle.name+'.</p>');
        $('#currentYearPanel').append('<p>His actions earn him '+gloryTotal+' glory.</p>');
        if (passionData !== 'none') {
            if (passionRoll >= passionData[4]) {
                pendragonfamily.createNewPassion(passionData,0);
                subdesc='"'+passionData[3]+'" -- <i>'+name+'</i>';
            }
        }
        
        if (survival !== 'fought') {
            if (person === 'grand-father'){
                pendragonfamily.familydata.gfather.deathyear = year;
                pendragonfamily.appendTimeline(pendragonfamily.currentYear, 'Death of '+pendragonfamily.familydata.gfather.name, 'Died in ' + battle.name, true);
                pendragonfamily.killGrandfather(gloryTotal);
            } else {
                pendragonfamily.familydata.father.deathyear = year;
                pendragonfamily.appendTimeline(pendragonfamily.currentYear, 'Death of '+pendragonfamily.familydata.father.name, 'Died in ' + battle.name, true);   
                pendragonfamily.killFather(gloryTotal);
            }
        } else {
            pendragonfamily.appendTimeline(year, desc, subdesc, true);
        }      
        
    },
    createNewPassion: function (passionData, mod) {
        var passionScore = pendragonfamily.randomRoll(passionData[2][0],passionData[2][1],mod);
        $('#currentYearPanel').append('<p>Your family gains a new passion.  '+passionData[0]+' ('+passionData[1]+') '+passionScore+'</p>');
        $('#passions tbody').append('<tr><td>'+passionData[0]+' ('+passionData[1]+')</td><td>'+passionScore+'</td></tr>');
        
    },
    createFatherGlory: function () {
        var gfatherGlory = pendragonfamily.familydata.gfather.glory;
        var fatherGlory = Math.floor(gfatherGlory/10)+1000;
        var eventRoll = pendragonfamily.randomRoll(20,1,0);
        pendragonfamily.familydata.father.glory = fatherGlory;
        
        $('#currentYearPanel').append('<p>Your father is knighted this year and begins with '+fatherGlory+' Glory.</p>');
        $('#glory .father').text(fatherGlory);
        pendragonfamily.appendTimeline(460, pendragonfamily.familydata.father.name + ' knighted.','', true);
        
        if (eventRoll === 1 && pendragonfamily.familydata.gfather.deathyear === 0) {
            var death = pendragonfamily.getDeath('male');
            
            pendragonfamily.familydata.ggfather.deathyear = 460;
            $('#currentYearPanel').append('<p>Your grandfather died this year: '+death+'</p>');
            pendragonfamily.appendTimeline(pendragonfamily.currentYear, 'Death of your grandfather '+pendragonfamily.familydata.gfather.name + '.  ', death, true);
        } else {
            var fatherdesc = (pendragonfamily.familydata.gfather.deathyear === 0)? 'father and grandfather serve': 'father serves';
            $('#currentYearPanel').append('<p>Your '+fatherdesc+' in the garrison.  The garrison sees little combat.</p>');
        }
        
    },
    createManor: function () {
        var oldKnights = (pendragonfamily.randomRoll(6,1,-5) >0)? 1:0;
        var midKnightRoll = pendragonfamily.randomRoll(6,1,-2);
        var midKnight = (midKnightRoll>0)? midKnightRoll: 0;
        var youngKnight = pendragonfamily.randomRoll(6,1,+2);
        var lineageMen = pendragonfamily.randomRoll(6,3,+5);
        var levy = pendragonfamily.randomRoll(20,5,0);
        var manor = pendragonfamily.randomSelection(pendragonfamily.data.manors);
        var totalKnights = oldKnights+midKnight+youngKnight;
        pendragonfamily.familydata.manor = {
            name: manor,
            oldKnights: oldKnights,
            midKnights: midKnight,
            youngKnights: youngKnight,
            lineageFighters: lineageMen,
            levy: levy
        };
        $('#manorData').append('<h3>'+manor+'</h3>');
        $('#manorData').append('<p>Your manor has an army of '+oldKnights+' old knights, '+midKnight+
                ' middle aged knights and '+youngKnight+' young knights for a total of '+totalKnights+
                ' fighting knights (detailed in family).  You can also call on '+lineageMen+
                ' able bodied family members and a levy of '+levy+' men.</p>');  

    },
    createExtendedFamily: function () {
        var oldKnights = pendragonfamily.familydata.manor.oldKnights;
        var midKnight = pendragonfamily.familydata.manor.midKnights;
        var youngKnight = pendragonfamily.familydata.manor.youngKnights;

        var fathersibscount = pendragonfamily.randomRoll(6,1,0);
        var mothersibscount = pendragonfamily.randomRoll(6,1,0);
        var yoursibscount = pendragonfamily.randomRoll(6,1,0);
        var fathersibs =  pendragonfamily.createGenderArray(fathersibscount), 
                mothersibs = pendragonfamily.createGenderArray(mothersibscount), 
                yoursibs =  pendragonfamily.createGenderArray(yoursibscount),
                uncleBornArray = pendragonfamily.computeUncleAuntBornSlots(),
                brotherBornArray = pendragonfamily.computeBrotherSisterBornSlots();
        var motherRemarried = (pendragonfamily.randomRoll(10,1,0)>10);
        
        //too many bros causes problems
        if (yoursibs[0]>2) { yoursibs[0]=2; }
         
        $('#manorData').append('<p>Your father had '+fathersibs[0]+' brothers and '+fathersibs[1]+' sisters.\n\
          Your mother had '+mothersibs[0]+' brothers and '+mothersibs[1]+' sisters.  You have '+yoursibs[0]+' brothers and '+yoursibs[1]+' sisters.</p>');
        
        if (motherRemarried) {
            pendragonfamily.createStepDad();
            $('#manorData').append('<p>After your father\'s death your mother remarried.</p>');
        }

        //this guy is easy, he's the only family member alive from this generation
        if (oldKnights ===1) {
            var relation = (pendragonfamily.randomRoll(20,1,0)>15)?"Grandfather's Brother":"Grandfather's Illegitimate Brother";
            var nameBase = pendragonfamily.randomSelection(pendragonfamily.data.name);
            var shortName = 'Sir ' + nameBase;
            var title = pendragonfamily.randomSelection(pendragonfamily.data.epithets);
            var name = shortName+' '+ title;
            var oldKbirthYear = pendragonfamily.familydata.gfather.birthyear + pendragonfamily.randomRoll(20,1,0);
            var bastard = (relation==="Grandfather's Illegitimate Brother");
            var styleClasses = (bastard)? 'bastard knight':'knight';
            var id = '2.'+oldKbirthYear+'.'+nameBase;
            if (oldKbirthYear > 430) {oldKbirthYear=430;}
            
            $('#family-tree .secondgen').append('<li><div>'+pendragonfamily.createTreeMarkup(
                'gfathersib-1',
                shortName,
                title,
                oldKbirthYear,
                0,
                'male',
                styleClasses,
                '',
                0,
                0
            )+'</div></li>');
            pendragonfamily.familydata.extendedFamily.knights.push([name,relation,485-oldKbirthYear,1]);
            
        }

        pendragonfamily.createFamilyTree();
        pendragonfamily.drawOutTreeBoxesLegitimate(fathersibs, 'father', uncleBornArray, pendragonfamily.familydata.father.birthyear);
        pendragonfamily.drawOutTreeBoxesLegitimate(mothersibs, 'mother', [], pendragonfamily.familydata.father.wifeborn);
        pendragonfamily.drawOutTreeBoxesLegitimate(yoursibs, 'you', brotherBornArray, 465);
        
        pendragonfamily.selectMidKnights(midKnight);
        pendragonfamily.selectYoungKnights(youngKnight);
        
        pendragonfamily.familydata.extendedFamily.knights.sort(pendragonfamily.sortFamilyMembers);
        pendragonfamily.drawFamilyTable(pendragonfamily.familydata.extendedFamily.knights, $('#family tbody.knights'));
        
        pendragonfamily.drawOtherRelativeTable();
        
        //copy over to mother tree
        pendragonfamily.copytree();
    },
    copytree: function () {
        var originalTree = $('.yourgen').first().html();
        $('.mother').next('ul.yourgen').html(originalTree);
        $('.firstgen').show();
        
        $('.mothertree').hide();
        $('#showMotherTree').on('click', function (e) {
            e.preventDefault();
            $('.mothertree').show();
            $('.firstgen:visible').hide();
        });
        $('#showFatherTree').on('click', function (e) {
            e.preventDefault();
            $('.mothertree:visible').hide();
            $('.firstgen').show();
        });
    },
    createFamilyTree: function() {
        var greatGrandFather = pendragonfamily.familydata.ggfather;
        var grandFather = pendragonfamily.familydata.gfather;
        var father = pendragonfamily.familydata.father;
        var ggrandmaname = pendragonfamily.randomSelection(pendragonfamily.data.femalename); 
        var ggrandmaDeath = pendragonfamily.randomRoll(6,1,0)-2+greatGrandFather.deathyear;
        var ggrandmaBirth = pendragonfamily.familydata.ggfather.birthyear+pendragonfamily.randomRoll(6,2,-6);
        var grandmaname = pendragonfamily.randomSelection(pendragonfamily.data.femalename);
        var grandmaDeath = pendragonfamily.currentYear+pendragonfamily.randomRoll(6,1,0)-2;
        var grandmaBirth = pendragonfamily.familydata.gfather.birthyear+pendragonfamily.randomRoll(6,2,-6);
        var motherBorn = 465-16-pendragonfamily.randomRoll(2,6,0);
        var motherAlive = (pendragonfamily.randomRoll(20,1,0)<15);
        var motherDeath = (motherAlive)? 0 : 485-pendragonfamily.randomRoll(6,1,0);
        var grandfatherTitle = pendragonfamily.randomSelection(pendragonfamily.data.epithets);
        var fatherTitle = pendragonfamily.randomSelection(pendragonfamily.data.epithets);
        var ggrandfatherTitle = (greatGrandFather.glory>1499)?pendragonfamily.randomSelection(pendragonfamily.data.epithets):'';
        
        if (grandFather.glory < 1500 && grandFather.deathyear < 450) {
            grandfatherTitle='';
        }
        if (father.glory < 1500 && father.deathyear < 473) {
            fatherTitle='';
        }       
        $('#family-tree .greatgrandfather').prepend(pendragonfamily.createTreeMarkup(
            'greatgrandfather',
            'Sir ' + greatGrandFather.name,
            ggrandfatherTitle,
            greatGrandFather.birthyear,
            greatGrandFather.deathyear,
            'male',
            'knight',
            ggrandmaname,
            ggrandmaBirth,
            ggrandmaDeath
        ));
        $('#family-tree .grandfather').prepend(pendragonfamily.createTreeMarkup(
            'grandfather',
            'Sir ' + grandFather.name,
            grandfatherTitle,
            grandFather.birthyear,
            grandFather.deathyear,
            'male',
            'knight',
            grandmaname,
            grandmaBirth,
            grandmaDeath
        ));
        $('#family-tree .father').prepend(pendragonfamily.createTreeMarkup(
            'father',
            'Sir ' + father.name,
            fatherTitle,
            father.birthyear,
            father.deathyear,
            'male',
            'knight',
            pendragonfamily.familydata.father.wife,
            motherBorn,
            motherDeath
        ));
        $('#family-tree .mothertree .mother').prepend(pendragonfamily.createTreeMarkup(
            'mother',
            pendragonfamily.familydata.father.wife,
            fatherTitle,
            motherBorn,
            motherDeath,
            'female',
            '',
            father.name,
            father.birthyear,
            father.deathyear
        ));
        pendragonfamily.familydata.father.wifeborn = motherBorn;
        
    },
    drawOutTreeBoxesLegitimate: function(sibs, target, dates, anchoryear) {
        var brotherCount = sibs[0];
        var sisterCount = sibs[1];
        var totalSibs = brotherCount+sisterCount;
        var treeParent = $('#family-tree .'+target).first().closest('li');
        var sibArray = [];
        var nameArray = [];

        for (var i=0; i<totalSibs; i++) {
            var gender = (brotherCount > 0)?'male':'female';
            var maleName = (pendragonfamily.randomRoll(20,1,0)<15)? pendragonfamily.randomSelection(pendragonfamily.data.name) : pendragonfamily.extendedNameGenerator();
            var femaleName = pendragonfamily.randomSelection(pendragonfamily.data.femalename);
            var name = '', spouseName = '';
            var id= '';
            var isMarried = (target==='you')?false:(pendragonfamily.randomRoll(20,1,0)>10);
            var isAlive = (target==='you')?true:(pendragonfamily.randomRoll(20,1,0)<15);
            var birthYear = 0, deathYear = 0;
            var spouseName = '', spouseBirth=0;
            var template;
            
            if ($.inArray(maleName, nameArray) !== -1) {
                maleName =  pendragonfamily.extendedNameGenerator();
                nameArray.push(maleName);
            }
            
            if (gender==='male') {
                brotherCount--;
                name=maleName;
                spouseName=femaleName;
            } else {
                name=femaleName;
                spouseName=maleName;
            }
            if (dates.length !== 0) {
                birthYear = pendragonfamily.randomSelection(dates);
                dates.splice(dates.indexOf(birthYear), 1 ); 
            } else {
                if (target === 'you') {
                    if (gender==='male') {
                        birthYear = 465+pendragonfamily.randomRoll(6,1,-1);
                    } else {
                        birthYear = 464+pendragonfamily.randomRoll(8,1,-1);
                    }
                } else {
                    if (gender==='male') {
                        birthYear = 439+pendragonfamily.randomRoll(10,1,0);
                    } else {
                        var span = pendragonfamily.familydata.gfather.deathyear-pendragonfamily.familydata.gfather.birthyear;
                        birthYear = pendragonfamily.familydata.gfather.birthyear+20+pendragonfamily.randomRoll(span,1,0);
                    }                    
                }
                
            }
            if (!isAlive) {
                deathYear = 485-pendragonfamily.randomRoll(10,1,0);
            }
            if (isMarried) {
                var youngBride = (pendragonfamily.randomRoll(4,1,0)===1);
                var spouseAge = pendragonfamily.randomRoll(14,1,0);
                
                if (youngBride) {
                    spouseAge=(spouseAge*2)+16;
                } else {
                    spouseAge=spouseAge+16;
                }
                spouseBirth = 485-spouseAge;
            } else {
                spouseName = '';
            }
            
            id = '2.'+birthYear+'.'+name;
            template = {
                name: name,
                id: id,
                dad: target,
                birthyear: birthYear,
                deathyear: deathYear,
                gender: gender,
                bastard: false, //cannot be bastard
                spouse: {
                    name: spouseName,
                    birthyear: spouseBirth,
                    deathyear: 0 //if wife, cannot be dead wife
                }
            };
            sibArray.push(template);
            
        }
        sibArray.sort(pendragonfamily.sortByBirthYear);
        for (var i=0; i<sibArray.length; i++) {
            var familyMember = sibArray[i];
            var markup = pendragonfamily.createTreeMarkup(
                target+'sib-'+i,
                familyMember.name,
                '',
                familyMember.birthyear,
                familyMember.deathyear,
                familyMember.gender,
                familyMember.name,
                familyMember.spouse.name,
                familyMember.spouse.birthyear,
                0
            );
            if (familyMember.spouse.name!=='') {
                markup = '<li><div class="married">'+markup+'</div></li>';
            }  else {
                markup = '<li><div>'+markup+'</div></li>';
            }
            if (anchoryear<=familyMember.birthyear) {
                treeParent.parent('ul').append(markup);
            } else {
                treeParent.before(markup);
            }
            console.log('added ' +familyMember.gender+ ' relative of '+target+' to the tree: ' + familyMember.name);
            if (familyMember.spouse.name !== '') {
                console.log('added spouse relative of' + familyMember.name + ': '+ familyMember.spouse.name);
            }
        }
    },
    selectMidKnights: function (count) {

        var knightCount = count;
        for (var i = 0; i < knightCount; i++) {
            var isPaternal = (pendragonfamily.randomRoll(20, 1, 0) <= 15);
            var isBastard = (pendragonfamily.randomRoll(10, 1, 0) <= 2);
            var fatherBros = $('.thirdgen .male').not('.knight, .yourgen .male, .father');
            var motherBros = $('.motherthirdgen .male').not('.knight, .you');
            var nameBase = pendragonfamily.randomSelection(pendragonfamily.data.name);
            
            var shortName = 'Sir ' + nameBase;
            var birthYear = (isBastard) ? 431 + pendragonfamily.randomRoll(18, 1, 0) : 439 + pendragonfamily.randomRoll(10, 1, 0);
            var selection=(isPaternal)?fatherBros:motherBros;
            var knightTitle = (pendragonfamily.randomRoll(6,1,0)>2)? pendragonfamily.randomSelection(pendragonfamily.data.epithets): '';
            var name = 'Sir ' + nameBase + ' ' + knightTitle;
            var relation = (isPaternal)? 'Father\'s ': 'Mother\'s ';
            var weight = (isPaternal)? 1000: 2000;
            
            if (isBastard || selection.length === 0) { //no viable options, create new member
                //look for sisters first
                var fatherSis = $('.thirdgen .female').not('.mother, .married');
                var motherSis = $('.motherthirdgen .male').not('.mother, .married');
                var sisterSelection =(isPaternal)?fatherSis:motherSis; 
                var bastard = (isBastard) ? ' bastard' : '';
                var markup = pendragonfamily.createTreeMarkup(
                        'parentsib-newknight-' + i,
                        shortName,
                        knightTitle,
                        birthYear,
                        0,
                        'male',
                        'knight' + bastard,
                        '',
                        0,
                        0
                    );
                if (isBastard) {
                    relation = relation + 'illegitimate brother';
                } else {
                    relation = relation + ' brother';
                }
                if (sisterSelection === 0 || isBastard) {
                    
                    $('#family-tree .thirdgen').append('<li><div>' + markup + '</div></li>');
                    console.log('created new bro ' + name);
                } else { //add a husband
                    var sister = sisterSelection.random();
                    sister.addClass('married');
                    sister.after(markup);
                    if (sister.closest('div').hasClass('father')) {
                        relation = 'Your step-father';
                        console.log('created step father ' + name);
                    } else {
                        relation = 'Your aunt'+sister.find('.famName').text()+'\'s husband';
                        console.log('created sister hubby ' + name);
                    }
                    
                }     
                pendragonfamily.familydata.extendedFamily.knights.push([name,relation,485-birthYear,weight+birthYear]);
                
            } else {
                var marked = selection.random();
                relation = relation + ' brother';
                //TODO some sister husbands are in here

                marked.addClass('knight');
                marked.find('.knightTitle').text(knightTitle);
                marked.find('.famName').prepend('Sir ');
                
                pendragonfamily.storeFamilyMember(marked,relation, true);
                console.log('knighted ' + marked.find('.famName').text());
            }
        }
    },
    selectYoungKnights: function (count) {

        var knightCount = count;
        for (var i = 0; i < knightCount; i++) {
            var relationRoll = pendragonfamily.randomRoll(14, 1, 0); 
            var isBastard = (relationRoll>=12);
            var isPaternal = (relationRoll>2&&relationRoll<9);
            var isMaternal = (relationRoll===9||relationRoll===10);
            var isSisterHusb = (relationRoll===11);
            var isYoungerBro = (relationRoll===1||relationRoll===2);
            var fatherBros = $('.thirdgen > li > div').not('.father');
            var motherBros = $('.motherthirdgen > li > div').not('.mother');
            var nameBase = pendragonfamily.randomSelection(pendragonfamily.data.name);
            var name = 'Sir ' + nameBase;
            var shortName = name;
            var birthYear = (isYoungerBro) ? 465 + pendragonfamily.randomRoll(5, 1, 0) : 465 - pendragonfamily.randomRoll(10, 1, 0);
            var yourBros=$('.yourgen .male').not('.you, .knight');
            var yourSisters=$('.yourgen .female');
            var knightTitle = (pendragonfamily.randomRoll(6,1,0)>5)? pendragonfamily.randomSelection(pendragonfamily.data.epithets): '';
            var nameArray = [];
            
            if ($.inArray(nameBase, nameArray) !== -1) {
                nameBase =  pendragonfamily.extendedNameGenerator();
                nameArray.push(nameBase);
                name = 'Sir ' + nameBase; 
            }
            
            if (isBastard || (isYoungerBro && yourBros.length === 0)) { //no viable options, create new member
                
                var bastard = (isBastard) ? ' bastard' : '';
                var relation = (isBastard) ? 'Your illegitimate brother' : 'Your younger brother';
                var markup = '<li><div>' + pendragonfamily.createTreeMarkup(
                    'bro-newknight-' + i,
                    shortName,
                    knightTitle,
                    birthYear,
                    0,
                    'male',
                    'knight' + bastard,
                    '',
                    0,
                    0
                ) + '</div></li>';
                if (birthYear < 465) {
                    $('#family-tree .yourgen').first().prepend(markup);
                } else {
                    $('#family-tree .yourgen').first().append(markup);
                }
                pendragonfamily.familydata.extendedFamily.knights.push([shortName + ' '+knightTitle,relation,485-birthYear, 3000+birthYear]);
                console.log('created bastard ' + shortName);
            } else if (isYoungerBro) {
                var marked = yourBros.random();
                marked.addClass('knight');
                marked.find('.knightTitle').text(knightTitle);
                marked.find('.famName').prepend('Sir ');
                
                pendragonfamily.storeFamilyMember(marked,'Your younger brother', true);
                console.log('knighted ' + marked.text());

            } else if (isSisterHusb) {
                var marked = yourSisters.not('.married').random();
                var newMarkup = pendragonfamily.createTreeMarkup(
                    'sishub-newknight-' + i,
                    shortName,
                    knightTitle,
                    birthYear,
                    0,
                    'male',
                    'knight',
                    '',
                    0,
                    0
                );
                console.log(marked.length);
                if (marked.length === 0) {
                    var sisterName = pendragonfamily.randomSelection(pendragonfamily.data.femalename);
                    newMarkup = '<li><div>' + pendragonfamily.createTreeMarkup(
                        'newsister-' + i,
                        sisterName,
                        knightTitle,
                        465+pendragonfamily.randomRoll(3,1,0),
                        0,
                        'female',
                        'married',
                        shortName,
                        birthYear,
                        0
                    )+ '</div></li>';
                    pendragonfamily.familydata.extendedFamily.knights.push([shortName + ' '+knightTitle,'Your sister ' + sisterName + '\'s husband',485-birthYear,4000+birthYear]);
                    $('#family-tree .yourgen').first().append(markup);
                    console.log('created sis AND hubby ' + shortName);
                } else {
                    marked.addClass('married');
                    marked.closest('div').append(newMarkup); 
                    pendragonfamily.familydata.extendedFamily.knights.push([shortName + ' '+knightTitle,'Your sister ' + marked.find('.famName').text() + '\'s husband',485-birthYear,4000+birthYear]);
                    console.log('created sis hubby ' + shortName);
                }
                
            } else if (isPaternal || isMaternal) {
                var randomUncle = (isPaternal)? fatherBros.random() : motherBros.random();
                var wrapper = randomUncle.closest('li');
                var uncleName = randomUncle.find('.famName').first().text() + ' ' + randomUncle.find('.knightTitle').first().text();
                var uncleBirthYear = Number(randomUncle.find('.birthYear').first().text());
                var cousinMarkup = pendragonfamily.createTreeMarkup(
                    'cousin-newknight-' + i,
                    shortName,
                    knightTitle,
                    birthYear,
                    0,
                    'male',
                    'knight',
                    '',
                    0,
                    0
                );
                var newHtml = '<li><div>'+cousinMarkup+'</div></li>';
                if (wrapper.find('ul').length !== 0) {
                    wrapper.find('ul').append(newHtml);
                } else {
                    wrapper.append('<ul>'+newHtml+'</ul>');
                }
                pendragonfamily.familydata.extendedFamily.knights.push([shortName + ' '+knightTitle,uncleName + '\'s son',485-birthYear,5000+uncleBirthYear]);
                    
                console.log('created cousin ' + shortName);
            }

        }
    },
    sortByBirthYear: function (a, b) {
        if (a.birthyear < b.birthyear)
            return -1;
        if (a.birthyear > b.birthyear)
            return 1;
        return 0;
    },
    createTreeMarkup: function(id,name,title,birth,death,gender,additionalclass,spouse,wbirth,wdeath) {
        var deathEntry = (death===0)? '':death;
        var wdeathEntry = (wdeath===0)? '':wdeath;
        var spouseGender = (gender==="male")?'female':'male';
        var knightTitle = (gender==="male")? title:'';
        var spouseTitle = (gender==="male")? '':title;
        var markupEntry = '<span id="'+id+'" class="'+gender+' '+additionalclass+'"><span class="famName">' + name + '</span><br><span class="knightTitle">'+knightTitle+'</span>&nbsp;<br><small><span class="birthYear">'+birth+'</span>-<span class="deathYear">'+deathEntry+'</span></small></span>';
        if (spouse !== '' && spouse !== false) {
            markupEntry = markupEntry+ '<span class="'+spouseGender+'"><span class="famName">' + spouse + '</span><br><span class="knightTitle">'+spouseTitle+'</span>&nbsp;<br><small><span class="birthYear">'+wbirth+'</span>-<span class="deathYear">'+wdeathEntry+'</span></small></span>';
        }
        return markupEntry;
                
    },
    storeFamilyMember: function(relative, relation, isKnight) {
        var storage = (isKnight) ? pendragonfamily.familydata.extendedFamily.knights: pendragonfamily.familydata.extendedFamily.others; 
        var relativeName = relative.find('.famName').text()  + ' ' + relative.find('.knightTitle').text();
        var relativeBirthYear = Number(relative.find('.birthYear').text());
        var weight = 3000;
        
        if (relative.closest('ul').hasClass('thirdgen')) {
            weight = 1000;
        } else if (relative.closest('ul').hasClass('thirdgen')) {
            weight = 2000;
        }
        weight=weight+relativeBirthYear;
        storage.push([relativeName,relation,485-relativeBirthYear, weight]);
    },
    sortFamilyMembers: function (a,b) {
        if (a[3] < b[3]) 
            return -1;
        if (a[3] > b[3])
            return 1;
        return 0;
    },
    computeUncleAuntBornSlots: function () {
        var gfatherDeathYear = pendragonfamily.familydata.gfather.deathyear;
        var baseYear = 439;
        var slots = gfatherDeathYear - baseYear;
        var yearArray = [];
        
        for (var i=0;i<slots;i++) {
            var year = baseYear+i;
            yearArray.push(year);
        }
        return yearArray;
    },
    computeBrotherSisterBornSlots: function () {
        var fatherDeathYear = pendragonfamily.familydata.father.deathyear;
        var maxyear = (469<fatherDeathYear)? 469: fatherDeathYear+1;
        var baseYear = 465;
        var slots = maxyear - baseYear;
        var yearArray = [];
        
        for (var i=0;i<slots;i++) {
            var year = baseYear+i;
            yearArray.push(year);
        }
        return yearArray;
    },
    createGenderArray: function(count) {
        var fathersibs=[];
        var maleCount = 0;
        var femaleCount = 0;
        for (var x = 0; x<count; x++) {
            var gender = '';
            if (pendragonfamily.randomRoll(6,1,0)>3) {
                maleCount++;
            } else {
                femaleCount++;
            }
            fathersibs.push(gender);
        }
        return [maleCount,femaleCount];
    },
    drawFamilyTable: function(members, target) {
        for (var i=0; i<members.length; i++) {
            var member = members[i];
            var name = member[0];
            var relation = member[1];
            var age = member[2];
            var tableRow = '<tr><td>'+name+'</td><td>'+relation+'</td><td>'+age+'</td></tr>';
            
            target.append(tableRow);
        }
        
    },
    drawOtherRelativeTable: function() {
        var thirdGenerationTargets = $('.thirdgen > li > div').add('.motherthirdgen > li > div');
        var yourGeneration = $('.thridgen .father .yourgen li > div');
        var familymembers = []; //name,relation,age
        
        thirdGenerationTargets.each(function(key, item) {
            var couple = $(item);
            var primaryMember = couple.find('span').first();
            var hasSpouse = (couple.find('>span').length > 1);
            var living = (primaryMember.find('.deathYear').text !== '');
            var name = primaryMember.find('.famName').text();
            var isMale = (primaryMember.hasClass('male'));
            var familySide = (couple.closest('ul').hasClass('motherthirdgen'))? 'Maternal': 'Paternal';
            var relation = (isMale) ? familySide+' uncle':familySide+' aunt';
            if (!primaryMember.hasClass('knight') && living) {
                
                var age = 485-Number(primaryMember.find('.birthYear').text());
                familymembers.push([name,relation,age]);
            }
            if (hasSpouse) {
                var spouse = primaryMember.next('span');
                var isKnight = (spouse.hasClass('knight'));
                
                if (!isKnight) {
                    var isMale = (spouse.hasClass('male'));
                    var spousename = spouse.find('.famName').text();
                    var relation = (isMale)? name + '\'s husband' : name + '\'s wife';
                    var age = 485-Number(spouse.find('.birthYear').text());
                    familymembers.push([spousename,relation,age]);
                }
                
            }
        });
        yourGeneration.each(function(key, item) {
            var couple = $(item);
            var primaryMember = couple.find('span').first();
            var hasSpouse = (couple.find('>span').length > 1);
            var living = (primaryMember.find('.deathYear').text !== '');
            var name = primaryMember.find('.famName').text();
            var isMale = (primaryMember.hasClass('male'));
            var relation = (isMale) ? 'Your brother':'Your sister';

            if (!primaryMember.hasClass('knight') && living) {
                
                var age = 485-Number(primaryMember.find('.birthYear').text());
                familymembers.push([name,relation,age]);
            }
            if (hasSpouse) {
                var spouse = primaryMember.next('span');
                var isKnight = (spouse.hasClass('knight'));
                
                if (!isKnight) {
                    var isMale = (spouse.hasClass('male'));
                    var spousename = spouse.find('.famName').text();
                    var relation = (isMale)? name + '\'s husband' : name + '\'s wife';
                    var age = 485-Number(spouse.find('.birthYear').text());
                    familymembers.push([spousename,relation,age]);
                }
                
            }
        });
        console.log(familymembers);
        pendragonfamily.drawFamilyTable(familymembers, $('#family tbody.others'));
    }
};
pendragonfamily.initPendragonFamily();