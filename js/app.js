// Nested array

let poem = [
    ["one", "two", "three", "breathe"],
    ["day", "night", "light"],
    ["calm",  "fear",  "haven"],
    ["life",  "grip of death", "land"],
];

// h1

for (let i = 0; i < 1; i++) {

    for (let j = 3; j < 4; j++) {

        let h = document.createElement("h1");
        h.innerHTML = poem[i][j] + "...";
        document.getElementById("poem").appendChild(h);
    }
}

//lines 1-4

for (let i = 0; i < 1; i++) {

    for (let j = 0; j < poem[i].length; j++) {

        let p = document.createElement("p");
        p.innerHTML = poem[i][j] + "...";
        document.getElementById("poem").appendChild(p);
    
    }
}

// Lines 5-13

for(let i = 1; i < poem.length; i++) {

    for (let j = 0; j < poem[i].length; j+=3) {

        let p = document.createElement("p");
        p.innerHTML = "The " + poem[i][j] + " is fading,";
        document.getElementById("poem").appendChild(p);
    }

    for (let j=1; j < poem[i].length; j+=3) {

        let p = document.createElement("p");
        p.innerHTML = "The " + poem[i][j] + " draws nearer,";
        document.getElementById("poem").appendChild(p);
    }

    for (let j = 2; j < poem[i].length; j += 3) {

        let p = document.createElement("p");
        p.innerHTML = "Where is the promised " + poem[i][j] + "?";
        document.getElementById("poem").appendChild(p);
    }
}


// Lines 14-17

for (let i = 0; i < 1; i++) {

    for (let j = 0; j < poem[i].length; j++) {

        let p = document.createElement("p");
        p.innerHTML = poem[i][j] + "...";
        document.getElementById("poem").appendChild(p);
    }
}

// Lines 18-26

for(let i = 1; i < poem.length; i++) {
    for(let j = 1; j < poem[i].length; j += 3) {

        let p = document.createElement("p");
        p.innerHTML = "The " + poem[i][j] + " has triumphed,";
        document.getElementById("poem").appendChild(p);
    }

    for(let j = 0; j < poem[i].length; j+=3) {

        let p = document.createElement("p");
        p.innerHTML = "and " + poem[i][j] + " is no more.";
        document.getElementById("poem").appendChild(p);
    }

    for(let j = 2; j < poem[i].length; j += 3) {
        let p = document.createElement("p");

        p.innerHTML = "Promised " + poem[i][j] + " forever gone...";
        document.getElementById("poem").appendChild(p);
    }
}


// Lines 27-29

for (let i = 0; i < 1; i++) {

    for (let j = 0; j < 3; j++) {

        let p = document.createElement("p");
        p.innerHTML = poem[i][j] + "...";
        document.getElementById("poem").appendChild(p);
    }
}