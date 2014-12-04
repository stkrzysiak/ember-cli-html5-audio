//import/export concept -> ES6 modules -> http://jsmodules.io/

import Ember from 'ember';

export default Ember.Component.extend({
	//if no url is passed in, let's play a default song
	url: 'https://upload.wikimedia.org/wikipedia/commons/b/bb/Test_ogg_mp3_48kbps.wav',
	src: Ember.computed('url', 'length', 'width', function () {
	  if(this.get('url') === undefined) {
	  	//an unresolved url is passed in
        return 'http://example.com/undefined.mp3';
      }
      else {
      	//after the bound attribute is resolved.
      	return this.get('url');
      }
	} )
});
