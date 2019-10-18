import Controller from '@ember/controller';

export default Controller.extend({
    actions: {
        save() {
            const newFavorite = this.store.createRecord('favorite',{
                name: this.get('model.business.name'),
                yelpid: this.get('model.business.id')
            });
            newFavorite.save().then((favorite)=> {
                debugger;
                this.set('model.favorite', favorite);
            });
        },
        unsave() {
            this.get('model.favorite').destroyRecord().then(()=> {
                this.set('model.favorite', undefined);
            });
        }
    }
});
