const TaskModel = require("../Models/TaskModel");

module.exports.getTasks = async (req, res) => {
  const task = await TaskModel.find();
  res.send(task); //tasks
};

module.exports.saveTask = (req, res) => {
  const { task } = req.body;

  TaskModel.create({ task })
    .then((data) => {
      console.log("Saved Successfully...");
      res.status(201).send(data);
    })
    .catch((err) => {
      console.error(`Error in saving data: ${err}`);
      res.send({ error: err, msg: "Something went wrong!" });
    });
};

module.exports.updateTask = (req, res) => {
  const { id } = req.params;
  const { task } = req.body;
  TaskModel.findByIdAndUpdate(id, { task })
    .then(() => {
      res.send("update SUCCESS")
      console.log("update Successfully...");
    })
    .catch((err) => {
      console.error(`Error in saving data: ${err}`);
      res.send({ error: err, msg: "Something went wrong!" });
    });
};

module.exports.deleteTask = (req, res) => {
  const { id } = req.params;
  TaskModel.findByIdAndRemove(id)
    .then(() => {
      res.send("deleted")
      console.log("Delete Successfully...");
    })
    .catch((err) => {
      console.error(`Error in deleteing data: ${err}`);
      res.send({ error: err, msg: "Something went wrong!" });
    });
};
