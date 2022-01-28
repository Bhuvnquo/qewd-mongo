const common = {
  show_reelgood_id: String,
  url: String,
  show_imdb_id: String,
  released_date: String,
  pg_rating: String,
  slug: String,
  seasons_count: Number,
  episode_count: Number,
  source: String,
  trailer: String,
  providers: [
    {
      android_link: String,
      buy_hd_cost: Number,
      buy_sd_cost: Number,
      ios_link: String,
      rent_hd_cost: Number,
      rent_sd_cost: Number,
      web_link: String,
      logo_slug: String,
      name: String,
      name_slug: String,
      provider_id: Number,
      type: String,
      logo: String,
    },
  ],
};
module.exports = (mongoose) => {
  const schema = mongoose.Schema({
    title: String,
    director: String,
    description: String,
    created_at: String,
    content_type: String,
    thumbnail: String,
    horizontal_thumbnail: String,
    imdb_id: String,
    imdb_rating: Number,
    reelgood_rating: String,
    return_on: String,
    ...common,
    genres: [
      {
        name: String,
        genre_id: Number,
      },
    ],
    similar_movie: [
      {
        content_type: String,
        horizontal_thumbnail: String,
        imdb_id: String,
        reelgood_id: String,
        thumbnail: String,
        title: String,
      },
    ],
    casts: [
      {
        name: String,
        job: String,
      },
    ],
    show_data: [
      {
        episode_title: String,
        episode_thumbnail: String,
        episode_description: String,
        episode_imdb_id: String,
        episode_imdb_rating: Number,
        season_no: Number,
        episode_no: Number,
        ...common,
      },
    ],
  });

  schema.method("toJSON", function () {
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;
    return object;
  });

  const Xbyte = mongoose.model("videos", schema);
  return Xbyte;
};
