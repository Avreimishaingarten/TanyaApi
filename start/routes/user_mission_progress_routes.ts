import { middleware } from '#start/kernel'
import router from '@adonisjs/core/services/router'
const UserMissionProgressesController = () =>
  import('#controllers/user_mission_progresses_controller')

export default function userMissionProgressRoutes() {
  router
    .get('/my-user-mission-progress', [
      UserMissionProgressesController,
      'getUserMissionProgressByUserId',
    ])
    .use(middleware.auth())

  router
    .resource('/user-mission-progress', UserMissionProgressesController)
    .apiOnly()
    .use('*', middleware.auth())
}
