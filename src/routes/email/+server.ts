import Renderer from 'better-svelte-email/render';
import WelcomeEmail from '$lib/emails/welcome.svelte';

const { render } = new Renderer();

export async function GET() {
	const html = await render(WelcomeEmail);

	return new Response(html, {
		headers: {
			'content-type': 'text/html; charset=utf-8'
		}
	});
}
