const axios = require("axios")

const URL = "https://rickandmortyapi.com/api/character/";

const getCharById = async (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', "*")
    try {
        const { id } = req.params;
        const resolve = await axios(`${URL}${id}`);

        const character = {
            name: resolve.data.name,
            gender: resolve.data.gender,
            image: resolve.data.image,
            species: resolve.data.species,
            id: resolve.data.id
        }

        res.status(200).json(character)
    } catch (error) {
        res.status(500).json(error.message)
    }
};

module.exports = getCharById
