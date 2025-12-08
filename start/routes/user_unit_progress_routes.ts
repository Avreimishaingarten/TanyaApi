import { middleware } from '#start/kernel'
import router from '@adonisjs/core/services/router'
const UserUnitProgressesController = () => import('#controllers/user_unit_progresses_controller')

export default function userUnitProgressRoutes() {
  router
    .get('/user-unit-progress/unit/:unit_id', [UserUnitProgressesController, 'unitProgressByUnit'])
    .use(middleware.auth())
  router
    .resource('/user-unit-progress', UserUnitProgressesController)
    .apiOnly()
    .use('*', middleware.auth())
}
