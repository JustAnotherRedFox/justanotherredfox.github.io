function toggleDarkMode() {
	const $html = document.documentElement;
	$html.classList.toggle('dark');

	const $img = document.querySelector('#homepage-profile-pic');

	if ($html.classList.contains('dark')) {
		$img.setAttribute('src', '/resources/images/general/homepage_profile_dark.jpg');

	} else {
		$img.setAttribute('src', '/resources/images/general/homepage_profile.jpg');
	}
}
