// stream.js

// importScripts('../node_modules/mux.js/lib/utils/stream.js');
// importScripts('../node_modules/mux.js/lib/utils/exp-golomb.js');
// importScripts('../node_modules/mux.js/lib/mp4/mp4-generator.js');
// importScripts('../node_modules/mux.js/lib/codecs/aac.js');
// importScripts('../node_modules/mux.js/lib/codecs/h264.js');
// importScripts('../node_modules/mux.js/lib/m2ts/m2ts.js');
// importScripts('../node_modules/mux.js/lib/m2ts/caption-stream.js');
// importScripts('../node_modules/mux.js/lib/m2ts/metadata-stream.js');
// importScripts('../node_modules/mux.js/lib/mp4/transmuxer.js');

/**
 * mux.js
 *
 * Copyright (c) 2014 Brightcove
 * All rights reserved.
 *
 * A lightweight readable stream implemention that handles event dispatching.
 * Objects that inherit from streams should call init in their constructors.
 */
(function(window, muxjs, undefined) {
  var Stream = function() {
    this.init = function() {
      var listeners = {};
      /**
       * Add a listener for a specified event type.
       * @param type {string} the event name
       * @param listener {function} the callback to be invoked when an event of
       * the specified type occurs
       */
      this.on = function(type, listener) {
        if (!listeners[type]) {
          listeners[type] = [];
        }
        listeners[type].push(listener);
      };
      /**
       * Remove a listener for a specified event type.
       * @param type {string} the event name
       * @param listener {function} a function previously registered for this
       * type of event through `on`
       */
      this.off = function(type, listener) {
        var index;
        if (!listeners[type]) {
          return false;
        }
        index = listeners[type].indexOf(listener);
        listeners[type].splice(index, 1);
        return index > -1;
      };
      /**
       * Trigger an event of the specified type on this stream. Any additional
       * arguments to this function are passed as parameters to event listeners.
       * @param type {string} the event name
       */
      this.trigger = function(type) {
        var callbacks, i, length, args;
        callbacks = listeners[type];
        if (!callbacks) {
          return;
        }
        // Slicing the arguments on every invocation of this method
        // can add a significant amount of overhead. Avoid the
        // intermediate object creation for the common case of a
        // single callback argument
        if (arguments.length === 2) {
          length = callbacks.length;
          for (i = 0; i < length; ++i) {
            callbacks[i].call(this, arguments[1]);
          }
        } else {
          args = [];
          i = arguments.length;
          for (i = 1; i < arguments.length; ++i) {
            args.push(arguments[i])
          }
          length = callbacks.length;
          for (i = 0; i < length; ++i) {
            callbacks[i].apply(this, args);
          }
        }
      };
      /**
       * Destroys the stream and cleans up.
       */
      this.dispose = function() {
        listeners = {};
      };
    };
  };
  /**
   * Forwards all `data` events on this stream to the destination stream. The
   * destination stream should provide a method `push` to receive the data
   * events as they arrive.
   * @param destination {stream} the stream that will receive all `data` events
   * @param autoFlush {boolean} if false, we will not call `flush` on the destination
   *                            when the current stream emits a 'done' event
   * @see http://nodejs.org/api/stream.html#stream_readable_pipe_destination_options
   */
  Stream.prototype.pipe = function(destination) {
    this.on('data', function(data) {
      destination.push(data);
    });

    this.on('done', function() {
      destination.flush();
    });

    return destination;
  };

  // Default stream functions that are expected to be overridden to perform
  // actual work. These are provided by the prototype as a sort of no-op
  // implementation so that we don't have to check for their existence in the
  // `pipe` function above.
  Stream.prototype.push = function(data) {
    this.trigger('data', data);
  };
  Stream.prototype.flush = function() {
    this.trigger('done');
  };

  window.muxjs = window.muxjs || {};
  window.muxjs.utils = window.muxjs.utils || {};

  window.muxjs.utils.Stream = Stream;
})(this, this.muxjs);