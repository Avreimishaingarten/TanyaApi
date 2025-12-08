import { middleware } from '#start/kernel'
import router from '@adonisjs/core/services/router'
const ChaptersController = () => import('#controllers/chapters_controller')

export default function chaptersRoutes() {
  router
    .get('/chapters/:id/unit-content/:unit_id?', [ChaptersController, 'chapterUnitContent'])
    .use(middleware.auth())
  router
    .get('/chapters-progress', [ChaptersController, 'chapterWithProgress'])
    .use(middleware.auth())
  router.resource('/chapters', ChaptersController).apiOnly().use('*', middleware.auth())
}
