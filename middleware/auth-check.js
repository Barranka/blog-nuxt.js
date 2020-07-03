// через middlewear можно обращаться к любой информации страницы

export default function (context) {
	// if (process.browsers) {
	// 	context.store.dispatch('initAuth', null)
	// } else {
		context.store.dispatch('initAuth', context.req)
	// }
}