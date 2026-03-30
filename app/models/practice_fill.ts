import { DateTime } from 'luxon'
import { BaseModel, column, belongsTo } from '@adonisjs/lucid/orm'
import type { BelongsTo } from '@adonisjs/lucid/types/relations'
import Unit from './unit.js'

export default class PracticeFill extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare index: number

  @column()
  declare text: string

  @column({ consume: (value: string) => JSON.parse(value) })
  declare options: string[]

  @column()
  declare unitId: number

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime

  @belongsTo(() => Unit)
  declare unit: BelongsTo<typeof Unit>
}
