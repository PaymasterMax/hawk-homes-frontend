// See https://kit.svelte.dev/docs/types#app

import type { User } from "$interface";

// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		interface Locals {
			token: string | null
			user: User | undefined
		}


		interface PageData {
			flash?: {
				type: "success" | "error"
				message: string

			}
		}
		// interface Platform {}
	}
}

export { };
