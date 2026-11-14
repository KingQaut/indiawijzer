// "About the author" page: Wahid Saleh, founder of Indiawijzer.
// English from the owner's Word document "About the author - Wahid Saleh" (13 Nov 2026); Dutch is a translation of it.
// Each block is a list of parts: { p: [paragraphs] }, { ul: [items] }, { ol: [items] } or { table: { head, rows } },
// followed by `src`: keys into `sources` below (each link exists once, shared by both languages).

export const sources = {
  assamTimes: { t: "Assam Times", u: "https://www.assamtimes.org/node/2470", cite: { by: "Arindam Garg", title: "Wahid Saleh from Netherlands with love", date: { nl: "15 januari 2009", en: "15 January 2009" } } },
  mailingList: { t: { nl: "Assam-mailinglijst", en: "Assam mailing list" }, u: "https://mail-archive.com/assam@pikespeak.uccs.edu/msg09650.html", cite: { by: "Rini Kakati", title: "Wahid Saleh: a true social worker, from Rajabari to Netherlands", date: { nl: "1 november 2004", en: "1 November 2004" } } },
  ankurBora: { t: "Ankur Bora / Assam Tribune", u: "https://ankurbora.blogspot.com/2016/04", cite: { by: "Ankur Bora", title: "The 5th commandment", outlet: "A path to oneness", date: { nl: "5 april 2016 (ook verschenen in de Assam Tribune, 1 april 2016)", en: "5 April 2016 (also published in the Assam Tribune, 1 April 2016)" } } },
  embassy: { t: { nl: "Ambassade van India, Den Haag", en: "Embassy of India, The Hague" }, u: "https://www.indianembassynetherlands.gov.in/page/indian-community-in-netherlands/", cite: { title: "Indian community in Netherlands" } },
  indianet: { t: "IndiaNet", u: "http://www.indianet.nl/in-aow.html", cite: { title: "AOW-behoud in India: Verdrag tussen Nederland en India na 7 jaar strijd" } },
  heraut: { t: "De Heraut", u: "http://app.heraut-online.nl/article/1180079/initiatief_wahid_saleh_na_vijftien_jaar_beloond", cite: { title: "Initiatief Wahid Saleh na vijftien jaar beloond" } },
  heraut2: { t: "De Heraut", u: "http://www.herautonline.nl/?p=4407", cite: { title: "Internationale onderscheiding voor Wahid Saleh" } },
  monitor: { t: "Asian Studies WWW Monitor", u: "https://asia-www-monitor.blogspot.com/2006/03/indiawijzer-india-in-nederland.html", cite: { title: "Indiawijzer - India in Nederland", date: { nl: "13 maart 2006", en: "13 March 2006" } } },
  biblio: { t: "Biblio", u: "https://www.biblio.com/book/indiawijzer-india-nederland-een-overzicht-van/d/1717420339", cite: { title: "Indiawijzer: India in Nederland (1999)", noquote: true } },
  comment: { t: { nl: "reactie in de Assam Times", en: "Assam Times comment" }, u: "https://assamtimes.org/node/8091", cite: { by: "Wahid Saleh", title: { nl: "reactie op ‘Zero tracks back to Assam’", en: "comment on “Zero tracks back to Assam”" }, outlet: "Assam Times", noquote: true } },
};

// Order of the full source list at the bottom of the page.
export const sourceOrder = ["assamTimes", "mailingList", "ankurBora", "embassy", "indianet", "heraut", "heraut2", "monitor", "biblio", "comment"];

