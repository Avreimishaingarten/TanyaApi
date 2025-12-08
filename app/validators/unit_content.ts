import vine from '@vinejs/vine'

const index = vine.number()
const title = vine.string()
const content = vine.string()
const audioName = vine.string()
const unitId = vine.number()

export const createUnitContentValidator = vine.compile(
  vine.object({
    index,
    title,
    content,
    audio_name: audioName,
    unit_id: unitId,
  })
)

export const updateUnitContentValidator = vine.compile(
  vine.object({
    index: index.optional(),
    title: title.optional(),
    content: content.optional(),
    audio_name: audioName.optional(),
    unit_id: unitId.optional(),
  })
)
