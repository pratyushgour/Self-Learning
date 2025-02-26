const express = require("express");

const {
  handleGetAllUsers, 
  handleGetUserById, 
  handleUpdateUserById, 
  handleDeleteUserById, 
  handleCreateNewUser
} = require('../controllers/user')


const router = express.Router();

// router.get("/users", async (req, res) => {
//   const allDbUsers = await User.find({});
//   const html = `
//       <ul>
//           ${allDbUsers
//             .map((user) => `<li>${user.firstName} - ${user.email}</li>\n`)
//             .join("")}
//       </ul>
//       `;
//   res.send(html);
// });

//Routes

 
router.route("/").get(handleGetAllUsers).post(handleCreateNewUser);

router
  .route("/:id")
  .get(handleGetUserById)
  .patch(handleUpdateUserById)
  .delete(handleDeleteUserById);

module.exports = router;