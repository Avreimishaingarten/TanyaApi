import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'unit_contents'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.integer('index').notNullable()
      table.string('title').notNullable()
      table.string('content').notNullable()
      table.string('audio_name').notNullable()
      table.integer('unit_id').unsigned().references('units.id').onDelete('CASCADE')
      table.timestamp('created_at')
      table.timestamp('updated_at')
    })

    this.defer(async (db) => {
      await db.table(this.tableName).insert([
        {
          id: 1,
          index: 1,
          title: 'Keta 1',
          content: "פרק א תניא [בסוף פרק ג' דנדה]",
          audio_name: '1HHsm_1.mp3',
          unit_id: 1,
          created_at: new Date().toISOString(),
          updated_at: new Date().toISOString(),
        },
        {
          id: 2,
          index: 2,
          title: 'Keta 2',
          content: 'משביעים אותו תהי צדיק ואל תהי רשע',
          audio_name: '1HHsm_2.mp3',
          unit_id: 1,
          created_at: new Date().toISOString(),
          updated_at: new Date().toISOString(),
        },
        {
          id: 3,
          index: 3,
          title: 'Keta 3',
          content: 'ואפילו כל העולם כולו אומרים לך צדיק אתה',
          audio_name: '1HHsm_3.mp3',
          unit_id: 1,
          created_at: new Date().toISOString(),
          updated_at: new Date().toISOString(),
        },
        {
          id: 4,
          index: 4,
          title: 'Keta 4',
          content: 'היה בעיניך כרשע',
          audio_name: '1HHsm_4.mp3',
          unit_id: 1,
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
