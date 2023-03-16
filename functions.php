<?php
require_once('lib/enqueue-assets.php');


function dctheme_load_textdomain()
{
    load_theme_textdomain('dctheme', get_template_directory() . '/languages');
}
add_action('after_setup_theme', 'dctheme_load_textdomain');
