function Square(name, pricetext, color, price, groupNumber, baserent, rent1, rent2, rent3, rent4, rent5) {
	this.name = name;
	this.pricetext = pricetext;
	this.color = color;
	this.owner = 0;
	this.mortgage = false;
	this.house = 0;
	this.hotel = 0;
	this.groupNumber = groupNumber || 0;
	this.price = (price || 0);
	this.baserent = (baserent || 0);
	this.rent1 = (rent1 || 0);
	this.rent2 = (rent2 || 0);
	this.rent3 = (rent3 || 0);
	this.rent4 = (rent4 || 0);
	this.rent5 = (rent5 || 0);
	this.landcount = 0;
	
	if (groupNumber === 3 || groupNumber === 4) {
		this.houseprice = 50;
	} else if (groupNumber === 5 || groupNumber === 6) {
		this.houseprice = 100;
	} else if (groupNumber === 7 || groupNumber === 8) {
		this.houseprice = 150;
	} else if (groupNumber === 9 || groupNumber === 10) {
		this.houseprice = 200;
	} else {
		this.houseprice = 0;
	}
}

function Card(text, action) {
	this.text = text;
	this.action = action;
}

function corrections() {
	//document.getElementById("cell1name").textContent = "Mediter-ranean Avenue";
	
	// Add images to enlarges.
	document.getElementById("enlarge5token").innerHTML += '<img src="Images/train_icon.png" height="60" width="65" alt="" style="position: relative; bottom: 20px;" />'
	document.getElementById("enlarge15token").innerHTML += '<img src="Images/train_icon.png" height="60" width="65" alt="" style="position: relative; top: -20px;" />'
	document.getElementById("enlarge25token").innerHTML += '<img src="Images/train_icon.png" height="60" width="65" alt="" style="position: relative; top: -20px;" />'
	document.getElementById("enlarge35token").innerHTML += '<img src="Images/train_icon.png" height="60" width="65" alt="" style="position: relative; top: -20px;" />'
	document.getElementById("enlarge12token").innerHTML += '<img src="Images/electric_icon.png" height="60" width="48" alt="" style="position: relative; top: -20px;" />'
	document.getElementById("enlarge28token").innerHTML += '<img src="Images/water_icon.png" height="60" width="78" alt="" style="position: relative; top: -20px;" />'
}

function utiltext() {
	return '&nbsp;&nbsp;&nbsp;&nbsp;Als de eigenaar alleen deze bezit dan moet je 4 keer de ogen op de dobbelsteen betalen.<br /><br />&nbsp;&nbsp;&nbsp;&nbsp;Als de eigenaar zowel de brouwerij als de stokerij bezit moet je 10 keer de ogen van de dobbelsteen betalen.';
}

function transtext() {
	return '<div style="font-size: 14px; line-height: 1.5;">Huur<span style="float: right;">$25.</span><br />Als je 2 transportvakjes hebt<span style="float: right;">50.</span><br />Als je 3 &nbsp; &nbsp; " &nbsp; &nbsp; " &nbsp; &nbsp; "<span style="float: right;">100.</span><br />Als je 4 &nbsp; &nbsp; " &nbsp; &nbsp; " &nbsp; &nbsp; "<span style="float: right;">200.</span></div>';
}

function luxurytax() {
	addalert(player[turn].name + " heeft $100 moeten betalen voor wat hij/zij gemold heeft.");
	player[turn].pay(100, 0);
	
	show("landed");
	document.getElementById("landed").innerHTML = "Je hebt iets gemold. Betaal $100.";
}

function citytax() {
	addalert(player[turn].name + " heeft $200 contributie moeten betalen.");
	player[turn].pay(200, 0);

	show("landed");
	document.getElementById("landed").innerHTML = "Je moet contributie van $200 betalen.";
}

var square = [];

square[0] = new Square("Stufie", "Je krijgt 2 shotjes stufie", "#FFFFFF");

square[1] = new Square("Bunker: Kroeg", "$60", "#8B4513", 60, 3, 2, 10, 30, 90, 160, 250);
square[2] = new Square("Uitdaging", "Je wordt uitgedaagd!", "#FFFFFF");
square[3] = new Square("Bunker: Repre", "$60", "#8B4513", 60, 3, 4, 20, 60, 180, 320, 450);

square[4] = new Square("Contributie", "Betaal 2 shotjes", "#FFFFFF");
square[5] = new Square("Fiets", "$200", "#FFFFFF", 200, 1);

