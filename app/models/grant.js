import DS from 'ember-data';

export default DS.Model.extend({
    number: DS.attr('string'),
    agency: DS.attr('string'),
    creator: DS.belongsTo('user')
});
