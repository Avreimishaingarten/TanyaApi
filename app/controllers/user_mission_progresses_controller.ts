import type { HttpContext } from '@adonisjs/core/http'
import UserMissionProgress from '#models/user_mission_progress'

export default class UserMissionProgressesController {
  async index({}: HttpContext) {
    return UserMissionProgress.all()
  }

  async store({ request, response }: HttpContext) {
    const data = request.only(['missionId', 'progress', 'userId'])
    const missionProgress = await UserMissionProgress.create(data)
    return response.created(missionProgress)
  }

  async show({ params }: HttpContext) {
    return UserMissionProgress.findOrFail(params.id)
  }

  async update({ params, request }: HttpContext) {
    const missionProgress = await UserMissionProgress.findOrFail(params.id)
    const data = request.only(['progress'])
    missionProgress.merge(data)
    await missionProgress.save()
    return missionProgress
  }

  async destroy({ params, response }: HttpContext) {
    const missionProgress = await UserMissionProgress.findOrFail(params.id)
    await missionProgress.delete()
    return response.noContent()
  }

  async getUserMissionProgressByUserId({ auth }: HttpContext) {
    const user = auth.getUserOrFail()
    return UserMissionProgress.query().where('user_id', user.id)
  }
}
