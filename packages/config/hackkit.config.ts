const defaultTheme = "dark";

const schools = [
	"The University of Texas at San Antonio",
	"American Heritage School",
	"American River College, California",
	"American University, Washington, D.C.",
	"Amherst College",
	"Anna University",
	"Arizona State University",
	"Aston University",
	"Atlanta Metropolitan State College",
	"Auburn University",
	"Austin College",
	"Austin Community College District",
	"Babson College",
	"Baruch College, CUNY",
	"Baylor University",
	"Bellevue College, Washington",
	"Benedictine College",
	"Binghamton University",
	"Birmingham City University",
	"Blinn College",
	"Bloomsburg University of Pennsylvania",
	"Boston College",
	"Boston University",
	"Bowie State University",
	"Brandeis University",
	"Brigham Young University",
	"Brock University",
	"Brooklyn College, CUNY",
	"Brown University",
	"Bucknell University",
	"COMSATS Institute of Information Technology",
	"Caldwell University",
	"California Institute of Technology",
	"California Polytechnic State University, San Luis Obispo",
	"California State Polytechnic University, Pomona",
	"California State University, Fresno",
	"California State University, Fullerton",
	"California State University, Long Beach",
	"California State University, Los Angeles",
	"California State University, Northridge",
	"California State University, Sacramento",
	"California State University, San Bernardino",
	"California State University, Bakersfield",
	"California State University, San Francisco",
	"California State University, Channel Islands",
	"California State University, Maritime",
	"California State University, San Jose",
	"California State University, Chico",
	"California State University, Monterey Bay",
	"California State University, San Luis Obispo",
	"California State University, Dominguez Hills",
	"California State University, San Marcos",
	"California State University, East Bay",
	"California State University, Sonoma",
	"California State University, Stanislaus",
	"California State University, Humboldt",
	"California State University, San Diego",
	"Carleton University",
	"Carnegie Mellon University",
	"Carthage College",
	"Cedarville University",
	"Central Texas College",
	"Clark University",
	"Clarkson University",
	"Clemson University",
	"Cleveland State University",
	"Collin College",
	"Colorado School of Mines",
	"Columbia University",
	"Columbus College of Art and Design",
	"Concordia University",
	"Connecticut College",
	"Cornell College",
	"Cornell University",
	"Dallas College",
	"Dartmouth College",
	"Dawson College",
	"DePaul University",
	"DePauw University",
	"DeSales University",
	"Denison University",
	"Drake University",
	"Drew University",
	"Drexel University",
	"Duke University",
	"Durham College",
	"Durham University",
	"East Central University",
	"Emory University",
	"Fairfield University",
	"Florida Atlantic University",
	"Florida Gulf Coast University",
	"Florida Institute Of Technology",
	"Florida International University",
	"Florida Polytechnic University",
	"Florida State University",
	"Fordham University",
	"Full Sail University",
	"Fullerton College",
	"George Heriot's School",
	"George Mason University",
	"Georgetown University",
	"Georgia Institute of Technology",
	"Georgia State University",
	"Grand Valley State University",
	"Hampshire College",
	"Hampton University",
	"Harper College",
	"Harvard Medical School",
	"Harvard University",
	"Howard University",
	"Illinois Institute of Technology",
	"Illinois State University",
	"Indiana University",
	"Indiana University of Pennsylvania",
	"Indiana University-Purdue University Fort Wayne",
	"Indiana University-Purdue University Indianapolis",
	"Iowa State University",
	"Ithaca College",
	"James Madison University",
	"Johns Hopkins University",
	"Kansas State University",
	"Kean University",
	"Keele University",
	"Kennesaw State University",
	"Kent State University",
	"Lafayette College",
	"Lamar University",
	"Lawrence University",
	"Lehigh University",
	"Leiden University",
	"Lewis & Clark College",
	"Lewis University",
	"Loughborough University",
	"Louisiana State University",
	"Macalester College",
	"Madison College",
	"Manhattan College",
	"Marquette University",
	"Marymount University",
	"Massachusetts Institute of Technology",
	"Miami University",
	"Michigan State University",
	"Michigan Technological University",
	"Middle Tennessee State University",
	"Middlebury College",
	"Middlesex University",
	"Milwaukee School of Engineering",
	"Mississippi State University",
	"Mississippi University for Women",
	"Missouri State University",
	"Montana State University",
	"Montclair State University",
	"Montgomery College",
	"Morgan State University",
	"New Jersey City University",
	"New Jersey Institute of Technology",
	"New York City College of Technology, CUNY",
	"New York Institute of Technology",
	"New York University",
	"Newcastle University",
	"North American University",
	"North Carolina School of Science and Mathematics",
	"North Carolina State University",
	"Northeastern University",
	"Northern Arizona University",
	"Northern Illinois University",
	"Northern Kentucky University",
	"Northern Michigan University",
	"Northwest Missouri State University",
	"Northwest Vista College",
	"Northwestern Oklahoma State University",
	"Northwestern University",
	"Nottingham Trent University",
	"Oakland University",
	"Oklahoma State University",
	"Oregon State University",
	"Parsons School of Design",
	"Pittsburgh Technical Institute",
	"Portland State University",
	"Princeton University",
	"Purdue University",
	"Queen's University",
	"Rhode Island College",
	"Rhode Island School of Design",
	"Rhodes College",
	"Rice University",
	"Richard Stockton University",
	"Richland College",
	"Rider University",
	"Rochester Institute of Technology",
	"Rutgers, The State University of New Jersey",
	"SUNY Polytechnic Institute",
	"San Diego State University",
	"San Francisco State University",
	"San Jose State University",
	"Santa Clara University",
	"Seneca College",
	"Simon Fraser University",
	"Smith College",
	"South Carolina State University",
	"South Dakota School of Mines and Technology",
	"Southeastern Louisiana University",
	"Southern Connecticut State University",
	"Southern Illinois University Carbondale",
	"Southern Illinois University Edwardsville",
	"Southern Methodist University",
	"St Edwards University",
	"St Paul's Catholic College - Sunbury-on-Thames",
	"St. Cloud State University",
	"St. John's University, New York",
	"St.Mary's Convent School",
	"St. Mary's University",
	"Stanford University",
	"Stephen F. Austin State University",
	"Stetson University",
	"Stevens Institute of Technology",
	"Stevenson University",
	"Stockton University",
	"Stonehill College",
	"Stony Brook University, SUNY",
	"Swarthmore College",
	"Syracuse University",
	"Temple University",
	"Texas A&M University",
	"Texas A&M University - Central Texas",
	"Texas A&M University - Corpus Christi",
	"Texas A&M University - Kingsville",
	"Texas A&M University - San Antonio",
	"Texas Christian University",
	"Texas Southern University",
	"Texas Southmost College",
	"Texas State University",
	"Texas Tech University",
	"The City College of New York, CUNY",
	"The George Washington University",
	"The Ohio State University",
	"The Pennsylvania State University",
	"The Pennsylvania State University - Abington Campus",
	"The Pennsylvania State University - Harrisburg",
	"The Pennsylvania State University - York Campus",
	"The Pennsylvania State University - Berks",
	"The University of Alabama",
	"The University of Arizona",
	"The University of Arkansas",
	"The University of Birmingham",
	"The University of Calgary",
	"The University of California, Berkeley",
	"The University of California, Davis",
	"The University of California, Irvine",
	"The University of California, Los Angeles",
	"The University of California, Riverside",
	"The University of California, San Diego",
	"The University of California, Santa Barbara",
	"The University of California, Merced",
	"The University of California, Santa Cruz",
	"The University of Cambridge",
	"The University of Central Florida",
	"The University of Cincinnati",
	"The University of Colorado Boulder",
	"The University of Colorado Colorado Springs",
	"The University of Connecticut",
	"The University of Dallas",
	"The University of Delaware",
	"The University of Denver",
	"The University of Derby",
	"The University of Dundee",
	"The University of Edinburgh",
	"The University of Essex",
	"The University of Evansville",
	"The University of Exeter",
	"The University of Falmouth",
	"The University of Florida",
	"The University of Georgia",
	"The University of Houston",
	"The University of Houston - Clear Lake",
	"The University of Houston - Downtown",
	"The University of Huddersfield",
	"The University of Idaho",
	"The University of Illinois at Chicago",
	"The University of Illinois at Urbana-Champaign",
	"The University of Iowa",
	"The University of Kansas",
	"The University of Kent",
	"The University of Kentucky",
	"The University of Leeds",
	"The University of Lincoln",
	"The University of Liverpool",
	"The University of Ljubljana",
	"The University of Louisiana at Lafayette",
	"The University of Louisiana at Monroe",
	"The University of Louisville",
	"The University of Manchester",
	"The University of Manitoba",
	"The University of Maryland, Baltimore County",
	"The University of Maryland, College Park",
	"The University of Massachusetts Amherst",
	"The University of Massachusetts Boston",
	"The University of Massachusetts Dartmouth",
	"The University of Massachusetts Lowell",
	"The University of Miami",
	"The University of Michigan",
	"The University of Minnesota",
	"The University of Missouri",
	"The University of Missouri-Kansas City",
	"The University of Málaga",
	"The University of Nebraska-Lincoln",
	"The University of New Brunswick",
	"The University of New Hampshire",
	"The University of New Haven",
	"The University of North Carolina at Chapel Hill",
	"The University of North Carolina at Charlotte",
	"The University of North Carolina at Greensboro",
	"The University of North Texas",
	"The University of Northampton",
	"The University of Notre Dame",
	"The University of Nottingham",
	"The University of Oklahoma",
	"The University of Oregon",
	"The University of Oxford",
	"The University of Pennsylvania",
	"The University of Phoenix",
	"The University of Pittsburgh",
	"The University of Portland",
	"The University of Portsmouth",
	"The University of Richmond",
	"The University of Rochester",
	"The University of San Francisco",
	"The University of South Carolina",
	"The University of South Florida",
	"The University of Southern California",
	"The University of Southern Denmark",
	"The University of Tampa",
	"The University of Tennessee",
	"The University of Texas Rio Grande Valley",
	"The University of Texas at Arlington",
	"The University of Texas at Austin",
	"The University of Texas at Dallas",
	"The University of Texas at El Paso",
	"The University of Texas of the Permian Basin",
	"The University of Texas - Pan American",
	"The University of Tulsa",
	"The University of Utah",
	"The University of Vermont",
	"The University of Victoria",
	"The University of Virginia",
	"The University of Warsaw",
	"The University of Washington",
	"The University of Waterloo",
	"The University of West Georgia",
	"The University of Western Ontario",
	"The University of Westminster",
	"The University of Windsor",
	"The University of Wisconsin-Green Bay",
	"The University of Wisconsin-La Crosse",
	"The University of Wisconsin-Madison",
	"The University of Wisconsin-Milwaukee",
	"The University of Wisconsin-Oshkosh",
	"The University of Wisconsin-Parkside",
	"The University of Wisconsin-Platteville",
	"The University of Wisconsin-River Falls",
	"The University of Wisconsin-Stevens Point",
	"The University of Wisconsin-Stout",
	"The University of Wisconsin-Superior",
	"The University of Wisconsin-Whitewater",
	"The University of Wolverhampton",
	"The University of York",
	"The University of Zagreb",
	"The University of the Pacific",
	"The Université de Sherbrooke",
	"Thomas Edison State College",
	"Trent University",
	"Trinity College",
	"Trinity University - San Antonio",
	"Trinity Valley School",
	"Troy University",
	"Tufts University",
	"Tulane University",
	"University at Albany, SUNY",
	"University at Binghamton, SUNY",
	"University at Buffalo, SUNY",
	"University at New Paltz, SUNY",
	"University at Orange, SUNY",
	"University at Oswego, SUNY",
	"University at Plattsburgh, SUNY",
	"University of Cincinnati Clermont College",
	"Utah State University",
	"Utica College",
	"Vanderbilt University",
	"Villanova University",
	"Virginia Tech",
	"Wake Forest University",
	"Washington State University",
	"Washington University in St. Louis",
	"Wayne State University",
	"Wellesley College",
	"Wentworth Institute of Technology",
	"Wesleyan University",
	"West Chester University",
	"Western Governors University",
	"Western Kentucky University",
	"Western Michigan University",
	"Western New England University",
	"Western University",
	"Western Washington University",
	"Wichita State University",
	"Xavier University",
	"Yale University",
	"York University",
	"The University of Chicago",
	"York College, CUNY",
	"Other",
] as const;

