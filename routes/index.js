const express = require(`express`);
const router = express.Router();

router.get(`/`, (req, res) => {
    res.render(`index`);
})

console.log(`test`);
console.log(`test 2`);
console.log(`test 7`);

module.exports = router;