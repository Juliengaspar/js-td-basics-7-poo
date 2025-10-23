// CANEVAS D'UN OBJET EN JS

// 1. Création de l'objet

const objet = {
	prop1: "val1",
	prop2: [],
	prop3: {},
	prop4: function() {
		console.log("test")
	},
	prop4bis() {
this.decrire()
	},
	decrire() {
		// Définit le comportement de la méthode "decrire"
		console.log("test")
		console.log(this.prop1)
	},
	prop5: 'Toto'
};

// 2. Utilisation des méthodes et des propriétés de l'objet

objet.prop1 = 'valeur'; // Modifie la propriété "prop1" de l'objet en lui attribuant une nouvelle valeur
objet.prop4bis(); // Appelle la méthode "decrire" de l'objet pour effectuer une action spécifique
