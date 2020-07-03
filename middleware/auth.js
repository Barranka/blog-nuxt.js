// через middlewear можно обращаться к любой информации страницы

export default function (context) {
	if (!context.store.getters.checkAuthUser) {
		context.redirect('/admin/auth')
	}
}