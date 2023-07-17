const getAllUsers = (req, res) => {
  res.status(200).json({
    message: "From Users Get API",
  });
};

const CreateUsers = (req, res) => {
  res.status(200).json({
    message: "From Users Post API",
  });
};

const getUser = (req, res) => {
  res.status(200).json({
    message: "From Users Get API Id",
  });
};

const updateUser = (req, res) => {
  res.status(200).json({
    message: "From Users Patch API",
  });
};

const deleteUser = (req, res) => {
  res.status(200).json({
    message: "From Users Delete API",
  });
};

export { getAllUsers, getUser, CreateUsers, deleteUser, updateUser };
