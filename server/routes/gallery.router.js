const express = require('express');
const router = express.Router();
const pool = require("../modules/pool");

// PUT /gallery/like/:id
router.put('/like/:id', (req, res) => {
  // declare queryText which will UPDATE likes by id by +1
  const queryParams = req.params.id
  const queryText = `UPDATE "gallery" SET "likes" = "likes" + 1 WHERE id=$1`

  pool
    .query(queryText, [queryParams])
  .then((result) => {
    console.log("Update Successful");
    res.sendStatus(201)
  })
  .catch((err) => {
    console.log("Error Updating:", err);
    res.sendStatus(500)
  })

});

// GET /gallery
router.get('/', (req, res) => {
  // code here
  const sqlText = `SELECT * FROM "gallery"`;

  pool.query(sqlText)
  .then((result) => {
res.send(result.rows)
  })
  .catch((error) => {
console.log("error in GET");
console.log(error);
res.sendStatus(500)
  })
});

module.exports = router;
