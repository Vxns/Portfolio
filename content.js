/* =========================================================
   HIER PFLEGST DU ALLE INHALTE – index.html musst du nie anfassen.

   Neues Projekt / Laborversuch / Station im Werdegang:
   Block kopieren, ausfüllen, Seite neu laden.
   Bilder in den Ordner images/ legen und unter "bilder" eintragen.
   Was du nicht brauchst, einfach leer lassen ("" oder []).
   ========================================================= */

const SITE = {
  vorname: "Jean",
  nachname: "Kandler",
  rolle: "Student Elektrotechnik (B.Eng.)",
  schwerpunkt: "Automatisierungstechnik",
  hochschule: "Technische Hochschule Georg Agricola, Bochum",

  // Das Wichtigste für Recruiter: wonach suchst du, ab wann?
  status: "Offen für Werkstudentenstellen",
  // z. B. "ab März 2027" – leer lassen, wenn du es nicht nennen willst
  verfuegbar: "",

  // Kurzer Pitch unter dem Namen (2–3 Sätze, konkret > blumig)
  pitch:
    "Ich entwickle Hardware und Firmware von der Schaltung über das PCB-Layout bis zum Code auf dem Mikrocontroller – und messe am Ende selbst nach, ob es funktioniert.",

  foto: "images/portrait.jpg",        // optional, Hochformat oder quadratisch
  lebenslauf: "images/lebenslauf.pdf",// optional: PDF in images/ legen, sonst Button leer lassen: ""

  // 3–4 Fakten neben dem Foto. Notenschnitt kannst du weglassen, wenn du ihn nicht zeigen willst.
  fakten: [
    { wert: "14+",  label: "Projekte gebaut" },
    { wert: "2",    label: "Sprachen" },
    { wert: "STM32 · ESP32 · FPGA", label: "Plattformen" },
  ],

  ueberMich: [
    "Mich begeistert, wenn aus einem Schaltplan etwas wird, das wirklich läuft: ein Roboter, der der Linie folgt, ein Wandler mit 94 % Wirkungsgrad oder ein Funkknoten, der ein Jahr mit einer Batterie auskommt.",
    "Neben dem Studium baue ich eigene Projekte, löte und messe im Labor. Ich arbeite gern im Team und erkläre technische Dinge verständlich.",
  ],

  sprachen: [
    ["Deutsch", "Muttersprache"], ["Englisch", "B2"]
  ],

  kontakt: {
    mail: "JeanKandler.bewerbungen@gmail.com",
    links: [
      { label: "LinkedIn", text: "linkedin.com/in/DEIN-NAME", href: "https://linkedin.com/in/DEIN-NAME" },
      { label: "GitHub",   text: "github.com/DEIN-NAME",      href: "https://github.com/DEIN-NAME" },
    ],
    standort: "Bochum, Deutschland",
  },
};

/* ---------------- WERDEGANG (Studium, Praktika, Jobs) ---------------- */
// typ: "Studium" | "Praktikum" | "Werkstudent" | "Job" | "Sonstiges"
const WERDEGANG = [
  {
    typ: "Studium",
    zeitraum: "Aktuell",             // z. B. "2022 – heute"
    titel: "B.Eng. Elektrotechnik",
    ort: "Technische Hochschule Georg Agricola",
    text: "Schwerpunkt Embedded Systems. Relevante Module: Regelungstechnik, Digitaltechnik, Leistungselektronik, Signalverarbeitung.",
  },
  {
    typ: "Abgeschlossene Berufsausbildung",
    zeitraum: "2019-2022",             // z. B. "2022 – heute"
    titel: "Informationstechnischer Assistent (ITA)",
    ort: "Emschertal Berufskolleg, Herne",
    text: "Schwerpunkt Programmierung, Datenbanken und Betriebssysteme & Netzwerke.",
  },
  {
    typ: "Fachhochschulreife",
    zeitraum: "2019-2022",             // z. B. "2022 – heute"
    titel: "Informationstechnischer Assistent (ITA)",
    ort: "Emschertal Berufskolleg, Herne",
    text: "Schwerpunkt Programmierung, Datenbanken und Betriebssysteme & Netzwerke.",
  },
];

