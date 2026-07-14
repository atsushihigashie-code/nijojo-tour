// Nijo Castle Ninomaru Palace - Tour Content
// Coordinates are pixel positions on nijo_official_map.png (1179 x 1200)

const TOUR_CONTENT = [
  {
    n: 1,
    x: 982, y: 1184,
    title: "Tozamurai — First / Second / Third Rooms",
    subtitle: "遠侍 一の間・二の間・三の間",
    text: "The first rooms visitors enter, also known as the Tiger Rooms for the tiger paintings on their sliding doors and walls.",
    extra: "Tozamurai is the largest building in the palace. The tigers were painted by artists of the Kano school to impress visiting lords with Tokugawa power before they were even received."
  },
  {
    n: 2,
    x: 692, y: 1017,
    title: "Shikidai-no-ma",
    subtitle: "式台の間",
    text: "Said to be where messages and gifts were conveyed to the shogun.",
    extra: "This is where senior officials called roju greeted visiting lords on the shogun's behalf. The sliding-door paintings of pine trees symbolize lasting prosperity."
  },
  {
    n: 3,
    x: 483, y: 967,
    title: "Roju-no-ma (Elders' Room)",
    subtitle: "老中の間",
    text: "The transom carvings and flower-shaped fittings on the Ohiroma and Kuro-shoin pillars are extremely luxurious, made from 35cm-thick cypress.",
    extra: "The carvings are cut through 35cm-thick cypress boards from both sides, so the same design reads differently from each room."
  },
  {
    n: 4,
    x: 332, y: 844,
    title: "Ohiroma — First / Second Rooms",
    subtitle: "大広間 一の間・二の間",
    text: "This is the official meeting place for the Shogun and the feudal lords and nobles. It is the main room of the Great Hall, and consists of the first and second rooms.",
    extra: "In 1867, the 15th shogun Tokugawa Yoshinobu sat in this very room and announced the return of political power to the Emperor, ending over 260 years of shogunate rule."
  },
  {
    n: 5,
    x: 101, y: 534,
    title: "Kuro-shoin (Small Hall)",
    subtitle: "黒書院",
    text: "Called 'Kohiroma' in the Edo period, this was the second most official venue after the Ohiroma, used to meet lords close to the Tokugawa family.",
    extra: "Smaller than the Ohiroma but more delicately decorated, this was an intimate reception room for daimyo who had served the Tokugawa since before the Battle of Sekigahara."
  },
  {
    n: 6,
    x: 145, y: 215,
    title: "Shiro-shoin (White Shoin)",
    subtitle: "白書院",
    text: "Believed to have been the shogun's living room and bedroom. Ink paintings give it a calmer feel than the other buildings.",
    extra: "As the shogun's most private quarters, only he, his wife, and close attendants were allowed to enter — the equivalent of Edo Castle's inner chambers."
  },
  {
    n: 7,
    x: 568, y: 821,
    title: "Ohiroma — Fourth Room",
    subtitle: "大広間 四の間",
    text: "It is said that this is the place where the shogun stored his weapons when he went to Kyoto. The \"Pine and Hawk\" sliding screen painting is the most famous of all the paintings in the Ninomaru Palace, depicting a huge pine tree and a majestic hawk in the style of the Momoyama period (1568–1600).",
    extra: "Unlike the rest of the palace, this room and the Tozamurai were painted in the bold Momoyama style, believed to be the work of Kano Sanraku rather than Kano Tan'yu."
  },
  {
    n: 8,
    x: 687, y: 887,
    title: "Elders' Waiting Room",
    subtitle: "老中待合",
    text: "It consists of three rooms and was where the Elders waited.",
    extra: "The roju, the shogunate's most senior officials, waited here before formal audiences — a quiet backstage space just steps from the grandest halls."
  },
  {
    n: 9,
    x: 989, y: 894,
    title: "Imperial Envoy Waiting Room",
    subtitle: "勅使控えの間",
    text: "This is one of the rooms used for welcoming guests, and is said to have been used to receive envoys (imperial messengers) from the Imperial Court.",
    extra: "Receiving envoys from the Emperor was treated with special ceremony, reflecting the delicate balance of power between the shogunate and the Imperial Court."
  },
  {
    n: 10,
    x: 1087, y: 1079,
    title: "Imperial Envoy Room & Neighboring Rooms",
    subtitle: "勅使の間・若松の間ほか",
    text: "The paintings on the sliding doors, like those in the Imperial Envoy Room and the neighboring Young Pine Room and Hibiscus Room, feature plants as their subject matter, and have a feel suitable for aristocrats.",
    extra: "Softer floral motifs replace the fierce tigers and hawks seen elsewhere, a deliberate choice to suit the refined tastes of visiting court nobles."
  }
];

const MAP_IMAGE = "nijo_official_map.png";
const MAP_NATIVE_WIDTH = 1179;
const MAP_NATIVE_HEIGHT = 1200;
