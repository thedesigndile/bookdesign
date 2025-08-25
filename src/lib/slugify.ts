export function slugify(input: string): string {
	return input
		.toLowerCase()
		.normalize('NFKD')
		.replace(/[\u0300-\u036f]/g, '')
		.replace(/&/g, ' and ')
		.replace(/[^a-z0-9]+/g, '-')
		.replace(/^-+|-+$/g, '')
		.replace(/-{2,}/g, '-');
}

export function deslugify(slug: string): string {
	return slug
		.replace(/-/g, ' ')
		.replace(/\b\w/g, (m) => m.toUpperCase());
}