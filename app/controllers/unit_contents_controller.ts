import type { HttpContext } from '@adonisjs/core/http'
import UnitContent from '#models/unit_content'

export default class UnitContentsController {
  async index({ params }: HttpContext) {
    return UnitContent.query().where('unit_id', params.unitId).orderBy('index', 'asc')
  }

  async store({ params, request, response }: HttpContext) {
    const data = request.only(['index', 'title', 'content', 'audioName'])
    const unitContent = await UnitContent.create({ ...data, unitId: params.unitId })
    return response.created(unitContent)
  }

  async show({ params }: HttpContext) {
    return UnitContent.findOrFail(params.id)
  }

  async update({ params, request }: HttpContext) {
    const unitContent = await UnitContent.findOrFail(params.id)
    const data = request.only(['index', 'title', 'content', 'audioName'])
    unitContent.merge(data)
    await unitContent.save()
    return unitContent
  }

  async destroy({ params, response }: HttpContext) {
    const unitContent = await UnitContent.findOrFail(params.id)
    await unitContent.delete()
    return response.noContent()
  }
}
