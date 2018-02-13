var tabExercice1 = [""];
function Exercice1()
{
	var Reponse;
	var indice;
	viderContenu();
	Reponse = prompt("Entrez un mot avec un ou plusieurs accents : ");
	String.prototype.sansAccent = function(str)
	{
		var Accent = [
			/[\300-\306]/g, /[\340-\346]/g, // A, a
			/[\310-\313]/g, /[\350-\353]/g, // E, e
			/[\314-\317]/g, /[\354-\357]/g, // I, i
			/[\322-\330]/g, /[\362-\370]/g, // O, o
			/[\331-\334]/g, /[\371-\374]/g, // U, u
			/[\321]/g, /[\361]/g, // N, n
			/[\307]/g, /[\347]/g, // C, c
		];
		var NonAccent = ['A','a','E','e','I','i','O','o','U','u','N','n','C','c'];
		for(var indice = 0; indice < Accent.length; indice++)
		{
			str = str.replace(Accent[indice], NonAccent[indice]);
		}
		return str;
	}
	Reponse = String.prototype.sansAccent(Reponse);
	tabExercice1.push(Reponse);
	ajouterContenu(Reponse);
}
function Exercice2()
{
	viderContenu();
	var Etudiant = 
	{
		Nom : "Vanier",
		Prenom : "Tanya",
		DateDeNaissance : new Date(95,10,09),
		CodePermanent : function(Nom, Prenom, DateDeNaissance)
		{
			//toUpperCase pour avoir un vrai code permanent avec des lettres majuscules
			var PartieNom = (Etudiant.Nom.slice(0,3)).toUpperCase();
			var PartiePrenom = Etudiant.Prenom.slice(0,1);
			var DateNA = Etudiant.DateDeNaissance.getFullYear();
			//Les zéros ne s'affichent pas automatiquement, j'ai trouvé une manière de les inclure pour avoir un vrai code permanent
			var DateNM = ("0" + Etudiant.DateDeNaissance.getMonth()).slice(-2);
			var DateNJ = ("0" + Etudiant.DateDeNaissance.getDate()).slice(-2);
			//Affiche un nombre entre 0 et 99
			var Nbre = ("0" + Math.floor(Math.random() * 100)).slice(-2);
			//Somme de tous les éléments
			var CodeP = PartieNom + PartiePrenom + DateNJ + DateNM + DateNA + Nbre;
			return CodeP;
		}
	}
	ajouterContenu(Etudiant.CodePermanent());
} 

function Exercice3()
{
	var Marques = ["Audi", "BMW", "Acura", "Chevrolet", "Ford", "GMC", "Hyundai", "Nissan", "Pontiac", "Volvo", "Kia"];
	var AnneesFabrication = [995,1996,1997,1998,1999,2000,2001,2002,2003,2004, 2005];
	var Couleurs = ["Rouge", "Vert", "Bleu", "Jaune", "Noir", "Blanc", "Orange", "Rose", "Bordeaux", "Gris", "Beige"];
	var Kilometrages = [100000, 150000, 200000, 250000, 300000, 350000, 400000, 450000, 50000, 0, 25000];
	var Voiture = 
	{
		Marque : Marques[Math.floor((Math.random()*10) + 1)],
		AnneeFabrication : AnneesFabrication[(Math.floor((Math.random()*10) + 1))],
		Couleur: Couleurs[(Math.floor((Math.random()*10) + 1))],
		Kilometrage: Kilometrages[(Math.floor((Math.random()*10) + 1))],
		Autocollant: tabExercice1[(Math.floor((Math.random()*5) + 1))]
	}
	ajouterContenu(Voiture.Marque + " " + Voiture.AnneeFabrication + " " + Voiture.Couleur + " " + Voiture.Kilometrage + " " + Voiture.Autocollant);
}

var TabAnnuaire = [""];
var Compteur;
Compteur = 1;
function Exercice4()
{
	viderContenu();
	alert("Cliquez encore " + (5 - Compteur) + " fois!");
	var Noms = ["Dubois", "Weasley", "Granger", "Potter", "Rogue", "Dumbledore", "Malefoy", "Bibine", "Black", "Carrow", "Chourave"];
	var Prenoms = ["Harry", "Severus", "Ron", "Hermione", "Albus", "Cho", "Pomona", "Sirius", "Fleur", "Bertie", "Lucius"];
	var Telephones = ["418-258-1059", "418-258-1034", "418-900-1582", "418-276-0909", "418-543-6754", "418-432-1234", "418-906-678", "418-765-4567", "418-654-0976", "418-975-0742", "418-567-0101"];
	var Adresses = ["3626 de Champlain", "3823 de la Bretagne", "777 des Hospitalières", "765 des Oiseaux", "543 des Bouleaux", "456 de la Chevalière", "2345 des Érables", "1234 Principale", "3763 du Cegep", "789 des Sapins","598 du Désespoir"];
	var Annuaire = 
	{
			Prenom : Prenoms[(Math.floor((Math.random()*5) + 1))],
			Nom : Noms[(Math.floor((Math.random()*5) + 1))],
			Telephone : Telephones[(Math.floor((Math.random()*5) + 1))],
			Adresse : Adresses[(Math.floor((Math.random()*5) + 1))]
	}
	TabAnnuaire[Compteur] =  Annuaire;
	if (Compteur == 5)
	{
		AfficherContacts();
		Compteur = 1;
	}
	else
	{
		Compteur++;
	}
}

