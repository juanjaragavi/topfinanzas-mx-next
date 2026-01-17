module.exports = {
  apps: [
    {
      name: "topfinanzas-mx-next",
      script: "npm",
      args: "start",
      cwd: "/var/www/html/topfinanzas-mx-next",
      env: {
        PORT: 3030,
        NODE_ENV: "production",
      },
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: "1G",
    },
  ],
};
