//Decalring and setting up the initial variables.
//totalLettersCorrect: One is added every time the user guesses a letter correctly
//totalLettersWrong: One is added every time the user guesses a letter incorrectly
//wins and losses: keep track of how many times the user has won or lost a game
//correct: audio for guessing a letter correctly
//youwin: ausio for winning
//youlose: audio for losing
//ohno: audio for when the user is "inTheRed"
//knock: audio for when the user has guessed a letter for the second (or more) times
//jumbotron: used to change background color
//jumbotronText: the text inside the jumb otron - it changes colors differently than the body text
//changeGuessesLook: this changes the guesses font-size to large and color to red when "inTheRed"
//talkToTheUser: The main text above the word the user is trying to guess.  This changes a lot.
//words: the word bank
//goodJob: random "good job" sayings that pop up when a letter is guesssed correctly
//badJob: random "bad job" sayings that pop up when a letter is guesssed incorrectly
//correctLettersGuessed: every time the user guesses a letter correctly, one is added (or two if the letter apeared twice, etc.).  The condition to win the game is when this value equals the length of the array letters.
//currentWord: This is the array that gets updated as the user guesses words correctly.  Initially all elements are "_"
//guesses: how many guesses you get before you lose.
//guessedLetters: an array of all letters the user has guessed.
//letters: an array of the letters of the word the user is trying to guess
//wordToGuess: the  word picked randomly from the word bank "words"
//uniqueLetters: an array of the letters in the word to guess minus dupilcate letters
//previousWord: the previous word the user was trying to guess last time
//freeze: a boolean value. When "false" the user can play, when "true" the .onkeyup function won't run
//inTheRed: a boolean value to let the program know if the user is "in the red" - (down to 3 or less guesses)
var totalLettersCorrect = 0;
var totalLettersWrong = 0;
var wins = 0;
var losses = 0;
var correct = new Audio('correct.mp3');
var wrong = new Audio('wrong.mp3')
var youwin = new Audio('youwin.mp3')
var youlose = new Audio('youlose.mp3')
var ohno = new Audio('ohno.mp3')
var knock = new Audio('knock.mp3')
var jumbotron = document.getElementsByClassName('jumbotron');
var jumbotronText = document.getElementsByClassName('changeColor');
var changeGuessesLook = document.getElementById('guesses');
var talkToTheUser = document.getElementById('talkToTheUser'); 
var words = ["abettor","abettors","abridgment","abridgments","accessorize","accessorized","accessorizes","accessorizing","acclimatization","acclimatize","acclimatized","acclimatizes","acclimatizing","accouter","accoutered","accoutering","accouterment","accouterments","accouters","achromatize","achromatized","achromatizes","achromatizing","acknowledgment","acknowledgments","actualization","actualize","actualized","actualizes","actualizing","adapter","adapters","adonizes","aerography","aerologies","aerology","aerometer","afterward","aggrandize","aggrandized","aggrandizement","aggrandizer","aggrandizes","aggrandizing","aging","agings","agonize","agonized","agonizes","agonizing","agonizingly","airfoil","airfoils","airplane","airplanes","albumenize","alchemize","alchemized","alchemizes","alchemizing","alcoholize","alcoholized","alcoholizes","alcoholizing","alkalinize","alkalinized","alkalinizes","alkalinizing","alkalization","alkalize","alkalized","alkalizes","alkalizing","allegorize","allegorized","allegorizes","allegorizing","alphabetization","alphabetizations","alphabetize","alphabetized","alphabetizer","alphabetizers","alphabetizes","alphabetizing","aluminize","aluminized","aluminizes","aluminizing","aluminum","ambiance","ambiances","amebocyte","amenorrhea","amenorrheas","amenorrheic","amoebae","among","amorist","amorists","amortizable","amortization","amortizations","amortize","amortized","amortizement","amortizes","amortizing","amphitheater","amphitheaters","anagrammatize","anagrammatized","anagrammatizes","anagrammatizing","analog","analogize","analogized","analogizes","analogizing","analogs","analyzable","analyze","analyzed","analyzer","analyzers","analyzes","analyzing","anathematize","anathematized","anathematizes","anathematizing","anatomize","anatomized","anatomizes","anatomizing","anemia","anemic","anemically","anesthesia","anesthesiologist","anesthesiologists","anesthesiology","anesthetic","anesthetically","anesthetics","anesthetist","anesthetists","anesthetization","anesthetize","anesthetized","anesthetizes","anesthetizing","anglicization","anglicize","anglicized","anglicizes","anglicizing","animalize","animalized","animalizes","animalizing","annualized","anodize","anodized","anodizes","anodizing","anoxemia","anserine","antagonize","antagonized","antagonizes","antagonizing","anthologize","anthologized","anthologizes","anthologizing","anthropomorphize","anthropomorphized","anthropomorphizes","anthropomorphizing","antilabor","antisepticize","aphereses","apheresis","aphorize","aphorized","aphorizes","aphorizing","apnea","apneas","apologize","apologized","apologizes","apologizing","apostatize","apostatized","apostatizes","apostatizing","apostrophize","apostrophized","apostrophizes","apostrophizing","apotheosize","apotheosized","apotheosizes","apotheosizing","appall","appalls","appareled","appareling","appetizer","appetizers","appetizing","appetizingly","arbor","arborization","arbors","archaize","archaized","archaizes","archaizing","archeol","ardor","ardors","areole","armor","armored","armorer","armorers","armories","armoring","armors","armory","aromatize","aromatized","aromatizes","aromatizing","arterialize","arterialized","arterializes","arterializing","artifact","artifacts","arytenoid","arytenoids","asafetida","asafetidas","asshole","assholes","atomization","atomizations","atomize","atomized","atomizer","atomizers","atomizes","atomizing","attemper","attitudinize","attitudinized","attitudinizer","attitudinizes","attitudinizing","authorization","authorizations","authorize","authorized","authorizes","authorizing","autocatalyzes","autoionization","autolyzes","automatization","automatize","automatized","automatizes","automatizing","autotomize","autotomized","autotomizes","autotomizing","ax","axiomatizing","azotemia","azotize","backpedaled","backpedaling","balk","balked","balking","balks","bandanna","bandannas","baptize","baptized","baptizer","baptizers","baptizes","baptizing","barbarization","barbarizations","barbarize","barbarized","barbarizes","barbarizing","barreled","barreling","bartizan","barycenter","bastardization","bastardizations","bastardize","bastardized","bastardizes","bastardizing","bastinaded","bastinades","battologize","bedeviled","bedeviling","behavior","behavioral","behaviorally","behaviorism","behaviorist","behavioristic","behaviorists","behaviors","behoove","behooved","behooves","behooving","bejeweled","bejeweling","bel","belabor","belabored","belaboring","belabors","bels","bestialize","bestialized","bestializes","bestializing","beveled","beveling","bevelings","bicolor","bister","bisters","bituminize","bituminized","bituminizes","bituminizing","bize","blamable","blowzier","blowziest","blowzy","borage","borg","botanize","botanized","botanizes","botanizing","bowdlerization","bowdlerizations","bowdlerize","bowdlerized","bowdlerizes","bowdlerizing","breathalyze","breathalyzed","breathalyzer","breathalyzers","breathalyzes","breathalyzing","brier","briers","brutalization","brutalize","brutalized","brutalizes","brutalizing","bureaucratization","bureaucratize","bureaucratized","bureaucratizes","bureaucratizing","burglarize","burglarized","burglarizes","burglarizing","bused","buses","busheled","busheling","busing","cacodemon","cacodemons","cacoethes","cadaster","cadasters","caftan","caftans","caliber","calibers","calisthenics","calk","calked","calking","calks","camize","canalization","canalize","canalized","canalizes","canalizing","cancelable","cancelate","canceled","canceler","cancelers","canceling","candor","cannibalization","cannibalize","cannibalized","cannibalizes","cannibalizing","canonization","canonizations","canonize","canonized","canonizes","canonizing","capitalization","capitalize","capitalized","capitalizes","capitalizing","caponize","caponized","caponizes","caponizing","capsulize","capsulized","capsulizes","capsulizing","caracoled","caracoling","caramelization","caramelize","caramelized","caramelizes","caramelizing","carbolize","carbonades","carbonization","carbonizations","carbonize","carbonized","carbonizes","carbonizing","carburization","carburize","carburized","carburizes","carburizing","cardie","caroled","caroler","carolers","caroling","cartelization","cartelize","catalog","cataloged","cataloger","catalogers","cataloging","catalogs","catalyze","catalyzed","catalyzer","catalyzes","catalyzing","catechize","catechized","catechizer","catechizes","catechizing","categorization","categorizations","categorize","categorized","categorizes","categorizing","catheterize","catheterized","catheterizes","catheterizing","catholicize","catholicized","catholicizes","catholicizing","cauterization","cauterize","cauterized","cauterizes","cauterizing","caviled","caviler","cavilers","caviling","cavilings","cecally","cecity","celiac","celiotomy","celom","celomata","celoms","cenacle","cenesthesia","cenobite","cenobites","cenobitic","cenobitical","center","centerboard","centerboards","centered","centerfold","centerfolds","centering","centerings","centerpiece","centerpieces","centers","centiliter","centiliters","centimeter","centimeters","centralization","centralize","centralized","centralizer","centralizers","centralizes","centralizing","cephalization","cere","ceres","cesar","cesium","cesiums","cespitose","cestus","cesural","channeled","channeling","channelization","channelize","channelized","channelizes","channelizing","chaperon","chaperons","characterization","characterizations","characterize","characterized","characterizer","characterizes","characterizing","checkbook","checkbooks","checkerboard","checkerboards","checkered","checkering","cheerly","chelicere","chetopod","chili","chilies","chiseled","chiseler","chiselers","chiseling","chocolaty","cicatrix","cicatrize","cicatrized","cicatrizes","cicatrizing","cinchonize","cinematize","circularization","circularizations","circularize","circularized","circularizer","circularizes","circularizing","civilization","civilizations","civilize","civilized","civilizer","civilizes","civilizing","clamor","clamored","clamoring","clamors","clangor","clares","clarinetist","clarinetists","classicize","classicized","classicizes","classicizing","cocainize","cocainized","cocainizes","cocainizing","cognizable","cognizance","cognizant","cognize","cognized","cognizes","cognizing","collateralize","collectible","collectibles","collectivization","collectivize","collectivized","collectivizes","collectivizing","colonization","colonizations","colonize","colonized","colonizer","colonizers","colonizes","colonizing","color","colorable","colorado","colorant","colorants","colorblind","colorblindness","colorcast","colorcasting","colorcasts","colored","coloreds","colorer","colorfast","colorfastness","colorful","colorfully","colorfulness","colorific","coloring","colorings","colorist","colorists","colorization","colorize","colorized","colorizes","colorizing","colorless","colorlessly","colorlessness","colors","colorway","colorways","commercialization","commercialize","commercialized","commercializes","commercializing","communalize","communalized","communalizes","communalizing","communization","communizations","communize","communized","communizes","communizing","compartmentalization","compartmentalize","compartmentalized","compartmentalizes","compartmentalizing","comprizable","computerization","computerize","computerized","computerizes","computerizing","concenter","concentered","concentering","concenters","conceptualization","conceptualizations","conceptualize","conceptualized","conceptualizes","conceptualizing","concertize","concertized","concertizes","concertizing","concretize","concretized","concretizes","concretizing","containerization","containerize","containerized","containerizes","containerizing","contemporize","contemporized","contemporizes","contemporizing","contextualization","contextualize","contextualized","contextualizes","contextualizing","conventionalization","conventionalizations","conventionalize","conventionalized","conventionalizes","conventionalizing","copolymerize","copolymerized","copolymerizes","copolymerizing","coranto","cosmopolitanize","coste","costumier","councilor","councilors","councilorship","councilorships","counseled","counseling","counselor","counselors","counselorship","counselorships","cozier","cozies","coziest","cozily","coziness","cozy","crenelate","crenelated","crenelates","crenelating","crenelation","crenelations","creneled","creneling","creolized","criminalization","criminalize","criminalized","criminalizes","criminalizing","criticizable","criticize","criticized","criticizer","criticizers","criticizes","criticizing","crosier","crosiers","crueler","cruelest","crystallization","crystallize","crystallized","crystallizes","crystallizing","cudgeled","cudgeling","cudgelings","cupelation","cupule","curarize","customization","customizations","customize","customized","customizes","customizing","cutinize","cyme","czar","czars","decaliter","decaliters","decameter","decameters","decarbonize","decarbonized","decarbonizes","decarbonizing","decarburize","decarburized","decarburizes","decarburizing","decentralization","decentralize","decentralized","decentralizes","decentralizing","decigram","decigrams","deciliter","deciliters","decimalization","decimalize","decimalized","decimalizes","decimalizing","decimeter","decimeters","decolonization","decolonize","decolonized","decolonizes","decolonizing","decolorant","decolorize","decolorized","decolorizes","decolorizing","decriminalization","decriminalize","decriminalized","decriminalizes","decriminalizing","dedal","defense","defensed","defenseless","defenselessly","defenselessness","defenses","defensing","dehumanization","dehumanize","dehumanized","dehumanizes","dehumanizing","dehypnotize","deionize","deionized","dekagram","dekagrams","dekaliter","dekaliters","dekameter","dekameters","delocalize","demagnetization","demagnetize","demagnetized","demagnetizer","demagnetizes","demagnetizing","demasculinize","dematerialize","dematerialized","dematerializes","dematerializing","demeanor","demilitarization","demilitarize","demilitarized","demilitarizes","demilitarizing","demineralization","demineralizations","demineralize","demineralizer","demobilization","demobilize","demobilized","demobilizes","demobilizing","democratization","democratize","democratized","democratizes","democratizing","demonetization","demonetize","demonetized","demonetizes","demonetizing","demonization","demonize","demonized","demonizes","demonizing","demoralization","demoralize","demoralized","demoralizer","demoralizes","demoralizing","demythologization","demythologizations","demythologize","demythologized","demythologizes","demythologizing","denationalization","denationalize","denationalized","denationalizes","denationalizing","denaturalize","denaturalized","denaturalizes","denaturalizing","dentin","denuclearize","denuclearized","denuclearizes","denuclearizing","deodorization","deodorize","deodorized","deodorizer","deodorizers","deodorizes","deodorizing","deoxidize","deoxidized","deoxidizes","deoxidizing","departmentalization","departmentalize","departmentalized","departmentalizes","departmentalizing","dependents","depersonalization","depersonalize","depersonalized","depersonalizes","depersonalizing","depolarization","depolarizations","depolarize","depolarized","depolarizes","depolarizing","depoliticization","depoliticize","depoliticized","depoliticizes","depoliticizing","depolymerize","depressurization","depressurize","depressurized","depressurizes","depressurizing","deputize","deputized","deputizes","deputizing","desalinization","desalinize","desalinized","desalinizes","desalinizing","desensitization","desensitize","desensitized","desensitizer","desensitizes","desensitizing","desexualize","desexualized","desexualizes","desexualizing","destabilization","destabilize","destabilized","destabilizes","destabilizing","desulfurize","detribalize","detribalized","detribalizes","detribalizing","deva","deviled","deviling","devitalize","devitalized","devitalizes","devitalizing","diabolize","diabolized","diabolizes","diabolizing","diagonalize","diagonalized","diagonalizes","diagonalizing","dialed","dialer","dialing","dialings","dialogize","dialyze","dialyzed","dialyzer","dialyzes","dialyzing","diarrhea","diarrheal","diarrheic","dichotomize","dichotomized","dichotomizes","dichotomizing","dieselize","digitalize","digitalized","digitalizes","digitalizing","digitization","digitizations","digitize","digitized","digitizer","digitizers","digitizes","digitizing","dike","dikes","diopter","diopters","diphthongize","diphthongized","diphthongizes","diphthongizing","discolor","discolored","discoloring","discolors","disemboweled","disemboweling","disfavor","disfavored","disfavoring","disfavors","disheveled","disheveling","dishonor","dishonorable","dishonorably","dishonored","dishonoring","dishonors","disillusionize","disorganization","disorganize","disorganized","disorganizes","disorganizing","disseize","disseizin","distill","distills","divinize","dogmatize","dogmatized","dogmatizes","dogmatizing","dolor","dolors","dora","doweled","doweling","downdraft","dracena","dracenas","draftier","draftiest","draftily","draftiness","draftsman","draftsmanship","draftsmen","draftswoman","draftswomen","drafty","dramatization","dramatizations","dramatize","dramatized","dramatizes","dramatizing","dreamed","driveled","driveler","drivelers","driveling","dryly","dueled","dueler","duelers","dueling","duelings","duelist","duelists","dyspnea","dyspneas","ebonize","ebonized","ebonizes","ebonizing","economization","economize","economized","economizer","economizers","economizes","economizing","ecus","edema","edemas","edematous","editorialization","editorialize","editorialized","editorializer","editorializes","editorializing","effeminize","effeminized","effeminizes","effeminizing","egotize","elasticize","elasticized","elasticizes","elasticizing","electrolyze","electrolyzed","electrolyzing","elegize","elegized","elegizes","elegizing","eleoptene","emblematize","emotionalize","emotionalized","emotionalizes","emotionalizing","empathize","empathized","empathizes","empathizing","emphasize","emphasized","emphasizes","emphasizing","enameled","enameler","enamelers","enameling","enamelings","enamor","enamored","enamoring","enamors","encarnalize","endameba","endeavor","endeavored","endeavoring","endeavors","energize","energized","energizer","energizers","energizes","energizing","enologist","enologists","enroll","enrollment","enrollments","enrolls","ensepulcher","enthrall","enthrallment","enthralls","entomologize","eolipile","eolotropic","eon","eonian","eonism","eons","epaulet","epaulets","epicenter","epicenters","epigeal","epigeous","epigrammatize","epitomize","epitomized","epitomizes","epitomizing","equaled","equaling","equalization","equalize","equalized","equalizer","equalizers","equalizes","equalizing","ernes","erogenic","erose","ersh","ert","erugo","escalades","esophagi","esophagitis","essentialize","esthesia","esthetician","estheticians","estival","estivate","estivated","estivates","estivating","estivation","estivations","estradiol","estrin","estriol","estrogen","estrogenic","estrogens","estrone","estrones","estrous","estrum","estrus","estruses","et","eternalize","eternalized","eternalizes","eternalizing","eternize","eternized","eternizes","eternizing","etherealize","etherealized","etherealizes","etherealizing","etherize","etherized","etherizes","etherizing","ethicize","etiologically","etiologist","etiology","etymologize","etymologized","etymologizes","etymologizing","eudemon","eudemonia","eudemonics","eudemonism","eudemonisms","eudemons","euhemerize","eulogize","eulogized","eulogizer","eulogizers","eulogizes","eulogizing","eunuchize","euphemize","euphemized","euphemizes","euphemizing","euphonize","evangelization","evangelize","evangelized","evangelizer","evangelizes","evangelizing","eviler","evilest","exorcise","exorcised","exorcises","exorcising","experimentalize","exsiccate","extemporization","extemporize","extemporized","extemporizes","extemporizing","exteriorize","exteriorized","exteriorizes","exteriorizing","externalization","externalizations","externalize","externalized","externalizes","externalizing","factorization","factorizations","factorize","factorized","factorizes","factorizing","fagot","fagoting","fagots","faitor","familiarization","familiarize","familiarized","familiarizes","familiarizing","fanaticize","fantasize","fantasized","fantasizer","fantasizes","fantasizing","faradize","favor","favorable","favorableness","favorablenesses","favorably","favored","favorer","favoring","favorite","favorites","favoritism","favors","fayer","fecal","feces","fecula","feculence","federalization","federalize","federalized","federalizes","federalizing","feer","feminization","feminize","feminized","feminizes","feminizing","ferity","fertilizable","fertilization","fertilize","fertilized","fertilizer","fertilizers","fertilizes","fertilizing","fervor","fetal","fetation","feticide","feticides","fetiparous","fetor","fetors","feudalization","feudalize","fiber","fiberboard","fibered","fiberfill","fiberglass","fibers","fictionalization","fictionalizations","fictionalize","fictionalized","fictionalizes","fictionalizing","finalization","finalize","finalized","finalizes","finalizing","flanneled","flanneling","flavor","flavored","flavorful","flavoring","flavorings","flavorless","flavorous","flavors","flavorsome","flavory","flier","fliers","fluidize","fluidized","flutist","flutists","focalize","fogies","fogy","fontanel","fontanels","forb","forgather","forgathered","forgathering","forgathers","formalization","formalizations","formalize","formalized","formalizes","formalizing","forme","formularize","formularized","formularizes","formularizing","fosse","fossilization","fossilize","fossilized","fossilizes","fossilizing","fractionize","frambesia","frambesias","fraternization","fraternize","fraternized","fraternizer","fraternizers","fraternizes","fraternizing","frena","frenulum","frenum","frivoled","frivoling","frize","frizette","fueled","fueler","fueling","fulfill","fulfillment","fulfills","fulgor","funneled","funneling","furor","furors","galvanization","galvanize","galvanized","galvanizer","galvanizes","galvanizing","gamboled","gamboling","gauffer","gelatinize","gelatinized","gelatinizes","gelatinizing","gemology","genealogize","generalizable","generalization","generalizations","generalize","generalized","generalizes","generalizing","geologize","geometrize","gerenuk","gey","ghettoization","ghettoize","ghettoized","ghettoizes","ghettoizing","gibe","gibed","gibes","gibing","glamorization","glamorize","glamorized","glamorizer","glamorizes","glamorizing","glebe","globalization","globalize","globalized","globalizes","globalizing","globigerine","glutei","gluteus","gluttonize","gluttonized","gluttonizes","gluttonizing","glycerin","gobbledygook","goiter","goiters","gonorrhea","gonorrheal","gormandism","gormandize","gormandized","gormandizer","gormandizers","gormandizes","gormandizing","gourmandize","grangerize","graphitize","graveled","graveling","gray","grayed","grayer","grayest","graying","grayish","grayness","grays","groveled","groveler","grovelers","groveling","grovelingly","grueling","gruelingly","gruelings","gutturalize","gynecic","gynecocracy","gynecoid","gynecologic","gynecological","gynecologist","gynecologists","gynecology","gynecomastia","gyrostabilizer","gyrostabilizers","hankie","harbor","harborage","harborages","harbored","harborer","harboring","harbors","harmonization","harmonize","harmonized","harmonizer","harmonizers","harmonizes","harmonizing","hatcheled","hatcheling","heathenize","hectoliter","hectoliters","hectometer","hectometers","hemachrome","hemagglutinate","hemal","hemangioma","hemangiomas","hematic","hematin","hematinic","hematite","hematites","hematoblast","hematocele","hematocryal","hematogenesis","hematogenous","hematoid","hematologic","hematological","hematologist","hematologists","hematology","hematoma","hematomas","hematomata","hematopoiesis","hematosis","hematothermal","hematoxylin","hematozoon","hematuria","hematurias","hemic","hemin","hemocyte","hemodialyses","hemodialysis","hemoglobin","hemoid","hemolysin","hemolysis","hemophilia","hemophiliac","hemophiliacs","hemophilic","hemorrhage","hemorrhaged","hemorrhages","hemorrhaging","hemorrhoid","hemorrhoidal","hemorrhoidectomy","hemorrhoids","hemostasis","hemostatic","heredes","heterecious","heterism","hierarchize","hippie","homeopathically","homeopathist","homeostases","homeostasis","homogenization","homogenize","homogenized","homogenizer","homogenizes","homogenizing","homologize","homologized","homologizes","homologizing","honor","honorable","honorableness","honorably","honored","honoree","honorees","honorer","honorers","honoring","honors","hospitalization","hospitalizations","hospitalize","hospitalized","hospitalizes","hospitalizing","humanization","humanize","humanized","humanizer","humanizers","humanizes","humanizing","humor","humoral","humored","humoring","humorless","humorlessness","humors","hybridization","hybridize","hybridized","hybridizer","hybridizes","hybridizing","hydrocele","hydrogenize","hydrolyzate","hydrolyzates","hydrolyzation","hydrolyze","hydrolyzed","hydrolyzes","hydrolyzing","hyperbolize","hyperbolized","hyperbolizes","hyperbolizing","hyperemia","hyperemias","hyperesthesia","hyperglycemic","hypersensitize","hypesthesia","hypethral","hypnotizable","hypnotization","hypnotize","hypnotized","hypnotizer","hypnotizers","hypnotizes","hypnotizing","hypocenter","hypogeal","hypogeous","hypogeum","hyposensitize","hypostasize","hypostasizes","hypostatize","hypostatized","hypostatizes","hypostatizing","hypothesize","hypothesized","hypothesizer","hypothesizes","hypothesizing","hysterectomize","idealization","idealizations","idealize","idealized","idealizer","idealizes","idealizing","idolatrize","idolization","idolize","idolized","idolizer","idolizes","idolizing","illegalize","illegalized","illegalizes","illegalizing","immaterialize","immaterialized","immaterializes","immaterializing","immobilization","immobilize","immobilized","immobilizer","immobilizers","immobilizes","immobilizing","immortalize","immortalized","immortalizes","immortalizing","immunization","immunizations","immunize","immunized","immunizes","immunizing","impanel","impaneled","impaneling","impanelment","impanels","imperiled","imperiling","imperscriptible","impersonalize","impostor","impostors","incentivization","incentivize","incerate","incognizant","indigene","individualization","individualize","individualized","individualizes","individualizing","indraft","industrialization","industrialize","industrialized","industrializes","industrializing","inflection","inflections","initialed","initialing","initialization","initializations","initialize","initialized","initializes","initializing","inquire","inquired","inquires","inquiries","inquiring","inquiry","insolubilize","installment","installments","instill","instills","institutionalization","institutionalize","institutionalized","institutionalizes","institutionalizing","intellectualization","intellectualize","intellectualized","intellectualizes","intellectualizing","interiorize","interiorized","interiorizes","interiorizing","internalization","internalize","internalized","internalizes","internalizing","internationalization","internationalizations","internationalize","internationalized","internationalizes","internationalizing","iodize","iodized","iodizes","iodizing","ionizable","ionization","ionize","ionized","ionizes","ionizing","ipomea","iridize","irrationalize","ischemia","ischemic","isochronize","isomerize","italicization","italicize","italicized","italicizes","italicizing","itemization","itemize","itemized","itemizer","itemizes","itemizing","jargonize","jeopardize","jeopardized","jeopardizes","jeopardizing","jeweled","jeweler","jewelers","jeweling","jewelry","jor","journalize","judgment","judgmental","judgments","juvenilize","ked","kenneled","kenneling","keratinize","kiloliter","kiloliters","kilometer","kilometers","kinesthesia","kinesthesias","kinesthetic","kyanize","labeled","labeler","labeling","labialize","labialized","labializes","labializing","labiate","labor","labored","laborer","laborers","laboring","labors","laborsaving","lackluster","laicize","laicized","laicizes","laicizing","lapeled","lateralization","learned","legalization","legalize","legalized","legalizes","legalizing","legitimatize","legitimatized","legitimatizes","legitimatizing","legitimization","legitimize","legitimized","legitimizes","legitimizing","leporide","lesses","leukemia","leukorrhea","leveled","leveler","levelers","leveling","levigate","levogyrate","levorotation","levorotatory","levulose","levuloses","libelant","libeled","libelee","libeler","libelers","libeling","libelous","libelously","liberalization","liberalizations","liberalize","liberalized","liberalizes","liberalizing","ligule","likability","likable","likableness","linearized","lionization","lionize","lionized","lionizer","lionizes","lionizing","liquidize","liquidized","liquidizer","liquidizers","liquidizes","liquidizing","lissome","lissomeness","lissomenesses","liter","literalize","literalized","literalizes","literalizing","liters","livable","lobotomize","lobotomized","lobotomizes","lobotomizing","localization","localizations","localize","localized","localizes","localizing","lodicule","logicize","logorrhea","logorrheas","longevous","lory","louver","louvered","louvers","lunule","lupines","luster","lustering","lusterless","lusterware","lusterwares","lyophilize","lyophilized","lyophilizes","lyophilizing","macadamize","macadamized","macadamizes","macadamizing","macule","magnetizable","magnetization","magnetize","magnetized","magnetizer","magnetizes","magnetizing","maiger","majuscule","malodor","malodorousness","malodors","maneuver","maneuverability","maneuverable","maneuvered","maneuvering","maneuverings","maneuvers","manila","mantes","marbleize","marbleized","marbleizes","marbleizing","margarite","marginalization","marginalize","marginalized","marginalizes","marginalizing","marshaled","marshaling","martyrization","martyrize","martyrized","martyrizes","martyrizing","marveled","marveling","marvelous","marvelously","marvelousness","materialization","materialize","materialized","materializes","materializing","maters","matronize","mauger","maximization","maximize","maximized","maximizer","maximizes","maximizing","meager","mechanizable","mechanization","mechanize","mechanized","mechanizer","mechanizes","mechanizing","medalist","medalists","mediatize","medievalism","medievally","melodize","melodized","melodizes","melodizing","melodramatize","memorialize","memorialized","memorializes","memorializing","memorization","memorize","memorized","memorizer","memorizers","memorizes","memorizing","meow","meowed","meowing","meows","mercerization","mercerize","mercerized","mercerizes","mercerizing","mercurialize","mesmerization","mesmerize","mesmerized","mesmerizer","mesmerizers","mesmerizes","mesmerizing","mesoglea","metabolize","metabolized","metabolizes","metabolizing","metacenter","metaled","metalize","metalized","metastasize","metastasized","metastasizes","metastasizing","metathesize","methemoglobin","methodize","metope","metricize","metricized","metricizes","metricizing","micelle","micromillimeter","microminiaturization","microminiaturized","micropaleontologies","micropaleontology","militarization","militarize","militarized","militarizes","militarizing","milliliter","milliliters","millimeter","millimeters","mineralization","mineralize","miniaturization","miniaturize","miniaturized","miniaturizes","miniaturizing","minimization","minimizations","minimize","minimized","minimizer","minimizes","minimizing","misadvize","misalphabetize","misbehavior","mischaracterize","misdemeanor","misdemeanors","misjudgment","misjudgments","mislabeled","mislabeling","miter","mitered","mitering","miters","miterwort","miterworts","mize","mobilizable","mobilization","mobilizations","mobilize","mobilized","mobilizer","mobilizers","mobilizes","mobilizing","modeled","modeler","modelers","modeling","modelings","modernization","modernizations","modernize","modernized","modernizer","modernizers","modernizes","modernizing","modularize","modularized","modularizing","moggy","moisturize","moisturized","moisturizer","moisturizers","moisturizes","moisturizing","mold","molded","molder","moldered","moldering","molders","moldier","moldiest","molding","moldings","molds","moldy","mollusk","mollusks","molt","molted","molting","molts","monetization","monetizations","monetize","monetized","monetizes","monetizing","mongrelize","mongrelized","mongrelizes","mongrelizing","monometalism","monopolization","monopolize","monopolized","monopolizer","monopolizers","monopolizes","monopolizing","monumentalize","monumentalized","monumentalizes","monumentalizing","moralization","moralize","moralized","moralizer","moralizers","moralizes","moralizing","moralizingly","motorization","motorize","motorized","motorizes","motorizing","mucose","multicolor","multicolored","municipalize","mustache","mustached","mustaches","mutualize","myna","mynas","myriameter","mythicize","mythologize","mythologized","mythologizes","mythologizing","mythopeic","myxedema","myxedemas","nanometer","nanometers","narcotization","narcotize","narcotized","narcotizes","narcotizing","nasalization","nasalize","nasalized","nasalizes","nasalizing","nationalization","nationalizations","nationalize","nationalized","nationalizer","nationalizes","nationalizing","naturalization","naturalize","naturalized","naturalizes","naturalizing","naught","naughts","nebulization","nebulize","nebulizer","neighbor","neighbored","neighborhood","neighborhoods","neighboring","neighborliness","neighborly","neighbors","neologize","neoterize","neurocele","neutralization","neutralize","neutralized","neutralizer","neutralizers","neutralizes","neutralizing","niter","nitrogenize","nitroglycerin","nomadize","nonfulfillment","nonionizing","nonsympathizer","normalizable","normalization","normalizations","normalize","normalized","normalizer","normalizers","normalizes","normalizing","notarization","notarize","notarized","notarizes","notarizing","novelization","novelizations","novelize","novelized","novelizes","novelizing","novene","numskull","numskulls","nympheum","obelize","objectivize","ocher","ocherous","ochers","ochery","odor","odored","odorless","odors","offense","offenseless","offenses","okay","okaying","okays","omber","omelet","omelets","optimization","optimizations","optimize","optimized","optimizer","optimizers","optimizes","optimizing","organdy","organizable","organization","organizational","organizationally","organizations","organize","organized","organizer","organizers","organizes","organizing","orientalize","orientalized","orientalizes","orientalizing","orthographize","orthopedic","orthopedically","orthopedics","orthopedist","orthopedists","ostracize","ostracized","ostracizes","ostracizing","outmaneuver","outmaneuvered","outmaneuvering","outmaneuvers","overanalyze","overcapitalize","overcapitalized","overcapitalizes","overcapitalizing","overdramatize","overdramatized","overdramatizes","overdramatizing","overemphasize","overemphasized","overemphasizes","overemphasizing","overgeneralize","overgeneralized","overgeneralizes","overgeneralizing","overindustrialize","oversize","overspecialization","overspecialize","overspecialized","overspecializes","overspecializing","oxidizable","oxidization","oxidize","oxidized","oxidizer","oxidizers","oxidizes","oxidizing","ozonize","paganize","pajama","pajamas","palatalization","palatalize","palatalized","palatalizes","palatalizing","paleethnology","paleobiologies","paleobiologist","paleobiology","paleobotanies","paleobotany","paleoclimatologies","paleoclimatology","paleoecology","paleogeographies","paleogeography","paleographic","paleographical","paleolith","paleolithic","paleoliths","paleontography","paleontol","paleontologic","paleontological","paleontologist","paleontologists","paleontology","paleopsychology","paleozoologies","paleozoology","palestra","palestrae","pandora","panegyrize","paneled","paneling","panelings","panelist","panelists","papule","parabolize","parallelize","parallelized","parallelizes","parallelizing","paralyze","paralyzed","paralyzes","paralyzing","paralyzingly","parametrization","parametrize","parametrized","parametrizes","paraselene","parasitize","parceled","parceling","parenthesize","parenthesized","parenthesizes","parenthesizing","paresthesia","paresthesias","parlor","parlormaid","parlors","particolored","particularization","particularize","particularized","particularizes","particularizing","passivization","pasteurization","pasteurize","pasteurized","pasteurizer","pasteurizers","pasteurizes","pasteurizing","pastoralize","patine","patronization","patronize","patronized","patronizer","patronizers","patronizes","patronizing","patronizingly","pauperize","pauperized","pauperizes","pauperizing","pe","pectize","peculiarize","pedaled","pedaling","peddler","peddlers","pederastic","pedestrianization","pedestrianize","pedestrianized","pedestrianizes","pedestrianizing","pediatric","pediatrician","pediatricians","pediatrics","pedogenesis","pedological","pedologist","pedology","pedophile","pedophiles","pedophilia","pedophilic","pelletize","penalization","penalize","penalized","penalizes","penalizing","penciled","penciling","pencilings","penne","peptize","peptized","peptizes","peptizing","peptonize","peracid","perambulatory","performative","pericope","periled","periling","periodization","peroxidize","perpend","perse","personalization","personalize","personalized","personalizes","personalizing","perv","perviousness","perviousnesses","petaled","phenology","philanthropize","philosophize","philosophized","philosophizer","philosophizers","philosophizes","philosophizing","philter","philters","phlebotomize","phlebotomized","phlebotomizes","phlebotomizing","phlyctena","phonies","phony","phosphatize","photosensitize","photosensitized","photosensitizes","photosensitizing","photosynthesize","photosynthesized","photosynthesizes","photosynthesizing","piaster","piasters","picturize","pilgrimize","pinnule","piscine","plage","plagiarize","plagiarized","plagiarizer","plagiarizers","plagiarizes","plagiarizing","plasmolyzes","plasticize","plasticized","plasticizer","plasticizers","plasticizes","plasticizing","platinize","platitudinize","plow","plowable","plowboy","plowboys","plowed","plower","plowers","plowing","plowman","plowmen","plows","plowshare","plowshares","plumule","pluralization","pluralize","pluralized","pluralizes","pluralizing","poeticize","poetize","poetized","poetizes","poetizing","polarizability","polarizable","polarization","polarizations","polarize","polarized","polarizer","polarizes","polarizing","polemicize","polemicized","polemicizes","polemicizing","politicization","politicize","politicized","politicizes","politicizing","pollinize","polycythemia","polycythemias","polymerization","polymerize","polymerized","polymerizes","polymerizing","pommeled","pommeling","popliteal","popularization","popularizations","popularize","popularized","popularizer","popularizes","popularizing","porer","posturize","practiced","practicer","practicing","precancelation","precivilization","preconize","predial","preemptor","preexistent","prefectorial","prejudgment","prejudgments","prelect","premaxilla","premial","premunire","prepositor","preprogram","pressurization","pressurize","pressurized","pressurizer","pressurizers","pressurizes","pressurizing","pretense","pretenses","preterit","preterits","previze","prioritization","prioritize","prioritized","prioritizes","prioritizing","privatization","privatizations","privatize","privatized","privatizes","privatizing","prized","prizing","professionalization","professionalize","professionalized","professionalizes","professionalizing","prologize","prologized","prologizes","prologizing","prologuize","propagandize","propagandized","propagandizes","propagandizing","propretor","proselytization","proselytize","proselytized","proselytizer","proselytizers","proselytizes","proselytizing","provincialization","psychoanalyze","psychoanalyzed","psychoanalyzes","psychoanalyzing","psychologize","publicize","publicized","publicizes","publicizing","pulverization","pulverize","pulverized","pulverizes","pulverizing","pummeled","pummeling","pyemia","pygmean","pyorrhea","pyorrheal","pyrolyze","quantization","quantize","quantized","quarreled","quarreler","quarrelers","quarreling","questionary","racialization","racialize","radicalization","radicalize","radicalized","radicalizes","radicalizing","rancor","randomization","randomize","randomized","randomizes","randomizing","rationalization","rationalizations","rationalize","rationalized","rationalizer","rationalizes","rationalizing","ratite","raveled","raveler","raveling","ravelings","realizable","realization","realizations","realize","realized","realizes","realizing","reanalyze","reanalyzed","reanalyzes","reanalyzing","reauthorization","reauthorize","reauthorizes","rebaptize","recapitalization","recapitalize","recapitalized","recapitalizes","recapitalizing","recognizable","recognizably","recognizance","recognizances","recognize","recognized","recognizer","recognizers","recognizes","recognizing","recolonization","recolonize","recolonized","recolonizes","recolonizing","recolor","recolored","recoloring","recolors","reconnoiter","reconnoitered","reconnoiterer","reconnoitering","reconnoiters","recrystallization","recrystallize","recrystallized","recrystallizes","recrystallizing","redialed","redialing","reemphasize","reemphasized","reemphasizes","reemphasizing","reentrance","refueled","refueling","regularization","regularize","regularized","regularizes","regularizing","reinitialize","reinitialized","relabeled","relabeling","relativize","relativized","relativizes","relativizing","rematerialized","remilitarize","remilitarized","remilitarizes","remilitarizing","remodeled","remodeling","remold","remolded","remolding","remolds","remonetize","renationalized","rencounter","renormalization","reorganization","reorganizations","reorganize","reorganized","reorganizes","reorganizing","reprized","republicanize","reshes","resynchronization","resynchronize","resynchronized","resynchronizes","resynchronizing","resynthesize","reveled","reveler","revelers","reveling","revelings","revitalization","revitalize","revitalized","revitalizes","revitalizing","revolutionize","revolutionized","revolutionizer","revolutionizes","revolutionizing","rhapsodize","rhapsodized","rhapsodizes","rhapsodizing","rigor","rigorism","rigorist","rigors","ritualize","ritualized","ritualizes","ritualizing","rivaled","rivaling","robotize","robotized","robotizes","robotizing","romanize","romanticize","romanticized","romanticizes","romanticizing","routinize","routinized","routinizes","routinizing","roweled","roweling","rubberize","rubberized","rubberizes","rubberizing","ruble","rubles","ruggedize","rumor","rumored","rumoring","rumormonger","rumormongers","rumors","ruralize","saber","sabers","salable","salinization","salinize","saltiers","saltpeter","sandaled","sanitize","sanitized","sanitizer","sanitizers","sanitizes","sanitizing","sapor","satirization","satirize","satirized","satirizes","satirizing","savior","saviors","savor","savored","savorer","savorier","savories","savoriest","savorily","savoriness","savoring","savorless","savors","savory","scandalization","scandalizations","scandalize","scandalized","scandalizer","scandalizes","scandalizing","scepter","sceptered","scepters","schematization","schematizations","schematize","schematized","schematizes","schematizing","scrutinization","scrutinize","scrutinized","scrutinizer","scrutinizes","scrutinizing","seborrhea","seborrheic","sectarianize","sectionalize","secularization","secularize","secularized","secularizer","secularizes","secularizing","seizable","seizer","seizers","seizin","seizings","semicivilized","sensationalize","sensationalized","sensationalizes","sensationalizing","sensitization","sensitize","sensitized","sensitizers","sensitizes","sensitizing","sensualize","sensualized","sensualizes","sensualizing","sentimentalization","sentimentalize","sentimentalized","sentimentalizes","sentimentalizing","sepaled","septicemia","septicemic","sepulcher","sepulchered","sepulchering","sepulchers","serialization","serializations","serialize","serialized","serializes","serializing","sermonize","sermonized","sermonizer","sermonizers","sermonizes","sermonizing","seta","sheikh","sheikhs","sher","shoveled","shoveler","shovelers","shoveling","shriveled","shriveling","signaled","signaler","signalers","signaling","signalization","signalize","signalized","signalizes","signalizing","silique","simonize","singularization","singularize","singularized","singularizes","singularizing","sizable","sizably","skeptic","skeptical","skeptically","skepticism","skeptics","slenderize","slenderized","slenderizes","slenderizing","slier","sliest","smolder","smoldered","smoldering","smolders","sniveled","sniveler","snivelers","sniveling","snorkeled","snorkeling","snowplow","snowplows","snowshed","socialization","socialize","socialized","socializer","socializes","socializing","sodomize","sodomized","sodomizes","sodomizing","solarize","solemnization","solemnize","solemnized","solemnizes","solemnizing","soliloquize","soliloquized","soliloquizes","soliloquizing","solmization","solmizations","solubilize","somber","somberly","somberness","sordine","sordines","sovietize","sovietized","sovietizes","sovietizing","specialization","specializations","specialize","specialized","specializes","specializing","specialties","specialty","specter","specters","spelean","spelled","spilled","spinule","spiraled","spiraling","spirea","spireas","spiritualize","spiritualized","spiritualizes","spiritualizing","spirochete","spirochetes","spirochetosis","splendor","splendors","spoiled","squame","squirreled","squirreling","stabilization","stabilize","stabilized","stabilizer","stabilizers","stabilizes","stabilizing","standardization","standardizations","standardize","standardized","standardizes","standardizing","stele","stenciled","stenciling","stentor","stentors","stere","sterilization","sterilizations","sterilize","sterilized","sterilizer","sterilizers","sterilizes","sterilizing","stigmatization","stigmatize","stigmatized","stigmatizes","stigmatizing","stilbestrol","stilbestrols","stipule","stomodeum","stor","strobile","stylization","stylize","stylized","stylizes","stylizing","subduer","subminiaturize","subsidization","subsidize","subsidized","subsidizer","subsidizers","subsidizes","subsidizing","subspecialize","subspecialty","substantialize","subtilize","subtilized","subtilizes","subtilizing","subtotaled","subtotaling","suburbanization","suburbanize","suburbanized","suburbanizes","suburbanizing","succor","succored","succoring","succorless","succors","sulfate","sulfates","sulfatize","sulfide","sulfides","sulfur","sulfured","sulfuric","sulfuring","sulfurize","sulfurous","sulfurs","summarization","summarizations","summarize","summarized","summarizer","summarizers","summarizes","summarizing","superfetation","superfetations","surprizal","sweepstakes","swiveled","swiveling","syllabize","syllabized","syllabizes","syllabizing","syllogize","syllogized","syllogizes","syllogizing","symbolization","symbolize","symbolized","symbolizes","symbolizing","symmetrization","symmetrize","symmetrized","symmetrizes","symmetrizing","sympathize","sympathized","sympathizer","sympathizers","sympathizes","sympathizing","symphonize","synchronization","synchronizations","synchronize","synchronized","synchronizer","synchronizes","synchronizing","syncretize","syncretized","syncretizes","syncretizing","synecious","synecology","synereses","syneresis","synesthesia","synesthesias","synonymize","synopsize","synthesize","synthesized","synthesizes","synthesizing","systematization","systematize","systematized","systematizes","systematizing","systemize","systemized","systemizes","systemizing","taboret","taborets","tambura","tantalization","tantalize","tantalized","tantalizer","tantalizers","tantalizes","tantalizing","tantalizingly","tasseled","tasseling","tautologize","teetotaler","teetotalers","telesthesia","tellurize","tels","temporization","temporize","temporized","temporizer","temporizers","temporizes","temporizing","tenderize","tenderized","tenderizer","tenderizers","tenderizes","tenderizing","tenia","teniacide","teniafuge","tenias","teniasis","terf","territorialize","terrorization","terrorizations","terrorize","terrorized","terrorizer","terrorizes","terrorizing","tetanize","theater","theatergoer","theatergoers","theaters","theatricalize","theologize","theorize","theorized","theorizer","theorizes","theorizing","therme","thermesthesia","thermosiphon","thralldom","thruway","thruways","tidbit","tidbits","tinseled","tinseling","titer","titers","totaled","totaling","totalizator","totalizators","totalizer","totalizers","totalizing","toweled","toweling","towelings","toxemia","toxemic","trammeled","trammeler","trammeling","tranquility","tranquilization","tranquilize","tranquilized","tranquilizer","tranquilizers","tranquilizes","tranquilizing","transcendentalize","transistorize","transistorized","transistorizes","transistorizing","traumatize","traumatized","traumatizes","traumatizing","traveled","traveler","travelers","traveling","travelings","trialed","trialing","trichinize","trichlorethylene","tricolor","tricolored","tricolors","triecious","trivialization","trivializations","trivialize","trivialized","trivializes","trivializing","tropeolin","tropicalize","troweled","troweling","tularemia","tumbrel","tumbrels","tumor","tumors","tunneled","tunneler","tunnelers","tunneling","tunnelings","turdine","tyrannize","tyrannized","tyrannizer","tyrannizes","tyrannizing","unacclimatized","unalphabetized","unappetizing","unarmored","unauthorized","unbaptized","unbeknownst","uncanceled","uncapitalized","uncivilized","uncolored","uncrystallized","underemphasize","underutilized","unequaled","unfavorable","unfavorably","unfertilized","unflavored","unhonored","uniformize","uninitialized","unionization","unionize","unionized","unionizer","unionizes","unionizing","unitize","unitized","unitizes","unitizing","universalization","universalize","universalized","universalizes","universalizing","unlabeled","unlearned","unmechanized","unmemorized","unnaturalized","unneighborly","unorganized","unpasteurized","unpracticed","unpressurized","unpublicized","unraveled","unraveling","unrealizable","unrealized","unrecognizable","unrecognizably","unrecognized","unrivaled","unsavorily","unsavoriness","unsavorinesses","unsavory","unshakable","unspecialized","unsterilized","unsubsidized","untrammeled","unutilized","updraft","updrafts","urbanization","urbanize","urbanized","urbanizes","urbanizing","uremia","uremias","uremic","utilizable","utilization","utilize","utilized","utilizer","utilizes","utilizing","valor","valorization","valorize","valvule","vandalize","vandalized","vandalizes","vandalizing","vapor","vaporific","vaporimeter","vaporing","vaporings","vaporish","vaporization","vaporize","vaporized","vaporizer","vaporizers","vaporizes","vaporizing","vaporously","vapors","vaporware","vapory","varicolored","vasectomize","vasectomized","vasectomizing","vassalize","vectorization","vectorized","veery","velarize","venter","venters","ventriloquize","venule","verbalization","verbalize","verbalized","verbalizer","verbalizes","verbalizing","vernacularize","vernalize","versicolor","veter","victimization","victimize","victimized","victimizer","victimizes","victimizing","victualage","victualed","victualer","victualers","victualing","vier","vigor","vigorless","visualization","visualizations","visualize","visualized","visualizer","visualizers","visualizes","visualizing","vitalization","vitalize","vitalized","vitalizer","vitalizes","vitalizing","vitriolize","vizard","vocalization","vocalizations","vocalize","vocalized","vocalizer","vocalizes","vocalizing","volatilization","volatilize","volatilized","volatilizes","volatilizing","vowelize","vowelized","vowelizes","vowelizing","vulcanizable","vulcanization","vulcanize","vulcanized","vulcanizer","vulcanizes","vulcanizing","vulgarization","vulgarize","vulgarized","vulgarizer","vulgarizers","vulgarizes","vulgarizing","wainscoted","wainscoting","wainscotings","watercolor","watercolorist","watercolorists","watercolors","weaseled","weaseling","weatherize","weatherized","weatherizes","weatherizing","westernization","westernize","westernized","westernizes","westernizing","whir","whirs","whiskey","whiskeys","whiz","willful","willfully","willfulness","winterization","winterize","winterized","winterizes","winterizing","wizen","womanize","womanized","womanizer","womanizers","womanizes","womanizing","woolen","woolens","worshiped","worshiper","worshipers","worshiping","yodeled","yodeler","yodelers","yodeling","yogurt","yogurts","zaffer","zooglea"];
var goodJob = ["You got it!", "Yup!", "Way to go!", "Oh Yea!", "Get it!", "Good guess!"]
var badJob = ["Nope", "Try again", "Awkward", "Yikes...", "Not quite", "Bad guess"]

