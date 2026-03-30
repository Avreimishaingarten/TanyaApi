import type { HttpContext } from '@adonisjs/core/http'
import UserUnitProgress from '#models/user_unit_progress'

export default class UserUnitProgressesController {
  async index({}: HttpContext) {
    return UserUnitProgress.all()
  }

  async store({ request, response }: HttpContext) {
    const data = request.only(['learnCompleted', 'fillCompleted', 'userId', 'unitId'])
    const progress = await UserUnitProgress.create(data)
    return response.created(progress)
  }

  async show({ params }: HttpContext) {
    return UserUnitProgress.findOrFail(params.id)
  }

  async update({ params, request }: HttpContext) {
    const progress = await UserUnitProgress.findOrFail(params.id)
    const data = request.only(['learnCompleted', 'fillCompleted'])
    progress.merge(data)
    await progress.save()
    return progress
  }

  async destroy({ params, response }: HttpContext) {
    const progress = await UserUnitProgress.findOrFail(params.id)
    await progress.delete()
    return response.noContent()
  }

  async unitProgressByUnit({ params, auth }: HttpContext) {
    const user = auth.getUserOrFail()
    return UserUnitProgress.query()
      .where('unit_id', params.unit_id)
      .where('user_id', user.id)
      .first()
  }
}
