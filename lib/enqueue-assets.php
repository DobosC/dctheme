<?php

function dctheme_assets()
{
    wp_enqueue_style('dctheme-stylesheet', get_template_directory_uri() . '/dist/assets/css/bundle.css', array(), '1.0.0', 'all');
    wp_enqueue_script('dctheme-scripts', get_template_directory_uri() . '/dist/assets/js/bundle.js', array('jquery'), '1.0.0', true);
}

add_action('wp_enqueue_scripts', 'dctheme_assets');


function dctheme_admin_assets()
{
    wp_enqueue_style('dctheme-admin-stylesheet', get_template_directory_uri() . '/dist/assets/css/admin.css', array(), '1.0.0', 'all');
    wp_enqueue_script('dctheme-admin-scripts', get_template_directory_uri() . '/dist/assets/js/admin.js', array(), '1.0.0', true);
}

add_action('admin_enqueue_scripts', 'dctheme_admin_assets');
