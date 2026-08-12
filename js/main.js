// Minimal JS foundation: nav toggle and small enhancements
(function(){
	document.documentElement.classList.add('js');

	function qs(sel, ctx){ return (ctx||document).querySelector(sel); }
	function qsa(sel, ctx){ return Array.from((ctx||document).querySelectorAll(sel)); }

	document.addEventListener('DOMContentLoaded', function(){
		// Year in footer
		var yearEl = qs('#year');
		if(yearEl) yearEl.textContent = new Date().getFullYear();

		var nav = qs('#site-navigation');
		var toggle = qs('.nav-toggle');

		function closeNav(){
			if(!nav) return;
			nav.classList.remove('site-nav--open');
			toggle && toggle.setAttribute('aria-expanded','false');
		}
		function openNav(){
			if(!nav) return;
			nav.classList.add('site-nav--open');
			toggle && toggle.setAttribute('aria-expanded','true');
		}

		if(toggle && nav){
			toggle.addEventListener('click', function(e){
				var expanded = toggle.getAttribute('aria-expanded') === 'true';
				if(expanded) closeNav(); else openNav();
			});

			// Close on escape
			document.addEventListener('keydown', function(e){
				if(e.key === 'Escape') closeNav();
			});

			// Close nav when clicking outside (mobile)
			document.addEventListener('click', function(e){
				if(!nav.classList.contains('site-nav--open')) return;
				if(!nav.contains(e.target) && !toggle.contains(e.target)){
					closeNav();
				}
			});
		}
	});
})();

/* End of file */
