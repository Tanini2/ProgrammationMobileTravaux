var clicked = -1;

function Load()
{
	var Heros1 = 
	{
		NomDeHeros : "Deadpool",
		VraiNom : "Wade Winston Wilson",
		PlaceOfBirth : "Canada",
		FirstAppeareance : "New Mutants #98",
		EyeColor : "Brown",
		Pouvoirs : "Regeneration, Telepathy Resistance, Toxin and Disease Resistance, Longevity, Accelerated Healing",
		Allies : "Wolverine, Psylocke, Fantomex, Archangel",
		Ennemies : "Evil Deadpool, Venompool"
	}
	var Heros2 = 
	{
		NomDeHeros : "Raven",
		VraiNom : "Rachel Roth",
		PlaceOfBirth : "Azarath",
		FirstAppeareance : "DC Comics Presents #26",
		EyeColor : "Indigo",
		Pouvoirs : "Magic, Psychic Powers, Shadow Manipulation, Supernatural Knowledge, Teleportation, Flight, Emotional Manipulation",
		Allies : "Robin, Starfire, Beast Boy, Cyborg",
		Ennemies : "Trigon, Brother Blood, Dark Raven"
	}
	var Heros3 = 
	{
		NomDeHeros : "Chewbacca",
		VraiNom : "Unknown",
		PlaceOfBirth : "Unknown",
		FirstAppeareance : "Star Wars",
		EyeColor : "Blue",
		Pouvoirs : "Longevity, Agility, Stealth, Super Strength, Weapons Master, Marksmanship",
		Allies : "Han Solo, Yoda, Rey, Finn",
		Ennemies : "Empire Galactique, Premier Ordre"
	}
	var Heros4 = 
	{
		NomDeHeros : "Thor",
		VraiNom : "Thor Odinson",
		PlaceOfBirth : "Asgard",
		FirstAppeareance : "Venus #12",
		EyeColor : "Blue",
		Pouvoirs : "Odinforce, Extremely Long-Lived, Immune to Conventionnal Diseases, Hihgly Resistant to injury",
		Allies : "Jane Foster, Groot, Ororo Munroe",
		Ennemies : "Loki, Abomination, Abyss"
	}
	var Heros5 = 
	{
		NomDeHeros : "Hulk",
		VraiNom : "Bruce Banner",
		PlaceOfBirth : "Dayton, Ohio",
		FirstAppeareance : "Incredible Hulk #1",
		EyeColor : "Green",
		Pouvoirs : "Accelerated Healing, Agility, Cold and Heat Resistance, Durability, Invulnerability, Jump",
		Allies : "Iron Man, Black Widow, Thor, Captain America",
		Ennemies : "World War Hulk, Absorbing Man, Sandman"
	}

	var TableauHeros = [Heros1, Heros2, Heros3, Heros4, Heros5];

	//Ajoute les fonctions onclick sur tout les boutons
	/**
	Ne marche pas en boucle
	**/
	//document.getElementsByClassName("bouton")[0].setAttribute("onclick","AfficherInfos(1,TableauHeros)")
	document.getElementsByClassName("bouton")[0].addEventListener("click",function(){AfficherInfos(1,TableauHeros)});
	document.getElementsByClassName("bouton")[1].addEventListener("click",function(){AfficherInfos(2,TableauHeros)});
	document.getElementsByClassName("bouton")[2].addEventListener("click",function(){AfficherInfos(3,TableauHeros)});
	document.getElementsByClassName("bouton")[3].addEventListener("click",function(){AfficherInfos(4,TableauHeros)});
	document.getElementsByClassName("bouton")[4].addEventListener("click",function(){AfficherInfos(5,TableauHeros)});
	
	document.getElementsByClassName("bouton")[0].addEventListener("mouseover",function(){MouseOver(0)});
	document.getElementsByClassName("bouton")[1].addEventListener("mouseover",function(){MouseOver(1)});
	document.getElementsByClassName("bouton")[2].addEventListener("mouseover",function(){MouseOver(2)});
	document.getElementsByClassName("bouton")[3].addEventListener("mouseover",function(){MouseOver(3)});
	document.getElementsByClassName("bouton")[4].addEventListener("mouseover",function(){MouseOver(4)});
	
	document.getElementsByClassName("bouton")[0].addEventListener("mouseout",function(){MouseOut(0)});
	document.getElementsByClassName("bouton")[1].addEventListener("mouseout",function(){MouseOut(1)});
	document.getElementsByClassName("bouton")[2].addEventListener("mouseout",function(){MouseOut(2)});
	document.getElementsByClassName("bouton")[3].addEventListener("mouseout",function(){MouseOut(3)});
	document.getElementsByClassName("bouton")[4].addEventListener("mouseout",function(){MouseOut(4)});
	
	document.getElementsByClassName("Contenu")[0].addEventListener("keydown",function(){Copyright()});
}
 function Copyright() {
        if (event.ctrlKey === true && event.key==="c") {
            alert("N'oubliez pas de citer vos sources!");
        }
    }

