
document.getElementById('modeToggle').addEventListener('click', function() {
    document.body.classList.toggle('dark-mode-active');
});
const modeToggle = document.getElementById('modeToggle');
const modeIcon = document.getElementById('modeIcon');

modeToggle.addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');

    const currentMode = modeIcon.src.includes('images/darkmode.png') ? 'dark' : 'light';

    if (currentMode === 'dark') {
        modeIcon.src = 'images/lightmode.png'; 
        modeIcon.alt = 'Toggle Light Mode';
    } else {
        modeIcon.src = 'images/darkmode.png'; 
        modeIcon.alt = 'Toggle Dark Mode';
    }
});



document.addEventListener('DOMContentLoaded', function() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
});

function openPreview(imageSrc, infoText) {
    document.getElementById('overlay').style.display = 'block';
    document.getElementById('preview-image').src = imageSrc;
    document.getElementById('info-text').innerHTML = infoText; // Update info text
    document.body.classList.add('no-scroll');
}

function closePreview() {

    document.getElementById('overlay').style.display = 'none';
    document.getElementById('preview-image').src = '';
    document.body.classList.remove('no-scroll');
}

const faqItems = Array.from(document.querySelectorAll('.cs-faq-item'));
        for (const item of faqItems) {
            const onClick = () => {
            item.classList.toggle('active')
        }
        item.addEventListener('click', onClick)
        }

(function($) {

	var	$window = $(window),
		$body = $('body');

		breakpoints({
			xlarge:   [ '1281px',  '1680px' ],
			large:    [ '981px',   '1280px' ],
			medium:   [ '737px',   '980px'  ],
			small:    [ '481px',   '736px'  ],
			xsmall:   [ '361px',   '480px'  ],
			xxsmall:  [ null,      '360px'  ]
		});

		$window.on('load', function() {
			window.setTimeout(function() {
				$body.removeClass('is-preload');
			}, 100);
		});

		if (browser.mobile)
			$body.addClass('is-touch');

		var $form = $('form');

			$form.find('textarea').each(function() {

				var $this = $(this),
					$wrapper = $('<div class="textarea-wrapper"></div>'),
					$submits = $this.find('input[type="submit"]');

				$this
					.wrap($wrapper)
					.attr('rows', 1)
					.css('overflow', 'hidden')
					.css('resize', 'none')
					.on('keydown', function(event) {

						if (event.keyCode == 13
						&&	event.ctrlKey) {

							event.preventDefault();
							event.stopPropagation();

							$(this).blur();

						}

					})
					.on('blur focus', function() {
						$this.val($.trim($this.val()));
					})
					.on('input blur focus --init', function() {

						$wrapper
							.css('height', $this.height());

						$this
							.css('height', 'auto')
							.css('height', $this.prop('scrollHeight') + 'px');

					})
					.on('keyup', function(event) {

						if (event.keyCode == 9)
							$this
								.select();

					})
					.triggerHandler('--init');

					if (browser.name == 'ie'
					||	browser.mobile)
						$this
							.css('max-height', '10em')
							.css('overflow-y', 'auto');

			});

		var $menu = $('#menu');

		$menu.wrapInner('<div class="inner"></div>');

		$menu._locked = false;

		$menu._lock = function() {

			if ($menu._locked)
				return false;

			$menu._locked = true;

			window.setTimeout(function() {
				$menu._locked = false;
			}, 350);

			return true;

		};

		$menu._show = function() {

			if ($menu._lock())
				$body.addClass('is-menu-visible');

		};

		$menu._hide = function() {

			if ($menu._lock())
				$body.removeClass('is-menu-visible');

		};

		$menu._toggle = function() {

			if ($menu._lock())
				$body.toggleClass('is-menu-visible');

		};

		$menu
			.appendTo($body)
			.on('click', function(event) {
				event.stopPropagation();
			})
			.on('click', 'a', function(event) {

				var href = $(this).attr('href');

				event.preventDefault();
				event.stopPropagation();

					$menu._hide();

					if (href == '#menu')
						return;

					window.setTimeout(function() {
						window.location.href = href;
					}, 350);

			})
			.append('<a class="close" href="#menu">Close</a>');

		$body
			.on('click', 'a[href="#menu"]', function(event) {

				event.stopPropagation();
				event.preventDefault();

					$menu._toggle();

			})
			.on('click', function(event) {

					$menu._hide();

			})
			.on('keydown', function(event) {

					if (event.keyCode == 27)
						$menu._hide();

			});


			document.getElementById("cs-form-1388").addEventListener("submit", function(event) {
				event.preventDefault(); 
	
				var formData = new FormData(this);
	
				fetch("https://formspree.io/f/xpzvgqgd", {
					method: "POST",
					body: formData,
					headers: {
						"Accept": "application/json"
					}
				})
				.then(function(response) {
					if (response.ok) {
						alert("Message sent successfully!");
					} else {
						throw new Error("Form submission failed.");
					}
				})
				.catch(function(error) {
					alert("An error occurred while sending the message.");
					console.error(error);
				});
			});



})(jQuery);


