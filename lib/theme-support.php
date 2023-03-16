<?php

function dctheme_theme_support()
{
    add_theme_support('title-tag');
    add_theme_support('post-thumbnails');
    add_theme_support('automatic-feed-links');
    add_theme_support('html5', array('search-form', 'comment-list', 'comment-form', 'gallery', 'caption'));
    add_theme_support('customize-selective-refresh-widgets');
    add_theme_support('custom-logo', array(
        'height' => 200,
        'width' => 132,
        'flex-height' => true,
        'flex-width' => true
    ));
    add_theme_support('post-formats', array(
        'aside',
        'image',
        'video',
        'quote',
        'link',
        'gallery',
        'audio',
    ));
    add_theme_support('align-wide');

    add_theme_support('post-thumbnails');

    set_post_thumbnail_size(350, 200, true);
    add_image_size('portrait', 1150, 600, false);
    add_image_size('square', 600, 500, false);
    add_image_size('hero', 1280, 1085, false);
}

add_action('after_setup_theme', 'dctheme_theme_support');
