import Controller from '@ember/controller';
import { throttle } from '@ember/runloop';

export default Controller.extend({
  queryParams: ['term', 'location', 'price'],
  term: null,
  location: null,
  price: null,
  actions: {
    updateTerm() {
      debugger;
      throttle(() => {
        this.set('term');
      }, 1000);
    },
    updateLocation() {
      debugger;
      throttle(() => {
        this.set('location');
      }, 1000);
    },
    updatePrice() {
      debugger;
      throttle(() => {
        this.set('price');
      }, 1000);
    },
    searchTerm() {
      const businesses =  this.get('model.business');
      const business = businesses.findBy('name', this.term);
      if (business) {
        this.transitionToRoute('detail', business.id);
      }
      else {
        const firstBusiness = this.get('model.business.firstObject.id');
        if (firstBusiness) {
          this.transitionToRoute('detail', firstBusiness.id);
        }
      }
    }
    
  }
});