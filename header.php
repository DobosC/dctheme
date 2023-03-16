<?php
//
// Name: Header Template
//
?>
<!DOCTYPE html>
<html lang="<?php bloginfo('language'); ?>" class="no-js" data-component="mobile-detect">

<head>

	<meta name="description" content="<?php bloginfo('description', 'display'); ?>">

	<!-- // Configuration meta -->
	<meta charset="<?php bloginfo('charset'); ?>">
	<meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta http-equiv="Accept-CH" content="DPR,Width,Viewport-Width">

	<!-- // Application title - iOS / macOS -->
	<meta name="apple-mobile-web-app-capable" content="yes">
	<meta name="apple-mobile-web-app-title" content="<?php bloginfo('name'); ?>">

	<!-- // Facebook Meta -->
	<meta property="og:type" content="website">
	<meta property="og:url" content="<?php echo site_url(); ?>">
	<meta property="og:title" content="<?php bloginfo('name'); ?>">
	<meta property="og:locale" content="<?php bloginfo('name'); ?>">
	<meta property="og:image" content="<?php bloginfo('template_url'); ?>/static/social.jpg">
	

	<!-- // Twitter Meta -->
	<meta name="twitter:card" content="summary_large_image">
	<meta name="twitter:title" content="<?php bloginfo('name'); ?>">

	<meta name="twitter:image" content="<?php bloginfo('template_url'); ?>/static/social.jpg">


	<!-- // Favicon -->
	<link rel="icon" href="<?php bloginfo('template_url'); ?>/static/favicon.ico">
	<link rel="icon" href="<?php bloginfo('template_url'); ?>/static/icon.svg" type="image/svg+xml">
	<!-- Apple Pin Icon -->
	<link rel="mask-icon" href="<?php bloginfo('template_url'); ?>/static/pin_icon.svg" color="#000000">
	<!-- Apple Touch Icon -->
	<link rel="apple-touch-icon" href="<?php bloginfo('template_url'); ?>/static/touch-icon.png">
	<!-- Apple Startup Image -->
	<link rel="apple-touch-startup-image" href="<?php bloginfo('template_url'); ?>/static/touch-startup-image.png">

	<!-- Header Scripts -->
	<?php wp_head(); ?>
	<!-- End Header Scripts -->

</head>
<body <?php body_class(); ?> data-component="browser-update">
	<header class="header js-header is-visible">
		<div class="container js-header-inside">
			<!-- Header Logo -->
			<div class="header__logo logo">
			</div>
			<!-- /Header Logo -->

			<!-- Header Navigation -->
			<div class="header__nav">
			<ul class="nav__items">
				<?php
        wp_nav_menu(
    array(
                                                                                        'theme_location' => 'primary-right',
                                                                                        'container'      => false,
                                                                                        'items_wrap'     => '%3$s',

                                                                                        'block'          => 'nav',
                                                                                    )
);
?>
			</ul>
			</div>
			<!-- /Header Navigation -->
		</div><!-- .container -->
	</header>
	<main class="main">
