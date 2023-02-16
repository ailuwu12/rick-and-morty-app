const Router = require("express");
const getCharById = require("../controllers/getCharById");
const getCharDetail = require("../controllers/getCharDetail");
let favs = require("../utils/favs")

const router = Router();

router.get("/onsearch/:id", getCharById);
router.get("/detail/:id", getCharDetail)

router.post("/fav", (req, res) => {
    const { id, name, image, gender, species} = req.body;
    let character = {
        id,
        name,
        image,
        gender,
        species,
    }

    favs.push(character);
    res.status(200).json(character);
});

router.get("/fav", (req, res) => {
    res.status(200).json(favs)
});

router.delete("/fav/:id", (req, res) => {
    const { id } = req.params;
    const character = favs.find((character) => character.id === Number(id))
    const filteredFavs = favs.filter((character) => character.id !== Number(id))

    favs = filteredFavs;

    res.status(200).json(character);
})

module.exports = router;