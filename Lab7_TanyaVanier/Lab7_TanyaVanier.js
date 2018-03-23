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
function search(nameKey, myArray){
    for (var i=0; i < myArray.length; i++) {
        if (myArray[i].name === nameKey) {
            return myArray[i];
        }
    }
}
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