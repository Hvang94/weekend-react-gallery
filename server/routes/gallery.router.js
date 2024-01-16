const express = require('express');
const { s } = require('vitest/dist/reporters-O4LBziQ_');
const router = express.Router();

// PUT /gallery/like/:id
router.put('/like/:id', (req, res) => {
  // code here
 
  // ! Need queryParams and queryText

    // send UPDATE to DB
    pool
      .query(queryText, queryParams)
      // then send ok status
      .then((result) => {
        res.sendStatus(200);
      })
      .catch((error) => {
        console.log("error:", error);
      });
});

// GET /gallery
router.get('/', (req, res) => {
  // code here
  const sqlText = `SELECT * FROM "galary"`;

  pool.query(sqlText)
  .then((result) => {
    console.log("server GET", result);
res.send(result.rows)
  })
  .catch((error) => {
console.log("error in GET");
console.log(error);
res.sendStatus(500)
  })
});

module.exports = router;
