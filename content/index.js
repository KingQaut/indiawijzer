// ALL site content lives in this one file.
//
// Each topic has a title, a one-line intro, a few short paragraphs (body) and a
// list of links. Every text exists in Dutch (nl) and English (en); every link
// exists only once and is shared by both languages.
//
//   u = url, t = link title (string, or {nl, en}), d = description {nl, en}
//
// Optional per topic:
//   finder: "restaurants" | "worship" | "yoga" | "cricket"  -> automatic list from OpenStreetMap
//           "heritage" | "gandhi"                            -> automatic list from Wikidata
//
// More topics live in content/extra.js; they are added to the end of their section.
//   live:   [{ u, t }]                 -> "search now" buttons that always show current results

export const sections = [
  // ───────────────────────────────────────────────────────────────────────────
  {
    icon: "🪔",
    slug: { nl: "india-in-nederland", en: "india-in-the-netherlands" },
    title: { nl: "India in Nederland", en: "India in the Netherlands" },
    intro: {
      nl: "Eten, winkels, tempels, film, feesten, yoga, cricket en de Indiase gemeenschap in Nederland.",
      en: "Food, shops, temples, film, festivals, yoga, cricket and the Indian community in the Netherlands.",
    },
    topics: [
      {
        slug: { nl: "restaurants", en: "restaurants" },
        title: { nl: "Indiase restaurants", en: "Indian restaurants" },
        intro: {
          nl: "Alle Indiase restaurants in Nederland, automatisch bijgewerkt en doorzoekbaar op plaats.",
          en: "Every Indian restaurant in the Netherlands, updated automatically and searchable by town.",
        },
        body: {
          nl: [
            "Van Noord-Indiase curry's en tandoori tot Zuid-Indiase dosa's en streetfood: bijna elke Nederlandse stad heeft inmiddels een of meer Indiase restaurants. Ook de Surinaams-Hindostaanse keuken, met roti als bekendste gerecht, is breed vertegenwoordigd.",
            "De lijst hieronder komt rechtstreeks uit OpenStreetMap, de vrije wereldkaart die door vrijwilligers wordt bijgehouden. Ontbreekt een restaurant of klopt iets niet? Dan kunt u dat zelf op OpenStreetMap aanpassen; deze pagina neemt de wijziging vanzelf over.",
          ],
          en: [
            "From North Indian curries and tandoori to South Indian dosas and street food: almost every Dutch town now has one or more Indian restaurants. Surinamese-Hindustani cooking, best known for its roti, is widely available too.",
            "The list below comes straight from OpenStreetMap, the free world map maintained by volunteers. Is a restaurant missing or out of date? You can correct it on OpenStreetMap yourself and this page will pick up the change automatically.",
          ],
        },
        finder: "restaurants",
        live: [
          { u: "https://www.google.com/maps/search/indiaas+restaurant/", t: { nl: "Indiaas restaurant bij mij in de buurt", en: "Indian restaurant near me" } },
          { u: "https://www.google.com/maps/search/roti+restaurant/", t: { nl: "Rotishop bij mij in de buurt", en: "Roti shop near me" } },
          { u: "https://www.google.com/maps/search/dosa+zuid-indiaas+restaurant/", t: { nl: "Dosa en Zuid-Indiaas", en: "Dosa and South Indian" } },
          { u: "https://www.google.com/maps/search/indiaas+vegetarisch+restaurant/", t: { nl: "Vegetarisch Indiaas", en: "Vegetarian Indian" } },
          { u: "https://www.google.com/search?q=indiase+catering+nederland", t: { nl: "Indiase catering", en: "Indian catering" } },
        ],
        links: [
          { u: "https://www.openstreetmap.org/", t: "OpenStreetMap", d: { nl: "Zelf een restaurant toevoegen of verbeteren.", en: "Add or correct a restaurant yourself." } },
        ],
      },
      {
        slug: { nl: "winkels", en: "shops" },
        title: { nl: "Indiase winkels en toko's", en: "Indian shops and groceries" },
        intro: {
          nl: "Waar vindt u Indiase kruiden, groenten, zoetigheid, kleding en sieraden?",
          en: "Where to find Indian spices, vegetables, sweets, clothing and jewellery.",
        },
        body: {
          nl: [
            "Indiase supermarkten en toko's vindt u vooral in de grote steden. Bekende winkelgebieden zijn de Paul Krugerlaan en omgeving in Den Haag, Amstelveen en Amsterdam-Zuidoost, en de omgeving van de West-Kruiskade in Rotterdam. Steeds meer winkels bezorgen ook door heel Nederland.",
            "Omdat winkels vaak openen, verhuizen en sluiten, houden we hier geen eigen lijst bij. De zoekknoppen hieronder tonen altijd het actuele aanbod bij u in de buurt.",
          ],
          en: [
            "Indian supermarkets and groceries are concentrated in the larger cities. Well-known shopping areas include Paul Krugerlaan and surroundings in The Hague, Amstelveen and Amsterdam-Zuidoost, and the area around West-Kruiskade in Rotterdam. More and more shops also deliver nationwide.",
            "Because shops open, move and close frequently, we do not keep a list of our own. The search buttons below always show what is currently available near you.",
          ],
        },
        live: [
          { u: "https://www.google.com/maps/search/indiase+supermarkt/", t: { nl: "Indiase supermarkt in de buurt", en: "Indian grocery near me" } },
          { u: "https://www.google.com/maps/search/indiase+kleding+sari/", t: { nl: "Indiase kleding en sari's", en: "Indian clothing and saris" } },
          { u: "https://www.google.com/search?q=indiase+boodschappen+online+bestellen+nederland", t: { nl: "Online Indiase boodschappen", en: "Indian groceries online" } },
          { u: "https://www.google.com/maps/search/indiase+zoetigheid+mithai/", t: { nl: "Indiase zoetigheid (mithai)", en: "Indian sweets (mithai)" } },
          { u: "https://www.google.com/search?q=tiffin+service+indiaas+thuisbezorgd+nederland", t: { nl: "Tiffin en maaltijdservice", en: "Tiffin and meal services" } },
          { u: "https://www.google.com/search?q=mango+alphonso+kesar+kopen+nederland", t: { nl: "Indiase mango's (in het seizoen)", en: "Indian mangoes (in season)" } },
        ],
        links: [],
      },
      {
        slug: { nl: "tempels", en: "temples" },
        title: { nl: "Tempels en gebedshuizen", en: "Temples and places of worship" },
        intro: {
          nl: "Hindoetempels (mandirs), sikh-gurdwara's en jaïntempels in Nederland.",
          en: "Hindu temples (mandirs), Sikh gurdwaras and Jain temples in the Netherlands.",
        },
        body: {
          nl: [
            "Nederland telt tientallen hindoetempels, opgericht door zowel de Surinaams-Hindostaanse als de Indiase gemeenschap, en gurdwara's in onder meer Amsterdam, Den Haag, Rotterdam en Almere. Veel tempels organiseren ook taallessen, muziek en vieringen van feesten als Diwali en Holi.",
            "De lijst hieronder wordt automatisch samengesteld uit OpenStreetMap.",
          ],
          en: [
            "The Netherlands has dozens of Hindu temples, founded by both the Surinamese-Hindustani and the Indian community, and gurdwaras in Amsterdam, The Hague, Rotterdam, Almere and elsewhere. Many temples also host language classes, music and celebrations such as Diwali and Holi.",
            "The list below is compiled automatically from OpenStreetMap.",
          ],
        },
        finder: "worship",
        links: [],
      },
      {
        slug: { nl: "film-bollywood", en: "film-bollywood" },
        title: { nl: "Film en Bollywood", en: "Film and Bollywood" },
        intro: {
          nl: "Indiase films in de Nederlandse bioscoop: Hindi, Tamil, Telugu, Malayalam en meer.",
          en: "Indian films in Dutch cinemas: Hindi, Tamil, Telugu, Malayalam and more.",
        },
        body: {
          nl: [
            "Grote Indiase films draaien in Nederland meestal tegelijk met de wereldpremière, vooral in bioscopen in Den Haag, Amsterdam, Rotterdam, Utrecht en Eindhoven. Voorstellingen zijn doorgaans Engels ondertiteld.",
            "Het programma wisselt per week. Kijk daarom rechtstreeks bij de bioscoopketens: op hun websites kunt u zoeken op film of filteren op taal.",
          ],
          en: [
            "Major Indian films usually open in the Netherlands on the same day as their worldwide release, mainly in cinemas in The Hague, Amsterdam, Rotterdam, Utrecht and Eindhoven. Screenings generally have English subtitles.",
            "Programmes change weekly, so check the cinema chains directly: their websites let you search by film or filter by language.",
          ],
        },
        live: [
          { u: "https://www.google.com/search?q=bollywood+film+bioscoop+deze+week+nederland", t: { nl: "Bollywood in de bioscoop deze week", en: "Bollywood in cinemas this week" } },
          { u: "https://www.google.com/search?q=tamil+telugu+malayalam+film+bioscoop+nederland", t: { nl: "Zuid-Indiase films in de bioscoop", en: "South Indian films in cinemas" } },
        ],
        links: [
          { u: "https://www.pathe.nl/", t: "Pathé", d: { nl: "Grootste bioscoopketen; draait regelmatig Indiase films.", en: "Largest cinema chain; regularly screens Indian films." } },
          { u: "https://kinepolis.nl/", t: "Kinepolis", d: { nl: "Bioscopen in onder meer Utrecht, Rotterdam en Den Haag-regio.", en: "Cinemas in Utrecht, Rotterdam, the Hague region and elsewhere." } },
          { u: "https://www.vuecinemas.nl/", t: "Vue", d: { nl: "Bioscopen door heel Nederland.", en: "Cinemas throughout the Netherlands." } },
        ],
      },
      {
        slug: { nl: "feesten-evenementen", en: "festivals-events" },
        title: { nl: "Feesten en evenementen", en: "Festivals and events" },
        intro: {
          nl: "Diwali, Holi, Navratri, concerten, dans en culturele avonden.",
          en: "Diwali, Holi, Navratri, concerts, dance and cultural evenings.",
        },
        body: {
          nl: [
            "De grote Indiase feesten worden in Nederland uitbundig gevierd. Holi (Phagwa) in het voorjaar en Diwali (het lichtjesfeest) in het najaar trekken duizenden bezoekers, met name in Den Haag, Amsterdam, Amstelveen, Rotterdam en Eindhoven. Rond Navratri zijn er garba- en dandiya-avonden, en door het jaar heen concerten, klassieke dans en yogadagen.",
            "De data van deze feesten volgen de maankalender en verschuiven elk jaar. De zoekknoppen hieronder tonen wat er op dit moment op de agenda staat.",
          ],
          en: [
            "The major Indian festivals are celebrated with enthusiasm in the Netherlands. Holi (Phagwa) in spring and Diwali (the festival of lights) in autumn draw thousands of visitors, especially in The Hague, Amsterdam, Amstelveen, Rotterdam and Eindhoven. Navratri brings garba and dandiya nights, and there are concerts, classical dance and yoga days throughout the year.",
            "The dates of these festivals follow the lunar calendar and shift every year. The search buttons below show what is on right now.",
          ],
        },
        live: [
          { u: "https://www.eventbrite.nl/d/netherlands/indian/", t: { nl: "Indiase evenementen op Eventbrite", en: "Indian events on Eventbrite" } },
          { u: "https://www.eventbrite.nl/d/netherlands/diwali/", t: { nl: "Diwali-vieringen", en: "Diwali celebrations" } },
          { u: "https://www.eventbrite.nl/d/netherlands/holi/", t: { nl: "Holi-vieringen", en: "Holi celebrations" } },
          { u: "https://www.eventbrite.nl/d/netherlands/bollywood/", t: { nl: "Bollywoodfeesten en -dans", en: "Bollywood parties and dance" } },
        ],
        links: [
          { u: "https://www.indianembassynetherlands.gov.in/", t: { nl: "Ambassade van India – evenementen", en: "Embassy of India – events" }, d: { nl: "De ambassade en haar cultureel centrum organiseren regelmatig concerten, yoga en vieringen.", en: "The embassy and its cultural centre regularly organise concerts, yoga and celebrations." } },
        ],
      },
      {
        slug: { nl: "gemeenschap", en: "community" },
        title: { nl: "Gemeenschap en verenigingen", en: "Community and associations" },
        intro: {
          nl: "Indiase verenigingen, expatgroepen en de Surinaams-Hindostaanse gemeenschap.",
          en: "Indian associations, expat groups and the Surinamese-Hindustani community.",
        },
        body: {
          nl: [
            "Nederland heeft een van de grootste gemeenschappen van Indiase herkomst op het Europese vasteland. Die bestaat uit twee groepen: Surinaamse Hindostanen, van wie de voorouders in de negentiende eeuw van India naar Suriname trokken, en Indiërs die – vooral de laatste twintig jaar – voor werk of studie naar Nederland kwamen.",
            "Er zijn verenigingen per regio en taal (Tamil, Telugu, Marathi, Bengaals, Malayali, Gujarati, Punjabi en meer), studentenverenigingen bij de universiteiten en actieve groepen op sociale media. De ambassade houdt een overzicht bij van Indiase verenigingen in Nederland.",
          ],
          en: [
            "The Netherlands is home to one of the largest communities of Indian origin in continental Europe. It consists of two groups: Surinamese Hindustanis, whose ancestors moved from India to Suriname in the nineteenth century, and Indians who came to the Netherlands for work or study, mostly in the past twenty years.",
            "There are associations by region and language (Tamil, Telugu, Marathi, Bengali, Malayali, Gujarati, Punjabi and more), student associations at the universities and active social media groups. The embassy maintains an overview of Indian associations in the Netherlands.",
          ],
        },
        live: [
          { u: "https://www.meetup.com/find/?keywords=indian&location=nl--Amsterdam", t: { nl: "Indiase groepen op Meetup", en: "Indian groups on Meetup" } },
        ],
        links: [
          { u: "https://www.indianembassynetherlands.gov.in/", t: { nl: "Ambassade van India, Den Haag", en: "Embassy of India, The Hague" }, d: { nl: "Onder meer een overzicht van Indiase verenigingen.", en: "Includes an overview of Indian associations." } },
          { u: "https://www.iamexpat.nl/", t: "IamExpat", d: { nl: "Nieuws en praktische informatie voor internationals in Nederland.", en: "News and practical information for internationals in the Netherlands." } },
        ],
      },
      {
        slug: { nl: "yoga", en: "yoga" },
        title: { nl: "Yogascholen en studio's", en: "Yoga schools and studios" },
        intro: {
          nl: "Yogascholen en -studio's in heel Nederland, automatisch bijgewerkt en doorzoekbaar op plaats.",
          en: "Yoga schools and studios across the Netherlands, updated automatically and searchable by town.",
        },
        body: {
          nl: [
            "Yoga komt uit India en is daar veel meer dan een reeks houdingen: het omvat ook ademhaling, meditatie en een manier van leven. In Nederland vindt u in bijna elke plaats een studio, van rustige hatha- en yin-yoga tot dynamische ashtanga en vinyasa.",
            "Het beroep van yogadocent is in Nederland niet beschermd: iedereen mag zich zo noemen. Vraag daarom naar de opleiding van een docent. De Verenigde Naties hebben 21 juni uitgeroepen tot Internationale Dag van de Yoga; rond die datum zijn er op veel plaatsen gratis lessen.",
            "De lijst hieronder komt rechtstreeks uit OpenStreetMap en staat los van stroming of kwaliteit. Ontbreekt een studio? Dan kunt u die zelf op OpenStreetMap toevoegen; deze pagina neemt de wijziging vanzelf over.",
          ],
          en: [
            "Yoga comes from India, where it is far more than a set of postures: it also covers breathing, meditation and a way of life. In the Netherlands almost every town has a studio, from gentle hatha and yin yoga to dynamic ashtanga and vinyasa.",
            "Yoga teacher is not a protected profession in the Netherlands: anyone may use the title. So do ask about a teacher's training. The United Nations declared 21 June the International Day of Yoga; around that date many places offer free classes.",
            "The list below comes straight from OpenStreetMap and says nothing about style or quality. Is a studio missing? You can add it on OpenStreetMap yourself and this page will pick up the change automatically.",
          ],
        },
        finder: "yoga",
        live: [
          { u: "https://www.google.com/maps/search/yogastudio/", t: { nl: "Yoga bij mij in de buurt", en: "Yoga near me" } },
          { u: "https://www.google.com/maps/search/ayurveda/", t: { nl: "Ayurveda bij mij in de buurt", en: "Ayurveda near me" } },
        ],
        links: [
          { u: "https://www.yoganederland.nl/", t: "Vereniging Yogadocenten Nederland", d: { nl: "Beroepsvereniging met een overzicht van opgeleide docenten.", en: "Professional association with a directory of trained teachers." } },
          { u: "https://yoga.ayush.gov.in/", t: { nl: "Yogaportaal van de Indiase overheid", en: "Yoga portal of the Indian government" }, d: { nl: "Uitleg, oefeningen en de Internationale Dag van de Yoga.", en: "Explanations, exercises and the International Day of Yoga." } },
          { u: "https://www.un.org/en/observances/yoga-day", t: { nl: "Internationale Dag van de Yoga (VN)", en: "International Day of Yoga (UN)" }, d: { nl: "Achtergrond bij 21 juni.", en: "Background to 21 June." } },
        ],
      },
      {
        slug: { nl: "cricket", en: "cricket" },
        title: { nl: "Cricket", en: "Cricket" },
        intro: {
          nl: "Cricketclubs in Nederland en waar u het Indiase en Nederlandse cricket volgt.",
          en: "Cricket clubs in the Netherlands and where to follow Indian and Dutch cricket.",
        },
        body: {
          nl: [
            "Cricket is in India veruit de grootste sport, en in Nederland wordt het al sinds de negentiende eeuw gespeeld. Veel Nederlandse clubs draaien tegenwoordig voor een flink deel op spelers met Indiase, Pakistaanse, Sri Lankaanse of Surinaamse wortels, en zoeken vrijwel altijd nieuwe leden, ook beginners en jeugd.",
            "Het seizoen loopt ruwweg van april tot september. De cricketbond KNCB heeft een overzicht van clubs en competities. De lijst hieronder komt rechtstreeks uit OpenStreetMap.",
          ],
          en: [
            "Cricket is by far the biggest sport in India, and it has been played in the Netherlands since the nineteenth century. Many Dutch clubs now rely heavily on players with Indian, Pakistani, Sri Lankan or Surinamese roots and are almost always looking for new members, beginners and juniors included.",
            "The season runs roughly from April to September. The Dutch cricket board KNCB lists clubs and competitions. The list below comes straight from OpenStreetMap.",
          ],
        },
        finder: "cricket",
        live: [
          { u: "https://www.google.com/maps/search/cricketclub/", t: { nl: "Cricketclub bij mij in de buurt", en: "Cricket club near me" } },
          { u: "https://www.google.com/search?q=cricket+live+score", t: { nl: "Live cricketscores", en: "Live cricket scores" } },
        ],
        links: [
          { u: "https://www.kncb.nl/", t: "KNCB", d: { nl: "Koninklijke Nederlandse Cricket Bond: clubs, competities en het nationale team.", en: "Royal Dutch Cricket Board: clubs, competitions and the national team." } },
          { u: "https://www.bcci.tv/", t: "BCCI", d: { nl: "De Indiase cricketbond.", en: "The Board of Control for Cricket in India." } },
          { u: "https://www.icc-cricket.com/", t: "ICC", d: { nl: "Internationale wedstrijden, standen en toernooien.", en: "International fixtures, rankings and tournaments." } },
        ],
      },
    ],
  },

  // ───────────────────────────────────────────────────────────────────────────
  {
    icon: "🧳",
    slug: { nl: "naar-nederland", en: "moving-to-the-netherlands" },
    title: { nl: "Naar Nederland", en: "Moving to the Netherlands" },
    intro: {
      nl: "Voor Indiërs die naar Nederland komen: visum, werk, studie en de eerste stappen.",
      en: "For Indians coming to the Netherlands: visas, work, study and getting settled.",
    },
    topics: [
      {
        slug: { nl: "visum-verblijf", en: "visa-residence" },
        title: { nl: "Visum en verblijfsvergunning", en: "Visas and residence permits" },
        intro: {
          nl: "Schengenvisum voor een kort bezoek, of een verblijfsvergunning voor werk, studie of gezin.",
          en: "A Schengen visa for a short visit, or a residence permit for work, study or family.",
        },
        body: {
          nl: [
            "Indiase staatsburgers hebben voor een bezoek tot 90 dagen een Schengenvisum nodig. Dat vraagt u in India aan via het visumaanvraagcentrum van VFS Global, dat namens Nederland de aanvragen inneemt.",
            "Voor een langer verblijf is een verblijfsvergunning nodig, meestal gecombineerd met een inreisvisum (mvv). De Immigratie- en Naturalisatiedienst (IND) beslist daarover. In de meeste gevallen dient de werkgever, onderwijsinstelling of partner in Nederland de aanvraag in. De voorwaarden, kosten en behandeltermijnen veranderen regelmatig; de IND-website is altijd leidend.",
          ],
          en: [
            "Indian citizens need a Schengen visa for visits of up to 90 days. You apply in India through the VFS Global visa application centre, which accepts applications on behalf of the Netherlands.",
            "For a longer stay you need a residence permit, usually combined with an entry visa (MVV). The Immigration and Naturalisation Service (IND) decides on these. In most cases the employer, educational institution or partner in the Netherlands submits the application. Requirements, fees and processing times change regularly; the IND website is always the authority.",
          ],
        },
        links: [
          { u: "https://ind.nl/en", t: "IND – Immigration and Naturalisation Service", d: { nl: "Alle verblijfsvergunningen, voorwaarden, kosten en formulieren.", en: "All residence permits, requirements, fees and forms." } },
          { u: "https://visa.vfsglobal.com/ind/en/nld", t: "VFS Global – Netherlands visa in India", d: { nl: "Afspraak maken en aanvraag indienen in India.", en: "Book an appointment and submit your application in India." } },
          { u: "https://www.netherlandsworldwide.nl/countries/india", t: "Netherlands Worldwide – India", d: { nl: "Nederlandse overheid: visa, ambassade in New Delhi en consulaten.", en: "Dutch government: visas, the embassy in New Delhi and consulates." } },
          { u: "https://www.government.nl/topics/immigration-to-the-netherlands", t: "Government.nl – Immigration", d: { nl: "Overzicht van het Nederlandse toelatingsbeleid.", en: "Overview of Dutch admission policy." } },
        ],
      },
      {
        slug: { nl: "werken", en: "working" },
        title: { nl: "Werken in Nederland", en: "Working in the Netherlands" },
        intro: {
          nl: "Kennismigrant, Europese blauwe kaart, zoekjaar en de 30%-regeling.",
          en: "Highly skilled migrant, EU Blue Card, orientation year and the 30% ruling.",
        },
        body: {
          nl: [
            "De meeste Indiase professionals komen naar Nederland als kennismigrant. Daarvoor moet de werkgever bij de IND als erkend referent zijn geregistreerd en moet het salaris boven een jaarlijks vastgestelde drempel liggen. Partner en kinderen kunnen meekomen, en de partner mag vrij werken.",
            "Wie in Nederland is afgestudeerd, of aan een buitenlandse topuniversiteit, kan een zoekjaar aanvragen om hier werk te zoeken. Werknemers die uit het buitenland zijn geworven kunnen onder voorwaarden gebruikmaken van de 30%-regeling, een belastingvoordeel voor ingekomen werknemers. De regels daarvoor zijn de afgelopen jaren meermaals gewijzigd; controleer de actuele voorwaarden bij de Belastingdienst.",
          ],
          en: [
            "Most Indian professionals come to the Netherlands as highly skilled migrants. The employer must be registered with the IND as a recognised sponsor and the salary must exceed a threshold that is set annually. Partners and children can come along, and the partner is free to work.",
            "Graduates of a Dutch institution, or of a top university abroad, can apply for an orientation year to look for work here. Employees recruited from abroad may qualify for the 30% ruling, a tax advantage for incoming employees. Its rules have changed several times in recent years; check the current conditions with the Dutch Tax Administration.",
          ],
        },
        links: [
          { u: "https://ind.nl/en/residence-permits/work/highly-skilled-migrant", t: "IND – Highly skilled migrant", d: { nl: "Voorwaarden en actuele salariseisen.", en: "Requirements and current salary thresholds." } },
          { u: "https://ind.nl/en/public-register-recognised-sponsors", t: "IND – Register of recognised sponsors", d: { nl: "Controleer of een werkgever erkend referent is.", en: "Check whether an employer is a recognised sponsor." } },
          { u: "https://www.belastingdienst.nl/wps/wcm/connect/en/individuals/individuals", t: { nl: "Belastingdienst (Engelstalig)", en: "Dutch Tax Administration (English)" }, d: { nl: "Onder meer de 30%-regeling en de jaarlijkse aangifte.", en: "Including the 30% facility and the annual tax return." } },
          { u: "https://business.gov.nl/", t: "Business.gov.nl", d: { nl: "Officiële informatie voor ondernemers en zzp'ers, in het Engels.", en: "Official information for entrepreneurs and freelancers, in English." } },
        ],
      },
      {
        slug: { nl: "studeren", en: "studying" },
        title: { nl: "Studeren in Nederland", en: "Studying in the Netherlands" },
        intro: {
          nl: "Opleidingen, beurzen, toelating en de verblijfsvergunning voor studie.",
          en: "Programmes, scholarships, admission and the student residence permit.",
        },
        body: {
          nl: [
            "Nederlandse universiteiten en hogescholen bieden een groot aantal Engelstalige opleidingen aan, en India behoort al jaren tot de grootste herkomstlanden van studenten van buiten Europa. De onderwijsinstelling vraagt de verblijfsvergunning voor u aan zodra u bent toegelaten.",
            "Houd rekening met het hogere instellingscollegegeld voor studenten van buiten de EU, een bewijs van voldoende middelen van bestaan en de krappe woningmarkt in studentensteden: begin ruim op tijd met het zoeken naar een kamer. Na afstuderen kunt u een zoekjaar aanvragen.",
          ],
          en: [
            "Dutch research universities and universities of applied sciences offer a large number of programmes taught in English, and India has for years been one of the largest non-European countries of origin for students. Your institution applies for your residence permit once you have been admitted.",
            "Be prepared for the higher institutional tuition fees for non-EU students, proof of sufficient funds and a tight housing market in student cities: start looking for a room well in advance. After graduating you can apply for an orientation year.",
          ],
        },
        links: [
          { u: "https://www.studyinnl.org/", t: "Study in NL", d: { nl: "Officiële portal: alle Engelstalige opleidingen, beurzen en praktische informatie.", en: "Official portal: all English-taught programmes, scholarships and practical information." } },
          { u: "https://www.nuffic.nl/en", t: "Nuffic", d: { nl: "Nederlandse organisatie voor internationalisering in het onderwijs; diplomawaardering.", en: "Dutch organisation for internationalisation in education; diploma recognition." } },
          { u: "https://ind.nl/en", t: "IND", d: { nl: "Verblijfsvergunning voor studie en zoekjaar.", en: "Residence permits for study and the orientation year." } },
        ],
      },
      {
        slug: { nl: "eerste-stappen", en: "getting-settled" },
        title: { nl: "Eerste stappen in Nederland", en: "Getting settled" },
        intro: {
          nl: "Inschrijven bij de gemeente, BSN, DigiD, zorgverzekering, bank en rijbewijs.",
          en: "Registering with the municipality, BSN, DigiD, health insurance, banking and driving licence.",
        },
        body: {
          nl: [
            "Wie langer dan vier maanden blijft, schrijft zich in bij de gemeente en krijgt daarbij een burgerservicenummer (BSN). Dat nummer heeft u nodig voor vrijwel alles: salaris, bankrekening, zorgverzekering en DigiD, uw digitale inlog bij de overheid.",
            "Een Nederlandse zorgverzekering is verplicht zodra u hier woont en werkt. Met een Indiaas rijbewijs mag u na inschrijving nog een beperkte periode rijden; omwisselen voor een Nederlands rijbewijs kan alleen in bepaalde gevallen. In de grote steden helpen expatcenters met de formaliteiten, vaak in één afspraak samen met de IND.",
          ],
          en: [
            "Anyone staying longer than four months registers with the municipality and receives a citizen service number (BSN). You need that number for almost everything: salary, bank account, health insurance and DigiD, your digital login for government services.",
            "Dutch health insurance is mandatory as soon as you live and work here. With an Indian driving licence you may drive for a limited period after registering; exchanging it for a Dutch licence is only possible in certain cases. In the larger cities, expat centres help with the formalities, often in a single appointment together with the IND.",
          ],
        },
        links: [
          { u: "https://www.government.nl/topics/personal-data/question-and-answer/how-do-i-get-a-citizen-service-number-bsn", t: "Government.nl – BSN", d: { nl: "Hoe u een burgerservicenummer krijgt.", en: "How to get a citizen service number." } },
          { u: "https://www.digid.nl/en", t: "DigiD", d: { nl: "Digitale inlog voor overheid en zorg.", en: "Digital login for government and healthcare." } },
          { u: "https://www.rdw.nl/en", t: "RDW", d: { nl: "Rijden met of omwisselen van een buitenlands rijbewijs.", en: "Driving with or exchanging a foreign driving licence." } },
          { u: "https://www.iamsterdam.com/en/live-work-study/in-amsterdam", t: "IN Amsterdam", d: { nl: "Expatcenter voor de regio Amsterdam.", en: "Expat centre for the Amsterdam area." } },
          { u: "https://www.thehagueinternationalcentre.nl/", t: "The Hague International Centre", d: { nl: "Expatcenter voor de regio Den Haag.", en: "Expat centre for The Hague region." } },
        ],
      },
      {
        slug: { nl: "consulaire-zaken", en: "consular-services" },
        title: { nl: "Indiaas paspoort en consulaire zaken", en: "Indian passport and consular services" },
        intro: {
          nl: "Paspoort verlengen, OCI-kaart, verklaringen en hulp van de Indiase ambassade.",
          en: "Passport renewal, OCI card, attestations and help from the Indian embassy.",
        },
        body: {
          nl: [
            "De ambassade van India in Den Haag verzorgt de consulaire dienstverlening voor Indiërs in Nederland. Aanvragen voor paspoorten, OCI-kaarten en legalisaties lopen via het aanvraagcentrum van VFS Global; de ambassade neemt de beslissing.",
            "Verleng uw paspoort ruim op tijd: uw Nederlandse verblijfsvergunning is aan een geldig paspoort gekoppeld.",
          ],
          en: [
            "The Embassy of India in The Hague provides consular services for Indians in the Netherlands. Applications for passports, OCI cards and attestations are handled through the VFS Global application centre; the embassy takes the decision.",
            "Renew your passport well in advance: your Dutch residence permit is tied to a valid passport.",
          ],
        },
        links: [
          { u: "https://www.indianembassynetherlands.gov.in/", t: { nl: "Ambassade van India, Den Haag", en: "Embassy of India, The Hague" }, d: { nl: "Consulaire diensten, mededelingen en noodnummer.", en: "Consular services, notices and emergency helpline." } },
          { u: "https://services.vfsglobal.com/nld/en/ind/", t: "VFS Global – India services in the Netherlands", d: { nl: "Afspraak en aanvraag voor paspoort, visum en OCI.", en: "Appointments and applications for passport, visa and OCI." } },
          { u: "https://ociservices.gov.in/", t: "OCI Services", d: { nl: "Officiële online aanvraag van de OCI-kaart.", en: "Official online OCI card application." } },
        ],
      },
    ],
  },

  // ───────────────────────────────────────────────────────────────────────────
  {
    icon: "✈️",
    slug: { nl: "naar-india", en: "going-to-india" },
    title: { nl: "Naar India", en: "Going to India" },
    intro: {
      nl: "Voor Nederlanders die naar India gaan: visum, gezondheid, wonen en Nederlands erfgoed.",
      en: "For Dutch people heading to India: visas, health, living there and Dutch heritage.",
    },
    topics: [
      {
        slug: { nl: "visum-reisadvies", en: "visa-travel-advice" },
        title: { nl: "Visum en reisadvies", en: "Visa and travel advice" },
        intro: {
          nl: "Het e-visum voor India, het officiële reisadvies en hulp van de Nederlandse ambassade.",
          en: "The Indian e-visa, official Dutch travel advice and help from the Dutch embassy.",
        },
        body: {
          nl: [
            "Nederlanders hebben voor India altijd een visum nodig. Voor toerisme, zakelijk bezoek en enkele andere doelen kunt u online een e-visum aanvragen. Doe dat uitsluitend via de officiële website van de Indiase overheid: er zijn veel commerciële sites die er officieel uitzien en fors hogere prijzen rekenen.",
            "Lees voor vertrek het reisadvies van het ministerie van Buitenlandse Zaken. Dat wordt bijgewerkt zodra de veiligheidssituatie verandert en vermeldt ook gebieden waarvoor aparte vergunningen nodig zijn.",
          ],
          en: [
            "Dutch nationals always need a visa for India. For tourism, business visits and some other purposes you can apply for an e-visa online. Only do so through the official Indian government website: many commercial sites look official and charge considerably more.",
            "Before you leave, read the travel advice from the Dutch Ministry of Foreign Affairs. It is updated whenever the security situation changes and also lists areas that require special permits.",
          ],
        },
        links: [
          { u: "https://indianvisaonline.gov.in/evisa/", t: { nl: "Indiaas e-visum (officieel)", en: "Indian e-visa (official)" }, d: { nl: "De enige officiële website voor het e-visum.", en: "The only official e-visa website." } },
          { u: "https://www.nederlandwereldwijd.nl/reisadvies/india", t: { nl: "Reisadvies India", en: "Dutch travel advice for India" }, d: { nl: "Actueel reisadvies van Buitenlandse Zaken (Nederlands).", en: "Current advice from the Dutch foreign ministry (in Dutch)." } },
          { u: "https://www.nederlandwereldwijd.nl/landen/india", t: { nl: "Nederland Wereldwijd – India", en: "Netherlands Worldwide – India (Dutch)" }, d: { nl: "Ambassade in New Delhi, consulaten, paspoort aanvragen in India.", en: "Embassy in New Delhi, consulates, applying for a Dutch passport in India." } },
          { u: "https://www.incredibleindia.gov.in/", t: "Incredible India", d: { nl: "Officiële toeristische website van India.", en: "India's official tourism website." } },
        ],
      },
      {
        slug: { nl: "gezondheid", en: "health" },
        title: { nl: "Gezondheid en vaccinaties", en: "Health and vaccinations" },
        intro: {
          nl: "Vaccinaties, malaria, medicijnen meenemen en verzekering.",
          en: "Vaccinations, malaria, bringing medication and insurance.",
        },
        body: {
          nl: [
            "Voor India worden vaccinaties aanbevolen; welke precies hangt af van uw bestemming, reisduur en gezondheid. Maak ruim voor vertrek een afspraak bij de GGD of een andere reizigersadviseur.",
            "Neemt u medicijnen mee die onder de Opiumwet vallen, zoals sommige slaapmiddelen, pijnstillers en ADHD-medicatie, dan heeft u een gelegaliseerde verklaring nodig. Controleer ook of uw zorg- en reisverzekering India dekt.",
          ],
          en: [
            "Vaccinations are recommended for India; which ones depends on your destination, length of stay and health. Make an appointment with the municipal health service (GGD) or another travel clinic well before departure.",
            "If you bring medication covered by the Dutch Opium Act, such as some sleeping pills, painkillers and ADHD medication, you need a legalised certificate. Also check that your health and travel insurance cover India.",
          ],
        },
        links: [
          { u: "https://www.ggdreisvaccinaties.nl/", t: "GGD Reisvaccinaties", d: { nl: "Advies per land en afspraak maken.", en: "Advice per country and appointments (in Dutch)." } },
          { u: "https://www.lcr.nl/", t: "LCR", d: { nl: "Landelijk Coördinatiecentrum Reizigersadvisering.", en: "Dutch national coordination centre for travellers' health advice." } },
          { u: "https://www.hetcak.nl/", t: "CAK", d: { nl: "Verklaring voor het meenemen van medicijnen naar het buitenland.", en: "Certificates for taking medication abroad." } },
        ],
      },
      {
        slug: { nl: "wonen-werken-studeren", en: "living-working-studying" },
        title: { nl: "Wonen, werken en studeren in India", en: "Living, working and studying in India" },
        intro: {
          nl: "Werkvisum, registratie, stage, studie en vrijwilligerswerk.",
          en: "Employment visa, registration, internships, study and volunteering.",
        },
        body: {
          nl: [
            "Voor werk, stage, studie of vrijwilligerswerk in India heeft u een visum van het juiste type nodig; met een toeristenvisum is dat niet toegestaan. Bij een langer verblijf moet u zich meestal online registreren bij de vreemdelingendienst (FRRO).",
            "Blijf u langer dan acht maanden in het buitenland, dan schrijft u zich uit bij uw Nederlandse gemeente. Dat heeft gevolgen voor uw zorgverzekering, AOW-opbouw en belastingen. India biedt internationale studenten een eigen portal met opleidingen en beurzen.",
          ],
          en: [
            "For work, an internship, study or volunteering in India you need the right type of visa; a tourist visa does not allow it. For longer stays you usually have to register online with the foreigners' registration office (FRRO).",
            "If you will be abroad for more than eight months, you deregister from your Dutch municipality. This affects your health insurance, state pension accrual and taxes. India offers international students a dedicated portal with programmes and scholarships.",
          ],
        },
        links: [
          { u: "https://indianfrro.gov.in/", t: "e-FRRO", d: { nl: "Online registratie en visumverlenging in India.", en: "Online registration and visa extension in India." } },
          { u: "https://www.studyinindia.gov.in/", t: "Study in India", d: { nl: "Officiële portal voor buitenlandse studenten.", en: "Official portal for international students." } },
          { u: "https://www.nederlandwereldwijd.nl/wonen-werken", t: { nl: "Nederland Wereldwijd – Wonen en werken in het buitenland", en: "Netherlands Worldwide – Living and working abroad (Dutch)" }, d: { nl: "Checklist: uitschrijven, verzekering, AOW, belasting.", en: "Checklist: deregistration, insurance, state pension, tax." } },
          { u: "https://www.svb.nl/", t: "SVB", d: { nl: "AOW en kinderbijslag bij verblijf in het buitenland.", en: "State pension and child benefit while living abroad." } },
        ],
      },
      {
        slug: { nl: "nederlands-erfgoed", en: "dutch-heritage" },
        title: { nl: "Nederlands erfgoed in India", en: "Dutch heritage in India" },
        intro: {
          nl: "Forten, begraafplaatsen en handelsposten van de VOC, van Gujarat tot Bengalen.",
          en: "Forts, cemeteries and trading posts of the Dutch East India Company, from Gujarat to Bengal.",
        },
        body: {
          nl: [
            "Tussen het begin van de zeventiende en het begin van de negentiende eeuw had de Verenigde Oost-Indische Compagnie (VOC) handelsposten langs de hele Indiase kust: in Gujarat (Surat), aan de Malabarkust (Kochi), aan de Coromandelkust (Pulicat, Sadras, Nagapattinam) en in Bengalen (Chinsurah).",
            "Veel is nog te bezoeken. In Kochi staan het Mattancherry-paleis, bekend als het 'Dutch Palace', en een Nederlandse begraafplaats. Pulicat, Sadras en Chinsurah hebben begraafplaatsen met rijk versierde grafstenen en resten van forten. In Nederlandse archieven liggen kilometers VOC-documenten over India, deels online te raadplegen.",
          ],
          en: [
            "From the early seventeenth to the early nineteenth century, the Dutch East India Company (VOC) had trading posts all along the Indian coast: in Gujarat (Surat), on the Malabar coast (Kochi), on the Coromandel coast (Pulicat, Sadras, Nagapattinam) and in Bengal (Chinsurah).",
            "Much can still be visited. Kochi has the Mattancherry Palace, known as the 'Dutch Palace', and a Dutch cemetery. Pulicat, Sadras and Chinsurah have cemeteries with richly decorated tombstones and remains of forts. Dutch archives hold kilometres of VOC records on India, part of which can be consulted online.",
          ],
        },
        finder: "heritage",
        links: [
          { u: "https://www.atlasofmutualheritage.nl/", t: "Atlas of Mutual Heritage", d: { nl: "Kaarten, tekeningen en prenten van VOC-locaties.", en: "Maps, drawings and prints of VOC locations." } },
          { u: "https://www.nationaalarchief.nl/", t: "Nationaal Archief", d: { nl: "Het VOC-archief, deels gedigitaliseerd.", en: "The VOC archives, partly digitised." } },
          { u: "https://dutchinchinsurah.com/", t: "Dutch in Chinsurah", d: { nl: "Het Nederlandse verleden van Chinsurah in Bengalen.", en: "The Dutch past of Chinsurah in Bengal." } },
          { u: "https://dutchculture.nl/", t: "DutchCulture", d: { nl: "Culturele samenwerking en gedeeld erfgoed.", en: "Cultural cooperation and shared heritage." } },
        ],
      },
    ],
  },

  // ───────────────────────────────────────────────────────────────────────────
  {
    icon: "🤝",
    slug: { nl: "zakendoen", en: "business" },
    title: { nl: "Zakendoen", en: "Business" },
    intro: {
      nl: "Handel, investeren en ondernemen tussen Nederland en India.",
      en: "Trade, investment and entrepreneurship between the Netherlands and India.",
    },
    topics: [
      {
        slug: { nl: "zakendoen-in-india", en: "doing-business-in-india" },
        title: { nl: "Zakendoen in India", en: "Doing business in India" },
        intro: {
          nl: "Voor Nederlandse bedrijven: marktinformatie, handelsmissies en ondersteuning ter plaatse.",
          en: "For Dutch companies: market information, trade missions and on-the-ground support.",
        },
        body: {
          nl: [
            "India is een van de snelst groeiende grote economieën ter wereld en Nederland behoort al jaren tot de grotere buitenlandse investeerders. Kansen liggen onder meer in water, landbouw en voedsel, gezondheidszorg, logistiek, energie en hightech.",
            "De Rijksdienst voor Ondernemend Nederland (RVO) is het eerste aanspreekpunt, met landeninformatie, subsidies en handelsmissies. In India zelf helpt het Nederlandse handelsnetwerk: de ambassade in New Delhi, de consulaten-generaal en de Netherlands Business Support Offices.",
          ],
          en: [
            "India is one of the fastest-growing major economies in the world, and the Netherlands has for years been among its larger foreign investors. Opportunities lie in water, agriculture and food, healthcare, logistics, energy and high tech, among others.",
            "The Netherlands Enterprise Agency (RVO) is the first point of contact, with country information, subsidies and trade missions. In India itself the Dutch trade network helps: the embassy in New Delhi, the consulates-general and the Netherlands Business Support Offices.",
          ],
        },
        links: [
          { u: "https://www.rvo.nl/onderwerpen/landen-en-gebieden/india", t: { nl: "RVO – Zakendoen in India", en: "RVO – Doing business in India (Dutch)" }, d: { nl: "Landeninformatie, regelingen en contactpersonen.", en: "Country information, schemes and contacts." } },
          { u: "https://www.internationaalondernemen.nl/", t: "Internationaal Ondernemen", d: { nl: "Agenda van handelsmissies en evenementen.", en: "Calendar of trade missions and events." } },
          { u: "https://www.investindia.gov.in/", t: "Invest India", d: { nl: "Officieel Indiaas agentschap voor buitenlandse investeerders.", en: "India's official agency for foreign investors." } },
          { u: "https://www.netherlandsworldwide.nl/countries/india", t: "Netherlands Worldwide – India", d: { nl: "Ambassade, consulaten en handelskantoren.", en: "Embassy, consulates and business support offices." } },
        ],
      },
      {
        slug: { nl: "ondernemen-in-nederland", en: "doing-business-in-the-netherlands" },
        title: { nl: "Ondernemen in Nederland", en: "Doing business in the Netherlands" },
        intro: {
          nl: "Voor Indiase bedrijven en ondernemers: vestigen, bedrijf starten en startup-visum.",
          en: "For Indian companies and entrepreneurs: setting up, starting a company and the startup visa.",
        },
        body: {
          nl: [
            "Honderden Indiase bedrijven, waaronder de grote IT-dienstverleners, hebben een vestiging in Nederland, vaak als uitvalsbasis voor Europa. De Netherlands Foreign Investment Agency (NFIA) begeleidt buitenlandse bedrijven kosteloos bij vestiging en heeft kantoren in India.",
            "Een bedrijf starten begint met inschrijving bij de Kamer van Koophandel (KVK). Voor ondernemers van buiten de EU bestaan aparte verblijfsvergunningen, waaronder de startup-regeling waarbij u onder begeleiding van een erkende facilitator een jaar de tijd krijgt.",
          ],
          en: [
            "Hundreds of Indian companies, including the large IT service providers, have an office in the Netherlands, often as their base for Europe. The Netherlands Foreign Investment Agency (NFIA) supports foreign companies free of charge and has offices in India.",
            "Starting a company begins with registration at the Netherlands Chamber of Commerce (KVK). There are specific residence permits for entrepreneurs from outside the EU, including the startup scheme, which gives you a year under the guidance of a recognised facilitator.",
          ],
        },
        links: [
          { u: "https://investinholland.com/", t: "Invest in Holland (NFIA)", d: { nl: "Gratis ondersteuning voor buitenlandse bedrijven.", en: "Free support for foreign companies." } },
          { u: "https://business.gov.nl/", t: "Business.gov.nl", d: { nl: "Alle regels voor ondernemen in Nederland, in het Engels.", en: "All rules for doing business in the Netherlands, in English." } },
          { u: "https://www.kvk.nl/en/", t: "KVK – Chamber of Commerce", d: { nl: "Bedrijf inschrijven en handelsregister.", en: "Company registration and the business register." } },
          { u: "https://ind.nl/en", t: "IND", d: { nl: "Verblijfsvergunning voor zelfstandigen en startups.", en: "Residence permits for the self-employed and startups." } },
        ],
      },
      {
        slug: { nl: "netwerken", en: "networks" },
        title: { nl: "Zakelijke netwerken", en: "Business networks" },
        intro: {
          nl: "Kamers van koophandel en netwerken die Nederlandse en Indiase ondernemers verbinden.",
          en: "Chambers and networks connecting Dutch and Indian entrepreneurs.",
        },
        body: {
          nl: [
            "Een goed netwerk is in de handel met India onmisbaar. De Netherlands India Chamber of Commerce & Trade (NICCT) organiseert seminars, netwerkbijeenkomsten en handelsmissies in beide richtingen. Ook de ambassades van beide landen hebben een economische afdeling die bedrijven op weg helpt.",
          ],
          en: [
            "A good network is indispensable in trade with India. The Netherlands India Chamber of Commerce & Trade (NICCT) organises seminars, networking events and trade missions in both directions. The embassies of both countries also have an economic section that helps companies get started.",
          ],
        },
        links: [
          { u: "https://nicct.nl/", t: "NICCT", d: { nl: "Netherlands India Chamber of Commerce & Trade.", en: "Netherlands India Chamber of Commerce & Trade." } },
          { u: "https://www.indianembassynetherlands.gov.in/", t: { nl: "Ambassade van India – handel", en: "Embassy of India – commerce" }, d: { nl: "Economische en handelsafdeling in Den Haag.", en: "Economic and commercial wing in The Hague." } },
          { u: "https://www.vno-ncw.nl/", t: "VNO-NCW", d: { nl: "Nederlandse ondernemersorganisatie; betrokken bij handelsmissies.", en: "Dutch employers' federation; involved in trade missions." } },
        ],
      },
    ],
  },

  // ───────────────────────────────────────────────────────────────────────────
  {
    icon: "⚖️",
    slug: { nl: "familie-recht", en: "family-law" },
    title: { nl: "Familie en recht", en: "Family and law" },
    intro: {
      nl: "Huwelijk, documenten, adoptie en roots, nationaliteit, belasting en pensioen.",
      en: "Marriage, documents, adoption and roots, nationality, tax and pensions.",
    },
    topics: [
      {
        slug: { nl: "huwelijk-documenten", en: "marriage-documents" },
        title: { nl: "Huwelijk en documenten", en: "Marriage and documents" },
        intro: {
          nl: "Trouwen in India of Nederland, en Indiase documenten laten legaliseren.",
          en: "Getting married in India or the Netherlands, and legalising Indian documents.",
        },
        body: {
          nl: [
            "Een huwelijk dat in India rechtsgeldig is gesloten, wordt in Nederland in beginsel erkend. Woont u in Nederland, dan bent u verplicht het huwelijk te laten registreren bij uw gemeente. Daarvoor is de Indiase huwelijksakte nodig, voorzien van een apostille.",
            "Hetzelfde geldt voor geboorteakten, diploma's en andere Indiase documenten die u in Nederland wilt gebruiken: ze moeten in India van een apostille worden voorzien door het ministerie van Buitenlandse Zaken aldaar. De Nederlandse overheid beschrijft per documenttype precies welke stappen nodig zijn.",
          ],
          en: [
            "A marriage validly concluded in India is in principle recognised in the Netherlands. If you live in the Netherlands, you are required to register the marriage with your municipality. For that you need the Indian marriage certificate bearing an apostille.",
            "The same applies to birth certificates, diplomas and other Indian documents you want to use in the Netherlands: they must be apostilled in India by the Ministry of External Affairs. The Dutch government describes exactly which steps are needed for each type of document.",
          ],
        },
        links: [
          { u: "https://www.netherlandsworldwide.nl/legalisation/foreign-documents/india", t: "Netherlands Worldwide – Legalising documents from India", d: { nl: "Stappenplan per document (Engels).", en: "Step-by-step guide per document." } },
          { u: "https://www.nederlandwereldwijd.nl/legalisatie/buitenlandse-documenten/india", t: { nl: "Nederland Wereldwijd – Documenten uit India legaliseren", en: "Same guide in Dutch" }, d: { nl: "Stappenplan per document.", en: "Step-by-step guide per document (Dutch)." } },
          { u: "https://www.rijksoverheid.nl/onderwerpen/trouwen-samenlevingscontract-en-geregistreerd-partnerschap", t: { nl: "Rijksoverheid – Trouwen", en: "Government of the Netherlands – Marriage (Dutch)" }, d: { nl: "Trouwen in het buitenland en registratie in Nederland.", en: "Marrying abroad and registration in the Netherlands." } },
          { u: "https://www.mea.gov.in/apostille.htm", t: "MEA – Apostille", d: { nl: "Indiaas ministerie van Buitenlandse Zaken over apostilles.", en: "India's Ministry of External Affairs on apostilles." } },
        ],
      },
      {
        slug: { nl: "adoptie-roots", en: "adoption-roots" },
        title: { nl: "Adoptie en roots", en: "Adoption and roots" },
        intro: {
          nl: "Voor geadopteerden uit India die hun afkomst zoeken, en de stand van interlandelijke adoptie.",
          en: "For adoptees from India searching for their origins, and the status of intercountry adoption.",
        },
        body: {
          nl: [
            "Sinds de jaren zeventig zijn enkele duizenden kinderen uit India door Nederlandse gezinnen geadopteerd. Veel van hen zoeken later naar hun afkomst. Het expertisecentrum INEA biedt geadopteerden informatie, psychosociale en juridische ondersteuning en hulp bij het zoeken naar familie. Het adoptiedossier kan worden opgevraagd bij de instanties die destijds betrokken waren.",
            "Nederland bouwt interlandelijke adoptie af. Sinds mei 2024 kunnen geen nieuwe adoptieprocedures meer worden gestart; lopende procedures worden nog afgehandeld. De Rijksoverheid publiceert de actuele stand van zaken.",
          ],
          en: [
            "Since the 1970s several thousand children from India have been adopted by Dutch families. Many of them later search for their origins. The INEA expertise centre offers adoptees information, psychosocial and legal support and help with tracing family. The adoption file can be requested from the organisations that were involved at the time.",
            "The Netherlands is phasing out intercountry adoption. Since May 2024 no new adoption procedures can be started; ongoing procedures are still being completed. The Dutch government publishes the current state of affairs.",
          ],
        },
        links: [
          { u: "https://www.inea.nl/", t: "INEA", d: { nl: "Expertisecentrum Interlandelijke Adoptie: hulp bij roots en zoektochten.", en: "Dutch expertise centre for intercountry adoption: help with roots and searches." } },
          { u: "https://www.rijksoverheid.nl/onderwerpen/adoptie", t: { nl: "Rijksoverheid – Adoptie", en: "Government of the Netherlands – Adoption (Dutch)" }, d: { nl: "Actueel beleid en de afbouw van interlandelijke adoptie.", en: "Current policy and the phase-out of intercountry adoption." } },
          { u: "https://fiom.nl/", t: "Fiom", d: { nl: "Specialist in afstammingsvragen en zoeken naar familie.", en: "Specialist in questions of parentage and family tracing." } },
          { u: "https://cara.wcd.gov.in/", t: "CARA", d: { nl: "Indiase centrale adoptieautoriteit; ook voor 'root search'.", en: "India's Central Adoption Resource Authority; also handles root searches." } },
        ],
      },
      {
        slug: { nl: "nationaliteit-oci", en: "nationality-oci" },
        title: { nl: "Nationaliteit en OCI", en: "Nationality and OCI" },
        intro: {
          nl: "Nederlander worden, het verlies van de Indiase nationaliteit en de OCI-kaart.",
          en: "Becoming Dutch, losing Indian citizenship and the OCI card.",
        },
        body: {
          nl: [
            "India staat geen dubbele nationaliteit toe. Wie Nederlander wordt, verliest daarmee het Indiase staatsburgerschap en moet het Indiase paspoort inleveren en een 'surrender certificate' aanvragen.",
            "Daarna kunt u een OCI-kaart (Overseas Citizen of India) aanvragen. Dat is geen nationaliteit, maar een levenslang visum waarmee u onbeperkt naar India kunt reizen en er mag wonen en werken, met enkele uitzonderingen zoals stemrecht en het kopen van landbouwgrond. Ook kinderen en kleinkinderen van Indiërs en echtgenoten komen onder voorwaarden in aanmerking; voor Surinaamse Hindostanen geldt een ruimere regeling.",
          ],
          en: [
            "India does not allow dual citizenship. Anyone who becomes Dutch thereby loses Indian citizenship and has to surrender the Indian passport and apply for a surrender certificate.",
            "After that you can apply for an OCI (Overseas Citizen of India) card. This is not citizenship but a lifelong visa that lets you travel to India without limit and live and work there, with some exceptions such as voting and buying agricultural land. Children and grandchildren of Indians, and spouses, may also qualify under certain conditions; a broader arrangement applies to Surinamese Hindustanis.",
          ],
        },
        links: [
          { u: "https://ind.nl/en/dutch-citizenship", t: "IND – Dutch citizenship", d: { nl: "Naturalisatie en optie: voorwaarden en procedure.", en: "Naturalisation and option: requirements and procedure." } },
          { u: "https://ociservices.gov.in/", t: "OCI Services", d: { nl: "Officiële online OCI-aanvraag.", en: "Official online OCI application." } },
          { u: "https://www.indianembassynetherlands.gov.in/page/overseas-citizen-of-india-oci-card/", t: { nl: "Ambassade van India – OCI-kaart", en: "Embassy of India – OCI card" }, d: { nl: "Voorwaarden en aanvragen vanuit Nederland.", en: "Requirements and applying from the Netherlands." } },
          { u: "https://www.rijksoverheid.nl/onderwerpen/nederlandse-nationaliteit", t: { nl: "Rijksoverheid – Nederlandse nationaliteit", en: "Government of the Netherlands – Dutch nationality (Dutch)" }, d: { nl: "Verkrijgen en verliezen van het Nederlanderschap.", en: "Acquiring and losing Dutch nationality." } },
        ],
      },
      {
        slug: { nl: "belasting-pensioen", en: "tax-pensions" },
        title: { nl: "Belasting, pensioen en geld", en: "Tax, pensions and money" },
        intro: {
          nl: "Belastingverdrag, sociale zekerheid, pensioen meenemen en inkomen of bezit in beide landen.",
          en: "Tax treaty, social security, taking your pension along and income or assets in both countries.",
        },
        body: {
          nl: [
            "Nederland en India hebben een belastingverdrag dat dubbele belasting voorkomt, en een verdrag over sociale zekerheid. Dat laatste regelt onder meer dat uitgezonden werknemers niet in beide landen premies betalen en dat opgebouwde AOW ook in India kan worden uitbetaald.",
            "Wie in Nederland woont, geeft in de Nederlandse aangifte zijn wereldwijde inkomen en vermogen op, dus ook Indiase bankrekeningen, beleggingen en onroerend goed. Indiërs die naar het buitenland verhuizen moeten hun Indiase bankrekeningen laten omzetten naar NRI-rekeningen. Bij ingewikkelde situaties is een adviseur met kennis van beide stelsels geen overbodige luxe.",
          ],
          en: [
            "The Netherlands and India have a tax treaty that prevents double taxation, and a social security agreement. The latter ensures, among other things, that seconded employees do not pay contributions in both countries and that Dutch state pension (AOW) can also be paid out in India.",
            "Anyone living in the Netherlands declares their worldwide income and assets in the Dutch tax return, including Indian bank accounts, investments and property. Indians who move abroad must have their Indian bank accounts converted to NRI accounts. In complicated situations an adviser who knows both systems is well worth it.",
          ],
        },
        links: [
          { u: "https://www.belastingdienst.nl/wps/wcm/connect/en/individuals/individuals", t: { nl: "Belastingdienst (Engelstalig)", en: "Dutch Tax Administration (English)" }, d: { nl: "Aangifte, wereldinkomen en verdragen.", en: "Tax returns, worldwide income and treaties." } },
          { u: "https://www.svb.nl/en", t: "SVB", d: { nl: "AOW en verdragen over sociale zekerheid.", en: "State pension and social security agreements." } },
          { u: "https://www.incometax.gov.in/", t: "Income Tax Department of India", d: { nl: "Indiase aangifte, ook voor niet-ingezetenen (NRI).", en: "Indian tax filing, including for non-residents (NRIs)." } },
          { u: "https://www.epfindia.gov.in/", t: "EPFO", d: { nl: "Indiaas werknemerspensioenfonds; regels voor internationale werknemers.", en: "India's Employees' Provident Fund; rules for international workers." } },
        ],
      },
    ],
  },
];

