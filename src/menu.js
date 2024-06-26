window.menuItems = function () {
	return {
		menuOpened: false,
		subMenuOpened: false,
		menuItems: [
			{
				title: 'Products',
				subItems: [
					'Overview',
					'Pricing',
					'Marketplace',
					'Features',
					'Integrations',
				]
			},
			{
				title: 'Company',
				subItems: [
					'About',
					'Team',
					'Blog',
					'Careers',
				]
			},
			{
				title: 'Connect',
				subItems: [
					'Contact',
					'Newsletter',
					'LinkedIn',
				]
			},
		]
	}
}