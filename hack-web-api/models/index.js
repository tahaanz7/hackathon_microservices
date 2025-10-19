const Project = require('./Project');
const Hack = require('./Hack');

Hack.hasMany(Project, {foreignKey:'idHack', as:'projects'});
Project.belongsTo(Hack,{foreignKey:'idHack', as:'hack'})

module.exports = {Hack, Project};