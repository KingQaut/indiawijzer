// More topics, added to the end of the section named by its Dutch slug.
// Same format as content/index.js (see the explanation at the top of that file).

const g = (q) => `https://www.google.com/search?q=${encodeURIComponent(q)}`;
const m = (q) => `https://www.google.com/maps/search/${encodeURIComponent(q)}/`;

export const extra = {
  // ───────────────────────────────────────────────────────────────────────────
  "india-in-nederland": [
    {
      slug: { nl: "ayurveda", en: "ayurveda" },
      title: { nl: "Ayurveda", en: "Ayurveda" },
      intro: {
        nl: "Wat ayurveda is, waar u het in Nederland vindt en waar u op moet letten.",
        en: "What ayurveda is, where to find it in the Netherlands and what to watch out for.",
      },
      body: {
        nl: [
          "Ayurveda is de traditionele geneeswijze van India, gebaseerd op voeding, kruiden, massage en leefregels. In India is het een erkende opleiding met een eigen ministerie (AYUSH). In Nederland bieden praktijken vooral consulten, massages en kuren aan.",
          "In Nederland is ayurveda niet wettelijk geregeld: iedereen mag zich ayurvedisch therapeut noemen, en zorgverzekeraars vergoeden het hooguit via een aanvullende verzekering. Vraag naar de opleiding van de behandelaar, stop niet met medicijnen zonder overleg met uw arts en vertel uw huisarts wat u gebruikt.",
          "Let op met kruidenmiddelen die u online of in het buitenland koopt. Toezichthouders hebben herhaaldelijk gewaarschuwd voor ayurvedische preparaten waarin lood, kwik of arseen zat. Koop bij een betrouwbare verkoper en meld bijwerkingen bij Lareb.",
        ],
        en: [
          "Ayurveda is India's traditional system of medicine, built on diet, herbs, massage and rules for living. In India it is a recognised profession with its own ministry (AYUSH). In the Netherlands, practices mainly offer consultations, massage and treatment programmes.",
          "Ayurveda is not regulated by law in the Netherlands: anyone may call themselves an ayurvedic therapist, and health insurers cover it at most through supplementary insurance. Ask about the practitioner's training, never stop medication without consulting your doctor, and tell your GP what you are taking.",
          "Be careful with herbal products bought online or abroad. Regulators have repeatedly warned about ayurvedic preparations containing lead, mercury or arsenic. Buy from a reliable seller and report side effects to Lareb.",
        ],
      },
      live: [
        { u: m("ayurveda"), t: { nl: "Ayurveda bij mij in de buurt", en: "Ayurveda near me" } },
        { u: m("ayurvedische massage"), t: { nl: "Ayurvedische massage", en: "Ayurvedic massage" } },
        { u: g("ayurveda retreat Kerala"), t: { nl: "Ayurvedakuren in Kerala", en: "Ayurveda retreats in Kerala" } },
      ],
      links: [
        { u: "https://ayush.gov.in/", t: { nl: "Ministerie van AYUSH (India)", en: "Ministry of AYUSH (India)" }, d: { nl: "Het Indiase ministerie voor ayurveda, yoga en andere traditionele geneeswijzen.", en: "India's ministry for ayurveda, yoga and other traditional systems." } },
        { u: "https://www.lareb.nl/", t: "Bijwerkingencentrum Lareb", d: { nl: "Bijwerkingen van (kruiden)middelen melden.", en: "Report side effects of medicines and herbal products." } },
        { u: "https://www.nvwa.nl/", t: "NVWA", d: { nl: "Toezicht op kruidenpreparaten en voedingssupplementen.", en: "Dutch authority supervising herbal preparations and supplements." } },
      ],
    },
    {
      slug: { nl: "dans-muziek", en: "dance-music" },
      title: { nl: "Dans en muziek", en: "Dance and music" },
      intro: {
        nl: "Klassieke Indiase dans, Bollywood en bhangra, sitar en tabla: lessen en optredens.",
        en: "Classical Indian dance, Bollywood and bhangra, sitar and tabla: classes and performances.",
      },
      body: {
        nl: [
          "India kent acht klassieke dansvormen, waarvan bharatanatyam, kathak en odissi in Nederland het meest worden onderwezen. Daarnaast zijn er volop lessen in Bollywooddans, bhangra en garba, vaak ook voor kinderen.",
          "Voor muziek kunt u terecht bij privédocenten en muziekscholen voor zang, harmonium, tabla, sitar of bansuri. Het Rotterdamse conservatorium Codarts heeft een eigen opleiding Indiase muziek. Scholen en docenten wisselen vaak; gebruik daarom de zoekknoppen hieronder.",
        ],
        en: [
          "India has eight classical dance forms; bharatanatyam, kathak and odissi are the ones most often taught in the Netherlands. There are also plenty of classes in Bollywood dance, bhangra and garba, often for children too.",
          "For music, private teachers and music schools offer vocal training, harmonium, tabla, sitar or bansuri. The Rotterdam conservatoire Codarts runs its own Indian music programme. Schools and teachers change often, so use the search buttons below.",
        ],
      },
      live: [
        { u: g("bharatanatyam les Nederland"), t: { nl: "Bharatanatyamlessen", en: "Bharatanatyam classes" } },
        { u: g("kathak les Nederland"), t: { nl: "Kathaklessen", en: "Kathak classes" } },
        { u: m("Bollywood dansles"), t: { nl: "Bollywooddans in de buurt", en: "Bollywood dance near me" } },
        { u: g("bhangra les Nederland"), t: { nl: "Bhangralessen", en: "Bhangra classes" } },
        { u: g("tabla sitar les Nederland"), t: { nl: "Tabla- en sitarles", en: "Tabla and sitar lessons" } },
        { u: g("Indiase klassieke muziek concert Nederland"), t: { nl: "Concerten Indiase muziek", en: "Indian music concerts" } },
      ],
      links: [
        { u: "https://www.codarts.nl/", t: "Codarts Rotterdam", d: { nl: "Conservatorium met een opleiding Indiase muziek.", en: "Conservatoire with an Indian music programme." } },
        { u: "https://www.sangeetnatak.gov.in/", t: "Sangeet Natak Akademi", d: { nl: "De Indiase nationale academie voor muziek, dans en drama.", en: "India's national academy of music, dance and drama." } },
      ],
    },
    {
      slug: { nl: "bruiloft", en: "wedding" },
      title: { nl: "Indiase bruiloft in Nederland", en: "An Indian wedding in the Netherlands" },
      intro: {
        nl: "Van pandit en mandap tot mehndi en catering: zo vindt u wat u nodig hebt.",
        en: "From pandit and mandap to mehndi and catering: how to find what you need.",
      },
      body: {
        nl: [
          "Een hindoeïstische, sikh- of jaïnceremonie is in Nederland op zichzelf niet rechtsgeldig. Wettelijk trouwt u bij de gemeente, en een religieuze plechtigheid mag pas ná het burgerlijk huwelijk plaatsvinden. Veel paren plannen beide op dezelfde dag of kort na elkaar.",
          "Voor de ceremonie zelf zoekt u een pandit, granthi of andere voorganger, vaak via een tempel of gurdwara. Leveranciers voor decoratie, catering, mehndi, muziek en fotografie wisselen snel; de zoekknoppen hieronder tonen het actuele aanbod.",
        ],
        en: [
          "A Hindu, Sikh or Jain ceremony is not legally valid in the Netherlands on its own. The legal marriage takes place at the municipality, and a religious ceremony may only be held after the civil marriage. Many couples plan both on the same day or close together.",
          "For the ceremony itself you need a pandit, granthi or other officiant, often found through a temple or gurdwara. Suppliers of decoration, catering, mehndi, music and photography change quickly; the search buttons below show who is active now.",
        ],
      },
      live: [
        { u: g("pandit hindoe huwelijk Nederland"), t: { nl: "Pandit voor een huwelijk", en: "Pandit for a wedding" } },
        { u: g("mandap decoratie bruiloft Nederland"), t: { nl: "Mandap en decoratie", en: "Mandap and decoration" } },
        { u: g("Indiase catering bruiloft Nederland"), t: { nl: "Indiase catering", en: "Indian catering" } },
        { u: m("mehndi henna artiest"), t: { nl: "Mehndi en henna", en: "Mehndi and henna" } },
        { u: g("Indiase bruidsmake-up Nederland"), t: { nl: "Bruidsmake-up", en: "Bridal make-up" } },
        { u: g("dhol spelers bruiloft Nederland"), t: { nl: "Dholspelers", en: "Dhol players" } },
      ],
      links: [
        { u: "https://www.rijksoverheid.nl/onderwerpen/trouwen-samenlevingscontract-en-geregistreerd-partnerschap", t: { nl: "Rijksoverheid: trouwen", en: "Dutch government: getting married" }, d: { nl: "Voorwaarden en stappen voor het burgerlijk huwelijk.", en: "Conditions and steps for a civil marriage (in Dutch)." } },
      ],
    },
    {
      slug: { nl: "talen", en: "languages" },
      title: { nl: "Indiase talen leren", en: "Learning Indian languages" },
      intro: {
        nl: "Hindi, Sanskriet, Tamil of Sarnami leren, voor volwassenen en kinderen.",
        en: "Learning Hindi, Sanskrit, Tamil or Sarnami, for adults and children.",
      },
      body: {
        nl: [
          "India heeft 22 officieel erkende talen en honderden andere. Hindi en Engels zijn de bestuurstalen van de centrale overheid; in het zuiden spreekt men vooral Tamil, Telugu, Kannada en Malayalam. De Universiteit Leiden is in Nederland het centrum voor de studie van Hindi, Sanskriet en Zuid-Azië.",
          "Sarnami is de taal van de Surinaamse Hindostanen, ontstaan uit Noord-Indiase talen als Bhojpuri en Awadhi. Voor kinderen organiseren taalverenigingen en tempels weekendlessen in onder meer Tamil, Telugu, Marathi, Bengaals en Hindi; zoek op de taal en uw woonplaats.",
          "Een paar woorden die het Nederlands uit India heeft: pyjama, bungalow, shampoo, jungle, kaki en goeroe.",
        ],
        en: [
          "India has 22 officially recognised languages and hundreds more. Hindi and English are the working languages of the central government; in the south people mainly speak Tamil, Telugu, Kannada and Malayalam. In the Netherlands, Leiden University is the centre for the study of Hindi, Sanskrit and South Asia.",
          "Sarnami is the language of the Surinamese Hindustanis, grown out of North Indian languages such as Bhojpuri and Awadhi. For children, language associations and temples run weekend classes in Tamil, Telugu, Marathi, Bengali, Hindi and more; search for the language and your town.",
          "A few words that Dutch and English took from India: pyjamas, bungalow, shampoo, jungle, khaki and guru.",
        ],
      },
      live: [
        { u: g("Hindi cursus Nederland"), t: { nl: "Cursus Hindi", en: "Hindi course" } },
        { u: g("Sanskriet cursus Nederland"), t: { nl: "Cursus Sanskriet", en: "Sanskrit course" } },
        { u: g("Tamil school kinderen Nederland"), t: { nl: "Tamilles voor kinderen", en: "Tamil classes for children" } },
        { u: g("Telugu Marathi Bengali lessen kinderen Nederland"), t: { nl: "Telugu, Marathi, Bengaals", en: "Telugu, Marathi, Bengali" } },
        { u: g("Sarnami leren"), t: { nl: "Sarnami leren", en: "Learn Sarnami" } },
      ],
      links: [
        { u: "https://www.universiteitleiden.nl/", t: "Universiteit Leiden", d: { nl: "Opleidingen Zuid- en Zuidoost-Aziëstudies, met Hindi en Sanskriet.", en: "South and Southeast Asian Studies, with Hindi and Sanskrit." } },
        { u: "https://www.iccr.gov.in/", t: "ICCR", d: { nl: "Indiase culturele raad: beurzen en taalcursussen.", en: "Indian Council for Cultural Relations: scholarships and language courses." } },
      ],
    },
    {
      slug: { nl: "musea-archieven", en: "museums-archives" },
      title: { nl: "Musea en archieven", en: "Museums and archives" },
      intro: {
        nl: "Waar u in Nederland Indiase kunst ziet en waar u voorouders uit India en Suriname opzoekt.",
        en: "Where to see Indian art in the Netherlands and where to trace ancestors from India and Suriname.",
      },
      body: {
        nl: [
          "Het Rijksmuseum in Amsterdam toont in het Aziatisch Paviljoen Indiase bronzen en beelden, waaronder een beroemde dansende Shiva. Het Wereldmuseum, met vestigingen in Amsterdam, Leiden en Rotterdam, heeft grote collecties uit Zuid-Azië.",
          "Het Nationaal Archief in Den Haag bewaart het archief van de VOC, dat is opgenomen in het Memory of the World-register van UNESCO en veel over de Nederlandse handelsposten in India bevat. Ook vindt u er de gegevens van de Hindostaanse contractarbeiders die tussen 1873 en 1916 van India naar Suriname voeren: voor veel Surinaamse Hindostanen het begin van hun stamboom.",
        ],
        en: [
          "The Rijksmuseum in Amsterdam shows Indian bronzes and sculpture in its Asian Pavilion, including a famous dancing Shiva. The Wereldmuseum, with branches in Amsterdam, Leiden and Rotterdam, holds large South Asian collections.",
          "The National Archives in The Hague keep the records of the Dutch East India Company (VOC), inscribed on UNESCO's Memory of the World register and rich in material on the Dutch trading posts in India. They also hold the records of the Hindustani indentured labourers who sailed from India to Suriname between 1873 and 1916: for many Surinamese Hindustanis the start of their family tree.",
        ],
      },
      live: [
        { u: g("tentoonstelling India Nederland"), t: { nl: "Tentoonstellingen over India", en: "Exhibitions about India" } },
      ],
      links: [
        { u: "https://www.rijksmuseum.nl/", t: "Rijksmuseum", d: { nl: "Aziatisch Paviljoen met Indiase kunst.", en: "Asian Pavilion with Indian art." } },
        { u: "https://www.wereldmuseum.nl/", t: "Wereldmuseum", d: { nl: "Amsterdam, Leiden en Rotterdam.", en: "Amsterdam, Leiden and Rotterdam." } },
        { u: "https://www.nationaalarchief.nl/", t: "Nationaal Archief", d: { nl: "VOC-archief en de index van Hindostaanse contractarbeiders.", en: "VOC archives and the index of Hindustani indentured labourers." } },
      ],
    },
    {
      slug: { nl: "gandhi", en: "gandhi" },
      title: { nl: "Gandhi in Nederland", en: "Gandhi in the Netherlands" },
      intro: {
        nl: "Standbeelden, straten en pleinen die naar Mahatma Gandhi zijn genoemd.",
        en: "Statues, streets and squares named after Mahatma Gandhi.",
      },
      body: {
        nl: [
          "Mahatma Gandhi is zelf nooit in Nederland geweest, maar zijn naam is op veel plaatsen te vinden. Bij de standbeelden in Amsterdam en Den Haag worden elk jaar op 2 oktober, zijn geboortedag en de Internationale Dag van de Geweldloosheid, bloemen gelegd.",
          "De lijst hieronder komt uit Wikidata, de vrije kennisbank achter Wikipedia, en wordt automatisch bijgewerkt. Ontbreekt er iets? Dan kunt u het daar zelf toevoegen.",
        ],
        en: [
          "Mahatma Gandhi never visited the Netherlands himself, but his name can be found in many places. At the statues in Amsterdam and The Hague, flowers are laid every year on 2 October, his birthday and the International Day of Non-Violence.",
          "The list below comes from Wikidata, the free knowledge base behind Wikipedia, and is updated automatically. Is something missing? You can add it there yourself.",
        ],
      },
      finder: "gandhi",
      links: [
        { u: "https://www.wikidata.org/", t: "Wikidata", d: { nl: "Zelf een gedenkteken toevoegen of verbeteren.", en: "Add or correct a memorial yourself." } },
        { u: "https://www.un.org/en/observances/non-violence-day", t: { nl: "Internationale Dag van de Geweldloosheid (VN)", en: "International Day of Non-Violence (UN)" }, d: { nl: "Achtergrond bij 2 oktober.", en: "Background to 2 October." } },
      ],
    },
  ],

  // ───────────────────────────────────────────────────────────────────────────
  "naar-nederland": [
    {
      slug: { nl: "familie-laten-overkomen", en: "bringing-family" },
      title: { nl: "Ouders en familie laten overkomen", en: "Bringing parents and family over" },
      intro: {
        nl: "Bezoek van ouders, en verblijf voor partner en kinderen.",
        en: "Visits from parents, and residence for your partner and children.",
      },
      body: {
        nl: [
          "Voor een bezoek van maximaal 90 dagen hebben Indiase familieleden een Schengenvisum nodig. U kunt als gastheer of gastvrouw een formulier voor logiesverstrekking en garantstelling invullen en bij uw gemeente laten legaliseren. Een reisverzekering met medische dekking voor het hele verblijf is verplicht.",
          "Uw partner en minderjarige kinderen kunnen een verblijfsvergunning krijgen als u aan de voorwaarden van de IND voldoet; voor kennismigranten geldt meestal een snellere procedure. Voor ouders bestaat in Nederland geen gewone verblijfsvergunning: langer blijven dan het visum toestaat kan alleen in uitzonderlijke gevallen. De IND beschrijft de actuele voorwaarden en kosten.",
        ],
        en: [
          "For a visit of up to 90 days, Indian relatives need a Schengen visa. As the host you can fill in a sponsorship and accommodation form and have it legalised at your municipality. Travel insurance with medical cover for the whole stay is compulsory.",
          "Your partner and minor children can get a residence permit if you meet the IND's conditions; for highly skilled migrants the procedure is usually faster. There is no ordinary residence permit for parents in the Netherlands: staying longer than the visa allows is only possible in exceptional cases. The IND sets out the current conditions and fees.",
        ],
      },
      live: [
        { u: g("reisverzekering Schengenvisum ouders bezoek Nederland"), t: { nl: "Reisverzekering voor bezoekers", en: "Travel insurance for visitors" } },
      ],
      links: [
        { u: "https://ind.nl/", t: "IND", d: { nl: "Verblijf voor partner, kinderen en andere familieleden.", en: "Residence for partners, children and other relatives." } },
        { u: "https://www.netherlandsworldwide.nl/", t: "Netherlands Worldwide", d: { nl: "Schengenvisum aanvragen vanuit India, inclusief het formulier voor garantstelling.", en: "Applying for a Schengen visa from India, including the sponsorship form." } },
      ],
    },
    {
      slug: { nl: "diploma-rijbewijs", en: "diplomas-driving-licence" },
      title: { nl: "Diploma's en rijbewijs", en: "Diplomas and driving licence" },
      intro: {
        nl: "Uw Indiase diploma laten waarderen, een beschermd beroep uitoefenen en uw rijbewijs omwisselen.",
        en: "Having your Indian diploma evaluated, working in a protected profession and exchanging your driving licence.",
      },
      body: {
        nl: [
          "Werkgevers en opleidingen willen soms weten wat een Indiaas diploma in Nederland waard is. Die diplomawaardering vraagt u aan via IDW, het samenwerkingsverband van Nuffic en SBB. Voor beroepen als arts, verpleegkundige, tandarts of fysiotherapeut is bovendien registratie in het BIG-register verplicht, met voor buitenlandse diploma's een eigen toetsing.",
          "Met een Indiaas rijbewijs mag u na inschrijving in Nederland nog een beperkte tijd rijden. Omwisselen voor een Nederlands rijbewijs kan in de regel alleen als u de 30%-regeling hebt; anders doet u opnieuw theorie- en praktijkexamen bij het CBR. De RDW geeft de actuele regels.",
        ],
        en: [
          "Employers and schools sometimes want to know what an Indian diploma is worth in the Netherlands. You request this credential evaluation through IDW, the joint service of Nuffic and SBB. For professions such as doctor, nurse, dentist or physiotherapist, registration in the BIG register is also compulsory, with a separate assessment for foreign diplomas.",
          "With an Indian driving licence you may keep driving for a limited time after registering in the Netherlands. Exchanging it for a Dutch licence is generally only possible if you have the 30% ruling; otherwise you take the theory and practical tests again at the CBR. The RDW gives the current rules.",
        ],
      },
      links: [
        { u: "https://www.idw.nl/", t: "IDW", d: { nl: "Diplomawaardering aanvragen.", en: "Request a credential evaluation." } },
        { u: "https://www.nuffic.nl/", t: "Nuffic", d: { nl: "Uitleg over het Indiase onderwijssysteem en de waarde van diploma's.", en: "Explains the Indian education system and the value of diplomas." } },
        { u: "https://www.bigregister.nl/", t: "BIG-register", d: { nl: "Registratie voor zorgberoepen met een buitenlands diploma.", en: "Registration for healthcare professions with a foreign diploma." } },
        { u: "https://www.rdw.nl/", t: "RDW", d: { nl: "Rijden met en omwisselen van een buitenlands rijbewijs.", en: "Driving with and exchanging a foreign licence." } },
        { u: "https://www.cbr.nl/", t: "CBR", d: { nl: "Theorie- en praktijkexamens.", en: "Theory and practical driving tests." } },
      ],
    },
    {
      slug: { nl: "oplichting-noodgevallen", en: "scams-emergencies" },
      title: { nl: "Oplichting en noodgevallen", en: "Scams and emergencies" },
      intro: {
        nl: "Valse telefoontjes, nepwoningen en wie u belt als het misgaat.",
        en: "Fake phone calls, fake rentals and who to call when things go wrong.",
      },
      body: {
        nl: [
          "Oplichters bellen Indiërs in Nederland en doen zich voor als de IND, de politie, de ambassade of de Belastingdienst. Ze dreigen met uitzetting of arrestatie en eisen direct geld, cadeaukaarten of bankgegevens. Echte instanties doen dat nooit. Hang op, betaal niets en bel zelf het officiële nummer van de instantie.",
          "Wees ook alert bij het zoeken naar woonruimte: betaal geen borg of huur voordat u de woning en het contract hebt gezien, en wantrouw verhuurders die 'in het buitenland zitten'. Meld oplichting bij de Fraudehelpdesk en doe aangifte bij de politie.",
          "Bij direct gevaar belt u 112, het alarmnummer voor politie, brandweer en ambulance. Voor de huisarts buiten kantoortijd belt u de huisartsenpost in uw regio. De Indiase ambassade in Den Haag helpt Indiase staatsburgers in nood, bijvoorbeeld bij een verloren paspoort of een overlijden.",
        ],
        en: [
          "Scammers phone Indians in the Netherlands pretending to be the IND, the police, the embassy or the tax office. They threaten deportation or arrest and demand money, gift cards or bank details on the spot. Real authorities never do this. Hang up, pay nothing and call the authority's official number yourself.",
          "Stay alert when looking for housing too: do not pay a deposit or rent before you have seen the home and the contract, and distrust landlords who are 'abroad'. Report scams to the Fraudehelpdesk and file a report with the police.",
          "In immediate danger, call 112, the emergency number for police, fire brigade and ambulance. For a doctor outside office hours, call the out-of-hours GP service (huisartsenpost) in your region. The Indian embassy in The Hague helps Indian citizens in distress, for example after losing a passport or a death.",
        ],
      },
      links: [
        { u: "https://www.fraudehelpdesk.nl/", t: "Fraudehelpdesk", d: { nl: "Oplichting melden en advies krijgen.", en: "Report scams and get advice." } },
        { u: "https://www.politie.nl/", t: { nl: "Politie", en: "Dutch police" }, d: { nl: "Aangifte doen; 112 bij spoed.", en: "File a report; 112 in emergencies." } },
        { u: "https://ind.nl/", t: "IND", d: { nl: "Waarschuwingen voor valse telefoontjes en e-mails.", en: "Warnings about fake calls and e-mails." } },
        { u: "https://www.indianembassynetherlands.gov.in/", t: { nl: "Indiase ambassade in Den Haag", en: "Embassy of India, The Hague" }, d: { nl: "Consulaire hulp voor Indiase staatsburgers.", en: "Consular help for Indian citizens." } },
        { u: "https://veiligthuis.nl/", t: "Veilig Thuis", d: { nl: "Advies en hulp bij huiselijk geweld.", en: "Advice and help with domestic violence." } },
      ],
    },
    {
      slug: { nl: "nederlandse-gewoonten", en: "dutch-customs" },
      title: { nl: "Nederlandse gewoonten", en: "Dutch customs explained" },
      intro: {
        nl: "Directheid, agenda's, verjaardagen en de fiets: wat nieuwkomers uit India het meest verbaast.",
        en: "Directness, diaries, birthdays and the bicycle: what surprises newcomers from India most.",
      },
      body: {
        nl: [
          "Nederlanders zeggen wat ze denken en bedoelen dat niet onbeleefd. 'Nee' is een gewoon antwoord, ook tegen een leidinggevende. Afspraken maakt men vooruit, ook met vrienden: onaangekondigd langskomen is ongebruikelijk, en te laat komen wordt snel als onbeleefd gezien.",
          "Op een verjaardag feliciteert u niet alleen de jarige maar ook de familie, en zit iedereen in een kring. De warme maaltijd is 's avonds, vaak al rond zes uur; de lunch is meestal brood. In een restaurant betaalt ieder vaak voor zichzelf.",
          "De fiets is hét vervoermiddel. Veel gemeenten en vrijwilligersorganisaties geven fietslessen voor volwassenen. Kinderen halen op jonge leeftijd een zwemdiploma. En in de donkere winter adviseert de Gezondheidsraad mensen met een donkere huid extra vitamine D.",
        ],
        en: [
          "The Dutch say what they think and do not mean it rudely. 'No' is a normal answer, even to a manager. Appointments are made in advance, also with friends: dropping by unannounced is unusual, and arriving late is quickly seen as impolite.",
          "At a birthday you congratulate not only the birthday person but the family as well, and everyone sits in a circle. The hot meal is in the evening, often as early as six; lunch is usually bread. In a restaurant people often each pay for themselves.",
          "The bicycle is the way to get around. Many municipalities and volunteer organisations offer cycling lessons for adults. Children earn a swimming diploma at a young age. And for the dark winter, the Health Council advises extra vitamin D for people with dark skin.",
        ],
      },
      live: [
        { u: g("fietsles volwassenen"), t: { nl: "Fietsles voor volwassenen", en: "Cycling lessons for adults" } },
        { u: g("zwemles volwassenen"), t: { nl: "Zwemles voor volwassenen", en: "Swimming lessons for adults" } },
      ],
      links: [
        { u: "https://www.government.nl/", t: "Government.nl", d: { nl: "De Nederlandse overheid in het Engels.", en: "The Dutch government in English." } },
        { u: "https://www.voedingscentrum.nl/", t: "Voedingscentrum", d: { nl: "Advies over vitamine D.", en: "Advice on vitamin D (in Dutch)." } },
      ],
    },
  ],

  // ───────────────────────────────────────────────────────────────────────────
  "naar-india": [
    {
      slug: { nl: "praktisch-reizen", en: "practical-travel" },
      title: { nl: "Praktisch reizen in India", en: "Practical travel in India" },
      intro: {
        nl: "Treinen, betalen, bellen, stekkers en fooien.",
        en: "Trains, paying, phoning, plugs and tipping.",
      },
      body: {
        nl: [
          "De trein is de klassieke manier om India te zien. Kaartjes boekt u via IRCTC, de officiële site van de Indiase spoorwegen; populaire trajecten zijn weken vooruit uitverkocht. Voor lange afstanden zijn binnenlandse vluchten vaak goedkoop, en in steden rijden taxi-apps.",
          "Indiërs betalen bijna alles met hun telefoon via UPI. Ook buitenlandse bezoekers kunnen dat via speciale apps gebruiken, maar neem daarnaast contant geld en een bankpas mee. Een lokale simkaart koopt u met uw paspoort en visum. De netspanning is 230 volt; de stopcontacten zijn van type C, D en M, dus een wereldstekker is handig.",
          "Fooien zijn gebruikelijk voor chauffeurs, gidsen en hotelpersoneel. Afdingen hoort erbij op markten, niet in winkels met vaste prijzen. Drink geen kraanwater.",
        ],
        en: [
          "The train is the classic way to see India. Book tickets through IRCTC, the official site of Indian Railways; popular routes sell out weeks ahead. For long distances domestic flights are often cheap, and cities have ride-hailing apps.",
          "Indians pay for almost everything by phone through UPI. Foreign visitors can use it too through dedicated apps, but carry cash and a bank card as well. You buy a local SIM card with your passport and visa. Mains voltage is 230 volts; sockets are types C, D and M, so a universal adapter is useful.",
          "Tipping is customary for drivers, guides and hotel staff. Bargaining is normal at markets, not in fixed-price shops. Do not drink tap water.",
        ],
      },
      live: [
        { u: g("vluchten Amsterdam India rechtstreeks"), t: { nl: "Rechtstreekse vluchten naar India", en: "Direct flights to India" } },
        { u: g("rondreis India reisorganisatie"), t: { nl: "Reisorganisaties voor India", en: "Tour operators for India" } },
        { u: g("UPI for foreign tourists India"), t: { nl: "UPI voor buitenlandse bezoekers", en: "UPI for foreign visitors" } },
      ],
      links: [
        { u: "https://www.irctc.co.in/", t: "IRCTC", d: { nl: "Treinkaartjes boeken.", en: "Book train tickets." } },
        { u: "https://www.incredibleindia.gov.in/", t: "Incredible India", d: { nl: "Het officiële toerismeportaal van India.", en: "India's official tourism portal." } },
      ],
    },
    {
      slug: { nl: "beste-reistijd", en: "when-to-go" },
      title: { nl: "Beste reistijd", en: "When to go" },
      intro: {
        nl: "Seizoenen en moesson per regio.",
        en: "Seasons and monsoon by region.",
      },
      body: {
        nl: [
          "India is zo groot als West-Europa en heeft dus niet één klimaat. Grofweg is het van oktober tot maart koel en droog en daarmee de prettigste reistijd voor het grootste deel van het land, zoals Rajasthan, Delhi, Agra en het zuiden. Van april tot juni is het op de vlakten zeer heet.",
          "De zuidwestmoesson bereikt Kerala gewoonlijk begin juni en trekt in enkele weken naar het noorden; de regentijd duurt tot in september. De oostkust van Tamil Nadu krijgt juist in oktober tot december de meeste regen. De Himalaya, met Ladakh en Himachal Pradesh, bezoekt u het best in de zomer, wanneer de passen open zijn.",
        ],
        en: [
          "India is the size of Western Europe, so it does not have one climate. Broadly, October to March is cool and dry and therefore the most pleasant time for most of the country, such as Rajasthan, Delhi, Agra and the south. From April to June the plains are very hot.",
          "The south-west monsoon usually reaches Kerala in early June and moves north within a few weeks; the rainy season lasts into September. The east coast of Tamil Nadu gets most of its rain in October to December instead. The Himalaya, with Ladakh and Himachal Pradesh, is best visited in summer, when the passes are open.",
        ],
      },
      links: [
        { u: "https://mausam.imd.gov.in/", t: "India Meteorological Department", d: { nl: "Weersverwachting en de voortgang van de moesson.", en: "Forecasts and the progress of the monsoon." } },
      ],
    },
    {
      slug: { nl: "verantwoord-reizen", en: "responsible-travel" },
      title: { nl: "Verantwoord en respectvol reizen", en: "Responsible and respectful travel" },
      intro: {
        nl: "Omgangsvormen, tempels, dieren en vrijwilligerswerk.",
        en: "Etiquette, temples, animals and volunteering.",
      },
      body: {
        nl: [
          "Kleed u buiten de stranden en grote steden bedekt: schouders en knieën bedekt is een goede regel, zeker in tempels, moskeeën en gurdwara's. Doe uw schoenen uit voordat u een heiligdom of een huis binnengaat, eet en geef met uw rechterhand, en vraag toestemming voordat u mensen fotografeert.",
          "Wees terughoudend met vrijwilligerswerk in kindertehuizen. Kinderbeschermingsorganisaties en de Nederlandse overheid raden dit zogenoemde weeshuistoerisme af, omdat het kinderen schaadt en uitbuiting in de hand werkt. Mijd ook attracties waar u op olifanten rijdt of met wilde dieren op de foto gaat; kies voor erkende nationale parken.",
        ],
        en: [
          "Away from beaches and big cities, dress modestly: shoulders and knees covered is a good rule, certainly in temples, mosques and gurdwaras. Take off your shoes before entering a shrine or a home, eat and hand things over with your right hand, and ask permission before photographing people.",
          "Be cautious about volunteering in children's homes. Child protection organisations and the Dutch government advise against this so-called orphanage tourism, because it harms children and encourages exploitation. Also avoid attractions where you ride elephants or pose with wild animals; choose recognised national parks instead.",
        ],
      },
      links: [
        { u: "https://www.bettercarenetwork.nl/", t: "Better Care Network Netherlands", d: { nl: "Achtergrond over weeshuistoerisme en betere alternatieven.", en: "Background on orphanage tourism and better alternatives." } },
        { u: "https://www.worldanimalprotection.nl/", t: "World Animal Protection", d: { nl: "Diervriendelijk reizen.", en: "Animal-friendly travel (in Dutch)." } },
      ],
    },
  ],

  // ───────────────────────────────────────────────────────────────────────────
  zakendoen: [
    {
      slug: { nl: "importeren-uit-india", en: "importing-from-india" },
      title: { nl: "Importeren uit India", en: "Importing from India" },
      intro: {
        nl: "Voedsel, textiel of handwerk invoeren: regels en hulp.",
        en: "Bringing in food, textiles or handicrafts: rules and support.",
      },
      body: {
        nl: [
          "Wie producten uit India naar Nederland haalt, importeert in de Europese Unie en moet aan EU-regels voldoen. Voor voedsel, kruiden en supplementen gelden strenge eisen aan veiligheid en etikettering, waarop de NVWA toezicht houdt. Invoerrechten en btw regelt u bij de Douane; daarvoor hebt u een EORI-nummer nodig.",
          "De EU-databank Access2Markets laat per product zien welke tarieven en eisen gelden. Het CBI, een Nederlandse overheidsinstelling, helpt exporteurs uit landen als India de Europese markt op en publiceert gratis marktstudies die ook voor importeurs nuttig zijn.",
        ],
        en: [
          "Anyone bringing products from India to the Netherlands is importing into the European Union and must meet EU rules. Food, spices and supplements face strict safety and labelling requirements, supervised by the NVWA. Import duties and VAT are handled by Dutch Customs; you need an EORI number for that.",
          "The EU database Access2Markets shows the tariffs and requirements for each product. CBI, a Dutch government agency, helps exporters from countries such as India enter the European market and publishes free market studies that are useful for importers too.",
        ],
      },
      live: [
        { u: g("beurs India handel Nederland"), t: { nl: "Handelsbeurzen", en: "Trade fairs" } },
      ],
      links: [
        { u: "https://trade.ec.europa.eu/access-to-markets/", t: "Access2Markets (EU)", d: { nl: "Tarieven, regels en formaliteiten per product.", en: "Tariffs, rules and formalities per product." } },
        { u: "https://www.cbi.eu/", t: "CBI", d: { nl: "Marktinformatie over import uit ontwikkelingslanden.", en: "Market information on imports from developing countries." } },
        { u: "https://www.kvk.nl/", t: "KVK", d: { nl: "Stappenplannen voor importeren.", en: "Step-by-step guides to importing." } },
        { u: "https://www.nvwa.nl/", t: "NVWA", d: { nl: "Eisen aan voedsel en consumentenproducten.", en: "Requirements for food and consumer products." } },
      ],
    },
    {
      slug: { nl: "indiaas-talent", en: "hiring-indian-talent" },
      title: { nl: "Indiaas talent aannemen", en: "Hiring Indian talent" },
      intro: {
        nl: "Voor werkgevers: erkend referent worden en een kennismigrant laten overkomen.",
        en: "For employers: becoming a recognised sponsor and bringing in a highly skilled migrant.",
      },
      body: {
        nl: [
          "India is een van de belangrijkste herkomstlanden van kennismigranten in Nederland, vooral in de IT en techniek. Om een kennismigrant aan te nemen moet uw bedrijf door de IND zijn erkend als referent. Daarna vraagt u als werkgever de verblijfsvergunning aan; er geldt een salariseis die elk jaar wordt aangepast.",
          "Als erkend referent hebt u plichten: u bewaart gegevens, meldt wijzigingen en zorgt voor zorgvuldige werving. Denk ook aan de 30%-regeling, huisvesting en begeleiding van partner en kinderen. Expatcentra in de grote steden helpen bij de eerste formaliteiten.",
        ],
        en: [
          "India is one of the main countries of origin of highly skilled migrants in the Netherlands, especially in IT and engineering. To hire one, your company must be recognised by the IND as a sponsor. You then apply for the residence permit as the employer; a salary threshold applies and is adjusted every year.",
          "As a recognised sponsor you have duties: you keep records, report changes and recruit with care. Also think about the 30% ruling, housing and support for the partner and children. Expat centres in the larger cities help with the first formalities.",
        ],
      },
      live: [
        { u: g("expat center Nederland"), t: { nl: "Expatcentra", en: "Expat centres" } },
        { u: g("vacatures India Nederland"), t: { nl: "Vacatures met een India-link", en: "Jobs with an India link" } },
      ],
      links: [
        { u: "https://ind.nl/", t: "IND", d: { nl: "Erkenning als referent en de kennismigrantenregeling.", en: "Recognition as a sponsor and the highly skilled migrant scheme." } },
        { u: "https://business.gov.nl/", t: "Business.gov.nl", d: { nl: "Overheidsinformatie voor ondernemers, in het Engels.", en: "Government information for entrepreneurs, in English." } },
      ],
    },
  ],

  // ───────────────────────────────────────────────────────────────────────────
  "familie-recht": [
    {
      slug: { nl: "overlijden", en: "death-funerals" },
      title: { nl: "Overlijden en uitvaart", en: "Death and funerals" },
      intro: {
        nl: "Hindoeïstische en sikh-crematie in Nederland, as verstrooien en repatriëring.",
        en: "Hindu and Sikh cremation in the Netherlands, scattering ashes and repatriation.",
      },
      body: {
        nl: [
          "In Nederland wordt een overledene in de regel niet eerder dan 36 uur en uiterlijk zes werkdagen na het overlijden begraven of gecremeerd. Een crematie op de dag van overlijden, zoals in India gebruikelijk, kan hier alleen met toestemming van de burgemeester. Uitvaartondernemers met ervaring in hindoeïstische en sikh-rituelen kennen de mogelijkheden voor rituele wassing, een dienst met pandit of granthi en het bijwonen van de invoer in de oven.",
          "De as komt na een wettelijke wachttijd vrij. Verstrooien op zee mag; op land en binnenwater hebt u toestemming van de eigenaar of beheerder nodig, en sommige gemeenten hebben daarvoor plaatsen aangewezen. Wilt u de as of het lichaam naar India brengen, dan zijn documenten van de gemeente en de Indiase ambassade nodig. Overlijdt een Nederlander in India, dan helpt de Nederlandse ambassade de nabestaanden.",
        ],
        en: [
          "In the Netherlands a deceased person is generally buried or cremated no sooner than 36 hours and no later than six working days after death. Cremation on the day of death, as is customary in India, is only possible here with the mayor's permission. Funeral directors experienced in Hindu and Sikh rites know the options for ritual washing, a service with a pandit or granthi, and attending the committal.",
          "The ashes are released after a statutory waiting period. Scattering at sea is allowed; on land and inland water you need permission from the owner or manager, and some municipalities have designated places for it. To take the ashes or the body to India you need documents from the municipality and the Indian embassy. If a Dutch national dies in India, the Dutch embassy assists the relatives.",
        ],
      },
      live: [
        { u: g("hindoe uitvaart uitvaartondernemer Nederland"), t: { nl: "Hindoeïstische uitvaartzorg", en: "Hindu funeral services" } },
        { u: g("as verstrooien hindoe rivier Nederland gemeente"), t: { nl: "As verstrooien: regels per gemeente", en: "Scattering ashes: local rules" } },
      ],
      links: [
        { u: "https://www.rijksoverheid.nl/onderwerpen/overlijden", t: { nl: "Rijksoverheid: overlijden", en: "Dutch government: death" }, d: { nl: "Wat u moet regelen, termijnen en asbestemming.", en: "What to arrange, time limits and ashes (in Dutch)." } },
        { u: "https://www.indianembassynetherlands.gov.in/", t: { nl: "Indiase ambassade in Den Haag", en: "Embassy of India, The Hague" }, d: { nl: "Documenten voor het overbrengen van stoffelijke resten of as.", en: "Documents for transporting mortal remains or ashes." } },
        { u: "https://www.netherlandsworldwide.nl/", t: "Netherlands Worldwide", d: { nl: "Overlijden van een Nederlander in het buitenland.", en: "Death of a Dutch national abroad." } },
      ],
    },
    {
      slug: { nl: "bezit-erfenis-india", en: "property-inheritance-india" },
      title: { nl: "Bezit en erfenis in India", en: "Property and inheritance in India" },
      intro: {
        nl: "Een huis, grond of erfenis in India terwijl u in Nederland woont.",
        en: "A home, land or inheritance in India while you live in the Netherlands.",
      },
      body: {
        nl: [
          "Indiërs in het buitenland (NRI's) en houders van een OCI-kaart mogen in India woningen en bedrijfspanden kopen en bezitten, maar in de regel geen landbouwgrond, plantages of boerderijen; die kunnen zij wel erven. De regels komen van de Reserve Bank of India en vallen onder de deviezenwet FEMA, die ook bepaalt hoeveel geld u na verkoop naar het buitenland mag overmaken.",
          "Kunt u niet zelf naar India, dan geeft u iemand een volmacht (power of attorney). Die tekent u bij de Indiase ambassade of laat u van een apostille voorzien. Bedenk dat Nederland uw wereldwijde vermogen belast: Indiaas bezit hoort in uw aangifte, en een erfenis kan in beide landen gevolgen hebben. Schakel een notaris of belastingadviseur in die beide stelsels kent.",
        ],
        en: [
          "Indians abroad (NRIs) and holders of an OCI card may buy and own residential and commercial property in India, but generally not agricultural land, plantations or farmhouses; they can inherit those. The rules come from the Reserve Bank of India under the foreign exchange law FEMA, which also sets how much money you may transfer abroad after a sale.",
          "If you cannot travel to India yourself, you give someone a power of attorney. You sign it at the Indian embassy or have it apostilled. Bear in mind that the Netherlands taxes your worldwide assets: Indian property belongs in your tax return, and an inheritance can have consequences in both countries. Use a notary or tax adviser who knows both systems.",
        ],
      },
      live: [
        { u: g("notaris advocaat Indiaas recht erfenis Nederland"), t: { nl: "Adviseurs met India-ervaring", en: "Advisers with India experience" } },
      ],
      links: [
        { u: "https://www.rbi.org.in/", t: "Reserve Bank of India", d: { nl: "Regels voor onroerend goed en geldovermakingen door NRI's en OCI's.", en: "Rules on property and remittances for NRIs and OCIs." } },
        { u: "https://www.belastingdienst.nl/", t: "Belastingdienst", d: { nl: "Buitenlands vermogen en erfbelasting.", en: "Foreign assets and inheritance tax." } },
        { u: "https://www.notaris.nl/", t: "Notaris.nl", d: { nl: "Uitleg over erven en een notaris zoeken.", en: "Inheritance explained and finding a notary (in Dutch)." } },
        { u: "https://www.indianembassynetherlands.gov.in/", t: { nl: "Indiase ambassade in Den Haag", en: "Embassy of India, The Hague" }, d: { nl: "Volmachten en andere documenten laten bekrachtigen.", en: "Attestation of powers of attorney and other documents." } },
      ],
    },
  ],
};
