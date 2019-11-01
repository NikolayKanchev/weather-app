var ghpages = require('gh-pages');
 
ghpages.publish('build', {
    branch: 'master',
    message: "Auto-commit",
    repo: 'https://github.com/NikolayKanchev/NikolayKanchev.github.io.git',
    dest: "weather-app"
}, 
function(err) {
    if (err) {
        console.log(err);   
    }
});