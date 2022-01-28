module.exports = (mongoose) => {
  const schema = mongoose.Schema(
    {
      title: String,
      titleId: String,
      ordering: String,
      region: String,
      types: String,
      attributes: String,
      isOriginalTitle: String,
    },
    { timestamps: true }
  );

  schema.method("toJSON", function () {
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;
    return object;
  });

  const title = mongoose.model("title", schema);
  return title;
};
