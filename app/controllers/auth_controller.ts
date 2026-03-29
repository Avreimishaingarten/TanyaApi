import type { HttpContext } from '@adonisjs/core/http'
import User from '#models/user'

export default class AuthController {
  async login({ request, response }: HttpContext) {
    const { email, password } = request.only(['email', 'password'])
    const user = await User.verifyCredentials(email, password)
    const token = await User.accessTokens.create(user)

    return response.ok({
      token: token.toJSON(),
      user,
    })
  }

  async me({ auth, response }: HttpContext) {
    const user = auth.getUserOrFail()
    return response.ok(user)
  }

  async logout({ auth, response }: HttpContext) {
    const user = auth.getUserOrFail()
    await User.accessTokens.delete(user, user.currentAccessToken!.identifier)
    return response.ok({ message: 'Logged out successfully' })
  }
}
