import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'room', title: 'Salas', type: 'document',
  fields: [
    defineField({ name: 'title', title: 'Nombre', type: 'string', validation: (rule) => rule.required() }),
    defineField({ name: 'slug', title: 'URL', type: 'slug', options: { source: 'title' } }),
    defineField({ name: 'status', title: 'Estado', type: 'string', options: { list: [{ title: 'Activa', value: 'active' }, { title: 'Próximamente', value: 'soon' }] } }),
    defineField({ name: 'description', title: 'Descripción', type: 'text', rows: 5 }),
    defineField({ name: 'gallery', title: 'Galería', type: 'array', of: [{ type: 'image', options: { hotspot: true } }] }),
    defineField({ name: 'features', title: 'Características', type: 'array', of: [{ type: 'string' }] }),
  ],
  preview: { select: { title: 'title', subtitle: 'status', media: 'gallery.0' } },
});
