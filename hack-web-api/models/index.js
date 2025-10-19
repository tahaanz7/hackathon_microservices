const Hack = require('./Hack');
const Criteria = require('./Criteria')

Hack.hasMany(Critere, { foreignKey: 'hackId', as: 'criteres' });
Criteria.belongsTo(Hack, { foreignKey: 'hackId', as: 'hack' });


module.exports = {Hack, Project};