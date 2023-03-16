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
        'width' => 600,
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

    // Default
    set_post_thumbnail_size(160, 112, true);

    // Post
    add_image_size('post-regular', 720, 320, false);

    // Customer
    add_image_size('customer', 405, 458, true);
    add_image_size('customer-retina', 810, 920, true);
    add_image_size('customer-375', 230, 272, true);
    add_image_size('customer-retina-375', 560, 667, true);

    //Quote
    add_image_size('quote', 534, 635, true);
    add_image_size('quote-retina', 1068, 1272, true);
    add_image_size('quote-375', 229, 272, true);
    add_image_size('quote-retina-375', 558, 664, true);
}

add_action('after_setup_theme', 'dctheme_theme_support');
