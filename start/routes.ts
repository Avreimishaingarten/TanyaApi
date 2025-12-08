import router from '@adonisjs/core/services/router'
import authRoutes from './routes/auth_routes.js'
import chaptersRoutes from './routes/chapters_routes.js'
import leaderboardRoutes from './routes/leaderboard.js'
import practiceFillRoutes from './routes/practice_fill_routes.js'
import unitsRoutes from './routes/units_routes.js'
import userMissionProgressRoutes from './routes/user_mission_progress_routes.js'
import userRoutes from './routes/user_routes.js'
import userUnitProgressRoutes from './routes/user_unit_progress_routes.js'

router
  .group(() => {
    router.get('/', async () => {
      return { ping: 'pong', version: '0.0.2' }
    })

    userRoutes()
    authRoutes()
    chaptersRoutes()
    unitsRoutes()
    practiceFillRoutes()
    userUnitProgressRoutes()
    userMissionProgressRoutes()
    leaderboardRoutes()
  })
  .prefix('/api')
