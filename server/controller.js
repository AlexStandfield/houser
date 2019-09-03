module.exports = {
    getHouses: (req, res) => {
        req.app.get('db').get_houses()
            .then(houses => res.status(200).send(houses))
            .catch(err => res.status(500).send(err))
    },
    addHouse: (req, res) => {
        const {name, address, city, States, zip, img, mortgage, rent} = req.body

        req.app.get('db').add_house([name, address, city, States, zip, img, mortgage, rent])
            .then((response) => res.status(200).send(response))
            .catch(err => {
                res.status(500).send({errorMessage: 'Error'})
                console.log(err)
            })
    },
    deleteHouse: (req, res) => {
        const {id} = req.params

        req.app.get('db').delete_house([id])
            .then(() => res.sendStatus(200))
            .catch(err => {
                res.status(500).send({errorMessage: 'Error'})
                console.log(err)
            })
    }
}