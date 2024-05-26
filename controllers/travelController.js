const travelController = {}


travelController.getTravels = async (req, res) => {
    res.send('Here is where you will get all the travel')

}


travelController.getTravelById = async (req, res) => {
    res.send('Here is where you will get a single travel based on the ID')

}

travelController.createTravel = async (req, res) => {
    res.send('Here is where you will create a travel')
}

travelController.updateTravel = async (req, res) => {
    res.send('Here is where you will update a travel')
}

travelController.deleteTravel = async (req, res) => {
    res.send('Here is where you will delete a travel')
}


module.exports = travelController;