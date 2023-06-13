export interface RayComponentMapItem {
	file?: string;
	componentName?: string;
}

export interface ComponentsMap extends Array<RayComponentMapItem>{}

export interface RayTemplate {
	componentsMap: ComponentsMap,
	viewExists: (viewName: string) => boolean,
	getViewOnly: (viewName: string) => string | boolean,
	getView: (viewName: string) => string | boolean,
}

export interface RayModuleOptions {
	themesDir: string,
	theme: string,
}
