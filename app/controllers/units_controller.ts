import type { HttpContext } from '@adonisjs/core/http'
import Unit from '#models/unit'

export default class UnitsController {
  async index({}: HttpContext) {
    return Unit.query().orderBy('order', 'asc')
  }

  async store({ request, response }: HttpContext) {
    const data = request.only(['name', 'description', 'order', 'chapterId'])
    const unit = await Unit.create(data)
    return response.created(unit)
  }

  async show({ params }: HttpContext) {
    return Unit.findOrFail(params.id)
  }

  async update({ params, request }: HttpContext) {
    const unit = await Unit.findOrFail(params.id)
    const data = request.only(['name', 'description', 'order', 'chapterId'])
    unit.merge(data)
    await unit.save()
    return unit
  }

  async destroy({ params, response }: HttpContext) {
    const unit = await Unit.findOrFail(params.id)
    await unit.delete()
    return response.noContent()
  }

  async unitsByChapter({ params }: HttpContext) {
    return Unit.query().where('chapter_id', params.chapter_id).orderBy('order', 'asc')
  }
}
