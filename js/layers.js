addLayer("p", {
    name: "prestige", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: "﷽", // This appears on the layer's node. Default is the id with the first letter capitalized
    position: 0, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    startData() { return {
        unlocked: true,
		points: new Decimal(0),
    }},
    color: "pink",
    requires: new Decimal(10), // Can be a function that takes requirement increases into account
    resource: "prestige points", // Name of prestige currency
    baseResource: "points", // Name of resource prestige is based on
    baseAmount() {return player.points}, // Get the current amount of baseResource
    type: "normal", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
    exponent: 0.5, // Prestige currency exponent
    gainMult() { // Calculate the multiplier for main currency from bonuses
        mult = new Decimal(1)
        if (hasUpgrade('p', 13)) mult = mult.times(upgradeEffect('p', 13))
        return mult
    },
    gainExp() { // Calculate the exponent on main currency from bonuses
        return new Decimal(1)
    },
    row: 0, // Row the layer is in on the tree (0 is the first row)
    hotkeys: [
        {key: "p", description: "P: Reset for prestige points", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
    ],
    upgrades: {
        11: {
            description: "Start praying (allah blesses you with 2x point gain)",
            cost: new Decimal(1),
        },
        12: {
            description: "Pray harder (allah blesses you by multiplying point gain by prestige points)",
            cost: new Decimal(2),
            effect() {
                return player[this.layer].points.add(1).pow(0.5)
            },
            effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"x"},
        },
        13: {
            description: "Pray 6 times a day instead of 5 (allah does stuff)",
            cost: new Decimal(5),
            effect() {
                return player[this.layer].points.add(1).pow(0.33333333333)
            },
            effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"x"},
        },
        14: {
            description: "Complete Ramadan (allah does an insane amount of stuff)",
            cost: new Decimal(100),
        },
        15: {
            description: "eat pork (allah says thats haram and you shall be punished severely)",
            cost: new Decimal(1234567),
        },
        16: {
            description: "eat food that isnt pork (allah is proud of you for not eating haram pig)",
            cost: new Decimal(1234567),
        },
        17: {
            description: "pray to allah 100 times a day (allah is very impressed)",
            cost: new Decimal(420420420),
        },
        18: {
            description: "build a mosque (allah likes mosques)",
            cost: new Decimal(3.33e17)
        },
        19: {
            description: "build a really big mosque (allah likes really big mosques even more",
            cost: new Decimal(1e27)
        },
        21: {
            description: "watch gay femboy hentai (ALLAH IS VERY VERY VERY VERY ANGRY SO NOT HALAL MODE)",
            cost: new Decimal(5e40),
        },
    },
    layerShown(){return true}
})
