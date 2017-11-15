// this is a stub for manipulating pumps

// todo: move this table into a json document
// const pumpMap = require('./pumpMap.json');

// rate is ounces per sec
const pumpMap = {
    0: {
        type: "liquid",
        rate: .833333
    },
    1: {
        type: "liquid",
        rate: .833333
    },
    2: {
        type: "liquid",
        rate: .833333
    },
    3: {
        type: "liquid",
        rate: .833333
    },
    4: {
        type: "liquid",
        rate: .833333
    },
    5: {
        type: "liquid",
        rate: .833333
    },
    6: {
        type: "air",
        rate: 1.1
    },
    7: {
        type: "air",
        rate: 1.1
    }
};

function get(pumpId) {
    let item = pumpMap[pumpId];
    item.id = pumpId;
    return item;
}

function isRunning(pumpId) {
    return false;
}

function isEnabled(pumpId) {
    return true;
}

function list() {
    return Object.keys(pumpMap).map(getPump);
}

// volume is ounces
function activate(pumpId, volume) {
    return isEnabled(pumpId);
}

module.exports = {
    get,
    isRunning,
    isEnabled,
    list,
    activate
};


