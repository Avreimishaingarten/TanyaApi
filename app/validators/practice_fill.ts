import vine from '@vinejs/vine'

async function validateOptions(value: unknown) {
  try {
    const parsedValue = JSON.parse(value as string)
    if (!Array.isArray(parsedValue)) {
      throw new Error('Invalid JSON array')
    }
    if (parsedValue.some((item: any) => typeof item !== 'string')) {
      throw new Error('Array must contain only strings')
    }
    return true
  } catch (err) {
    throw new Error('Invalid JSON format')
  }
}

export const optionsRule = vine.createRule(validateOptions)

const index = vine.number()
const text = vine.string()
const options = vine.string().use(optionsRule())
const unitId = vine.number()

export const createPracticeFillValidator = vine.compile(
  vine.object({
    index,
    text,
    options,
    unit_id: unitId,
  })
)

export const updatePracticeFillValidator = vine.compile(
  vine.object({
    index: index.optional(),
    text: text.optional(),
    options: options.optional(),
    unit_id: unitId.optional(),
  })
)
