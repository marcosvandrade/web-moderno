const tarefa1 = schedule.scheduleJob('*/5 * 12 * * 2', function () {
    console.log('Executando Tarefa 1!', new Date().getSeconds())
})