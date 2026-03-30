import type { HttpContext } from '@adonisjs/core/http'
import Chapter from '#models/chapter'
import { createChapterValidator, updateChapterValidator } from '#validators/chapter'

export default class ChaptersController {
  async index({}: HttpContext) {
    return Chapter.query().orderBy('order', 'asc')
  }

  async store({ request, response }: HttpContext) {
    const data = await request.validateUsing(createChapterValidator)
    const chapter = await Chapter.create(data)
    return response.created(chapter)
  }

  async show({ params }: HttpContext) {
    return Chapter.findOrFail(params.id)
  }

  async update({ params, request }: HttpContext) {
    const chapter = await Chapter.findOrFail(params.id)
    const data = await request.validateUsing(updateChapterValidator)
    chapter.merge(data)
    await chapter.save()
    return chapter
  }

  async destroy({ params, response }: HttpContext) {
    const chapter = await Chapter.findOrFail(params.id)
    await chapter.delete()
    return response.noContent()
  }

  async chapterUnitContent({ params }: HttpContext) {
    const chapter = await Chapter.findOrFail(params.id)
    const query = chapter.related('units').query().preload('unitContents')
    if (params.unit_id) {
      query.where('id', params.unit_id)
    }
    const units = await query
    return { chapter, units }
  }

  async chapterWithProgress({ auth }: HttpContext) {
    const user = auth.getUserOrFail()
    const chapters = await Chapter.query().orderBy('order', 'asc').preload('units', (unitsQuery) => {
      unitsQuery.preload('userUnitProgresses', (progressQuery) => {
        progressQuery.where('user_id', user.id)
      })
    })
    return chapters
  }
}
