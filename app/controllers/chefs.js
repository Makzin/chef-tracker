import Ember from 'ember';

export default Ember.Controller.extend({
  chefRoster: Ember.computed.alias('model.length'),
  chefStudents: Ember.computed.mapBy('model', 'numberOfStudents'),
  availableChefs: Ember.computed.filterBy('model', 'isCooking', true),
  totalStudents: Ember.computed.sum('chefStudents'),

  actions: {
    hireNewChef(newChef) {
      this.store.createRecord('chef', {
        isCooking: false,
        name: this.get('newChef')
      }).save();
      Ember.set(this, 'newChef', '')
    }
  }
});

