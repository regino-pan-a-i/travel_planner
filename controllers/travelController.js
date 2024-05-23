const travelController = {}


travelController.getTravels = async (req, res) => {
    res.send('Here is where you will get all the travel')

}


travelController.getTravel = async (req, res) => {
    res.send('Here is where you will get a single travel')

}



module.exports = travelController;