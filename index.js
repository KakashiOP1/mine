const { ShardingManager } = require('discord.js');
const manager = new ShardingManager('./bot.js', { token: 'NzQwMjQxODk5NjMzNTA4MzUy.XymJ_Q.bHbalKI3XN8q9ogWauEDE3SsZ8w', totalShards: 2 });

manager.spawn();
manager.on('shardCreate', shard => console.log(`Launched shard ${shard.id}\nWorking....`));