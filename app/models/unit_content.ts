import { DateTime } from 'luxon'
import { BaseModel, column, belongsTo } from '@adonisjs/lucid/orm'
import type { BelongsTo } from '@adonisjs/lucid/types/relations'
import Unit from './unit.js'

export default class UnitContent extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare index: number

  @column()
  declare title: string

  @column()
  declare content: string

  @column()
  declare audioName: string

  @column()
  declare unitId: number

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime

  @belongsTo(() => Unit)
  declare unit: BelongsTo<typeof Unit>
}
