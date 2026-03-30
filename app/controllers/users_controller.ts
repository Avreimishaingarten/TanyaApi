import type { HttpContext } from '@adonisjs/core/http'
import User from '#models/user'

export default class UsersController {
  async index({}: HttpContext) {
    return User.all()
  }

  async store({ request, response }: HttpContext) {
    const data = request.only(['fullName', 'email', 'password', 'difficulty'])
    const user = await User.create(data)
    return response.created(user)
  }

  async show({ params }: HttpContext) {
    return User.findOrFail(params.id)
  }

  async update({ params, request }: HttpContext) {
    const user = await User.findOrFail(params.id)
    const data = request.only(['fullName', 'email', 'difficulty', 'consecutiveLoggedDays'])
    user.merge(data)
    await user.save()
    return user
  }

  async destroy({ params, response }: HttpContext) {
    const user = await User.findOrFail(params.id)
    await user.delete()
    return response.noContent()
  }
}
