import vine from '@vinejs/vine'

const password = vine.string().minLength(8)

export const createUserValidator = vine.compile(
  vine.object({
    full_name: vine.string(),
    email: vine
      .string()
      .email()
      .normalizeEmail()
      .unique(async (db, value) => {
        const match = await db.from('users').select('id').where('email', value).first()

        return !match
      }),
    password,
    confirm_password: password,
  })
)

export const updateUserValidator = vine.compile(
  vine.object({
    full_name: vine.string().optional(),
    email: vine
      .string()
      .email()
      .optional(),
    current_password: password.optional(),
    new_password: password.optional().requiredIfExists('current_password'),
    confirm_new_password: password.optional().requiredIfExists('current_password'),
    difficulty: vine.string().optional(),
  })
)
