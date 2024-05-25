const Restraunt = require('../../models/restraunt')
const generateID = require('../../util/simpleFuntions/gerenrateID')

exports.insertRestraunt = async (req, res) => {
    try {
        const {name, discription, isAvailabel} = req.body;
        const generatedId = generateID();

        const check = await Restraunt.find({name: name});

        if(check){
            return res.status(500).json({
                success: false,
                message: 'restraunt by this name already exists',
            })
        }

        const restraunt = new Restraunt({
            name,
            discription,
            isAvailabel,
            id: generateID,
        })

        const response = await restraunt.save();

        return res.status(200).json({
            success: true,
            response: response,
            message: "entry created successfully",
        })


    } catch(error) {
        console.log(`error occoured while adding a restraunt to the database`)
        res.status(500).json({
            success: false,
            message: error.message,
        })
    }
}