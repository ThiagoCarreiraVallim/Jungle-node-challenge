const { Model } = require('objection');

class Article extends Model {
  static get tableName() {
    return 'articles';
  }

  static get relationMappings() {

    const Author = require('./author');

    return {
      authors: {
        relation: Model.BelongsToOneRelation,
        modelClass: Author,
        join: {
          from: 'articles.authorId',
          to: 'authors.id'
        },
      },
    };
  }
  
}

module.exports = Article;