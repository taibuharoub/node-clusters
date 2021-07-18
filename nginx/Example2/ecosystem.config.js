module.exports = {
  apps: [{
    name: 'Express API - 1',
    script: 'server.js',
    args: 'EXPRESS REST API - 1',
    instances: 1,
    autorestart: true,
    watch: false,
    max_memory_restart: '1G',
    env: {
      NODE_ENV: 'development',
      PORT: 3000
    }
  },
  {
    name: 'Express API - 2',
    script: 'server.js',
    args: 'EXPRESS REST API - 2',
    instances: 1,
    autorestart: true,
    watch: false,
    max_memory_restart: '1G',
    env: {
      NODE_ENV: 'development',
      PORT: 3001
    }
  }]
};