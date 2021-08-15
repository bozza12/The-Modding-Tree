let modInfo = {
	name: "Allah Tree",
	id: "kinkynutsackcummyballs",
	author: "Bozza12",
	pointsName: "points",
	modFiles: ["layers.js", "tree.js"],

	discordName: "",
	discordLink: "",
	initialStartPoints: new Decimal (10), // Used for hard resets and new players
	offlineLimit: 0,  // In hours 8760000
}

// Set your version in num and name
let VERSION = {
	num: "0.1",
	name: "become allah??????",
}

let changelog = `<h1>Changelog:</h1><br>
	<h3>v0.0</h3><br>
		- Added Allah.<br>
		<h3>v0.1</h3><br>
		- Added the final upgrade.`

let winText = `Congratulations! You have reached the end and beaten this game, please go touch grass.`

// If you add new functions anywhere inside of a layer, and those functions have an effect when called, add them here.
// (The ones here are examples, all official functions are already taken care of)
var doNotCallTheseFunctionsEveryTick = ["blowUpEverything"]

function getStartPoints(){
    return new Decimal(modInfo.initialStartPoints)
}

// Determines if it should show points/sec
function canGenPoints(){
	return true
}

// Calculate points/sec!
function getPointGen() {
	if(!canGenPoints())
		return new Decimal(0)

	let gain = new Decimal(1)
	if (hasUpgrade('p', 11)) gain = gain.times(2)
	if (hasUpgrade('p', 12)) gain = gain.times(upgradeEffect('p', 12))
	if (hasUpgrade('p', 14)) gain = gain.times(69420)
	if (hasUpgrade('p', 15)) gain = gain.times(0.000000000001)
	if (hasUpgrade('p', 16)) gain = gain.times(69)
	if (hasUpgrade('p', 17)) gain = gain.times(8008135)
	if (hasUpgrade('p', 18)) gain = gain.times(99999999)
	if (hasUpgrade('p', 19)) gain = gain.times(99999999999)
	if (hasUpgrade('p', 21)) gain = gain.times(0.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000001)
	if (hasUpgrade('p', 22)) gain = gain.times(6969696969696969696969696969)
	if (hasUpgrade('p', 23)) gain = gain.times(9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999)
	if (hasUpgrade('p', 24)) gain = gain.times(99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999)
	if (hasUpgrade('p', 25)) gain = gain.times("1e1111")
	if (hasUpgrade('p', 26)) gain = gain.times("1e6969")
	if (hasUpgrade('p', 27)) gain = gain.times("1e999999")
	if (hasUpgrade('p', 28)) gain = gain.times("1e99999999999")
	return gain
}

// You can add non-layer related variables that should to into "player" and be saved here, along with default values
function addedPlayerData() { return {
}}

// Display extra things at the top of the page
var displayThings = [
]

// Determines when the game "ends"
function isEndgame() {
	return player.points.gte(new Decimal("e28000000000"))
}



// Less important things beyond this point!

// Style for the background, can be a function
var backgroundStyle = {

}

// You can change this if you have things that can be messed up by long tick lengths
function maxTickLength() {
	return(3600) // Default is 1 hour which is just arbitrarily large
}

// Use this if you need to undo inflation from an older version. If the version is older than the version that fixed the issue,
// you can cap their current resources with this.
function fixOldSave(oldVersion){
}