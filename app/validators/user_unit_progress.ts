import vine from '@vinejs/vine'

const learnCompleted = vine.boolean().optional()
const fillCompleted = vine.boolean().optional()
const unitId = vine.number()
const userId = vine.number()

export const createUserUnitProgressValidator = vine.compile(
  vine.object({
    learn_completed: learnCompleted,
    fill_completed: fillCompleted,
    user_id: userId,
    unit_id: unitId,
  })
)

export const updateUserUnitProgresValidator = vine.compile(
  vine.object({
    learn_completed: learnCompleted,
    fill_completed: fillCompleted,
    user_id: userId.optional(),
    unit_id: unitId.optional(),
  })
)