function AfficherInfos(NumHeros,TableauHeros)
{
	var TempClick;
	TempClick = clicked;
	clicked = NumHeros - 1;
	if (TempClick != -1)
	{
		MouseOut(TempClick);
	}
	
	/************************************************************
	 * Fonction qui récupère le # de héro                       *
	 * Et affiche les informations du héro						*
	 *															*
	 * -NumHero : Numéro de 1 à 5 correspondant au héro choisi,	*
	 *            dépend du bouton cliqué						*
	 ************************************************************/

	//Va chercher dans TableauHeros l'objet associé au héros
	var Heros = TableauHeros[NumHeros - 1];
	//Pour chaque propriete de l'objet 'Heros'
	for (Propriete in Heros)
	{
		//Prends la valeur de la propriete
		var textnode = document.createTextNode(Heros[Propriete]);
		//Va chercher la balise HTML correspondante pour placer la valeur
		//(EX.: ID = "NomDeHeros")
		var item = document.getElementById(Propriete);
		
		//Met la valeur dans la balise
		item.replaceChild(textnode,item.childNodes[1]);
	}
	
	/**
	++++++++++++++++++++++++++++++++++++++++++++++++++
	Le code ci-dessous crée une balise "img" à partir
	du javascript et l'insère dans la page
	++++++++++++++++++++++++++++++++++++++++++++++++++
	**/
	
	//Crée la balise image("img")
	var BaliseImg = document.createElement("img");
	
	//Indique les proprietés voulues pour la balise :
	//Source
	BaliseImg.src = "./img/" + NumHeros + ".png";
	//Texte de remplacement
	BaliseImg.alt = "Erreur:Image Introuvable!";
	//Largeur
	BaliseImg.setAttribute("width", "375px");
	//Hauteur
	BaliseImg.setAttribute("height", "375px");
	
	//Va chercher l'élément HTML
	//dans lequel nous voulons ajouter la balise (ID = "Image") 
	var SectionImage = document.getElementById("Image");
	
	/**
	++++++++++++++++++++++++++++++++++++++++++++
	Il faut s'assurer qu'il n'y a pas déjà 
	une image dans la section.
	Si il y en a une,il faut la supprimer
	car nous allons en ajouter une nouvelle
	++++++++++++++++++++++++++++++++++++++++++++
	**/
	
	//Va chercher la première balise de la section 'Image'
	var element = SectionImage.childNodes[1];
	
	//Si la section contient déjà une balise de type 'img'
	//il faut alors la supprimer pour mettre la nouvelle balise
	if(element == "[object HTMLImageElement]")
	{
		element.parentNode.removeChild(element);
	}
	
	//Insérer la balise  'img' dans la section (SectionImage)
	SectionImage.appendChild(BaliseImg);
}

function MouseOver(index) 
{
    document.getElementsByClassName("bouton")[index].style.color = "red";
	document.getElementsByClassName("bouton")[index].style.borderColor = "white";
	document.getElementsByClassName("bouton")[index].style.fontSize = "40px";
	document.getElementsByClassName("bouton")[index].style.fontWeight = "bold";
}

function MouseOut(index) 
{
		if (clicked != index)
		{
			document.getElementsByClassName("bouton")[index].style.color = "White";
			document.getElementsByClassName("bouton")[index].style.borderColor = "black";
			document.getElementsByClassName("bouton")[index].style.fontSize = "xx-large";
			document.getElementsByClassName("bouton")[index].style.fontWeight = "normal";
		}
}