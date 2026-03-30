import app from '@adonisjs/core/services/app'
import env from '#start/env'
import { defineConfig } from '@adonisjs/lucid'

const dbConfig = defineConfig({
  connection: env.get('DB_CONNECTION', 'sqlite'),
  connections: {
    sqlite: {
      client: 'better-sqlite3',
      connection: {
        filename: app.makePath('database/db.sqlite3'),
      },
      useNullAsDefault: true,
      migrations: {
        naturalSort: true,
        paths: ['database/migrations'],
      },
    },
    pg: {
      client: 'pg',
      connection: env.get('DATABASE_URL', ''),
      migrations: {
        naturalSort: true,
        paths: ['database/migrations'],
      },
    },
    mysql: {
      client: 'mysql2',
      connection: {
        host: env.get('DB_HOST'),
        port: env.get('DB_PORT'),
        user: env.get('DB_USER'),
        password: env.get('DB_PASSWORD'),
        database: env.get('DB_DATABASE'),
      },
      migrations: {
        naturalSort: true,
        paths: ['database/migrations'],
      },
    },
  },
})

export default dbConfig