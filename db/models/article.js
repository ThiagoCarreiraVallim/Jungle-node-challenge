/* eslint-disable no-param-reassign */
const { Model } = require('objection');

class Article extends Model {
  static get tableName() {
    return 'articles';
  }

  static get relationMappings() {
    // eslint-disable-next-line global-require
    const Author = require('./author');
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