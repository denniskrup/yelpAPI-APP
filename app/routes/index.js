import Route from '@ember/routing/route';
import { queryManager } from 'ember-apollo-client';
import search from 'yelp-api-app/gql/queries/search';

//"garaje-san-francisco"

export default Route.extend({
  apollo: queryManager(),
  queryParams: {
    term: {
      refreshModel: true
    },
    price: {
      refreshModel: true
    },
    location: {
      refreshModel: true
    }
  },
  model(params) {
    if (params.term) {
      var location = params.location || "New York";
      var price = params.price || "1";
      const inputs = { term: params.term, location: location, price: price };
      return this.apollo.watchQuery(
        { query: search, variables: inputs },
        'search'
      );
    }
  }
});

