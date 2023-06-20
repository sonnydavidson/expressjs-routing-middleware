let {app} = require('./server');

const server = app.listen(3000, () => {
    console.log("server is now running");
});