import batman1 from "./images/batman/batman-buff.jpg";
import batman2 from "./images/batman/batman-main.jpg";
import batman3 from "./images/batman/batman-on-building.jpg";
import batman4 from "./images/batman/batman-stand.jpg";
import batman5 from "./images/batman/batman-wallpaper.jpg";
import batman6 from "./images/batman/batman1.jpg";
import batman7 from "./images/batman/batman2.jpg";

import spiderman1 from "./images/spiderman/spiderman-climbing.jpg";
import spiderman2 from "./images/spiderman/spiderman-comic1.jpg";
import spiderman3 from "./images/spiderman/spiderman-flying.jpg";
import spiderman4 from "./images/spiderman/spiderman-shadow.jpg";
import spiderman5 from "./images/spiderman/spiderman.jpg";
import spiderman6 from "./images/spiderman/spiderman1.jpg";
import spiderman7 from "./images/spiderman/spiderman2.jpg";
import spiderman8 from "./images/spiderman/spiderman3.jpg";

import wolverine1 from "./images/wolverine/the-wolverine-blackandwhite.jpg";
import wolverine2 from "./images/wolverine/wolverine.jpg";
import wolverine3 from "./images/wolverine/wolverine1.jpg";
import wolverine4 from "./images/wolverine/wolverine2.jpg";
import wolverine5 from "./images/wolverine/wolverine3.jpg";
import wolverine6 from "./images/wolverine/wolverine4.jpg";
import wolverine7 from "./images/wolverine/wolverine5.jpg";
import wolverine8 from "./images/wolverine/wolverine6.jpg";
import wolverine9 from "./images/wolverine/wolverine7.jpg";

import hulk1 from "./images/hulk/hulk1.jpg";
import hulk2 from "./images/hulk/hulk2.jpg";
import hulk3 from "./images/hulk/hulk3.jpg";
import hulk4 from "./images/hulk/hulk4.jpg";
import hulk5 from "./images/hulk/hulk5.jpg";

import masterchief1 from "./images/masterChief/masterchief1.jpg";
import masterchief2 from "./images/masterChief/masterchief2.jpg";
import masterchief3 from "./images/masterChief/masterchief3.jpg";
import masterchief4 from "./images/masterChief/masterchief4.jpg";
import masterchief5 from "./images/masterChief/masterchief5.jpg";

import terminator1 from "./images/terminator/terminator1.jpg";
import terminator2 from "./images/terminator/terminator2.jpg";
import terminator3 from "./images/terminator/terminator3.jpg";
import terminator4 from "./images/terminator/terminator4.jpg";
import terminator5 from "./images/terminator/terminator5.jpg";

import superman1 from "./images/superman/superman1.jpg";
import superman2 from "./images/superman/superman2.jpg";
import superman3 from "./images/superman/superman3.jpg";
import superman4 from "./images/superman/superman4.jpg";
import superman5 from "./images/superman/superman5.jpg";

import kratos1 from "./images/kratos/kratos1.png";
import kratos2 from "./images/kratos/kratos2.jpg";
import kratos3 from "./images/kratos/kratos3.png";
import kratos4 from "./images/kratos/kratos4.jpg";
import kratos5 from "./images/kratos/kratos5.jpg";
import kratos6 from "./images/kratos/kratos6.jpg";

import joker1 from "./images/joker/joker1.jpg";
import joker2 from "./images/joker/joker2.jpg";
import joker3 from "./images/joker/joker3.jpg";
import joker4 from "./images/joker/joker4.jpg";
import joker5 from "./images/joker/joker5.jpeg";

import wonderWoman1 from "./images/wonderWoman/wonderWoman1.jpg";
import wonderWoman2 from "./images/wonderWoman/wonderWoman2.jpg";
import wonderWoman3 from "./images/wonderWoman/wonderWoman3.jpg";
import wonderWoman4 from "./images/wonderWoman/wonderWoman4.jpg";
import wonderWoman5 from "./images/wonderWoman/wonderWoman5.jpg";
import wonderWoman6 from "./images/wonderWoman/wonderWoman6.jpg";

