import type { HttpContext } from '@adonisjs/core/http'
import User from '#models/user'
import UserUnitProgress from '#models/user_unit_progress'
import db from '@adonisjs/lucid/services/db'

export default class LeaderboardsController {
  async getLeaderboard({}: HttpContext) {
    const leaderboard = await db
      .from('user_unit_progresses')
      .join('users', 'users.id', 'user_unit_progresses.user_id')
      .select('users.id', 'users.full_name')
      .count('* as completed_units')
      .where('user_unit_progresses.learn_completed', true)
      .groupBy('users.id', 'users.full_name')
      .orderBy('completed_units', 'desc')
      .limit(10)

    return leaderboard
  }

  async getMyPosition({ params }: HttpContext) {
    const userId = params.user_id

    const completedCount = await UserUnitProgress.query()
      .where('user_id', userId)
      .where('learn_completed', true)
      .count('* as total')
      .first()

    const total = Number(completedCount?.$extras.total || 0)

    const higherCount = await db
      .from('user_unit_progresses')
      .select('user_id')
      .where('learn_completed', true)
      .groupBy('user_id')
      .havingRaw('COUNT(*) > ?', [total])

    const user = await User.find(userId)

    return {
      user,
      completed_units: total,
      position: higherCount.length + 1,
    }
  }
}
