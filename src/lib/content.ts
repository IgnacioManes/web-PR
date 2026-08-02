import { createClient } from '@sanity/client';
import { fallbackContent } from '../data/fallback';

export type Service = { slug: string; number: string; title: string; summary: string; detail: string };
export type Project = { title: string; category: string; year: string; href: string; image?: string };
export type EquipmentGroup = { title: string; items: string[] };
export type Faq = { question: string; answer: string };
export type SiteContent = {
  settings: { title: string; description: string; instagram: string };
  services: Service[];
  projects: Project[];
  equipment: EquipmentGroup[];
  faqs: Faq[];
};

const projectId = import.meta.env.PUBLIC_SANITY_PROJECT_ID;
const dataset = import.meta.env.PUBLIC_SANITY_DATASET || 'production';
const apiVersion = import.meta.env.PUBLIC_SANITY_API_VERSION || '2026-08-01';

const client = projectId ? createClient({ projectId, dataset, apiVersion, useCdn: false }) : null;

const query = `{
  "settings": *[_type == "siteSettings"][0]{title, description, instagram},
  "services": *[_type == "service"] | order(order asc){"slug": slug.current, number, title, summary, detail},
  "projects": *[_type == "project"] | order(year desc){title, category, year, href, "image": image.asset->url},
  "equipment": *[_type == "equipmentGroup"] | order(order asc){title, items},
  "faqs": *[_type == "faq"] | order(order asc){question, answer}
}`;

export async function getContent(): Promise<SiteContent> {
  if (!client) return fallbackContent as SiteContent;
  try {
    const remote = await client.fetch<Partial<SiteContent>>(query);
    return {
      settings: remote.settings || fallbackContent.settings,
      services: remote.services?.length ? remote.services : fallbackContent.services,
      projects: remote.projects?.length ? remote.projects : fallbackContent.projects,
      equipment: remote.equipment?.length ? remote.equipment : fallbackContent.equipment,
      faqs: remote.faqs?.length ? remote.faqs : fallbackContent.faqs,
    };
  } catch {
    return fallbackContent as SiteContent;
  }
}

export function getWhatsappUrl(message = 'Hola, llegué desde la web de Pared Roja. Quisiera consultar disponibilidad para un proyecto.') {
  const number = (import.meta.env.PUBLIC_WHATSAPP_NUMBER || '').replace(/\D/g, '');
  return number ? `https://wa.me/${number}?text=${encodeURIComponent(message)}` : 'https://www.instagram.com/estudioparedroja/';
}
