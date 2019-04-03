module.exports = {
  apps: [
    {
      instances: 1,
      max_restarts: 10,
      merge_logs: false,
      script: 'pm2-next',
      max_memory_restart: '200M'
    }
  ]
};