var correctLettersGuessed;
var currentWord;
var guesses;
var guessedLetters;
var letters;
var wordToGuess;
var uniqueLetters;
var previousWord;
var freeze;
var inTheRed;

//Defining wordToGuess which will be the word picked from random in the wordbank and previousWord which holds the word from the last game to display.
function changeTheHeader(array)
{
	var index = Math.floor(Math.random() * goodJob.length);
	var randomSaying = array[index]
	freeze = true;
	write('talkToTheUser', randomSaying, false);

	if (inTheRed)
	{
		setTimeout(function ()
		{
			freeze = false;
			jumbotron[0].style.background = 'red';
			write('talkToTheUser', 'Guess the Word', false);
		}, 500);
	}

	else
	{
		setTimeout(function ()
		{
			freeze = false;
			write('talkToTheUser', 'Guess the Word', false);
		}, 500);
	}
}

function getNewWord()
{
	//Picking a word at random from the word bank.
	var index = Math.floor(Math.random() * words.length);
	wordToGuess = words[index];

	//Splitting up the word into its individual letters - letters is an array of letters.
	letters = wordToGuess.split("");

	//Creating an array of just the unique letters in the word.  The length of this array will be used when defining how many
	//guesses the user will get for a given word.  It might also just be useful to have for another function
	//down the road.  
	uniqueLetters = [];

	uniqueLetters.push(letters[0])

	for (var i=0; i<letters.length; i++)
	{
		var seen = false;

		for (var j=0; j<uniqueLetters.length; j++)
		{
			if (uniqueLetters[j]===letters[i])
			{
				seen = true;
				break;
			}
		}

		if(!seen)
		{
			uniqueLetters.push(letters[i]);
		}
	}

	 console.log(uniqueLetters)
}

