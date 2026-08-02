import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'service', title: 'Servicios', type: 'document',
  fields: [
    defineField({ name: 'number', title: 'Número', type: 'string' }),
    defineField({ name: 'title', title: 'Nombre', type: 'string', validation: (rule) => rule.required() }),
    defineField({ name: 'slug', title: 'URL', type: 'slug', options: { source: 'title' }, validation: (rule) => rule.required() }),
    defineField({ name: 'summary', title: 'Resumen', type: 'text', rows: 3, validation: (rule) => rule.required() }),
    defineField({ name: 'detail', title: 'Detalle', type: 'text', rows: 5 }),
    defineField({ name: 'order', title: 'Orden', type: 'number', initialValue: 10 }),
  ],
  preview: { select: { title: 'title', subtitle: 'summary' } },
});
