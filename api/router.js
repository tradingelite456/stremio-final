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
    id: "tt1674782",
    type: "movie",
    name: "Karate Kid: Legends",
    stream: "https://pulse.topstrime.online/movie/1011477/pj6wor/master.m3u8"
  },

  {
    id: "tt32535595",
    type: "movie",
    name: "Doux Jésus",
    stream: "https://pulse.topstrime.online/movie/1284514/2wos5f/master.m3u8"
  },

  {
    id: "tt5950044",
    type: "movie",
    name: "Superman",
    stream: "https://pulse.topstrime.online/movie/1061474/9pbrb4/master.m3u8"
  },

  
  {
    id: "tt31194612",
    type: "movie",
    name: "Highest 2 Lowest",
    stream: "https://rainbow-dragon-dc7db7.netlify.app/master.m3u8"
  },

{
    id: "tt12908150",
    type: "movie",
    name: "Life of Chuck",
    stream: "https://pulse.topstrime.online/movie/842924/d3b1j8/master.m3u8"
  },

  {
    id: "tt31241595",
    type: "movie",
    name: "Zombies 4: Dawn of the Vampires",
    stream: "https://pulse.topstrime.online/movie/1243341/ybuk9j/master.m3u8"
  },

    {
    id: "tt18069420",
    type: "movie",
    name: "Les Schtroumpfs - Le Film",
    stream: "https://pulse.topstrime.online/movie/936108/e0932k/master.m3u8"
  },

  {
    id: "tt32843349",
    type: "movie",
    name: "Sorry, Baby",
    stream: "https://pulse.topstrime.online/movie/1205515/eef5bc/master.m3u8"
  },

  {
    id: "tt33610694",
    type: "movie",
    name: "Le Routard",
    stream: "https://pulse.topstrime.online/movie/1191666/b17ttv/master.m3u8"
  },

  {
    id: "tt26581740",
    type: "movie",
    name: "Évanouis",
    stream: "https://pulse.topstrime.online/movie/1078605/uonl8b/master.m3u8"
  },

