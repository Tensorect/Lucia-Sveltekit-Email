
// this file is generated — do not edit it


/// <reference types="@sveltejs/kit" />

/**
 * Environment variables [loaded by Vite](https://vitejs.dev/guide/env-and-mode.html#env-files) from `.env` files and `process.env`. Like [`$env/dynamic/private`](https://kit.svelte.dev/docs/modules#$env-dynamic-private), this module cannot be imported into client-side code. This module only includes variables that _do not_ begin with [`config.kit.env.publicPrefix`](https://kit.svelte.dev/docs/configuration#env) _and do_ start with [`config.kit.env.privatePrefix`](https://kit.svelte.dev/docs/configuration#env) (if configured).
 * 
 * _Unlike_ [`$env/dynamic/private`](https://kit.svelte.dev/docs/modules#$env-dynamic-private), the values exported from this module are statically injected into your bundle at build time, enabling optimisations like dead code elimination.
 * 
 * ```ts
 * import { API_KEY } from '$env/static/private';
 * ```
 * 
 * Note that all environment variables referenced in your code should be declared (for example in an `.env` file), even if they don't have a value until the app is deployed:
 * 
 * ```
 * MY_FEATURE_FLAG=""
 * ```
 * 
 * You can override `.env` values from the command line like so:
 * 
 * ```bash
 * MY_FEATURE_FLAG="enabled" npm run dev
 * ```
 */
declare module '$env/static/private' {
	export const SENDADDRESS: string;
	export const MAILAPI: string;
	export const SHELL: string;
	export const npm_command: string;
	export const USER_ZDOTDIR: string;
	export const COLORTERM: string;
	export const HYPRLAND_CMD: string;
	export const npm_package_dependencies_mailersend: string;
	export const XDG_SESSION_PATH: string;
	export const TERM_PROGRAM_VERSION: string;
	export const XDG_BACKEND: string;
	export const NODE: string;
	export const npm_package_devDependencies_tslib: string;
	export const npm_package_devDependencies_autoprefixer: string;
	export const npm_package_devDependencies_tailwindcss: string;
	export const npm_package_scripts_check_watch: string;
	export const npm_package_private: string;
	export const DESKTOP_SESSION: string;
	export const npm_package_dependencies_better_sqlite3: string;
	export const HL_INITIAL_WORKSPACE_TOKEN: string;
	export const NO_AT_BRIDGE: string;
	export const XCURSOR_SIZE: string;
	export const npm_package_dependencies_lucia: string;
	export const XDG_SEAT: string;
	export const PWD: string;
	export const npm_package_devDependencies_vite: string;
	export const XDG_SESSION_DESKTOP: string;
	export const LOGNAME: string;
	export const XDG_SESSION_TYPE: string;
	export const PNPM_HOME: string;
	export const npm_package_scripts_build: string;
	export const VSCODE_GIT_ASKPASS_NODE: string;
	export const MOTD_SHOWN: string;
	export const VSCODE_INJECTION: string;
	export const HOME: string;
	export const LANG: string;
	export const npm_package_devDependencies_typescript: string;
	export const _JAVA_AWT_WM_NONREPARENTING: string;
	export const XDG_CURRENT_DESKTOP: string;
	export const npm_package_version: string;
	export const WAYLAND_DISPLAY: string;
	export const GIT_ASKPASS: string;
	export const XDG_SEAT_PATH: string;
	export const npm_package_dependencies_clsx: string;
	export const INIT_CWD: string;
	export const npm_package_dependencies_zod: string;
	export const CHROME_DESKTOP: string;
	export const npm_package_scripts_preview: string;
	export const npm_lifecycle_script: string;
	export const VSCODE_GIT_ASKPASS_EXTRA_ARGS: string;
	export const npm_package_devDependencies__sveltejs_vite_plugin_svelte: string;
	export const npm_package_devDependencies_svelte_check: string;
	export const XDG_SESSION_CLASS: string;
	export const TERM: string;
	export const npm_package_name: string;
	export const ZDOTDIR: string;
	export const npm_package_type: string;
	export const USER: string;
	export const npm_config_frozen_lockfile: string;
	export const VSCODE_GIT_IPC_HANDLE: string;
	export const HYPRLAND_INSTANCE_SIGNATURE: string;
	export const npm_package_dependencies_dotenv: string;
	export const DISPLAY: string;
	export const npm_lifecycle_event: string;
	export const SHLVL: string;
	export const MOZ_ENABLE_WAYLAND: string;
	export const npm_package_dependencies__node_rs_argon2: string;
	export const XDG_VTNR: string;
	export const XDG_SESSION_ID: string;
	export const npm_config_user_agent: string;
	export const PNPM_SCRIPT_SRC_DIR: string;
	export const npm_execpath: string;
	export const npm_package_devDependencies__sveltejs_adapter_auto: string;
	export const npm_package_devDependencies_svelte: string;
	export const XDG_RUNTIME_DIR: string;
	export const npm_package_dependencies_tailwind_variants: string;
	export const NODE_PATH: string;
	export const DEBUGINFOD_URLS: string;
	export const npm_package_dependencies_bits_ui: string;
	export const BUN_INSTALL: string;
	export const npm_package_scripts_dev: string;
	export const npm_package_devDependencies__tailwindcss_typography: string;
	export const LC_ALL: string;
	export const VSCODE_GIT_ASKPASS_MAIN: string;
	export const XDG_DATA_DIRS: string;
	export const npm_package_dependencies_tailwind_merge: string;
	export const npm_package_scripts_check: string;
	export const GDK_BACKEND: string;
	export const npm_package_dependencies__lucia_auth_adapter_sqlite: string;
	export const PATH: string;
	export const npm_config_node_gyp: string;
	export const npm_package_devDependencies__sveltejs_kit: string;
	export const ORIGINAL_XDG_CURRENT_DESKTOP: string;
	export const DBUS_SESSION_BUS_ADDRESS: string;
	export const npm_package_devDependencies__types_better_sqlite3: string;
	export const MAIL: string;
	export const npm_config_registry: string;
	export const npm_package_devDependencies_postcss: string;
	export const npm_node_execpath: string;
	export const OLDPWD: string;
	export const TERM_PROGRAM: string;
	export const NODE_ENV: string;
	export const MAIL_API_KEY: string;
	export const MAIL_ADDRESS: string;
}

