/*
 0: pineapple Juice
 1: cranberry
 2: Margarita mix
 3: Orange juice
 4: tequila
 5: whiskey
 6: vodka
 7: coke
 */
var pumps = {
    pineapple: 0,
    cranberry: 1,
    margarita: 2,
    orange: 3,
    tequila: 4,
    whiskey: 5,
    vodka: 6,
    coke: 7
};

var isPouring = false;

function pour(pump, oz) {

    $.get('/' + pump + '/' + oz, function (data) {
        console.log(pump, oz);
    });
}

function pourScrewdriver() {
    return $.when(
        pour(pumps['vodka'], 1.5),
        pour(pumps['orange'], 4)
    );
}

function pourVodkaCranberry() {
    return $.when(
        pour(pumps['vodka'], 1),
        pour(pumps['cranberry'], 4.5)
    )
}

function pourTequilaSunrise() {
    return $.when(
        pour(pumps['tequila'], 1.5),
        pour(pumps['orange'], 4)
    )
}

function pourBayBreeze() {
    return $.when(
        pour(pumps['vodka'], 2),
        pour(pumps['cranberry'], 3),
        pour(pumps['pineapple'], 3)
    )
}

function pourJackAndCoke() {
    return $.when(
        pour(pumps['whiskey'], 1),
        pour(pumps['coke'], 5)
    )
}

function pourMargarita() {
    return $.when(
        pour(pumps['tequila'], 1),
        pour(pumps['margarita'], 3)
    )
}

function pourShot(type) {
    console.log('pouring', type);
    return $.when(
        pour(pumps[type], 1)
    )
}

function isBusy() {
    if (isPouring) {
        console.log('is Pouring');
    }

    return isPouring;
}
