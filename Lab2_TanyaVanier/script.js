function Exercice1()
{
	var Reponse;
	var Reponse2;
	Reponse = confirm("Aimez-vous le chocolat?");
	if(Reponse == true){
		Reponse2 = prompt("Quelle marque est votre préférée?");
	}else{
		alert("!?!");
	}
}

function Exercice2()
{
	var Annee;
	Annee = prompt("Quelle est votre année de naissance?");
	if(Annee < 1930){
		alert("Vous faites partie de la génération : Non spécifiée !");
	}else if(Annee >= 1930 && Annee <= 1945){
		alert("Vous faites partie de la génération : Vétérans");
	}else if(Annee >= 1946 && Annee <= 1964){
		alert("Vous faites partie de la génération : Baby-boomers");
	}else if(Annee >= 1965 && Annee <= 1976){
		alert("Vous faites partie de la génération : Génération X");
	}else if(Annee >= 1977 && Annee <= 1991){
		alert("Vous faites partie de la génération : Génération Y");
	}else{
		alert("Vous faites partie de la génération : Génération Z");
	}
}

function Exercice3()
{
	var Tableau1 = ["Mes vies de chien","Megan Leavy", "Harry Potter et le prisonnier d'Azkaban"];
	var Nombre;
	Nombre = prompt("Choisissez un nombre entre 1 et 3");
	switch (Nombre)
	{
	case "1":
		alert(Tableau1[0]);
		break;
	case "2":
		alert(Tableau1[1]);
		break;
	case "3":
		alert(Tableau1[2]);
		break;
	default:
		alert("Vous n'avez pas entré un chiffre entre 1 et 3.");
	}
}

function Exercice4()
{
	//Code à corriger de l'exercice 4
	
	var nom;
	var age;
	var majeur;
	var choix;
	
	nom = prompt("Quel est votre nom?");
	majeur = confirm("Êtes-vous majeur(e)?");
	age = prompt("Quel est votre âge?");
	
	if((majeur && age > 17) || (majeur == false && age <= 17))
	{
		alert("Vous dites la vérité!");
	}
	else
	{
		alert("Vous mentez!");
		majeur = false;
	}
	
	choix = prompt("Que préférez-vous (entrez le chiffre)? \n 1 - Les RPG \n 2 - Les shooters" + 
					"\n 3 - Les RTS \n 4 - Les MOBA")
	
	switch(choix)
	{
		case "1": 
			alert(nom + " a " + age + "ans et préfère les jeux de rôles!");
			break;
		case "2":
			alert(nom + " a " + age + "ans et préfère les jeux de tirs!");
			break;
		case "3":
			alert(nom + " a " + age + "ans et préfère les jeux de stratégies!");
			break;
		case "4":
			alert(nom + " a " + age + "ans et préfère les jeux d'arènes de combat!");
			break;
		default:
			alert(nom + " a " + age + "ans et ne sait pas entrer un chiffre entre 1 et 4!");
	}
}

function Exercice5()
{
	var Nom;
	var ConfirmationNom;
	var Choix1;
	var Choix2;
	var ChoixParchemins;
	var ChoixAchat;
	var ChoixPotion;
	alert("Bonjour étranger! \n On ne voit pas souvent de nouveaux visages ici!");
	Nom = prompt("Puis-je vous demander votre nom, voyageur?");
	ConfirmationNom = confirm("Vous vous appelez donc " + Nom + "?");
	if(ConfirmationNom)
	{
		Choix1 = prompt("Alors, que venez-vous faire ici " + Nom + "? \n 1- Vendre \n 2- Acheter \n 3- Discuter");
		switch (Choix1)
		{
		case "1":
			Choix2 = prompt("Que voulez-vous vendre? \n 1- Équipement \n 2- Potions \n 3- Des parchemins");
			switch (Choix2)
			{
			case "1":
				alert("Je suis désolé! J'ai déjà trop d'équipements en stock pour vous en acheter!");
				break;
			case "2":
				alert("Les potions ne se vendent pas vraiment ici. Je ne ferais aucun profit à vous en acheter malheureusement.");
				break;
			case "3":
				ChoixParchemins = confirm("Les parchemins sont si chers de nos jours. Êtes-vous sûr de vouloir m'en vendre?");
				if(ChoixParchemins)
				{
					alert("Si c'est votre choix, je les achète avec plaisir!");
				}
				else
				{
					alert("C'est bien ce que je pensais...");
				}
				break;
			default:
				alert("Vous ne vouliez pas vendre?");
			}
			break;
		case "2":
			ChoixAchat = prompt("Que voulez-vous acheter? \n 1- Équipement \n 2- Potions \n 3- Parchemins \n 4- J'ai oublié mon or à la maison");
			if (ChoixAchat == "1")
			{
				alert("Je n'ai malheureusement que des équipements poussiéreux, mais vous êtes libre de farfouiller dans mon inventaire.");
			}
			else if(ChoixAchat == "2")
			{
				ChoixPotion = confirm("Je n'ai que de petites potions à vendre. Voulez-vous tout de même les acheter?");
				if(ChoixPotion)
				{
					alert("Je vous remercie de votre achat!");
				}
				else
				{
					alert("Quel dommage...");
				}
			}
			else if (ChoixAchat == "3")
			{
				alert("Je n'ai plus de parchemins à vendre depuis une bonne décennie, je suis désolé, voyageur.");
			}
			else
			{
				alert("Eh bien, retournez le chercher si vous voulez acheter chez moi!");
			}
			break;
		case "3":
			alert("Je n'ai pas de temps à perdre à discuter! Le temps c'est de l'argent!");
			break;
		default:
			alert("Allez parler à quelqu'un d'autre. Je n'ai pas de temps à perdre à discuter!");
		}
	}
	else
	{
		alert("Bon, si c'est comme ça...");
	}
}