/**
 * Similar to [`$env/static/private`](https://kit.svelte.dev/docs/modules#$env-static-private), except that it only includes environment variables that begin with [`config.kit.env.publicPrefix`](https://kit.svelte.dev/docs/configuration#env) (which defaults to `PUBLIC_`), and can therefore safely be exposed to client-side code.
 * 
 * Values are replaced statically at build time.
 * 
 * ```ts
 * import { PUBLIC_BASE_URL } from '$env/static/public';
 * ```
 */
declare module '$env/static/public' {
	
}

/**
 * This module provides access to runtime environment variables, as defined by the platform you're running on. For example if you're using [`adapter-node`](https://github.com/sveltejs/kit/tree/main/packages/adapter-node) (or running [`vite preview`](https://kit.svelte.dev/docs/cli)), this is equivalent to `process.env`. This module only includes variables that _do not_ begin with [`config.kit.env.publicPrefix`](https://kit.svelte.dev/docs/configuration#env) _and do_ start with [`config.kit.env.privatePrefix`](https://kit.svelte.dev/docs/configuration#env) (if configured).
 * 
 * This module cannot be imported into client-side code.
 * 
 * Dynamic environment variables cannot be used during prerendering.
 * 
 * ```ts
 * import { env } from '$env/dynamic/private';
 * console.log(env.DEPLOYMENT_SPECIFIC_VARIABLE);
 * ```
 * 
 * > In `dev`, `$env/dynamic` always includes environment variables from `.env`. In `prod`, this behavior will depend on your adapter.
 */
