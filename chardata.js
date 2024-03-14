export const defaultProfileUrl =
  "https://www.prydwen.gg/static/d2182bea4a3c35b721a4bd55d5690239/60b4d/rapi_icon.webp";
export const lastUpdatedData = "April 6th, 2023";

export const infoChar = ["Name", "Manufacturer", "Squad"];
export const infoCombat = [
  "Rarity",
  "Class",
  "Weapon",
  "Element",
  "Burst Type",
];

export const infoOther = ["Role", "Release Date", "JP Va", "KR VA", "EN VA"];

export const skillIcons = {
  normal:
    "https://www.prydwen.gg/static/92a841c9db81efd22788eefa3adb4bbf/d8057/sight_rocket.webp",
  skillOne:
    "https://www.prydwen.gg/static/66934440069796d63c50a8dbcc45cd20/507b0/icon_skill1.webp",
  skillTwo:
    "https://www.prydwen.gg/static/b6c317f9626a61a4167d6560536531da/507b0/icon_skill2.webp",
  burst:
    "https://www.prydwen.gg/static/df4fba30477765fe937b50aca132ae6a/507b0/icon_burst.webp",
  cd: "https://cdn.discordapp.com/attachments/788247984517283880/1086071482075074590/clock.webp",
  cdwhite:
    "https://cdn.discordapp.com/attachments/788247984517283880/1086071672479694869/clockwhite.webp",
  ammo: "https://cdn.discordapp.com/attachments/747928182891610213/1087215449667817543/ammow.webp",
  reload:
    "https://cdn.discordapp.com/attachments/747928182891610213/1087215450062073926/reloadw.webp",
  control:
    "https://cdn.discordapp.com/attachments/747928182891610213/1087215450431180800/controllerw.webp",
};
export const elementIcons = {
  fire: "https://cdn.discordapp.com/attachments/788247984517283880/1083943584195149904/fireicon.webp",
  water:
    "https://cdn.discordapp.com/attachments/788247984517283880/1083943630827442216/watericon.webp",
  wind: "https://cdn.discordapp.com/attachments/788247984517283880/1083943583972872265/windicon.webp",
  earth:
    "https://cdn.discordapp.com/attachments/788247984517283880/1083943583683457146/earthicon.webp",
  electric:
    "https://cdn.discordapp.com/attachments/788247984517283880/1083943583435980810/electricicon.webp",
};

export const weaponIcons = {
  assaultRifle:
    "https://cdn.discordapp.com/attachments/788247984517283880/1083948303298867250/ar.webp",
  sniperRifle:
    "https://cdn.discordapp.com/attachments/788247984517283880/1083949163714195549/sr.webp",
  submachinegun:
    "https://cdn.discordapp.com/attachments/788247984517283880/1083948302912987236/smg.webp",
  rocketLauncher:
    "https://cdn.discordapp.com/attachments/788247984517283880/1083948302464200754/rl.webp",
  machinegun:
    "https://cdn.discordapp.com/attachments/788247984517283880/1083948340242300978/mg.webp",
  shotgun:
    "https://cdn.discordapp.com/attachments/788247984517283880/1083948302665519176/sg.webp",
};

