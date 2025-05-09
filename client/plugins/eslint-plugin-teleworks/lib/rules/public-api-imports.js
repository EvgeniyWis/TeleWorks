const { isPathRelative } = require("../helpers");
const micromatch = require("micromatch");
const path = require("path");

const PUBLIC_ERROR = "PUBLIC_ERROR";
const TESTING_PUBLIC_ERROR = "TESTING_PUBLIC_ERROR";

module.exports = {
  meta: {
    type: "layout", // `problem`, `suggestion`, or `layout`
    docs: {
      description: "descr",
      category: "Fill me in",
      recommended: false,
      url: null, // URL to the documentation page for this rule
    },
    fixable: "code", // Or `code` or `whitespace`
    messages: {
      // Соотнесли ошибки и константы
      [PUBLIC_ERROR]:
        "Абсолютный импорт разрешен только из Public API (index.ts)",
      [TESTING_PUBLIC_ERROR]:
        "Тестовые данные необходимо импортировать из publicApi/testing.ts",
    },
    schema: [
      {
        type: "object",
        properties: {
          alias: {
            type: "string",
          },
          testFilesPatterns: {
            type: "array",
          },
        },
      },
    ],
  },

  create(context) {
    const { alias = "", testFilesPatterns = [] } = context.options[0] || {};

    const checkingLayers = {
      entities: "entities",
      features: "features",
      pages: "pages",
      widgets: "widgets",
    };

    return {
      ImportDeclaration(node) {
        const value = node.source.value;
        const importTo = alias ? value.replace(`${alias}/`, "") : value;

        if (isPathRelative(importTo)) {
          return;
        }

        // [entities, article, model, types]
        const segments = importTo.split("/");
        const layer = segments[0];
        const slices_type = segments[1];
        const slice = segments[2];

        if (!checkingLayers[layer]) {
          return;
        }

        const isImportNotFromPublicApi = segments.length > 3;
        // [entities, article, testing]
        const isTestingPublicApi =
          segments[3] === "testing" && segments.length < 5;

        if (isImportNotFromPublicApi && !isTestingPublicApi) {
          context.report({
            node,
            messageId: PUBLIC_ERROR,
            fix: (fixer) => {
              return fixer.replaceText(
                node.source,
                `'${alias}/${layer}/${slices_type}/${slice}'`
              );
            },
          });
        }

        if (isTestingPublicApi) {
          const currentFilePath = context.getFilename();
          const normalizedPath = path.toNamespacedPath(currentFilePath);

          const isCurrentFileTesting = testFilesPatterns.some((pattern) =>
            micromatch.isMatch(normalizedPath, pattern)
          );

          if (!isCurrentFileTesting) {
            context.report({
              node: node,
              message:
                "Тестовые данные необходимо импортировать из publicApi/testing.ts",
            });
          }
        }
      },
    };
  },
};
