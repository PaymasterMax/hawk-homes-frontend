import adapter from '@sveltejs/adapter-vercel';
// import adapter from '@sveltejs/adapter-node';
import { vitePreprocess } from '@sveltejs/kit/vite';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://kit.svelte.dev/docs/integrations#preprocessors
	// for more information about preprocessors
	preprocess: vitePreprocess(),compilerOptions:{
		
		
	},
	

	kit: {
		// adapter-auto only supports some environments, see https://kit.svelte.dev/docs/adapter-auto for a list.
		// If your environment is not supported or you settled on a specific environment, switch out the adapter.
		// See https://kit.svelte.dev/docs/adapters for more information about adapters.
		adapter: adapter(
			
		),csrf: {
			checkOrigin: false,
		  },
		alias:{
			$components:"src/lib/components",
			$helpers:"src/helpers",
			$home:"src/lib/framework/home",
			$interface:"src/interfaces",
			$interfaceApi:"src/interfaces/api",
			$utility:"src/utility",
			$services:"src/services",
		},
		files:{
			appTemplate:"src/app/app.html",
			errorTemplate:"src/app/error.html"
		}
		
	},
	
};

export default config;
