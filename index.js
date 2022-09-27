const {name, campus} = require("./information");
const{say} = require("cowsay");

console.log(say({
    e: "oO",
    T: "U",
    text: `Hello im ${name} from ${campus} campus !`,
}));