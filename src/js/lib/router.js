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

      // Listen for for a manual change from the collection and scroll to match
      this.people.on('manualPersonChange', function(person) {
        self.scrollToPerson(person);
      });
    },

    /*
     * Define our routes
     */
    routes: {
      ':person': 'person'
    },

    /*
     * Given the passed depth, determine what person is active and update
     * the router
     */
    routeByDepth: function(depth) {
      var active = this.people.getByDepth(depth);

      // TODO: Use an actual model ID or something else meaningful here
      this.navigate(active.cid, {trigger: true, replace: true});
    },

    /*
     * Scroll to a person in the collection, which will trigger routing and
     * update everything else
     */
    scrollToPerson: function(person) {
      var toDepth = person.get('offset') - $('#controls').outerHeight() - $(window).height() * 0.5;
      $('html, body').animate({
        scrollTop: toDepth
      }, 500);
    },

    /*
     * A helper to calculate the depth we'll use to make routing decisions
     */
    _calcDepth: function() {
      this.depth = $(window).scrollTop() + $(window).height() * 0.75;
      return this.depth;
    },

    /*
     * The person route
     */
    person: function(person) {
      this.people.setActive(person);
    }

  });

});