function setInitialVariables()
{
	var numberOfGuesses = uniqueLetters.length
	correctLettersGuessed = 0;
	currentWord = [];
	guesses = numberOfGuesses;
	guessedLetters = [];
}

//This is a function that just makes it easier to write things to the document.  The "join" boolean is there to print arrays without commas when needed.
function write(id, content, join)
{
	if (join)
	{
		content = content.join(" ");
	}

	document.getElementById(id).innerHTML=content;
}

//Creates Pie Chart of wins and losses
function makePie() 
{
	var chart = new CanvasJS.Chart("chartContainer",
	{
		backgroundColor: null,
		theme: "theme2",
		title:{
			text:''
		    },
		data: [
		{
			type: "pie",
			showInLegend: false,
			toolTipContent: "{y} - #percent %",
			legendText: "{indexLabel}",
			dataPoints: [
				{  y: totalLettersCorrect, indexLabel: "# Letters Right" },
				{  y: totalLettersWrong, indexLabel: "# Letters Wrong" },
			]
		}
		]
	});
	chart.render();
}

function alreadyGuessedOrNotALetter(string)
{
	knock.play()
	freeze = true;
	jumbotron[0].style.background = '#c37fff';
	write('talkToTheUser', string, false);
	setTimeout(function ()
	{
		freeze = false;
		if (inTheRed)
		{
			jumbotron[0].style.background = 'red';
		}

		else
		{
			jumbotron[0].style.background = '#70a6ff';
		}

		write('talkToTheUser', 'Guess the Word', false);
	}, 500);
}

