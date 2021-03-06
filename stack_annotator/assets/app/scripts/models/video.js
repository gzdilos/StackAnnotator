
define([
  'jquery',
  'underscore',
  'backbone',
  'config'
], function($, _, Backbone, Config){
    var Video = Backbone.Model.extend({
        idAttribute: "id",
        post: function() {
            var self = this;
            var postUrl = Config.stackannotator.api_url_root + Config.stackannotator.videos_endpoint;
            return $.post(postUrl, self.attributes).done(
              function(data){
                 console.log(data);
              }
            );
        },
        incrementAttr: function(attrType) {
            var self = this;
            var postUrl = Config.stackannotator.api_url_root + Config.stackannotator.video_endpoint;
            return $.post(postUrl + '/' + this.id +'/' + attrType).done(function(data) {
                self.set(data);
            });
        }
    });
    return Video;
});