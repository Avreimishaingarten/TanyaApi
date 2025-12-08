import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'units'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('name').notNullable()
      table.string('description').notNullable()
      table.integer('order').notNullable()
      table.integer('chapter_id').unsigned().references('chapters.id').onDelete('CASCADE')
      table.timestamp('created_at')
      table.timestamp('updated_at')
    })

    this.defer(async (db) => {
      await db.table(this.tableName).insert([
        {
          id: 1,
          order: 1,
          name: 'Unit 1',
          description: 'וְהִנֵּה כָּל בְּחִינָה... חֶסֶד גְּבוּרָה תִּפְאֶרֶת כוּ',
          chapter_id: 1,
          created_at: new Date(),
          updated_at: new Date(),
        },
      ])
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}
