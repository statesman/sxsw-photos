define(['backbone'], function(Backbone) {

  return Backbone.Router.extend({

    initialize: function(options) {
      // Store the PeopleCollection; we'll use it to update our views
      this.people = options.people;

      // Initially, set our views based on depth and bind to the scroll so
      // we continue to do so
      this.routeByDepth(this._calcDepth());
      var self = this;
      $(window).on('scroll', _.debounce(function() {
        self.routeByDepth(self._calcDepth());
      }, 100));
    },

    routes: {
      ':person': 'person'
    },

    routeByDepth: function(depth) {
      var active = this.people.getByDepth(depth);

      // TODO: Use an actual model ID or something else meaningful here
      this.navigate(active.cid, {trigger: true, replace: true});
    },

    _calcDepth: function() {
      this.depth = $(window).scrollTop() + $(window).height() * 0.75;
      return this.depth;
    },

    person: function(person) {
      this.people.setActive(person);
    }

  });

});
