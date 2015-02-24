define(['backbone', 'leaflet'], function(Backbone, L) {

  'use strict';

  // Based on: http://kempe.net/blog/2014/06/14/leaflet-pan-zoom-image.html

  return Backbone.View.extend({

    initialize: function(options) {
      // Init the Leaflet map
      this.map = L.map(this.el, {
        minZoom: 1,
        maxZoom: 4,
        center: [0, 0],
        zoom: 1,
        crs: L.CRS.Simple,
        touchZoom: false,
        scrollWheelZoom: false,
        doubleClickZoom: false,
        boxZoom: false,
        tap: false,
        keyboard: false
      });

      // When the photo changes, update the map's imageOverlay
      this.collection.on('personChange', this.focusPerson, this);
    },

    /*
     * Setup the imageOverlay and add it to the map
     */
    _setupImage: function(photo) {
      // Calculate image edges, in coordinates
      var sw = this.map.unproject([0, photo.h()]);
      var ne = this.map.unproject([photo.w(), 0]);
      var bounds = new L.LatLngBounds(sw, ne);

      // Store the image layer for later
      this.image = L.imageOverlay(photo.url(), bounds);

      // Add the image to the map
      this.image.addTo(this.map);

      // Keep the map from zooming outside the image
      this.map.setMaxBounds(bounds);
    },

    /*
     * Change the imageOverlay if we're changing images
     */
    _changeImage: _.noop,

    /*
     * Setup an image layer and add it to the map
     */
    focusPerson: function(person) {
      //console.log(this.map);
      //console.log(this.map.getBounds());
      //console.log(this.map.options.maxBounds);

      if(typeof this.image === "undefined") {
        this._setupImage(person.photo);
      }

      // Create a LatLngBounds around the person and focus on it
      var focusBounds = new L.LatLngBounds(
        person.ne(this.map.options.maxBounds),
        person.sw(this.map.options.maxBounds)
      );

      this.map.fitBounds(focusBounds, {
        animate: true,
        padding: [10, 10],
        pan: {
          duration: 1
        }
      });
    }

  });

});
