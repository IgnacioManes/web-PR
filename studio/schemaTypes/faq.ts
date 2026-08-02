import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'faq', title: 'Preguntas frecuentes', type: 'document',
  fields: [
    defineField({ name: 'question', title: 'Pregunta', type: 'string', validation: (rule) => rule.required() }),
    defineField({ name: 'answer', title: 'Respuesta', type: 'text', rows: 4, validation: (rule) => rule.required() }),
    defineField({ name: 'order', title: 'Orden', type: 'number', initialValue: 10 }),
  ],
});