square[6] = new Square("De Weeghconst", "$100", "#87CEEB", 100, 4, 6, 30, 90, 270, 400, 550);
square[7] = new Square("Studeren", "Ja, ook jij moet nog studeren!", "#FFFFFF");
square[8] = new Square("De Villa", "$100", "#87CEEB", 100, 4, 6, 30, 90, 270, 400, 550);
square[9] = new Square("Het Walhalla", "$120", "#87CEEB", 120, 4, 8, 40, 100, 300, 450, 600);

square[10] = new Square("Binnen strompelen", "", "#FFFFFF");

square[11] = new Square("De Thomas", "$140", "#FF0080", 140, 5, 10, 50, 150, 450, 625, 750);

square[12] = new Square("Brouwerij", "$150", "#FFFFFF", 150, 2);

square[13] = new Square("De Spijker", "$140", "#FF0080", 140, 5, 10, 50, 150, 450, 625, 750);
square[14] = new Square("De Sante", "$160", "#FF0080", 160, 5, 12, 60, 180, 500, 700, 900);

square[15] = new Square("Stadsbus", "$200", "#FFFFFF", 200, 1);

square[16] = new Square("Cantus: Pegasuscantus", "$180", "#FFA500", 180, 6, 14, 70, 200, 550, 750, 950);
square[17] = new Square("Uitdaging", "Je wordt uitgedaagd!", "#FFFFFF");
square[18] = new Square("Cantus: NEDcantus", "$180", "#FFA500", 180, 6, 14, 70, 200, 550, 750, 950);
square[19] = new Square("Cantus: Stadscantus", "$200", "#FFA500", 200, 6, 16, 80, 220, 600, 800, 1000);

square[20] = new Square("Je hebt een commissie gedaan", "", "#FFFFFF");

square[21] = new Square("Steen", "$220", "#FF0000", 220, 7, 18, 90, 250, 700, 875, 1050);
square[22] = new Square("Studeren", "Ja, ook jij moet nog studeren!", "#FFFFFF");
square[23] = new Square("Je moeder", "$220", "#FF0000", 220, 7, 18, 90, 250, 700, 875, 1050);
square[24] = new Square("Pkl 8", "$240", "#FF0000", 240, 7, 20, 100, 300, 750, 925, 1100);

square[25] = new Square("Trein", "$200", "#FFFFFF", 200, 1);

square[26] = new Square("Canisius: Bierpongtafel", "$260", "#FFFF00", 260, 8, 22, 110, 330, 800, 975, 1150);
square[27] = new Square("Canisius: Gedroogde goederen", "$260", "#FFFF00", 260, 8, 22, 110, 330, 800, 975, 1150);

square[28] = new Square("Stokerij", "$150", "#FFFFFF", 150, 2);

square[29] = new Square("Canisius: Huurcontract", "$280", "#FFFF00", 280, 8, 24, 120, 360, 850, 1025, 1200);

square[30] = new Square("Soccie stuurt je naar bed", "Ga naar bed, je bent bezopen! En je stufie krijg je niet meer.", "#FFFFFF");

square[31] = new Square("Raaf: Dispuutskast", "$300", "#008000", 300, 9, 26, 130, 390, 900, 110, 1275);
square[32] = new Square("Raaf: Raafbar/studio", "$300", "#008000", 300, 9, 26, 130, 390, 900, 110, 1275);
square[33] = new Square("Uitdaging", "Je wordt uitgedaagd!", "#FFFFFF");
square[34] = new Square("Raaf: Huurcontract", "$320", "#008000", 320, 9, 28, 150, 450, 1000, 1200, 1400);

square[35] = new Square("Winkel-wagen", "$200", "#FFFFFF", 200, 1);

square[36] = new Square("Studeren", "Ja, ook jij moet nog studeren!", "#FFFFFF");
square[37] = new Square("V22: Kroeg", "$350", "#0000FF", 350, 10, 35, 175, 500, 1100, 1300, 1500);
square[38] = new Square("Je sloopt iets", "Betaal $100", "#FFFFFF");
square[39] = new Square("V22: Repre", "$400", "#0000FF", 400, 10, 50, 200, 600, 1400, 1700, 2000);

var communityChestCards = [];
var chanceCards = [];

/*
new Card("Je pist in de kamer van je huisgenoot, ga uit z'n bed!
Je mag deze kaart achterhouden of verkopen.", function() { p.communityChestJailCard = true; updateOwned();});
*/

