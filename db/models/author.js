const { Model } = require('objection');

class Author extends Model {
  static get tableName() {
    return 'authors';
  }

  static get relationMappings() {

    const Article = require('./article');

    return {
      articles: {
        relation: Model.HasManyRelation,
        modelClass: Article,
        join: {
          from: 'authors.id',
          to: 'articles.authorId',
        },
      },
    };
  }

}

module.exports = Author;
