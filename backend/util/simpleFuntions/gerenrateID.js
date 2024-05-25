const Restraunt = require('../../models/restraunt');


// generates a 3 digit id that is unique from all the entries from all the restraunts id in the restraunt model
// some tweaks left
const generateID = async () => {
    const num = Math.floor((Math.random() * 1000) + 100);
    const sameIDEntry = await Restraunt.find({id:num});

    if(sameIDEntry){
        generateID();
    }else{
        return num;
    }
}

module.exports = generateID;