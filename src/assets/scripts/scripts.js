'use strict'
console.log("TOTO - INIT")

var start = window.performance.now();

var events = [];


var display = () => {
    console.log("DISPLAY !")
    navigator.clipboard.writeText(JSON.stringify(events));
}


// Override the open method of XMLHttpRequest to intercept all requests
var originalOpen = XMLHttpRequest.prototype.open;

XMLHttpRequest.prototype.open = function (method, url) {
    console.log("Intercepted HTTP request: " + method + " " + url);
    originalOpen.apply(this, arguments);
};


let getTarget = (e) => {
    return (e.target?.id) ? e.target.id : e.target.name
}
let getTargetParent = (e) => {
    return (e.target.parentNode?.id) ? e.target.parentNode.id : e.target.parentNode.name
}

let getValue = (e) => {
    return (e.target?.value) ? e.target.value : null
}

let getTagName = (e) => {
    return e.target.tagName
}

let isEventClicable = (e) => {
    return (['INPUT', 'BUTTON', 'SELECT', 'TD'].includes(e.target.tagName.toUpperCase()));
}

let isEventInput = (e) => {
    return (['INPUT'].includes(e.target.tagName.toUpperCase()));
}

let isEventSelectOrInput = (e) => {
    return (['SELECT', 'INPUT'].includes(e.target.tagName.toUpperCase()));
}

let createSimpleEventFromEvent = (e) => {
    let target = (getTagName(e) === "TD") ? getTargetParent(e) : getTarget(e);
    return {
        'tagName': getTagName(e),
        'typeEvent': e.type,
        'target': target,
        'timestamp': window.performance.now() - start
    }
}

let createSimpleEventFromHttp = (requete) => {
    /*
    let target = (getTagName(e) === "TD") ? getTargetParent(e) : getTarget(e);
    return {
        'tagName': getTagName(e),
        'typeEvent': e.type,
        'target': target,
        'timestamp': window.performance.now() - start
    }*/
}


let eventClickCustom = (e) => {
    let event = createSimpleEventFromEvent(e);
    events.push(event)
}

let eventKeyDownCustom = (e) => {
    let event = createSimpleEventFromEvent(e);
    event.key = e.key
    events.push(event)
}
let eventFocusOutCustom = (e) => {
    let event = createSimpleEventFromEvent(e);
    event.key = e.key
    event.value = getValue(e)
    events.push(event)
}

document.getElementById("btn_display").addEventListener("click", () => { console.log(`DISPLAY`); display() });

document.addEventListener("click", (e) => {
    if (isEventClicable(e)) {
        console.log("click --------------");
        eventClickCustom(e);
    }
})

document.addEventListener("keydown", (e) => {

    if (isEventInput(e)) {
        console.log("keydown --------------");
        eventKeyDownCustom(e);
    }
})

document.addEventListener("focusout", (e) => {
    if (isEventSelectOrInput(e)) {
        console.log("focusout --------------");
        eventFocusOutCustom(e);
    }
})


console.log("TOTO")