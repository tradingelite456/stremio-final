// api/router.js

// === Helpers ===
function sendJSON(res, obj, status = 200) {
  res.setHeader("Content-Type", "application/json");
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Headers", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
  res.setHeader("Cache-Control", "public, max-age=3600");
  res.statusCode = status;
  res.end(JSON.stringify(obj));
}

function stripJson(s) {
  return s.replace(/\.json$/, "");
}

function fetchPosterFromIMDb(id) {
  return `https://images.metahub.space/poster/small/${id}/img`;
}

// === Catalogue ===
const catalogData = [
  {
    id: "tt20969586",
    type: "movie",
    name: "Thunderbolt",
    poster: fetchPosterFromIMDb("tt20969586"),
    stream: "https://pulse.topstrime.online/movie/986056/82nb0j/master.m3u8"
  },

 {
    id: "tt35300972",
    type: "movie",
    name: "Lune de miel avec ma mère",
    stream: "https://pulse.topstrime.online/movie/1361622/o4rzet/master.m3u8"
  },
   {
    id: "tt15049366",
    type: "movie",
    name: "Les Bodin's en Thaïlande",
    stream: "https://pulse.topstrime.online/movie/874294/5av1y5/master.m3u8"
  },

   {
    id: "tt27675583",
    type: "movie",
    name: "Almost Cops",
    stream: "https://pulse.topstrime.online/movie/1374534/k5sr6f/master.m3u8"
  },

    {
    id: "tt10456740",
    type: "movie",
    name: "Balle Perdue",
    stream: "https://pulse.topstrime.online/movie/706503/9b4mru/master.m3u8"
  },
    {
    id: "tt14465706",
    type: "movie",
    name: "Balle Perdue 2",
    stream: "https://pulse.topstrime.online/movie/948276/fngfyb/master.m3u8"
  },
    {
    id: "tt29768333",
    type: "movie",
    name: "Balle Perdue 3",
    stream: "https://pulse.topstrime.online/movie/1144430/pygy75/master.m3u8"
  },

  {
    id: "tt34190272",
    type: "movie",
    name: "Enemis",
    stream: "https://pulse.topstrime.online/movie/1285406/umd7qg/master.m3u8"
  },

   {
    id: "tt26452781",
    type: "movie",
    name: "Marked Men",
    stream: "https://heartfelt-tulumba-056f93.netlify.app/master.m3u8"
  },

   {
    id: "tt23060698",
    type: "movie",
    name: "La nuit des clowns",
    stream: "https://pulse.topstrime.online/movie/713364/yl5689/master.m3u8"
  },

  {
    id: "tt12001534",
    type: "movie",
    name: "Le Murder Club du jeudi",
    stream: "https://pulse.topstrime.online/movie/744653/m96tzk/master.m3u8"
  },

  {
    id: "tt8785038",
    type: "movie",
    name: "Couic !",
    stream: "https://shiny-zabaione-b12d33.netlify.app/master.m3u8"
  },

  {
    id: "tt31184028",
    type: "movie",
    name: "Together",
    stream: "https://pulse.topstrime.online/movie/1242011/k2jkz3/master.m3u8"
  },

  {
    id: "tt14760886",
    type: "movie",
    name: "Free fall",
    stream: "https://pulse.topstrime.online/movie/650033/x3aj83/master.m3u8"
  },

   {
    id: "tt4045450",
    type: "movie",
    name: "Souviens-toi... l'été dernier",
    stream: "https://pulse.topstrime.online/movie/1083433/qhq61h/master.m3u8"
  },

    {
    id: "tt35077924",
    type: "movie",
    name: "On ira",
    stream: "https://pulse.topstrime.online/movie/1003504/i09w9p/master.m3u8"
  },

    {
    id: "tt15004066",
    type: "movie",
    name: "Atoman",
    stream: "https://pulse.topstrime.online/movie/869048/inhwy5/master.m3u8"
  },

  {
    id: "tt4900148",
    type: "movie",
    name: "Elio",
    stream: "https://pulse.topstrime.online/movie/1022787/su92dr/master.m3u8"
  },
 {
    id: "tt30017619",
    type: "movie",
    name: "Les Bad Guys 2",
    stream: "https://pulse.topstrime.online/movie/1175942/9504aw/master.m3u8"
  },

  {
    id: "tt35705226",
    type: "movie",
    name: "Moon Le Panda",
    stream: "https://pulse.topstrime.online/movie/1178532/j7uu5w/master.m3u8"
  },

  {
    id: "tt31176520",
    type: "movie",
    name: "Eddington",
    stream: "https://pulse.topstrime.online/movie/648878/p5l1ku/master.m3u8"
  },

  {
    id: "tt21317634",
    type: "movie",
    name: "Bride Hard",
    stream: "https://pulse.topstrime.online/movie/1124619/v5hfbp/master.m3u8"
  },
  
   {
    id: "tt30973842",
    type: "movie",
    name: "Le Jardinier",
    stream: "https://pulse.topstrime.online/movie/1255788/f5y2q0/master.m3u8"
  },
   {
    id: "tt35934350",
    type: "movie",
    name: "F*ckin' Fred: Comme un Léopard",
    stream: "https://dl33.topstrime.online/hls2/12/01297/,l7aljsbdzw2i_x,lang/fre/l7aljsbdzw2i_fre,.urlset/master.m3u8?t=5OD4YZIRQlTeb1gFhUxF-Zdn596B8HVmYQxe07gL1ZA&s=1757084837&e=43200&f=6485683&i=0.0&sp=0&fr=l7aljsbdzw2i"
  },
   {
    id: "tt27821575",
    type: "movie",
    name: "Jamais sans mon psy",
    stream: "https://pulse.topstrime.online/movie/1130402/zuwa5l/master.m3u8"
  },
   {
    id: "tt32373672",
    type: "movie",
    name: "L'Heureuse élue",
    stream: "https://pulse.topstrime.online/movie/1235502/p59o5l/master.m3u8"
  },
   {
    id: "tt31565654",
    type: "movie",
    name: "Drôle de Lune de miel",
    stream: "https://dl30.topstrime.online/hls2/09/00607/,glvu5fgl97dj_x,lang/ara/glvu5fgl97dj_ara,lang/eng/glvu5fgl97dj_eng,lang/fre/glvu5fgl97dj_fre,.urlset/master.m3u8?t=UrVJpKai7wZjb6ISbJRzz5qS6hbBUZ4ObpXsDNpAwGA&s=1757086120&e=43200&f=3035318&i=0.0&sp=0&fr=glvu5fgl97dj"
  },
   {
    id: "tt30471155",
    type: "movie",
    name: "Opération Portugal 2 : La vie de château",
    stream: "https://pulse.topstrime.online/movie/1155840/p6qhkc/master.m3u8"
  },


   {
    id: "tt14550172",
    type: "movie",
    name: "Le médecin imaginaire",
    stream: "https://pulse.topstrime.online/movie/764393/xm0b8c/master.m3u8"
  },

  {
    id: "tt29031223",
    type: "movie",
    name: "Prosper",
    stream: "https://pulse.topstrime.online/movie/1000881/33945z/master.m3u8"
  },
   {
    id: "tt16431870",
    type: "movie",
    name: "Escapade en Famille",
    stream: "https://pulse.topstrime.online/movie/1029575/master.m3u8"
  },

  {
    id: "tt3402138",
    type: "movie",
    name: "Y a-t-il un flic pour sauver le monde ?",
    stream: "https://pulse.topstrime.online/movie/1035259/bf8xpe/master.m3u8"
  },
  
  {
    id: "tt16311594",
    type: "movie",
    name: "F1 (Le Film)",
    poster: fetchPosterFromIMDb("tt16311594"),
    stream: "https://pulse.topstrime.online/movie/911430/1o9d0a/master.m3u8"
  },
  {
    id: "tt33613785",
    type: "movie",
    name: "God Save the Tuche",
    poster: fetchPosterFromIMDb("tt33613785"),
    stream: "https://pulse.topstrime.online/movie/1137759/croued/master.m3u8"
  },
  {
    id: "tt13443470",
    type: "series",
    name: "Mercredi",
    poster: fetchPosterFromIMDb("tt13443470"),
    description: "Série Netflix suivant les aventures de Mercredi Addams à l'Académie Nevermore.",
    genres: ["Comedy", "Fantasy"],
    videos: [
      {
        id: "s1e1",
        title: "Épisode 1",
        season: 1,
        episode: 1,
        stream: "https://pulse.topstrime.online/tv/119051/rdxfvx/S1/E1/master.m3u8"
      },
      {
        id: "s1e2",
        title: "Épisode 2",
        season: 1,
        episode: 2,
        stream: "https://pulse.topstrime.online/tv/119051/rblyo2/S1/E2/master.m3u8"
      },
      {
        id: "s1e3",
        title: "Épisode 3",
        season: 1,
        episode: 3,
        stream: "https://pulse.topstrime.online/tv/119051/v3vqw4/S1/E3/master.m3u8"
      },
        {
        id: "s1e4",
        title: "Épisode 4",
        season: 1,
        episode: 4,
        stream: "https://pulse.topstrime.online/tv/119051/y080h1/S1/E4/master.m3u8"
      },
      {
        id: "s1e5",
        title: "Épisode 5",
        season: 1,
        episode: 5,
        stream: "https://pulse.topstrime.online/tv/119051/feqros/S1/E5/master.m3u8"
      },
      {
        id: "s1e6",
        title: "Épisode 6",
        season: 1,
        episode: 6,
        stream: "https://pulse.topstrime.online/tv/119051/4f0xlr/S1/E6/master.m3u8"
      },
       {
        id: "s1e7",
        title: "Épisode 7",
        season: 1,
        episode: 7,
        stream: "https://pulse.topstrime.online/tv/119051/lt5pvl/S1/E7/master.m3u8"
      },
      {
        id: "s1e8",
        title: "Épisode 8",
        season: 1,
        episode: 8,
        stream: "https://pulse.topstrime.online/tv/119051/cya5bi/S1/E8/master.m3u8"
      },
        {
        id: "s2e1",
        title: "Épisode 1",
        season: 2,
        episode: 1,
        stream: "https://pulse.topstrime.online/tv/119051/zfm5xe/S2/E1/master.m3u8"
      },
      {
        id: "s2e2",
        title: "Épisode 2",
        season: 2,
        episode: 2,
        stream: "https://pulse.topstrime.online/tv/119051/musbbc/S2/E2/master.m3u8"
      },
      {
        id: "s2e3",
        title: "Épisode 3",
        season: 2,
        episode: 3,
        stream: "https://pulse.topstrime.online/tv/119051/fihpzg/S2/E3/master.m3u8"
      },
        {
        id: "s2e4",
        title: "Épisode 4",
        season: 2,
        episode: 4,
        stream: "https://pulse.topstrime.online/tv/119051/zh7ine/S2/E4/master.m3u8"
      },
      {
        id: "s2e5",
        title: "Épisode 5",
        season: 2,
        episode: 5,
        stream: "https://pulse.topstrime.online/tv/119051/g0bs80/S2/E5/master.m3u8"
      },
      {
        id: "s2e6",
        title: "Épisode 6",
        season: 2,
        episode: 6,
        stream: "https://pulse.topstrime.online/tv/119051/d6g8kc/S2/E6/master.m3u8"
      },
       {
        id: "s2e7",
        title: "Épisode 7",
        season: 2,
        episode: 7,
        stream: "https://pulse.topstrime.online/tv/119051/p7tzot/S2/E7/master.m3u8"
      },
      {
        id: "s2e8",
        title: "Épisode 8",
        season: 2,
        episode: 8,
        stream: "https://pulse.topstrime.online/tv/119051/m15l7h/S2/E8/master.m3u8"
      }
    ]
  },

  {
    id: "tt21638826",
    type: "series",
    name: "Dope Thief",
    poster: fetchPosterFromIMDb("tt13443470"),
    description: "Deux amis de Philadelphie se font passer pour des agents de la DEA pour braquer des petits dealers. L’arnaque est parfaite, jusqu’à ce qu’ils visent la mauvaise personne et soient pris pour cible par un immense réseau de trafic de drogue.",
    genres: ["Comedy", "Fantasy"],
    videos: [
      {
        id: "s1e1",
        title: "Épisode 1",
        season: 1,
        episode: 1,
        stream: "https://pulse.topstrime.online/tv/209876/udne3l/S1/E1/master.m3u8"
      },
      {
        id: "s1e2",
        title: "Épisode 2",
        season: 1,
        episode: 2,
        stream: "https://pulse.topstrime.online/tv/209876/dx6117/S1/E2/master.m3u8"
      },
      {
        id: "s1e3",
        title: "Épisode 3",
        season: 1,
        episode: 3,
        stream: "https://pulse.topstrime.online/tv/209876/yl5nwe/S1/E3/master.m3u8"
      },
        {
        id: "s1e4",
        title: "Épisode 4",
        season: 1,
        episode: 4,
        stream: "https://pulse.topstrime.online/tv/209876/neuw3h/S1/E4/master.m3u8"
      },
      {
        id: "s1e5",
        title: "Épisode 5",
        season: 1,
        episode: 5,
        stream: "https://pulse.topstrime.online/tv/209876/r5lov8/S1/E5/master.m3u8"
      },
      {
        id: "s1e6",
        title: "Épisode 6",
        season: 1,
        episode: 6,
        stream: "https://pulse.topstrime.online/tv/209876/0kew5v/S1/E6/master.m3u8"
      },
       {
        id: "s1e7",
        title: "Épisode 7",
        season: 1,
        episode: 7,
        stream: "https://pulse.topstrime.online/tv/209876/54qrff/S1/E7/master.m3u8"
      },
      {
        id: "s1e8",
        title: "Épisode 8",
        season: 1,
        episode: 8,
        stream: "https://pulse.topstrime.online/tv/209876/pcawzz/S1/E8/master.m3u8"
      }
    ]
  },

     {
    id: "tt31806048",
    type: "series",
    name: "Hostage",
    poster: fetchPosterFromIMDb("tt13443470"),
    description: "Le mari du Premier ministre britannique est kidnappé, le président français fait l'objet d'un chantage. Ils doivent gérer leur rivalité tout en découvrant un complot qui les menace tous les deux.",
    genres: ["Comedy", "Fantasy"],
    videos: [
      {
        id: "s1e1",
        title: "Épisode 1",
        season: 1,
        episode: 1,
        stream: "https://pulse.topstrime.online/tv/248937/cqleut/S1/E1/master.m3u8"
      },
      {
        id: "s1e2",
        title: "Épisode 2",
        season: 1,
        episode: 2,
        stream: "https://pulse.topstrime.online/tv/248937/v94n00/S1/E2/master.m3u8"
      },
      {
        id: "s1e3",
        title: "Épisode 3",
        season: 1,
        episode: 3,
        stream: "https://pulse.topstrime.online/tv/248937/70wgya/S1/E3/master.m3u8"
      },
        {
        id: "s1e4",
        title: "Épisode 4",
        season: 1,
        episode: 4,
        stream: "https://pulse.topstrime.online/tv/248937/he3w7h/S1/E4/master.m3u8"
      },
      {
        id: "s1e5",
        title: "Épisode 5",
        season: 1,
        episode: 5,
        stream: "https://pulse.topstrime.online/tv/248937/ccsj30/S1/E5/master.m3u8"
      }
    ]
  },

     {
    id: "tt32146392",
    type: "series",
    name: "Deux Tombes",
    poster: fetchPosterFromIMDb("tt13443470"),
    description: "Le mari du Premier ministre britannique est kidnappé, le président français fait l'objet d'un chantage. Ils doivent gérer leur rivalité tout en découvrant un complot qui les menace tous les deux.",
    genres: ["Comedy", "Fantasy"],
    videos: [
      {
        id: "s1e1",
        title: "Épisode 1",
        season: 1,
        episode: 1,
        stream: "https://neon-monstera-87a431.netlify.app/master.m3u8"
      },
      {
        id: "s1e2",
        title: "Épisode 2",
        season: 1,
        episode: 2,
        stream: "https://willowy-cactus-8c7dea.netlify.app/master.m3u8"
      },
      {
        id: "s1e3",
        title: "Épisode 3",
        season: 1,
        episode: 3,
        stream: "https://magenta-rabanadas-6fa517.netlify.app/master.m3u8"
      }
    ]
  },

   {
    id: "tt30428143",
    type: "series",
    name: "Apple Cider Vinegar",
    poster: fetchPosterFromIMDb("tt13443470"),
    description: "La vie de Belle Gibson, gourou du bien-être, très suivie sur les réseaux sociaux, où elle prétendait souffrir d'un cancer tout en contrôlant sa maladie grâce à des thérapies auto-administrées. Elle a avoué que tout cela était faux.",
    genres: ["Comedy", "Fantasy"],
    videos: [
      {
        id: "s1e1",
        title: "Épisode 1",
        season: 1,
        episode: 1,
        stream: "https://pulse.topstrime.online/tv/241501/e0zgqi/S1/E1/master.m3u8"
      },
      {
        id: "s1e2",
        title: "Épisode 2",
        season: 1,
        episode: 2,
        stream: "https://glistening-sherbet-f1134c.netlify.app/master.m3u8"
      },
      {
        id: "s1e3",
        title: "Épisode 3",
        season: 1,
        episode: 3,
        stream: "https://pulse.topstrime.online/tv/241501/aujni2/S1/E3/master.m3u8"
      },
      {
        id: "s1e4",
        title: "Épisode 4",
        season: 1,
        episode: 4,
        stream: "https://pulse.topstrime.online/tv/241501/990biw/S1/E4/master.m3u8"
      },
      {
        id: "s1e5",
        title: "Épisode 5",
        season: 1,
        episode: 5,
        stream: "https://pulse.topstrime.online/tv/241501/5robox/S1/E5/master.m3u8"
      },
      {
        id: "s1e6",
        title: "Épisode 6",
        season: 1,
        episode: 6,
        stream: "https://pulse.topstrime.online/tv/241501/7kvh77/S1/E6/master.m3u8"
      }
    ]
  },

  {
    id: "tt18332852",
    type: "series",
    name: "Outlander: Blood of My Blood",
    poster: fetchPosterFromIMDb("tt13443470"),
    description: "Préquel de la série Outlander se concentre sur la vie et les fréquentations des parents de Jamie Fraser : Brian Fraser et Ellen Mackenzie.",
    genres: ["Comedy", "Fantasy"],
    videos: [
      {
        id: "s1e1",
        title: "Épisode 1",
        season: 1,
        episode: 1,
        stream: "https://pulse.topstrime.online/tv/207484/jsvq66/S1/E1/master.m3u8"
      },
      {
        id: "s1e2",
        title: "Épisode 2",
        season: 1,
        episode: 2,
        stream: "https://pulse.topstrime.online/tv/207484/6q5hot/S1/E2/master.m3u8"
      },
      {
        id: "s1e3",
        title: "Épisode 3",
        season: 1,
        episode: 3,
        stream: "https://pulse.topstrime.online/tv/207484/a3ji61/S1/E3/master.m3u8"
      },
      {
        id: "s1e4",
        title: "Épisode 4",
        season: 1,
        episode: 4,
        stream: "https://pulse.topstrime.online/tv/207484/f42ia9/S1/E4/master.m3u8"
      },
      {
        id: "s1e5",
        title: "Épisode 5",
        season: 1,
        episode: 5,
        stream: "https://pulse.topstrime.online/tv/207484/spfqdf/S1/E5/master.m3u8"
      },
      {
        id: "s1e6",
        title: "Épisode 6",
        season: 1,
        episode: 6,
        stream: "https://pulse.topstrime.online/tv/207484/va5dxy/S1/E6/master.m3u8"
      }
    ]
  },

  {
    id: "tt36125791",
    type: "series",
    name: "Soleil noir",
    poster: fetchPosterFromIMDb("tt13443470"),
    description: "Une femme fuyant son passé est accusée de meurtre après le décès de son employeur dans une ferme de fleurs - pour apprendre ensuite qu'il était son père biologique.",
    genres: ["Comedy", "Fantasy"],
    videos: [
      {
        id: "s1e1",
        title: "Épisode 1",
        season: 1,
        episode: 1,
        stream: "https://pulse.topstrime.online/tv/272466/4ys8mc/S1/E1/master.m3u8"
      },
      {
        id: "s1e2",
        title: "Épisode 2",
        season: 1,
        episode: 2,
        stream: "https://pulse.topstrime.online/tv/272466/akri3b/S1/E2/master.m3u8"
      },
      {
        id: "s1e3",
        title: "Épisode 3",
        season: 1,
        episode: 3,
        stream: "https://pulse.topstrime.online/tv/272466/ohs6y0/S1/E3/master.m3u8"
      },
      {
        id: "s1e4",
        title: "Épisode 4",
        season: 1,
        episode: 4,
        stream: "https://pulse.topstrime.online/tv/272466/r373tu/S1/E4/master.m3u8"
      },
      {
        id: "s1e5",
        title: "Épisode 5",
        season: 1,
        episode: 5,
        stream: "https://pulse.topstrime.online/tv/272466/nkku1p/S1/E5/master.m3u8"
      },
      {
        id: "s1e6",
        title: "Épisode 6",
        season: 1,
        episode: 6,
        stream: "https://pulse.topstrime.online/tv/272466/htv0wl/S1/E6/master.m3u8"
      }
    ]
  },

   {
    id: "tt28106730",
    type: "series",
    name: "The Trauma Code: Appel à l'Héroïsme ?",
    poster: fetchPosterFromIMDb("tt13443470"),
    description: "Une équipe d'élite de spécialistes en traumatologie dans un hôpital universitaire dirigée par le génie médecin Baek Kang-hyeok.",
    genres: ["Comedy", "Fantasy"],
    videos: [
      {
        id: "s1e1",
        title: "Épisode 1",
        season: 1,
        episode: 1,
        stream: "https://pulse.topstrime.online/tv/217553/oujh42/S1/E1/master.m3u8"
      },
      {
        id: "s1e2",
        title: "Épisode 2",
        season: 1,
        episode: 2,
        stream: "https://pulse.topstrime.online/tv/217553/fk4gtu/S1/E2/master.m3u8"
      },
      {
        id: "s1e3",
        title: "Épisode 3",
        season: 1,
        episode: 3,
        stream: "https://pulse.topstrime.online/tv/217553/xkh9g2/S1/E3/master.m3u8"
      },
        {
        id: "s1e4",
        title: "Épisode 4",
        season: 1,
        episode: 4,
        stream: "https://pulse.topstrime.online/tv/217553/rfym4c/S1/E4/master.m3u8"
      },
      {
        id: "s1e5",
        title: "Épisode 5",
        season: 1,
        episode: 5,
        stream: "https://pulse.topstrime.online/tv/217553/7b62w6/S1/E5/master.m3u8"
      },
      {
        id: "s1e6",
        title: "Épisode 6",
        season: 1,
        episode: 6,
        stream: "https://pulse.topstrime.online/tv/217553/5sqf9c/S1/E6/master.m3u8"
      },
       {
        id: "s1e7",
        title: "Épisode 7",
        season: 1,
        episode: 7,
        stream: "https://pulse.topstrime.online/tv/217553/igagnq/S1/E7/master.m3u8"
      },
      {
        id: "s1e8",
        title: "Épisode 8",
        season: 1,
        episode: 8,
        stream: "https://pulse.topstrime.online/tv/217553/93of7h/S1/E8/master.m3u8"
      }
    ]
  },

   {
    id: "tt36056620",
    type: "series",
    name: "S Line",
    poster: fetchPosterFromIMDb("tt13443470"),
    description: "Une jeune femme dotée de la capacité de voir de mystérieuses connexions rouges entre les amoureux découvre que son don secret n'est plus unique lorsque des lunettes spéciales conférant des pouvoirs similaires apparaissent sur le marché noir.",
    genres: ["Comedy", "Fantasy"],
    videos: [
      {
        id: "s1e1",
        title: "Épisode 1",
        season: 1,
        episode: 1,
        stream: "https://pulse.topstrime.online/tv/232402/lvoq7e/S1/E1/master.m3u8"
      },
      {
        id: "s1e2",
        title: "Épisode 2",
        season: 1,
        episode: 2,
        stream: "https://pulse.topstrime.online/tv/232402/5s1til/S1/E2/master.m3u8"
      },
      {
        id: "s1e3",
        title: "Épisode 3",
        season: 1,
        episode: 3,
        stream: "https://pulse.topstrime.online/tv/232402/w2pzmc/S1/E3/master.m3u8"
      },
      {
        id: "s1e4",
        title: "Épisode 4",
        season: 1,
        episode: 4,
        stream: "https://pulse.topstrime.online/tv/232402/8v58mm/S1/E4/master.m3u8"
      },
      {
        id: "s1e5",
        title: "Épisode 5",
        season: 1,
        episode: 5,
        stream: "https://pulse.topstrime.online/tv/232402/b9ttm1/S1/E5/master.m3u8"
      },
      {
        id: "s1e6",
        title: "Épisode 6",
        season: 1,
        episode: 6,
        stream: "https://luminous-lokum-4d3c4a.netlify.app/master.m3u8"
      }
    ]
  }
  
];