export const author = {
  slug: { nl: "over-de-auteur", en: "about-the-author" },
  title: { nl: "Over de auteur: Wahid Saleh", en: "About the author: Wahid Saleh" },
  intro: {
    nl: "Wahid Saleh is sociaal ondernemer en gemeenschapsleider in Nederland, en de oprichter van Indiawijzer. Hij werd in 1941 geboren in Jorhat, Assam, kwam in 1963 naar Europa en woont sinds 1968 in Nederland. Na 38 jaar in de informatietechnologie ging hij vervroegd met pensioen en wijdde hij zich aan het dichter bij elkaar brengen van India en Nederland. Dat werk leverde hem zowel een Nederlandse koninklijke onderscheiding op als de hoogste prijs die India aan zijn burgers in het buitenland toekent.",
    en: "Wahid Saleh is a social entrepreneur and community leader based in the Netherlands, and the founder of Indiawijzer. Born in 1941 in Jorhat, Assam, he came to Europe in 1963 and has lived in the Netherlands since 1968. After 38 years in information technology he retired early and devoted himself to bringing India and the Netherlands closer together. That work has earned him both a Dutch royal honour and the highest award India gives to its overseas citizens.",
  },
  introSrc: ["assamTimes", "indianet"],
  photo: {
    src: "/assets/wahid-saleh.jpg", width: 282, height: 610,
    alt: { nl: "Wahid Saleh, met een Assamese gamosa om zijn schouders", en: "Wahid Saleh, wearing an Assamese gamosa around his shoulders" },
  },
  sourcesTitle: { nl: "Bronnen", en: "Sources" },
  sourcesLabel: { nl: "Bronnen", en: "Sources" },

  nl: [
    {
      h: "Van Jorhat naar Nederland",
      parts: [{ p: [
        "Wahid Saleh groeide op in Jorhat, in Rajabari. Door de standplaatsen van zijn vader verhuisde het gezin naar Kohima, waar hij de middelbare school afmaakte. Hij keerde terug naar Jorhat voor zijn eerste studie aan het J.B. College en volgde daarna in Kerala een opleiding tot onderhoudstechnicus voor vliegtuigen. Voordat hij India verliet, werkte hij korte tijd als trainee bij Kalinga Airlines en als leraar in Kohima.",
        "In november 1963 voer hij van Bombay naar Italië en reisde hij door naar München om bij BMW een opleiding voor straalmotoren te volgen. Een krant in Kolkata meldde dat hij de eerste Assamees was die voor zo'n opleiding naar het buitenland werd gestuurd. Daarna werkte hij voor Lufthansa in Hamburg, waar hij 's avonds lessen volgde in programmeren en IT-management.",
        "Duitsland wilde hem geen verblijfsvergunning geven voor IT-werk. Via een headhunter vond hij een IT-baan in Nederland, waar hij in 1968 naartoe verhuisde. Ook zijn hart speelde mee: hij schreef al enige tijd met Hannie, die later zijn vrouw werd.",
      ] }],
      src: ["assamTimes", "mailingList", "heraut"],
    },
    {
      h: "Een loopbaan in de informatietechnologie",
      parts: [{ p: [
        "Wahid Saleh werkte 38 jaar in de IT en doorliep bijna elke functie die het vak kende. Hij was computeroperator, programmeur, systeemanalist, systeemontwerper, manager datacommunicatie, hoofd van een rekencentrum en IT-manager. Bij hetzelfde bedrijf vierde hij zijn 25-jarig dienstjubileum.",
        "Hij ontwierp, kocht en bouwde een datacommunicatienetwerk voor meer dan 5.000 online gebruikers. Daarna ging hij vervroegd met pensioen om zich op sociaal en cultureel werk te richten.",
      ] }],
      src: ["mailingList", "assamTimes"],
    },
    {
      h: "Indiawijzer: van boek naar website",
      parts: [
        { p: ["Indiawijzer begon met vragen. Medewerkers van de Indiase ambassade en het Indiase verkeersbureau in Nederland stuurden Nederlanders met vragen over India regelmatig door naar Wahid Saleh. Hij begon de vragen en zijn antwoorden op te schrijven, en die aantekeningen werden de basis van een boek."] },
        { table: { head: ["Editie", "Jaar", "Omvang", "Opbrengst ging naar"], rows: [
          ["Eerste editie", "1992", "142 pagina's", "Nederland-India Vereniging"],
          ["Tweede editie", "1999", "412 pagina's", "Een onderwijsstichting in Assam"],
        ] } },
        { p: [
          "De tweede editie verscheen onder de titel Indiawijzer: India in Nederland: een overzicht van organisaties en instellingen in Nederland betrokken bij India. Het boek werd in Den Haag uitgegeven door Communicatiebureau Sampreshan (ISBN 9789080509214).",
          "Door de vraag uit de Indiase gemeenschap en van het Nederlandse publiek zette hij de inhoud van het boek online op indiawijzer.nl. Hij had geen achtergrond in webdesign. In ongeveer drie jaar leerde hij HTML en stak hij er meer dan 10.000 uur in. De site groeide uit tot meer dan 3.000 pagina's met informatie over India, waaronder een hoofdstuk over Noordoost-India en Assam.",
          "In 2006 behandelde de site adoptie uit India, ayurveda, culturele organisaties, Nederlandse ngo's die in India actief zijn, Indiaas eten, muziek en dans, de Indiase diaspora, bibliotheken, vertalers, universitair onderwijs en yoga. Er stonden ook statistieken over India, nuttige informatie en een rubriek ‘Vision for India’. Het bekendste onderdeel was een bijna dagelijks bijgewerkte agenda van Indiase culturele evenementen in heel Nederland. De Asian Studies WWW Monitor beoordeelde de site als zeer nuttig voor wetenschappers.",
          "Wahid Saleh beschreef Indiawijzer als een volledig overzicht van de Nederlandse organisaties, instellingen en personen die op de een of andere manier bij India betrokken zijn. De site werd gezien als de belangrijkste bron van informatie over India in Nederland.",
          "De huidige Indiawijzer-site is gemaakt en wordt onderhouden door Qauthar Saleh met behulp van Claude Code.",
        ] },
      ],
      src: ["assamTimes", "biblio", "monitor", "indianet", "comment"],
    },
    {
      h: "Vrijwilligerswerk in Nederland",
      parts: [
        { p: [
          "Kort na zijn aankomst werd Wahid Saleh lid van de Nederland-India Vereniging, een van de oudste culturele verenigingen van het land, opgericht in april 1954. Hij zat 19 jaar in het bestuur, waarvan 15 jaar als secretaris. Hij organiseerde kunsttentoonstellingen en culturele programma's. Ook leidde hij inzamelings- en hulpacties, onder meer voor overstromingen in Assam en Bihar en voor de aardbeving in Gujarat.",
          "Zijn andere werk voor de gemeenschap:",
        ] },
        { ul: [
          "medeoprichter van de Dutch Indian Youth Association;",
          "introductie van Sattriya, de klassieke dans van Assam, in Nederland;",
          "secretaris van de Federatie van Internationale Vriendschaps- en Culturele Organisaties in Nederland;",
          "sinds 2001 cultureel coördinator van het Milan Festival in Den Haag, beschreven als het grootste openluchtfestival van Aziaten op het Europese vasteland.",
        ] },
      ],
      src: ["assamTimes", "mailingList"],
    },
    {
      h: "Opkomen voor de Indiase gemeenschap",
      parts: [
        { p: ["Zijn bekendste campagne was een strijd van zeven jaar om de Nederlandse AOW ook in India uit te betalen. In 2001 kwam India niet op de lijst van landen waar de AOW volledig kon worden uitbetaald. Indiërs en Nederlanders die in India met pensioen gingen, verloren daardoor een deel van hun pensioen. Hij noemde dat onrechtvaardig en zette beide regeringen onder druk met brieven, e-mails, een petitie en gesprekken, tot er een verdrag werd getekend."] },
        { table: { head: ["Datum", "Mijlpaal"], rows: [
          ["22 okt 2009", "Verdrag getekend in New Delhi; einde van de campagne"],
          ["19 sep 2009", "Ministers Donner en Ravi kondigen een ondertekening in oktober aan"],
          ["23 mei 2008", "Saleh hoort op een overheidsbijeenkomst dat het verdrag bijna rond is"],
          ["Begin 2006", "Hij stuurt de ambassade cijfers over AOW-ontvangers in India"],
          ["30 mei 2005", "Petitie aan de Indiase premier, ondertekend door meer dan 100 Indiërs in Nederland"],
          ["14 apr 2003", "De Indiase ambassadeur bevestigt schriftelijk dat India actie onderneemt"],
          ["2002", "Hij vraagt de Indiase ambassade in Den Haag onderhandelingen te openen"],
          ["21 sep 2001", "India komt niet op de lijst van landen waar de AOW kan worden uitbetaald"],
        ] } },
        { p: [
          "Onder het verdrag houden mensen die in het andere land met pensioen gaan hun AOW. Indiase kenniswerkers die naar Nederland worden uitgezonden, zijn bovendien tot 60 maanden vrijgesteld van Nederlandse sociale premies.",
          "Hij heeft ook andere kwesties aangekaart die Indiërs in Nederland raken, zoals de kosten van de PIO-kaart in de eurozone, erkenning van de OCI-kaart, dubbele nationaliteit en dubbele belasting op erfenissen. Daarnaast stelde hij een groep ‘Friends of India’ voor.",
        ] },
      ],
      src: ["indianet", "assamTimes"],
    },
    {
      h: "Werk voor Assam",
      parts: [
        { p: [
          "Wahid Saleh is zijn hele leven in het buitenland nauw betrokken gebleven bij Assam. Samen met zijn vrouw richtte hij een liefdadigheidsfonds op, vernoemd naar zijn ouders, dat studenten in nood steunt. Hij steunt daarnaast Parijat Academy en SHED in Guwahati.",
          "Zijn andere werk voor Assam:",
        ] },
        { ul: [
          "introductie van software voor optische tekenherkenning (OCR) in het Assamees, zodat oude Assamese boeken konden worden gescand en online gezet;",
          "hulp bij de voordracht van mensen uit Assam die daarna internationale prijzen wonnen voor innovatie van onderop en voor de creativiteit van vrouwen op het platteland;",
          "steun voor de voordracht in 2011 van dr. Pradip Sarmah, oprichter van de Rickshaw Bank in Guwahati, voor de Tech Awards in Silicon Valley;",
          "het schrijven van een ‘Vision 20-20’-document over Assam;",
          "een jarenlange campagne om het Assamees aan Google Translate toe te voegen; volgens een Nederlandse lokale krant werd die inzet na vijftien jaar beloond.",
        ] },
        { p: ["Jongere leden van de Assamese diaspora noemen hem een mentor en een ‘levende encyclopedie’ van de Assamese gemeenschap in Europa."] },
      ],
      src: ["assamTimes", "ankurBora", "heraut"],
    },
    {
      h: "Onderscheidingen en erkenning",
      parts: [
        { p: ["Wahid Saleh is zowel door Nederland als door India onderscheiden. Hij was de eerste persoon uit Noordoost-India die de Pravasi Bharatiya Samman ontving, de hoogste Indiase onderscheiding voor Indiërs in het buitenland."] },
        { table: { head: ["Jaar", "Onderscheiding", "Toegekend door"], rows: [
          ["Jan 2011", "Pravasi Bharatiya Samman, voor zijn bijdrage aan diasporakwesties", "De president van India, Pratibha Patil"],
          ["Onbekend", "Pravasi Community Service Award, uitgereikt in New Delhi", "GOPIO (Global Organisation of People of Indian Origin)"],
          ["Apr 2002", "Ridder in de Orde van Oranje-Nassau, voor het bevorderen van multiculturele activiteiten en begrip tussen India en Nederland", "Koningin Beatrix"],
          ["1998", "Golden Jubilee Community Service Award", "De Indiase gemeenschap in Nederland, uitgereikt door de burgemeester van Zoetermeer en de Indiase ambassadeur"],
        ] } },
        { p: ["De koninklijke onderscheiding gaat normaal gesproken naar Nederlanders; hij is vermoedelijk de eerste Indiase staatsburger die haar ontving. Hij was ook een van de genodigde sprekers op de eerste Pravasi Bharatiya Divas in New Delhi, naast Amartya Sen, Lord Meghnad Desai, Salman Rushdie, L.N. Mittal, de familie Hinduja en Lord Swraj Paul. De ambassade van India in Den Haag noemt hem als een van de drie vooraanstaande personen van Indiase afkomst in Nederland die de Pravasi Bharatiya Samman ontvingen."] },
      ],
      src: ["embassy", "ankurBora", "heraut2", "assamTimes", "mailingList"],
    },
    {
      h: "Waarden en advies",
      parts: [
        { p: ["Wahid Saleh staat bekend om zijn arbeidsethos, integriteit en eerlijkheid. In een stuk in de Assam Tribune uit 2016, en in eerdere interviews, vatte hij zijn advies aan jongeren samen in vijf principes:"] },
        { ol: [
          "Blijf trouw aan jezelf. Sta voor je overtuigingen in plaats van te leven naar wat de maatschappij verwacht.",
          "Begin klein. Doe één ding tegelijk en bouw zelfvertrouwen op met kleine successen.",
          "Neem geen kortere weg. Werk hard zonder beloning te verwachten; succes moet je verdienen.",
          "Blijf leren. Blijf jezelf verbeteren om bij de tijd te blijven.",
          "Kom je woord na. Een beschadigde reputatie is moeilijk te herstellen.",
        ] },
      ],
      src: ["ankurBora", "assamTimes"],
    },
  ],

  en: [
    {
      h: "From Jorhat to the Netherlands",
      parts: [{ p: [
        "Wahid Saleh grew up in Jorhat, in Rajabari. His father’s postings took the family to Kohima, where he finished school. He returned to Jorhat for his first degree at J.B. College and then trained in aircraft maintenance engineering in Kerala. Before leaving India he worked briefly as a trainee with Kalinga Airlines and as a teacher in Kohima.",
        "In November 1963 he sailed from Bombay to Italy and travelled on to Munich to train on jet engines with BMW. A Kolkata newspaper reported him as the first Assamese sent abroad for jet engine training. He then worked for Lufthansa in Hamburg, taking evening classes in programming and IT management.",
        "Germany would not give him a residence permit for IT work, so he found an IT job in the Netherlands through a headhunter and moved there in 1968. His heart played a part too: he had been writing for some time to Hannie, who became his wife.",
      ] }],
      src: ["assamTimes", "mailingList", "heraut"],
    },
    {
      h: "A career in information technology",
      parts: [{ p: [
        "Wahid Saleh spent 38 years in IT and worked his way through almost every role the field had. He was a computer operator, programmer, systems analyst, system designer, data communication manager, computer centre manager and IT manager. He marked 25 years of service with the same company.",
        "He designed, procured and implemented a data communication network for more than 5,000 online users. He then took early retirement to focus on social and cultural work.",
      ] }],
      src: ["mailingList", "assamTimes"],
    },
    {
      h: "Indiawijzer: from book to website",
      parts: [
        { p: ["Indiawijzer began with questions. Staff at the Indian Embassy and the Indian Tourist Office in the Netherlands regularly sent members of the Dutch public to Wahid Saleh with their queries about India. He began writing down the questions and his answers, and these notes became the basis of a book."] },
        { table: { head: ["Edition", "Year", "Size", "Proceeds went to"], rows: [
          ["First edition", "1992", "142 pages", "Netherlands-India Association"],
          ["Second edition", "1999", "412 pages", "An educational foundation in Assam"],
        ] } },
        { p: [
          "The second edition appeared under the title Indiawijzer: India in Nederland: een overzicht van organisaties en instellingen in Nederland betrokken bij India. It was published in The Hague by Communicatiebureau Sampreshan (ISBN 9789080509214).",
          "Demand from the Indian community and the Dutch public led him to put the book’s contents online at indiawijzer.nl. He had no background in web design. Over about three years he learned HTML, investing more than 10,000 hours. The site grew to more than 3,000 pages of India-related information, including a chapter on Northeast India and Assam.",
          "By 2006 the site covered adoption from India, Ayurveda, cultural organisations, Dutch NGOs active in India, Indian food, music and dance, the Indian diaspora, libraries, translators, university education and yoga. It also offered statistics on India, useful information and a “Vision for India” section. Its best-known feature was an agenda of Indian cultural events across the Netherlands, updated almost daily. The Asian Studies WWW Monitor rated the site as very useful for scholars.",
          "Wahid Saleh described Indiawijzer as a full overview of the Dutch organisations, institutions and individuals involved with India in one way or another. It came to be accepted as the main source of India-related information in the Netherlands.",
          "The current Indiawijzer site is created and maintained by Qauthar Saleh using Claude Code.",
        ] },
      ],
      src: ["assamTimes", "biblio", "monitor", "indianet", "comment"],
    },
    {
      h: "Community work in the Netherlands",
      parts: [
        { p: [
          "Soon after arriving, Wahid Saleh joined the Netherlands-India Association, one of the oldest cultural associations in the country, founded in April 1954. He served on its board for 19 years, 15 of them as secretary. He organised art exhibitions and cultural programmes. He also led fundraising and relief campaigns, including for floods in Assam and Bihar and for the Gujarat earthquake.",
          "His other community work includes:",
        ] },
        { ul: [
          "Helping to found the Dutch Indian Youth Association",
          "Introducing Sattriya, the classical dance of Assam, to the Netherlands",
          "Serving as secretary of the Federation of International Friendship and Cultural Organisations in the Netherlands",
          "Acting since 2001 as a cultural coordinator of the Milan Festival in The Hague, described as the largest open-air festival of Asians on the European mainland",
        ] },
      ],
      src: ["assamTimes", "mailingList"],
    },
    {
      h: "Advocacy for the Indian community",
      parts: [
        { p: ["Wahid Saleh’s best-known campaign was a seven-year effort to keep Dutch state pensions (AOW) payable in India. In 2001 India was left off the list of countries where AOW could be paid in full. Indians, and Dutch nationals, who retired to India therefore lost part of their pension. He called this unjust and pressed both governments through letters, emails, a petition and meetings until a treaty was signed."] },
        { table: { head: ["Date", "Milestone"], rows: [
          ["22 Oct 2009", "Treaty signed in New Delhi, ending the campaign"],
          ["19 Sep 2009", "Ministers Donner and Ravi announce a signing for October"],
          ["23 May 2008", "Saleh hears at a government event that the agreement is almost final"],
          ["Early 2006", "He sends the embassy figures on AOW recipients in India"],
          ["30 May 2005", "Petition to India’s prime minister, signed by more than 100 Indians in the Netherlands"],
          ["14 Apr 2003", "Indian ambassador confirms in writing that India will act"],
          ["2002", "He asks the Indian embassy in The Hague to open negotiations"],
          ["21 Sep 2001", "India left off the list of countries where AOW can be paid"],
        ] } },
        { p: [
          "Under the treaty, people who retire to the other country keep their AOW. Indian knowledge workers posted to the Netherlands are also exempt from Dutch social premiums for up to 60 months.",
          "He has raised other issues affecting Indians in the Netherlands as well. These include PIO card fees in the eurozone, recognition of the OCI card, dual nationality and double taxation of inheritances. He also proposed a “Friends of India” group.",
        ] },
      ],
      src: ["indianet", "assamTimes"],
    },
    {
      h: "Work for Assam",
      parts: [
        { p: [
          "Wahid Saleh has stayed closely involved with Assam throughout his life abroad. He and his wife set up a charitable trust, named after his parents, that supports students in need. He also supports Parijat Academy and SHED in Guwahati.",
          "His other work for Assam includes:",
        ] },
        { ul: [
          "Introducing an Assamese optical character recognition (OCR) tool, so that old Assamese books could be scanned and put online",
          "Helping nominate people from Assam who went on to win international awards for grassroots innovation and for women’s creativity in rural life",
          "Supporting the 2011 nomination of Dr. Pradip Sarmah, founder of Guwahati’s Rickshaw Bank, for the Tech Awards in Silicon Valley",
          "Writing a “Vision 20-20” document on Assam",
          "Campaigning for many years for Assamese to be added to Google Translate, an effort a Dutch local paper reported as rewarded after fifteen years",
        ] },
        { p: ["Younger members of the Assamese diaspora describe him as a mentor and a “living encyclopedia” of the Assamese community in Europe."] },
      ],
      src: ["assamTimes", "ankurBora", "heraut"],
    },
    {
      h: "Honours and recognition",
      parts: [
        { p: ["Wahid Saleh has been honoured by both the Netherlands and India. He was the first person from Northeast India to receive the Pravasi Bharatiya Samman, India’s highest award for overseas Indians."] },
        { table: { head: ["Year", "Honour", "Awarded by"], rows: [
          ["Jan 2011", "Pravasi Bharatiya Samman, for his contribution to diaspora-related issues", "President of India, Pratibha Patil"],
          ["Not stated", "Pravasi Community Service Award, presented in New Delhi", "GOPIO (Global Organisation of People of Indian Origin)"],
          ["Apr 2002", "Knight of the Order of Orange-Nassau, for promoting multicultural activities and understanding between India and the Netherlands", "Queen Beatrix of the Netherlands"],
          ["1998", "Golden Jubilee Community Service Award", "The Indian community in the Netherlands, presented by the Mayor of Zoetermeer and the Indian Ambassador"],
        ] } },
        { p: ["The royal honour is normally given to Dutch nationals, and he is believed to be the first Indian national to receive it. He was also one of the invited speakers at the first Pravasi Bharatiya Divas in New Delhi, alongside Amartya Sen, Lord Meghnad Desai, Salman Rushdie, L.N. Mittal, the Hinduja family and Lord Swraj Paul. The Embassy of India in The Hague names him as one of three prominent persons of Indian origin in the Netherlands to have received the Pravasi Bharatiya Samman."] },
      ],
      src: ["embassy", "ankurBora", "heraut2", "assamTimes", "mailingList"],
    },
    {
      h: "Values and advice",
      parts: [
        { p: ["Wahid Saleh is known for his work ethic, integrity and honesty. In a 2016 piece in the Assam Tribune, and in earlier interviews, he summed up his advice to young people in five principles:"] },
        { ol: [
          "Be true to yourself. Stand by your convictions rather than living up to what society expects.",
          "Start small. Do one thing at a time and build confidence through small achievements.",
          "Take no shortcuts. Work hard without expecting rewards; success has to be earned.",
          "Keep learning. Keep improving to stay relevant.",
          "Keep your word. A damaged reputation is hard to repair.",
        ] },
      ],
      src: ["ankurBora", "assamTimes"],
    },
  ],
};
