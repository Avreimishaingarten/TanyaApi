import { middleware } from '#start/kernel'
import router from '@adonisjs/core/services/router'
const AuthController = () => import('#controllers/auth_controller')

export default function authRoutes() {
  router.post('/login', [AuthController, 'login'])
  router.get('/me', [AuthController, 'me']).use(middleware.auth())
  router.delete('/logout', [AuthController, 'logout']).use(middleware.auth())
}
