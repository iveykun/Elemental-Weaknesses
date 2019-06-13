var Bug = {
	NormalTypes: "Bug, Dark, Dragon, Electric, Fairy, Ghost, Ice, Normal, Poison, Psychic, Steel, Water",
	DoubleTypes: "Fire, Flying, Rock",
	HalfTypes: "Fighting, Grass, Ground",
	ImmuneTypes: "none"
};
var Dark = {
	NormalTypes: "Dragon, Electric, Fire, Flying, Grass, Ground, Ice, Normal, Poison, Rock, Steel, Water",
	DoubleTypes: "Bug, Fairy, Fighting",
	HalfTypes: "Dark, Ghost",
	ImmuneTypes: "Psychic"
};
var Dragon = {
	NormalTypes: "Bug, Dark, Fighting, Flying, Ghost, Ground, Normal, Poison, Psychic, Rock, Steel",
	DoubleTypes: "Dragon, Fairy, Ice",
	HalfTypes: "Electric, Fire, Grass, Water",
	ImmuneTypes: "none"
};
var Electric = {
	NormalTypes: "Bug, Dark, Dragon, Fairy, Fighting, Fire, Ghost, Grass, Ice, Normal, Poison, Psychic, Rock, Water",
	DoubleTypes: "Ground",
	HalfTypes: "Electric, Flying, Steel"
	ImmuneTypes: "Paralysed"
};
var Fairy = {
	NormalTypes: "Electric, Fairy, Fire, Flying, Ghost, Grass, Ground, Ice, Normal, Psychic, Rock, Water"
	DoubleTypes: "Poison, Steel"
	HalfTypes: "Bug, Dark, Fighting"
	ImmuneTypes: "Dragon"
};
var Fighting = {
	NormalTypes: "Dragon, Electric, Fighting, Fire, Ghost, Grass, Ground, Ice, Normal, Poison, Steel, Water"
	DoubleTypes: "Fairy, Flying, Psychic"
	HalfTypes: "Bug, Dark, Rock"
	ImmuneTypes: "none"
};
var Fire = {
	NormalTypes: "Dark, Dragon, Electric, Fighting, Flying, Ghost, Normal, Poison, Psychic"
	DoubleTypes: "Ground, Rock, Water"
	HalfTypes: "Bug, Fairy, Fire, Grass, Ice, Steel"
	ImmuneTypes: "Burned"
};
var Flying = {
	NormalTypes: "Dark, Dragon, Fairy, Fire, Flying, Ghost, Normal, Poison, Psychic, Steel, Water"
	DoubleTypes: "Electric, Ice, Rock"
	HalfTypes: "Bug, Fighting, Grass"
	ImmuneTypes: "Ground"
};	
var Ghost = {
	NormalTypes: "Dragon, Electric, Fairy, fire, Flying, Grass, Ground, Ice, Psychic, Rock, Steel, Water"
	DoubleTypes: "Dark, Ghost"
	HalfTypes: "Bug, Poison"
	ImmuneTypes: "Fighting, Normal, Trapped"
};
var Grass = {
	NormalTypes: "Dark, Dragon, Fairy, Fighting, Ghost, Normal, Psychic, Rock, Steel"
	DoubleTypes: "Bug, Fire, Flying, Ice, Poison"
	HalfTypes: "Electric, Grass, Ground, Water"
	ImmuneTypes: "Powder"
};
var Ground = {
	NormalTypes: "Bug, Dark, Dragon, Fairy, Fighting, Fire, Flying, Ghost, Ground, Normal, Psychic, Steel"
	DoubleTypes: "Grass, Ice, Water"
	HalfTypes: "Poison, Rock"
	ImmuneTypes: "Electric, Sandstorm"
};
var Ice = {
	NormalTypes: "Bug, Dark, Dragon, Electric, Fairy, Flying, Ghost, Grass, Ground, Normal, Poison, Psychic, Water"
	DoubleTypes: "Fighting, Fire, Rock, Steel"
	HalfTypes: "Ice, Rock, Steel"
	ImmuneTypes: "Hail, Frozen"
};
var Normal = {
	NormalTypes: "Bug, Dark, Dragon, Electric, Fairy, Fire, Flying, Ground, Ice, Normal, Poison, Psychic, Rock, Steel, Water"
	DoubleTypes: "Fighting"
	HalfTypes: "none"
	ImmuneTypes: "Ghost"
};
var Poison = {
	NormalTypes: "Dark, Dragon, Electric, Fire, Flying, Ghost, Ice, Normal, Rock, Steel, Water"
	DoubleTypes: "Ground, Psychic"
	HalfTypes: "Bug, Fairy, Fighting, Grass, Poison"
	ImmuneTypes: "Poisoned"
};
var Psychic = {
	NormalTypes: "Dragon, Electric, Fairy, Fire, Flying, Grass, Ground, Ice, Normal, Poison, Rock, Steel, Water"
	DoubleTypes: "Bug, Dark, Ghost"
	HalfTypes: "Fighting, Psychic"
	ImmuneTypes: "none"
};
var Rock = {
	NormalTypes: "Bug, Dark, Dragon, Electric, Fairy, Ghost, Ice, Psychic, Rock"
	DoubleTypes: "Fighting, Grass, Ground, Steel, Water"
	HalfTypes: "Fire, Flying, Normal, Poison"
	ImmuneTypes: "Sandstorm"
};
var Steel = {
	NormalTypes: "Dark, Electric, Ghost, Water"
	DoubleTypes: "Fighting, Fire, Ground"
	HalfTypes: "Bug, Dragon, Fairy, Flying, Grass, Ice, Normal, Psychic, Rock, Steel"
	ImmuneTypes: "Poison, Poisoned, Sandstorm"
};
var Water = {
	NormalTypes: "Bug, Dark, Dragon, Fairy, Fighting, Flying, Ghost, Ground, Normal, Poison, Psychic, Rock"
	DoubleTypes: "Electric, Grass"
	HalfTypes: "Fire, Ice, Steel, Water"
	ImmuneTypes: "none"
};

var type1 = prompt("Please enter the Pokemon's first element", "<element goes here>");
var type2 = prompt("Please enter the Pokemon's second element", "<leave as-is if nonexistant>");

if (type1 != null) {
	DoubleTypes = [

    document.getElementById("typechart").js =

    "This Pokemon is weak to: " + DoubleTypes + "!"
	"This Pokemon is strong against: " + HalfTypes + "!"
	"This Pokemon is immune to: " + ImmuneTypes + "!";
	"This Pokemon receives normal damage against: " + NormalTypes + "!"