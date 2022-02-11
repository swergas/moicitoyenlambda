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
        href: "medias__nos_articles.html"
      },
      {
        label: "Nos réseaux sociaux",
        href: "medias__nos_reseaux_sociaux.html"
      },
      /*
      {
        type: "divider"
      },
      */
      {
        label: "Contenus vidéo",
        href: "medias__contenus_video.html"
      },
    ]
  },
  {
    label: "À propos",
    href: "index.html",
    special: "home"
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
