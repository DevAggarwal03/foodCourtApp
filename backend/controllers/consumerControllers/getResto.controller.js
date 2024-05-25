const Restraunt = require('../../models/restraunt');


exports.getRestruants = async (req, res) => {
    try {
       const restraunts = await Restraunt.find({});

    //    const filteredRestruants = restraunts.filter((restraunt) => restraunt.isAvailabel === true)
       
       if(!restraunts){
        return res.json({
            message: 'no data in the database',
        })
       }

       return res.status(200).json({
        success: true,
        Response: restraunts,
        message: 'all data fetched',
       })
       
    } catch (error) {
        console.log(`error occoured while fetching all the restraunts: ${error}`)
        res.status(500).json({
            success: true,
            data: 'no data fetched',
            message: error.message,
        })
    }
}
