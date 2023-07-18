import Tour from "../models/tourModel.js";

const getAllTours = async (req, res) => {
  try {
    const tours = await Tour.find();
    res.status(200).json({
      status: "success",
      data: {
        tours: tours,
      },
    });
  } catch (error) {
    res.status(404).json({
      message: error,
    });
  }
};

const createTours = async (req, res) => {
  try {
    const newTour = await Tour.create(req.body);
    res.status(201).json({
      status: "success",
      data: {
        tour: newTour,
      },
    });
  } catch (error) {
    res.status(404).json({
      message: error,
    });
  }
};

const getTour = async (req, res) => {
  try {
    const tour = await Tour.findById(req.params.id);
    res.status(200).json({
      status: "success",
      data: {
        tour: tour,
      },
    });
  } catch (error) {
    res.status(404).json({
      message: error,
    });
  }
};

const updateTour = async (req, res) => {
  try {
    const updatedTour = await Tour.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    res.status(200).json({
      status: "success",
      data: {
        tours: updatedTour,
      },
    });
  } catch (error) {}
};

const deleteTour = async (req, res) => {
  try {
    const tour = await Tour.findByIdAndDelete(req.params.id);
    const tours = await Tour.find();
    res.status(201).json({
      status: "success",
      data: {
        tours,
      },
    });
  } catch (error) {
    res.status(404).json({
      message: error,
    });
  }
};

export { createTours, getAllTours, getTour, updateTour, deleteTour };
