const navBarElements = [
  {
    label: "Mon compte",
    href: "mon_compte.html"
  },
  {
    label: "Médias",
    href: "medias.html",
    children: [
      {
        label: "Nos articles",
        href: "#"
      },
      {
        label: "Nos réseaux sociaux",
        href: "#"
      },
      {
        type: "divider"
      },
      {
        label: "Contenus vidéo",
        href: "#"
      },
    ]
  },
  {
    label: "À propos",
    href: "index.html"
  },
  {
    label: "Le parlement",
    href: "#"
  },
  {
    label: "Nous soutenir",
    href: "#"
  },
];

const initialData = {
  navBarElements: navBarElements
};

export { initialData, navBarElements };
export default initialData;
