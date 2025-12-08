import { middleware } from '#start/kernel'
import router from '@adonisjs/core/services/router'
const UnitsController = () => import('#controllers/units_controller')
const UnitContentController = () => import('#controllers/unit_contents_controller')

export default function unitsRoutes() {
  router.get('/:chapter_id/units', [UnitsController, 'unitsByChapter']).use(middleware.auth())
  router.resource('/units', UnitsController).apiOnly().use('*', middleware.auth())
  router
    .resource('/units/:unitId/content', UnitContentController)
    .apiOnly()
    .use('*', middleware.auth())
}