communityChestCards[0] = new Card("Je pist in de kamer van je huisgenoot, ga uit z'n bed! Je mag deze kaart achterhouden of verkopen.", function() { p.communityChestJailCard = true; updateOwned();});
communityChestCards[1] = new Card("You have won second prize in a beauty contest. Collect $10.", function() { addamount(10, 'Uitdaging');});
communityChestCards[2] = new Card("From sale of stock, you get $50.", function() { addamount(50, 'Uitdaging');});
communityChestCards[3] = new Card("Life insurance matures. Collect $100.", function() { addamount(100, 'Uitdaging');});
communityChestCards[4] = new Card("Income tax refund. Collect $20.", function() { addamount(20, 'Uitdaging');});
communityChestCards[5] = new Card("Holiday fund matures. Receive $100.", function() { addamount(100, 'Uitdaging');});
communityChestCards[6] = new Card("You inherit $100.", function() { addamount(100, 'Uitdaging');});
communityChestCards[7] = new Card("Receive $25 consultancy fee.", function() { addamount(25, 'Uitdaging');});
communityChestCards[8] = new Card("Pay hospital fees of $100.", function() { subtractamount(100, 'Uitdaging');});
communityChestCards[9] = new Card("Bank error in your favor. Collect $200.", function() { addamount(200, 'Uitdaging');});
communityChestCards[10] = new Card("Pay school fees of $50.", function() { subtractamount(50, 'Uitdaging');});
communityChestCards[11] = new Card("Doctor's fee. Pay $50.", function() { subtractamount(50, 'Uitdaging');});
communityChestCards[12] = new Card("It is your birthday. Collect $10 from every player.", function() { collectfromeachplayer(10, 'Uitdaging');});
communityChestCards[13] = new Card("Advance to \"GO\" (Collect $200).", function() { advance(0);});
communityChestCards[14] = new Card("You are assessed for street repairs. $40 per house. $115 per hotel.", function() { streetrepairs(40, 115);});
communityChestCards[15] = new Card("Go to Jail. Go directly to Jail. Do not pass \"GO\". Do not collect $200.", function() { gotojail();});


chanceCards[0] = new Card("Je hebt een presentatie, je komt je bed uit. Je mag deze kaart achterhouden of verkopen.", function() { p.chanceJailCard=true; updateOwned();});
chanceCards[1] = new Card("Je klaagt over je nachtrust! Geef al je inwoners een vergoeding! (TODO:$25. For each hotel $100.)", function() { streetrepairs(25, 100);});
chanceCards[2] = new Card("Iets met studie ofzo.", function() { subtractamount(15, 'Studeren');});
chanceCards[3] = new Card("Je hebt je tentamen gehaald! Deel iedereen een shotje uit.", function() { payeachplayer(50, 'Studeren');});
chanceCards[4] = new Card("Ga drie stappen terug, om meer studietijd vrij te maken.", function() { gobackthreespaces();});
chanceCards[5] = new Card("Verzin een leuke activiteit voor je studie vereniging. Ga naar de brouwerij of stokerij.", function() { advanceToNearestUtility();});
chanceCards[6] = new Card("Je hebt in de ochtend goed gestudeerd. Je kunt er wel eentje extra pakken.", function() { addamount(50, 'Studeren');});
chanceCards[7] = new Card("Je was nog bij je ouders thuis en je moet naar de uni. Ga naar het dichtbijzijnde vervoersmiddel.", function() { advanceToNearestRailroad();});
chanceCards[8] = new Card("Je hebt nog een tussentoets, lever maar een shotje in.", function() { subtractamount(15, 'Studeren');});
chanceCards[9] = new Card("Je moet naar de uni, pak je fiets. Als je langs stufie komt ontvang je die.", function() { advance(5);});
chanceCards[10] = new Card("Je hebt al je vakken gehaald. Ga het vieren in de nieuwe kroeg!", function() { advance(37);});
chanceCards[11] = new Card("Tijs wil je wel helpen met studeren.", function() { advance(23);});
chanceCards[12] = new Card("Je haalt je bachelor. Ontvang een hoop drank.", function() { addamount(150, 'Studeren');});
chanceCards[13] = new Card("Zeg alles af en ga zo snel mogelijk naar de tue, je was je OGO-meeting vergeten. Ga naar het dichtbijzijnde vervoersmiddel", function() { advanceToNearestRailroad();});
chanceCards[14] = new Card("Je gaat uit eten met je projectgroepje. De spijker is een leuk eetcafe", function() { advance(11);});
chanceCards[15] = new Card("Je bent overwerkt, ga direct naar bed. Hiervoor wacht je niet op je je stufie.", function() { gotojail();});
