import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'practice_fills'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.integer('index').notNullable()
      table.string('text').notNullable()
      table.json('options').notNullable()
      table.integer('unit_id').unsigned().references('units.id').onDelete('CASCADE')
      table.timestamp('created_at')
      table.timestamp('updated_at')
    })

    this.defer(async (db) => {
      await db.table(this.tableName).insert([
        {
          id: 1,
          index: 1,
          text: 'וְהִנֵּה כָּל *אָדָם* וּמַדְרֵגָה *מִשָּׁלֹשׁ* אֵלּוּ',
          options: JSON.stringify([
            'אָדָם',
            'נֶפֶשׁ',
            'בְּחִינָה',
            'סְפִירָה',
            'מִדוֹת',
            'שֵׂכֶל',
            'מִשָּׁלֹשׁ',
          ]),
          unit_id: 1,
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
