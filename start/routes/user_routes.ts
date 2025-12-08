import { middleware } from '#start/kernel'
import router from '@adonisjs/core/services/router'
const UsersController = () => import('#controllers/users_controller')

export default function userRoutes() {
  router.resource('/user', UsersController).apiOnly().use(['index', 'destroy'], middleware.auth())
}
