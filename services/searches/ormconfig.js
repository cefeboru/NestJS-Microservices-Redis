module.exports = {
  type: 'mysql',
  host: process.env.DB_HOST || 'locahost',
  port: process.env.DB_PORT || 3306,
  username: process.env.DB_USERNAME || 'root',
  password: process.env.DB_PASSWORD || 'root',
  database: process.env.DB_NAME || 'test',
  entities: ['dist/**/*.entity.js'],
  migrations: ['dist/migrations/**.js'],
  cli: {
    migrationsDir: 'src/migrations',
  },
  synchronize: true, // Only for demo purposes, but we should not do this in production apps
};
