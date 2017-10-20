import Ember from 'ember';

export default Ember.Component.extend({
  isOpen: false,
  actions: {
    fireChef(chef) {
      chef.destroyRecord();
    },
    toggleChef(chef) {
      chef.toggleProperty('isCooking')
    },
    toggleOpen() {
      this.toggleProperty('isOpen')
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
