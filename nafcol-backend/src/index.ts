// import type { Core } from '@strapi/strapi';

export default {
  /**
   * An asynchronous register function that runs before
   * your application is initialized.
   *
   * This gives you an opportunity to extend code.
   */
  register(/* { strapi }: { strapi: Core.Strapi } */) {},

  /**
   * An asynchronous bootstrap function that runs before
   * your application gets started.
   *
   * This gives you an opportunity to set up your data model,
   * run jobs, or perform some special logic.
   */
  async bootstrap({ strapi }: any) {
    const setPublicPermission = async (action: string) => {
      const publicRole = await strapi.db.query('plugin::users-permissions.role').findOne({ where: { type: 'public' } });
      if (!publicRole) return;
      const existing = await strapi.db.query('plugin::users-permissions.permission').findOne({ where: { action, role: publicRole.id } });
      if (!existing) {
        await strapi.db.query('plugin::users-permissions.permission').create({ data: { action, role: publicRole.id } });
      }
    };
    try {
      await setPublicPermission('api::contact-inquiry.contact-inquiry.create');
      await setPublicPermission('api::news-article.news-article.find');
      await setPublicPermission('api::news-article.news-article.findOne');
      await setPublicPermission('api::gallery-item.gallery-item.find');
      await setPublicPermission('api::gallery-item.gallery-item.findOne');
      await setPublicPermission('api::newsletter-subscriber.newsletter-subscriber.create');
    } catch (e) {
      strapi.log.warn('Could not set public permissions automatically.');
    }
  },
};
