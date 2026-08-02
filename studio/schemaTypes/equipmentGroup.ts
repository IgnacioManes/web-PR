import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'equipmentGroup', title: 'Equipamiento', type: 'document',
  fields: [
    defineField({ name: 'title', title: 'Categoría', type: 'string', validation: (rule) => rule.required() }),
    defineField({ name: 'items', title: 'Elementos', type: 'array', of: [{ type: 'string' }] }),
    defineField({ name: 'order', title: 'Orden', type: 'number', initialValue: 10 }),
  ],
});
