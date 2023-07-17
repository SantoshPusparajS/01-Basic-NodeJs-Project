const getAllTours = (req, res) => {
  res.status(200).json({
    status: "Success",
    message: "Hello from get tours",
  });
};

const createTours = (req, res) => {
  res.status(201).json({
    status: "Success",
    data: {
      body: req.body,
    },
  });
};

const getTour = (req, res) => {
  const params = req.params;
  console.log(req.params);

  const id = params.id * 1;

  //const tour = tours.find(el => el.id === id)

  res.status(200).json({
    status: "success",
    message: "done!",
  });
};

const updateTour = (req, res) => {
  res.status(200).json({
    message: "Updated Successfully!",
  });
};

const deleteTour = (req, res) => {
  res.status(204).json({
    message: "Done",
  });
};

export { createTours, getAllTours, getTour, updateTour, deleteTour };
