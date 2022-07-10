// los controladores se encargan de realizar la logica del negocio
// se coloca el codigo de logica de negocio
// d
class RoleController {
  constructor (servicesRole, role) {
    this._service = servicesRole
    this._entity = role
  }

  getAllRole () {
    const response = this._service.all('role')
    return response
  }

  createNewRole (role) {
    const newRole = new this._entity(role)
    console.table(newRole)
    const response = this._service.save('role', newRole)
    return response
  }

  updateRole (role) {
    console.log(role)
    return 'update role'
  }

  deleteRole (id) {
    const response = this._service.delete('role', id)
    return response
  }
}

export default RoleController