export const charData = [
  {
    name: "Rapi",
    art: "https://www.prydwen.gg/static/d2182bea4a3c35b721a4bd55d5690239/60b4d/rapi_icon.webp",
    hp: 252742,
    atk: 12982,
    def: 2122,
    weapon: "Assault Rifle",
    unitClass: "Attacker",
    manufacturer: "Elysion",
    element: "Fire",
    squad: "Counters",
    position: "Burst 3",
    burstCD: "40",
    role: ["DPS"],
    skill: [
      {
        name: "Normal Attack",
        type: "Normal",
        ammo: 60,
        reload: "1s",
        effect:
          "■ Activates when attacked 20 time(s). Affects self.##ATK ▲ 21.81% for 20 sec.",
      },
      {
        name: "FF Formation",
        effect:
          "■ Affects all Supporter allies. Activates after 3 normal attack(s).Recover 6.07% of attack damage as HP over 5 sec.",
      },
      {
        name: "Missile",
        active: "20 Seconds",
        effect:
          "■ Affects 1 enemy with the highest ATK.##[Target] Deals 528.97% of ATK as damage.## Taunt for 5 sec.",
      },
      {
        name: "Warhead Volley",
        effect:
          "■ Affects 1 enemy with the highest ATK.##[Target] Deals 657.72% of ATK as damage.##■ Affects self.##ATK ▲ 60.75% for 10 sec.",
        active: "40 Seconds",
      },
    ],
    rarity: "SR",
    full: "https://www.prydwen.gg/static/5cca9a18c03bec4b5bf252af2af009c4/3cd29/rapi_full.webp",
  },

  {
    id: "1",
    name: "Anis",
    art: "https://www.prydwen.gg/static/f3bf26dc83d5a31a5a8b46355d9e20b3/60b4d/anis_icon.webp",
    hp: 307885,
    atk: 8666,
    def: 2497,
    weapon: "Rocket Launcher",
    unitClass: "Defender",
    manufacturer: "Tetra",
    element: "Earth",
    squad: "Counters",
    position: "Burst 2",
    burstCD: "20",
    role: ["Tank", "Debuffer"],
    skill: [
      {
        name: "Normal Attack",
        type: "Charge",
        ammo: 6,
        reload: "2.03s",
        effect:
          "■ Affects target enemy.## Deals 65.02% ATK as damage.##Charge Time: 1 sec.##Full Charge Damage: 250% of damage.",
      },
      {
        name: "D.H. Formation",
        effect:
          "■ Activates when attacked 40 time(s). Affects self.##DEF ▲ 120% for 10 sec",
      },
      {
        name: "C.H. Formation",
        active: "10 Seconds",
        effect:
          "■ Affects 2 allies with the highest ATK.##DEF ▲ 80% for 5 sec.##Shares damage taken for 10 sec.",
      },
      {
        name: "Pinpoint Missile",
        effect:
          "■ Affects all enemies within attack range.##Deal 156.73% of ATK as damage.##DEF ▼ 32% for 5 sec.",
        active: "20 Seconds",
      },
    ],
    rarity: "SR",
    full: "https://www.prydwen.gg/static/8eb85cf991cb58f905f00c4be71db85f/3cd29/anis_full.webp",
  },
  {
    name: "Neon",
    art: "https://www.prydwen.gg/static/a57df3a4f920f22dee72d6a4faea333b/60b4d/neon_icon.webp",
    hp: 280314,
    atk: 10824,
    def: 2252,
    weapon: "Shotgun",
    unitClass: "Support",
    manufacturer: "Elysion",
    element: "Fire",
    squad: "Counters",
    position: "Burst 1",
    burstCD: "20",
    role: ["Buffer"],
    skill: [
      {
        name: "Normal Attack",
        type: "Normal",
        ammo: 9,
        reload: "1.82s",
        effect: "■ Affects target enemy.##Deals 224.5% ATK as damage.",
      },
      {
        name: "Neon's Special Bullet",
        effect:
          "■ Affects 2 allies with the highest ATK. Cast when killing an enemy.##[Target] Critical Rate ▲ 3.56% for 5 sec.",
      },
      {
        name: "Viva Firepower!",
        effect:
          "■ Activates at the beginning of Full Burst. Affects all allies.## Critical Rate ▲ 45.93% for 2 shots.",
      },
      {
        name: "Firepower Rules!",
        effect:
          "■ Affects 1 enemy with the highest DEF.##[Target] Deals 528.97% of ATK as damage.## ■ Affects all allies with a Shotgun.##[Target] Max Ammunition Capacity ▲ 3 for 10 sec.",
        active: "20 Seconds",
      },
    ],
    rarity: "SR",
    full: "https://www.prydwen.gg/static/aed92f4f10fd8084e863982b5259ac99/3cd29/neon_full.webp",
  },
  {
    name: "Poli",
    art: "https://www.prydwen.gg/static/09bf8bdd4ca52d5bbefc4072fb018cdb/60b4d/poli_icon.webp",
    hp: 711171,
    atk: 17059,
    def: 4827,
    weapon: "Shotgun",
    unitClass: "Defender",
    manufacturer: "Elysion",
    element: "Water",
    squad: "A.C.P.U.",
    position: "Support 2",
    burstCD: "40",
    role: ["Shielder", "Buffer", "Tank"],
    skill: [
      {
        name: "Normal Attack",
        type: "Normal",
        ammo: 9,
        reload: "1.5s",
        effect: "■ Affects target enemy.##Deals 201.5% ATK as damage.",
      },
      {
        name: "Brave Call",
        effect:
          "■ Activates after 5 normal attacks. Affects all allies.##ATK ▲ 5.46% for 10 sec.",
      },
      {
        name: "That's a Good Boy",
        active: "20 Seconds",
        effect:
          "■ Affects self and 2 ally units with the lowest HP (except caster).##DEF ▲ 23.51% for 10 sec.##Shares damage taken for 10 sec.",
      },
      {
        name: "Poli's Defense Line",
        effect:
          "■ Affects all allies.##Creates a shield, equivalent to 22.57% of the caster's Max HP, which protects all allies from damage. Lasts for 5 sec.##ATK ▲ 44.55% for 10 sec.",
        active: "40 Seconds",
      },
    ],
    rarity: "SSR",
    full: "https://www.prydwen.gg/static/2f6126194937a4c427a3d421c0db7096/3cd29/poli_full.webp",
  },
  {
    name: "Miranda",
    art: "https://www.prydwen.gg/static/1347f6bfd3ccce5f40bc5aa01aad7a7d/60b4d/miranda_icon.webp",
    hp: 647453,
    atk: 21307,
    def: 3999,
    weapon: "SMG",
    unitClass: "Support",
    manufacturer: "Elysion",
    element: "Water",
    squad: "A.C.P.U.",
    position: "Burst 2",
    burstCD: "20",
    role: ["Buffer"],
    skill: [
      {
        name: "Normal Attack",
        type: "Normal",
        ammo: 120,
        reload: "1.43s",
        effect: "■ Affects target enemy.##Deals 8.64% ATK as damage.",
      },
      {
        name: "Health up!",
        effect:
          "■ Activates after landing 30 normal attack(s). Affects all allies.## Hit Rate ▲ 5.37% for 5 sec.",
      },
      {
        name: "Wake Up!",
        active: "20 Seconds",
        effect:
          "■ Activates at the beginning of Full Burst. Affects all allies.##Critical Damage ▲ 32.99% for 10 sec.",
      },
      {
        name: "Powering up!",
        effect:
          "■ Affects 1 ally with the highest ATK (except caster).##[Target] ATK ▲ 40.4% for 10 sec.##[Target] Critical Damage ▲ 56.23% for 10 sec.",
        active: "20 Seconds",
      },
    ],
    rarity: "SSR",
    full: "https://www.prydwen.gg/static/9517b4b325a1d36dcb395d4eb135565f/3cd29/miranda_full.webp",
  },
  {
    name: "Eunhwa",
    art: "https://www.prydwen.gg/static/1659088541bb1b28389ccf64cbb54907/60b4d/eunhwa_icon.webp",
    hp: 583734,
    atk: 25554,
    def: 3522,
    weapon: "Sniper",
    unitClass: "Attacker",
    manufacturer: "Elysion",
    element: "Fire",
    squad: "Absolute",
    position: "Burst 2",
    burstCD: "20",
    role: ["DPS", "Debuffer"],
    skill: [
      {
        name: "Normal Attack",
        type: "Charge",
        ammo: 6,
        reload: "2.33s",
        effect:
          "■ Affects target enemy.##Deals 71.07% ATK as damage.##Charge Time: 1 sec.##Full Charge Damage: 250%",
      },
      {
        name: "Ready and Able",
        active: "Passive",
        effect:
          "■ Affects self. Cast after firing the last round.##Charging Damage ▲ 37.28% for 2 shots.##Charging Speed ▲ 15.53% for 2 shots.",
      },
      {
        name: "Achilles' Heel",
        active: "Passive",
        effect:
          "■ Activates after firing the last bullet. Affects the target.##DEF ▼ 29% for 5 sec.",
      },
      {
        name: "Turning The Tide",
        effect:
          "■ Affects 10 enemies with the highest ATK.##[Target] Deals 85.62% of ATK as damage.##DEF ▼ 2.43% for 15 sec.##■ Affects all allies.##Critical rate ▲ 4.65% for 15 sec.",
        active: "20 Seconds",
      },
    ],
    rarity: "SSR",
    full: "https://www.prydwen.gg/static/72addc3fd1daf7e62758863dc1d1a1ad/3cd29/eunhwa_full.webp",
  },
  {
    name: "Emma",
    art: "https://www.prydwen.gg/static/fde8f1e1ce61228967ad9ec8af771499/60b4d/emma_icon.webp",
    hp: 647453,
    atk: 21307,
    def: 3894,
    weapon: "Machine Gun",
    unitClass: "Support",
    manufacturer: "Elysion",
    element: "Fire",
    squad: "Absolute",
    position: "Support 1",
    burstCD: "40",
    role: ["Healer"],
    skill: [
      {
        name: "Normal Attack",
        type: "Normal",
        ammo: 300,
        reload: "2s",
        effect: "■ Affects target enemy.##Deals 5.57% ATK as damage.",
      },
      {
        name: "Cheerleading",
        active: "Passive",
        effect:
          "■ There is a 5% chance of activating when attacked. Affects all allies.##Restore HP equal to 10.77% of the caster's Max HP.",
      },
      {
        name: "Temptation",
        active: "Passive",
        effect:
          "■ Active when HP is above 90%. Affects all allies.##HP Recovery ▲ 13.33% permanently.",
      },
      {
        name: "Altruism",
        effect:
          "■ Affects all allies.##Restore HP equal to 39.6% of the caster's Max HP.##Restore HP equal to 39.6% of ATK for 5 sec.",
        active: "40 Seconds",
      },
    ],
    rarity: "SSR",
    full: "https://www.prydwen.gg/static/4fc8086435b3a0d65f9782d4faeb3997/3cd29/emma_full.webp",
  },
  {
    name: "Vesti",
    art: "https://www.prydwen.gg/static/6e15fc164660b4ca7ec1974e57382ecb/60b4d/vesti_icon.webp",
    hp: 583734,
    atk: 25554,
    def: 4071,
    weapon: "Rocket Launcher",
    unitClass: "Attacker",
    manufacturer: "Elysion",
    element: "Fire",
    squad: "Absolute",
    position: "Burst 3",
    burstCD: "40",
    role: ["DPS"],
    skill: [
      {
        name: "Normal Attack",
        type: "Charge",
        ammo: 6,
        reload: "2s",
        effect:
          "■ Affects target enemy.##Deals 61.3% ATK as damage.##Charge Time: 1 sec.##Full Charge Damage: 250%.",
      },
      {
        name: "Dreams Do Come True",
        active: "Passive",
        effect:
          "■ Activates when hitting a target with Full Charge. Affects self.##Explosion Range ▲ 15.01% for 10 sec.",
      },
      {
        name: "Survival Instinct",
        active: "Passive",
        effect:
          "■ Activates when using Burst Skill. Affects self ##Survival Instinct 1: ATK ▲ 5.35% for 45 sec.##■ Activates when using Burst Skill during Survival Instinct 1. Affects self.##Survival Instinct 2: Critical Damage ▲ 22.34% for 45 sec. Previous effects trigger repeatedly.##■ Activates when using Burst Skill during Survival Instinct 2. Affects self.##Survival Instinct 3: Critical Rate ▲ 15.51% for 45 sec. Previous effects trigger repeatedly.",
      },
      {
        name: "Justifiable Defense",
        effect:
          "■ Affects all enemies.##Deals 15.56% of ATK as damage.##Effect changes according to the caster's status. Previous effects trigger repeatedly:##Survival Instinct 1: Deals 210.62% of ATK as additional damage.##Survival Instinct 2: Deals 247.25% of ATK as additional damage.##Survival Instinct 3: Deals 302.19% of ATK as additional damage.##■ Affects all allies.##Full Burst Time ▼ 5 sec.",
        active: "40 Seconds",
      },
    ],
    rarity: "SSR",
    full: "https://www.prydwen.gg/static/435c7016460cf805d4d178ffa91f61c5/3cd29/vesti_full.webp",
  },
  {
    name: "Helm",
    art: "https://www.prydwen.gg/static/c9979cff3fa84468d282634b1d60836c/60b4d/helm_icon.webp",
    hp: 583734,
    atk: 25554,
    def: 3552,
    weapon: "Sniper",
    unitClass: "Attacker",
    manufacturer: "Elysion",
    element: "Water",
    squad: "Aegis",
    position: "Support 3",
    burstCD: "40",
    role: ["Healer", "Buffer"],
    skill: [
      {
        name: "Normal Attack",
        type: "Charge",
        ammo: 6,
        reload: "2s",
        effect:
          "■ Affects target enemy.##Deals 69.04% ATK as damage.##Charge Time: 1 sec.##Full Charge Damage: 250% of damage.",
      },
      {
        name: "Frontline Command",
        active: "Passive",
        effect:
          "■ Activates when the last bullet hits the target. Affects all allies.##Critical Rate of normal attack ▲ 14.64% for 5 seconds",
      },
      {
        name: "Fire Away",
        active: "Passive",
        effect:
          "■ Affects all allies.##Damage to interruption part ▲ 3.08% permanently.##■ Activates when entering Full Burst. Affects all allies.##ATK damage ▲ 11.85% for 10 sec.",
      },
      {
        name: "Aegis Cannon",
        effect:
          "■ Affects the enemy with the highest ATK.##Deals 1237.5% of ATK as damage.##■ Affects all allies.##Recovers 54.45% of ATK damage for 10 sec.",
        active: "40 Seconds",
      },
    ],
    rarity: "SSR",
    full: "https://www.prydwen.gg/static/f9831131ec85afcfc79f08cf804767d2/3cd29/helm_full.webp",
  },
  {
    name: "Sugar",
    art: "https://www.prydwen.gg/static/c17575707266e86e2b0d0ad859cf0935/60b4d/sugar_icon.webp",
    hp: 583734,
    atk: 25554,
    def: 4012,
    weapon: "Shotgun",
    unitClass: "Attacker",
    manufacturer: "Tetra",
    element: "Earth",
    squad: "Cafe Sweety",
    position: "Burst 3",
    burstCD: "40",
    role: ["DPS", "Buffer"],
    skill: [
      {
        name: "Normal Attack",
        type: "Normal",
        ammo: 9,
        reload: "2.03s",
        effect: "■ Affects target enemy.##Deals 231.6% ATK as damage.",
      },
      {
        name: "Black Typhoon",
        active: "Passive",
        effect:
          "■ Affects self. 20% chance of casting when Cover is under attack.##Critical Damage ▲ 16.39% for 10 sec.##Reloading Speed ▲ 12.12% for 10 sec.",
      },
      {
        name: "Noire Sensor",
        active: "Passive",
        effect:
          "■ Affects self. Cast when entering Full Burst.##Critical Rate ▲ 13.2% for 10 sec.##■ Affects all allies with a Shotgun. Cast when entering Full Burst.##Max Ammunition Capacity ▲ 83.08% for 10 sec.",
      },
      {
        name: "Trouble Shooter",
        effect:
          "■ Affects self.##ATK Speed ▲ 68% for 15 sec.##Hit Rate ▲ 33% for 15 sec.",
        active: "40 Seconds",
      },
    ],
    rarity: "SSR",
    full: "https://www.prydwen.gg/static/2bf9655435e00c796cf8de6a163b95b0/3cd29/sugar_full.webp",
  },
  {
    name: "Milk",
    art: "https://www.prydwen.gg/static/45082510523372d5af24eb1da2e2396e/60b4d/milk_icon.webp",
    hp: 583734,
    atk: 25554,
    def: 3552,
    weapon: "Sniper",
    unitClass: "Support",
    manufacturer: "Tetra",
    element: "Earth",
    squad: "Cafe Sweety",
    position: "Support 1",
    burstCD: "40",
    role: ["Healer", "Buffer"],
    skill: [
      {
        name: "Normal Attack",
        type: "Charge",
        ammo: 6,
        reload: "2s",
        effect:
          "■ Affects target enemy.##Deals 69.04% ATK as damage.##Charge Time: 1 sec.##Full Charge Damage: 250% of damage.",
      },
      {
        name: "In it to Win It",
        active: "20 Seconds",
        effect:
          "■ Affects 2 allies with the highest ATK.##ATK ▲ 31.83% for 10 sec.",
      },
      {
        name: "Sugar Rush",
        active: "Passive",
        effect:
          "■ Activates when above 80% HP. Affects all allies.##Critical Damage ▲ 11.13% permanently.",
      },
      {
        name: "Victory is Mine",
        effect:
          "■ Affects the enemies within the attack range.##Deals 367.34% of ATK as damage.##■ Affects all allies.##Restores 16.16% of attack damage as HP for 10 sec",
        active: "40 Seconds",
      },
    ],
    rarity: "SSR",
    full: "https://www.prydwen.gg/static/ab5b46c1f9f1985c59c85f1535a8d5a6/3cd29/milk_full.webp",
  },
  {
    name: "Frima",
    art: "https://www.prydwen.gg/static/729864516a6224f9fc9de1184ef877ae/60b4d/frima_icon.webp",
    hp: 647453,
    atk: 21307,
    def: 3909,
    weapon: "Sniper",
    unitClass: "Support",
    manufacturer: "Tetra",
    element: "Earth",
    squad: "Cafe Sweety",
    position: "Burst 1",
    burstCD: "20",
    role: ["Debuffer"],
    skill: [
      {
        name: "Normal Attack",
        type: "Charge",
        ammo: 6,
        reload: "1.5s",
        effect:
          "■ Affects target enemy.##Deals 65.95% ATK as damage.##Charge Time: 1 sec.##Full Charge Damage: 250%.",
      },
      {
        name: " ... I Want To Sleep",
        active: "Passive",
        effect:
          "■ Activates after landing 4 normal attacks. Affects target.## Def ▼ 15.84% for 10 sec.",
      },
      {
        name: " ... Ah",
        active: "Passive",
        effect:
          "■ Activates when attacking with Full Charge. Affects all allies.#Max HP ▲ 6.09% for 5 sec.",
      },
      {
        name: "Vexation",
        effect:
          "■ Affects 10 enemy targets with the highest DEF.##Deals 101.66% of ATK as damage.##DEF ▼ 9.86% for 10 sec.##■ Affects all allies.##Max HP ▲ 30.26% for 4 sec.",
        active: "20 Seconds",
      },
    ],
    rarity: "SSR",
    full: "https://www.prydwen.gg/static/1d084981876b98ad2fbdf5c15f9601c7/3cd29/frima_full.webp",
  },
  {
    name: "Crow",
    art: "https://www.prydwen.gg/static/59d66f236542b4887034173b70177dd3/60b4d/crow_icon.webp",
    hp: 711171,
    atk: 17059,
    def: 4364,
    weapon: "SMG",
    unitClass: "Defender",
    manufacturer: "Missillis",
    element: "Fire",
    squad: "Exotic",
    position: "Burst 3",
    burstCD: "40",
    role: ["Debuffer"],
    skill: [
      {
        name: "Normal Attack",
        type: "Normal",
        ammo: 120,
        reload: "1.67s",
        effect: "■ Affects target enemy.##Deals 4.47% ATK as damage.",
      },
      {
        name: "Killing Time",
        active: "Passive",
        effect:
          "■ Affects all enemies. Activates when entering Full Burst.##ATK ▼ 19.93% for 10 sec.",
      },
      {
        name: "Killing Time",
        active: "Passive",
        effect:
          "■ Activates when the last bullet hits the target. Affects the target.##[Target] Deals 89.09% of ATK as Additional Damage.##■ Activates when the last bullet hits the target. Affects self.##DEF ▲ 12.72% for 5 sec.",
      },
      {
        name: "The Terrorist",
        effect:
          "■ Affects the enemy with the highest ATK.##Deals 915.75% of ATK as damage.",
        active: "40 Seconds",
      },
    ],
    rarity: "SSR",
    full: "https://www.prydwen.gg/static/f6f433d5ea43664cd970a02ca96da1fe/3cd29/crow_full.webp",
  },
  {
    name: "Viper",
    art: "https://www.prydwen.gg/static/466fda5e86ed8e653d5016055b018b08/60b4d/viper_icon.webp",
    hp: 711171,
    atk: 17059,
    def: 4364,
    weapon: "Shotgun",
    unitClass: "Attacker",
    manufacturer: "Missillis",
    element: "Water",
    squad: "Exotic",
    position: "Burst 2",
    burstCD: "20",
    role: ["Buffer", "Debuffer"],
    skill: [
      {
        name: "Normal Attack",
        type: "Normal",
        ammo: 9,
        reload: "0.56s",
        effect: "■ Affects target enemy.##Deals 220.4% ATK as damage.",
      },
      {
        name: "Snake Sense",
        active: "Passive",
        effect:
          "■ Activates when the target appears. Affects all allies.##ATK ▲ 25.98% for 10 sec.##Hit Rate ▲ 11.13% for 10 sec.",
      },
      {
        name: "Snake Scale",
        active: "Passive",
        effect:
          "■ Affects self.##Hit Rate ▲ 3.43%##■ Activates when entering Full Burst. Affects self.##Vamp: Excludes 1 ally unit from enemies' targets for 10 sec. Loses effect when the caster takes damage.##nvincible for 1 sec.",
      },
      {
        name: "Snake Bite",
        effect:
          "■ Affects designed 1 enemy unit(s).##Deals 462.85% of ATK as damage.##■ Activates when the designated enemy unit(s) include the stage target. Affects the same enemy unit(s).##DEF ▼ 19.83% for 10 seconds.",
        active: "20 Seconds",
      },
    ],
    rarity: "SSR",
    full: "https://www.prydwen.gg/static/ee583860e0a716d00a1bdfe39b194c99/3cd29/viper_full.webp",
  },
  {
    name: "Jackal",
    art: "https://www.prydwen.gg/static/8b5dbe64fd3b5cc45324e5c118267aeb/60b4d/jackal_icon.webp",
    hp: 711171,
    atk: 17059,
    def: 4364,
    weapon: "Rocket Launcer",
    unitClass: "Defender",
    manufacturer: "Missillis",
    element: "Iron",
    squad: "Exotic",
    position: "Burst 2",
    burstCD: "20",
    role: ["Buffer", "Debuffer"],
    skill: [
      {
        name: "Normal Attack",
        type: "Charge",
        ammo: 6,
        reload: "2s",
        effect:
          "■ Affects target enemy.##Deals 65.02% ATK as damage.##Charge Time: 1 sec.##Full Charge Damage: 250%.",
      },
      {
        name: "Happy Jackal",
        active: "Passive",
        effect:
          "■ Activates when attacked 10 time(s). Affects 1 enemy unit(s) with the highest Max HP.##Damage Taken ▲ 9.09% for 10 sec.##ATK ▼ 9.09% for 10 sec.",
      },
      {
        name: "Jumpin' Jackal Flash",
        active: "Passive",
        effect:
          "■ Activates when entering battle. Affects self and 2 ally unit(s) with the highest ATK.##Shares damage taken for 120 sec.##DEF ▲ 8.27% for 120 sec.",
      },
      {
        name: "Crazy Jackal",
        effect: `■ Affects all allies.##Burst Skill Damage (except additional damage) with "Affects the enemy with" in description ▲ 38.91% for 15 sec.##DEF ▲ 14.69% for 10 sec."`,
        active: "20 Seconds",
      },
    ],
    rarity: "SSR",
    full: "https://www.prydwen.gg/static/1b31ef386f8c4898369baa0cd040fe45/3cd29/jackal_full.webp",
  },
  {
    name: "Maiden",
    art: "https://www.prydwen.gg/static/01b647fd49861b5305f7e0cb6fc63a09/60b4d/maiden_icon.webp",
    hp: 583734,
    atk: 25554,
    def: 4012,
    weapon: "Shotgun",
    unitClass: "Attacker",
    manufacturer: "Elysion",
    element: "Electric",
    squad: "Extrinsic",
    position: "Burst 3",
    burstCD: "40",
    role: ["DPS"],
    skill: [
      {
        name: "Normal Attack",
        type: "Normal",
        ammo: 9,
        reload: "2.05s",
        effect: "■ Affects target enemy.##Deals 231.6% ATK as damage.",
      },
      {
        name: "Kotodama: Words of Skill",
        active: "Passive",
        effect:
          "■ Activates when attacked 20 time(s). Affects self.##Revenge: ATK ▲ 26.66% for 20 sec.",
      },
      {
        name: "Kotodama: Words of Assault",
        active: "30 Seconds",
        effect:
          "■ Affects all enemies.##Attract for 10 sec.##■ Affects self.##Critical Damage ▲ 152.84% for 10 sec.",
      },
      {
        name: "Kotodama: Words of Power",
        effect:
          "■ Affects all enemies.##Deals 457.87% of ATK as damage.##■ Affects the same target(s) when in Revenge status.##Deals 457.87% of ATK as damage.",
        active: "40 Seconds",
      },
    ],
    rarity: "SSR",
    full: "https://www.prydwen.gg/static/f62afd279296966d20c49f6f2f082f46/3cd29/maiden_full.webp",
  },
  {
    name: "Guillotine",
    art: "https://www.prydwen.gg/static/849455f1237535750d6383f4831c1fdf/60b4d/guillotine_icon.webp",
    hp: 583734,
    atk: 25554,
    def: 3539,
    weapon: "Machine Gun",
    unitClass: "Attacker",
    manufacturer: "Elysion",
    element: "Electric",
    squad: "Extrinsic",
    position: "Burst 3",
    burstCD: "40",
    role: ["DPS"],
    skill: [
      {
        name: "Normal Attack",
        type: "Normal",
        ammo: 300,
        reload: "2.5s",
        effect: "■ Affects target enemy.##Deals 5.57% ATK as damage.",
      },
      {
        name: "Residual Heat",
        active: "Passive",
        effect:
          "■ Affects self. Casts after landing 100 normal attacks.##Critical rate ▲ 9.28% for 10 sec.##HP ▼ 2.01%",
      },
      {
        name: "Shroud of Darkness",
        active: "Passive",
        effect:
          "■ Affects self. Casts after landing 150 normal attacks.##Critical Damage ▲ 14.46% for 5 sec.##■ Affects self. Casts when HP falls below 70%.##ATK ▲ 0.2% with every 1% of HP loss.",
      },
      {
        name: "Dragon of the Deep",
        effect:
          "■ Affects the enemy with the highest ATK.##[Target] Deals 1237.5% of ATK as damage.##■ Affects the same target when HP falls below 50%.##Deal additional damage to the same target equal to 1237.5% of ATK.",
        active: "40 Seconds",
      },
    ],
    rarity: "SSR",
    full: "https://www.prydwen.gg/static/95462a190665dc34a46eb536a323d0e5/3cd29/guillotine_full.webp",
  },
  {
    name: "Brid",
    art: "https://www.prydwen.gg/static/86155c25c213c48bbccb40cfbe917d1a/60b4d/brid_icon.webp",
    hp: 583734,
    atk: 25554,
    def: 4164,
    weapon: "Assault Rifle",
    unitClass: "Attacker",
    manufacturer: "Elysion",
    element: "Water",
    squad: "Infinity Rail",
    position: "Burst 3",
    burstCD: "40",
    role: ["DPS"],
    skill: [
      {
        name: "Normal Attack",
        type: "Normal",
        ammo: 60,
        reload: "1.3s",
        effect: "■ Affects target enemy.##Deals 14.29% ATK as damage.",
      },
      {
        name: "Acceleration",
        active: "Passive",
        effect:
          "■ Affects self. Activates after 30 normal attacks.##ATK ▲ 15.18% for 10 sec.",
      },
      {
        name: "Leak",
        active: "10 Seconds",
        effect:
          "■ Affects the enemy with the highest ATK.##Deal damage equal to 200% of ATK.",
      },
      {
        name: "AZX",
        effect:
          "■ Affects the enemy with the highest DEF.##Deal damage equal to 1237.5% of ATK.##■ Affects the same target when at Max HP.##Deal additional damage to the same target equal to 1237.5% of ATK.",
        active: "40 Seconds",
      },
    ],
    rarity: "SSR",
    full: "https://www.prydwen.gg/static/f2cd36bae6403f01e3bf0bd4cd1e26aa/3cd29/brid_full.webp",
  },
  {
    name: "Diesel",
    art: "https://www.prydwen.gg/static/454270444acc923035517fbd3b71bbf4/60b4d/diesel_icon.webp",
    hp: 711171,
    atk: 17059,
    def: 4250,
    weapon: "Machine Gun",
    unitClass: "Defender",
    manufacturer: "Elysion",
    element: "Wind",
    squad: "Infinity Rail",
    position: "Burst 2",
    burstCD: "20",
    role: ["Tank"],
    skill: [
      {
        name: "Normal Attack",
        type: "Normal",
        ammo: 300,
        reload: "2.16s",
        effect: "■ Affects target enemy.##Deals 5.38% ATK as damage.",
      },
      {
        name: "Strawberry Fields",
        active: "Passive",
        effect:
          "■ Activates when entering Full Burst. Affects self.##DEF ▲ 22.04% for 10 sec.##■ Activates when attacked during Full Burst. Affects self.##Recovers HP by 11.02% of the caster's Max HP.",
      },
      {
        name: "Sweet Strawberry Goodness",
        active: "Passive",
        effect:
          "■ Activates after landing 100 normal attack(s). Affects self.##Strawberry Candy: Max Ammunition Capacity ▲ 56.7% for 10 time(s) and lasts for 10 sec.##■ Affects all allies when the caster reaches max stacks of Strawberry Candy. Activates after clearing stacks effect.##Reload 86.62% magazine(s).",
      },
      {
        name: "Strawberry Shock",
        effect:
          "■ Affects 5 enemies with the highest ATK.##[Target] Deals 299.98% ATK as damage.##Taunt for 5.06 sec.",
        active: "20 Seconds",
      },
    ],
    rarity: "SSR",
    full: "https://www.prydwen.gg/static/c35f2b083025338a81ea0151a8eef1ef/3cd29/diesel_full.webp",
  },
  {
    name: "Soline",
    art: "https://www.prydwen.gg/static/f40e2fb9f7c3d325409635681e0f27d4/60b4d/soline_icon.webp",
    hp: 583734,
    atk: 25554,
    def: 3633,
    weapon: "SMG",
    unitClass: "Support",
    manufacturer: "Elysion",
    element: "Earth",
    squad: "Infinity Rail",
    position: "Burst 3",
    burstCD: "40",
    role: ["DPS"],
    skill: [
      {
        name: "Normal Attack",
        type: "Normal",
        ammo: 120,
        reload: "2s",
        effect: "■ Affects target enemy.##Deals 4.68% ATK as damage.",
      },
      {
        name: "On the Ball!",
        active: "Passive",
        effect:
          "■ Activates after 40 normal attack(s). Affects Self.##Attack speed ▲ 7.26% for 3 sec.",
      },
      {
        name: "Grow Up!",
        active: "Passive",
        effect:
          "■ Only affects self at Max HP.##Critical Rate ▲ 2% permanently##Critical Damage ▲ 13.5% permanently.",
      },
      {
        name: "My Word, My Bond!",
        effect:
          "■ Affects enemies within attack range.##Deals damage equal to 396% of ATK.##■ Cast on the same enemies when at Max HP.##Deal additional damage equal to 924% ATK as damage",
        active: "20 Seconds",
      },
    ],
    rarity: "SSR",
    full: "https://www.prydwen.gg/static/c65daf0da534dfece836d047069db05f/3cd29/soline_full.webp",
  },
  {
    name: "Harran",
    art: "https://www.prydwen.gg/static/b3721ed6c39084e9911745361fd6570e/60b4d/harran_icon.webp",
    hp: 583734,
    atk: 25554,
    def: 4164,
    weapon: "Sniper",
    unitClass: "Attacker",
    manufacturer: "Pilgrim",
    element: "Electric",
    squad: "Inherit",
    position: "Burst 3",
    burstCD: "40",
    role: ["DPS"],
    skill: [
      {
        name: "Normal Attack",
        type: "Charge",
        ammo: 6,
        reload: "2.3s",
        effect:
          "■ Affects target enemy.## Deals 70.89% ATK as damage.##Charge Time: 1 sec.##Full Charge Damage: 250%.",
      },
      {
        name: "Plague Transfer",
        active: "Passive",
        effect:
          "■ There is a 25% chance to activate when attacking.##Virus Transfer: Constantly deals 17.28% ATK as damage every 1 sec for 5 seconds.##■ Activates when an enemy afflicted with Virus Transfer is killed. Affects 2 nearby enemy unit(s).##Virus Transfer: Constantly deals 17.28% ATK as damage every 1 sec for 5 seconds.",
      },
      {
        name: "Predator",
        active: "Passive",
        effect:
          "■ Activates when attacking with Full Charge. Affects self.##Gain Pierce for 1 round(s)##Critical rate ▲ 1.84%##■ Activates when killing an enemy. Affects self.##TK ▲ 3.02%, stacks up to 15 time(s) and lasts for 10 sec.",
      },
      {
        name: "Death Scythe",
        effect: "■ Affects all enemies.##Deals 999% of ATK as damage",
        active: "40 Seconds",
      },
    ],
    rarity: "SSR",
    full: "https://www.prydwen.gg/static/53cfec2bd5eb040c52463243bf745ac8/3cd29/harran_full.webp",
  },
  {
    name: "Noah",
    art: "https://www.prydwen.gg/static/e85af87106d388bae80e0fa4c9588990/60b4d/noah_icon.webp",
    hp: 711171,
    atk: 17059,
    def: 4900,
    weapon: "Rocket Launcher",
    unitClass: "Defender",
    manufacturer: "Pilgrim",
    element: "Wind",
    squad: "Inherit",
    position: "Support 2",
    burstCD: "40",
    role: ["Tank"],
    skill: [
      {
        name: "Normal Attack",
        type: "Normal",
        ammo: 6,
        reload: "2.5s",
        effect:
          "■ Affects target enemy.## Deals 32.02% ATK as damage.##Charge Time: 1.5 sec.##Full Charge Damage: 250%.",
      },
      {
        name: "This is Gonna Hurt",
        active: "Passive",
        effect:
          "■ Affects all allies. 10% chance to cast when attacked.##Sustained damage ▼ 8% for 10 sec.",
      },
      {
        name: "Cruisin' for a Bruisin'",
        active: "Passive",
        effect:
          "■ Activates when attacking with Full Charge. Affects the target(s).##Taunt for 2 sec.##ATK ▼ 7.82% for 2 sec.",
      },
      {
        name: "U Mad Bro?",
        effect:
          "■ Affects self.##Attract: Taunt all enemies for 10 sec.##■ Affects all allies.##Invincible for 3 sec.##DEF ▲ 99% for 10 sec.",
        active: "40 Seconds",
      },
    ],
    rarity: "SSR",
    full: "https://www.prydwen.gg/static/06f5c16b0b79b96443c57de7536f72a1/3cd29/noah_full.webp",
  },
  {
    name: "Isabel",
    art: "https://www.prydwen.gg/static/c5ccac91278f7ff0fb62a1cfa094a25e/60b4d/isabel_icon.webp",
    hp: 583734,
    atk: 25554,
    def: 4012,
    weapon: "Machine Gun",
    unitClass: "Attacker",
    manufacturer: "Pilgrim",
    element: "Electric",
    squad: "Inherit",
    position: "Burst 3",
    burstCD: "40",
    role: ["DPS"],
    skill: [
      {
        name: "Normal Attack",
        type: "Normal",
        ammo: 9,
        reload: "1.86s",
        effect: "■ Affects target enemy.##Deals 210.7% ATK as damage..",
      },
      {
        name: "Marked Target",
        active: "Passive",
        effect:
          "■ Activates when using Burst Skill. Affects self.##Marked Target 1: Critical Rate ▲ 6.26% for 45 sec.##■ Activates when using Burst Skill during Marked Target 1. Affects self.##Marked Target 2: Critical Damage ▲ 18.03% for 45 sec. Previous effects trigger repeatedly.##■ Activates when using Burst Skill during Marked Target 2. Affects self.##Marked Target 3: ATK ▲ 17.28% for 45 sec. Previous effects trigger repeatedly.",
      },
      {
        name: "Pointed Feather",
        active: "15 Seconds",
        effect:
          "■ Affects 5 enemy unit(s) with the highest DEF.## Deals 170.58% of ATK as damage.",
      },
      {
        name: "Sonic Chaser",
        effect:
          "■ Affects all enemies.##Deals 149.85% of ATK as damage.##Effect changes according to the caster's status. Previous effects trigger repeatedly.## Marked Target 1: Damage Taken ▲ 39.96% for 5 sec.##Marked Target 2: Deals 299.7% of ATK as additional damage.##Marked Target 3: Deals 349.65% of ATK as additional damage.##■ Affects all allies.##Full Burst Time ▼ 5 sec.",
        active: "40 Seconds",
      },
    ],
    rarity: "SSR",
    full: "https://www.prydwen.gg/static/e7f5459540c67aa6e275e72dcf8d213c/3cd29/isabel_full.webp",
  },
  {
    name: "Ether",
    art: "https://www.prydwen.gg/static/2400afbfa211a1db536c906f2e0e262a/60b4d/ether_icon.webp",
    hp: 307886,
    atk: 8666,
    def: 2459,
    weapon: "Shotgun",
    unitClass: "Defender",
    manufacturer: "Missilis",
    element: "Electric",
    squad: "M.M.R.",
    position: "Support 1",
    burstCD: "40",
    role: ["Shielder", "Debuffer"],
    skill: [
      {
        name: "Normal Attack",
        type: "Normal",
        ammo: 9,
        reload: "2s",
        effect: "■ Affects target enemy.##Deals 214.03% ATK as damage.",
      },
      {
        name: "Corrosive Bullets",
        active: "Passive",
        effect:
          "■ Affects 1 ally with the lowest HP.##Sustained Damage ▼ 52.5% for 5 sec.",
      },
      {
        name: "Prognostic Response Experiment",
        active: "13 Seconds",
        effect:
          "■ Affects 3 enemies with the highest DEF.##[Target] Deals 56.32% of ATK as damage.## ■ Affects one enemy. Activates during Full Burst.##Target] DEF ▼ 9.38% for 6 sec.",
      },
      {
        name: "Colossal Single Cell",
        effect:
          "■ Affects 3 allied unit(s) with the lowest HP.##Creates a Shield equal to 96% of the caster's Max HP for 5 sec.",
        active: "40 Seconds",
      },
    ],
    rarity: "SR",
    full: "https://www.prydwen.gg/static/b9707f1df86e8d10599723359ecc998f/3cd29/ether_full.webp",
  },
  {
    name: "Julia",
    art: "https://www.prydwen.gg/static/b525e1a3a88a0c68ee0c24ad192d6fb6/60b4d/julia_icon.webp",
    hp: 583734,
    atk: 25554,
    def: 4164,
    weapon: "Assault Rifle",
    unitClass: "Attacker",
    manufacturer: "Missilis",
    element: "Earth",
    squad: "Master Hand",
    position: "Burst 3",
    burstCD: "40",
    role: ["DPS"],
    skill: [
      {
        name: "Normal Attack",
        type: "Normal",
        ammo: 60,
        reload: "1.2s",
        effect: "■ Affects target enemy.##Deals 14.07% ATK as damage.",
      },
      {
        name: "Crescendo",
        active: "20 Seconds",
        effect: "■ Affects self.##Critical Rate ▲ 26.04% for 10 sec..",
      },
      {
        name: "Decrescendo",
        active: "Passive",
        effect:
          "■ Activates when the last bullet hits the target. Affects self.##Crescendo: Critical Damage ▲ 24.79%,##stacks up to 5 times and lasts for 15 sec.",
      },
      {
        name: "Climax",
        effect:
          '■ Affects 5 enemies with the highest DEF.##Deals 544.5% of ATK as damage.##■ Affects the same target(s) when "Crescendo" is fully stacked.##Deals 544.5% of ATK as additional damage.',
        active: "40 Seconds",
      },
    ],
    rarity: "SSR",
    full: "https://www.prydwen.gg/static/13bb2057f12dc636476ac056a627702d/3cd29/julia_full.webp",
  },
  {
    name: "Drake",
    art: "https://www.prydwen.gg/static/dd41faf38ff5b9c0ad6603e720619a8f/60b4d/drake_icon.webp",
    hp: 583734,
    atk: 25554,
    def: 4012,
    weapon: "Shotgun",
    unitClass: "Attacker",
    manufacturer: "Missilis",
    element: "Fire",
    squad: "Matis",
    position: "Support 3",
    burstCD: "40",
    role: ["DPS", "Buffer"],
    skill: [
      {
        name: "Normal Attack",
        type: "Normal",
        ammo: 9,
        reload: "1.52s",
        effect: "■ Affects target enemy.##Deals 214.3% ATK as damage..",
      },
      {
        name: "Overcharge",
        active: "Passive",
        effect:
          "■ Activates at the beginning of Full Burst. Affects all allies.##Hit Rate ▲ 11.85% for 10 sec.##ATK ▲ 11.85% for 10 sec.",
      },
      {
        name: "Thunder Bolt",
        active: "Passive",
        effect:
          "■ Activates after 10 hits. Affects 3 enemies with the lowest HP.##Deals 98.55% of ATK as damage.",
      },
      {
        name: "Drake Special",
        effect:
          "■ Affects enemies within the attack range.##[Target] Deals 1254% of ATK as damage.##■ Affects self.##Max Ammunition Capacity ▲ 72.18% for 10 sec.",
        active: "40 Seconds",
      },
    ],
    rarity: "SSR",
    full: "https://www.prydwen.gg/static/02a7b295d08da21a5803ec7dc1ce2502/3cd29/drake_full.webp",
  },
  {
    name: "Laplace",
    art: "https://www.prydwen.gg/static/bc5a8bc902adfb42b0c538a66159aa1b/60b4d/laplace_icon.webp",
    hp: 583374,
    atk: 25554,
    def: 4071,
    weapon: "Rocket Launcher",
    unitClass: "Attacker",
    manufacturer: "Missilis",
    element: "Earth",
    squad: "Matis",
    position: "Burst 3",
    burstCD: "40",
    role: ["DPS"],
    skill: [
      {
        name: "Normal Attack",
        type: "Normal",
        ammo: 6,
        reload: "2.33s",
        effect:
          "■ Affects target enemy.##Deals 63.13% ATK as damage.##Charge Time: 1 sec.##Full Charge Damage: 250%.",
      },
      {
        name: "Hero Vision",
        active: "Passive",
        effect:
          "■ Activates when landing a hit with Full Charge. Affects self.##Hero Vision: Explosion Range up 3.57%, stacks up to 5 time(s) and lasts for 5 sec.",
      },
      {
        name: "Hero Bomber",
        active: "Passive",
        effect:
          "■ Activates when the last bullet hits the target. Affects the target.##Deals 81.66% of ATK as additional damage.##■ Activates when hitting the Boss Parts. Affects the target.##Deals 14.78% of ATK as additional damage.",
      },
      {
        name: "Laplace Buster",
        effect:
          '■ Affects Self.##Change the weapon in use:##Max Damage: 897.6% of ATK##Damage Over Time: 14.52% of ATK##Lasts for 5 sec.##Additional Effect: Pierce.##■ Affects the same enemy unit(s) when "Hero Vision" is fully stacked.##Deals 11.9% of ATK as true damage.',
        active: "40 Seconds",
      },
    ],
    rarity: "SSR",
    full: "https://www.prydwen.gg/static/6a595a138bd9892af9a68b2e33650aec/3cd29/laplace_full.webp",
  },
  {
    name: "Maxwell",
    art: "https://www.prydwen.gg/static/93d44190358ad0fcda38d6e6e107ec62/60b4d/maxwel_icon.webp",
    hp: 583734,
    atk: 25554,
    def: 3552,
    weapon: "Sniper",
    unitClass: "Attacker",
    manufacturer: "Missilis",
    element: "Earth",
    squad: "Matis",
    position: "Support 3",
    burstCD: "40",
    role: ["Buffer"],
    skill: [
      {
        name: "Normal Attack",
        type: "Charge",
        ammo: 6,
        reload: "2s",
        effect:
          "■ Affects target enemy.##Deals 69.04% ATK as damage.##Charge Time: 1 sec.##Full Charge Damage: 250%.",
      },
      {
        name: "Straight Shot",
        active: "Passive",
        effect:
          "■ Activates when entering Full Burst. Affects 2 ally units with the highest ATK.##Charge Speed ▲ 4.48% for 10 sec.##ATK ▲ 43.1% for 10 sec.",
      },
      {
        name: "Spark Shot",
        active: "Passive",
        effect:
          "■ Activates when there are above 5 enemy unit(s), excluding NIKKEs. Affects self.##Critical Rate ▲ 4.83%##Critical Damage ▲ 13.91%",
      },
      {
        name: "Pierce shot",
        effect:
          "■ Affects self.##Change the Weapon in use.##Damage: 813.42% of ATK##Max Ammunition Capacity: 1 round##Additional Effect: Pierce",
        active: "40 Seconds",
      },
    ],
    rarity: "SSR",
    full: "https://www.prydwen.gg/static/944cc6b93ab7ce72ab531cb3a4696889/3cd29/maxwell_full.webp",
  },
  {
    name: "Liter",
    art: "https://www.prydwen.gg/static/4815b31782020c75ad99d332d54f6323/60b4d/liter_icon.webp",
    hp: 647453,
    atk: 21307,
    def: 399,
    weapon: "SMG",
    unitClass: "Support",
    manufacturer: "Missilis",
    element: "Earth",
    squad: "Mighty Tools",
    position: "Burst 1",
    burstCD: "20",
    role: ["Buffer"],
    skill: [
      {
        name: "Normal Attack",
        type: "Normal",
        ammo: 120,
        reload: "1.5s",
        effect: "■ Affects target enemy.##Deals 8.73% ATK as damage.",
      },
      {
        name: "Liter Boost",
        active: "Passive",
        effect:
          "■ Activates when entering Full Burst. Affects all allies.##Effect changes according to the activation time(s). Previous effects triggers repeatedly.##Once: Cooldown of Burst Skill ▼ 2.34 sec.##Twice: Cooldown of Burst Skill ▼ 2.7 sec.##Three times: Cooldown of Burst Skill ▼ 3.17 sec.## ■ Activates when using Burst Skill. Affects all allies.##Effect changes according to the activation time(s). Previous effects triggers repeatedly.##Once: Max Ammunition Capacity ▲ 48.17% for 5 sec.##Twice: Critical Damage ▲ 12.46% for 5 sec.##Three times: ATK ▲ 14.42% for 5 sec.",
      },
      {
        name: "Bolt Boost",
        active: "15 Seconds",
        effect:
          "■ Affects 2 ally unit(s) with the lowest HP.##Cover's HP recovers by 52.5%.",
      },
      {
        name: "Double Boost",
        effect: "■ Affects all allies.##ATK ▲ 66% for 5 sec.",
        active: "20 Seconds",
      },
    ],
    rarity: "SSR",
    full: "https://www.prydwen.gg/static/6dacad01045a330784fcbac2acca9cf0/3cd29/liter_full.webp",
  },
  {
    name: "Centi",
    art: "https://www.prydwen.gg/static/83ed726ead71c91a8110740374597b27/60b4d/centi_icon.webp",
    hp: 71171,
    atk: 17059,
    def: 4908,
    weapon: "Rocket Launcher",
    unitClass: "Defender",
    manufacturer: "Missilis",
    element: "Earth",
    squad: "Mighty Tools",
    position: "Burst 2",
    burstCD: "20",
    role: ["Shielder", "Debuffer"],
    skill: [
      {
        name: "Normal Attack",
        type: "Charge",
        ammo: 6,
        reload: "1.52s",
        effect:
          "■ Affects target enemy.##Deals 61.3% ATK as damage.##Charge Time: 1 sec.##Full Charge Damage: 250%.",
      },
      {
        name: "Maintain Fortification",
        active: "Passive",
        effect:
          "■ Activates when Full Charge hits the target. Affects self.##Cooldown of Skill 2 ▼ 9.16%.",
      },
      {
        name: "Field Discussion",
        active: "9 Seconds",
        effect:
          "■ Affects all allies.##reates a shield, equivalent to 6.38% of the caster's Max HP, which protects all allies from damage. Lasts for 5 sec.",
      },
      {
        name: "Start Construction",
        effect:
          "■ Affects 5 enemy targets with the lowest HP.##Deals 145.46% of ATK as damage.##DEF ▼ 14.54% for 10 sec.",
        active: "20 Seconds",
      },
    ],
    rarity: "SSR",
    full: "https://www.prydwen.gg/static/7602c69a685c204e18027d67148f7ec9/3cd29/centi_full.webp",
  },
  {
    name: "Epinel",
    art: "https://www.prydwen.gg/static/b70ff5847ea161a4c7f01c5f20955c5c/60b4d/epinel_icon.webp",
    hp: 583734,
    atk: 25554,
    def: 3633,
    weapon: "SMG",
    unitClass: "Attacker",
    manufacturer: "Missilis",
    element: "Wind",
    squad: "Nepenthe",
    position: "Burst 3",
    burstCD: "40",
    role: ["DPS"],
    skill: [
      {
        name: "Normal Attack",
        type: "Normal",
        ammo: 120,
        reload: "1s",
        effect: "■ Affects target enemy.##Deals 8.1% ATK as damage.",
      },
      {
        name: "Total Noob",
        active: "Passive",
        effect:
          "■ Activates when killing an enemy. Affects self.##Total Noob: ATK ▲ 13.86%, stacks up to 5 time(s) and lasts for 15 sec.",
      },
      {
        name: "Arachnid",
        active: "Passive",
        effect:
          "■ Activates when the last bullet hits the target. Affects self.## Critical Rate ▲ 5.05% for 5 sec.##Critical Damage ▲ 6.4% for 5 sec.",
      },
      {
        name: "SAFE 50-50",
        effect:
          "■ Affects all enemies.##Deals 457.87% of ATK as damage.##■ Activates when attacking with Total Noob passive active. Affects all enemies.##Deals 457.87% of ATK as damage.",
        active: "40 Seconds",
      },
    ],
    rarity: "SSR",
    full: "https://www.prydwen.gg/static/5feadecd53e96118e17cffc4b5110db6/3cd29/epinel_full.webp",
  },
  {
    name: "Folkwang",
    art: "https://www.prydwen.gg/static/49362e8159fb82e78410efd2a995d977/60b4d/folkwang_icon.webp",
    hp: 711171,
    atk: 15059,
    def: 5015,
    weapon: "Assault Rifle",
    unitClass: "Defender",
    manufacturer: "Tetra",
    element: "Water",
    squad: "Nepenthe",
    position: "Burst 2",
    burstCD: "40",
    role: ["Healer", "Tank"],
    skill: [
      {
        name: "Normal Attack",
        type: "Normal",
        ammo: 60,
        reload: "1.3s",
        effect: "■ Affects target enemy.##Deals 14.29% ATK as damage.",
      },
      {
        name: "Starting Whistle",
        active: "30 Seconds",
        effect:
          "■ Affects 2 targets with the highest ATK.##Gain a shield equal to 13.71% of the caster's Max HP for 10 sec.##HP Potency ▲ 45.7% for 10 sec.",
      },
      {
        name: "Harder, Better, Faster",
        active: "20 Seconds",
        effect:
          "■ Affects the target with the highest ATK.##Taunt for 5 sec.##■ Affects self.##Max HP ▲ 44.96% for 10 sec.",
      },
      {
        name: "Splint",
        effect:
          "■ Affects 2 allies with the highest ATK.##Gain a shield equal to 32.9% of the caster's Max HP for 10 sec.##Restore HP equal to 65.81% of ATK for 10 sec.",
        active: "40 Seconds",
      },
    ],
    rarity: "SSR",
    full: "https://www.prydwen.gg/static/3b1bbc79698cec179b9d6920ba99e6b1/3cd29/folkwang_full.webp",
  },
  {
    name: "Scarlet",
    art: "https://www.prydwen.gg/static/e6108076ecd772e101f22d77a2ee3eb6/60b4d/scarlet_icon.webp",
    hp: 583734,
    atk: 25554,
    def: 4164,
    weapon: "Assault Rifle",
    unitClass: "Attacker",
    manufacturer: "Pilgrim",
    element: "Electric",
    squad: "Pioneer",
    position: "Burst 3",
    burstCD: "40",
    role: ["DPS"],
    skill: [
      {
        name: "Normal Attack",
        type: "Normal",
        ammo: 20,
        reload: "2.3s",
        effect: "■ Affects target enemy.##Deals 27.08% ATK as damage.",
      },
      {
        name: "Rip & Tear",
        active: "Passive",
        effect:
          "■ Activates after landing 10 normal attack(s). Affects self.##ATK ▲ 23.15%, stacks up to 5 times and lasts for 5 sec.##Current HP ▼ 4.01%",
      },
      {
        name: "Zatoichi",
        active: "Passive",
        effect:
          "■ Affects the attacker. 30% chance of casting when attacked.##[Target] Deals 138.24% of ATK as damage.##■ Affects self. Cast when HP falls below 60%.##Critical Damage ▲ 6.61%",
      },
      {
        name: "Scarlet Flash",
        effect:
          "■ Affects self. Cast when HP falls below 50%.## Critical Rate ▲ 19.57% for 10 sec.##■ Affects all enemies.##Deals 849.15% of ATK as damage.",
        active: "40 Seconds",
      },
    ],
    rarity: "SSR",
    full: "https://www.prydwen.gg/static/603578b2f7a750e29637c0c6f5b1a2ce/3cd29/scarlet_full.webp",
  },
  {
    name: "Rapunzel",
    art: "https://www.prydwen.gg/static/b085d6638a870a21dfe81fa83915e074/60b4d/rapunzel_icon.webp",
    hp: 647453,
    atk: 21307,
    def: 4485,
    weapon: "Rocket Launcher",
    unitClass: "Support",
    manufacturer: "Pilgrim",
    element: "Earth",
    squad: "Pioneer",
    position: "Support 1",
    burstCD: "60",
    role: ["Healer"],
    skill: [
      {
        name: "Normal Attack",
        type: "Charge",
        ammo: 6,
        reload: "2.3s",
        effect:
          "■ Affects target enemy.##Deals 62.95% ATK as damage.##Charge Time: 1.5 sec.##Full Charge Damage: 250% of damage.",
      },
      {
        name: "Sacrifice",
        active: "Passive",
        effect:
          "■ Activates when attacking with Full Charge. Affects 3 allied unit(s) with the lowest HP.##Recovers 4.03% of the caster's Max HP as HP.",
      },
      {
        name: "Divine Blessing",
        active: "15 Seconds",
        effect:
          "■ Affects 2 allied unit(s) with the highest ATK.##Max HP ▲ 8.19% for 20 sec.##HP Potency ▲ 13.65% for 20 sec.",
      },
      {
        name: "Garden of Shangri-La",
        effect:
          "■ Affects all allies.##Recovers 40.83% of the casters max HP as HP.##■ Affects 1 fallen allied unit(s) randomly.##Resurrect with 81.67% HP.##■ Activates when HP falls below 30%. Affects all enemies.##Stun for 1 sec.",
        active: "60 Seconds",
      },
    ],
    rarity: "SSR",
    full: "https://www.prydwen.gg/static/be3bbc1b290d7fb25585f94627193ee1/3cd29/rapunzel_full.webp",
  },
  {
    name: "Snow White",
    art: "https://www.prydwen.gg/static/cca848f0ed074359a9fe832a3f5855fc/60b4d/snow_icon.webp",
    hp: 583734,
    atk: 25554,
    def: 4164,
    weapon: "Assault Rifle",
    unitClass: "Attacker",
    manufacturer: "Pilgrim",
    element: "Earth",
    squad: "Pioneer",
    position: "Burst 3",
    burstCD: "40",
    role: ["DPS"],
    skill: [
      {
        name: "Normal Attack",
        type: "Normal",
        ammo: 60,
        reload: "1.5s",
        effect: "■ Affects target enemy.##Deals 14.71% ATK as damage.",
      },
      {
        name: "Determination",
        active: "Passive",
        effect:
          "■ Activates when normal attacks hits 30 times. Affects enemy targets.##Deals 82.8% of ATK as additional damage.##■ Activates when normal attacks hits 30 times. Affects self.##ATK ▲ 8.28% for 5 sec.",
      },
      {
        name: "Seven Dwarves: V & VI",
        active: "15 Seconds",
        effect:
          "■ Affects enemies within the attack range.##[Target] Deals 144.73% of ATK as damage.##■ Activates when attacking during Full Burst Time.##[Self] Critical Rate ▲ 26.1% for 10 sec.",
      },
      {
        name: "Seven Dwarves: I",
        effect:
          "■ Affects self.## Changes the weapon in use:##Charge Time: 5 sec##Damage 499.5% of ATK##Full Charge Damage: 1000% damage##Max Ammunition Capacity: 1 round##Additional Effect: Penetration",
        active: "40 Seconds",
      },
    ],
    rarity: "SSR",
    full: "https://www.prydwen.gg/static/db311e935842ff830d6efc13f4bab7b1/3cd29/snow_full.webp",
  },
  {
    name: "Noise",
    art: "https://www.prydwen.gg/static/66ecab0a489a2ef6d3df2dccdcdb311c/60b4d/noise_icon.webp",
    hp: 647453,
    atk: 21307,
    def: 4485,
    weapon: "Rocket Launcher",
    unitClass: "Support",
    manufacturer: "Tetra",
    element: "Electric",
    squad: "Prima Donna",
    position: "Support 1",
    burstCD: "40",
    role: ["Healer", "Tank"],
    skill: [
      {
        name: "Normal Attack",
        type: "Charge",
        ammo: 6,
        reload: "2s",
        effect:
          "■ Affects target enemy.##Deals 61.3% ATK as damage.##Charge Time: 1.5 sec.##Full Charge Damage: 350%.",
      },
      {
        name: "Chorus",
        active: "Passive",
        effect:
          "■ Activates when attacked 20 time(s). Affects all allies.##Damage taken ▼ 10.66% for 20 sec.",
      },
      {
        name: "Sing Together",
        active: "Passive",
        effect:
          "■ Affects the target(s) when attacking with full charge.##Taunt for 2 sec.##■ Affects self.##Max HP ▲ 15.16% for 5 sec.",
      },
      {
        name: "Energetic Noise",
        effect:
          "■ Affects all allies.##Constantly recovers caster's 2.47% of caster's Maximum HP every 1 sec for 10 sec.##Maximum HP ▲ 49.5% for 10 sec.",
        active: "40 Seconds",
      },
    ],
    rarity: "SSR",
    full: "https://www.prydwen.gg/static/0a198aa8c0394ad05d57bd1a24c8332e/3cd29/noise_full.webp",
  },
  {
    name: "Aria",
    art: "https://www.prydwen.gg/static/861c597a1846bfea9d8bbd760dac0bbc/60b4d/aria_icon.webp",
    hp: 583734,
    atk: 25554,
    def: 3539,
    weapon: "Machine Gun",
    unitClass: "Attacker",
    manufacturer: "Tetra",
    element: "Water",
    squad: "Prima Donna",
    position: "Support 2",
    burstCD: "40",
    role: ["Buffer", "Shielder"],
    skill: [
      {
        name: "Normal Attack",
        type: "Normal",
        ammo: 30,
        reload: "2.33s",
        effect: "■ Affects target enemy.##Deals 5.47% ATK as damage.",
      },
      {
        name: "Allegro",
        active: "Passive",
        effect:
          "■ Activates at the beginning of Full Burst. Affects all allies.##Critical Damage ▲ 26.99% for 10 sec.",
      },
      {
        name: "Lacrimoso",
        active: "Passive",
        effect:
          "■ Activates when the last bullet hits the target. Affects all allies.##Critical Rate ▲ 7.03% for 5 sec.",
      },
      {
        name: "Da Capo Aria",
        effect:
          "■ Affects all allies.##Generates a Shield with 37.86% of the caster's Max HP for 10 sec.##■ Affects self.##Hit Rate ▲ 30.37% for 15 sec.",
        active: "40 Seconds",
      },
    ],
    rarity: "SSR",
    full: "https://www.prydwen.gg/static/0d48d21ec9e21a0cbddc0b5bb2ea67b1/3cd29/aria_full.webp",
  },
  {
    name: "Volume",
    art: "https://www.prydwen.gg/static/81322f18cac0b4e219372821f30f9a53/60b4d/volume_icon.webp",
    hp: 583734,
    atk: 25554,
    def: 3633,
    weapon: "SMG",
    unitClass: "Attacker",
    manufacturer: "Tetra",
    element: "Wind",
    squad: "Prima Donna",
    position: "Burst 1",
    burstCD: "20",
    role: ["Buffer"],
    skill: [
      {
        name: "Normal Attack",
        type: "Normal",
        ammo: 120,
        reload: "1.5s",
        effect: "■ Affects target enemy.##Deals 8.73% ATK as damage.",
      },
      {
        name: "Allegro",
        active: "Passive",
        effect: "■ Affects self when killing an enemy.##ATK ▲ 12.6% for 5 sec.",
      },
      {
        name: "Lacrimoso",
        active: "Passive",
        effect:
          "■ Activates when entering Full Burst. Affects all allies.## Effect changes according to the number of activation time(s). Previous effects triggers repeatedly.##Once: Burst Skill cooldown ▼ 2.34 sec.##Twice: Burst Skill cooldown ▼ 2.7 sec.## Three times: Burst Skill cooldown ▼ 3.17 sec.##■ Activates when using Burst Skill. Affects all allies.##Effect changes according to the number of activation time(s). Previous effects triggers repeatedly.##Once: Critical Damage ▲ 10.77% for 5sec.##Twice: Critical Damage ▲ 12.46% for 5 sec.##hree times: Critical Damage ▲ 14.42% for 5 sec.",
      },
      {
        name: "Da Capo Aria",
        effect: "■ Affects all allies.##Critical Chance ▲ 31.59% for 5 sec.",
        active: "20 Seconds",
      },
    ],
    rarity: "SSR",
    full: "https://www.prydwen.gg/static/eb970dc74bc6a613c78a653a504bbf2a/3cd29/volume_full.webp",
  },
  {
    name: "Novel",
    art: "https://www.prydwen.gg/static/2d768441d86a208971ae9a370a25c284/60b4d/novel_icon.webp",
    hp: 711171,
    atk: 17059,
    def: 4364,
    weapon: "SMG",
    unitClass: "Defender",
    manufacturer: "Tetra",
    element: "Earth",
    squad: "Protocol",
    position: "Burst 2",
    burstCD: "20",
    role: ["Debuffer"],
    skill: [
      {
        name: "Normal Attack",
        type: "Normal",
        ammo: 120,
        reload: "1s",
        effect: "■ Affects target enemy.##Deals 8.1% ATK as damage.",
      },
      {
        name: "Something's Fishy Here",
        active: "10 Seconds",
        effect:
          "■ Affects 3 enemy unit(s) with the highest DEF.##Deals 52.36% of ATK as damage.##DEF ▼ 7.05% for 5 sec.",
      },
      {
        name: "Detective's Intuition",
        active: "Passive",
        effect:
          "■ Activates after landing 100 normal attack(s). Affects self.##Cornucopia: DEF ▲ 13.5%, stacks up to 5 time(s) and lasts for 15 sec.",
      },
      {
        name: "Case Closed",
        effect:
          '■ Affects 1 enemy unit(s) with the highest ATK.##Deals 330.61% of ATK as damage.##■ Activates when "Cornucopia" is fully stacked. Affects 1 enemy unit(s).##Damage Taken ▲ 67.5% for 5 sec.',
        active: "20 Seconds",
      },
    ],
    rarity: "SSR",
    full: "https://www.prydwen.gg/static/548e5ccc4fd042763444f515301e9e31/3cd29/novel_full.webp",
  },
  {
    name: "Exia",
    art: "https://www.prydwen.gg/static/7e833e38b9b438f98af5940b06edc468/60b4d/exia_icon.webp",
    hp: 647453,
    atk: 21307,
    def: 3894,
    weapon: "Sniper",
    unitClass: "Attacker",
    manufacturer: "Tetra",
    element: "Electric",
    squad: "Protocol",
    position: "Burst 1",
    burstCD: "20",
    role: ["DPS"],
    skill: [
      {
        name: "Normal Attack",
        type: "Charge",
        ammo: 6,
        reload: "2s",
        effect:
          "■ Affects target enemy.##Deals 69.04% ATK as damage.##Charge Time: 1 sec.##Full Charge Damage: 250%.",
      },
      {
        name: "Invasion",
        active: "Passive",
        effect:
          '■ When the last round of ammunition hits, affects the target if the caster is in "Collect Hacking Code"##ATK ▼ 13.77% for 5 sec.##DEF ▼ 13.77% for 5 sec.',
      },
      {
        name: "Secret Code",
        active: "Passive",
        effect:
          "■ Activates when the last round of ammunition hits. Affects self.##Collect Hacking Code: ATK ▲ 16.8%, stacks up to 5 time(s) and lasts for 15 sec.",
      },
      {
        name: "Partisan Protocol",
        effect:
          '■ Affects 10 enemy unit(s) with the highest DEF.##Deals 122.32% of ATK as damage.##DEF ▼ 2.71% for 5 sec.##■ Affects the same target(s) when "Collect Hacking Code" is fully stacked.##Deals 122.32% of ATK as additional damage.',
        active: "20 Seconds",
      },
    ],
    rarity: "SSR",
    full: "https://www.prydwen.gg/static/d048784ce57f5c11edbbbc649f8fef77/3cd29/exia_full.webp",
  },
  {
    name: "N102",
    art: "https://www.prydwen.gg/static/510126b1c7ed2707ef5c0e0bb239652f/60b4d/n102_icon.webp",
    hp: 280314,
    atk: 10824,
    def: 2286,
    weapon: "Rocket Launcher",
    unitClass: "Support",
    manufacturer: "Missilis",
    element: "Water",
    squad: "Recall & Release",
    position: "Burst 1",
    burstCD: "20",
    role: ["Buffer"],
    skill: [
      {
        name: "Normal Attack",
        type: "Charge",
        ammo: 6,
        reload: "2s",
        effect:
          "■ Affects target enemy.##Deals 61.3% ATK as damage.##Charge Time: 1.5 sec.##Full Charge Damage: 350% of damage.",
      },
      {
        name: "Written Memories",
        active: "Passive",
        effect:
          "■ Affects 1 ally with the highest ATK. Cast when attacking during Full Charge.##[Target] Max Ammunition Capacity ▲ 3 shots for 10 sec.##[Target] Critical Damage ▲ 10.34% for 10 sec.",
      },
      {
        name: "Impaired Memory",
        active: "!5 Seconds",
        effect:
          "■ Affects 1 ally unit(s) with the highest HP.##Charge Damage ▲ 25.84% for 5 sec.",
      },
      {
        name: "Memories of Blue Butterflies",
        effect: "■ Affects all allies.##ATK ▲ 25.86% for 10 sec.",
        active: "20 Seconds",
      },
    ],
    rarity: "SR",
    full: "https://www.prydwen.gg/static/935391c4df2a04ae370c1717d3f21ae7/3cd29/n102_full.webp",
  },
  {
    name: "Miracle Fairy Anne",
    art: "https://www.prydwen.gg/static/c6ceea437415ffe9dad57dd84b6865f3/60b4d/anne_icon.webp",
    hp: 647453,
    atk: 21307,
    def: 4485,
    weapon: "Rocket Launcher",
    unitClass: "Support",
    manufacturer: "Missilis",
    element: "Wind",
    squad: "Recall & Release",
    position: "Burst 2",
    burstCD: "20",
    role: ["Buffer", "Debuffer", "Healer"],
    skill: [
      {
        name: "Fairy Dance",
        effect:
          "■ Affects all Supporter allies. Activates after 3 normal attack(s).Recover 6.07% of attack damage as HP over 5 sec.",
      },
      {
        name: "Fairy's Jest",
        active: "Passive",
        effect:
          "■ Affects all allies. Activates when above 90% HP.## HP Potency ▲ 23.46%.## ■ Activates when the last bullet hits the target while having over 90% HP. Affects all enemies.## HP Potency ▼ 78.93% for 10 sec..",
      },
      {
        name: "Blue Butterfly Slumber",
        active: "Passive",
        effect:
          "■ Affects 1 random fallen Attacker ally unit(s).## Resurrect with 99% HP. Activates once per battle.## ■ Affects all Attacker allies.## Restores HP equal to 38.61% of the caster's Max HP.## ATK ▲ 77.22% for 10 sec.",
        active: "60 Seconds",
      },
    ],
    rarity: "SSR",
    full: "https://www.prydwen.gg/static/32e949cc167950642487cdc465884384/3cd29/anne_full.webp",
  },
  {
    name: "Soldier OW",
    art: "https://www.prydwen.gg/static/c9f347f399b4bcd94a82f184abc7bed3/60b4d/soldierow_icon.webp",
    hp: 83463,
    atk: 2903,
    def: 499,
    weapon: "SMG",
    unitClass: "Support",
    manufacturer: "Elysion",
    element: "Fire",
    squad: "Replace",
    position: "Burst 1",
    burstCD: "20",
    role: ["Buffer"],
    skill: [
      {
        name: "Normal Attack",
        type: "Normal",
        ammo: 120,
        reload: "12",
        effect: "■ Affects target enemy.##Deals 9.36% ATK as damage.",
      },
      {
        name: "Hoo of the Owl",
        active: "10 Seconds",
        effect:
          "■ There is a 10% chance of activating after casting normal attack(s).##Deals 75.6% of ATK as additional damage.",
      },
      {
        name: "Owl Wind",
        active: "10 Seconds",
        effect:
          "■ Affects 3 ally unit(s) with the highest ATK.##Cover's DEF ▲ 128.57% for 5 sec.",
      },
      {
        name: "Owl Feather",
        effect:
          "■ Affects all allies with Fire Element.## Max Ammunition Capacity ▲ 280% for 10 sec.",
        active: "20 Seconds",
      },
    ],
    rarity: "R",
    full: "https://www.prydwen.gg/static/9647afea345a6717756524f0b97a87b3/3cd29/soldierow_full.webp",
  },
  {
    name: "Soldier EG",
    art: "https://www.prydwen.gg/static/5ab73c9dedfb2d26289c37d026f76ec5/60b4d/soldiereg_icon.webp",
    hp: 75117,
    atk: 3484,
    def: 522,
    weapon: "Assault Rifle",
    unitClass: "Attacler",
    manufacturer: "Elysion",
    element: "Electric",
    squad: "Replace",
    position: "Burst 3",
    burstCD: "20",
    role: ["DPS"],
    skill: [
      {
        name: "Normal Attack",
        type: "Normal",
        ammo: 60,
        reload: "1.17s",
        effect: "■ Affects target enemy.##Deals 14.01% ATK as damage.",
      },
      {
        name: "Eagle Eye",
        active: "10 Seconds",
        effect:
          "■ When a normal attack hits, there is a 5% chance of affecting self.##ATK ▲ 7.92% for 5 sec.",
      },
      {
        name: "Eagle's Gambit",
        active: "9 Seconds",
        effect: "■ Affects self.##Max Ammunition Capacity ▲ 112.77% for 5 sec.",
      },
      {
        name: "Eagle Shot",
        effect:
          "■ Affects enemy unit(s) within attack range.##Deals 720% of ATK as damage.",
        active: "40 Seconds",
      },
    ],
    rarity: "R",
    full: "https://www.prydwen.gg/static/0ae606b92971663e727ee54bb24f5f17/3cd29/soldiereg_full.webp",
  },
  {
    name: "Soldier FA",
    art: "https://www.prydwen.gg/static/bbdbbe6026210ec9425b7b583251246a/60b4d/soldierfa_icon.webp",
    hp: 91809,
    atk: 2322,
    def: 613,
    weapon: "Shotgun",
    unitClass: "Defender",
    manufacturer: "Elysion",
    element: "Iron",
    squad: "Replace",
    position: "Burst 2",
    burstCD: "20",
    role: ["DPS"],
    skill: [
      {
        name: "Normal Attack",
        type: "Normal",
        ammo: 9,
        reload: "2s",
        effect: "■ Affects target enemy.##eals 214.3% ATK as damage.",
      },
      {
        name: "Falcon Wings",
        active: "10 Seconds",
        effect:
          "■ There is a 10% chance of activating when attacked. Affects self.##DEF ▲ 9.09% for 10 sec.",
      },
      {
        name: "Falcon Nest",
        active: "15 Seconds",
        effect:
          "■ Affects self.##Recover 20.19% of attack damage as HP over 8 sec.",
      },
      {
        name: "Falcon Boost",
        effect: "■ Affects self.##Max HP ▲ 112.5% for 10 sec.",
        active: "40 Seconds",
      },
    ],
    rarity: "R",
    full: "https://www.prydwen.gg/static/c2676994239f24dd8ee33bb282215847/3cd29/soldierfa_full.webp",
  },
  {
    name: "Product 08",
    art: "https://www.prydwen.gg/static/e61659e7cd7a8be1b07fa00f15d8ed89/60b4d/product8_icon.webp",
    hp: 83463,
    atk: 2903,
    def: 487,
    weapon: "Sniper",
    unitClass: "Supporter",
    manufacturer: "Missilis",
    element: "Electric",
    squad: "Replace",
    position: "Burst 1",
    burstCD: "20",
    role: ["Buffer"],
    skill: [
      {
        name: "Normal Attack",
        type: "Charge",
        ammo: 6,
        reload: "2s",
        effect:
          "■ Affects target enemy.##Deals 61.3% ATK as damage.##Charge Time: 1 sec.##Full Charge Damage: 250%.",
      },
      {
        name: "Tactic: Enhance Armor",
        active: "10 Seconds",
        effect:
          "■ When a normal attack hits, there is 20% chance of affecting 1 ally unit(s) with the lowest HP.##DEF ▲ 9.09% for 5 sec.",
      },
      {
        name: "Tactic: Crack Shot",
        active: "17 Seconds",
        effect:
          "■ Affects 1 ally unit(s) with the highest ATK.##Critical Rate ▲ 22.99% for 5 sec.",
      },
      {
        name: "Tactic: Power Boost",
        effect: "■ Affects all allies.##ATK ▲ 19.39% for 10 sec.",
        active: "20 Seconds",
      },
    ],
    rarity: "R",
    full: "https://www.prydwen.gg/static/7323001f5aed7538506a38a0db964d27/3cd29/product8_full.webp",
  },
  {
    name: "Product 12",
    art: "https://www.prydwen.gg/static/5d42c1727b76a56f510b49d7d3ec2b51/60b4d/product12_icon.webp",
    hp: 75117,
    atk: 3484,
    def: 437,
    weapon: "Machine Gun",
    unitClass: "Supporter",
    manufacturer: "Missilis",
    element: "Fire",
    squad: "Replace",
    position: "Burst 3",
    burstCD: "20",
    role: ["DPS"],
    skill: [
      {
        name: "Normal Attack",
        type: "Normal",
        ammo: 300,
        reload: "2.67s",
        effect: "■ Affects target enemy.##Deals 5.57% ATK as damage.",
      },
      {
        name: "Action: Increase ATK",
        active: "10 Seconds",
        effect:
          "■ Affects self. Activates after 2 normal attack(s).##ATK ▲ 8.28% for 5 sec.",
      },
      {
        name: "Action: Concentrate Fire",
        active: "10 Seconds",
        effect:
          "■ Affects 1 enemies with the lowest HP.##[Target] Deals 109.09% of ATK as damage.",
      },
      {
        name: "Action: Precision Strike",
        effect:
          "■ Affects enemies within attack range.##[Target] Deals 720% of ATK as damage.",
        active: "40 Seconds",
      },
    ],
    rarity: "R",
    full: "https://www.prydwen.gg/static/1cb462e4a72d3d9a98e7c5b67614080f/3cd29/product12_full.webp",
  },
  {
    name: "Product 23",
    art: "https://www.prydwen.gg/static/c653c3df3d78d755a275354ddec54863/60b4d/product23_icon.webp",
    hp: 83463,
    atk: 2903,
    def: 557,
    weapon: "Shotgun",
    unitClass: "Supporter",
    manufacturer: "Missilis",
    element: "Wind",
    squad: "Replace",
    position: "Burst 2",
    burstCD: "20",
    role: ["Debuffer"],
    skill: [
      {
        name: "Normal Attack",
        type: "Normal",
        ammo: 9,
        reload: "2s",
        effect: "■ Affects target enemy.##Deals 231.6% ATK as damage.",
      },
      {
        name: "Order: Power Boost",
        active: "10 Seconds",
        effect:
          "■ Activates when the last bullet hits the target. Affects self.##DEF ▲ 8.1% for 10 sec..",
      },
      {
        name: "Order: Emergency Measure",
        active: "15 Seconds",
        effect:
          "■ Affects self.##Recover 16.15% of attack damage as HP over 10 s",
      },
      {
        name: "Action: Precision Strike",
        effect:
          "■ Affects 2 enemy unit(s) with the highest ATK.##DEF ▼ 48.75% for 5 sec.",
        active: "40 Seconds",
      },
    ],
    rarity: "R",
    full: "https://www.prydwen.gg/static/47b7b605db735b692e5c746d74a39deb/3cd29/product23_full.webp",
  },
  {
    name: "IDoll Flower",
    art: "https://www.prydwen.gg/static/70955e7d07f2ec2b28927f77fdcb88dc/60b4d/idollflower_icon.webp",
    hp: 91809,
    atk: 2322,
    def: 622,
    weapon: "Rocket Launcher",
    unitClass: "Defender",
    manufacturer: "Tetra",
    element: "Wind",
    squad: "Replace",
    position: "Burst 1",
    burstCD: "20",
    role: ["Buffer"],
    skill: [
      {
        name: "Normal Attack",
        type: "Charge",
        ammo: 6,
        reload: "2s",
        effect:
          "■ Affects target enemy.## Deals 61.3% of ATK as damage.##Charge Time: 1 sec.##Full Charge Damage: 250% of damage.",
      },
      {
        name: "Perennial Leaf",
        active: "Passive",
        effect:
          "■ Activates when the last bullet hits the target. Affects the target.##ATK ▼ 16.52% for 5 sec.",
      },
      {
        name: "Hue of the Perennial",
        active: "15 Seconds",
        effect:
          "■ Affects 1 enemy unit(s) with the highest ATK.##ATK ▼ 39.37% for 5 sec.",
      },
      {
        name: "Perennial Perfume",
        effect:
          "■ Affects 1 enemy unit(s) with the highest ATK.##Deals 330.61% of ATK as damage.## Attract for 2 sec.",
        active: "20 Seconds",
      },
    ],
    rarity: "R",
    full: "https://www.prydwen.gg/static/2af41e666508375a19c7faec7c7e2fce/3cd29/idollflower_full.webp",
  },
  {
    name: "IDoll Ocean",
    art: "https://www.prydwen.gg/static/a39dfa345e904bc4a514db2cd8c05ffc/60b4d/idollocean_icon.webp",
    hp: 83463,
    atk: 2903,
    def: 499,
    weapon: "SMG",
    unitClass: "Supporter",
    manufacturer: "Tetra",
    element: "Water",
    squad: "Replace",
    position: "Burst 1",
    burstCD: "20",
    role: ["Buffer"],
    skill: [
      {
        name: "Normal Attack",
        type: "Normal",
        ammo: 6,
        reload: "2s",
        effect: "■ Affects target enemy.##Deals 8.73% ATK as damage.",
      },
      {
        name: "Ocean Shower",
        active: "Passive",
        effect:
          "■ Activates when the last bullet hits the target. Affects the target.##ATK ▼ 16.52% for 5 sec.",
      },
      {
        name: "Ocean Cleaning",
        active: "15 Seconds",
        effect:
          "■ Activates when the last bullet hits the target. Affects 1 ally unit(s) with the lowest HP.## Recovers 4.85% of Max Hp.",
      },
      {
        name: "Ocean Dive",
        effect:
          "■ Affects all allies.##Recovers 29.37% of the caster's Max HP as HP.",
        active: "20 Seconds",
      },
    ],
    rarity: "R",
    full: "https://www.prydwen.gg/static/92413daa5709ea317791b1db0377e985/3cd29/idollocean_full.webp",
  },
  {
    name: "IDoll Sun",
    art: "https://www.prydwen.gg/static/5d256b2db083da55c0c0ea2a469eff8e/60b4d/idollsun_icon.webp",
    hp: 83463,
    atk: 2903,
    def: 580,
    weapon: "Assault Rifle",
    unitClass: "Supporter",
    manufacturer: "Tetra",
    element: "Iron",
    squad: "Replace",
    position: "Burst 3",
    burstCD: "40",
    role: ["Buffer"],
    skill: [
      {
        name: "Normal Attack",
        type: "Normal",
        ammo: 6,
        reload: "2s",
        effect: "■ Affects target enemy.##Deals 14.71% ATK as damage.",
      },
      {
        name: "Sunshine",
        active: "Passive",
        effect:
          "■ Affects self. Activates after landing 10 normal attack(s).##DEF ▲ 7.56% for 5 sec.",
      },
      {
        name: "Sunlight",
        active: "15 Seconds",
        effect:
          "■ There is a 20% chance to activate when attacked.##ATK ▲ 9.09% for 5 sec.",
      },
      {
        name: "Sunset",
        effect: "■ Affects self.##Max Ammunition Capacity ▲ 787.5% for 10 sec.",
        active: "40 Seconds",
      },
    ],
    rarity: "R",
    full: "https://www.prydwen.gg/static/336dbbc0e28866f9365976e73c7fabf9/3cd29/idollsun_full.webp",
  },
  {
    name: "Signal",
    art: "https://www.prydwen.gg/static/f04d9c2af6296c9e996739ebf22ca9fd/60b4d/signal_icon.webp",
    hp: 583734,
    atk: 25554,
    def: 3633,
    weapon: "SMG",
    unitClass: "Attacker",
    manufacturer: "Elysion",
    element: "Fire",
    squad: "Scouting",
    position: "Burst 2",
    burstCD: "20",
    role: ["DPS", "Debuffer"],
    skill: [
      {
        name: "Normal Attack",
        type: "Normal",
        ammo: 120,
        reload: "1s",
        effect: "■ Affects target enemy##Deals 8.1% ATK as damage.",
      },
      {
        name: "Attack Signal",
        active: "Passive",
        effect:
          "■ Affects enemy hit by 60 normal attack (s).##[Target] DEF ▼ 5.94% for 5 sec.##Target] ATK ▼ 5.94% for 5 sec.",
      },
      {
        name: "Waiting for Signal",
        active: "Passive",
        effect:
          "■ Affects self. Cast when entering Full Burst.##Recovers 44.08% of attack damage as HP over 10 sec.",
      },
      {
        name: "Emergency Signal",
        effect:
          "■ Affects enemies within attack range.##Deals 229.22% of ATK as damage.##DEF ▼ 12.34% for 10 sec.",
        active: "20 Seconds",
      },
    ],
    rarity: "SSR",
    full: "https://www.prydwen.gg/static/0f55a1746540afdcb66d31fde6262ccf/3cd29/signal_full.webp",
  },
  {
    name: "Delta",
    art: "https://www.prydwen.gg/static/5d4be549107e1f2bdc8645873236b1d2/60b4d/delta_icon.webp",
    hp: 115704,
    atk: 3056,
    def: 1135,
    weapon: "Sniper",
    unitClass: "Defender",
    manufacturer: "Elysion",
    element: "Wind",
    squad: "Scouting",
    position: "Support 2",
    burstCD: "40",
    role: ["Tank"],
    skill: [
      {
        name: "Normal Attack",
        type: "Charge",
        ammo: 6,
        reload: "1.5s",
        effect:
          "■ Affects target enemy.##Deals 65.95% ATK as damage.##harge Time: 1 sec.##Full Charge Damage: 250% of damage.",
      },
      {
        name: "Recollection",
        active: "Passive",
        effect:
          "■ Activates when hitting a target with Full Charge. Affects self.##Max HP ▲ 8.82% for 10 sec.",
      },
      {
        name: "Last Memory",
        active: "Passive",
        effect:
          "■ Activates when using Burst Skills. Affects self.##DEF ▲ 51.42% for 20 sec.",
      },
      {
        name: "Remember Me",
        effect:
          "■ Affects self.## Decoy: Avatar with 91.68% of caster's Max HP for 10 sec.##Attract: Taunt all enemies for 10 sec.",
        active: "40 Seconds",
      },
    ],
    rarity: "SR",
    full: "https://www.prydwen.gg/static/57d9c08ecda2e4103ac3dcb689fbecab/3cd29/delta_full.webp",
  },
  {
    name: "Pepper",
    art: "https://www.prydwen.gg/static/cbd0e67b95a58abe8037c9bfd17f0131/60b4d/pepper_icon.webp",
    hp: 647453,
    atk: 21307,
    def: 4420,
    weapon: "Shotgun",
    unitClass: "Support",
    manufacturer: "Missilis",
    element: "Wind",
    squad: "Seraphim",
    position: "Burst 1",
    burstCD: "20",
    role: ["Healer", "DPS", "Buffer"],
    skill: [
      {
        name: "Normal Attack",
        type: "Normal",
        ammo: 9,
        reload: "2.03s",
        effect: "■ Affects target enemy.##Deals 231.6% ATK as damage.",
      },
      {
        name: "Refresh Heart",
        active: "Passive",
        effect:
          "■ Activates when the last bullet hits the target. Affects 1 allied unit(s) with the lowest HP.##Restores HP equal to 4.45% of the caster's Max HP.##■ Activates when the last bullet hits the target. Affects all allies.##Refresh Heart: HP Recovery up 6.53%, stacks up to 5 time(s) and lasts for 15 sec..",
      },
      {
        name: "Vitamin Power",
        active: "10 Seconds",
        effect:
          "■ Affects 1 enemy unit(s) with the highest ATK.##Deal damage equal to 160% of ATK.##ATK ▼ 3.55% for 5 sec.",
      },
      {
        name: "Pepper Therapy",
        effect:
          '■ Affects 1 enemy unit(s) with the highest ATK.##Deals 1237.5% of ATK as damage.##■ Affects all allies.##Increases stack count of buffs by 1.##■ Activates when "Refresh Heart" is fully stacked.## Restores HP equal to 27.22% of the caster\'s Max HP.',
        active: "20 Seconds",
      },
    ],
    rarity: "SSR",
    full: "https://www.prydwen.gg/static/27b83255cab87cb5be1042f88556f27c/3cd29/pepper_full.webp",
  },
  {
    name: "Mary",
    art: "https://www.prydwen.gg/static/f38af9ba124203b6cabd74aca4d7b641/60b4d/mary_icon.webp",
    hp: 647453,
    atk: 21307,
    def: 4420,
    weapon: "Shotgun",
    unitClass: "Support",
    manufacturer: "Tetra",
    element: "Water",
    squad: "Seraphim",
    position: "Support 1",
    burstCD: "40",
    role: ["Healer"],
    skill: [
      {
        name: "Normal Attack",
        type: "Normal",
        ammo: 9,
        reload: "2.03s",
        effect: "■ Affects target enemy.##Deals 201.5% ATK as damage.",
      },
      {
        name: "Refresh Heart",
        active: "Passive",
        effect:
          "■ Activates when the last bullet hits the target. Affects 1 allies with the lowest HP.##Recovers 8.4% of the caster's Max HP as HP",
      },
      {
        name: "Vitamin Power",
        active: "Passive",
        effect:
          "■ Activates at the beginning of Full Burst. Affects allies.##Restored HP ▲ 23.78%",
      },
      {
        name: "epper Therapy",
        effect:
          "■ Affects all allies. Cast when above 50% HP.##DEF ▲ 19.8% for 10 sec.##■ Affects all allies.##Recovers HP by 39.6% of the casters Max HP.",
        active: "20 Seconds",
      },
    ],
    rarity: "SSR",
    full: "https://www.prydwen.gg/static/854de0dc5707a84f1d889fec616bebff/3cd29/mary_full.webp",
  },
  {
    name: "Dolla",
    art: "https://www.prydwen.gg/static/9cffd71ed16bbf20fc1b3b542a74e6c8/60b4d/dolla_icon.webp",
    hp: 647453,
    atk: 21307,
    def: 3909,
    weapon: "Sniper",
    unitClass: "Support",
    manufacturer: "Tetra",
    element: "Wind",
    squad: "Talentum",
    position: "Burst 2",
    burstCD: "20",
    role: ["Buffer"],
    skill: [
      {
        name: "Normal Attack",
        type: "Charge",
        ammo: 6,
        reload: "2s",
        effect:
          "■ Affects target enemy.##Deals 69.04% ATK as damage.##Charge Time: 1 sec.##Full Charge Damage: 250%.",
      },
      {
        name: "Entrepreneurship",
        active: "10 Seconds",
        effect: "■ Affects all allies.##ATK ▲ 16.16% for 5 sec.",
      },
      {
        name: "Risk Sharing",
        active: "Passive",
        effect:
          "■ Activates when entering Full Burst. Affects all allies.## Effect changes according to the activation time(s). Previous effects triggers repeatedly.##Once: Cooldown of Burst Skill ▼ 1.82 sec.##wice: Cooldown of Burst Skill ▼ 2.2 sec.##Three times: Cooldown of Burst Skill ▼ 2.6 sec.##■ Activates when using Burst Skill. Affects all allies.##Once: ATK ▲ 7.72% for 5sec.##Twice: Critical Rate ▲ 4.21% for 5 sec.##Three times: Critical Damage ▲ 13.22% for 5 sec.",
      },
      {
        name: "R&D Shot",
        effect:
          "■ Affects 1 enemy unit(s) with the highest DEF.##Deals 734.69% of ATK as damage.",
        active: "20 Seconds",
      },
    ],
    rarity: "SSR",
    full: "https://www.prydwen.gg/static/ba2cc4c072f44c5bb47336de0fb66b37/3cd29/dolla_full.webp",
  },
  {
    name: "Rupee",
    art: "https://www.prydwen.gg/static/0e9381f58b59d3c94d460a1791c043c6/60b4d/rupee_icon.webp",
    hp: 583734,
    atk: 25554,
    def: 4164,
    weapon: "Assault Rifle",
    unitClass: "Attacker",
    manufacturer: "Tetra",
    element: "Earth",
    squad: "Talentum",
    position: "Burst 2",
    burstCD: "20",
    role: ["DPS", "Buffer"],
    skill: [
      {
        name: "Normal Attack",
        type: "Normal",
        ammo: 60,
        reload: "1s",
        effect: "■ Affects target enemy.##Deals 13.65% ATK as damage.",
      },
      {
        name: "Prize",
        active: "Passive",
        effect:
          "■ Activates after landing 100 normal attack(s). Affects all Iron type allies.##Increases stack count of buffs by 1.##Critical Rate ▲ 2.24% for 10 sec.",
      },
      {
        name: "Mileage",
        active: "Passive",
        effect:
          "■ Activates after 30 attack(s). Affects self.##Mileage: ATK ▲ 13.8%, stacks up to 5 time(s) and lasts for 15 sec.",
      },
      {
        name: "Single Payment",
        effect:
          '■ Affects all enemies within attack range.##Deals 274.28% of ATK as damage.##■ Activates when "Mileage" is fully stacked. Affects all allies.##ATK ▲ 19.8% for 5 sec',
        active: "20 Seconds",
      },
    ],
    rarity: "SSR",
    full: "https://www.prydwen.gg/static/1706be44f7cabd095dee69c55159828a/3cd29/rupee_full.webp",
  },
  {
    name: "Winter Shopper Rupee",
    art: "https://www.prydwen.gg/static/4957dbc3fee0219e431d602ec7100311/60b4d/xrupee_icon.webp",
    hp: 711171,
    atk: 17059,
    def: 5015,
    weapon: "Assault Rifle",
    unitClass: "Defender",
    manufacturer: "Tetra",
    element: "Electric",
    squad: "Talentum",
    position: "Burst 1",
    burstCD: "20",
    role: ["DPS", "Buffer"],
    skill: [
      {
        name: "Normal Attack",
        type: "Normal",
        ammo: 60,
        reload: "1s",
        effect: "■ Affects target enemy.##Deals 13.65% ATK as damage.",
      },
      {
        name: "Winter Premium",
        active: "Passive",
        effect:
          "■ Activates when the last bullet hits the target. Affects all allies.##DEF ▲ 19.02% for 5 sec.",
      },
      {
        name: "VIP Gift",
        active: "Passive",
        effect:
          "■ Affects all allies. Activates when any ally unit uses Burst Skills.##Shopping: DEF ▲ 1.33%, stacks up to 4 time(s) and lasts for 20 sec.##■ Affects all allies. Activates when the caster reaches max stacks of Shopping at the end of Full Burst.##Burst gauge loading speed ▲ 7.9% for 5 sec.",
      },
      {
        name: "Shopaholic Date",
        effect:
          "■ Affects self.##Attract: Taunt all enemies for 5 sec.##Recover 50.47% of attack damage as HP over 10 sec.##■ Affects all allies.##Reload Speed ▲ 63.17% for 10 sec.##Re-enter Burst Skill Stage 1.",
        active: "20 Seconds",
      },
    ],
    rarity: "SSR",
    full: "https://www.prydwen.gg/static/c4521685d24d6e81d8ceda752335b448/3cd29/xrupee_full.webp",
  },
  {
    name: "Yan",
    art: "https://www.prydwen.gg/static/ccd68d306d780f31e1d123084682e78c/60b4d/yan_icon.webp",
    hp: 647453,
    atk: 21307,
    def: 4485,
    weapon: "Rocket Launcher",
    unitClass: "Support",
    manufacturer: "Tetra",
    element: "Fire",
    squad: "Talentum",
    position: "Burst 1",
    burstCD: "20",
    role: ["Buffer"],
    skill: [
      {
        name: "Normal Attack",
        type: "Charge",
        ammo: 6,
        reload: "2s",
        effect:
          "■ Affects target enemy.##Deals 61.3% ATK as damage.##Charge Time: 1.5 sec.##Full Charge Damage: 350%.",
      },
      {
        name: "Scattershot",
        active: "Passive",
        effect:
          "■ Activates at the beginning of Full Burst. Affects all allies.##Charge damage ▲ 21.55% for 10 sec.",
      },
      {
        name: "The More, The Merrier",
        active: "Passive",
        effect:
          "■ Activates when attacking with Full Charge. Affects all allies.##ATK ▲ 2.77% for 5 sec.##Critical Rate ▲ 1.33% for 5 sec.",
      },
      {
        name: "Fat Cat",
        effect:
          "■ Affects enemies within attack range.##[Target] Deals 348.73% ATK as damage.##[Target] Forcibly move to the center of the attack location for 2 sec.",
        active: "20 Seconds",
      },
    ],
    rarity: "SSR",
    full: "https://www.prydwen.gg/static/83ecf7505ad25f169224a5885a1a70f9/3cd29/yan_full.webp",
  },
  {
    name: "Belorta",
    art: "https://www.prydwen.gg/static/2c3e11d8965e60db68a48979116be85d/60b4d/belorta_icon.webp",
    hp: 252742,
    atk: 12982,
    def: 2075,
    weapon: "Rocket Launcher",
    unitClass: "Attacker",
    manufacturer: "Tetra",
    element: "Electric",
    squad: "The Carronades",
    position: "Burst 2",
    burstCD: "20",
    role: ["DPS"],
    skill: [
      {
        name: "Normal Attack",
        type: "Charge",
        ammo: 6,
        reload: "2s",
        effect:
          "■ Affects target enemy.##Deals 61.3% ATK as damage.##Charge Time: 1.5 sec##Full Charge Damage: 350% of damage.",
      },
      {
        name: "Surprise",
        active: "Passive",
        effect:
          "■ Activates when hitting a target with Full Charge. Affects self.##Explosion Radius ▲ 9.55% for 5 sec.",
      },
      {
        name: "Greed",
        active: "Passive",
        effect:
          "■ Activates when a normal attack hits more than 4 enemies. Affects enemies hit.##[Target] DEF ▼ 3.52% for 5 sec.$$Deals 14.96% of ATK as Additional Damage.",
      },
      {
        name: "Tricky Bomber",
        effect:
          "■ Affects enemies within the attack range.##Deals 192% ATK as damage.##■ Affects all allies.##Charging Speed ▲ 2.82% for 10 sec.",
        active: "20 Seconds",
      },
    ],
    rarity: "SR",
    full: "https://www.prydwen.gg/static/8866cc4c88e1ec9a597cf2b3a82bd00a/3cd29/belorta_full.webp",
  },
  {
    name: "Mica",
    art: "https://www.prydwen.gg/static/7a879aa0592ed4069531141b3966cd42/60b4d/mica_icon.webp",
    hp: 280314,
    atk: 10824,
    def: 2286,
    weapon: "Rocket Launcher",
    unitClass: "Support",
    manufacturer: "Tetra",
    element: "Electric",
    squad: "The Carronades",
    position: "Burst 1",
    burstCD: "20",
    role: ["Debuffer"],
    skill: [
      {
        name: "Normal Attack",
        type: "Charge",
        ammo: 6,
        reload: "2s",
        effect:
          "■ Affects target enemy.##Deals 61.3% ATK as damage.##Charge Time: 1 sec.##Full Charge Damage: 250% of damage.",
      },
      {
        name: "Surprise",
        active: "Passive",
        effect:
          "■ Activates when attacked 20 time(s). Affects self.## DEF ▲ 39.18% for 10 sec.",
      },
      {
        name: "Greed",
        active: "Passive",
        effect:
          "■ Affects 2 allies with the highest ATK.##Max Ammunition Capacity ▲ 2 round(s) for 10 sec.##DEF ▲ 19.89% for 10 sec..",
      },
      {
        name: "Tricky Bomber",
        effect:
          "■ Affects all enemies.##Deals 152.22% of ATK as damage.##DEF ▼ 13.32% for 5 sec.",
        active: "20 Seconds",
      },
    ],
    rarity: "SR",
    full: "https://www.prydwen.gg/static/71a458c556fbe9d390a78c8b6dd491fd/3cd29/mica_full.webp",
  },
  {
    name: "Privaty",
    art: "https://www.prydwen.gg/static/ccf228c26b60cd74e6f8bce05c3ddcf8/60b4d/privaty_icon.webp",
    hp: 583734,
    atk: 25554,
    def: 4164,
    weapon: "Assault Rifle",
    unitClass: "Attacker",
    manufacturer: "Elysion",
    element: "Water",
    squad: "Triangle",
    position: "Burst 3",
    burstCD: "40",
    role: ["DPS", "Buffer"],
    skill: [
      {
        name: "Normal Attack",
        type: "Normal",
        ammo: 60,
        reload: "1s",
        effect: "■ Affects target enemy.##Deals 13.65% ATK as damage.",
      },
      {
        name: "Ex Magazine",
        active: "Passive",
        effect:
          "■ Affects all allies. Cast when entering Full Burst.##ATK ▲ 23.61% for 10 sec.##Reloading Speed ▲ 51.16% for 10 sec.##Max Ammunition Capacity ▼ 50.66% for 10 sec.",
      },
      {
        name: "LD Assault",
        active: "Passive",
        effect:
          "■ Activates when the last bullet hits the target. Affects the target.##[Target] Deals 85.79% of ATK as Additional Damage.##■ Affects the enemy hit by the last round of ammunition if they are Stunned.##[Target] Deals 1089% of ATK as Additional Damage.",
      },
      {
        name: "AK Missile",
        effect:
          "■ Affects all enemies##Deals 457.87% of ATK as damage.##Stuns for 3 sec.",
        active: "40 Seconds",
      },
    ],
    rarity: "SSR",
    full: "https://www.prydwen.gg/static/039fa12791fd1c81ff6699ec36f3eb27/3cd29/privaty_full.webp",
  },
  {
    name: "Admi",
    art: "https://www.prydwen.gg/static/066da55baf64a2c7c11a3958c6b5d193/60b4d/admi_icon.webp",
    hp: 647453,
    atk: 21307,
    def: 3909,
    weapon: "Sniper",
    unitClass: "Support",
    manufacturer: "Missilis",
    element: "Wind",
    squad: "Triangle",
    position: "Burst 2",
    burstCD: "20",
    role: ["Buffer"],
    skill: [
      {
        name: "Normal Attack",
        type: "Charge",
        ammo: 6,
        reload: "1.87s",
        effect:
          "■ Affects target enemy.##Deals 67.37% of ATK as damage.##Charge Time: 1 sec.##Full Charge Damage: 250% of damage.",
      },
      {
        name: "Cheering Hand",
        active: "Passive",
        effect:
          "■ Activates when attacked 20 time(s). Affects all allies.##Charge Damage ▲ 9.59% for 20 sec.",
      },
      {
        name: "Kitten's Breath",
        active: "20 seconds",
        effect:
          "■ Affects 2 allies with the highest ATK.##Damage Taken ▼ 28.65% for 10 sec.",
      },
      {
        name: "Love Returned",
        effect:
          "■ Affects all allies.##Reloading Speed ▲ 50.91% for 10 sec.##Critical Damage ▲ 28.34% for 10 sec.",
        active: "20 Seconds",
      },
    ],
    rarity: "SSR",
    full: "https://www.prydwen.gg/static/8b390b18f7e9d5afae8cd7bfd28ac00d/3cd29/admi_full.webp",
  },
  {
    name: "Yulha",
    art: "https://www.prydwen.gg/static/93bc2b0c26e88b113d089c29029cf55a/60b4d/yulha_icon.webp",
    hp: 583374,
    atk: 25554,
    def: 3552,
    weapon: "Sniper",
    unitClass: "Support",
    manufacturer: "Tetra",
    element: "Fire",
    squad: "Triangle",
    position: "Support 3",
    burstCD: "40",
    role: ["Buffer"],
    skill: [
      {
        name: "Normal Attack",
        type: "Charge",
        ammo: 6,
        reload: "1.87s",
        effect:
          "■ Affects target enemy.##Deals 68.23% ATK as damage.##Charge Time: 1 sec.##Full Charge Damage: 250% of damage.",
      },
      {
        name: "Tough Leadership",
        active: "Passive",
        effect:
          "■ Activates when attacked 30 times. Affects self.##Calm: Critical Rate ▲ 24.53% for 20 sec.",
      },
      {
        name: "The Weakener",
        active: "Passive",
        effect:
          "■ Affects 5 allies with the lowest HP.##ATK ▲ 90.75% for 5 sec.##Shares damage taken for 10 sec.",
      },
      {
        name: "Busy Bee",
        effect:
          "■ Affects all enemies.##Deals 457.87% of ATK as damage.##■ Affects the same targets when under Calm status.##Deals 457.87% of ATK as damage.",
        active: "40 Seconds",
      },
    ],
    rarity: "SSR",
    full: "https://www.prydwen.gg/static/48f421971bb6e38adbe39ca1a7127b5f/3cd29/yulha_full.webp",
  },
  {
    name: "Alice",
    art: "https://www.prydwen.gg/static/94d01c6fd76e93454b34b6f0b134ba5d/60b4d/alice_icon.webp",
    hp: 583734,
    atk: 25554,
    def: 3552,
    weapon: "Sniper",
    unitClass: "Attacker",
    manufacturer: "Tetra",
    element: "Fire",
    squad: "Triangle",
    position: "support 3",
    burstCD: "40",
    role: ["DPS", "Buffer"],
    skill: [
      {
        name: "Normal Attack",
        type: "Charge",
        ammo: 6,
        reload: "2s",
        effect:
          "■ Affects target enemy.##Deals 69.04% ATK as damage.##Charge Time: 1.5 sec.##Full Charge Damage: 350%.",
      },
      {
        name: "Energizing Carrot",
        active: "Passive",
        effect:
          "■ Activates when entering Full Burst. Affects 2 ally units with the highest ATK.##Charge Speed ▲ 11.67% for 10 sec.##Charge Damage ▲ 7% for 10 sec.",
      },
      {
        name: "Healthy Carrot",
        active: "Passive",
        effect:
          "■ Affects self. Activates when above 80% HP.##Gains continuous Pierce.##■ Affects self. Activates when HP falls below 80%.##Continuously recover HP by 8.12% of attack damage.",
      },
      {
        name: "Wonderland",
        effect:
          "■ Affects self.##Charging Speed ▲ 80.15% for 10 sec.##ATK ▲ 55.12% for 10 sec.",
        active: "40 Seconds",
      },
    ],
    rarity: "SSR",
    full: "https://www.prydwen.gg/static/a1a021812dd058fc1b2bb29375a45af8/3cd29/alice_full.webp",
  },
  {
    name: "Neve",
    art: "https://www.prydwen.gg/static/acd5bf7574a448024d18d8befd09f102/60b4d/neve_icon.webp",
    hp: 252242,
    atk: 12982,
    def: 2045,
    weapon: "Shotgun",
    unitClass: "Attacker",
    manufacturer: "Tetra",
    element: "Water",
    squad: "Triangle",
    position: "Burst 3",
    burstCD: "40",
    role: ["DPS"],
    skill: [
      {
        name: "Normal Attack",
        type: "Normal",
        ammo: 6,
        reload: "2s",
        effect: "■ Affects target enemy.##Deals 214.3% ATK as damage.",
      },
      {
        name: "Bear Power",
        active: "10 seconds",
        effect:
          "■ Affects 1 enemy unit(s) with the lowest HP.##Deals 145.45% of ATK as damage.",
      },
      {
        name: "Hibernation",
        active: "Passive",
        effect:
          "■ Activates when entering Full Burst. Affects self.##Deals for Pierce for 2 round(s).##ATK ▲ 124.8% for 2 round(s).",
      },
      {
        name: "Roar",
        effect:
          "■ Affects self.##Critical Rate ▲ 31.95% for 20 sec.##Hit Rate ▲ 22.04% for 20 sec.",
        active: "40 Seconds",
      },
    ],
    rarity: "SSR",
    full: "https://www.prydwen.gg/static/4fa7dc010aea028dc881afadc27dbafc/3cd29/neve_full.webp",
  },
  {
    name: "Ludmilla",
    art: "https://www.prydwen.gg/static/c5b9e181547151fd7038cd83ba35f3fd/60b4d/ludmilla_icon.webp",
    hp: 711171,
    atk: 17059,
    def: 4364,
    weapon: "SMG",
    unitClass: "Attacker",
    manufacturer: "Tetra",
    element: "Water",
    squad: "Triangle",
    position: "Burst 1",
    burstCD: "20",
    role: ["Debuffer", "Tank"],
    skill: [
      {
        name: "Normal Attack",
        type: "Normal",
        ammo: 120,
        reload: "2.76s",
        effect: "■ Affects target enemy.##Deals 10.32% ATK as damage.",
      },
      {
        name: "Tough Leadership",
        active: "Passive",
        effect:
          "■ Activates when the last bullet hits the target. Affects the target.##[Target] DEF ▼ 8.4% for 10 sec.##[Target] ATK ▼ 8.4% for 10 sec.",
      },
      {
        name: "The Weakener",
        active: "Passive",
        effect:
          "■ Activates at the beginning of Full Burst. Affects all enemies.##Taunt continuously for 15.09 sec.##■ Activates at the beginning of Full Burst. Affects self.##Sustained damage ▼ 57.86% for 15 sec.",
      },
      {
        name: "Busy Bee",
        effect:
          "■ Affects 10 enemies with the highest ATK.##[Target] deals 163.1% of ATK as damage.##■ Affects all allies. Cast when above 50% HP.##DEF ▲ 12.93% for 10 sec.",
        active: "20 Seconds",
      },
    ],
    rarity: "SSR",
    full: "https://www.prydwen.gg/static/79893ccee09b2444bbfbd471a2b23e48/3cd29/ludmilla_full.webp",
  },
  {
    name: "Yuni",
    art: "https://www.prydwen.gg/static/b41b08676389e7e30afde35da7193eb8/60b4d/yuni_icon.webp",
    hp: 711171,
    atk: 17059,
    def: 4900,
    weapon: "Rocket Launcher",
    unitClass: "Defender",
    manufacturer: "Missilis",
    element: "Fire",
    squad: "Wardress",
    position: "Burst 2",
    burstCD: "20",
    role: ["Buffer", "Healer"],
    skill: [
      {
        name: "Normal Attack",
        type: "Charge",
        ammo: 6,
        reload: "2s",
        effect:
          "■ Affects target enemy.##Deals 61.3% ATK as damage.##Charge Time: 1.5 sec.##Full Charge Damage: 350%.",
      },
      {
        name: "DMNS",
        active: "Passive",
        effect:
          "■ Affects all allies. Activates when entering Full Burst.##Charging speed ▲ 8.97% for 10 sec.",
      },
      {
        name: "SDS",
        active: "Passive",
        effect:
          "■ Affects all allies. Cast when attacking during Full Charge.##DEF ▲ 2.77% for 10 sec.##Restores 2.77% of attack damage as HP for 10 sec.##Max Ammunition Capacity ▲ 1 rounds for 5 sec.",
      },
      {
        name: "BDG",
        effect:
          "■ Affects enemies within attack range.##[Target] Deals 348.73% of ATK as damage.##[Target] Immobilizes the target(s) for 5 sec.",
        active: "20 Seconds",
      },
    ],
    rarity: "SSR",
    full: "https://www.prydwen.gg/static/9ffc86d0383505644246bc99abc807e6/3cd29/yuni_full.webp",
  },
  {
    name: "Mihara",
    art: "https://www.prydwen.gg/static/4a87cee6c31ef9a5d0508212831cc340/60b4d/mihara_icon.webp",
    hp: 252742,
    atk: 12982,
    def: 2122,
    weapon: "Assault Rifle",
    unitClass: "Defender",
    manufacturer: "Missilis",
    element: "Water",
    squad: "Wardress",
    position: "Burst 3",
    burstCD: "40",
    role: ["DPS"],
    skill: [
      {
        name: "Normal Attack",
        type: "Normal",
        ammo: 60,
        reload: "1.67s",
        effect: "■ Affects target enemy.##Deals 15.07% ATK as damage.",
      },
      {
        name: "Endure",
        active: "Passive",
        effect:
          "■ Activates when the last bullet hits the target. Affects self.##Critical Damage ▲ 18.7% for 10 sec.",
      },
      {
        name: "Highway to Hell 1",
        active: "15 Seconds",
        effect:
          "■ Activates when using Burst Skill. Affects self.## Highway to Hell 1: ATK ▲ 15.56% for 45 sec.## ■ Activates when using Burst Skill during Highway to Hell 1. Affects self.##Highway to Hell 2: Critical Rate ▲ 11.28% for 45 sec.",
      },
      {
        name: "Sense Sharing",
        effect:
          "■ Affects all allies.##Full Burst Time ▼ 5 sec.##■ Affects all enemies.##Deals 399.6% of ATK as damage.##■ Activates during Highway to Hell 2. Affects all enemies.##Deals 266.4% of ATK as additional damage.",
        active: "40 Seconds",
      },
    ],
    rarity: "SR",
    full: "https://www.prydwen.gg/static/45719a19a5cc983f95dc6f518d4e3af8/3cd29/mihara_full.webp",
  },
  {
    name: "Modernia",
    art: "https://www.prydwen.gg/static/802bf3134fd935eddaddc33ac5017d41/60b4d/modernia_icon.webp",
    hp: 711171,
    atk: 17059,
    def: 4364,
    weapon: "Machine Gun",
    unitClass: "Attacker",
    manufacturer: "Missillis",
    element: "Fire",
    squad: "The Heretics",
    position: "Burst 3",
    burstCD: "40",
    role: ["Buffer", "Debuffer"],
    skill: [
      {
        name: "Normal Attack",
        type: "Normal",
        ammo: 300,
        reload: "2.3s",
        effect: "■ Affects target enemy.##Deals 7.71% ATK as damage.",
      },
      {
        name: "High-Speed Evolution",
        active: "Passive",
        effect:
          "■ Activates when normal attack hits. Affects the target(s).##Deals 3.05% of ATK as additional damage.##■ Activates when normal attack hits 200 time(s). Affects self.##Critical Damage ▲ 14.25%, stacks up to 5 time(s) and lasts for 10 sec.##Max Ammunition Capacity ▼ 5.04%, stacks up to 5 time(s) and lasts for 10 sec.",
      },
      {
        name: "Giant Leap",
        active: "Passive",
        effect:
          "■ Affects all allies. Activates when entering Full Burst.##Hit Rate ▲ 8.56% for 15 sec.##■ Affects self. Activates when normal attack hits 200 time(s) during increasing Hit Rate status.##ATK ▲ 29.38% for 10 sec.",
      },
      {
        name: "New World",
        effect:
          "■ Affects all allies.##Full Burst Time ▲ 5 sec.##■ Affects self.##Grants unlimited ammunition for 15 sec.##Destroy Mode:##Extending the line of sight and auto-aim at all enemies within fire range. Stage enemy will be recognized as a single enemy regardless of its interruption parts.##Deals 2.24% of ATK as damage for 15 sec.",
        active: "40 Seconds",
      },
    ],
    rarity: "SSR",
    full: "https://www.prydwen.gg/static/7ce68d265b64365a600be6766964d672/3cd29/modernia_full.webp",
  },
  {
    name: "Guilty",
    art: "https://www.prydwen.gg/static/6dba75e041243feee1c240deee75c559/60b4d/guilty_icon.webp",
    hp: 252742,
    atk: 12982,
    def: 2122,
    weapon: "Shotgun",
    unitClass: "Attacker",
    manufacturer: "Missilis",
    element: "Wind",
    squad: "Real Kindness",
    position: "Burst 2",
    burstCD: "20",
    role: ["Buffer", "Debuffer"],
    skill: [
      {
        name: "Normal Attack",
        type: "Normal",
        ammo: 9,
        reload: "2.67s",
        effect: "■ Affects target enemy.##Deals 231.4% ATK as damage.",
      },
      {
        name: "Mind If I Borrow This?",
        active: "Passive",
        effect:
          "■ Activates after landing 6 normal attack(s). Affects self.##Mind If I Borrow This?: Duplicate 8.81% ATK of ally with the highest ATK, stacks up to 5 time(s) and lasts for 10 sec.",
      },
      {
        name: "Time to play",
        active: "15 Seconds",
        effect:
          "■ Activates after landing 12 normal attack(s). Affects all Wind type allies.##Increases stack count of buffs by 1.##ATK ▲ 4.13% for 10 sec.",
      },
      {
        name: "Gotcha",
        effect:
          "■ Affects 1 enemy unit(s) with the highest DEF.##Deals 284.32% of ATK as damage.##■ Affects the same target(s) when Mind If I Borrow This? is fully stacked.##DEF ▼ 20.25% for 5 sec.##Deals 277.71% of ATK as additional damage.",
        active: "20 Seconds",
      },
    ],
    rarity: "SSR",
    full: "https://www.prydwen.gg/static/9e4370d39355c5027c1f40cedaae5771/3cd29/guilty_full.webp",
  },
  {
    name: "Sin",
    art: "https://www.prydwen.gg/static/7ed8d6828b087116701de42d983f57e3/60b4d/sin_icon.webp",
    hp: 252742,
    atk: 12982,
    def: 2122,
    weapon: "Assault Rifle",
    unitClass: "Defender",
    manufacturer: "Missilis",
    element: "Electric",
    squad: "Real Kindness",
    position: "Burst 2",
    burstCD: "20",
    role: ["Taunter", "Debuffer"],
    skill: [
      {
        name: "Normal Attack",
        type: "Normal",
        ammo: 60,
        reload: "1s",
        effect: "■ Affects target enemy.##Deals 13.65% ATK as damage.",
      },
      {
        name: "Full Stop",
        active: "Passive",
        effect:
          "■ Activates when the last round of ammunition hits. Affects self.##Duplicate 15.03% HP of ally with the highest HP, lasts for 5 sec.##Attract: Taunt all enemies for 5 sec.",
      },
      {
        name: "Hurry Up",
        active: "Passive",
        effect:
          "■ Activates after the Full Burst ends. Affects self.##Burst gauge loading speed ▲ 16.17% for 5 sec.##■ Activates when using Burst Skill. Affects self.##Effect changes according to the number of activation time(s). Previous effects trigger repeatedly.##Once: Recovers 15.3% of ATK damage as HP, lasts for 5 sec.##Twice: HP Potency ▲ 51% for 5 sec.##Thrice: DEF ▲ 43.2% for 5 sec",
      },
      {
        name: "Words can Kill",
        effect:
          "■ Activates when enemy unit(s) (excluding Nikkes) are more than 4. Affects all enemies.##Damage Taken ▲ 12.23% for 5 sec.##■ Affects enemies within attack range.##Deals 176.32% of ATK as damage.",
        active: "20 Seconds",
      },
    ],
    rarity: "SSR",
    full: "https://www.prydwen.gg/static/50b70eef5978c1aaf69ecefedde21514/3cd29/sin_full.webp",
  },
  {
    name: "Quency",
    art: "https://www.prydwen.gg/static/fcda742bb9971ce894deb5aba6d4ec8b/60b4d/quency_icon.webp",
    hp: 252742,
    atk: 12982,
    def: 2122,
    weapon: "SMG",
    unitClass: "Supporter",
    manufacturer: "Missilis",
    element: "Electric",
    squad: "Real Kindness",
    position: "Burst 2",
    burstCD: "20",
    role: ["Buffer"],
    skill: [
      {
        name: "Normal Attack",
        type: "Normal",
        ammo: 120,
        reload: "1.67s",
        effect: "■ Affects target enemy.##Deals 4.47% ATK as damage.",
      },
      {
        name: "New Route",
        active: "Passive",
        effect:
          "■ Activates after 60 normal attack(s). Affects self.##Duplicate 12.42% HP of ally with the highest HP, lasts for 10 sec.",
      },
      {
        name: "Hidden Accomplice",
        active: "8 Seconds",
        effect:
          "■ Affects 2 ally unit(s) with the highest ATK.##ATK ▲ 16.11% for 5 sec.",
      },
      {
        name: "The Great Escape",
        effect:
          "■ Affects 2 ally unit(s) with the highest ATK.##Max HP ▲ 43.87% for 5 sec.##Critical Damage ▲ 29.9% for 10 sec.",
        active: "20 Seconds",
      },
    ],
    rarity: "SSR",
    full: "https://www.prydwen.gg/static/e388f0d9ebe92934d426e7f6524000e7/3cd29/quency_full.webp",
  },
  {
    name: "Cocoa",
    art: "https://www.prydwen.gg/static/249325af661515f4234e6a046fe8a064/60b4d/cocoa_icon.webp",
    hp: 252742,
    atk: 12982,
    def: 2122,
    weapon: "Sniper Rifle",
    unitClass: "Supporter",
    manufacturer: "Tetra",
    element: "Fire",
    squad: "Maid For You",
    position: "Burst 1",
    burstCD: "20",
    role: ["Cleanser", "Debuffer"],
    skill: [
      {
        name: "Normal Attack",
        type: "Charge",
        ammo: 6,
        reload: "2s",
        effect:
          "■ Affects target enemy.##Deals 69.04% ATK as damage.##Charge Time: 1 sec.##Full Charge Damage: 250%.",
      },
      {
        name: "Professional Origami",
        active: "15 Seconds",
        effect:
          "■ Affects all allies.##Recovers 17.76% of cover's Hp as Hp.##■ Affects 2 ally unit(s) with debuff randomly.##Dispels 1 debuff(s).",
      },
      {
        name: "Professional Tomato Sauce",
        active: "Passive",
        effect:
          "■ Activates when attacking with Full Charge. Affects self.##Professional Tomato Souce: Sustained damage ▼ 4.37%, stacks up to 15 time(s) and lasts for 5 sec.",
      },
      {
        name: "Professional Maid Leader",
        effect:
          "■ Affects all allies.##Dispels 1 debuff(s).##■ Activates when Professional Tomato Souce is fully stacked. Affects all enemies.##ATK ▼ 13.59% for 10 sec.",
        active: "20 Seconds",
      },
    ],
    rarity: "SSR",
    full: "https://www.prydwen.gg/static/adfc6eaa8190bd524a15ffa01df4deb2/3cd29/cocoa_full.webp",
  },
  {
    name: "Soda",
    art: "https://www.prydwen.gg/static/268a9578c7b7c5e9e705bcbd0a54b559/60b4d/soda_icon.webp",
    hp: 252742,
    atk: 12982,
    def: 2122,
    weapon: "Machine Gun",
    unitClass: "Supporter",
    manufacturer: "Tetra",
    element: "Fire",
    squad: "Maid For You",
    position: "Burst 1",
    burstCD: "20",
    role: ["Buffer", "Crowd Controller", "Healer"],
    skill: [
      {
        name: "Normal Attack",
        type: "Normal",
        ammo: 300,
        reload: "2.5s",
        effect: "Deals 5.57% of ATK as damage.",
      },
      {
        name: "Spotless Chair",
        active: "Passive",
        effect:
          "■ Activates after 180 normal attack(s). Affects self.##Maid Spirit: Increase Max HP by 13%, stacks up to 5 time(s) and lasts for 10 sec.",
      },
      {
        name: "Squeaky Clean Floor",
        active: "12 Seconds",
        effect:
          "■ Affects all allies.##Restore HP equal to 3.23% of the caster's Max HP.##■ Activates when Maid Spirit is fully stacked. Affects all allies.##Restore HP equal to 12.71% of the caster's Max HP.",
      },
      {
        name: "Spring Cleaning",
        effect:
          "■ Affects 2 enemy units randomly.##Deals 321.8% of ATK as damage.##Stun for 1 sec.##■ Affects all allies with Fire element.##Stack count of buffs ▲ 1.",
        active: "20 Seconds",
      },
    ],
    rarity: "SSR",
    full: "https://www.prydwen.gg/static/fdca25d3e1f93e976c376a547e9e63ad/3cd29/soda_full.webp",
  },
  {
    name: "Makima",
    art: "https://www.prydwen.gg/static/33e5da7490ecbf0f21f4762b9bd381ed/60b4d/makima_icon.webp",
    hp: 252742,
    atk: 12982,
    def: 2122,
    weapon: "SMG",
    unitClass: "Defender",
    manufacturer: "Abnormal",
    element: "Water",
    squad: "Devil Hunters",
    position: "Burst 2",
    burstCD: "20",
    role: ["Buffer", "Taunter"],
    skill: [
      {
        name: "Normal Attack",
        type: "Normal",
        ammo: 6,
        reload: "1.5s",
        effect: "■ Affects target enemy.##Deals 8.73% ATK as damage.",
      },
      {
        name: "Show Me What You Got",
        active: "Passive",
        effect:
          "■ Activates when attacked 20 time(s). Affects all allies.##Reloading Speed ▲ 36.96% for 10 sec.##DEF ▲ 14.78% for 10 sec.",
      },
      {
        name: "Seems I've Been Noticed",
        active: "Passive",
        effect:
          "■ Activates after landing 120 normal attack(s). Affects self.##Attract: Taunt all enemies for 3 sec.##■ Activates when taking lethal damage. Affects self.##Gains indomitability for 7 sec. Activates 1 time(s) per battle.##Cooldown of Burst Skill ▼ 11.58 sec.",
      },
      {
        name: "Can You Be Quiet?",
        effect:
          "■ Affects self.##Gain Pierce for 10 sec.##Recover 34.02% of attack damage as HP over 10 sec.##■ Activates during indomitability. Affects self.##HP Potency ▲ 41.02% for 10 sec..",
        active: "20 Seconds",
      },
    ],
    rarity: "SSR",
    full: "https://www.prydwen.gg/static/fdca25d3e1f93e976c376a547e9e63ad/3cd29/soda_full.webp",
  },
  {
    name: "Power",
    art: "https://www.prydwen.gg/static/8cc51a7523d9ce2648ca901dafcc38f9/60b4d/power_icon.webp",
    hp: 252742,
    atk: 12982,
    def: 2122,
    weapon: "Rocket Launcher",
    unitClass: "Attacker",
    manufacturer: "Abnormal",
    element: "Fire",
    squad: "Devil Hunters",
    position: "Burst 3",
    burstCD: "40",
    role: ["Buffer"],
    skill: [
      {
        name: "Normal Attack",
        type: "Charge",
        ammo: 6,
        reload: "1.5s",
        effect:
          "■ Affects target enemy.##Deals 61.3% ATK as damage.##Charge Time: 1 sec.##Full Charge Damage: 250% of damage.",
      },
      {
        name: "Blood Fiend",
        active: "Passive",
        effect:
          "■ Activates at the end of Full Burst. Affects all Attacker allies.##Critical Rate of normal attack ▲ 5.77% for 10 sec.##Constantly recovers 1.53% of caster's Maximum HP every 1 sec for 10 sec.",
      },
      {
        name: "Blood Explosion",
        active: "Passive",
        effect:
          "■ Activates when a Defender ally's HP falls below 50%. Affects the target Defender ally.##Invincible for 5 sec. Activates 2 time(s) per battle.##Recovers 23.26% of caster's Max HP. Activates 2 time(s) per battle.",
      },
      {
        name: "Blood Hammer",
        effect:
          "■ Affects 1 enemy unit(s) with the highest ATK.##Deals 1584% of ATK as damage.##■ Affects the same target(s) when Blood Fiend is fully stacked.##Deals 1584% of ATK as additional damage.",
        active: "40 Seconds",
      },
    ],
    rarity: "SSR",
    full: "https://www.prydwen.gg/static/fdca25d3e1f93e976c376a547e9e63ad/3cd29/soda_full.webp",
  },
  {
    name: "Biscuit",
    art: "https://www.prydwen.gg/static/f542ff8fff2df4b171b3fb3ef75ffb85/60b4d/biscuit_icon.webp",
    hp: 252742,
    atk: 12982,
    def: 2122,
    weapon: "Rocket Launcher",
    unitClass: "Supporter",
    manufacturer: "Abnormal",
    element: "Electric",
    squad: "Happy Zoo",
    position: "Burst 2",
    burstCD: "40",
    role: ["Buffer", "Healer"],
    skill: [
      {
        name: "Normal Attack",
        type: "Charge",
        ammo: 6,
        reload: "2s",
        effect:
          "■ Affects target enemy.##Deals 61.3% ATK as damage.##Charge Time: 1 sec.##Full Charge Damage: 250% of damage.",
      },
      {
        name: "Happy Puppy",
        active: "Passive",
        effect:
          "■ Activates at the end of Full Burst. Affects all Attacker allies.##Critical Rate of normal attack ▲ 5.77% for 10 sec.##Constantly recovers 1.53% of caster's Maximum HP every 1 sec for 10 sec.",
      },
      {
        name: "Tug of War",
        active: "Passive",
        effect:
          "■ Activates when a Defender ally's HP falls below 50%. Affects the target Defender ally.##Invincible for 5 sec. Activates 2 time(s) per battle.##Recovers 23.26% of caster's Max HP. Activates 2 time(s) per battle.",
      },
      {
        name: "Walk Training",
        effect:
          "■ Affects 2 ally unit(s) whose cover has been destroyed.##Rebuild cover with 93.6% HP.##■ Affects all Supporter allies.##ATK ▲ 43.08% for 10 sec.##Restores 55.44% of attack damage as HP for 10 sec.",
        active: "40 Seconds",
      },
    ],
    rarity: "SSR",
    full: "https://www.prydwen.gg/static/2a35757af51209cf7627c9cb0869fa0d/3cd29/biscuit_full.webp",
  },
  {
    name: "Nihilister",
    art: "https://www.prydwen.gg/static/6d60ad78690523f7d6b1169b7496259a/60b4d/nihilister_icon.webp",
    hp: 252742,
    atk: 12982,
    def: 2122,
    weapon: "Sniper Rifle",
    unitClass: "Attacker",
    manufacturer: "Pilgrim",
    element: "Fire",
    squad: "The Heretics",
    position: "Burst 2",
    burstCD: "40",
    role: ["Buffer"],
    skill: [
      {
        name: "Normal Attack",
        type: "Charge",
        ammo: 6,
        reload: "2s",
        effect:
          "■ Affects target enemy.## Deals 69.04% of ATK as damage.##Charge Time: 1 sec.##Full Charge Damage: 250% of damage.",
      },
      {
        name: "Burning Shot",
        active: "Passive",
        effect:
          "■ Activates when attacking with Full Charge. Affects self.##Gain Pierce for 1 round(s).##Piercing Radius ▲ 50% for 1 round(s).##■ Activates when a normal attack hits 2 or more enemies concurrently. Affects all enemies hit.##Deals 50.33% of ATK as additional damage.",
      },
      {
        name: "Megiddo Flame",
        active: "10 Seconds",
        effect:
          "■ Affects enemy unit(s) within attack range.##Deals 112.64% of ATK as damage.",
      },
      {
        name: "Burning Scourge",
        effect:
          "■ Affects enemies within the attack range.##Deals 158.59% of ATK as damage.##Burn: Deals 13.19% of Atk as sustained damage every 1 sec for 10 sec.##■ Affects self.##Max Ammunition Capacity ▲ 6 round(s) for 15 sec.",
        active: "20 Seconds",
      },
    ],
    rarity: "SSR",
    full: "https://www.prydwen.gg/static/851bf401951d1378212ab1785b9e1fb6/3cd29/nihilister_full.webp",
  },
  {
    name: "Sakura",
    art: "https://www.prydwen.gg/static/7e9d48eb9f3fcf850c0e760b055439f1/60b4d/sakura_icon.webp",
    hp: 252742,
    atk: 12982,
    def: 2122,
    weapon: "Sniper Rifle",
    unitClass: "Supporter",
    manufacturer: "Tetra",
    element: "Fire",
    squad: "Underworld Queen",
    position: "Burst 1",
    burstCD: "40",
    role: ["Buffer"],
    skill: [
      {
        name: "Normal Attack",
        type: "Charge",
        ammo: 6,
        reload: "1.67s",
        effect:
          "■ Affects target enemy.##Deals 67% of ATK as damage.## Charge Time: 1 sec.##Full Charge Damage: 250% of damage.",
      },
      {
        name: "Cherry Blossom Tea",
        active: "Passive",
        effect:
          "■ Activates after 3 normal attack(s). Affects all allies.##Cherry Blossom Tea: 8.15% of DEF, stacks up to 10 time(s) and lasts for 15 sec.",
      },
      {
        name: "Falling Petals",
        active: "Passive",
        effect:
          "■ Affects all allies.##When attacking an enemy projectile, damage to that projectile ▲ 7.74% permanently.##■ Activates when entering Full Burst. Affects all allies.##Burst Skill cooldown ▼ 4.84 sec.",
      },
      {
        name: "Resplendent Cherry Blossom",
        effect:
          "■ Affects all allies.##Damage dealt by Wind code enemies ▼ 90.72%, lasts for 30 sec. Activates 1 time(s) per battle.##ATK ▲ 23.76% of caster's ATK, lasts for 10 sec.##■ Affects all allies when Cherry Blossom Tea is fully stacked.##Damage to interruption part ▲ 23.54%, lasts for 30 sec.",
        active: "40 Seconds",
      },
    ],
    rarity: "SSR",
    full: "https://www.prydwen.gg/static/9d04a3affe6a5e5d638a9cc4cc789af4/3cd29/sakura_full.webp",
  },
  {
    name: "D",
    art: "https://www.prydwen.gg/static/d4eb1bee42eda75df678d2f23931aff0/60b4d/d_icon.webp",
    hp: 252742,
    atk: 12982,
    def: 2122,
    weapon: "SMG",
    unitClass: "Attacker",
    manufacturer: "Elysion",
    element: "Wind",
    squad: "Perilous Siege",
    position: "Burst 3",
    burstCD: "2=40",
    role: ["Buffer"],
    skill: [
      {
        name: "Normal Attack",
        type: "Normal",
        ammo: 120,
        reload: "1.5s",
        effect: "■ Affects target enemy.##Deals 8.73% ATK as damage.",
      },
      {
        name: "Vigorous Waves",
        active: "Passive",
        effect:
          "■ Activates when entering Full Burst. Affects self.##Damage as strong element ▲ 46.93% for 15 sec.##Recovers 3.52% of ATK damage as HP, lasts for 15 sec.##■ Affects self when first activated.##Recovers 16.5% of ATK damage as HP, lasts for 15 sec.",
      },
      {
        name: "Surprise Attack",
        active: "Passive",
        effect:
          "■ Activates when the target appears. Affects all allies.##Charges Burst Gauge by 98.56%. Activates 1 time(s) per battle.##Become immune to Stun for 36.95 sec.##■ Activates when the target appears. Affects self.##Damage as strong element ▲ 91.09%, lasts for 15 sec.",
      },
      {
        name: "Chastisement",
        effect:
          "■ Affects all enemies.##Deals 426.24% of ATK as damage.##■ Affects all Attacker allies.##When attacking a certain part of an enemy, damage dealt to the part ▲ 42.38% for 15 sec.##■ Affects all allies when gaining immunity to Stun.##Full Burst Time ▲ 5.04 sec.",
        active: "40 Seconds",
      },
    ],
    rarity: "SSR",
    full: "https://www.prydwen.gg/static/53179c477d6102f3fb04ede83ee90646/3cd29/d_full.webp",
  },
  {
    name: "Rei",
    art: "https://www.prydwen.gg/static/228b9936de297c9c1b26c27bb80b59a7/60b4d/rei_icon-min.webp",
    hp: 252742,
    atk: 12982,
    def: 2122,
    weapon: "SMG",
    unitClass: "Defender",
    manufacturer: "Tetra",
    element: "Water",
    squad: "School Circle",
    position: "Burst 1",
    burstCD: "20",
    role: ["Taunter"],
    skill: [
      {
        name: "Normal Attack",
        type: "Normal",
        ammo: 120,
        reload: "1.5s",
        effect: "■ Affects target enemy.##Deals 63% ATK as damage.",
      },
      {
        name: "Senpai's Support",
        active: "Passive",
        effect:
          "■ Activates after 60 normal attack(s). Affects all allies.##Charges Burst Gauge by 2.47%##■ If the decoy is present, affects the decoy.##Restore HP equal to 2.1% of the caster's Max HP.",
      },
      {
        name: "Fighting Spirit",
        effect:
          "■ Activates at the start of the battle. Affects self.##Decoy: Avatar with 96% of caster's Max HP for 240 sec.",
        active: "Passive",
      },

      {
        name: "Model Upperclassman",
        active: "20 Seconds",
        effect:
          "■ Affects Self.##Attracts for 5 sec.##Damage Taken ▼ 14.4% for 10 sec.##■ Affects decoy when decoy exists.##Recovers 2.27% of caster's Max HP every 1 sec for 10 sec.",
      },
    ],
    rarity: "SSR",
    full: "https://www.prydwen.gg/static/28a2b4f9c5b9aa8d3956adbb8c30893c/3cd29/rei_full-min.webp",
  },
  {
    name: "Dorthy",
    art: "https://www.prydwen.gg/static/be041027f6859062c24eb6f8aa333840/60b4d/dorothy_icon.webp",
    hp: 252742,
    atk: 12982,
    def: 2122,
    weapon: "Assault Rifle",
    unitClass: "Support",
    manufacturer: "Pilgrim",
    element: "Water",
    squad: "Inherit",
    position: "Burst 1",
    burstCD: "20",
    role: ["Buffer"],
    skill: [
      {
        name: "Normal Attack",
        type: "Normal",
        ammo: 60,
        reload: "1.5s",
        effect: "■ Affects target enemy.##Deals 63% ATK as damage.",
      },
      {
        name: "Holy Fire",
        active: "Passive",
        effect:
          "■ Activates when firing the last bullet. Affects all allies.##Cooldown of Burst Skill 1.56 sec.##■ Affects when firing the last bullet during Manifestation. Affetcs all allies.##When attacking part of an enemy, damage dealt to that part ▲ 50.68% lasts for 5 sec",
      },
      {
        name: "Baptism",
        effect:
          "■ Affects all enemies##Scorch to Dust: Deals 216% of ATK as distributed damage.",
        active: "20 Seconds",
      },

      {
        name: "Paradise Lost",
        active: "20 Seconds",
        effect:
          "■ Affects Self.##Manifestation: Changes the cooldown of Skill 2 to 2 sec. Lasts for 10 sec.##Gains Pierce for 10 sec.##■ Affects a designated enemy.##Brand: Accumulates total damage dealt to enemies during the duration, and then deals that accumulated damage to all enemies as distributed damage once the duration ends. The maximum accumulated damage is 8900.83% of the caster's ATK. Lasts for 10 sec.",
      },
    ],
    rarity: "SSR",
    full: "https://www.prydwen.gg/static/28a2b4f9c5b9aa8d3956adbb8c30893c/3cd29/rei_full-min.webp",
  },
  {
    name: "Blanc",
    art: "https://www.prydwen.gg/static/bcd85d9bb6f99885bccc933d03991c07/60b4d/blanc_icon.webp",
    hp: 252742,
    atk: 12982,
    def: 2122,
    weapon: "Assault Rifle",
    unitClass: "Defender",
    manufacturer: "Tetra",
    element: "Wind",
    squad: "White Pollux",
    position: "Burst 2",
    burstCD: "20",
    role: ["Buffer"],
    skill: [
      {
        name: "Normal Attack",
        type: "Normal",
        ammo: 60,
        reload: "1s",
        effect: "Affects target enemy.##Deals 13.65% ATK as damage.",
      },
      {
        name: "Lucky Guard",
        active: "Passive",
        effect:
          "■ Activates after landing 120 normal attack(s).##Creates a Shield, equivalent to 11.8% of the caster’s Max HP, which protects all allies from damage. Lasts for 5 sec.",
      },
      {
        name: "Rabbit Twins W",
        effect:
          "■ Activates after Full Burst ends. Affects all allies.##Constantly recovers 3.68% of caster's Max HP every 1 sec for 5 sec##■ Activates when Full Burst ends with an ally from the same squad on the battlefield. Affects self.##Cooldown of Burst Skill ▼ 40.76 sec.",
        active: "Passive",
      },

      {
        name: "Showtime",
        active: "60 Seconds",
        effect:
          "■ Affects all allies.##Constantly recovers 3.84% of caster's Max HP every 1 sec for 8 sec.##■ Affects 1 allies with the lowest HP (except caster).##Gain indomitability for 10 sec.##Max HP ▲ 31.68% for 10 sec.##■ Affects all enemies.##Damage Taken ▲ 39.26% for 10 sec.",
      },
    ],
    rarity: "SSR",
    full: "https://www.prydwen.gg/static/78fdbb6a71c5b62256c61302d18234ad/3cd29/blanc_full.webp",
  },
  {
    name: "Noir",
    art: "https://www.prydwen.gg/static/a6a5886e8a8d3759e7f7935e9dcf1b8d/60b4d/noir_icon.webp",
    hp: 252742,
    atk: 12982,
    def: 2122,
    weapon: "Shotgun",
    unitClass: "Attacker",
    manufacturer: "Tetra",
    element: "Water",
    squad: "777",
    position: "Burst 3",
    burstCD: "20",
    role: ["Buffer"],
    skill: [
      {
        name: "Normal Attack",
        type: "Normal",
        ammo: 9,
        reload: "0.7s",
        effect: "■ Affects target enemy.##Deals 204.6% ATK as damage.",
      },
      {
        name: "Lucky Charm",
        active: "Passive",
        effect:
          "■ Activates when above 70% HP. Affects all allies.##ATK ▲ 14.08%.",
      },
      {
        name: "Rabbit Twins B",
        effect:
          "■ Activates when entering Full Burst. Affects all allies.##Max Ammunition Capacity ▲ 5 round(s) for 10 sec.##Reload 39.88% magazine(s).",
        active: "Passive",
      },

      {
        name: "Finale",
        active: "40 Seconds",
        effect:
          "■ Affects all enemies.##Deals 351.64% of ATK as damage.##■ Affects all allies with a Shotgun.##Hit Rate ▲ 13.93% for 10 sec.##Damage to interruption part ▲ 23.23% for 10 sec.##■ Activates when Full Burst ends with an ally from the same squad on the battlefield. Affects all allies.##Hit Rate ▲ 11.61% for 30 sec.##Damage to interruption part ▲ 19.36% for 30 sec.",
      },
    ],
    rarity: "SSR",
    full: "https://www.prydwen.gg/static/ff8e600e2ce9c18b2e62573784775e22/3cd29/noir_full.webp",
  },
  {
    name: "Rosanna",
    art: "https://www.prydwen.gg/static/91184bdcd40eb0df1edb90d32b0aea90/60b4d/rosanna_icon.webp",
    hp: 252742,
    atk: 12982,
    def: 2122,
    weapon: "Minigun",
    unitClass: "Attacker",
    manufacturer: "Tetra",
    element: "Electric",
    squad: "Underworld Queen",
    position: "Burst 1",
    burstCD: "40",
    role: ["Buffer"],
    skill: [
      {
        name: "Normal Attack",
        type: "Normal",
        ammo: 300,
        reload: "1.67s",
        effect:
          "■ Affects target enemy.##Deals 5.1% ATK as damage.##Deals 200% damage when attacking core.",
      },
      {
        name: "On the Lam",
        active: "Passive",
        effect:
          "■ Activates after landing 120 normal attack(s). Affects self.##Concealment: Prevents self from being the target of single-target attacks for 10 sec. Loses effect when the caster takes damage.##Critical Damage ▲ 19.34% for 10 sec.##■ Activates after landing 10 normal attack(s). Affects 2 enemy units with the highest ATK.##Dispels 5 buffs. Activates 1 time per battle.",
      },
      {
        name: "Capo dei Capi",
        effect:
          "■ Activates at the start of the battle. Affects self.##Concealment: Prevents self from being the target of single-target attacks for 5 sec. Loses effect when the caster takes damage.##■ Activates when a Nikke is out of action. Affects self.##Frenzy: ATK ▲ 22.61%, stacks up to 10 time(s) and lasts for 30 sec.##Fills Burst Gauge by 36.54%",
        active: "Passive",
      },

      {
        name: "Vendetta",
        active: "40 Seconds",
        effect:
          "■ Affects 2 Attacker enemy unit(s).##Deals 1310.4% of ATK as damage.##■ Affects the same target(s) when in Concealment status.##Deals 561.6% of ATK as additional damage.",
      },
    ],
    rarity: "SSR",
    full: "https://www.prydwen.gg/static/f4c793387b6709b51709942473d55cbe/3cd29/rosanna_full.webp",
  },

  {
    name: "Nero",
    art: "https://www.prydwen.gg/static/c4b33d1aa2d901a271268cf109b9dcd9/60b4d/nero_icon.webp",
    hp: 252742,
    atk: 12982,
    def: 2122,
    weapon: "SMG",
    unitClass: "Defender",
    manufacturer: "Tetra",
    element: "Fire",
    squad: "Happy Zoo",
    position: "Burst 2",
    burstCD: "20",
    role: ["Buffer", "Taunter"],

    skill: [
      {
        name: "Normal Attack",
        type: "Normal",
        ammo: 300,
        reload: "1.67s",
        effect:
          "■ Affects target enemy.## Deals 8.39% ATK as damage.## Deals 200% damage when attacking core.",
      },
      {
        name: "Cat's Repayment",
        active: "Passive",
        effect:
          "■ Activates when recovery takes effect. Affects the target who applied the recovery effect.##Damage Taken ▼ 14.14% for 5 sec.##■ Activates when recovery takes effect. Affects self.##Cat's Repayment: Damage Taken ▼ 8.43%, stacks up to 5 time(s) and lasts for 5 sec.",
      },
      {
        name: "Lil' Paw",
        effect:
          "■ There is a 30% chance of activating when attacked. Affects the target.##Damage Taken ▲ 8.26% for 5 sec.##■ There is a 30% chance of activating when in Grumpy Cat status. Affects the target.##Deals 158.05% of final ATK as damage.##■ Activates when entering battle. Affects self.##Max HP ▲ 60.28% continuously.",
        active: "Passive",
      },

      {
        name: "Grumpy Cat",
        active: "20 Seconds",
        effect:
          "■ Affects 1 enemy unit(s) with the highest HP.##Deals 1104.91% of final ATK as damage.## Affects self.##Attract: Taunt all enemies for 15 sec.##■ Activates when Cat's Repayment is fully stacked. Affects self.##Grumpy Cat: HP Potency ▲ 60.08% for 15 sec.",
      },
    ],
    rarity: "SSR",
    full: "https://www.prydwen.gg/static/91fd6ebe3653e3ebcd3cbd03994192f8/3cd29/nero_full.webp",
  },
  {
    name: "Mash",
    art: "https://www.prydwen.gg/static/af09bc7d110b6daea420fd5a94207a3f/60b4d/mast_icon.webp",
    hp: 252742,
    atk: 12982,
    def: 2122,
    weapon: "SMG",
    unitClass: "Supporter",
    manufacturer: "Elysion",
    element: "Electric",
    squad: "Aegis",
    position: "Burst 2",
    burstCD: "20",
    releaseDate: "July 19th, 2023",
    vakr: "Shin Na-ri",
    vajpn: "Ryo Hirohashi",
    vaen: "Lisa Reimold",
    role: ["Buffer", "Debuffer"],

    skill: [
      {
        name: "Normal Attack",
        type: "Normal",
        ammo: 120,
        reload: "1.5s",
        effect:
          "■ Affects target enemy.##Deals 8.73% ATK as damage. Deals 200% damage when attacking core.",
      },
      {
        name: "Pirate's Grit",
        active: "Passive",
        effect:
          "■ Activates when crit attack hits 2 time(s). Affects the target(s).##Sea Breeze: DEF ▼ 1.9% of the caster's DEF, stacks up to 50 time(s) and lasts for 3 sec.##■ Activates when HP falls below 70%. Affects self and 2 ally unit(s) with the highest ATK (except caster).##Critical Damage ▲ 50.94% continuously.",
      },
      {
        name: "Pirate's Sight",
        effect:
          "■ Activates when entering battle. Affects self and 2 ally unit(s) with the highest ATK (except caster).##Critical Rate ▲ 23.56% for 30 sec.",
        active: "Passive",
      },

      {
        name: "Sail Through the Tempest!",
        active: "20 Seconds",
        effect:
          "■ Affects self and 2 ally unit(s) with the highest ATK (except caster).##Max HP ▲ 60.34% of the caster's Max HP without restoring HP, lasts for 7 sec.##Critical Damage ▲ 25.19% for 7 sec.##■ Affects the target(s) afflicted with Sea Breeze.##Storm: Deals 4.52% of final ATK as damage. Duplicate stacks count of Sea Breeze every 1 sec for 7sec.",
      },
    ],
    rarity: "SSR",
    full: "https://www.prydwen.gg/static/db8e8c8d1a9e55d29ff1c8e72897f7ca/3cd29/mast_full.webp",
  },
  {
    name: "Aqua Marine Helm",
    art: "https://www.prydwen.gg/static/0a4558a82257c013750e508866b5da83/60b4d/shelmi_icon.webp",
    hp: 252742,
    atk: 12982,
    def: 2122,
    weapon: "Assault Rifle",
    unitClass: "Attacker",
    manufacturer: "Elysion",
    element: "Iron",
    squad: "Aegis",
    position: "Burst 2",
    burstCD: "20",
    releaseDate: "August 10th, 2023",
    vakr: "Sa Moon-young",
    vajpn: "Marina Inoue",
    vaen: "Elizabeth Simmons",
    role: ["Buffer", "Debuffer"],

    skill: [
      {
        name: "Normal Attack",
        type: "Normal",
        ammo: 60,
        reload: "1s",
        effect:
          "■ Affects target enemy.##Deals x% ATK as damage.##Deals 200% damage when attacking core.",
      },
      {
        name: "Admire Accompaniment",
        active: "Passive",
        effect:
          "■ Activates after landing 30 normal attack(s). Affects the target.##Deals 131.34% of final ATK as additional damage.## ■ Activates when entering Full Burst. Affects all allies.##Effect changes according to the number of activation time(s). Previous effects triggers repeatedly.##Once: Burst Skill cooldown ▼ 1.82 sec.##Twice: Burst Skill cooldown ▼ 2.2 sec.##Three times: Burst Skill cooldown ▼ 2.6 sec.",
      },
      {
        name: "Aegis Cannon Suppression Fire",
        effect:
          "■ Affects 1 enemy unit randomly.##Deals 105.82% of final ATK as damage.##■ Affects the same target when they belong to Electric Code##Damage Taken ▲ 5.64%, stacks up to 5 times and lasts for 5 sec.",
        active: "4 Seconds",
      },

      {
        name: "Aegis Cannon Overload",
        active: "20 Seconds",
        effect:
          "■ Affects all enemies.##Deals 164.73% of final ATK as damage.##■ Affects the same target(s) when they belong to Electric Code.##Deals 164.73% of final ATK as additional damage.",
      },
    ],
    rarity: "SSR",
    full: "https://www.prydwen.gg/static/db8e8c8d1a9e55d29ff1c8e72897f7ca/3cd29/mast_full.webp",
  },
  {
    name: "Sparkling Summer Anis",
    art: "https://www.prydwen.gg/static/d975306ead928d33e957380e7b363a7d/60b4d/sanis_icon.webp",
    hp: 252742,
    atk: 12982,
    def: 2122,
    weapon: "Shotgun",
    unitClass: "Supporter",
    manufacturer: "Tetra",
    element: "Electric",
    squad: "Counters",
    position: "Burst 3",
    burstCD: "40",
    releaseDate: "August 3rd, 2023",
    vakr: "Kim Seoung-hui",
    vajpn: "Miho Okasaki",
    vaen: "Michelle Marie",
    role: ["Buffer"],

    skill: [
      {
        name: "Normal Attack",
        type: "Normal",
        ammo: 9,
        reload: "0.67s",
        effect:
          "■ Affects target enemy.##Deals x% ATK as damage.## Deals 200% damage when attacking core.",
      },
      {
        name: "Sparkling Boost",
        active: "Passive",
        effect:
          "■ Activates when entering Full Burst. Affects all Electric Code allies.##ATK ▲ 55.31% of caster's ATK, lasts for 10 sec.##Reloading Speed ▲ 49.28% for 10 sec.",
      },
      {
        name: "Sparkling Missile",
        effect:
          "■ Activates when firing the last bullet. Affects 2 enemy units(s) with the highest ATK.##Deals 382.42% of final ATK as damage.##■ Activates when firing the last bullet. Affects self.##Damage to interruption part ▲ 6.91% for 10 seconds.",
        active: "Passive",
      },

      {
        name: "Sparkling Wave",
        active: "20 Seconds",
        effect:
          "■ Affects self.##Max Ammunition Capacity ▼ 73.92% for 10 sec.##Reloading Speed ▲ 27.72% for 10 sec.##Damage as strong element ▲ 42.24% for 10 sec.",
      },
    ],
    rarity: "SSR",
    full: "https://www.prydwen.gg/static/db8e8c8d1a9e55d29ff1c8e72897f7ca/3cd29/mast_full.webp",
  },
  {
    name: "Anchor",
    art: "https://www.prydwen.gg/static/af09bc7d110b6daea420fd5a94207a3f/60b4d/mast_icon.webp",
    hp: 252742,
    atk: 12982,
    def: 2122,
    weapon: "Rocket Launcher",
    unitClass: "Defender",
    manufacturer: "Elysion",
    element: "Wind",
    squad: "Aegis",
    position: "Burst 1",
    burstCD: "20",
    releaseDate: "August 3rd, 2023",
    vakr: "Kim Chae-rin",
    vajpn: "Hiyori Nitta",
    vaen: "Bryn Apprill",
    role: ["Buffer", "Debuffer"],

    skill: [
      {
        name: "Normal Attack",
        type: "Charge",
        ammo: 6,
        reload: "2s",
        effect:
          "■ Affects target enemy.##Deals 61.3% ATK as damage.##Charge Time: 1 sec.##Full Charge Damage: 250% of damage.##Deals 200% damage when attacking core.",
      },
      {
        name: "GS",
        active: "Passive",
        effect:
          "■ Activates when the last bullet hits the target. Affects the target.##Taunt for 5 sec.##■ Activates when the last bullet hits the target. Affects self.##DEF ▲ 23.82% for 5 sec.",
      },
      {
        name: "MDS",
        effect:
          "■ Activates when entering battle. Affects self.##When attacking an enemy projectile, damage dealt to that projectile ▲ 25.6% continuously.",
        active: "Passive",
      },

      {
        name: "CIWS",
        active: "20 Seconds",
        effect: "■ Affects all enemies.##Deal 304.45% of final ATK as damage.",
      },
    ],
    rarity: "SR",
    full: "// https://www.prydwen.gg/static/5bcfaad7625fb08ba4320cbbae2f4772/3cd29/anchor_full.webp",
  },
  {
    name: "2B",
    art: "https://www.prydwen.gg/static/649a523a78400e80d598323c30a034e5/60b4d/b2_icon-transformed.webp",
    hp: 252742,
    atk: 12982,
    def: 2122,
    weapon: "Assault Rifle",
    unitClass: "Defender",
    manufacturer: "Abnormal",
    element: "Fire",
    squad: "YoRHA",
    position: "Burst 3",
    burstCD: "40",
    releaseDate: "September 1st, 2023",
    vakr: "Kim Seoung-hui",
    vajpn: "Miho Okasaki",
    vaen: "Michelle Marie",
    role: ["Buffer"],

    skill: [
      {
        name: "Normal Attack",
        type: "Normal",
        ammo: 9,
        reload: "0.67s",
        effect:
          "■ Affects target enemy.##Deals x% ATK as damage.##Deals 200% damage when attacking core.",
      },
      {
        name: "Survival",
        active: "Passive",
        effect:
          "■ Activates when using Burst Skill. Affects self.##Effect changes according to the number of activation time(s). Previous effects trigger repeatedly:##Once: Max HP ▲ 10.03% continuously.##Twice: Max HP ▲ 20.06% continuously.##Three times: Max HP ▲ 57.76% continuously",
      },
      {
        name: "Cluster Bomb",
        effect:
          "■ Activates after firing 300 time(s). Affects all enemies.##Deals 167.45% of final ATK as damage.##■ Activates when entering battle. Affects self.##ATK ▲ 6.16% of the caster's final Max HP continuously.",
        active: "Passive",
      },

      {
        name: "Series of Attacks",
        active: "20 Seconds",
        effect:
          "■ Affects all enemies.##Deals 2439.36% of final ATK as Distributed Damage.##■ Affects 1 enemy unit(s) with the highest Max HP.##Deals 792% of final ATK as additional damage.",
      },
    ],
    rarity: "SSR",
    full: "https://www.prydwen.gg/static/db8e8c8d1a9e55d29ff1c8e72897f7ca/3cd29/mast_full.webp",
  },
  {
    name: "Pascal",
    art: "https://www.prydwen.gg/static/649a523a78400e80d598323c30a034e5/60b4d/b2_icon-transformed.webp",
    hp: 252742,
    atk: 12982,
    def: 2122,
    weapon: "Rocket Launcher",
    unitClass: "Defender",
    manufacturer: "Abnormal",
    element: "Fire",
    squad: "YoRHA",
    position: "Burst 3",
    burstCD: "40",
    releaseDate: "September 8th, 2023",
    vakr: "Kim Seoung-hui",
    vajpn: "Miho Okasaki",
    vaen: "Michelle Marie",
    role: ["Buffer"],

    skill: [
      {
        name: "Normal Attack",
        type: "Normal",
        ammo: 9,
        reload: "0.67s",
        effect:
          "■ Affects target enemy.##Deals x% ATK as damage.## Charge Time: 1 sec.##Full Charge Damage: 250% of damage.##Deals 200% damage when attacking core.",
      },
      {
        name: "Survival",
        active: "Passive",
        effect:
          "■ Activates when using Burst Skill. Affects self.##Charge Damage ▲ 110.44% for 15 sec.##Explosion Radius ▲ 100.74% for 15 sec.",
      },
      {
        name: "Cluster Bomb",
        effect:
          "■ Activates when hitting a target with Full Charge. Affects the target.##Deals 30.1% of final ATK as additional damage.##■ Activates when hitting a target with Full Charge. Affects self.##Damage to Parts ▲ 40.88% for 3 sec",
        active: "Passive",
      },

      {
        name: "Series of Attacks",
        active: "20 Seconds",
        effect:
          "■ Affects self.##Mode B: Own HP decreases every second while ATK and Charge Speed increase. If own HP dips below 40%, Mode B is deactivated.##Effect 1: Current HP ▼ 3.99% every 1 sec.##Effect 2: ATK ▲ 15.19%##Effect 3: Charge Speed ▲ 35.88%",
      },
    ],
    rarity: "SSR",
    full: "https://www.prydwen.gg/static/db8e8c8d1a9e55d29ff1c8e72897f7ca/3cd29/mast_full.webp",
  },
  {
    name: "Marciana",
    art: "https://www.prydwen.gg/static/649a523a78400e80d598323c30a034e5/60b4d/b2_icon-transformed.webp",
    hp: 252742,
    atk: 12982,
    def: 2122,
    weapon: "Shotgun",
    unitClass: "Supporter",
    manufacturer: "Elysion",
    element: "Iron",
    squad: "Academia",
    position: "Burst 3",
    burstCD: "40",
    releaseDate: "September 21st, 2023",
    // not updated
    vakr: "Kim Seoung-hui",
    vajpn: "Miho Okasaki",
    vaen: "Michelle Marie",
    role: ["Buffer", "Healer"],
    skill: [
      {
        name: "Normal Attack",
        type: "Normal",
        ammo: 9,
        reload: "1.5s",
        effect:
          "■ Affects target enemy.##Deals 201.5% ATK as damage.##Deals 200% damage when attacking core.",
      },
      {
        name: "Drone Supporter",
        active: "Passive",
        effect:
          "■ Activates when using Burst Skill. Affects self.##Charge Damage ▲ 110.44% for 15 sec.##Explosion Radius ▲ 100.74% for 15 sec.",
      },
      {
        name: "School Nurse",
        effect:
          "■ Activates when using Burst Skill. Affects all allies.##Recovers 28.11% of caster's final Max HP as HP.",
        active: "Passive",
      },

      {
        name: "A Teacher's Grace",
        active: "20 Seconds",
        effect:
          "■ Affects all allies.##Storage: If the target obtained a healing effect that exceeds the character's Max HP, excess portion will be stored, up to 27.87% of the caster's Max HP, lasts for 10 sec.##DEF ▲ 20.9% of the caster's DEF for 10 sec.",
      },
    ],

    rarity: "SSR",
    full: "https://www.prydwen.gg/static/6aca1ced4c998aab9f425f66e8a4751d/3cd29/marc_full.webp",
  },
  {
    name: "Naga",
    art: "https://www.prydwen.gg/static/57d9b047ba9b27e361bfa8aed49b9272/60b4d/naga_icon.webp",
    hp: 252742,
    atk: 12982,
    def: 2122,
    weapon: "Shotgun",
    unitClass: "Supporter",
    manufacturer: "Missilis",
    element: "Electric",
    squad: "Dazzling Pearl",
    position: "Burst 2",
    burstCD: "20",
    releaseDate: "September 28th, 2023",
    vakr: "Kim Seoung-hui",
    vajpn: "Miho Okasaki",
    vaen: "Michelle Marie",
    role: ["Buffer", "Healer"],

    skill: [
      {
        name: "Normal Attack",
        type: "Normal",
        ammo: 9,
        reload: "1.5s",
        effect:
          "■ Affects target enemy.##Deals 204.8% ATK as damage.##Deals 200% damage when attacking cor",
      },
      {
        name: "Guardian of Friendship",
        active: "Passive",
        effect:
          "■ Activates after 12 normal attack(s). Affects all allies.##Recovery of Cover's HP ▲ 14.57%.##■ Activates when applying Shield. Affects all allies.##Damage dealt when attacking core ▲ 85.17% for 10 sec.",
      },
      {
        name: "Support of Friendship",
        effect:
          "■ Activates after 5 normal attack(s). Affects 2 ally unit(s) with the highest ATK.##Damage dealt when attacking core ▲ 40.07% for 5 sec.##■ Activates after 5 normal attack(s). Affects 2 ally unit(s) with the lowest HP percentage.##Recovers 9.58% of the caster's final Max HP as HP.",
        active: "Passive",
      },

      {
        name: "As Long As We're With Friends",
        active: "20 Seconds",
        effect:
          "■ Affects self.##Gain Pierce for 10 sec.##■ Affects all allies.##ATK ▲ 16.18% of caster's ATK for 10 sec.##■ Activates when applying Shield. Affects all allies.##ATK ▲ 31.02% of caster's ATK for 10 sec.",
      },
    ],
    rarity: "SSR",
    full: "https://www.prydwen.gg/static/8865beb5351e8ec66084828ebfe2faef/3cd29/naga_full.webp",
  },
  {
    name: "Tia",
    art: "https://www.prydwen.gg/static/fca33691bec48616185a60b9f4f3dab0/60b4d/tia_icon.webp",
    hp: 252742,
    atk: 12982,
    def: 2122,
    weapon: "Rocket Launcher",
    unitClass: "Defender",
    manufacturer: "Missilis",
    element: "Iron",
    squad: "Dazzling Pearl",
    position: "Burst 1",
    burstCD: "40",
    releaseDate: "September 28th, 2023",
    vakr: "Kim Seoung-hui",
    vajpn: "Miho Okasaki",
    vaen: "Michelle Marie",
    role: ["Buffer", "Healer", "Shielder", "Taunter"],

    skill: [
      {
        name: "Normal Attack",
        type: "Charge",
        ammo: 6,
        reload: "2s",
        effect:
          "■ Affects target enemy.##Deals 61.3% ATK as damage.##Charge Time: 1 sec.##Full Charge Damage: 250% of damage.##Deals 200% damage when attacking core.",
      },
      {
        name: "Reptile Lover",
        active: "Passive",
        effect:
          "■ Activates when recovering Cover's HP. Affects self.##Cooldown of Burst Skill ▼ 13 sec, stacks up to 2 time(s) and lasts for 12 sec.##■ Activates when recovering Cover's HP. Affects all allies.##Attack damage ▲ 31.11% for 10 sec.",
      },
      {
        name: "Chameleon Invisibilit",
        effect:
          "■ Activates after landing 5 normal attack(s). Affects self.##Cover's Max HP ▲ 32.75% of the caster's Max HP, lasts for 5 sec.##Attract: Taunt all enemies for 5 sec.##■ Activates when using Burst Skill. Affects self.##Recovery of Cover's HP ▲ 21.41% of the caster's final Max HP.##Recovers 21.96% of attack damage for 10 sec.",
        active: "Passive",
      },

      {
        name: "Lizard's Protection",
        active: "40 Seconds",
        effect:
          "■ Affects self.##Generates a Shield with 35.07% of the caster's final Max HP for 10 sec.##■ Affects all allies (except self).##Generates a Shield with 10.21% of the caster's final Max HP for 10 sec.##■ Affects all allies.##Re-enter Burst Skill Stage 1.",
      },
    ],
    rarity: "SSR",
    full: "https://www.prydwen.gg/static/6862d63319c7cbda9e9294b343465a79/3cd29/tia_full.webp",
  },
  {
    name: "Quiry",
    art: "https://www.prydwen.gg/static/f7811e05859c097f0448fd9ea7a52c1c/60b4d/quirk_icon.webp",
    hp: 252742,
    atk: 12982,
    def: 2122,
    weapon: "Rocket Launcher",
    unitClass: "Supporter",
    manufacturer: "Elysion",
    element: "Wind",
    squad: "A.C.P.U.",
    position: "Burst 3",
    burstCD: "40",
    releaseDate: "October 26th, 2023",
    vakr: "Kim Seoung-hui",
    vajpn: "Miho Okasaki",
    vaen: "Michelle Marie",
    role: ["Buffer", "Healer", "Debuffer"],

    skill: [
      {
        name: "Normal Attack",
        type: "Charge",
        ammo: 6,
        reload: "1s",
        effect:
          "■ Affects target enemy.##Deals x% of ATK as damage.##Charge Time: 1 sec.##Full Charge Damage: 250% of damage.##Deals 200% damage when attacking core",
      },
      {
        name: "Glance",
        active: "Passive",
        effect:
          "■ Activates when hitting a target with Full Charge. Affects the target.##ATK ▼ 8.94% of caster's ATK for 3 sec.##■ Activates when attacking with Full Charge. Affects 2 Defender ally target's.##ATK ▲ 5.81% of caster's ATK for 3 sec..",
      },
      {
        name: "Scrutiny",
        effect:
          "■ Activates when entering battle. Affects 2 Defender Ally units.##Max HP ▲ 11.63% continously.",
        active: "Passive",
      },

      {
        name: "Scrutiny",
        active: "40 Seconds",
        effect:
          "■ Affects all allies.##Recovers 6.96% of caster's final Max HP every 1 sec for 10 sec.##■ Affects all allies.##Critical Rate ▲ 19.9% for 10 sec..",
      },
    ],
    rarity: "SSR",
    full: "https://www.prydwen.gg/static/b6feed49ab920fce2021150aaeb29eaa/3cd29/quirk_full.webp",
  },
  {
    name: "Red Hood",
    art: "https://www.prydwen.gg/static/f7811e05859c097f0448fd9ea7a52c1c/60b4d/quirk_icon.webp",
    hp: 252742,
    atk: 12982,
    def: 2122,
    weapon: "Sniper Rifle",
    unitClass: "Attacker",
    manufacturer: "Pilgrim",
    element: "Iron",
    squad: "Goddess Squad",
    position: "Burst 1/2/3",
    burstCD: "40",
    releaseDate: "November 2nd, 2023",
    vakr: "Jeon Sook-kyung",
    vajpn: "Yoko Hikasa",
    vaen: "Paris Blu",
    role: ["Buffer"],
    skill: [
      {
        name: "Normal Attack",
        type: "Charge",
        ammo: 6,
        reload: "2s",
        effect:
          "■ Affects target enemy.##Deals 69.04% ATK as damage.##Charge Time: 1 sec.##Full Charge Damage: 350%.##Deals 200% damage when attacking core.",
      },
      {
        name: "Wild Tooth",
        active: "Passive",
        effect:
          "■ Activates when casting a normal attack. Affects self.##Charge Speed ▲ 3.81%, stacks up to 10 time(s) and lasts for 5 sec.##■ Activates when entering battle. Affects self.##Convert excess value over 100% of Charge Speed to Charge Damage. Charge Damage ▲ 240% of the excess value continuously.",
      },
      {
        name: "Wild Tooth",
        effect:
          "■ Activates when entering battle. Affects self.##Gain Pierce continuously.##■ Activates during Beast Cage. Affects all allies.##DEF ▲ 50.68% of caster's DEF for 10 sec.##■ Activates during The Last Howl. Affects self.##Recovers 23.04% of attack damage as HP for 10 sec.##■ Activates when casting Red Wolf. Affects self.##ATK ▲ 71.42% of caster's ATK for 10 sec.",
        active: "Passive",
      },

      {
        name: "Red Wolf",
        active: "40 Seconds",
        effect:
          "When used in Step 1: Beast Cage##■ Affects all allies.##ATK ▲ 77.55% of caster's ATK for 10 sec.##■ Affects self.##Cooldown of Burst Skill ▼ 40 sec. Activates once per battle.##When used in Step 2: The Last Howl##■ Affects self.##Attract: Taunt all enemies for 10 sec.##HP Potency ▲ 74.88% for 10 sec.##Cooldown of Burst Skill ▼ 40 sec. Activates once per battle.##When used in Step 3: Red Wolf##■ Affects self.##Change the Weapon in use:##Damage: 27.8% of final ATK##Full Charge Damage: 250% of damage##Last for: 10 sec##Additional Effect:##Expand Pierce range by 100% for 10 sec.##Charge Speed ▲ 100.8% for 10 sec.",
      },
    ],
    rarity: "SSR",
    full: "https://www.prydwen.gg/static/b6feed49ab920fce2021150aaeb29eaa/3cd29/quirk_full.webp",
  },
  {
    name: "Innocent Days's Snow White",
    art: "https://www.prydwen.gg/static/34cd796bf8a22b0724e625146a4a4fa5/60b4d/smol_icon.webp",
    hp: 252742,
    atk: 12982,
    def: 2122,
    weapon: "Rocket Launcher",
    unitClass: "Supporter",
    manufacturer: "Pilgrim",
    element: "Iron",
    squad:
      "https://www.prydwen.gg/static/34cd796bf8a22b0724e625146a4a4fa5/60b4d/smol_icon.webp",
    position: "Burst 3",
    burstCD: "40",
    releaseDate: "November 2nd 2023",
    vakr: "So Yeon",
    vajpn: "M • A • O",
    vaen: "Laura Stahl",
    role: ["Buffer", "Healer", "Debuffer"],
    skill: [
      {
        name: "Normal Attack",
        type: "Charge",
        ammo: 60,
        reload: "1s",
        effect:
          "■ Affects target enemy.##Deals 13.65% ATK as damage.##Deals 200% damage when attacking core.",
      },
      {
        name: "Seven Dwarves V&VI",
        active: "Passive",
        effect:
          "■ Activates after landing 30 normal attack(s). Affects self.##Max ammunition capacity ▲ 25.66%, stacks up to 5 time(s) and last for 5 sec.##■ Activates after landing 30 normal attack(s). Affects enemies within attack range.##Deals 188.68% of final ATK as damage.",
      },
      {
        name: "Seven Dwarves IV",
        effect:
          "■ Activates after landing 50 normal attack(s). Affects all enemies.##Deals 61.69% of final ATK as damage.##■ Activates when using Burst Skill. Affects self.##Attack damage ▲ 21.12% for 10 sec.",
        active: "Passive",
      },

      {
        name: "Seven Dwarves III",
        active: "40 Seconds",
        effect:
          "■ Affects self.##Hit counter required for Skill 2 ▼ 20 time(s) for 10 sec.##ATK ▲ 97.2% of caster’s ATK for 10 sec.##Grants unlimited ammunition for 10 sec.",
      },
    ],
    rarity: "SSR",
    full: "https://www.prydwen.gg/static/b6feed49ab920fce2021150aaeb29eaa/3cd29/quirk_full.webp",
  },
  {
    name: "Tove",
    art: "https://www.prydwen.gg/static/87d06e7e093d8cc140f716418a0eca5d/60b4d/tove_icon.webp",
    hp: 252742,
    atk: 12982,
    def: 2122,
    weapon: "Assault Rifle",
    unitClass: "Supporter",
    manufacturer: "Missilis",
    element: "Water",
    squad: "Unlimited",
    position: "Burst 1",
    burstCD: "20",
    releaseDate: "November 23rd 2023",
    vakr: "Cha Yeong-hui",
    vajpn: "Shion Wakayama",
    vaen: "Molly Elizabeth Ring",
    role: ["Buffer"],
    skill: [
      {
        name: "Normal Attack",
        type: "Normal",
        ammo: 60,
        reload: "2s",
        effect:
          "■ Affects target enemy.##Deals 14.2% ATK as damage.##Deals 200% damage when attacking core.",
      },
      {
        name: "Modification Successful",
        active: "Passive",
        effect:
          "■ There is a 5% chance of activating when attacking. Affects self.##Emergency-Crafted Bullets: Reload 5.31% of the magazine(s).##■ Activates during Emergency-Crafted Bullets. Affects all allies.##Temporary Modification: Max Ammunition Capacity ▲ 2, stacks up to 3 time(s) and lasts for 5 sec.##Critical Damage ▲ 5.24% for 5 sec.",
      },
      {
        name: "Modification Successful",
        effect:
          "■ Only activates when Temporary Modification is fully stacked. Affects all allies.##Critical Rate ▲ 3.32% continuously.##■ Only activates when Temporary Modification is fully stacked. Affects all allies with a Shotgun.##Attack Speed ▲ 42.24% continuously..",
        active: "Passive",
      },

      {
        name: "Modification Successful",
        active: "20 Seconds",
        effect:
          "■ Affects all allies.##Miracle of Makeshifts: ATK ▲ 2.32% of caster's ATK. Mirrors the stack count of Temporary Modification. This effect lasts for 10 sec.##■ Affects all allies with a Shotgun.##Miracle of Makeshifts: ATK ▲ 24.21% of caster's ATK. Mirrors the stack count of Temporary Modification. This effect lasts for 10 sec..",
      },
    ],
    rarity: "SSR",
    full: "https://www.prydwen.gg/static/47ff2e24d1e0ae5ec61bef0a29f6b99e/3cd29/tove_full.webp",
  },
  {
    name: "Ludmilla: Winter Owner",
    art: "https://www.prydwen.gg/static/8aa1474d3b37cb187b07765ecfc53c1d/7dbca/xlud_card.webp",
    hp: 252742,
    atk: 12982,
    def: 2122,
    weapon: "Minigun",
    unitClass: "Attacker",
    manufacturer: "Tetra",
    element: "Water",
    squad: "Unlimited",
    position: "Burst 1",
    burstCD: "20",
    releaseDate: "December 7th 2023",
    vakr: "Bi Joo-eon",
    vajpn: "Ai Kakuma",
    vaen: "Lauren Landa",
    role: ["Buffer"],
    skill: [
      {
        name: "Normal Attack",
        type: "Normal",
        ammo: 300,
        reload: "3s",
        effect:
          "■ Affects target enemy.##Deals 5.86% ATK as damage.##Deals 200% damage when attacking core.",
      },
      {
        name: "The Queen's Gaze",
        active: "Passive",
        effect:
          "■ Activates when landing 60 normal attacks. Affects the target.##Damage Taken ▲ 12.56% for 3 sec.##Deal 158.43% of final ATK as additional damage.##■ Activates when landing 60 normal attacks. Affects self.##Reloads 20 rounds of ammunition.",
      },
      {
        name: "Snowstorm",
        effect:
          "■ Activates when hitting the Core for 60 times. Affects the target.##Deal 109.64% of final ATK as additional damage.##■ Activates at the beginning of Full Burst. Affects self.##Critical Rate ▲ 14.6% for 3 sec.",
        active: "Passive",
      },

      {
        name: "Guiding Lantern",
        active: "20 Seconds",
        effect:
          "■ Affects self.##ATK ▲ 62.54% for 10 sec.##Reloading Speed ▲ 67.2% for 20 sec.",
      },
    ],
    rarity: "SSR",
    full: "https://www.prydwen.gg/static/0fe9416347aef19a70331816c34ce775/3cd29/xlud_full.webp",
  },
  {
    name: "Mica: Snow Buddy",
    art: "https://www.prydwen.gg/static/32657f0d965b63213f1bb601ba7ccda3/e9a79/xmica_icon.png",
    hp: 252742,
    atk: 12982,
    def: 2122,
    weapon: "SMG",
    unitClass: "Supporter",
    manufacturer: "Tetra",
    element: "Iron",
    squad: "The Carronades",
    position: "Burst 1",
    burstCD: "20",
    releaseDate: "December 14th 2023",
    vakr: "Kim Ga-ryoung",
    vajpn: "Aimi",
    vaen: "Corina Boettger",
    role: ["Buffer", "Cleanser"],
    skill: [
      {
        name: "Normal Attack",
        type: "Normal",
        ammo: 120,
        reload: "2s",
        effect:
          "■ Affects target enemy.##Deals 11.7% ATK as damage.##Deals 250% damage when attacking core.",
      },
      {
        name: "Tidying Up",
        active: "Passive",
        effect:
          "■ Activates when landing 120 normal attacks. Affects all allies.##Tidying Up: Damage Taken ▼ 2%, stacks up to 10 times and lasts for 15 sec.##■ Activates when the caster's Tidying Up is fully stacked. Affects all allies.##Max Ammunition Capacity ▲ 40% continuously.",
      },
      {
        name: "Blessing Cannon",
        effect:
          "■ Activates when landing 150 normal attacks. Affects all allies.##Increases stack count of stackable buffs by 1.##■ Activates when entering battle. Affects self.##Burst Gauge filling speed ▲ 300% continuously.",
        active: "Passive",
      },

      {
        name: "Snowfield Festival",
        active: "20 Seconds",
        effect:
          "■ Affects all allies.##Dispels 1 debuff.##ATK ▲ 39.3% of caster's ATK for 5 seconds.",
      },
    ],
    rarity: "SSR",
    full: "https://www.prydwen.gg/static/5cf246fda82e98655cf988e7afa38648/3cd29/xmica_full.webp",
  },
  {
    name: "Privaty: Unkind Maid",
    art: "https://www.prydwen.gg/static/ad846ac2fbf8f04f1b8b02b35b8c4197/60b4d/privmaid_icon.webp",
    hp: 252742,
    atk: 12982,
    def: 2122,
    weapon: "SG",
    unitClass: "Attacker",
    manufacturer: "Elysion",
    element: "Electric",
    squad: "Faction",
    position: "Burst 3",
    burstCD: "40",
    releaseDate: "February 8th 2024",
    vakr: "Bang Siu",
    vajpn: "Ayana Taketatsu",
    vaen: "Kira Buckland",
    role: ["Buffer", "Cleanser"],
    skill: [
      {
        name: "Normal Attack",
        type: "Normal",
        ammo: 9,
        reload: "2s",
        effect:
          "■ Affects Target(s).##Deals 182.1% ATK as damage.##Increases Hit Rate when attacking.##Deals 200% damage when attacking core.",
      },
      {
        name: "Passionate Maid",
        active: "Passive",
        effect:
          "■ Activates when landing attacks 30 time(s) using pellets. Affects 2 enemy unit(s) nearest to the crosshair.##Deals 202.84% of final ATK as additional damage.",
      },
      {
        name: "Loving Maid",
        effect:
          "■ Activates when more than 5 pellet(s) hit with a single normal attack. Affects self.##Reloading Speed ▲ 20.88% for 2 sec.##■ Activates when hitting 30 time(s) using pellets during Full Burst Time. Affects self.##Reload 1 round(s).##ATK ▲ 11.22%, stacks up to 5 time(s) and lasts for 2 sec.",
        active: "Passive",
      },

      {
        name: "Your Bashful Maid!",
        active: "20 Seconds",
        effect:
          "■ Affects self.##Attack Damage ▲ 10.56% for 10 sec.##Critical Damage ▲ 88.17% for 10 sec.##■ Affects all enemies.##Deals 1066.66% of final ATK as damage.",
      },
    ],
    rarity: "SSR",
    full: "https://www.prydwen.gg/static/565d3e1d812bac084955fef1909a4cb0/3cd29/privmaid_full.webp",
  },
  {
    name: "Ade",
    art: "https://www.prydwen.gg/static/74ef7903dba4fbb5b9f85e71e4d06bae/e9a79/aid_icon.png",
    hp: 252742,
    atk: 12982,
    def: 2122,
    weapon: "Assault Rifle",
    unitClass: "Supporter",
    manufacturer: "Tetra",
    element: "Wind",
    squad: "Maid For You",
    position: "Burst 2",
    burstCD: "20",
    releaseDate: "February 8th 2024",
    vakr: "Bang Siu",
    vajpn: "Ayana Taketatsu",
    vaen: "Kira Buckland",
    role: ["Buffer"],
    skill: [
      {
        name: "Normal Attack",
        type: "Normal",
        ammo: 60,
        reload: "1.5s",
        effect:
          "■ Affects Target(s).##Deals 14.71% of ATK as damage.##Deals 200% damage when attacking core.",
      },
      {
        name: "Cleaning Time",
        active: "Passive",
        effect:
          "■ Activates when entering battle. Affects all allies.##Perfect Maid: Gain debuff immunity to 1 debuff(s) and stacks up to 1 times(s) continuously.##■ Activates when own HP falls below 90%. Affects all allies.##ATK ▲ 5.19% of caster's ATK for 5 sec.",
      },
      {
        name: "Rest Time",
        effect:
          "■ Activates after 420 normal attack(s). Affects all allies.##Perfect Maid: Gain debuff immunity to 1 debuff(s) and stacks up for 1 time continuously.##■ Activates after 120 normal attack(s). Affects all allies.##Max HP ▲ 15.62% of caster's Max HP without restoring HP, lasts for 5 sec.",
        active: "Passive",
      },

      {
        name: "Mealtime",
        active: "20 Seconds",
        effect:
          "■ Affects all allies.##Max HP ▲ 25.15% of caster's Max HP without restoring HP, lasts for 10 sec.##ATK ▲ 10.15% of caster's ATK for 10 sec.",
      },
    ],
    rarity: "SSR",
    full: "https://www.prydwen.gg/static/565d3e1d812bac084955fef1909a4cb0/3cd29/privmaid_full.webp",
  },
  {
    name: "Elegg",
    art: "https://www.prydwen.gg/static/252e26d8d267492e948c0ebcedc63764/60b4d/elegg_icon.webp",
    hp: 252742,
    atk: 12982,
    def: 2122,
    weapon: "Minigun",
    unitClass: "Supporter",
    manufacturer: "Tetra",
    element: "Electric",
    squad: "Electric Shock",
    position: "Burst 2",
    burstCD: "20",
    releaseDate: "February 8th 2024",
    vakr: "Kim Hyeon-ji",
    vajpn: "Ayasa Ito",
    vaen: "Kira Buckland",
    role: ["Buffer", "Debuffer"],
    skill: [
      {
        name: "Normal Attack",
        type: "Normal",
        ammo: 60,
        reload: "1.5s",
        effect:
          "■ Affects Target(s).##Deals 5.57% of ATK as damage.##Deals 200% damage when attacking core.",
      },
      {
        name: "Short Circuit",
        active: "Passive",
        effect:
          "■ Activates when entering battle. Affects all allies.##When attacking an enemy projectile, damage dealt to that projectile ▲ 59.66 % continuously.## ■ Activates after landing 100 normal attack(s). Affects the target and 2 surrounding enemy unit(s) if the target is in BOOM Install.##Deals 91.03% of final ATK as Distributed Damage.",
      },
      {
        name: "Fast Charge",
        effect:
          "■ Activates after landing 60 normal attack(s). Affects all allies if the target is in BOOM Install.##ATK ▲ 13.09 % of caster's ATK for 5 sec.##■ Activates when the target appears. Affects all allies.##Fills Burst Gauge by 100%. Activates once per battle.",
        active: "Passive",
      },

      {
        name: "BOOM Install",
        active: "20 Seconds",
        effect:
          "■ Affects all allies.##Distributed Damage dealt ▲ 39.74 % for 10 sec.##■ Affects the enemy nearest to the crosshair.##Deals 79.2 % of final ATK as damage.##BOOM Install: DEF ▼ 35.64 % for 10 sec.",
      },
    ],
    rarity: "SSR",
    full: "https://www.prydwen.gg/static/2debb199cbbf68c4879cd6bf1b6f02f3/3cd29/elegg_big.webp",
  },
  {
    name: "D: Killer Wife",
    art: "https://www.prydwen.gg/static/d34b774430e4bf5d446e33e56e23103c/60b4d/dkiller_icon.webp",
    hp: 252742,
    atk: 12982,
    def: 2122,
    weapon: "Sniper",
    unitClass: "Supporter",
    manufacturer: "Elysion",
    element: "Fire",
    squad: "Perilous Siege",
    position: "Burst 1",
    burstCD: "20",
    releaseDate: "March 7th 2024",
    vakr: "Kim Hyeon-ji",
    vajpn: "Ayasa Ito",
    vaen: "Kira Buckland",
    role: ["Buffer", "Debuffer", "Burst CD Reduction"],
    skill: [
      {
        name: "Normal Attack",
        type: "Normal",
        ammo: 60,
        reload: "1.5s",
        effect:
          "Deals 69.04% of ATK as damage.##Charge Time: 1 sec##Full Charge Damage: 250% of damage##Deals 200% damage when attacking core.",
      },
      {
        name: "Calm Sniping",
        active: "Passive",
        effect:
          "■ Activates when attacking with Full Charge for 3 time(s). Affects self.##Gain Pierce for 1 round.##■ Activates when entering Full Burst. Affects all allies with a Sniper Rifle.##Pierce Damage ▲ 13.55% for 10 sec.",
      },
      {
        name: "Assault Formation",
        effect:
          "■ Activates when attacking with Full Charge for 8 time(s). Affects all allies.##Cooldown of Burst Skill ▼ 7 sec.##■ Activates when attacking with Full Charge for 5 time(s). Affects all allies.##Attack damage ▲ 5.06% for 10 sec.",
        active: "Passive",
      },

      {
        name: "Kill the Target",
        active: "20 Seconds",
        effect:
          "■ Affects the enemy nearest to the crosshair.##Deals 269.28% of final ATK as additional damage.##Inflicts Wipe Out on the target for 10 sec.##■ Activates when allies' normal attack hits a certain area of the target afflicted with Wipe Out. Affects allies.##Buff takes effect depending on the area hit.##Allies that hit parts: Damage dealt when attacking core ▲ 16.26% for 10 sec.##Allies that hit the body: ATK ▲ 12.19% of caster's ATK for 10 sec.",
      },
    ],
    rarity: "SSR",
    full: "https://www.prydwen.gg/static/ded8c1c0199918fff576a8cf22d98f03/3cd29/dkiller_full.webp",
  },
];