const majors = [
	"Computer Science",
	"Accounting",
	"Accounting Technician",
	"Actuarial Science",
	"Aerospace/Aeronautical Engineering",
	"Agricultural Business & Management",
	"Agricultural Economics",
	"Agricultural Mechanization",
	"Agricultural Production",
	"Agricultural/Bioengineering",
	"American/English Literature",
	"Applied Mathematics",
	"Architectural Engineering",
	"Art History, Criticism & Conservation",
	"Art, General",
	"Astronomy",
	"Atmospheric Sciences & Meteorology",
	"Banking & Financial Support Services",
	"Biochemistry & Biophysics",
	"Biology, General",
	"Biomedical Engineering",
	"Business Administration & Management, General",
	"Business/Management Quantitative Methods, General",
	"Business/Managerial Economics",
	"Cell/Cellular Biology",
	"Chemical Engineering",
	"Chemistry",
	"Cinematography/Film/Vide Production",
	"Civil Engineering",
	"Classical/Ancient Languages & Literatures",
	"Comparative Literature",
	"Computer & Information Sciences, General",
	"Computer Engineering",
	"Computer Networking/Telecommunications",
	"Computer Software & Media Applications",
	"Computer System Administration",
	"Construction Engineering/Management",
	"Creative Writing",
	"Criminology",
	"Cyber Security",
	"Data Management Technology",
	"Dental Assisting",
	"Design & Visual Communications, General",
	"Ecology",
	"Economics",
	"Electrical Engineering",
	"Engineering (Pre-Engineering), General",
	"English Language & Literature, General",
	"Finance, General",
	"Financial Planning & Services",
	"Fine/Studio Arts",
	"Food Sciences & Technology",
	"Foreign Languages/Literatures, General",
	"French Language & Literature",
	"Genetics",
	"Geological & Earth Sciences",
	"Graphic Design",
	"Health Services Administration,General",
	"Human Resources Development/Training",
	"Human Resources Management",
	"Industrial Design",
	"Industrial Engineering",
	"Information Science",
	"Information Technology And Systems",
	"Insurance & Risk Management",
	"International Business Management",
	"International Relations & Affairs",
	"Investments & Securities",
	"Labor/Industrial Relations",
	"Law (Pre-Law)",
	"Legal Administrative Assisting/Secretarial",
	"Legal Studies, General",
	"Linguistics",
	"Logistics & Materials Management",
	"Management Information Systems",
	"Marine/Aquatic Biology",
	"Marketing Management & Research",
	"Mathematics, General",
	"Mechanical Engineering",
	"Medical Assisting",
	"Medical Office/Secretarial",
	"Medical Records",
	"Medical/Clinical Assisting, General",
	"Microbiology & Immunology",
	"Music, General",
	"Music, Theory & Composition",
	"Natural Resources Conservation, General",
	"Natural Resources Management",
	"Neuroscience",
	"Nuclear Engineering",
	"Occupational Therapy Assisting",
	"Philosophy",
	"Photography",
	"Physical Sciences, General",
	"Physical Therapy Assisting",
	"Physics",
	"Political Science & Government",
	"Psychology, Clinical & Counseling",
	"Psychology, General",
	"Public Speaking",
	"Sales, Merchandising, & Marketing, General",
	"Secretarial Studies & Office Administration",
	"Small Business Management/Operations",
	"Social Sciences, General",
	"Sociology",
	"Software Engineering",
	"Statistics",
	"Supply Chain Management",
	"Urban Studies/Urban Affairs",
	"Webpage Design",
	"Other",
] as const;

