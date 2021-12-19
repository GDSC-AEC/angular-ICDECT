import { trigger, transition, style, query, animateChild, group, animate } from '@angular/animations';

export const routeTransitionAnimations = trigger('triggerName', [
	transition('One => Two, Two => Three, Three => Four, Four => Five, One => Three, One => Four, One => Five', [

		style({ position: 'relative' }),
		query(':enter, :leave', [
			style({
				position: 'absolute',
				top: 0,
				right: 0,
				width: '100%'
			})
		]),

		query(':enter', [style({ right: '-100%', opacity: 0 })]),
		query(':leave', animateChild()),
		group([
			query(':leave', [animate('1s ease-out', style({ right: '100%', opacity: 0 }))]),
			query(':enter', [animate('1s ease-out', style({ right: '0%', opacity: 1 }))])
		]),
		query(':enter', animateChild())
	]),

	transition('Four => Three, Three => Two, Two => One, Three => One, Four => One, Five => One', [
		style({ position: 'relative' }),
		query(':enter, :leave', [
			style({
				position: 'absolute',
				top: 0,
				left: 0,
				width: '100%'
			})
		]),
		query(':enter', [style({ left: '-100%', opacity: 0 })]),
		query(':leave', animateChild()),
		group([
			query(':leave', [animate('1s ease-out', style({ left: '100%', opacity: 0 }))]),
			query(':enter', [animate('1s ease-out', style({ left: '0%', opacity: 1 }))])
		]),
		query(':enter', animateChild())
	])
]);

// export const routeTransitionAnimations = trigger('triggerName', [
// 	transition('One => Two, Two => Three', [
// 		style({ position: 'relative' }),
// 		query(':enter, :leave', [
// 			style({
// 				position: 'absolute',
// 				top: 0,
// 				right: 0,
// 				width: '100%'
// 			})
// 		]),
// 		query(':enter', [style({ right: '-100%', opacity: 0 })]),
// 		query(':leave', animateChild()),
// 		group([
// 			query(':leave', [animate('1s ease-out', style({ right: '100%', opacity: 0 }))]),
// 			query(':enter', [animate('1s ease-out', style({ right: '0%', opacity: 1 }))])
// 		]),
// 		query(':enter', animateChild())
// 	])
// 	// ,
// 	// transition('* <=> FilterPage', [
// 	// 	style({ position: 'relative' }),
// 	// 	query(':enter, :leave', [
// 	// 		style({
// 	// 			position: 'absolute',
// 	// 			top: 0,
// 	// 			left: 0,
// 	// 			width: '100%'
// 	// 		})
// 	// 	]),
// 	// 	query(':enter', [style({ left: '-100%' })]),
// 	// 	query(':leave', animateChild()),
// 	// 	group([
// 	// 		query(':leave', [animate('200ms ease-out', style({ left: '100%' }))]),
// 	// 		query(':enter', [animate('300ms ease-out', style({ left: '0%' }))])
// 	// 	]),
// 	// 	query(':enter', animateChild())
// 	// ])
// ]);