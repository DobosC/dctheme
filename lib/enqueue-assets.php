<?php

function dctheme_assets()
{
    wp_enqueue_style('dctheme-stylesheet', get_template_directory_uri() . '/dist/assets/css/app.css', array(), '1.0.0', 'all');
    wp_enqueue_script('dctheme-scripts', get_template_directory_uri() . '/dist/assets/js/app.js', array('jquery'), '1.0.0', true);
}

add_action('wp_enqueue_scripts', 'dctheme_assets');
