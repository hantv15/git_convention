const Configuration = {
  extends: ["@commitlint/config-conventional"],
  rules: {
    "body-max-line-length": [2, "always", 50],
  },
};
module.exports = Configuration;
