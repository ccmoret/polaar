module.exports = {
  apps: [
    {
      instances: 1,
      max_restarts: 10,
      merge_logs: false,
      script: './index.js',
      max_memory_restart: '200M'
    }
  ]
};
