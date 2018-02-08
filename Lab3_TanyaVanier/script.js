function Exercice1()
{
	var Nbre;
	var Resultat;
	
	viderContenu();
	Nbre = prompt("Entrez un nombre : ");
	isNaN(Nbre);
	//Vérifier que l'utilisateur a entré un nombre
	while (isNaN(Nbre) == true)
	{
		Nbre = prompt("Entrez un nombre : ");
		isNaN(Nbre);
	}
	//Faire la multiplication et afficher dans div Resultat
	for(var indice = 0;indice < 13; indice++)
	{
	Resultat = indice * Nbre;
	ajouterContenu(Nbre + " * " + indice + " = " + Resultat);
	}
	//Recommencer une autre table de multiplication
	setTimeout(Recommencer,2000);
}

function Recommencer()
{
	var Restart;
	Restart = confirm("Voulez-vous recommencer?");
		if (Restart)
		{
			Exercice1();
		}
		else
		{
			alert("Bonne journée!");
			viderContenu();
		}
}
//Exercice 2
var Continuer;
Continuer = false;
var Resultat;
function Exercice2()
{
	var Nbre1;
	var Nbre2;
	var Operateur;
	
	Nbre1 = 0;
	Nbre2 = 0;
	viderContenu();
	//Continuer un calcul
	if (Continuer)
	{
		Nbre1 = Resultat;
	}
	//Commencer un calcul
	else
	{
		Nbre1 = prompt("Entrez le premier nombre : ");
		ValiderNombres(Nbre1);
	}
	Nbre2 = prompt("Entrez le deuxième nombre : ");
	ValiderNombres(Nbre2);
	Operateur = prompt("Entrez un opérateur (+ | - | * | /) : ");
	//Chercher opérateur
	switch(Operateur)
	{
		case "+":
			Resultat = Addition(Nbre1, Nbre2);
			break;
		case "-":
			Resultat = Soustraction(Nbre1, Nbre2);
			break;
		case "*":
			Resultat = Multiplication(Nbre1, Nbre2);
			break;
		case "/":
			Resultat = Division(Nbre1, Nbre2);
			break;
		default:
			alert("Vous n'avez pas entré un choix valide!");
			break;
	}
	//Afficher Résultat
	ajouterContenu(Nbre1 + Operateur + Nbre2 + " = " + Resultat);
	setTimeout(QuoiFaire, 2000);
	
}

function ValiderNombres(Nbre)
{
	isNaN(Nbre)
	while(isNaN(Nbre) == true)
	{
		Nbre = prompt("Vous n'avez pas entré un nombre. Entrez un nombre : ");
		return Nbre;
	}
}

function Addition(Nbre1, Nbre2)
{
	var Resultat;
	
	Resultat = parseFloat(Nbre1) + parseFloat(Nbre2);
	return Resultat;
}

function Soustraction (Nbre1, Nbre2)
{
	var Resultat;
	
	Resultat = parseFloat(Nbre1) - parseFloat(Nbre2);
	return Resultat;
}

function Multiplication (Nbre1, Nbre2)
{
	var Resultat;
	
	Resultat = parseFloat(Nbre1) * parseFloat(Nbre2);
	return Resultat;
}

function Division (Nbre1, Nbre2)
{
	var Resultat;
	
	Resultat = parseFloat(Nbre1) / parseFloat(Nbre2);
	return Resultat;
}
//Fin du calcul, Recommencer un calcul, Continuer le calcul ou Terminer
function QuoiFaire()
{
	var QueFaire;
	QueFaire = prompt("Que voulez-vous faire? \n 1- Continuer le calcul \n 2- Commencer un nouveau calcul \n 3- Terminer");
	switch (QueFaire)
	{
		case "1":
			Continuer = true;
			Exercice2();
			break;
		case "2":
			Continuer = false;
			Exercice2();
			break;
		case "3":
			alert("Bonne journée!");
			viderContenu();
			break;
		default:
			alert("Choix invalide!");
			viderContenu();
			break;
	}
}

function Exercice3()
{
	//Fonction map = Ajouter 5 à chaque nombre;
	var numbers = [32, 64, 81, 100, 121, 144];
	document.getElementById("resultat").innerHTML = numbers.map(Ajouter5);
	ajouterContenu("\n");
	//Fonction filter = Afficher les nombres plus petits que 100
	document.getElementById("resultat").innerHTML += numbers.filter(NbrePlusPetit100);
}

function Ajouter5(num)
{
	return num + 5;
}

function NbrePlusPetit100(num)
{
	return num < 100;
}

function Exercice4()
{
	var Compteur;
	var NbreLignes;
	var Resultat;
	document.getElementById("resultat").style.textAlign = "left";
	viderContenu();
	Resultat = "";
	NbreLignes = prompt("Entrez le nombre de lignes désirées : ");
	isNaN(NbreLignes);
	while (isNaN(NbreLignes))
	{
		NbreLignes = prompt("Entrez le nombre de lignes désirées : ");
		isNaN(NbreLignes);
	}
	for (Compteur = 1; Compteur <= NbreLignes; Compteur++)
	{
		Resultat = Resultat + "*\n";
		ajouterContenu(Resultat);
	}
}

function Defi()
{
	var Compteur;
	var NbreLignes;
	var Resultat;
	var Choix;
	var indice;
	var NbreEtoiles;
	viderContenu();
	Resultat = "";
	NbreLignes = prompt("Entrez le nombre de lignes désirées : ")
	isNaN(NbreLignes);
	while (isNaN(NbreLignes))
	{
		NbreLignes = prompt("Entrez le nombre de lignes désirées : ");
		isNaN(NbreLignes);
	}
	Choix = prompt("Quelle pyramide voulez-vous? \n 1- Pyramide simple \n 2- Demi-Pyramide (Alignée à gauche)\n 3- Pyramide inversée");
	switch (Choix)
	{
		case "1":
			document.getElementById("resultat").style.textAlign = "center";
			for(Compteur = 1; Compteur <= NbreLignes; Compteur++)
			{
				Resultat="";
				NbreEtoiles = 2 * Compteur - 1;
				for (indice = 1;indice <= NbreEtoiles; indice++)
				{
					Resultat = Resultat + "*";
				}
				ajouterContenu(Resultat);
			}
			break;
		case "2":
			document.getElementById("resultat").style.textAlign = "left";
			for (Compteur = NbreLignes; Compteur >= 1; Compteur--)
			{
				Resultat = "";
				for (indice = 1; indice <= Compteur; indice++)
				{
					Resultat = Resultat + "*";
				}
				ajouterContenu(Resultat + "\n");
			}
			break;
		case "3":
			document.getElementById("resultat").style.textAlign = "center";
			for(Compteur = NbreLignes; Compteur >= 1; Compteur--)
			{
				Resultat="";
				NbreEtoiles = 2 * Compteur - 1;
				for (indice = 1;indice <= NbreEtoiles; indice++)
				{
					Resultat = Resultat + "*";
				}
				ajouterContenu(Resultat);
			}
			break;
		default:
			alert("Choix invalide!");
			break;
	}
}

function ajouterContenu(message)
{
	document.getElementById("resultat").innerHTML += message + "<br/>";
}

function viderContenu()
{
	document.getElementById("resultat").innerHTML = "";
}