function AfficherContacts()
{
		var indice;
		for(indice = 1; indice < TabAnnuaire.length; indice++)
		{
			ajouterContenu("Contact #" + indice + ": " + TabAnnuaire[indice].Prenom + " " + TabAnnuaire[indice].Nom + ", " + TabAnnuaire[indice].Adresse + " (" + TabAnnuaire[indice].Telephone + ") \n");
		}
}

var Compteur2 = 0;
var TabExercice5 = [""];
function Exercice5()
{
	var Nom1 = "";
	var Nom2 = "";
	var Phrase = "";
	var indice = 0;
	//Objet
	var Match = 
	{
		Personne1 : Nom1,
		Personne2 : Nom2,
		Compatibilite : (Math.floor((Math.random()*100) + 1)),
	}
	var Trouve = false;
	Nom1 = prompt("Entrez le nom de la première personne : ");
	Nom2 = prompt("Entrez le nom de la deuxième personne : ");
	Match.Personne1 = Nom1;
	Match.Personne2 = Nom2;
	//Premier tour
	if (Compteur2 == 0)
	{
		TabExercice5[Compteur2] = Match;
		ajouterContenu(TabExercice5[Compteur2].Personne1 + " et " + TabExercice5[Compteur2].Personne2 + " ont une compatibilité en memes de " + TabExercice5[Compteur2].Compatibilite + "%.");
		Phrase = Phrases(Number(TabExercice5[Compteur2].Compatibilite));
		ajouterContenu(Phrase);
		Compteur2++;
	}
	//Autres tours
	else
	{
		//Vérifier dans le tableau
		while(Trouve == false && indice < TabExercice5.length)
		{
			//Si déjà entré, Trouve = true;
			if(((Nom1 == TabExercice5[indice].Personne1) && (Nom2 == TabExercice5[indice].Personne2))||((Nom1 == TabExercice5[indice].Personne2) && (Nom2 == TabExercice5[indice].Personne1)))
			{
				Trouve = true;
			}
			//Sinon Trouve = false;
			else
			{
				Trouve = false;
				indice++;
			}
		}
		//Reprend les données avec l'indice dans le tableau
		if (Trouve == true)
		{
			ajouterContenu(TabExercice5[indice].Personne1 + " et " + TabExercice5[indice].Personne2 + " ont une compatibilité en memes de " + TabExercice5[indice].Compatibilite + "%.");
			Phrase = Phrases(Number(TabExercice5[indice].Compatibilite));
			ajouterContenu(Phrase);
		}
		//Ajoute les données dans le tableau
		else
		{
			TabExercice5[Compteur2] = Match;
			ajouterContenu(TabExercice5[Compteur2].Personne1 + " et " + TabExercice5[Compteur2].Personne2 + " ont une compatibilité en memes de " + TabExercice5[Compteur2].Compatibilite + "%.");
			Phrase = Phrases(Number(TabExercice5[Compteur2].Compatibilite));
			ajouterContenu(Phrase);
			Compteur2++;
		}
	}
	
}

function Phrases(Compatibilite)
{
	var Phrase = "";
	if(Compatibilite > 95)
	{
		Phrase = "Des vétérans du memes!";
	}
	else if(Compatibilite > 80 && Compatibilite <= 95)
	{
		Phrase = "Un des deux n'apprécie pas tout le temps le bon contenu...";
	}
	else if (Compatibilite > 65 && Compatibilite <= 80)
	{
		Phrase = "Le memes est grand entre vous deux!";
	}
	else if (Compatibilite > 50 && Compatibilite <=65)
	{
		Phrase = "Débutants en matière de memes!";
	}
	else if (Compatibilite > 35 && Compatibilite <=50)
	{
		Phrase = "Il y a peu d'espoirs que vous soyez un jour des experts en memes...";
	}
	else if (Compatibilite <=35)
	{
		Phrase = "Abandonnez les memes...";
	}
	else
	{
		Phrase = "Oups";
	}
	return Phrase;
}

function ajouterContenu(message)
{
	document.getElementById("resultat").innerHTML += message + "<br/>";
}

function viderContenu()
{
	document.getElementById("resultat").innerHTML = "";
}
