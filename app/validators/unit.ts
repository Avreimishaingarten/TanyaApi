import vine from '@vinejs/vine'

const name = vine.string()
const description = vine.string()
const order = vine.number()
const chapterId = vine.number()

export const createUnitValidator = vine.compile(
  vine.object({
    name,
    description,
    order,
    chapter_id: chapterId,
  })
)

export const updateUnitValidator = vine.compile(
  vine.object({
    name: name.optional(),
    description: description.optional(),
    order: order.optional(),
  })
)
