class ControllerExercicio3{
  PegarTodos(req, res) {
    req.status(200).json({ resultados : [0, 1]})
  }
}

module.exports = ControllerExercicio3