/* ---------------- PROJEKTE ---------------- */
const PROJEKTE = [
  {
  titel: "Mikrocontrollerprog. in C",
  bereich: "Embedded Systems / Mikroprozessortechnik",
  tags: ["C", "Mikrocontroller", "AD-Wandlung", "DA-Wandlung", "SPI"],
  kurz: "Fünf Laboraufgaben zur digitalen Ein- und Ausgabe, Messwerterfassung und Kommunikation mit einem Mikrocontroller.",
  text: "Im Praktikum Mikroprozessortechnik bearbeitete ich fünf Aufgaben zur hardwarenahen Programmierung in C. Die Versuche umfassten die Ansteuerung eines Lauflichts, die Zählung von Tastendrücken, die Erfassung analoger Messwerte, die Digital-Analog-Wandlung und die Kommunikation über den SPI-Bus. Dabei beschäftigte ich mich mit dem Zusammenspiel von Programmcode, Mikrocontroller und angeschlossener Hardware.",
  meineRolle: "",
  specs: [
    ["Umfang", "5 Laboraufgaben"],
    ["Programmiersprache", "C"],
    ["Schwerpunkte", "Ein-/Ausgabe, AD/DA-Wandlung, SPI"]
  ],
  bilder: [],
  link: null
},
{
  titel: "Digitale Schaltungsentwicklung mit VHDL",
  bereich: "Digitaltechnik / FPGA",
  tags: ["VHDL", "Quartus II", "FPGA", "Kombinatorische Logik", "Sequenzielle Logik"],
  kurz: "Entwurf und Umsetzung digitaler Vergleichs-, Rechen- und Zählschaltungen auf einem FPGA in drei erfolgreich abgeschlossenen Laborversuchen.",
  text: "Im Praktikum Digitaltechnik 2 entwickelte und erprobte ich digitale Schaltungen mit VHDL in Quartus II auf einem DE2-115-Board mit Cyclone-IV-E-FPGA. Im ersten Versuch entstand ein 4-Bit-Komparator, der aus selbst entworfenen 1-Bit-Komponenten aufgebaut wurde. Der zweite Versuch umfasste die Entwicklung eines Subtrahierwerks mit Gleichheitserkennung, die Darstellung vorzeichenbehafteter Ergebnisse und die Erweiterung auf eine parametrierbare Bitbreite. Im dritten Versuch wurden ein Johnsonzähler mit umschaltbarer Zählrichtung sowie rechts- und linksschiebende Verfahren zur binären Modulo-2-Polynommultiplikation umgesetzt. Eingaben erfolgten über Schalter, die Ergebnisse wurden über LEDs und 7-Segment-Anzeigen dargestellt. Die Versuche verbanden den logischen Entwurf anhand von Wahrheitstabellen und booleschen Gleichungen mit funktionaler und struktureller Hardwarebeschreibung. Alle drei Laborversuche wurden erfolgreich bestanden.",
  meineRolle: "",
  specs: [
    ["Umfang", "3 bestandene Laborversuche"],
    ["Hardware", "DE2-115 / Cyclone IV E"],
    ["Entwicklung", "VHDL / Quartus II"],
    ["Schaltungen", "Komparator, Subtrahierwerk, Johnsonzähler, Polynommultiplikator"]
  ],
  bilder: [
    { src: "images/dt2-fpga-board.png", caption: "DE2-115-FPGA-Board im Praktikum Digitaltechnik 2." }
  ],
  link: null
},
{
  titel: "Gebäudeautomation mit KNX, DALI und digitalSTROM",
  bereich: "Gebäudeautomation / Smart Building",
  tags: ["KNX", "ETS 5/6", "DALI", "digitalSTROM", "Lichtsteuerung", "Jalousiesteuerung"],
  kurz: "Konfiguration und Erprobung vernetzter Beleuchtungs- und Jalousiesteuerungen mit drei Systemen der Gebäudeautomation.",
  text: "Im Praktikum Gebäudeautomation bearbeitete ich gemeinsam mit meinem Laborpartner Aufgaben zur Inbetriebnahme und Parametrierung von KNX-, DALI- und digitalSTROM-Systemen. Mit digitalSTROM wurden Geräte einer Haus-Demowand logisch den Räumen zugeordnet, Lichtstimmungen eingerichtet und zentrale Funktionen wie Gehen, Kommen, Panik und Klingeln konfiguriert und getestet. Der KNX-Versuch umfasste die Projektierung einer Licht- und Jalousiesteuerung in ETS 5 Professional mit Gebäudestruktur, Gruppenadressen und Displaybedienung. Ergänzend wurden ein Fensterkontakt und eine Wetterstation für Sperr- und Windschutzfunktionen eingebunden. Mit DALI wurden Betriebsgeräte adressiert, Leuchtengruppen gebildet und Schalt-, Dimm- und RGB-Lichtszenen eingerichtet. Eine simulierte Morgendämmerung wurde über eine manuell weitergeschaltete Szenenfolge mit weichen Übergängen dargestellt. Im Mittelpunkt stand die Umsetzung von Bedien- und Automatisierungsfunktionen durch die gezielte Verknüpfung und Parametrierung von Sensoren und Aktoren.",
  meineRolle: "",
  specs: [
    ["Systeme", "KNX, DALI, digitalSTROM"],
    ["Projektierung", "ETS 5/6 Professional"],
    ["Funktionen", "Licht, Jalousie, Szenen, Windschutz"],
    ["Arbeitsform", "Laborarbeit im Zweierteam"]
  ],
  bilder: [
    { src: "images/dali-lichtszene.jpg", caption: "DALI: Gesamtaufbau mit aktivierter RGB-Lichtszene." },
    { src: "images/dali-rgb-aufbau.jpg", caption: "DALI: RGB-Leuchte zur Erprobung der Farbmischung." },
    { src: "images/dali-arbeitsplatz.jpg", caption: "DALI: Arbeitsplatzbeleuchtung mit blauem Stimmungslicht." },
    { src: "images/digitalstrom-demowand.jpg", caption: "digitalSTROM: Haus-Demowand mit Raumaufteilung und Bedienelementen." },
    { src: "images/digitalstrom-verteiler.jpg", caption: "digitalSTROM: Verteilerplatte des Laboraufbaus." },
    { src: "images/digitalstrom-panik.jpg", caption: "digitalSTROM: Funktionstest der zentralen Panikbeleuchtung." },
    { src: "images/gebaeudeautomation-labor-1.png", caption: "Im Gebäudeautomationslabor vor dem DALI-Versuchsaufbau." },
    { src: "images/gebaeudeautomation-labor-2.png", caption: "Einblick in meine Laborarbeit zur Gebäudeautomation." }

  ],
  link: null
},
{
  titel: "Wetterstation mit Arduino und Raspberry Pi",
  jahr: "2022",
  bereich: "ITA-Abschlussprojekt",
  tags: ["Arduino Uno", "Raspberry Pi", "Sensorik", "Python", "Java", "Linux", "Datenbank", "Apache"],
  kurz: "Eine Wetterstation zur Erfassung von Temperatur, Luftfeuchtigkeit und Windgeschwindigkeit entwickeln und die Messdaten in einer Anwendung zugänglich machen.",
  text: "Im Team wurde ein Prototyp mit Arduino Uno, DHT11-Sensor und Windmesser aufgebaut und verdrahtet. Der Arduino übernahm die Messwerterfassung. Ein Raspberry Pi mit Linux diente zur Weiterverarbeitung über ein Python-Skript sowie zum Betrieb einer Datenbank und eines Apache-Webservers. Zur Anzeige der Stationsdaten entstand eine Java-Anwendung mit Login und mehreren Ansichten innerhalb eines gemeinsamen Fensters.",
  specs: [
    ["Messgrößen", "Temperatur, Luftfeuchtigkeit, Windgeschwindigkeit"],
    ["Hardware", "Arduino Uno / Raspberry Pi"],
    ["Sensorik", "DHT11 / Schalenanemometer"],
    ["Software", "Arduino-Programm, Python, Java"],
    ["Infrastruktur", "Linux, Apache, Datenbank"],
    ["Fernzugriff", "SSH im lokalen Netzwerk"]
  ],
  bilder: [
    { src: "images/wetterstation-gesamt.jpg", caption: "ITA-Abschlussprojekt: Gesamtaufbau der Wetterstation mit Arduino Uno, Raspberry Pi und Windmesser." },
    { src: "images/wetterstation-arduino.jpg", caption: "Detailansicht des Arduino Uno und der Sensorverdrahtung auf dem Steckbrett." },
    { src: "images/wetterstation-windmesser.jpg", caption: "Wetterstation im Laborbetrieb mit rotierendem Schalenanemometer." }
  ]
},
  
];

