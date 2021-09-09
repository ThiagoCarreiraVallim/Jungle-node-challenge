const { Model } = require('objection');
const Author = require('./author');

class Article extends Model {
  static get tableName() {
    return 'articles';
  }

  static get relationMappings() {
    return {
      authors: {
        relation: Model.BelongsToOneRelation,
        modelClass: Author,
        join: {
          from: 'articles.authorId',
          to: 'authors.id',
        },
      },
    };
  }

  $formatJson(json) {
    json = super.$formatJson(json);

    json.author = json.authors;
    delete json.authors;
    delete json.authorId;

    return json;
  }
}

module.exports = Article;