declare module '$env/dynamic/private' {
	export const env: {
		SENDADDRESS: string;
		MAILAPI: string;
		SHELL: string;
		npm_command: string;
		USER_ZDOTDIR: string;
		COLORTERM: string;
		HYPRLAND_CMD: string;
		npm_package_dependencies_mailersend: string;
		XDG_SESSION_PATH: string;
		TERM_PROGRAM_VERSION: string;
		XDG_BACKEND: string;
		NODE: string;
		npm_package_devDependencies_tslib: string;
		npm_package_devDependencies_autoprefixer: string;
		npm_package_devDependencies_tailwindcss: string;
		npm_package_scripts_check_watch: string;
		npm_package_private: string;
		DESKTOP_SESSION: string;
		npm_package_dependencies_better_sqlite3: string;
		HL_INITIAL_WORKSPACE_TOKEN: string;
		NO_AT_BRIDGE: string;
		XCURSOR_SIZE: string;
		npm_package_dependencies_lucia: string;
		XDG_SEAT: string;
		PWD: string;
		npm_package_devDependencies_vite: string;
		XDG_SESSION_DESKTOP: string;
		LOGNAME: string;
		XDG_SESSION_TYPE: string;
		PNPM_HOME: string;
		npm_package_scripts_build: string;
		VSCODE_GIT_ASKPASS_NODE: string;
		MOTD_SHOWN: string;
		VSCODE_INJECTION: string;
		HOME: string;
		LANG: string;
		npm_package_devDependencies_typescript: string;
		_JAVA_AWT_WM_NONREPARENTING: string;
		XDG_CURRENT_DESKTOP: string;
		npm_package_version: string;
		WAYLAND_DISPLAY: string;
		GIT_ASKPASS: string;
		XDG_SEAT_PATH: string;
		npm_package_dependencies_clsx: string;
		INIT_CWD: string;
		npm_package_dependencies_zod: string;
		CHROME_DESKTOP: string;
		npm_package_scripts_preview: string;
		npm_lifecycle_script: string;
		VSCODE_GIT_ASKPASS_EXTRA_ARGS: string;
		npm_package_devDependencies__sveltejs_vite_plugin_svelte: string;
		npm_package_devDependencies_svelte_check: string;
		XDG_SESSION_CLASS: string;
		TERM: string;
		npm_package_name: string;
		ZDOTDIR: string;
		npm_package_type: string;
		USER: string;
		npm_config_frozen_lockfile: string;
		VSCODE_GIT_IPC_HANDLE: string;
		HYPRLAND_INSTANCE_SIGNATURE: string;
		npm_package_dependencies_dotenv: string;
		DISPLAY: string;
		npm_lifecycle_event: string;
		SHLVL: string;
		MOZ_ENABLE_WAYLAND: string;
		npm_package_dependencies__node_rs_argon2: string;
		XDG_VTNR: string;
		XDG_SESSION_ID: string;
		npm_config_user_agent: string;
		PNPM_SCRIPT_SRC_DIR: string;
		npm_execpath: string;
		npm_package_devDependencies__sveltejs_adapter_auto: string;
		npm_package_devDependencies_svelte: string;
		XDG_RUNTIME_DIR: string;
		npm_package_dependencies_tailwind_variants: string;
		NODE_PATH: string;
		DEBUGINFOD_URLS: string;
		npm_package_dependencies_bits_ui: string;
		BUN_INSTALL: string;
		npm_package_scripts_dev: string;
		npm_package_devDependencies__tailwindcss_typography: string;
		LC_ALL: string;
		VSCODE_GIT_ASKPASS_MAIN: string;
		XDG_DATA_DIRS: string;
		npm_package_dependencies_tailwind_merge: string;
		npm_package_scripts_check: string;
		GDK_BACKEND: string;
		npm_package_dependencies__lucia_auth_adapter_sqlite: string;
		PATH: string;
		npm_config_node_gyp: string;
		npm_package_devDependencies__sveltejs_kit: string;
		ORIGINAL_XDG_CURRENT_DESKTOP: string;
		DBUS_SESSION_BUS_ADDRESS: string;
		npm_package_devDependencies__types_better_sqlite3: string;
		MAIL: string;
		npm_config_registry: string;
		npm_package_devDependencies_postcss: string;
		npm_node_execpath: string;
		OLDPWD: string;
		TERM_PROGRAM: string;
		NODE_ENV: string;
		MAIL_API_KEY: string;
		MAIL_ADDRESS: string;
		[key: `PUBLIC_${string}`]: undefined;
		[key: `${string}`]: string | undefined;
	}
}

/**
 * Similar to [`$env/dynamic/private`](https://kit.svelte.dev/docs/modules#$env-dynamic-private), but only includes variables that begin with [`config.kit.env.publicPrefix`](https://kit.svelte.dev/docs/configuration#env) (which defaults to `PUBLIC_`), and can therefore safely be exposed to client-side code.
 * 
 * Note that public dynamic environment variables must all be sent from the server to the client, causing larger network requests — when possible, use `$env/static/public` instead.
 * 
 * Dynamic environment variables cannot be used during prerendering.
 * 
 * ```ts
 * import { env } from '$env/dynamic/public';
 * console.log(env.PUBLIC_DEPLOYMENT_SPECIFIC_VARIABLE);
 * ```
 */
declare module '$env/dynamic/public' {
	export const env: {
		[key: `PUBLIC_${string}`]: string | undefined;
	}
}
