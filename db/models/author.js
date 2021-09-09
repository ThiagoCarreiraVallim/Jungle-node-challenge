const { Model } = require('objection');
const Article = require('./article');

class Author extends Model {
  static get tableName() {
    return 'authors';
  }

  static get relationMappings() {
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
