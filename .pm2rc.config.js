module.exports = {
  apps: [
    {
      name: 'api-prod',
      script: './scripts/start.js',

      instances: 1,
      autorestart: true,
      watch: true,
      max_memory_restart: '1G'
    },
    {
      name: 'api-dev',
      script: './scripts/build.js',

      instances: 1,
      autorestart: true,
      watch: true,
      max_memory_restart: '1G'
    }
  ]
}
