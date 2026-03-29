import { NextFn } from '@adonisjs/core/types/http'
import { HttpContext } from '@adonisjs/core/http'

export default class ForceJsonResponseMiddleware {
  async handle({ request }: HttpContext, next: NextFn) {
    const headers = request.headers()
    headers.accept = 'application/json'
    return next()
  }
}
