import { middleware } from '#start/kernel'
import router from '@adonisjs/core/services/router'
const PracticeFillsController = () => import('#controllers/practice_fills_controller')

export default function practiceFillRoutes() {
  router
    .get('/:unit_id/practice-fill', [PracticeFillsController, 'getAllByUnitId'])
    .use(middleware.auth())
  router.resource('/practice-fill', PracticeFillsController).apiOnly().use('*', middleware.auth())
}
