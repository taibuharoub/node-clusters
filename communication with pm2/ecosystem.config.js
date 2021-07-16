module.exports = {
  apps : [{
    name: "Express App",
    script: 'server.js',
    instances: 2,
    autorestart: true,
    exec_mode: "cluster",
    watch: true,
    max_memory_restart: "1G"
  }, {
    name: 'Worker1',
    script: 'workers/fab-series-worker1.js',
    instances: 1
  }, {
    name: 'Worker2',
    script: 'workers/fab-series-worker2.js',
    instances: 1
  }]
};
