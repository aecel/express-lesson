const express = require("express")
const router = express.Router()

// Route order matters
// Checks fro a match from top to bottom
// Do not put /new below /:id

router.get("/", (req, res) => {
  res.send("User List")
})

router.get("/new", (req, res) => {
  res.send("User New Form")
})

router.post("/", (req, res) => {
  res.send("Create user")
})

// router.get("/:id", (req, res) => {
//   const userId = req.params.id
//   res.send(`Get User with ID ${userId}`)
// })

// router.put("/:id", (req, res) => {
//   const userId = req.params.id
//   res.send(`Update User with ID ${userId}`)
// })

// router.delete("/:id", (req, res) => {
//   const userId = req.params.id
//   res.send(`Delete User with ID ${userId}`)
// })

// Can chain the previous three into
router
  .route("/:id")
  .get((req, res) => {
    const userId = req.params.id
    console.log(req.user)
    res.send(`Get User with ID ${userId}, ${JSON.stringify(req.user)}`)
  })
  .put((req, res) => {
    const userId = req.params.id
    res.send(`Update User with ID ${userId}`)
  })
  .delete((req, res) => {
    const userId = req.params.id
    res.send(`Delete User with ID ${userId}`)
  })

const users = [{ name: "Kyle" }, { name: "Sally" }]

//   Middleware that runs anytiime a param matched "id"
router.param("id", (req, res, next, id) => {
  req.user = users[id]
  console.log(id)
  next()
})

module.exports = router
