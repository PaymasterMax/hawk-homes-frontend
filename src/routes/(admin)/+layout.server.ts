import { redirect } from '@sveltejs/kit';
import type { LayoutServerLoad } from './$types';

export const load: LayoutServerLoad = async ({ locals }) => {

	if (locals.user) {
		if (locals.user?.perm.role !== 'Admin') {
			throw redirect(302, "/")

		}

	}
	else {
		throw redirect(302, "/auth?signin")
	}

}