import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'siteSettings', title: 'Configuración general', type: 'document',
  fields: [
    defineField({ name: 'title', title: 'Nombre', type: 'string', validation: (rule) => rule.required() }),
    defineField({ name: 'description', title: 'Descripción para buscadores', type: 'text', rows: 3 }),
    defineField({ name: 'instagram', title: 'Instagram', type: 'url' }),
    defineField({ name: 'whatsapp', title: 'WhatsApp con código de país', type: 'string' }),
    defineField({ name: 'email', title: 'Email', type: 'email' }),
    defineField({ name: 'location', title: 'Ubicación pública', type: 'string' }),
  ],
  preview: { prepare: () => ({ title: 'Configuración general' }) },
});
