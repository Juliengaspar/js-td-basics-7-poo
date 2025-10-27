// CANEVAS D'UNE CLASSE EN JS

// 1. Création de la classe

class MaClasse {
	param1;
	param2;
	constructor(param1, param2 /* ... */) {
		// Définis les propriétés de la classe en utilisant les paramètres
		this.param1 = param1;
		this.param2 = param2;

		// ...
	}
	methode1(/* ... */) {
		// Définis les méthodes de la classe
		// ...
		console.log('methode1');
		console.log(this.param1);
	}
	methode2(/* ... */) {
		// ...
		console.log('methode2');
		console.log(this.param2);
	}
	// ...
}

// 2. Utilisation de la classe pour instancier un objet

const monObjet = new MaClasse('test', 'coucocu' /* ... */); // Instancie un objet de la classe en fournissant les arguments nécessaires
console.log("methode1");
monObjet.methode1();
console.log("methode2");
monObjet.methode2();