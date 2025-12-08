import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'user_unit_progresses'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.boolean('learn_completed').defaultTo(false)
      table.boolean('fill_completed').defaultTo(false)
      table.integer('user_id').unsigned().references('users.id').onDelete('CASCADE')
      table.integer('unit_id').unsigned().references('units.id').onDelete('CASCADE')
      table.timestamp('created_at')
      table.timestamp('updated_at')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}
