module.exports = function () {
  return {
    name: 'no-require-css',
    visitor: {
      ImportDeclaration(path) {
        const importFile = path.node.source.value;
        if (importFile.indexOf('.less') > -1) {
          path.remove();
        }
      },
    },
  };
};