//"Danger" effects that happen when user has 3 or less guesses left
function danger()
{
	ohno.play()
	document.body.style.background = 'black';
	document.body.style.color = 'white';
	jumbotron[0].style.background = 'red';
	jumbotronText[0].style.color = 'black';
	jumbotronText[1].style.color = 'black';
	jumbotronText[2].style.color = 'black';
	changeGuessesLook.style.fontSize = "100px";
	changeGuessesLook.style.color = "red";
}

//A function that makes all initial variables back to their original values expect for wins and losses numbers and total letters guessed correctly and incorrectly.
function clearEverything()
{
	inTheRed = false;
	freeze = false;
	previousWord = wordToGuess;
	getNewWord();
	setInitialVariables()
	write('previousWord', 'Previous word: '+previousWord, false);
	write('userGuesses', "", false);
	ohno.pause()
	ohno.currentTime = 0;
	document.body.style.background = 'white'
	document.body.style.color = 'black';
	jumbotron[0].style.background = '#70a6ff';
	changeGuessesLook.style.fontSize = "30px";
	changeGuessesLook.style.color = "black";
}


//The initiation of the game
function startGame(numberOfWins, numberOfLosses)
{
	//Initailly setting the current word array to all blank letters. This is the array that will change as the user makes guesses.
	for (var i=0; i<letters.length; i++)
	{
		currentWord.push('_');
	}
	write('currentWord', currentWord, true)

	//Writing intial variables to the document.
	write('guesses', guesses, false);
	write('wins', numberOfWins, false);
	write('losses', numberOfLosses, false);
}

