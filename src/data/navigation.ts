export type MenuItem = {
  title: string;
  path: string;
  icon: string;
};

export const mainNavigation: MenuItem[] = [
  { title: "Home", path: "/", icon: "ri-home-5-line" },
  { title: "Componenten", path: "/componenten", icon: "ri-layout-grid-line" },
  {
    title: "Starter Packs",
    path: "/starter-packs",
    icon: "ri-file-copy-2-line",
  },
  { title: "Templates", path: "/templates", icon: "ri-pages-line" },
  { title: "Snippets", path: "/snippets", icon: "ri-code-box-line" },
];

export const categories: MenuItem[] = [
  { title: "Buttons", path: "/buttons", icon: "ri-radio-button-line" },
  { title: "Cards", path: "/cards", icon: "ri-id-card-line" },
  { title: "Formulieren", path: "/formulieren", icon: "ri-survey-line" },
  { title: "Navigatie", path: "/navigatie", icon: "ri-list-check" },
  { title: "Layouts", path: "/layouts", icon: "ri-layout-column-line" },
  { title: "Modals", path: "/modals", icon: "ri-checkbox-blank-circle-line" },
  { title: "Tabs", path: "/tabs", icon: "ri-folder-2-line" },
  { title: "UI Elements", path: "/ui-elements", icon: "ri-shape-line" },
  { title: "Overig", path: "/overig", icon: "ri-more-line" },
];

export const searchPages = [
  ...mainNavigation,
  ...categories,
  { title: "Tools", path: "/tools", icon: "ri-tools-line" },
  { title: "Docs", path: "/docs", icon: "ri-book-open-line" },
  { title: "Changelog", path: "/changelog", icon: "ri-history-line" },
];