/* ---------------- LABORVERSUCHE ---------------- */
const LABOR = [
  {
  titel: "Modularer 4-Bit-Komparator auf einem FPGA",
  fach: "Digitaltechnik 2",
  ziel: "Einen 1-Bit-Komparator mit Freigabeeingang entwerfen und daraus einen strukturell beschriebenen 4-Bit-Komparator in VHDL aufbauen.",
  ergebnis: "Die Vergleichsfunktionen größer, gleich und kleiner wurden auf dem FPGA umgesetzt und über LEDs angezeigt. Der Versuch wurde erfolgreich bestanden.",
  messwerte: [
    ["Verglichene Bitbreite", "4 Bit"],
    ["Entwurf", "Funktionales 1-Bit-Modul, strukturelle Zusammenschaltung"],
    ["Entwicklungsumgebung", "VHDL / Quartus II"]
  ],
  bilder: []
},
{
  titel: "Parametrierbares Subtrahierwerk mit Ergebnisanzeige",
  fach: "Digitaltechnik 2",
  ziel: "Aus 1-Bit-Vollsubtrahierern ein mehrstelliges Rechenwerk mit Gleichheitserkennung aufbauen und anschließend auf eine parametrierbare Bitbreite erweitern.",
  ergebnis: "Ein 4-Bit-Subtrahierwerk mit dezimaler Anzeige der Operanden und der vorzeichenbehafteten Differenz wurde umgesetzt. Die anschließende n-Bit-Variante nutzte LEDs zur Ausgabe. Der Versuch wurde erfolgreich bestanden.",
  messwerte: [
    ["4-Bit-Variante", "Dezimale Ausgabe über 7-Segment-Anzeigen"],
    ["Parametrierbare Variante", "Bis zu 7 Bit je Operand"],
    ["Zusatzfunktionen", "Gleichheits- und Vorzeichenerkennung"]
  ],
  bilder: []
},
{
  titel: "Johnsonzähler und binärer Polynommultiplikator",
  fach: "Digitaltechnik 2",
  ziel: "Einen Johnsonzähler mit umschaltbarer Zählrichtung entwickeln und mit einer rechts- beziehungsweise linksschiebenden Modulo-2-Polynommultiplikation kombinieren.",
  ergebnis: "Zähler und Polynommultiplikation wurden in VHDL umgesetzt. Der Zähler begrenzte den Berechnungsablauf auf 15 Takte; das Ergebnis blieb anschließend bis zum Reset auf den LEDs erhalten. Der Versuch wurde erfolgreich bestanden.",
  messwerte: [
    ["Zählerzustände", "16"],
    ["Systemtakt", "1 Hz"],
    ["Berechnungsdauer", "15 Taktzyklen"],
    ["Ergebnisanzeige", "15 Bit über LEDs"]
  ],
  bilder: []
},
{
  titel: "Tastendruckzähler mit serieller Ausgabe",
  fach: "Mikroprozessortechnik",
  ziel: "Tasterbetätigungen über einen digitalen Eingang erfassen, zählen und den aktuellen Zählerstand seriell ausgeben.",
  ergebnis: "Ein Tastendruckzähler wurde in C umgesetzt. Das Programm erkennt den aktiv-low geschalteten Taster, wartet auf dessen Loslassen und erhöht anschließend den Zählerstand. Die Ausgabe erfolgt über printf an ein serielles Terminal. Der Laborversuch wurde erfolgreich bestanden.",
  messwerte: [
    ["Tastereingang", "P3.3 / aktiv-low"],
    ["Wartezeit nach Loslassen", "20 ms"],
    ["Zählerausgabe", "Seriell über printf"]
  ],
  bilder: []
},
{
  titel: "Spannungsmessung mit digitaler Grenzwertüberwachung",
  fach: "Mikroprozessortechnik",
  ziel: "Eine analoge Eingangsspannung erfassen, den ADC-Rohwert in einen Spannungswert umrechnen und bei Überschreiten eines Grenzwerts einen Summer ansteuern.",
  ergebnis: "Der AD-Wandler wurde durch direkte Registerzugriffe konfiguriert und ausgelesen. Das Programm setzt das 10-Bit-Ergebnis aus zwei Registern zusammen und gibt Rohwert, Hexadezimalwert und Spannung seriell aus. Oberhalb eines ADC-Werts von 819 wird der aktiv-low angesteuerte Summer eingeschaltet. Der Laborversuch wurde erfolgreich bestanden.",
  messwerte: [
    ["ADC-Auflösung", "10 Bit / 0–1023"],
    ["Eingangskanal", "AN0"],
    ["Spannungsskalierung im Code", "0–2,5 V"],
    ["Alarmschwelle", "ADC > 819 / ca. 2,0 V"],
    ["Wartezeit je Schleifendurchlauf", "50 ms"]
  ],
  bilder: []
},
{
  titel: "Sägezahn- und Dreiecksignale mit DA-Wandler",
  fach: "Mikroprozessortechnik",
  ziel: "Periodische analoge Signalverläufe durch die zyklische Ausgabe digitaler Werte an einen DA-Wandler erzeugen.",
  ergebnis: "Ein C-Programm erzeugt wahlweise einen Sägezahn- oder Dreieckverlauf. Die Auswahl erfolgt beim Start über ein serielles Textmenü. Der DA-Wandler wird über eine feste Adresse im externen Datenadressraum angesprochen. Nach der Auswahl wird die jeweilige Signalform kontinuierlich ausgegeben. Der Laborversuch wurde erfolgreich bestanden.",
  messwerte: [
    ["Ausgabewerte", "8 Bit / 0–255"],
    ["Signalformen", "Sägezahn und Dreieck"],
    ["DAC-Adresse", "0xFE40"],
    ["Bedienung", "Serielles Auswahlmenü"]
  ],
  bilder: []
},
];

/* ---------------- KENNTNISSE ---------------- */
const KENNTNISSE = [
  { gruppe: "Programmieren", items: ["Embedded C", "C++", "Java", "MATLAB", "VHDL", "JavaScript"] },
  { gruppe: "Entwurf & Simulation", items: ["LTspice", "Schaltungsentwurf"] },
  { gruppe: "Plattformen", items: ["STM32", "ESP32", "FPGA"] },
  { gruppe: "Theorie", items: ["Regelungstechnik", "Signalverarbeitung", "Leistungselektronik"] },
  { gruppe: "Labor", items: ["Oszilloskop", "Netzteil & Multimeter"] },
];