const levelsOfStudy = [
	"Less than Secondary / High School",
	"Secondary / High School",
	"Undergraduate University (2 year - community college or similar)",
	"Undergraduate University (3+ year)",
	"Graduate University (Masters, Professional, Doctoral, etc)",
	"Code School / Bootcamp",
	"Other Vocational / Trade Program or Apprenticeship",
	"Post Doctorate",
	"Other",
	"I’m not currently a student",
	"Prefer not to answer",
];

const dietaryRestrictionOptions = [
	"Vegan",
	"Vegetarian",
	"Nuts",
	"Fish",
	"Wheat",
	"Dairy",
	"Eggs",
	"Halal",
	"Kosher",
	"Gluten-Free",
	"Soy",
];

const countries = [
	{ name: "United States", code: "US" },
	{ name: "Afghanistan", code: "AF" },
	{ name: "Albania", code: "AL" },
	{ name: "Algeria", code: "DZ" },
	{ name: "Andorra", code: "AD" },
	{ name: "Angola", code: "AO" },
	{ name: "Argentina", code: "AR" },
	{ name: "Armenia", code: "AM" },
	{ name: "Australia", code: "AU" },
	{ name: "Austria", code: "AT" },
	{ name: "Azerbaijan", code: "AZ" },
	{ name: "Bahamas", code: "BS" },
	{ name: "Bahrain", code: "BH" },
	{ name: "Bangladesh", code: "BD" },
	{ name: "Barbados", code: "BB" },
	{ name: "Belarus", code: "BY" },
	{ name: "Belgium", code: "BE" },
	{ name: "Belize", code: "BZ" },
	{ name: "Benin", code: "BJ" },
	{ name: "Bhutan", code: "BT" },
	{ name: "Bolivia", code: "BO" },
	{ name: "Bosnia and Herzegovina", code: "BA" },
	{ name: "Botswana", code: "BW" },
	{ name: "Brazil", code: "BR" },
	{ name: "Brunei", code: "BN" },
	{ name: "Bulgaria", code: "BG" },
	{ name: "Burkina Faso", code: "BF" },
	{ name: "Burundi", code: "BI" },
	{ name: "Cabo Verde", code: "CV" },
	{ name: "Cambodia", code: "KH" },
	{ name: "Cameroon", code: "CM" },
	{ name: "Canada", code: "CA" },
	{ name: "Central African Republic", code: "CF" },
	{ name: "Chad", code: "TD" },
	{ name: "Chile", code: "CL" },
	{ name: "China", code: "CN" },
	{ name: "Colombia", code: "CO" },
	{ name: "Comoros", code: "KM" },
	{ name: "Congo (Congo-Brazzaville)", code: "CG" },
	{ name: "Congo (Democratic Republic of)", code: "CD" },
	{ name: "Costa Rica", code: "CR" },
	{ name: "Croatia", code: "HR" },
	{ name: "Cuba", code: "CU" },
	{ name: "Cyprus", code: "CY" },
	{ name: "Czech Republic", code: "CZ" },
	{ name: "Denmark", code: "DK" },
	{ name: "Djibouti", code: "DJ" },
	{ name: "Dominica", code: "DM" },
	{ name: "Dominican Republic", code: "DO" },
	{ name: "Ecuador", code: "EC" },
	{ name: "Egypt", code: "EG" },
	{ name: "El Salvador", code: "SV" },
	{ name: "Equatorial Guinea", code: "GQ" },
	{ name: "Eritrea", code: "ER" },
	{ name: "Estonia", code: "EE" },
	{ name: "Eswatini", code: "SZ" },
	{ name: "Ethiopia", code: "ET" },
	{ name: "Fiji", code: "FJ" },
	{ name: "Finland", code: "FI" },
	{ name: "France", code: "FR" },
	{ name: "Gabon", code: "GA" },
	{ name: "Gambia", code: "GM" },
	{ name: "Georgia", code: "GE" },
	{ name: "Germany", code: "DE" },
	{ name: "Ghana", code: "GH" },
	{ name: "Greece", code: "GR" },
	{ name: "Grenada", code: "GD" },
	{ name: "Guatemala", code: "GT" },
	{ name: "Guinea", code: "GN" },
	{ name: "Guinea-Bissau", code: "GW" },
	{ name: "Guyana", code: "GY" },
	{ name: "Haiti", code: "HT" },
	{ name: "Honduras", code: "HN" },
	{ name: "Hungary", code: "HU" },
	{ name: "Iceland", code: "IS" },
	{ name: "India", code: "IN" },
	{ name: "Indonesia", code: "ID" },
	{ name: "Iran", code: "IR" },
	{ name: "Iraq", code: "IQ" },
	{ name: "Ireland", code: "IE" },
	{ name: "Israel", code: "IL" },
	{ name: "Italy", code: "IT" },
	{ name: "Jamaica", code: "JM" },
	{ name: "Japan", code: "JP" },
	{ name: "Jordan", code: "JO" },
	{ name: "Kazakhstan", code: "KZ" },
	{ name: "Kenya", code: "KE" },
	{ name: "Kiribati", code: "KI" },
	{ name: "Kuwait", code: "KW" },
	{ name: "Kyrgyzstan", code: "KG" },
	{ name: "Laos", code: "LA" },
	{ name: "Latvia", code: "LV" },
	{ name: "Lebanon", code: "LB" },
	{ name: "Lesotho", code: "LS" },
	{ name: "Liberia", code: "LR" },
	{ name: "Libya", code: "LY" },
	{ name: "Liechtenstein", code: "LI" },
	{ name: "Lithuania", code: "LT" },
	{ name: "Luxembourg", code: "LU" },
	{ name: "Madagascar", code: "MG" },
	{ name: "Malawi", code: "MW" },
	{ name: "Malaysia", code: "MY" },
	{ name: "Maldives", code: "MV" },
	{ name: "Mali", code: "ML" },
	{ name: "Malta", code: "MT" },
	{ name: "Marshall Islands", code: "MH" },
	{ name: "Mauritania", code: "MR" },
	{ name: "Mauritius", code: "MU" },
	{ name: "Mexico", code: "MX" },
	{ name: "Micronesia", code: "FM" },
	{ name: "Moldova", code: "MD" },
	{ name: "Monaco", code: "MC" },
	{ name: "Mongolia", code: "MN" },
	{ name: "Montenegro", code: "ME" },
	{ name: "Morocco", code: "MA" },
	{ name: "Mozambique", code: "MZ" },
	{ name: "Myanmar (Burma)", code: "MM" },
	{ name: "Namibia", code: "NA" },
	{ name: "Nauru", code: "NR" },
	{ name: "Nepal", code: "NP" },
	{ name: "Netherlands", code: "NL" },
	{ name: "New Zealand", code: "NZ" },
	{ name: "Nicaragua", code: "NI" },
	{ name: "Niger", code: "NE" },
	{ name: "Nigeria", code: "NG" },
	{ name: "North Korea", code: "KP" },
	{ name: "North Macedonia", code: "MK" },
	{ name: "Norway", code: "NO" },
	{ name: "Oman", code: "OM" },
	{ name: "Pakistan", code: "PK" },
	{ name: "Palau", code: "PW" },
	{ name: "Panama", code: "PA" },
	{ name: "Papua New Guinea", code: "PG" },
	{ name: "Paraguay", code: "PY" },
	{ name: "Peru", code: "PE" },
	{ name: "Philippines", code: "PH" },
	{ name: "Poland", code: "PL" },
	{ name: "Portugal", code: "PT" },
	{ name: "Qatar", code: "QA" },
	{ name: "Romania", code: "RO" },
	{ name: "Russia", code: "RU" },
	{ name: "Rwanda", code: "RW" },
	{ name: "Saint Kitts and Nevis", code: "KN" },
	{ name: "Saint Lucia", code: "LC" },
	{ name: "Saint Vincent and the Grenadines", code: "VC" },
	{ name: "Samoa", code: "WS" },
	{ name: "San Marino", code: "SM" },
	{ name: "Sao Tome and Principe", code: "ST" },
	{ name: "Saudi Arabia", code: "SA" },
	{ name: "Senegal", code: "SN" },
	{ name: "Serbia", code: "RS" },
	{ name: "Seychelles", code: "SC" },
	{ name: "Sierra Leone", code: "SL" },
	{ name: "Singapore", code: "SG" },
	{ name: "Slovakia", code: "SK" },
	{ name: "Slovenia", code: "SI" },
	{ name: "Solomon Islands", code: "SB" },
	{ name: "Somalia", code: "SO" },
	{ name: "South Africa", code: "ZA" },
	{ name: "South Korea", code: "KR" },
	{ name: "South Sudan", code: "SS" },
	{ name: "Spain", code: "ES" },
	{ name: "Sri Lanka", code: "LK" },
	{ name: "Sudan", code: "SD" },
	{ name: "Suriname", code: "SR" },
	{ name: "Sweden", code: "SE" },
	{ name: "Switzerland", code: "CH" },
	{ name: "Syria", code: "SY" },
	{ name: "Taiwan", code: "TW" },
	{ name: "Tajikistan", code: "TJ" },
	{ name: "Tanzania", code: "TZ" },
	{ name: "Thailand", code: "TH" },
	{ name: "Togo", code: "TG" },
	{ name: "Tonga", code: "TO" },
	{ name: "Trinidad and Tobago", code: "TT" },
	{ name: "Tunisia", code: "TN" },
	{ name: "Turkey", code: "TR" },
	{ name: "Turkmenistan", code: "TM" },
	{ name: "Tuvalu", code: "TV" },
	{ name: "Uganda", code: "UG" },
	{ name: "Ukraine", code: "UA" },
	{ name: "United Arab Emirates", code: "AE" },
	{ name: "United Kingdom", code: "GB" },
	{ name: "Uruguay", code: "UY" },
	{ name: "Uzbekistan", code: "UZ" },
	{ name: "Vanuatu", code: "VU" },
	{ name: "Vatican City", code: "VA" },
	{ name: "Venezuela", code: "VE" },
	{ name: "Vietnam", code: "VN" },
	{ name: "Yemen", code: "YE" },
	{ name: "Zambia", code: "ZM" },
	{ name: "Zimbabwe", code: "ZW" },
];