// Text of the "About" page.
export const about = {
  slug: { nl: "over", en: "about" },
  title: { nl: "Over Indiawijzer", en: "About Indiawijzer" },
  blocks: [
    {
      h: { nl: "Wat is Indiawijzer?", en: "What is Indiawijzer?" },
      p: {
        nl: [
          "Indiawijzer is een onafhankelijke wegwijzer voor alles wat Nederland en India verbindt: van restaurants en Bollywoodfilms tot visa, studie, zakendoen en familierecht. We leggen elk onderwerp kort uit en verwijzen daarna door naar de officiële of best beschikbare bron.",
        ],
        en: [
          "Indiawijzer is an independent guide to everything that connects the Netherlands and India: from restaurants and Bollywood films to visas, study, business and family law. We explain each subject briefly and then point you to the official or best available source.",
        ],
      },
    },
    {
      h: { nl: "Hoe blijft de site actueel?", en: "How does the site stay up to date?" },
      p: {
        nl: [
          "Regels, tarieven en adressen veranderen voortdurend. Daarom noemen we die zo min mogelijk zelf en linken we naar de instantie die ze vaststelt. Het nieuws, de wisselkoers en de lijsten met restaurants, tempels, yogastudio's en cricketclubs worden elke dag automatisch ververst uit openbare bronnen. De feestkalender wordt berekend uit de stand van zon en maan. Alle links op de site worden wekelijks automatisch gecontroleerd.",
        ],
        en: [
          "Rules, fees and addresses change constantly. That is why we state them as little as possible ourselves and link to the authority that sets them. The news, the exchange rate and the lists of restaurants, temples, yoga studios and cricket clubs are refreshed automatically every day from public sources. The festival calendar is calculated from the positions of the sun and moon. Every link on the site is checked automatically each week.",
        ],
      },
    },
    {
      h: { nl: "Disclaimer", en: "Disclaimer" },
      p: {
        nl: [
          "De informatie op deze website is algemeen van aard en geen juridisch, fiscaal of medisch advies. Hoewel de site met zorg is samengesteld, kunnen er geen rechten aan worden ontleend. Raadpleeg voor uw persoonlijke situatie altijd de officiële instantie of een deskundige. Indiawijzer is niet verbonden aan de Nederlandse of Indiase overheid en is niet verantwoordelijk voor de inhoud van websites waarnaar wordt verwezen.",
        ],
        en: [
          "The information on this website is general in nature and is not legal, tax or medical advice. Although the site has been compiled with care, no rights can be derived from it. For your personal situation, always consult the official authority or a professional. Indiawijzer is not affiliated with the Dutch or Indian government and is not responsible for the content of the websites it links to.",
        ],
      },
    },
    {
      h: { nl: "Privacy", en: "Privacy" },
      p: {
        nl: [
          "Deze website plaatst geen cookies, gebruikt geen trackers en verzamelt geen persoonsgegevens. Er zijn geen accounts, formulieren of advertenties.",
          "Twee pagina's halen gegevens rechtstreeks bij een andere dienst op: de kaart op ‘India bij mij in de buurt’ komt van OpenStreetMap en het weer op ‘Nu in India en Nederland’ van Open-Meteo. Die diensten zien daarbij uw IP-adres, zoals elke website die u bezoekt. Gebruikt u de knop ‘Gebruik mijn locatie’, dan blijft uw locatie in uw eigen browser; wij ontvangen of bewaren die niet.",
        ],
        en: [
          "This website sets no cookies, uses no trackers and collects no personal data. There are no accounts, forms or advertisements.",
          "Two pages fetch data directly from another service: the map on ‘India near me’ comes from OpenStreetMap and the weather on ‘Right now in India and the Netherlands’ from Open-Meteo. Those services see your IP address when they do, like any website you visit. If you use the ‘Use my location’ button, your location stays in your own browser; we do not receive or store it.",
        ],
      },
    },
    {
      h: { nl: "Bronnen", en: "Sources" },
      p: {
        nl: [
          "Lijsten met restaurants, gebedshuizen, yogastudio's, cricketclubs en plaatsen, en de kaart: © OpenStreetMap-bijdragers, beschikbaar onder de Open Database License. Lijsten met Nederlands erfgoed in India en Gandhi-gedenktekens: Wikidata. Weer en luchtkwaliteit: Open-Meteo. Wisselkoers: referentiekoers van de Europese Centrale Bank via Frankfurter. Nieuwskoppen zijn eigendom van de genoemde uitgevers en linken naar het oorspronkelijke artikel.",
        ],
        en: [
          "Lists of restaurants, places of worship, yoga studios, cricket clubs and towns, and the map: © OpenStreetMap contributors, available under the Open Database License. Lists of Dutch heritage in India and Gandhi memorials: Wikidata. Weather and air quality: Open-Meteo. Exchange rate: European Central Bank reference rate via Frankfurter. News headlines belong to the publishers named and link to the original article.",
        ],
      },
    },
  ],
};
