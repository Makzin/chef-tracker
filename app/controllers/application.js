import Ember from 'ember';

export default Ember.Controller.extend({
  chefRoster: Ember.computed.alias('model.length'),
  chefStudents: Ember.computed.mapBy('model', 'numberOfStudents'),
  availableChefs: Ember.computed.filterBy('model', 'isCooking', true),
  totalStudents: Ember.computed.sum('chefStudents'),

  actions: {
    enter(chef){
      Ember.set(chef, 'isCooking', true)
      chef.save()
    },
    exit(chef) {
      Ember.set(chef, 'isCooking', false)
      chef.save()
    },
    hireNewChef(newChef) {
      this.store.createRecord('chef', {
        isCooking: false,
        name: this.get('newChef')
      }).save();
      Ember.set(this, 'newChef', '')
    },
    fireChef(chef) {
      chef.destroyRecord();
    },
    addStudent(chef) {
        chef.incrementProperty('numberOfStudents');
        chef.save();
    },
    removeStudent(chef) {
      if (chef.get('numberOfStudents') > 0) {
        chef.decrementProperty('numberOfStudents');
        chef.save();
      }
    }
  }
});