{
    id: "tt33398195",
    type: "movie",
    name: "Les ailes collées",
    stream: "https://pulse.topstrime.online/movie/1313219/thaany/master.m3u8"
  },

  {
    id: "tt30840798",
    type: "movie",
    name: "The Phoenician Scheme",
    stream: "https://pulse.topstrime.online/movie/1137350/ouwbz1/master.m3u8"
  },

  {
    id: "tt31036941",
    type: "movie",
    name: "Jurassic World: Renaissance",
    stream: "https://pulse.topstrime.online/movie/1234821/jwpig0/master.m3u8"
  },

   {
    id: "tt35404638",
    type: "movie",
    name: "100 millions!",
    stream: "https://pulse.topstrime.online/movie/1309410/cavri7/master.m3u8"
  },

    {
    id: "tt4978342",
    type: "movie",
    name: "My Oxford Year",
    stream: "https://pulse.topstrime.online/movie/1307078/9o7f5l/master.m3u8"
  },

  {
    id: "tt30253473",
    type: "movie",
    name: "Materialists",
    stream: "https://pulse.topstrime.online/movie/1136867/wsexqv/master.m3u8"
  },

    {
    id: "tt11655566",
    type: "movie",
    name: "Lilo et Stitch",
    stream: "https://pulse.topstrime.online/movie/552524/usoqx3/master.m3u8"
  },

  
    {
    id: "tt9603208",
    type: "movie",
    name: "Mission: Impossible - The Final Reckoning",
    stream: "https://pulse.topstrime.online/movie/575265/s9vwt3/master.m3u8"
  },

  
    {
    id: "tt10548174",
    type: "movie",
    name: "28 ans plus tard",
    stream: "https://pulse.topstrime.online/movie/1100988/wu59z4/master.m3u8"
  },

  {
    id: "tt31179712",
    type: "movie",
    name: "Osiris",
    stream: "https://pulse.topstrime.online/movie/1241470/auauhy/master.m3u8"
  },

   {
    id: "tt31868189",
    type: "movie",
    name: "Happy Gilmore 2",
    stream: "https://pulse.topstrime.online/movie/1263256/ufwl6n/master.m3u8"
  },

  {
    id: "tt31193064",
    type: "movie",
    name: "Mikado",
    stream: "https://pulse.topstrime.online/movie/1099985/ehkeaw/master.m3u8"
  },

   {
    id: "tt35661599",
    type: "movie",
    name: "Les condés",
    stream: "https://pulse.topstrime.online/movie/1407934/d6gp3q/master.m3u8"
  },

    {
    id: "tt32299316",
    type: "movie",
    name: "Dangerous Animals",
    stream: "https://pulse.topstrime.online/movie/1285965/ojgtpp/master.m3u8"
  },

   {
    id: "tt27052633",
    type: "movie",
    name: "Echo Valley",
    stream: "https://pulse.topstrime.online/movie/1097311/3xjyfc/master.m3u8"
  },

  {
    id: "tt26342662",
    type: "movie",
    name: "M3GAN 2.0",
    stream: "https://pulse.topstrime.online/movie/1071585/hp1mdn/master.m3u8"
  },

  {
    id: "tt26743210",
    type: "movie",
    name: "Dragons",
    stream: "https://pulse.topstrime.online/movie/1087192/lhg7qi/master.m3u8"
  },

   {
    id: "tt33299083",
    type: "movie",
    name: "Madea : Mariage exotique",
    stream: "https://pulse.topstrime.online/movie/1246310/68dnf3/master.m3u8"
  },

  {
    id: "tt35669009",
    type: "movie",
    name: "Ziam",
    stream: "https://pulse.topstrime.online/movie/1429744/yxkf23/master.m3u8"
  },

   {
    id: "tt31806049",
    type: "movie",
    name: "Brick",
    stream: "https://pulse.topstrime.online/movie/1425045/jieooj/master.m3u8"
  },

  {
    id: "tt28637027",
    type: "movie",
    name: "Into the Deep",
    stream: "https://pulse.topstrime.online/movie/1388808/5n8wyl/master.m3u8"
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
    id: "tt31173096",
    type: "series",
    name: "El refugio atómico",
    poster: fetchPosterFromIMDb("tt13443470"),
    description: "Alors que la Troisième Guerre mondiale est sur le point d'éclater, un groupe de milliardaires se réfugie dans un bunker luxueux.",
    genres: ["Comedy", "Fantasy"],
    videos: [
      {
        id: "s1e1",
        title: "Épisode 1",
        season: 1,
        episode: 1,
        stream: "https://pulse.topstrime.online/tv/245648/19s7xh/S1/E1/master.m3u8"
      },
      {
        id: "s1e2",
        title: "Épisode 2",
        season: 1,
        episode: 2,
        stream: "https://pulse.topstrime.online/tv/245648/towm6m/S1/E2/master.m3u8"
      },
      {
        id: "s1e3",
        title: "Épisode 3",
        season: 1,
        episode: 3,
        stream: "https://pulse.topstrime.online/tv/245648/5a0agc/S1/E3/master.m3u8"
      },
        {
        id: "s1e4",
        title: "Épisode 4",
        season: 1,
        episode: 4,
        stream: "https://pulse.topstrime.online/tv/245648/wjfr3b/S1/E4/master.m3u8"
      },
      {
        id: "s1e5",
        title: "Épisode 5",
        season: 1,
        episode: 5,
        stream: "https://pulse.topstrime.online/tv/245648/4tp708/S1/E5/master.m3u8"
      },
      {
        id: "s1e6",
        title: "Épisode 6",
        season: 1,
        episode: 6,
        stream: "https://pulse.topstrime.online/tv/245648/bfyhx3/S1/E6/master.m3u8"
      },
       {
        id: "s1e7",
        title: "Épisode 7",
        season: 1,
        episode: 7,
        stream: "https://pulse.topstrime.online/tv/245648/zwx2uo/S1/E7/master.m3u8"
      },
      {
        id: "s1e8",
        title: "Épisode 8",
        season: 1,
        episode: 8,
        stream: "https://pulse.topstrime.online/tv/245648/y22o4a/S1/E8/master.m3u8"
      }
    ]
  },

   {
    id: "tt10946316",
    type: "series",
    name: "The Institute",
    poster: fetchPosterFromIMDb("tt13443470"),
    description: "Deux amis de Philadelphie se font passer pour des agents de la DEA pour braquer des petits dealers. L’arnaque est parfaite, jusqu’à ce qu’ils visent la mauvaise personne et soient pris pour cible par un immense réseau de trafic de drogue.",
    genres: ["Comedy", "Fantasy"],
    videos: [
      {
        id: "s1e1",
        title: "Épisode 1",
        season: 1,
        episode: 1,
        stream: "https://pulse.topstrime.online/tv/253372/bwh6pf/S1/E1/master.m3u8"
      },
      {
        id: "s1e2",
        title: "Épisode 2",
        season: 1,
        episode: 2,
        stream: "https://pulse.topstrime.online/tv/253372/21o0x8/S1/E2/master.m3u8"
      },
      {
        id: "s1e3",
        title: "Épisode 3",
        season: 1,
        episode: 3,
        stream: "https://pulse.topstrime.online/tv/253372/honrep/S1/E3/master.m3u8"
      },
        {
        id: "s1e4",
        title: "Épisode 4",
        season: 1,
        episode: 4,
        stream: "https://pulse.topstrime.online/tv/253372/yimgq3/S1/E4/master.m3u8"
      },
      {
        id: "s1e5",
        title: "Épisode 5",
        season: 1,
        episode: 5,
        stream: "https://pulse.topstrime.online/tv/253372/i9rh6k/S1/E5/master.m3u8"
      },
      {
        id: "s1e6",
        title: "Épisode 6",
        season: 1,
        episode: 6,
        stream: "https://pulse.topstrime.online/tv/253372/0xvc5w/S1/E6/master.m3u8"
      },
       {
        id: "s1e7",
        title: "Épisode 7",
        season: 1,
        episode: 7,
        stream: "https://pulse.topstrime.online/tv/253372/aa8xk8/S1/E7/master.m3u8"
      },
      {
        id: "s1e8",
        title: "Épisode 8",
        season: 1,
        episode: 8,
        stream: "https://pulse.topstrime.online/tv/253372/sr9mqk/S1/E8/master.m3u8"
      }
    ]
  },

  {
    id: "tt23055142",
    type: "series",
    name: "Black Rabbit",
    poster: fetchPosterFromIMDb("tt13443470"),
    description: "Deux amis de Philadelphie se font passer pour des agents de la DEA pour braquer des petits dealers. L’arnaque est parfaite, jusqu’à ce qu’ils visent la mauvaise personne et soient pris pour cible par un immense réseau de trafic de drogue.",
    genres: ["Comedy", "Fantasy"],
    videos: [
      {
        id: "s1e1",
        title: "Épisode 1",
        season: 1,
        episode: 1,
        stream: "https://pulse.topstrime.online/tv/249039/pide8p/S1/E1/master.m3u8"
      },
      {
        id: "s1e2",
        title: "Épisode 2",
        season: 1,
        episode: 2,
        stream: "https://pulse.topstrime.online/tv/249039/a190gw/S1/E2/master.m3u8"
      },
      {
        id: "s1e3",
        title: "Épisode 3",
        season: 1,
        episode: 3,
        stream: "https://pulse.topstrime.online/tv/249039/zgw6lp/S1/E3/master.m3u8"
      },
        {
        id: "s1e4",
        title: "Épisode 4",
        season: 1,
        episode: 4,
        stream: "https://pulse.topstrime.online/tv/249039/55j79q/S1/E4/master.m3u8"
      },
      {
        id: "s1e5",
        title: "Épisode 5",
        season: 1,
        episode: 5,
        stream: "https://pulse.topstrime.online/tv/249039/fyybhm/S1/E5/master.m3u8"
      },
      {
        id: "s1e6",
        title: "Épisode 6",
        season: 1,
        episode: 6,
        stream: "https://pulse.topstrime.online/tv/249039/ntu4e1/S1/E6/master.m3u8"
      },
       {
        id: "s1e7",
        title: "Épisode 7",
        season: 1,
        episode: 7,
        stream: "https://pulse.topstrime.online/tv/249039/rau9x3/S1/E7/master.m3u8"
      },
      {
        id: "s1e8",
        title: "Épisode 8",
        season: 1,
        episode: 8,
        stream: "https://pulse.topstrime.online/tv/249039/of54da/S1/E8/master.m3u8"
      }
    ]
  },

  {
    id: "tt24163532",
    type: "series",
    name: "Smoke",
    poster: fetchPosterFromIMDb("tt13443470"),
    description: "Un détective troublé et un énigmatique enquêteur sur les incendies criminels vont suivre les traces de deux incendiaires en série.",
    genres: ["Comedy", "Fantasy"],
    videos: [
      {
        id: "s1e1",
        title: "Épisode 1",
        season: 1,
        episode: 1,
        stream: "https://pulse.topstrime.online/tv/215995/pdj2p5/S1/E1/master.m3u8"
      },
      {
        id: "s1e2",
        title: "Épisode 2",
        season: 1,
        episode: 2,
        stream: "https://pulse.topstrime.online/tv/215995/1uove5/S1/E2/master.m3u8"
      },
      {
        id: "s1e3",
        title: "Épisode 3",
        season: 1,
        episode: 3,
        stream: "https://pulse.topstrime.online/tv/215995/4m7z4i/S1/E3/master.m3u8"
      },
        {
        id: "s1e4",
        title: "Épisode 4",
        season: 1,
        episode: 4,
        stream: "https://pulse.topstrime.online/tv/215995/i8fhyt/S1/E4/master.m3u8"
      },
      {
        id: "s1e5",
        title: "Épisode 5",
        season: 1,
        episode: 5,
        stream: "https://pulse.topstrime.online/tv/215995/7g37sq/S1/E5/master.m3u8"
      },
      {
        id: "s1e6",
        title: "Épisode 6",
        season: 1,
        episode: 6,
        stream: "https://pulse.topstrime.online/tv/215995/6g9bes/S1/E6/master.m3u8"
      },
       {
        id: "s1e7",
        title: "Épisode 7",
        season: 1,
        episode: 7,
        stream: "https://pulse.topstrime.online/tv/215995/nw9gxp/S1/E7/master.m3u8"
      },
      {
        id: "s1e8",
        title: "Épisode 8",
        season: 1,
        episode: 8,
        stream: "https://pulse.topstrime.online/tv/215995/u5sbl9/S1/E8/master.m3u8"
      },
      {
        id: "s1e9",
        title: "Épisode 9",
        season: 1,
        episode: 9,
        stream: "https://pulse.topstrime.online/tv/215995/eehzep/S1/E9/master.m3u8"
      }
    ]
  },


   {
    id: "tt33364760",
    type: "series",
    name: "Eondeokeobeo Haiseukul",
    poster: fetchPosterFromIMDb("tt13443470"),
    description: "L'agent vedette du NIS Jung Hae-seong est rétrogradé après l'échec d'une mission. Il se rend infiltré dans un lycée pour retrouver l'or disparu du roi Gojong. Il y rencontre son professeur Oh Soo-ah, qui le considère comme son premier amour perdu, réveillant ainsi un chagrin d'amour.",
    genres: ["Comedy", "Fantasy"],
    videos: [
      {
        id: "s1e1",
        title: "Épisode 1",
        season: 1,
        episode: 1,
        stream: "https://pulse.topstrime.online/tv/248244/omdsfi/S1/E1/master.m3u8"
      },
      {
        id: "s1e2",
        title: "Épisode 2",
        season: 1,
        episode: 2,
        stream: "https://pulse.topstrime.online/tv/248244/bqcctu/S1/E2/master.m3u8"
      },
      {
        id: "s1e3",
        title: "Épisode 3",
        season: 1,
        episode: 3,
        stream: "https://pulse.topstrime.online/tv/248244/6olr2y/S1/E3/master.m3u8"
      },
        {
        id: "s1e4",
        title: "Épisode 4",
        season: 1,
        episode: 4,
        stream: "https://pulse.topstrime.online/tv/248244/omhehh/S1/E4/master.m3u8"
      },
      {
        id: "s1e5",
        title: "Épisode 5",
        season: 1,
        episode: 5,
        stream: "https://pulse.topstrime.online/tv/248244/u6x9zn/S1/E5/master.m3u8"
      },
      {
        id: "s1e6",
        title: "Épisode 6",
        season: 1,
        episode: 6,
        stream: "https://pulse.topstrime.online/tv/248244/8c1nao/S1/E6/master.m3u8"
      },
       {
        id: "s1e7",
        title: "Épisode 7",
        season: 1,
        episode: 7,
        stream: "https://pulse.topstrime.online/tv/248244/fvbotx/S1/E7/master.m3u8"
      },
      {
        id: "s1e8",
        title: "Épisode 8",
        season: 1,
        episode: 8,
        stream: "https://pulse.topstrime.online/tv/248244/kg1kcb/S1/E8/master.m3u8"
      },
      {
        id: "s1e9",
        title: "Épisode 9",
        season: 1,
        episode: 9,
        stream: "https://pulse.topstrime.online/tv/248244/xfhibm/S1/E9/master.m3u8"
      },
      {
        id: "s1e10",
        title: "Épisode 10",
        season: 1,
        episode: 10,
        stream: "https://pulse.topstrime.online/tv/248244/284yo0/S1/E10/master.m3u8"
      },
       {
        id: "s1e11",
        title: "Épisode 11",
        season: 1,
        episode: 11,
        stream: "https://pulse.topstrime.online/tv/248244/uca0uy/S1/E11/master.m3u8"
      },
      {
        id: "s1e12",
        title: "Épisode 12",
        season: 1,
        episode: 12,
        stream: "https://pulse.topstrime.online/tv/248244/to8bfn/S1/E12/master.m3u8"
      }
    ]
  },

  
   {
    id: "tt23649128",
    type: "series",
    name: "The Studio",
    poster: fetchPosterFromIMDb("tt13443470"),
    description: "Suit un studio de cinéma hollywoodien qui cherche à survivre dans un monde où il est de plus en plus difficile pour l'art et les affaires de vivre ensemble.",
    genres: ["Comedy", "Fantasy"],
    videos: [
      {
        id: "s1e1",
        title: "Épisode 1",
        season: 1,
        episode: 1,
        stream: "https://pulse.topstrime.online/tv/247767/aw1fd2/S1/E1/master.m3u8"
      },
      {
        id: "s1e2",
        title: "Épisode 2",
        season: 1,
        episode: 2,
        stream: "https://pulse.topstrime.online/tv/247767/o33azw/S1/E2/master.m3u8"
      },
      {
        id: "s1e3",
        title: "Épisode 3",
        season: 1,
        episode: 3,
        stream: "https://pulse.topstrime.online/tv/247767/r6b7f9/S1/E3/master.m3u8"
      },
        {
        id: "s1e4",
        title: "Épisode 4",
        season: 1,
        episode: 4,
        stream: "https://pulse.topstrime.online/tv/247767/noyesa/S1/E4/master.m3u8"
      },
      {
        id: "s1e5",
        title: "Épisode 5",
        season: 1,
        episode: 5,
        stream: "https://pulse.topstrime.online/tv/247767/1knp45/S1/E5/master.m3u8"
      },
      {
        id: "s1e6",
        title: "Épisode 6",
        season: 1,
        episode: 6,
        stream: "https://pulse.topstrime.online/tv/247767/bu8if4/S1/E6/master.m3u8"
      },
       {
        id: "s1e7",
        title: "Épisode 7",
        season: 1,
        episode: 7,
        stream: "https://pulse.topstrime.online/tv/247767/4jacco/S1/E7/master.m3u8"
      },
      {
        id: "s1e8",
        title: "Épisode 8",
        season: 1,
        episode: 8,
        stream: "https://pulse.topstrime.online/tv/247767/j0nslu/S1/E8/master.m3u8"
      },
      {
        id: "s1e9",
        title: "Épisode 9",
        season: 1,
        episode: 9,
        stream: "https://pulse.topstrime.online/tv/247767/7pic0i/S1/E9/master.m3u8"
      },
      {
        id: "s1e10",
        title: "Épisode 10",
        season: 1,
        episode: 10,
        stream: "https://pulse.topstrime.online/tv/247767/g4rycd/S1/E10/master.m3u8"
      }
    ]
  },

  {
    id: "tt26676904",
    type: "series",
    name: "Ballard",
    poster: fetchPosterFromIMDb("tt13443470"),
    description: "L'inspecteur Renee Ballard de la police de Los Angeles supervise une nouvelle division chargée des affaires non résolues au sein du service.",
    genres: ["Comedy", "Fantasy"],
    videos: [
      {
        id: "s1e1",
        title: "Épisode 1",
        season: 1,
        episode: 1,
        stream: "https://pulse.topstrime.online/tv/239826/rai9zo/S1/E1/master.m3u8"
      },
      {
        id: "s1e2",
        title: "Épisode 2",
        season: 1,
        episode: 2,
        stream: "https://pulse.topstrime.online/tv/239826/du122m/S1/E2/master.m3u8"
      },
      {
        id: "s1e3",
        title: "Épisode 3",
        season: 1,
        episode: 3,
        stream: "https://pulse.topstrime.online/tv/239826/vlhyu6/S1/E3/master.m3u8"
      },
        {
        id: "s1e4",
        title: "Épisode 4",
        season: 1,
        episode: 4,
        stream: "https://pulse.topstrime.online/tv/239826/mbuj46/S1/E4/master.m3u8"
      },
      {
        id: "s1e5",
        title: "Épisode 5",
        season: 1,
        episode: 5,
        stream: "https://pulse.topstrime.online/tv/239826/krzee3/S1/E5/master.m3u8"
      },
      {
        id: "s1e6",
        title: "Épisode 6",
        season: 1,
        episode: 6,
        stream: "https://pulse.topstrime.online/tv/239826/530rn4/S1/E6/master.m3u8"
      },
       {
        id: "s1e7",
        title: "Épisode 7",
        season: 1,
        episode: 7,
        stream: "https://pulse.topstrime.online/tv/239826/4wp2q1/S1/E7/master.m3u8"
      },
      {
        id: "s1e8",
        title: "Épisode 8",
        season: 1,
        episode: 8,
        stream: "https://pulse.topstrime.online/tv/239826/txjicp/S1/E8/master.m3u8"
      },
      {
        id: "s1e9",
        title: "Épisode 9",
        season: 1,
        episode: 9,
        stream: "https://pulse.topstrime.online/tv/239826/dlrwpk/S1/E9/master.m3u8"
      },
      {
        id: "s1e10",
        title: "Épisode 10",
        season: 1,
        episode: 10,
        stream: "https://pulse.topstrime.online/tv/239826/eqqb3m/S1/E10/master.m3u8"
      }
    ]
  },

  {
    id: "tt33043892",
    type: "series",
    name: "Dexter : Résurrection",
    poster: fetchPosterFromIMDb("tt13443470"),
    description: "Suit un studio de cinéma hollywoodien qui cherche à survivre dans un monde où il est de plus en plus difficile pour l'art et les affaires de vivre ensemble.",
    genres: ["Comedy", "Fantasy"],
    videos: [
      {
        id: "s1e1",
        title: "Épisode 1",
        season: 1,
        episode: 1,
        stream: "https://pulse.topstrime.online/tv/259909/g5oiqa/S1/E1/master.m3u8"
      },
      {
        id: "s1e2",
        title: "Épisode 2",
        season: 1,
        episode: 2,
        stream: "https://pulse.topstrime.online/tv/259909/acmedo/S1/E2/master.m3u8"
      },
      {
        id: "s1e3",
        title: "Épisode 3",
        season: 1,
        episode: 3,
        stream: "https://pulse.topstrime.online/tv/259909/lzrpev/S1/E3/master.m3u8"
      },
        {
        id: "s1e4",
        title: "Épisode 4",
        season: 1,
        episode: 4,
        stream: "https://pulse.topstrime.online/tv/259909/8cqzr9/S1/E4/master.m3u8"
      },
      {
        id: "s1e5",
        title: "Épisode 5",
        season: 1,
        episode: 5,
        stream: "https://pulse.topstrime.online/tv/259909/1p3bhl/S1/E5/master.m3u8"
      },
      {
        id: "s1e6",
        title: "Épisode 6",
        season: 1,
        episode: 6,
        stream: "https://pulse.topstrime.online/tv/259909/1mvkwl/S1/E6/master.m3u8"
      },
       {
        id: "s1e7",
        title: "Épisode 7",
        season: 1,
        episode: 7,
        stream: "https://pulse.topstrime.online/tv/259909/k6dnt4/S1/E7/master.m3u8"
      },
      {
        id: "s1e8",
        title: "Épisode 8",
        season: 1,
        episode: 8,
        stream: "https://pulse.topstrime.online/tv/259909/0rdk49/S1/E8/master.m3u8"
      },
      {
        id: "s1e9",
        title: "Épisode 9",
        season: 1,
        episode: 9,
        stream: "https://pulse.topstrime.online/tv/259909/clnpfp/S1/E9/master.m3u8"
      },
      {
        id: "s1e10",
        title: "Épisode 10",
        season: 1,
        episode: 10,
        stream: "https://pulse.topstrime.online/tv/259909/y7y0em/S1/E10/master.m3u8"
      }
    ]
  },

    {
    id: "tt31407116",
    type: "series",
    name: "Pulse",
    poster: fetchPosterFromIMDb("tt13443470"),
    description: "Il suit la vie personnelle et professionnelle des médecins et du personnel d'un centre de traumatologie très actif de Miami.",
    genres: ["Comedy", "Fantasy"],
    videos: [
      {
        id: "s1e1",
        title: "Épisode 1",
        season: 1,
        episode: 1,
        stream: "https://pulse.topstrime.online/tv/247784/74mm21/S1/E1/master.m3u8"
      },
      {
        id: "s1e2",
        title: "Épisode 2",
        season: 1,
        episode: 2,
        stream: "https://pulse.topstrime.online/tv/247784/sx5rhv/S1/E2/master.m3u8"
      },
      {
        id: "s1e3",
        title: "Épisode 3",
        season: 1,
        episode: 3,
        stream: "https://pulse.topstrime.online/tv/247784/lads51/S1/E3/master.m3u8"
      },
        {
        id: "s1e4",
        title: "Épisode 4",
        season: 1,
        episode: 4,
        stream: "https://pulse.topstrime.online/tv/247784/j2icex/S1/E4/master.m3u8"
      },
      {
        id: "s1e5",
        title: "Épisode 5",
        season: 1,
        episode: 5,
        stream: "https://pulse.topstrime.online/tv/247784/zw6bcd/S1/E5/master.m3u8"
      },
      {
        id: "s1e6",
        title: "Épisode 6",
        season: 1,
        episode: 6,
        stream: "https://pulse.topstrime.online/tv/247784/f8y6rf/S1/E6/master.m3u8"
      },
       {
        id: "s1e7",
        title: "Épisode 7",
        season: 1,
        episode: 7,
        stream: "https://pulse.topstrime.online/tv/247784/ncm5pq/S1/E7/master.m3u8"
      },
      {
        id: "s1e8",
        title: "Épisode 8",
        season: 1,
        episode: 8,
        stream: "https://pulse.topstrime.online/tv/247784/x2x1v4/S1/E8/master.m3u8"
      },
      {
        id: "s1e9",
        title: "Épisode 9",
        season: 1,
        episode: 9,
        stream: "https://pulse.topstrime.online/tv/247784/2524kp/S1/E9/master.m3u8"
      },
      {
        id: "s1e10",
        title: "Épisode 10",
        season: 1,
        episode: 10,
        stream: "https://pulse.topstrime.online/tv/247784/tyc6ct/S1/E10/master.m3u8"
      }
    ]
  },

   {
    id: "tt32384391",
    type: "series",
    name: "Les Thunderman: Incognito",
    poster: fetchPosterFromIMDb("tt13443470"),
    description: "Phoebe et Max sont envoyés sous couverture pour faire face à une nouvelle menace dans la station balnéaire de Secret Shores et emmènent Chloé avec eux pour développer son talent de super-héros.",
    genres: ["Comedy", "Fantasy"],
    videos: [
      {
        id: "s1e1",
        title: "Épisode 1",
        season: 1,
        episode: 1,
        stream: "https://pulse.topstrime.online/tv/254653/13l3xw/S1/E1/master.m3u8"
      },
      {
        id: "s1e2",
        title: "Épisode 2",
        season: 1,
        episode: 2,
        stream: "https://pulse.topstrime.online/tv/254653/gk0nb2/S1/E2/master.m3u8"
      },
      {
        id: "s1e3",
        title: "Épisode 3",
        season: 1,
        episode: 3,
        stream: "https://pulse.topstrime.online/tv/254653/5ez0tz/S1/E3/master.m3u8"
      },
        {
        id: "s1e4",
        title: "Épisode 4",
        season: 1,
        episode: 4,
        stream: "https://pulse.topstrime.online/tv/254653/iph197/S1/E4/master.m3u8"
      },
      {
        id: "s1e5",
        title: "Épisode 5",
        season: 1,
        episode: 5,
        stream: "https://pulse.topstrime.online/tv/254653/629wth/S1/E5/master.m3u8"
      },
      {
        id: "s1e6",
        title: "Épisode 6",
        season: 1,
        episode: 6,
        stream: "https://pulse.topstrime.online/tv/254653/wswo57/S1/E6/master.m3u8"
      },
       {
        id: "s1e7",
        title: "Épisode 7",
        season: 1,
        episode: 7,
        stream: "https://pulse.topstrime.online/tv/254653/9c2x4p/S1/E7/master.m3u8"
      },
      {
        id: "s1e8",
        title: "Épisode 8",
        season: 1,
        episode: 8,
        stream: "https://pulse.topstrime.online/tv/254653/6iho86/S1/E8/master.m3u8"
      },
      {
        id: "s1e9",
        title: "Épisode 9",
        season: 1,
        episode: 9,
        stream: "https://pulse.topstrime.online/tv/254653/3yb9ww/S1/E9/master.m3u8"
      },
      {
        id: "s1e10",
        title: "Épisode 10",
        season: 1,
        episode: 10,
        stream: "https://pulse.topstrime.online/tv/254653/tcajxz/S1/E10/master.m3u8"
      },
       {
        id: "s1e11",
        title: "Épisode 11",
        season: 1,
        episode: 11,
        stream: "https://pulse.topstrime.online/tv/254653/o98p5y/S1/E11/master.m3u8"
      },
      {
        id: "s1e12",
        title: "Épisode 12",
        season: 1,
        episode: 12,
        stream: "https://pulse.topstrime.online/tv/254653/unu3y5/S1/E12/master.m3u8"
      },
      {
        id: "s1e13",
        title: "Épisode 13",
        season: 1,
        episode: 13,
        stream: "https://pulse.topstrime.online/tv/254653/2jdvg1/S1/E13/master.m3u8"
      }
    ]
  },

   {
    id: "tt37504309",
    type: "series",
    name: "Unspeakable Sins",
    poster: fetchPosterFromIMDb("tt13443470"),
    description: "Phoebe et Max sont envoyés sous couverture pour faire face à une nouvelle menace dans la station balnéaire de Secret Shores et emmènent Chloé avec eux pour développer son talent de super-héros.",
    genres: ["Comedy", "Fantasy"],
    videos: [
      {
        id: "s1e1",
        title: "Épisode 1",
        season: 1,
        episode: 1,
        stream: "https://pulse.topstrime.online/tv/290276/n57qzr/S1/E1/master.m3u8"
      },
      {
        id: "s1e2",
        title: "Épisode 2",
        season: 1,
        episode: 2,
        stream: "https://pulse.topstrime.online/tv/290276/gz96iq/S1/E2/master.m3u8"
      },
      {
        id: "s1e3",
        title: "Épisode 3",
        season: 1,
        episode: 3,
        stream: "https://pulse.topstrime.online/tv/290276/kcs4sw/S1/E3/master.m3u8"
      },
        {
        id: "s1e4",
        title: "Épisode 4",
        season: 1,
        episode: 4,
        stream: "https://pulse.topstrime.online/tv/290276/zjqjyr/S1/E4/master.m3u8"
      },
      {
        id: "s1e5",
        title: "Épisode 5",
        season: 1,
        episode: 5,
        stream: "https://pulse.topstrime.online/tv/290276/nftn2a/S1/E5/master.m3u8"
      },
      {
        id: "s1e6",
        title: "Épisode 6",
        season: 1,
        episode: 6,
        stream: "https://pulse.topstrime.online/tv/290276/jtp6qd/S1/E6/master.m3u8"
      },
       {
        id: "s1e7",
        title: "Épisode 7",
        season: 1,
        episode: 7,
        stream: "https://pulse.topstrime.online/tv/290276/dzvhep/S1/E7/master.m3u8"
      },
      {
        id: "s1e8",
        title: "Épisode 8",
        season: 1,
        episode: 8,
        stream: "https://pulse.topstrime.online/tv/290276/zwxcsl/S1/E8/master.m3u8"
      },
      {
        id: "s1e9",
        title: "Épisode 9",
        season: 1,
        episode: 9,
        stream: "https://pulse.topstrime.online/tv/290276/3gvqgx/S1/E9/master.m3u8"
      },
      {
        id: "s1e10",
        title: "Épisode 10",
        season: 1,
        episode: 10,
        stream: "https://pulse.topstrime.online/tv/290276/i6auqi/S1/E10/master.m3u8"
      },
       {
        id: "s1e11",
        title: "Épisode 11",
        season: 1,
        episode: 11,
        stream: "https://pulse.topstrime.online/tv/290276/sxzuez/S1/E11/master.m3u8"
      },
      {
        id: "s1e12",
        title: "Épisode 12",
        season: 1,
        episode: 12,
        stream: "https://pulse.topstrime.online/tv/290276/ywqc1q/S1/E12/master.m3u8"
      },
      {
        id: "s1e13",
        title: "Épisode 13",
        season: 1,
        episode: 13,
        stream: "https://pulse.topstrime.online/tv/290276/9dij6b/S1/E13/master.m3u8"
      },
      {
        id: "s1e14",
        title: "Épisode 14",
        season: 1,
        episode: 14,
        stream: "https://pulse.topstrime.online/tv/290276/pq57tb/S1/E14/master.m3u8"
      },
      {
        id: "s1e15",
        title: "Épisode 15",
        season: 1,
        episode: 15,
        stream: "https://pulse.topstrime.online/tv/290276/0tgrda/S1/E15/master.m3u8"
      },
       {
        id: "s1e16",
        title: "Épisode 16",
        season: 1,
        episode: 16,
        stream: "https://pulse.topstrime.online/tv/290276/lox819/S1/E16/master.m3u8"
      },
      {
        id: "s1e17",
        title: "Épisode 17",
        season: 1,
        episode: 17,
        stream: "https://pulse.topstrime.online/tv/290276/xyou72/S1/E17/master.m3u8"
      },
      {
        id: "s1e18",
        title: "Épisode 18",
        season: 1,
        episode: 18,
        stream: "https://pulse.topstrime.online/tv/290276/8c3fnf/S1/E18/master.m3u8"
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
    id: "tt27368147",
    type: "series",
    name: "Tempest",
    poster: fetchPosterFromIMDb("tt13443470"),
    description: "Le mari du Premier ministre britannique est kidnappé, le président français fait l'objet d'un chantage. Ils doivent gérer leur rivalité tout en découvrant un complot qui les menace tous les deux.",
    genres: ["Comedy", "Fantasy"],
    videos: [
      {
        id: "s1e1",
        title: "Épisode 1",
        season: 1,
        episode: 1,
        stream: "https://pulse.topstrime.online/tv/223326/lcnrn2/S1/E1/master.m3u8"
      },
      {
        id: "s1e2",
        title: "Épisode 2",
        season: 1,
        episode: 2,
        stream: "https://pulse.topstrime.online/tv/223326/kncvy1/S1/E2/master.m3u8"
      },
      {
        id: "s1e3",
        title: "Épisode 3",
        season: 1,
        episode: 3,
        stream: "https://pulse.topstrime.online/tv/223326/i0u2zz/S1/E3/master.m3u8"
      },
        {
        id: "s1e4",
        title: "Épisode 4",
        season: 1,
        episode: 4,
        stream: "https://pulse.topstrime.online/tv/223326/ieejph/S1/E4/master.m3u8"
      },
      {
        id: "s1e5",
        title: "Épisode 5",
        season: 1,
        episode: 5,
        stream: "https://pulse.topstrime.online/tv/223326/8doobj/S1/E5/master.m3u8"
      }
    ]
  },

    {
    id: "tt36614693",
    type: "series",
    name: "WWE: Unreal",
    poster: fetchPosterFromIMDb("tt13443470"),
    description: "Le mari du Premier ministre britannique est kidnappé, le président français fait l'objet d'un chantage. Ils doivent gérer leur rivalité tout en découvrant un complot qui les menace tous les deux.",
    genres: ["Comedy", "Fantasy"],
    videos: [
      {
        id: "s1e1",
        title: "Épisode 1",
        season: 1,
        episode: 1,
        stream: "https://pulse.topstrime.online/tv/289485/dubi0d/S1/E1/master.m3u8"
      },
      {
        id: "s1e2",
        title: "Épisode 2",
        season: 1,
        episode: 2,
        stream: "https://pulse.topstrime.online/tv/289485/ktp13k/S1/E2/master.m3u8"
      },
      {
        id: "s1e3",
        title: "Épisode 3",
        season: 1,
        episode: 3,
        stream: "https://pulse.topstrime.online/tv/289485/j48v23/S1/E3/master.m3u8"
      },
        {
        id: "s1e4",
        title: "Épisode 4",
        season: 1,
        episode: 4,
        stream: "https://pulse.topstrime.online/tv/289485/9da1js/S1/E4/master.m3u8"
      },
      {
        id: "s1e5",
        title: "Épisode 5",
        season: 1,
        episode: 5,
        stream: "https://pulse.topstrime.online/tv/289485/squnfw/S1/E5/master.m3u8"
      }
    ]
  },

   {
    id: "tt31019484",
    type: "series",
    name: "Tu me manques",
    poster: fetchPosterFromIMDb("tt13443470"),
    description: "Le monde de l'inspecteur Kat Donovan s'écroule lorsqu'elle retrouve son ancien fiancé sur une application de rencontres. Cela conduit Kat à rouvrir le mystère non résolu du meurtre de son père.",
    genres: ["Comedy", "Fantasy"],
    videos: [
      {
        id: "s1e1",
        title: "Épisode 1",
        season: 1,
        episode: 1,
        stream: "https://pulse.topstrime.online/tv/244243/gn4nlr/S1/E1/master.m3u8"
      },
      {
        id: "s1e2",
        title: "Épisode 2",
        season: 1,
        episode: 2,
        stream: "https://pulse.topstrime.online/tv/244243/frya3f/S1/E2/master.m3u8"
      },
      {
        id: "s1e3",
        title: "Épisode 3",
        season: 1,
        episode: 3,
        stream: "https://pulse.topstrime.online/tv/244243/dmkuly/S1/E3/master.m3u8"
      },
        {
        id: "s1e4",
        title: "Épisode 4",
        season: 1,
        episode: 4,
        stream: "https://pulse.topstrime.online/tv/244243/yfomp3/S1/E4/master.m3u8"
      },
      {
        id: "s1e5",
        title: "Épisode 5",
        season: 1,
        episode: 5,
        stream: "https://pulse.topstrime.online/tv/244243/op68yg/S1/E5/master.m3u8"
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
    id: "tt30750108",
    type: "series",
    name: "Le Dôme de verre",
    poster: fetchPosterFromIMDb("tt13443470"),
    description: "Une criminologue et son ancien partenaire chef de la police enquêtent sur la disparition d'une jeune fille dans la petite ville suédoise où elle a été retenue captive.",
    genres: ["Comedy", "Fantasy"],
    videos: [
      {
        id: "s1e1",
        title: "Épisode 1",
        season: 1,
        episode: 1,
        stream: "https://pulse.topstrime.online/tv/275388/fse1tv/S1/E1/master.m3u8"
      },
      {
        id: "s1e2",
        title: "Épisode 2",
        season: 1,
        episode: 2,
        stream: "https://pulse.topstrime.online/tv/275388/bs5i1u/S1/E2/master.m3u8"
      },
      {
        id: "s1e3",
        title: "Épisode 3",
        season: 1,
        episode: 3,
        stream: "https://pulse.topstrime.online/tv/275388/9ynrob/S1/E3/master.m3u8"
      },
      {
        id: "s1e4",
        title: "Épisode 4",
        season: 1,
        episode: 4,
        stream: "https://pulse.topstrime.online/tv/275388/7mm24u/S1/E4/master.m3u8"
      },
      {
        id: "s1e5",
        title: "Épisode 5",
        season: 1,
        episode: 5,
        stream: "https://pulse.topstrime.online/tv/275388/3tlz5f/S1/E5/master.m3u8"
      },
      {
        id: "s1e6",
        title: "Épisode 6",
        season: 1,
        episode: 6,
        stream: "https://pulse.topstrime.online/tv/275388/9yujz9/S1/E6/master.m3u8"
      }
    ]
  },

  {
    id: "tt33246591",
    type: "series",
    name: "The Assassin",
    poster: fetchPosterFromIMDb("tt13443470"),
    description: "Une assassin à la retraite retrouve son fils dont elle s'est séparée, mais son dangereux passé les rattrape, les obligeant à fuir ensemble et à découvrir une sombre conspiration qui menace leur relation.",
    genres: ["Comedy", "Fantasy"],
    videos: [
      {
        id: "s1e1",
        title: "Épisode 1",
        season: 1,
        episode: 1,
        stream: "https://pulse.topstrime.online/tv/262352/6va1zl/S1/E1/master.m3u8"
      },
      {
        id: "s1e2",
        title: "Épisode 2",
        season: 1,
        episode: 2,
        stream: "https://pulse.topstrime.online/tv/262352/d2buie/S1/E2/master.m3u8"
      },
      {
        id: "s1e3",
        title: "Épisode 3",
        season: 1,
        episode: 3,
        stream: "https://pulse.topstrime.online/tv/262352/xd5591/S1/E3/master.m3u8"
      },
      {
        id: "s1e4",
        title: "Épisode 4",
        season: 1,
        episode: 4,
        stream: "https://pulse.topstrime.online/tv/262352/6zcsj9/S1/E4/master.m3u8"
      },
      {
        id: "s1e5",
        title: "Épisode 5",
        season: 1,
        episode: 5,
        stream: "https://pulse.topstrime.online/tv/262352/nxzvsl/S1/E5/master.m3u8"
      },
      {
        id: "s1e6",
        title: "Épisode 6",
        season: 1,
        episode: 6,
        stream: "https://pulse.topstrime.online/tv/262352/n6xo0b/S1/E6/master.m3u8"
      }
    ]
  },

   {
    id: "tt13623632",
    type: "series",
    name: "Alien: Earth",
    poster: fetchPosterFromIMDb("tt13443470"),
    description: "La vie de Belle Gibson, gourou du bien-être, très suivie sur les réseaux sociaux, où elle prétendait souffrir d'un cancer tout en contrôlant sa maladie grâce à des thérapies auto-administrées. Elle a avoué que tout cela était faux.",
    genres: ["Comedy", "Fantasy"],
    videos: [
      {
        id: "s1e1",
        title: "Épisode 1",
        season: 1,
        episode: 1,
        stream: "https://pulse.topstrime.online/tv/157239/vs5zrp/S1/E1/master.m3u8"
      },
      {
        id: "s1e2",
        title: "Épisode 2",
        season: 1,
        episode: 2,
        stream: "https://pulse.topstrime.online/tv/157239/1itbb5/S1/E2/master.m3u8"
      },
      {
        id: "s1e3",
        title: "Épisode 3",
        season: 1,
        episode: 3,
        stream: "https://pulse.topstrime.online/tv/157239/jbjrug/S1/E3/master.m3u8"
      },
      {
        id: "s1e4",
        title: "Épisode 4",
        season: 1,
        episode: 4,
        stream: "https://pulse.topstrime.online/tv/157239/raijmc/S1/E4/master.m3u8"
      },
      {
        id: "s1e5",
        title: "Épisode 5",
        season: 1,
        episode: 5,
        stream: "https://pulse.topstrime.online/tv/157239/8o19wi/S1/E5/master.m3u8"
      },
      {
        id: "s1e6",
        title: "Épisode 6",
        season: 1,
        episode: 6,
        stream: "https://pulse.topstrime.online/tv/157239/nzpdv9/S1/E6/master.m3u8"
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
    id: "tt36517681",
    type: "series",
    name: "Le Catalogue d'Amina",
    poster: fetchPosterFromIMDb("tt13443470"),
    description: "Une équipe d'élite de spécialistes en traumatologie dans un hôpital universitaire dirigée par le génie médecin Baek Kang-hyeok.",
    genres: ["Comedy", "Fantasy"],
    videos: [
      {
        id: "s1e1",
        title: "Épisode 1",
        season: 1,
        episode: 1,
        stream: "https://pulse.topstrime.online/tv/252125/l2djys/S1/E1/master.m3u8"
      },
      {
        id: "s1e2",
        title: "Épisode 2",
        season: 1,
        episode: 2,
        stream: "https://pulse.topstrime.online/tv/252125/k4oe8q/S1/E2/master.m3u8"
      },
      {
        id: "s1e3",
        title: "Épisode 3",
        season: 1,
        episode: 3,
        stream: "https://pulse.topstrime.online/tv/252125/kczu27/S1/E3/master.m3u8"
      },
        {
        id: "s1e4",
        title: "Épisode 4",
        season: 1,
        episode: 4,
        stream: "https://pulse.topstrime.online/tv/252125/yd6kf1/S1/E4/master.m3u8"
      },
      {
        id: "s1e5",
        title: "Épisode 5",
        season: 1,
        episode: 5,
        stream: "https://pulse.topstrime.online/tv/252125/3qpdl0/S1/E5/master.m3u8"
      },
      {
        id: "s1e6",
        title: "Épisode 6",
        season: 1,
        episode: 6,
        stream: "https://pulse.topstrime.online/tv/252125/ixfa00/S1/E6/master.m3u8"
      },
       {
        id: "s1e7",
        title: "Épisode 7",
        season: 1,
        episode: 7,
        stream: "https://pulse.topstrime.online/tv/252125/q5w5a6/S1/E7/master.m3u8"
      },
      {
        id: "s1e8",
        title: "Épisode 8",
        season: 1,
        episode: 8,
        stream: "https://pulse.topstrime.online/tv/252125/umc2fg/S1/E8/master.m3u8"
      }
    ]
  },

   {
    id: "tt36955264",
    type: "series",
    name: "Young Millionaires",
    poster: fetchPosterFromIMDb("tt13443470"),
    description: "Quatre amis de 17 ans gagnent à la loterie à Marseille, mais sont trop jeunes pour le réclamer. Leur jackpot de 17 millions entraîne des complications de plus en plus nombreuses : être riche pour des adolescents n'est pas aussi simple qu'il y paraît.",
    genres: ["Comedy", "Fantasy"],
    videos: [
      {
        id: "s1e1",
        title: "Épisode 1",
        season: 1,
        episode: 1,
        stream: "https://pulse.topstrime.online/tv/272467/fnl4gu/S1/E1/master.m3u8"
      },
      {
        id: "s1e2",
        title: "Épisode 2",
        season: 1,
        episode: 2,
        stream: "https://pulse.topstrime.online/tv/272467/16odew/S1/E2/master.m3u8"
      },
      {
        id: "s1e3",
        title: "Épisode 3",
        season: 1,
        episode: 3,
        stream: "https://pulse.topstrime.online/tv/272467/27496n/S1/E3/master.m3u8"
      },
        {
        id: "s1e4",
        title: "Épisode 4",
        season: 1,
        episode: 4,
        stream: "https://pulse.topstrime.online/tv/272467/vd81m5/S1/E4/master.m3u8"
      },
      {
        id: "s1e5",
        title: "Épisode 5",
        season: 1,
        episode: 5,
        stream: "https://pulse.topstrime.online/tv/272467/1fqfe6/S1/E5/master.m3u8"
      },
      {
        id: "s1e6",
        title: "Épisode 6",
        season: 1,
        episode: 6,
        stream: "https://pulse.topstrime.online/tv/272467/5677ow/S1/E6/master.m3u8"
      },
       {
        id: "s1e7",
        title: "Épisode 7",
        season: 1,
        episode: 7,
        stream: "https://pulse.topstrime.online/tv/272467/gcbmbg/S1/E7/master.m3u8"
      },
      {
        id: "s1e8",
        title: "Épisode 8",
        season: 1,
        episode: 8,
        stream: "https://pulse.topstrime.online/tv/272467/u4fcbu/S1/E8/master.m3u8"
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
  },

   {
    id: "tt31828121",
    type: "series",
    name: "Halva Malmö består av killar som dumpat mig",
    poster: fetchPosterFromIMDb("tt13443470"),
    description: "Une jeune femme dotée de la capacité de voir de mystérieuses connexions rouges entre les amoureux découvre que son don secret n'est plus unique lorsque des lunettes spéciales conférant des pouvoirs similaires apparaissent sur le marché noir.",
    genres: ["Comedy", "Fantasy"],
    videos: [
      {
        id: "s1e1",
        title: "Épisode 1",
        season: 1,
        episode: 1,
        stream: "https://pulse.topstrime.online/tv/283390/4coqif/S1/E1/master.m3u8"
      },
      {
        id: "s1e2",
        title: "Épisode 2",
        season: 1,
        episode: 2,
        stream: "https://pulse.topstrime.online/tv/283390/wk8eav/S1/E2/master.m3u8"
      },
      {
        id: "s1e3",
        title: "Épisode 3",
        season: 1,
        episode: 3,
        stream: "https://pulse.topstrime.online/tv/283390/2v5b09/S1/E3/master.m3u8"
      },
      {
        id: "s1e4",
        title: "Épisode 4",
        season: 1,
        episode: 4,
        stream: "https://pulse.topstrime.online/tv/283390/yrj79h/S1/E4/master.m3u8"
      },
      {
        id: "s1e5",
        title: "Épisode 5",
        season: 1,
        episode: 5,
        stream: "https://pulse.topstrime.online/tv/283390/7it7qy/S1/E5/master.m3u8"
      },
      {
        id: "s1e6",
        title: "Épisode 6",
        season: 1,
        episode: 6,
        stream: "https://pulse.topstrime.online/tv/283390/7gvoz1/S1/E6/master.m3u8"
      },
      {
        id: "s1e7",
        title: "Épisode 7",
        season: 1,
        episode: 7,
        stream: "https://pulse.topstrime.online/tv/283390/1kfkee/S1/E7/master.m3u8"
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
