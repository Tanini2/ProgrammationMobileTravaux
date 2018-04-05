var utilisateur = "";
var motdepasse = "";

function test1 (form, event)
{
	utilisateur = form.username.value;
	motdepasse = form.pwd.value;
	event.preventDefault();
	return false;
}

function test2 (form, event)
{
	if(form.usernameCo.value == utilisateur && form.pwdCo.value == motdepasse)
	{
		alert("Vous pouvez vous connecter!");
	}
	event.preventDefault();
	return false;
}

var Produit1 = 
{
	Nom : "Phar",
	Prix : 13
}
var Produit2 = 
{
	Nom : "Ma",
	Prix : 34
}
var Produit3 = 
{
	Nom : "Co",
	Prix : 23
}
var Produit4 = 
{
	Nom : "Lo",
	Prix : 6
}
var Produit5 = 
{
	Nom : "Gie",
	Prix : 42
}
var Produits = {Produit1, Produit2, Produit3, Produit4, Produit5};
var Quantite;
var Total;
var Adresse;
var NomClient;
var NomProduit;
function test3(form, event)
{
	event.preventDefault();
	var indice;
	var Prix;
	var SousTotal;
	var Taxes;
	for (var Produit in Produits)
	{
		var obj = Produits[Produit];
		
		if(form.NomP.value == obj['Nom'])
		{
			Prix = obj['Prix'];
			NomProduit = obj['Nom'];
		}
	}
	NomClient = form.NomC.value;
	Adresse = form.Adresse.value;
	Quantite = form.Quantite.value;
	SousTotal = Number(Quantite)*Number(Prix);
	form.SousTotal.value = SousTotal;
	Taxes = Number(SousTotal)*0.15;
	form.Taxes.value = Taxes.toFixed(2);
	Total = Number(SousTotal) + Number(Taxes);
	form.Total.value = Total.toFixed(2);
	return false;
}

function Envoyer()
{
	alert("Commande passée pour " + Quantite + " " + NomProduit + ", au prix de " + Total + "$. La livraison se fera au " + Adresse + " d'ici quelques jours. Merci beaucoup, " + NomClient + "!");
}

function EffacerContenu(form)
{
	form.value="";
}

function ValiderEx1(form)
{
	switch(form.name)
	{
		case "username":
			var Validation = /^\w+$/
			var Id = "VerifNomU";
			var Message = "Le nom d'utilisateur";
			break;
		case "pwd":
			var Validation = /^(?=.*\d)(?=.*[A-Z])(?=.*[#?!@$%^&*-])[\w#?!@$%^&*-]{8,}$/
			// should contain at least one digit
			// should contain at least one upper case
			// should contain at least one special character
			// should contain at least 8 from the mentioned characters
			var Id = "VerifMotP";
			var Message = "Le mot de passe";
			break;	
		case "name":
			var Validation = /^[A-Z][a-zA-Z-]+(?![\W\d])$/
			var Id = "VerifNom";
			var Message = "Le nom";
			break;	
		case "firstname":
			var Validation = /^[A-Z][a-zA-Z-]+(?![\W\d])$/
			var Id = "VerifPrenom";
			var Message = "Le prénom";
			break;
		case "email":
			var Validation = /\w+\.?\w+@(gmail|hotmail)\.(com|ca)/
			var Id = "VerifAdresseC";
			var Message = "L'adresse courriel";
			break;	
		case "tel":
			var Validation = /^\(\d{3}\)\d{3}-\d{4}(?![\D])$/
			var Id = "VerifNumeroT";
			var Message = "Le numéro de téléphone";
			break;	
		case "date":
			var Validation = /^$/
			var Id = "VerifDateN";
			var Message = "La date de naissance";
			break;	
	}
	var Rep = Validation.test(form.value);
	if(Rep == true)
	{
		document.getElementById(Id).innerHTML = Message + " est conforme.";
	}
	else
	{
		document.getElementById(Id).innerHTML = Message + " n'est pas conforme.";
	}
}	

function ValiderEx2(form)
{
	switch(form.name)
	{
		case "NomP":
			var Validation = /(Phar|Ma|Co|Lo|Gie)/
			var Id = "VerifNomP";
			var Message = "Le nom du produit";
			break;
		case "Quantite":
			var Validation = /^\d+$/
			var Id = "VerifQuantite";
			var Message = "La quantité";
			break;	
		case "NomC":
			var Validation = /^[A-Z][a-zA-Z-]+(?![\W\d])$/
			var Id = "VerifNomC";
			var Message = "Le nom du client";
			break;
		case "Email":
			var Validation = /\w+\.?\w+@(gmail|hotmail)\.(com|ca)/
			var Id = "VerifEmail";
			var Message = "L'adresse courriel";
			break;	
		case "Adresse":
			var Validation = /^\d{1,5},\s(Chicoutimi|Jonquière|Alma),\s(Québec,\sCanada,)\s([A-Z]\d[A-Z]\s\d[A-Z]\d)$/
			var Id = "VerifAdresse";
			var Message = "L'adresse de livraison";
			break;
	}
	var Rep = Validation.test(form.value);
	if(Rep == true)
	{
		document.getElementById(Id).innerHTML = Message + " est conforme.";
	}
	else
	{
		document.getElementById(Id).innerHTML = Message + " n'est pas conforme.";
	}
}

function ChangementCouleur(form)
{
	switch(form.value)
	{
		case "Rouge":
			var Message = "FF0000";
			break;
		case "Bleu":
			var Message = "0000FF";
			break;
		case "Vert":
			var Message = "00FF00";
			break;
		case "Jaune":
			var Message = "FFFF00";
			break;
		case "Mauve":
			var Message = "FF00FF";
			break;
		case "Rose":
			var Message = "FFC0CB";
			break;
		case "Blanc":
			var Message = "000000";
			break;
		case "Orange":
			var Message = "FFA500";
			break;
	}
	document.getElementById("CouleurH").value = Message;
}

function ChangementCouleurH(form)
{
	switch(form.value)
	{
		case "FF0000":
			var Message = "Rouge";
			break;
		case "0000FF":
			var Message = "Bleu";
			break;
		case "00FF00":
			var Message = "Vert";
			break;
		case "FFFF00":
			var Message = "Jaune";
			break;
		case "FF00FF":
			var Message = "Mauve";
			break;
		case "FFC0CB":
			var Message = "Rose";
			break;
		case "000000":
			var Message = "Blanc";
			break;
		case "FFA500":
			var Message = "Orange";
			break;
		default:
			document.getElementById("ErreurCouleur").innerHTML = "Cette couleur n'est pas dans notre répertoire.";
			break;
	}
	document.getElementById("Couleur").value = Message;
}

function ModifPrix()
{
	var NomProduit = document.getElementById("NomP").value;
	var Quantite = document.getElementById("Quantite").value;
	for (var Produit in Produits)
	{
		var obj = Produits[Produit];
		
		if(NomProduit == obj['Nom'])
		{
			Prix = obj['Prix'];
		}
	}
	var SousTotal = Prix*Quantite;
	var Taxes = SousTotal*0.15;
	var Total = SousTotal + Taxes;
	document.getElementById("SousTotal").value = SousTotal;
	document.getElementById("Taxes").value = Taxes;
	document.getElementById("Total").value = Total;
}	