<?php

/*
  Plugin Name: Link Tracker for Monster Insights & Piwik
  Plugin URI: http://marc.tv
  GitHub Plugin URI: mtoensing/google-analytics-linktracker
  Description: Track internal links as events.
  Version: 1.8
  Author: Marc Tönsing
  Author URI: http://marc.tv
  License: Creative Commons Attribution-ShareAlike

  This program is free software; you can redistribute it and/or modify
  it under the terms of the GNU General Public License as published by
  the Free Software Foundation; either version 2 of the License, or
  (at your option) any later version.
 */


function ga_link_tracker_load_scripts() {

	$version = '1.8';

	wp_enqueue_script(
		"linktracker-googleanalytics", WP_PLUGIN_URL . "/google-analytics-linktracker/jquery.linktracker.js", array( "jquery" ), $version, true );
}

if ( ! is_admin() ) {
	add_action( 'wp_enqueue_scripts', 'ga_link_tracker_load_scripts' );
}

?>