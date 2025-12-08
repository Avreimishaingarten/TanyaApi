import { middleware } from '#start/kernel'
import router from '@adonisjs/core/services/router'
const LeaderboardsController = () => import('#controllers/leaderboards_controller')

export default function leaderboardRoutes() {
  router.get('/leaderboard', [LeaderboardsController, 'getLeaderboard']).use(middleware.auth())
  router
    .get('/my-position/:user_id', [LeaderboardsController, 'getMyPosition'])
    .use(middleware.auth())
}
