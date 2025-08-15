import fs from 'node:fs';
import path from 'node:path';
import { slugify } from '@/lib/slugify';

export interface PortfolioProject {
	title: string;
	slug: string;
	path: string;
	images: PortfolioImage[];
}

export interface PortfolioImage {
	filename: string;
	url: string;
	alt: string;
	title?: string;
	description?: string;
}

const VALID_EXT = new Set(['.jpg', '.jpeg', '.png', '.webp', '.avif', '.gif']);

function isImage(file: string): boolean {
	return VALID_EXT.has(path.extname(file).toLowerCase());
}

function sortAlphaNumeric(a: string, b: string): number {
	return a.localeCompare(b, undefined, { numeric: true, sensitivity: 'base' });
}

export function getPortfolioRoot(): string {
	return path.join(process.cwd(), 'public', 'Portfolio');
}

export function readCaptionsJson(dir: string): Record<string, { title?: string; description?: string }> {
	const captionsPath = path.join(dir, 'captions.json');
	if (fs.existsSync(captionsPath)) {
		try {
			const raw = fs.readFileSync(captionsPath, 'utf-8');
			const json = JSON.parse(raw) as Record<string, { title?: string; description?: string }>;
			return json || {};
		} catch {
			return {};
		}
	}
	return {};
}

export function getProjects(): PortfolioProject[] {
	const root = getPortfolioRoot();
	if (!fs.existsSync(root)) return [];
	const projectDirs = fs
		.readdirSync(root)
		.filter((entry) => {
			const full = path.join(root, entry);
			return fs.statSync(full).isDirectory();
		});

	const projects = projectDirs.map((folderName) => {
		const projectPath = path.join(root, folderName);
		const images = getProjectImages(folderName);
		return {
			title: folderName,
			slug: slugify(folderName),
			path: projectPath,
			images,
		} as PortfolioProject;
	});

	projects.sort((a, b) => a.title.localeCompare(b.title));
	return projects;
}

function readdirSyncSafe(dir: string): string[] {
	try {
		return fs.readdirSync(dir).filter((n) => !n.startsWith('.'));
	} catch {
		return [];
	}
}

export function getProjectImages(folderName: string): PortfolioImage[] {
	const dir = path.join(getPortfolioRoot(), folderName);
	const captions = readCaptionsJson(dir);
	const files = readdirSyncSafe(dir).filter(isImage).sort(sortAlphaNumeric);
	return files.map((filename) => {
		const relUrl = `/Portfolio/${encodeURIComponent(folderName)}/${encodeURIComponent(filename)}`;
		const base = filename.replace(path.extname(filename), '').replace(/[_-]+/g, ' ').trim();
		const c = captions[filename] || {};
		return {
			filename,
			url: relUrl,
			alt: c.title || base,
			title: c.title || base,
			description: c.description,
		};
	});
}

export function getProjectBySlug(slug: string): PortfolioProject | null {
	const projects = getProjects();
	return projects.find((p) => p.slug === slug) || null;
}