const raceOptions = [
	"Asian Indian",
	"Black or African",
	"Chinese",
	"Filipino",
	"Guamanian or Chamorro",
	"Hispanic / Latino / Spanish Origin",
	"Japanese",
	"Korean",
	"Middle Eastern",
	"Native American or Alaskan Native",
	"Native Hawaiian",
	"Samoan",
	"Vietnamese",
	"White",
	"Other Asian (Thai, Cambodian, etc)",
	"Other Pacific Islander",
	"Other",
	"Prefer Not to Answer",
];

const c = {
	hackathonName: "HackKit",
	itteration: "I",
	siteUrl: "https://rowdyhacks.org", // Do not have a trailing slash
	defaultMetaDataDescription: "Your Metadata Description Here",
	rsvpDefaultLimit: 500,
	botName: "HackKit",
	botParticipantRole: "Participant",
	hackathonTimezone: "America/Chicago",
	localUniversityName: schools[0],
	localUniversitySchoolIDName: "ABC123",
	localUniversityShortIDMaxLength: 6,
	registration: {
		schools,
		majors,
		levelsOfStudy,
		dietaryRestrictionOptions,
		countries,
		raceOptions,
	},
	groups: {
		"Guild A | Group A": {
			discordRole: "Guild A Role",
		},
		"Guild A | Group B": {
			discordRole: "Guild A Role",
		},
		"Guild B | Group A": {
			discordRole: "Guild B Role",
		},
		"Guild B | Group B": {
			discordRole: "Guild B Role",
		},
		"Guild C | Group A": {
			discordRole: "Guild C Role",
		},
		"Guild C | Group B": {
			discordRole: "Guild C Role",
		},
		"Guild D | Group A": {
			discordRole: "Guild D Role",
		},
		"Guild D | Group B": {
			discordRole: "Guild D Role",
		},
		"Guild E | Group A": {
			discordRole: "Guild E Role",
		},
		"Guild E | Group B": {
			discordRole: "Guild E Role",
		},
	},
	issueEmail: "team@rowdyhacks.org",
	links: {
		discord: "https://go.rowdyhacks.org/discord",
		instagram: "https://instagram.com/rowdyhacks",
		facebook: "https://facebook.com/rowdyhacks",
		twitter: "https://twitter.com/rowdyhacks",
		github: "https://github.com/acmutsa",
		guide: "https://go.rowdyhacks.org/discord",
	},
	icon: {
		sm: "/img/logo/hackkit.svg",
		md: "/img/logo/hackkit-md.png",
		lg: "/img/logo/hackkit-lg.png",
		svg: "/img/logo/hackkit.svg",
	},
	dashPaths: {
		dash: {
			Overview: "/dash",
			Schedule: "/dash/schedule",
			"Event Pass": "/dash/pass",
			// Team: "/dash/team",
			// Tickets: "/dash/tickets",
		},
		admin: {
			Overview: "/admin",
			Users: "/admin/users",
			Events: "/admin/events",
			Points: "/admin/points",
			"Hackathon Check-in": "/admin/check-in",
			Toggles: "/admin/toggles",
		},
		// TODO: Can remove days? Pretty sure they're dynamic now.
	},
	eventTypes: {
		Meal: "#FFC107",
		Workshop: "#10b981",
		Ceremony: "#9C27B0",
		Social: "#2196F3",
		Other: "#795548",
	},
	days: {
		Saturday: new Date(2023, 6, 15),
	},
	Sunday: new Date(2023, 6, 16),
	maxResumeSizeInBytes: 4194304,
	maxProfilePhotoSizeInBytes: 3145728,
	maxFileSizeInBytes: 4194304,
	eventPassBgImage: "/img/dash/pass/bg.webp",
	noResumeProvidedURL:
		"https://static.acmutsa.org/No%20Resume%20Provided.pdf",
	// Come in and change this date to whenever the hackathon starts
	startDate: new Date(new Date(2024, 1, 24).setHours(9)),
	prettyLocation: "Location of Hackathon",
	roleBadges: {
		hacker: {
			title: "Hacker",
			color: "hsl(var(--hackathon-primary))",
			foreground: "#ffffff",
			checked: false,
		},
		volunteer: {
			title: "Volunteer",
			foreground: "#ffffff",
			checked: false,
			color: "#4CAF50",
		},
		mentor: {
			title: "Mentor",
			color: "#9C27B0",
			foreground: "#ffffff",
			checked: false,
		},
		// Why is the checked set to a color?
		mlh: {
			title: "MLH",
			color: "#ffffff",
			foreground: "#E73426",
			checked: "#E73426",
		},
		admin: {
			title: "Organizer",
			color: "#f59e0b",
			foreground: "#ffffff",
			checked: true,
		},
		super_admin: {
			title: "Organizer",
			foreground: "#ffffff",
			color: "#f59e0b",
			checked: true,
		},
	},
	maxTeamSize: 4,
	featureFlags: {
		core: {
			requireUsersApproval: false,
		},
	},
} as const;

const bucketResumeBaseUploadUrl = `${c.hackathonName}/${c.itteration}/resume`;

// Its important that this is kept in sync with the database schema.

const perms = [
	"hacker",
	"volunteer",
	"mentor",
	"mlh",
	"admin",
	"super_admin",
] as const;

// These are routes (pages) which do not require a account / authentication. They are used in the authMiddleware in middleware.ts. Be careful which routes you add here!

const publicRoutes = [
	"/",
	/^\/schedule(\/.*)?$/,
	/^\/@/,
	/^\/user\//,
	"/404",
	"/bugreport",
];

// Generally it is reccomended to put your primary audience's university at the top of this list.

export default c;
export { defaultTheme, bucketResumeBaseUploadUrl, perms, publicRoutes };