// === Manifest ===
const manifest = {
  id: "community.directhls",
  version: "1.0.0",
  catalogs: [
    { 
      type: "movie", 
      id: "directhls_movies", 
      name: "Direct HLS Movies",
      extra: [{ name: "search", isRequired: false }]
    },
    { 
      type: "series", 
      id: "directhls_series", 
      name: "Direct HLS Series",
      extra: [{ name: "search", isRequired: false }]
    }
  ],
  resources: [
    "catalog",
    "meta",
    "stream"
  ],
  types: ["movie", "series"],
  name: "Direct HLS Addon",
  description: "Streaming direct via HLS",
  idPrefixes: ["tt"]
};

// === Handler ===
export default function handler(req, res) {
  // CORS headers
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Headers", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS");

  if (req.method === 'OPTIONS') {
    res.statusCode = 200;
    return res.end();
  }

  const url = new URL(req.url, "http://localhost");
  const pathname = url.pathname;
  const parts = pathname.split('/').filter(Boolean);

  console.log('Request:', pathname, 'Parts:', parts);

  // Manifest
  if (pathname === '/manifest.json') {
    return sendJSON(res, manifest);
  }

  // Catalog
  if (parts[0] === 'catalog') {
    const catalogType = parts[1]; // movie or series
    const metas = catalogData
      .filter(item => item.type === catalogType)
      .map(item => ({
        id: item.id,
        type: item.type,
        name: item.name,
        poster: item.poster,
        posterShape: "regular",
        description: item.description || `${item.name} - Streaming direct`,
        genres: item.genres || ["Drama"]
      }));
    
    return sendJSON(res, { metas });
  }

  // Meta
  if (parts[0] === 'meta') {
    const type = parts[1]; // movie or series
    const id = decodeURIComponent(stripJson(parts[2]));
    
    console.log('Meta request for:', type, id);

    const item = catalogData.find(x => x.id === id && x.type === type);
    
    if (!item) {
      return sendJSON(res, { error: "Not found" }, 404);
    }

    if (item.type === 'movie') {
      const meta = {
        id: item.id,
        type: item.type,
        name: item.name,
        poster: item.poster,
        description: item.description,
        genres: item.genres,
        runtime: "120 min"
      };
      return sendJSON(res, { meta });
    } else if (item.type === 'series') {
      const meta = {
        id: item.id,
        type: item.type,
        name: item.name,
        poster: item.poster,
        description: item.description,
        genres: item.genres,
        videos: item.videos.map(video => ({
          id: `${item.id}:${video.season}:${video.episode}`,
          title: video.title,
          season: video.season,
          episode: video.episode,
          released: new Date().toISOString().split('T')[0]
        }))
      };
      return sendJSON(res, { meta });
    }
  }

  // Stream
  if (parts[0] === 'stream') {
    const type = parts[1]; // movie or series
    const id = decodeURIComponent(stripJson(parts[2]));
    
    console.log('Stream request for:', type, id);

    let streamUrl = null;
    let title = "";

    // Handle movies
    if (type === 'movie') {
      const movie = catalogData.find(x => x.id === id && x.type === 'movie');
      if (movie) {
        streamUrl = movie.stream;
        title = movie.name;
      }
    }
    
    // Handle series episodes (format: tt13443470:1:1)
    if (type === 'series' && id.includes(':')) {
      const [seriesId, season, episode] = id.split(':');
      const series = catalogData.find(x => x.id === seriesId && x.type === 'series');
      
      if (series && series.videos) {
        const video = series.videos.find(v => 
          v.season === parseInt(season) && v.episode === parseInt(episode)
        );
        
        if (video) {
          streamUrl = video.stream;
          title = `${series.name} - S${season}E${episode}`;
        }
      }
    }

    if (streamUrl) {
      const streamResponse = {
        streams: [
          {
            name: "Direct HLS",
            title: title,
            url: streamUrl,
            behaviorHints: {
              notWebReady: false,
              bingeGroup: `directhls-${type}`
            }
          }
        ]
      };
      return sendJSON(res, streamResponse);
    } else {
      console.log('No stream found for:', type, id);
      return sendJSON(res, { streams: [] });
    }
  }

  return sendJSON(res, { error: "Route not found" }, 404);
}
