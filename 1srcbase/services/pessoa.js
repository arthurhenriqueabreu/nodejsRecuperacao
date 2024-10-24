const ModelPessoa = require('../models/pessoa')

//  Criando a classe servicePessoa
class ServicePessoa{
  GetPessoas() {
    return ModelPessoa.GetPessoas()
  }
  CreatePessoa(name) {
    // fazer verificações - se mandou o name
    return ModelPessoa.CreatePessoa(name)
  }
  UpdatePessoa(id, name) {
    return ModelPessoa.UpdatePessoa(id, name)
  }
  DeletePessoa(id) {
    return ModelPessoa.DeletePessoa(id)
  }
}
module.exports = new ServicePessoa()