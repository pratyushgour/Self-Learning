const User = require("../models/user");

async function handleGetAllUsers(req, res) {
  const allDbUsers = await User.find({});
  return res.json(allDbUsers);
}

async function handleGetUserById(req, res) {
  if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
    return res.status(400).json({ error: "Invalid user ID format" });
  }
  const user = await User.findById(req.params.id);
  if (!user) return res.status(404).json({ error: "user not found" });
  return res.json(user);
}

async function handleUpdateUserById(req, res) {
  if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
    return res.status(400).json({ error: "Invalid user ID format" });
  }
  const user = await User.findByIdAndUpdate(req.params.id, {
    firstName: req.body.first_name
  });
  return res.status(200).json({ msg: "success" });
  // let updatedUsers = users.map((u) =>
  //   u.id === id ? { ...u, first_name: body.first_name } : u
  // );
  // console.log(body.first_name);
  // fs.writeFile(
  //   "./MOCK_DATA.json",
  //   JSON.stringify(updatedUsers),
  //   (err, data) => {
  //     users.length = 0;
  //     users.push(...updatedUsers);
  //     return res.json({ status: "success" });
  //   }
  // );
}

async function handleDeleteUserById(req, res) {
  if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
    return res.status(400).json({ error: "Invalid user ID format" });
  }
  const user = await User.findByIdAndDelete(req.params.id);
  return res.status(200).json({ msg: "success" });
  // const id = Number(req.params.id);
  // const updatedUsers = users.filter((user) => user.id !== id);
  // fs.writeFile(
  //   "./MOCK_DATA.json",
  //   JSON.stringify(updatedUsers),
  //   (err, data) => {
  //     users.length = 0;
  //     users.push(...updatedUsers);
  //     return res.json({ status: "success", id: id + " deleted" });
  //   }
  // );
}

async function handleCreateNewUser(req, res) {
  const apiKey = req.headers["x-api-key"]; // Custom header
  if (apiKey !== "123456") {
    return res.status(403).json({ error: "Unauthorized access" });
  }
  const body = req.body;
  if (!body || !body.first_name || !body.last_name) {
    return res.status(400).json({ status: "Some fields are missing." });
  }

  const result = await User.create({
    firstName: body.first_name,
    lastName: body.last_name,
    email: body.email,
    gender: body.gender,
    jobTitle: body.job_title,
  });

  console.log("result:" + result);

  return res.status(201).json({ msg: "success" });

  //   users.push({ ...body, id: users.length + 1 });
  //   fs.writeFile("./MOCK_DATA.json", JSON.stringify(users), (err, data) => {
  //     return res.status(201).json({ status: "sucess", id: users.length });
  //   });
}

module.exports = {
  handleGetAllUsers,
  handleGetUserById,
  handleUpdateUserById,
  handleDeleteUserById,
  handleCreateNewUser
};
