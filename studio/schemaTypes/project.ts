import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'project', title: 'Trabajos', type: 'document',
  fields: [
    defineField({ name: 'title', title: 'Proyecto o artista', type: 'string', validation: (rule) => rule.required() }),
    defineField({ name: 'category', title: 'Servicios realizados', type: 'string' }),
    defineField({ name: 'year', title: 'Año', type: 'string' }),
    defineField({ name: 'image', title: 'Imagen', type: 'image', options: { hotspot: true } }),
    defineField({ name: 'href', title: 'Enlace al lanzamiento o publicación', type: 'url' }),
    defineField({ name: 'credits', title: 'Créditos', type: 'array', of: [{ type: 'string' }] }),
  ],
  preview: { select: { title: 'title', subtitle: 'category', media: 'image' } },
});
