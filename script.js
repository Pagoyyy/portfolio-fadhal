const profileCard = document.querySelector('.idcard');
const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

if(profileCard && !reducedMotion){
	profileCard.addEventListener('pointermove', pointerEvent=>{
		if(pointerEvent.pointerType !== 'mouse') return;
		const bounds = profileCard.getBoundingClientRect();
		const horizontal = (pointerEvent.clientX - bounds.left) / bounds.width - 0.5;
		const vertical = (pointerEvent.clientY - bounds.top) / bounds.height - 0.5;
		profileCard.style.setProperty('--tilt-x', `${-vertical * 10}deg`);
		profileCard.style.setProperty('--tilt-y', `${horizontal * 10}deg`);
		profileCard.style.setProperty('--photo-x', `${horizontal * 6}px`);
		profileCard.style.setProperty('--photo-y', `${vertical * 6}px`);
	});
	profileCard.addEventListener('pointerleave', ()=>{
		profileCard.style.setProperty('--tilt-x', '0deg');
		profileCard.style.setProperty('--tilt-y', '0deg');
		profileCard.style.setProperty('--photo-x', '0px');
		profileCard.style.setProperty('--photo-y', '0px');
	});
}

const backgroundMusic = document.querySelector('.music-player');

if(backgroundMusic){
	const removeMusicListeners = ()=>{
		window.removeEventListener('pointerdown', startMusic);
		window.removeEventListener('keydown', startMusic);
	};
	const startMusic = pointerEvent=>{
		if(pointerEvent.target.closest?.('.music-player')) return;
		backgroundMusic.play().catch(()=>{});
	};
	backgroundMusic.addEventListener('play', removeMusicListeners, {once:true});
	window.addEventListener('pointerdown', startMusic);
	window.addEventListener('keydown', startMusic);
}