import captainAmerica1 from "./images/captainAmerica/captainAmerica1.jpg";
import captainAmerica2 from "./images/captainAmerica/captainAmerica2.jpg";
import captainAmerica3 from "./images/captainAmerica/captainAmerica3.jpg";
import captainAmerica4 from "./images/captainAmerica/captainAmerica4.jpg";
import captainAmerica5 from "./images/captainAmerica/captainAmerica5.jpg";

import deadpool1 from "./images/deadpool/deadpool1.jpg";
import deadpool2 from "./images/deadpool/deadpool2.jpg";
import deadpool3 from "./images/deadpool/deadpool3.jpg";
import deadpool4 from "./images/deadpool/deadpool4.jpg";
import deadpool5 from "./images/deadpool/deadpool5.jpg";
import deadpool6 from "./images/deadpool/deadpool6.jpg";
import deadpool7 from "./images/deadpool/deadpool7.jpg";

export default [
  {
    sys: {
      id: "1",
    },
    fields: {
      name: "batman",
      slug: "batman",
      company: "DC",
      price: 500,
      type: "hero",
      parties: true,
      willKill: false,
      featured: true,
      description:
        "Bruce Wayne, who witnessed the murder of his billionaire parents as a child, swore to avenge their deaths. He trained extensively to achieve mental and physical perfection, mastering martial arts, detective skills, and criminal psychology. Costumed as a bat to prey on the fears of criminals, and utilizing a high-tech arsenal, he became the legendary Batman.",
      extras: [
        "Silent",
        "State of the art gadgets",
        "Can reach and fly from high places",
        "Extremel skilled in hand to hand combat",
        "Will beat enemy to a pulp, but not kill them",
        "Master at detective work",
        "Background in taking down super villains",
      ],
      images: [
        {
          fields: {
            file: {
              url: batman1,
            },
          },
        },
        {
          fields: {
            file: {
              url: batman3,
            },
          },
        },
        {
          fields: {
            file: {
              url: batman2,
            },
          },
        },
        {
          fields: {
            file: {
              url: batman4,
            },
          },
        },
      ],
    },
  },
  {
    sys: {
      id: "2",
    },
    fields: {
      name: "spider-man",
      slug: "spider-man",
      type: "hero",
      company: "Marvel",
      price: 500,

      parties: true,
      willKill: false,
      featured: true,
      description:
        "The bite from a radioactive spider granted Peter Parker amazing arachnid-like powers. After losing his beloved Uncle Ben to a burglar, grief- stricken Peter vowed to use his incredible abilities to protect his city as the Amazing Spider-Man. Peter’s trials taught him an invaluable lesson: with great power, there must also come great responsibility.",
      extras: [
        "Can essentially fly using web slinging",
        "Can climb walls and ceilings",
        "Can incapacitate enemies and wrap them up in webbing for the authorities",
        "Top of the line gadgets",
        "Is a member of The Avengers and has superior backup",
        "Primarily serves NYC but can make exceptions to travel to other deplaces depending on the severity of the threat",
        "Skilled in taking down some of the worlds most dangerous villains, including New York's own Kingpin",
        "Master inventor",
      ],
      images: [
        {
          fields: {
            file: {
              url: spiderman7,
            },
          },
        },
        {
          fields: {
            file: {
              url: spiderman2,
            },
          },
        },
        {
          fields: {
            file: {
              url: spiderman3,
            },
          },
        },
        {
          fields: {
            file: {
              url: spiderman1,
            },
          },
        },
      ],
    },
  },
  {
    sys: {
      id: "3",
    },
    fields: {
      name: "wolverine",
      slug: "wolverine",
      type: "hero",
      company: "Marvel",
      price: 500,

      parties: false,
      willKill: true,
      featured: false,
      description:
        'A long-lived mutant with the rage of a beast and the soul of a Samurai, James "Logan" Howlett\'s once mysterious past is filled with blood, war and betrayal. Possessing an accelerated healing factor, keenly enhanced senses and bone claws in each hand (along with his skeleton) that are coated in adamantium; Wolverine is, without question, the ultimate weapon.',
      extras: [
        "Basically indestructible with super healing abilities and bones infused with adamantium steel",
        "Has retractable claws that can cut through steel",
        "Extremely fast and has super human strength",
        "Ruthless and can be deployed to deal with any super villain",
        "A member of the X-Men",
      ],
      images: [
        {
          fields: {
            file: {
              url: wolverine9,
            },
          },
        },
        {
          fields: {
            file: {
              url: wolverine5,
            },
          },
        },
        {
          fields: {
            file: {
              url: wolverine3,
            },
          },
        },
        {
          fields: {
            file: {
              url: wolverine7,
            },
          },
        },
      ],
    },
  },
  {
    sys: {
      id: "4",
    },
    fields: {
      name: "hulk",
      slug: "hulk",
      type: "hero",
      company: "Marvel",
      price: 700,

      parties: true,
      willKill: false,
      featured: false,
      description:
        "After being bombarded with a massive dose of gamma radiation while saving a young man's life during an experimental bomb testing, Dr. Robert Bruce Banner was transformed into the Incredible Hulk: a green behemoth who is the living personification of rage and pure physical strength.",
      extras: [
        "Incredible superhuman strength, durability, and healing factor",
        "Virtually indestructible",
        "Becomes more powerful as anger increases.",
        "As Banner, possesses a genius-level intellect & is an expert in multiple scientific fields, particularly the studies of physics & radiation.",
        "A member of the Avengers",
      ],
      images: [
        {
          fields: {
            file: {
              url: hulk1,
            },
          },
        },
        {
          fields: {
            file: {
              url: hulk2,
            },
          },
        },
        {
          fields: {
            file: {
              url: hulk3,
            },
          },
        },
        {
          fields: {
            file: {
              url: hulk4,
            },
          },
        },
      ],
    },
  },
  {
    sys: {
      id: "5",
    },
    fields: {
      name: "master chief",
      slug: "masterchief",
      type: "hero",
      company: "UNSC Naval Special Warfare Command",
      price: 700,

      parties: true,
      willKill: false,
      featured: false,
      description:
        'Master Chief is a towering supersoldier known as a "Spartan", raised and trained from childhood for combat. He is almost faceless, and rarely seen without his green-colored armor and helmet. He is commonly referred to by his naval rank, rather than his given birth name.',
      extras: [
        "The Master Chief stands about seven feet (2.13 m) tall and weighs 1,000 pounds (450 kg) in armor",
        "Can use any weapon effectively, be it Human, Covenant or Forerunner, occasionally dual-wielding sidearms for better effect.",
        "Underwent Carbide Ceramic Ossification which enhances his bones via grafting materials onto skeletal structures.",
        "Trained in all forms of military warfare, being an expert in hand-to-hand combat. Examples of his combat skills include killing a group of ODST troops with his bare hands and defeating Spartan Locke to hand-to-hand.",
      ],
      images: [
        {
          fields: {
            file: {
              url: masterchief5,
            },
          },
        },
        {
          fields: {
            file: {
              url: masterchief1,
            },
          },
        },
        {
          fields: {
            file: {
              url: masterchief3,
            },
          },
        },
        {
          fields: {
            file: {
              url: masterchief4,
            },
          },
        },
      ],
    },
  },
  {
    sys: {
      id: "6",
    },
    fields: {
      name: "Terminator T-800",
      slug: "terminator",
      type: "villain",
      company: "Skynet",
      price: 1000,

      parties: false,
      willKill: true,
      featured: false,
      description:
        "The Cyberdyne Systems Series 800 Terminator, or simply T-800, is a type of Terminator mass-produced by Skynet. The T-800 Terminator was Skynet's first cybernetic organism, with living tissue over a hyperalloy endoskeleton. This made it Skynet's first successful Infiltrator unit, capable of infiltrating the Resistance.",
      extras: [
        "Composed of an interior titanium steel casing and an organic exterior so they can take on a human form.",
        "It can't be bargained with. It can't be reasoned with. It doesn't feel pity or remorse or fear and it absolutely will not stop EVER until you are dead!",
        "They are extremely hard to destroy or even stop. Even while shot into pieces they still crawl around to succeed in its mission.",
        "The learning processor enables it to gather new skills through experience (including human interaction). The processor is able to sort and process information at superhuman speeds and it is unable to calculate wrong.",
      ],
      images: [
        {
          fields: {
            file: {
              url: terminator3,
            },
          },
        },
        {
          fields: {
            file: {
              url: terminator5,
            },
          },
        },
        {
          fields: {
            file: {
              url: terminator2,
            },
          },
        },
        {
          fields: {
            file: {
              url: terminator1,
            },
          },
        },
      ],
    },
  },
  {
    sys: {
      id: "7",
    },
    fields: {
      name: "superman",
      slug: "superman",
      type: "hero",
      company: "DC",
      price: 2000,

      parties: true,
      willKill: false,
      featured: true,
      description:
        "Superman is the sole survivor of the planet Krypton. His father, Jor-El, discovered that a nuclear chain reaction was building inside Krypton that would soon shatter the entire world. Jor-El therefore had his unborn son Kal-El removed from the Kryptonian Gestation Chambers and affixed the life matrix containing Kal-El to an experimental vessel for travel through hyperspace. Jor-El launched the starcraft toward Earth just before Krypton exploded." +
        "\nSuperman was, in effect, born on Earth when the starcraft landed there. Jonathan and Martha Kent found the infant inside the vessel and brought him to their farm in Smallville, Kansas. Since he appeared entirely human, the Kents assumed that the baby was a victim of a cruel experiment. At this time the baby had no super powers. The Kents named the infant Clark and raised him as their own son." +
        "\nAs clark grew older his Kryptonian body began developing superhuman abilities.",
      extras: [
        "Has superhuman strength and is invulnerable.",
        "Can fly faster than a speeding bullet.",
        "Possesses X-ray vision, allowing him to see through walls, and heat vision, allowing him to shoot red-hot beams out of his eyes.",
        "Can exhale with hurricane force if he chooses, as well as supercool his breath to freeze objects",
      ],
      images: [
        {
          fields: {
            file: {
              url: superman3,
            },
          },
        },
        {
          fields: {
            file: {
              url: superman1,
            },
          },
        },
        {
          fields: {
            file: {
              url: superman2,
            },
          },
        },
        {
          fields: {
            file: {
              url: superman5,
            },
          },
        },
      ],
    },
  },
  {
    sys: {
      id: "8",
    },
    fields: {
      name: "kratos",
      slug: "kratos",
      type: "hero",
      company: "No Company",
      price: 1000,

      parties: false,
      willKill: true,
      featured: false,
      description:
        "Kratos was a violent spartan warrior, a mighty general and a demigod born from the lions of Zeus. During his lifetime, he offered to enter servitude to Ares, to gain the power to defeat a barbarian horde.",
      extras: [
        "Able to overpower monsters that are massively lager than he is.",
        "Was trained by the Spartans to be a ruthless killing machine.",
        "Can move fast enough to make falling rocks look near-stationary.",
        "Possesses the Leviathan Axe: A magic battle axe crafted by the dwarves who forged Thor's hammer, as well as the Blades of Chaos: A pair of chained blades forged by Ares in the depths of Hades, which were seared to Kratos' arms after he became Ares' champion.",
      ],
      images: [
        {
          fields: {
            file: {
              url: kratos6,
            },
          },
        },
        {
          fields: {
            file: {
              url: kratos1,
            },
          },
        },
        {
          fields: {
            file: {
              url: kratos3,
            },
          },
        },
        {
          fields: {
            file: {
              url: kratos5,
            },
          },
        },
      ],
    },
  },
  {
    sys: {
      id: "9",
    },
    fields: {
      name: "joker",
      slug: "joker",
      type: "villain",
      company: "DC",
      price: 3000,

      parties: false,
      willKill: true,
      featured: false,
      description:
        "The Joker, Clown Prince of Crime, is Batman's arch-nemesis. An agent of chaos known for his malicious plots, wacky gadgets and insidious smile, he has caused Batman more suffering than any other villain he has ever faced. His origin, name, and true motivations remain a mystery.",
      extras: ["Fearless", "Genius-level intellect", "Master tactician"],
      images: [
        {
          fields: {
            file: {
              url: joker1,
            },
          },
        },
        {
          fields: {
            file: {
              url: joker2,
            },
          },
        },
        {
          fields: {
            file: {
              url: joker3,
            },
          },
        },
        {
          fields: {
            file: {
              url: joker4,
            },
          },
        },
      ],
    },
  },
  {
    sys: {
      id: "10",
    },
    fields: {
      name: "wonder woman",
      slug: "wonderWoman",
      type: "hero",
      company: "DC",
      price: 2000,

      parties: true,
      willKill: false,
      featured: false,
      description:
        "The princess of the Amazons, armed with superpowers of a god, Wonder Woman is one of Earth's most powerful defenders of peace, justice, and equality and a member of the Justice League. She is often considered an archetype for many non-comicbook heroines. She stands for Love and peace.",
      extras: [
        "Superhuman strength",
        "Super healing",
        "Enhanced senses",
        "Conversion of mind power to physical power",
      ],
      images: [
        {
          fields: {
            file: {
              url: wonderWoman5,
            },
          },
        },
        {
          fields: {
            file: {
              url: wonderWoman1,
            },
          },
        },
        {
          fields: {
            file: {
              url: wonderWoman3,
            },
          },
        },
        {
          fields: {
            file: {
              url: wonderWoman6,
            },
          },
        },
      ],
    },
  },
  {
    sys: {
      id: "11",
    },
    fields: {
      name: "captain america",
      slug: "captainAmerica",
      type: "hero",
      company: "Marvel",
      price: 1000,

      parties: true,
      willKill: false,
      featured: false,
      description:
        "During World War II, Steve Rogers volunteered to receive the experimental Super-Soldier Serum. Enhanced to the pinnacle of human physical potential and armed with an unbreakable shield, he became Captain America. After a failed mission left him encased in ice for decades, he was found and revived by the Avengers. Later joining their ranks and eventually becoming the team's leader.",
      extras: [
        "Has agility, strength, speed, endurance, and reaction time superior to any Olympic athlete who ever competed",
        "Mastered the martial art of American-style boxing and judo, and has combined these disciplines with his own unique hand-to-hand style of combat",
        "Captain America is one of the finest human combatants Earth has ever known",
        "Immunity to diseases is extraordinary",
      ],
      images: [
        {
          fields: {
            file: {
              url: captainAmerica4,
            },
          },
        },
        {
          fields: {
            file: {
              url: captainAmerica1,
            },
          },
        },
        {
          fields: {
            file: {
              url: captainAmerica2,
            },
          },
        },
        {
          fields: {
            file: {
              url: captainAmerica5,
            },
          },
        },
      ],
    },
  },
  {
    sys: {
      id: "12",
    },
    fields: {
      name: "deadpool",
      slug: "deadpool",
      type: "hero",
      company: "Marvel",
      price: 2500,

      parties: true,
      willKill: true,
      featured: false,
      description:
        'Wade Wilson is a former test subject of the Weapon X program, where he received his regenerative healing factor through the scientific experiments conducted upon him. Deadpool\'s powers and personality traits combine to make a wild, mentally unstable, and unpredictable mercenary. Deadpool has been a member of X-Force and the Thunderbolts, and a self-professed member of the X-Men and the Avengers. The "Merc with a Mouth" is infamous for breaking the fourth wall.',
      extras: [
        "Regenerative healing factor",
        "Skilled marksman, swordsman, and hand-to-hand combatant",
        "Superhuman strength, durability, and agility",
        "Telepathic immunity",
      ],
      images: [
        {
          fields: {
            file: {
              url: deadpool2,
            },
          },
        },
        {
          fields: {
            file: {
              url: deadpool1,
            },
          },
        },
        {
          fields: {
            file: {
              url: deadpool4,
            },
          },
        },
        {
          fields: {
            file: {
              url: deadpool3,
            },
          },
        },
      ],
    },
  },
];
