import vine from '@vinejs/vine'

const name = vine.string().unique(async (db, value) => {
  const match = await db.from('chapters').select('id').where('name', value).first()

  return !match
})

const principalColor = vine.string().unique(async (db, value) => {
  const match = await db.from('chapters').select('id').where('principal_color', value).first()

  return !match
})

const iconColor = vine.string().unique(async (db, value) => {
  const match = await db.from('chapters').select('id').where('icon_color', value).first()

  return !match
})

const order = vine.number().unique(async (db, value) => {
  const match = await db.from('chapters').select('id').where('order', value).first()

  return !match
})

const backgroundColor = vine.string().unique(async (db, value) => {
  const match = await db.from('chapters').select('id').where('background_color', value).first()

  return !match
})

export const createChapterValidator = vine.compile(
  vine.object({
    name,
    principal_color: principalColor,
    icon_color: iconColor,
    background_color: backgroundColor,
    order,
  })
)

export const updateChapterValidator = vine.compile(
  vine.object({
    name: name.optional(),
    principal_color: principalColor.optional(),
    icon_color: iconColor.optional(),
    background_color: backgroundColor.optional(),
    order: order.optional(),
  })
)
