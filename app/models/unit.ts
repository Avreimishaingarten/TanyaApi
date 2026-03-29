import { DateTime } from 'luxon'
import { BaseModel, column, belongsTo, hasMany } from '@adonisjs/lucid/orm'
import type { BelongsTo, HasMany } from '@adonisjs/lucid/types/relations'
import Chapter from './chapter.js'
import UnitContent from './unit_content.js'
import PracticeFill from './practice_fill.js'
import UserUnitProgress from './user_unit_progress.js'

export default class Unit extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare name: string

  @column()
  declare description: string

  @column()
  declare order: number

  @column()
  declare chapterId: number

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime

  @belongsTo(() => Chapter)
  declare chapter: BelongsTo<typeof Chapter>

  @hasMany(() => UnitContent)
  declare unitContents: HasMany<typeof UnitContent>

  @hasMany(() => PracticeFill)
  declare practiceFills: HasMany<typeof PracticeFill>

  @hasMany(() => UserUnitProgress)
  declare userUnitProgresses: HasMany<typeof UserUnitProgress>
}
