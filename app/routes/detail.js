import Route from '@ember/routing/route';
import { queryManager } from "ember-apollo-client";
import query from 'yelp-api-app/gql/queries/business';


export default Route.extend({
      //inject apollo
      apollo: queryManager(),
      //define the model to make calls to the API
      model(params) {
          const variables = {id: params.id};
          return this.apollo.watchQuery({ query, variables }, 'business');
      }
});
