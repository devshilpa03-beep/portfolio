import { bootstrapApplication } from '@angular/platform-browser';
import { App } from './app/app';
import { config } from './app/app.config.server';

// Export a bootstrap function that accepts the server BootstrapContext and
// forwards it to `bootstrapApplication`. The server runtime (Angular SSR)
// will pass a context object when rendering; forwarding it prevents the
// NG0401 "Missing Platform" error.
export default function bootstrap(context?: unknown) {
	return bootstrapApplication(App, config, context as any);
}
