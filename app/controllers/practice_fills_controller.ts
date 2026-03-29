import type { HttpContext } from '@adonisjs/core/http'
import PracticeFill from '#models/practice_fill'

export default class PracticeFillsController {
  async index({}: HttpContext) {
    return PracticeFill.query().orderBy('index', 'asc')
  }

  async store({ request, response }: HttpContext) {
    const data = request.only(['index', 'text', 'options', 'unitId'])
    const practiceFill = await PracticeFill.create(data)
    return response.created(practiceFill)
  }

  async show({ params }: HttpContext) {
    return PracticeFill.findOrFail(params.id)
  }

  async update({ params, request }: HttpContext) {
    const practiceFill = await PracticeFill.findOrFail(params.id)
    const data = request.only(['index', 'text', 'options', 'unitId'])
    practiceFill.merge(data)
    await practiceFill.save()
    return practiceFill
  }

  async destroy({ params, response }: HttpContext) {
    const practiceFill = await PracticeFill.findOrFail(params.id)
    await practiceFill.delete()
    return response.noContent()
  }

  async getAllByUnitId({ params }: HttpContext) {
    return PracticeFill.query().where('unit_id', params.unit_id).orderBy('index', 'asc')
  }
}