getNewWord();
setInitialVariables();
startGame(0, 0);

//The events that occur when the User presses a key.
document.onkeyup = function(event)
{
	if(!freeze)
	{
		if (event.keyCode >= 65 && event.keyCode <= 90) 
		{

			//Setting the pressed key to lowercase just for consistency.
			var guessedLetter = event.key.toLowerCase();

			//We assume that the user's guessed letter has not already been guessed
			alreadyGuessed = false;

			//This loop goes through all letters that have been already guessed.
			for (var i=0; i<guessedLetters.length; i++)
			{
				//If the user's letter has already been guessed, we set the alreadyGuessed Boolean to true.
				if (guessedLetter === guessedLetters[i])
				{
					alreadyGuessed = true;
					alreadyGuessedOrNotALetter("Already Guessed")
					break;
				}
			}

			//If the previous loop did not set alreadyGuessed to true, that means the user has yet to guess it 
			//so we now put it in the guessedLetters array and also print it to the document as a guessed letter
			if (alreadyGuessed == false)
			{
				guessedLetters.push(guessedLetter);
				var userGuesses = document.getElementById("userGuesses").innerHTML;
				var updatedUserGuesses = userGuesses.concat(' '+guessedLetter);
				write('userGuesses', updatedUserGuesses, false);
			}

			//We now assume that the letter the user guessed is an incorrect letter
			var correctGuess = false;

			//Here we set up a Boolean to keep track if this is the first time the loop below sees a given letter
			var firstTimeSeeingLetter = true;

			//This loop looks through all letters of the word that is to be guessed.
			for (var i=0; i<letters.length; i++)	
		 	{

		 		//If the user guessed a letter correctly, we set the boolean correctGuess to true and replace the blank space in currentWord
		 		//with the letter that was guessed.  This loop will go through all letters in the word so it will print duplicates if
		 		//there are any.  It must also be true that the user must not have already guessed this correct letter.
				if (guessedLetter == letters[i] && alreadyGuessed == false)
				{
					correctGuess = true;
					currentWord.splice(i, 1, guessedLetter);
					write('currentWord', currentWord, true);
					correctLettersGuessed = correctLettersGuessed + 1;
					correct.play();
					if (correctLettersGuessed !== letters.length)
					{
						changeTheHeader(goodJob);
					}

					//If this is the first time this letter has appeared in the word, we add one to our TotalLettersCorrect variable.
					//I put this in because, for instance, if the word was "book" and you pressed "o" it would think that you guessed
					//"o" correctly twice, but I don't want that.  I just want to know if you guessed correctly or not...no double ocunting.  
					if (firstTimeSeeingLetter)
					{
						totalLettersCorrect = totalLettersCorrect + 1;
						makePie();
						firstTimeSeeingLetter = false;
					}
				}
			}

			//If the user guessed incorrectly...
			if (correctGuess==false)
			{
				//...and also has not guessed this letter before, we subtract one from the guess total and write to the document.
				if (alreadyGuessed==false)
				{
					guesses = guesses - 1;
					if (guesses !== 0)
					{
						changeTheHeader(badJob);
					}

					totalLettersWrong = totalLettersWrong + 1;
					makePie()
					write('guesses', guesses, false);

					//We don't want the wrong sound to play overtop the you lose sound (it sounds awful)
					if (guesses != 0)
					{
						wrong.play()
					}

					//Suspense if you have three or less guesses!
					if (guesses == 3)
					{
						inTheRed = true;
						danger();
					}
				}
			}

			//If the user has guessed all the correct letters we add one to the wins total and reset the game.
			if (correctLettersGuessed == letters.length)
			{
				wins = wins + 1;
				write('wins', wins, false);
				ohno.pause()
				ohno.currentTime = 0;
				youwin.play()

				//Make the jumbotron green for 1.5 seconds before resetting the game.
				freeze = true;
				jumbotron[0].style.background = '#6aff00';
				write('talkToTheUser', 'You Won!', false);
				setTimeout(function ()
				{
					freeze = false;
					write('talkToTheUser', 'Guess the Word', false);
					clearEverything();
					startGame(wins, losses);
				}, 1500);
			}

			//If the user is out of guesses we add one to the losses total and reset the game.
			if (guesses == 0)
			{
				losses = losses + 1;
				write('losses', losses, false);
				ohno.pause()
				ohno.currentTime = 0;
				youlose.play()

				//Make the jumbotron gray for 1.5 seconds before resetting the game.
				freeze = true;
				jumbotron[0].style.background = '#636363';
				write('talkToTheUser', 'You Lost', false);
				setTimeout(function ()
				{
					freeze = false;
					write('talkToTheUser', 'Guess the Word', false);
					clearEverything();
					startGame(wins, losses);
				}, 1500);
			}
		}

		else
		{
			alreadyGuessedOrNotALetter("That\'s not a letter")
		}
	}
}
