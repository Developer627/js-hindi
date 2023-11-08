// IIFE - Immediately Invoked Function Expression
// Avoid polluting the global namespace

function chai(){
    console.log(`DB CONNECTED! One`);
}

chai();

(function tea(){
    // Named IIFE
    console.log(`DB CONNECTED! Two`);
}());

(function coffee(){
    // Named IIFE
    console.log(`DB CONNECTED! Three`);
})();

( () => {
    // Unamed IIFE
    console.log(`DB CONNECTED! Four`);
} )();

( (name) => {
    console.log(`DB CONNECTED! ${name}`);
} )("Fluffy");

// ()() 