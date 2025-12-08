import vine from '@vinejs/vine'

const missionId = vine.number()
const progress = vine.number()
const userId = vine.number()

export const createUserMissionProgressValidator = vine.compile(
  vine.object({
    user_id: userId,
    mission_id: missionId,
    progress: progress,
  })
)

export const updateUserMissionProgresValidator = vine.compile(
  vine.object({
    user_id: userId.optional(),
    mission_id: missionId.optional(),
    progress: progress.optional(),
  })
)
