import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'chapters'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('name').notNullable()
      table.string('principal_color').notNullable()
      table.string('icon_color').notNullable()
      table.string('background_color').notNullable()
      table.integer('order').notNullable()
      table.timestamp('created_at')
      table.timestamp('updated_at')
    })

    this.defer(async (db) => {
      await db.table(this.tableName).insert([
        {
          id: 1,
          order: 1,
          name: 'Perek Alef',
          principal_color: '#2E85DE',
          icon_color: '#DE872E',
          background_color: '#2e85de1a',
          created_at: new Date().toISOString(),
          updated_at: new Date().toISOString(),
        },
        {
          id: 2,
          order: 2,
          name: 'Perek Beis',
          principal_color: '#1CC4AB',
          icon_color: '#1cc457',
          background_color: '#1cc4ab1a',
          created_at: new Date().toISOString(),
          updated_at: new Date().toISOString(),
        },
        {
          id: 3,
          order: 3,
          name: 'Perek Gimel',
          principal_color: '#FB575A',
          icon_color: '#fba657',
          background_color: '#ffefef',
          created_at: new Date().toISOString(),
          updated_at: new Date().toISOString(),
        },
        {
          id: 4,
          order: 4,
          name: 'Perek Daled',
          principal_color: '#DCDCDC',
          icon_color: '#DCDCDC',
          background_color: '#ffefef',
          created_at: new Date().toISOString(),
          updated_at: new Date().toISOString(),
        },
      ])
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}
