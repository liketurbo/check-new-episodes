module.exports = {
  extends: ["plugin:prettier/recommended", "get-off-my-lawn"],
  plugins: ["simple-import-sort"],
  rules: {
    // Enable sorter
    "simple-import-sort/sort": "error",
    "sort-imports": 0,
    "import/order": 0,
  },
}
