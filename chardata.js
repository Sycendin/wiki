export const charData = [
  {
    name: "Rapi",
    art: "https://www.prydwen.gg/static/d2182bea4a3c35b721a4bd55d5690239/60b4d/rapi_icon.webp",
    hp: 252742,
    atk: 12982,
    def: 2122,
    weapon: "Assault Rifle",
    class: "Attacker",
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
  },

  {
    name: "Anis",
    art: "https://www.prydwen.gg/static/f3bf26dc83d5a31a5a8b46355d9e20b3/60b4d/anis_icon.webp",
    hp: 307885,
    atk: 8666,
    def: 2497,
    weapon: "Rocket Launcher",
    class: "Defender",
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
  },
  {
    name: "Neon",
    art: "https://www.prydwen.gg/static/a57df3a4f920f22dee72d6a4faea333b/60b4d/neon_icon.webp",
    hp: 280314,
    atk: 10824,
    def: 2252,
    weapon: "Shotgun",
    class: "Support",
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
  },
  {
    name: "Poli",
    art: "https://www.prydwen.gg/static/09bf8bdd4ca52d5bbefc4072fb018cdb/60b4d/poli_icon.webp",
    hp: 711171,
    atk: 17059,
    def: 4827,
    weapon: "Shotgun",
    class: "Defender",
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
  },
  {
    name: "Miranda",
    art: "https://www.prydwen.gg/static/1347f6bfd3ccce5f40bc5aa01aad7a7d/60b4d/miranda_icon.webp",
    hp: 647453,
    atk: 21307,
    def: 3999,
    weapon: "SMG",
    class: "Support",
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
  },
  {
    name: "Eunhwa",
    art: "https://www.prydwen.gg/static/1659088541bb1b28389ccf64cbb54907/60b4d/eunhwa_icon.webp",
    hp: 583734,
    atk: 25554,
    def: 3522,
    weapon: "Sniper",
    class: "Attacker",
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
  },
  {
    name: "Emma",
    art: "https://www.prydwen.gg/static/fde8f1e1ce61228967ad9ec8af771499/60b4d/emma_icon.webp",
    hp: 647453,
    atk: 21307,
    def: 3894,
    weapon: "Machine Gun",
    class: "Support",
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
  },
  {
    name: "Vesti",
    art: "https://www.prydwen.gg/static/6e15fc164660b4ca7ec1974e57382ecb/60b4d/vesti_icon.webp",
    hp: 583734,
    atk: 25554,
    def: 4071,
    weapon: "Rocket Launcher",
    class: "Attacker",
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
  },
  {
    name: "Helm",
    art: "https://www.prydwen.gg/static/c9979cff3fa84468d282634b1d60836c/60b4d/helm_icon.webp",
    hp: 111,
    atk: 111,
    def: 111,
    weapon: "Sniper",
    class: "Attacker",
    manufacturer: "Elysion",
    element: "Water",
    squad: "Aegis",
    position: "Support 3",
    burstCD: "40",
    role: ["Healer", "Buffer"],
    rarity: "SSR",
  },
  {
    name: "Sugar",
    art: "https://www.prydwen.gg/static/c17575707266e86e2b0d0ad859cf0935/60b4d/sugar_icon.webp",
    hp: 111,
    atk: 111,
    def: 111,
    weapon: "Shotgun",
    class: "Attacker",
    manufacturer: "Tetra",
    element: "Earth",
    squad: "Cafe Sweety",
    position: "Burst 3",
    burstCD: "40",
    role: ["DPS", "Buffer"],
    rarity: "SSR",
  },
  {
    name: "Milk",
    art: "https://www.prydwen.gg/static/45082510523372d5af24eb1da2e2396e/60b4d/milk_icon.webp",
    hp: 111,
    atk: 111,
    def: 111,
    weapon: "Sniper",
    class: "Support",
    manufacturer: "Tetra",
    element: "Earth",
    squad: "Cafe Sweety",
    position: "Support 1",
    burstCD: "40",
    role: ["Healer", "Buffer"],
    rarity: "SSR",
  },
  {
    name: "Frima",
    art: "https://www.prydwen.gg/static/729864516a6224f9fc9de1184ef877ae/60b4d/frima_icon.webp",
    hp: 111,
    atk: 111,
    def: 111,
    weapon: "Sniper",
    class: "Support",
    manufacturer: "Tetra",
    element: "Earth",
    squad: "Cafe Sweety",
    position: "Burst 1",
    burstCD: "20",
    role: ["Debuffer"],
    rarity: "SSR",
  },
  {
    name: "Crow",
    art: "https://www.prydwen.gg/static/729864516a6224f9fc9de1184ef877ae/60b4d/frima_icon.webp",
    hp: 111,
    atk: 111,
    def: 111,
    weapon: "SMG",
    class: "Defender",
    manufacturer: "Missillis",
    element: "Fire",
    squad: "Exotic",
    position: "Burst 3",
    burstCD: "40",
    role: ["Debuffer"],
    rarity: "SSR",
  },
  {
    name: "Maiden",
    art: "https://www.prydwen.gg/static/729864516a6224f9fc9de1184ef877ae/60b4d/frima_icon.webp",
    hp: 111,
    atk: 111,
    def: 111,
    weapon: "Shotgun",
    class: "Attacker",
    manufacturer: "Elysion",
    element: "Electric",
    squad: "Extrinsic",
    position: "Burst 3",
    burstCD: "40",
    role: ["DPS"],
    rarity: "SSR",
  },
  {
    name: "Guillotine",
    art: "https://www.prydwen.gg/static/729864516a6224f9fc9de1184ef877ae/60b4d/frima_icon.webp",
    hp: 111,
    atk: 111,
    def: 111,
    weapon: "Machine Gun",
    class: "Attacker",
    manufacturer: "Elysion",
    element: "Electric",
    squad: "Extrinsic",
    position: "Burst 3",
    burstCD: "40",
    role: ["DPS"],
    rarity: "SSR",
  },
  {
    name: "Brid",
    art: "https://www.prydwen.gg/static/729864516a6224f9fc9de1184ef877ae/60b4d/frima_icon.webp",
    hp: 111,
    atk: 111,
    def: 111,
    weapon: "Assault Rifle",
    class: "Attacker",
    manufacturer: "Elysion",
    element: "Water",
    squad: "Infinity Rail",
    position: "Burst 3",
    burstCD: "40",
    role: ["DPS"],
    rarity: "SSR",
  },
  {
    name: "Diesel",
    art: "https://www.prydwen.gg/static/454270444acc923035517fbd3b71bbf4/60b4d/diesel_icon.webp",
    hp: 111,
    atk: 111,
    def: 111,
    weapon: "Machine Gun",
    class: "Defender",
    manufacturer: "Elysion",
    element: "Wind",
    squad: "Infinity Rail",
    position: "Burst 2",
    burstCD: "20",
    role: ["Tank"],
    rarity: "SSR",
  },
  {
    name: "Soline",
    art: "https://www.prydwen.gg/static/729864516a6224f9fc9de1184ef877ae/60b4d/frima_icon.webp",
    hp: 111,
    atk: 111,
    def: 111,
    weapon: "SMG",
    class: "Support",
    manufacturer: "Elysion",
    element: "Earth",
    squad: "Infinity Rail",
    position: "Burst 3",
    burstCD: "40",
    role: ["DPS"],
    rarity: "SSR",
  },
  {
    name: "Harran",
    art: "https://www.prydwen.gg/static/454270444acc923035517fbd3b71bbf4/60b4d/diesel_icon.webp",
    hp: 111,
    atk: 111,
    def: 111,
    weapon: "Sniper",
    class: "Attacker",
    manufacturer: "Pilgrim",
    element: "Electric",
    squad: "Inherit",
    position: "Burst 3",
    burstCD: "40",
    role: ["DPS"],
    rarity: "SSR",
  },
  {
    name: "Noah",
    art: "https://www.prydwen.gg/static/454270444acc923035517fbd3b71bbf4/60b4d/diesel_icon.webp",
    hp: 111,
    atk: 111,
    def: 111,
    weapon: "Rocket Launcher",
    class: "Defender",
    manufacturer: "Pilgrim",
    element: "Wind",
    squad: "Inherit",
    position: "Support 2",
    burstCD: "40",
    role: ["Tank"],
    rarity: "SSR",
  },
  {
    name: "Isabel",
    art: "https://www.prydwen.gg/static/454270444acc923035517fbd3b71bbf4/60b4d/diesel_icon.webp",
    hp: 111,
    atk: 111,
    def: 111,
    weapon: "Machine Gun",
    class: "Attacker",
    manufacturer: "Pilgrim",
    element: "Electric",
    squad: "Inherit",
    position: "Burst 3",
    burstCD: "40",
    role: ["DPS"],
    rarity: "SSR",
  },
  {
    name: "Ether",
    art: "https://www.prydwen.gg/static/454270444acc923035517fbd3b71bbf4/60b4d/diesel_icon.webp",
    hp: 111,
    atk: 111,
    def: 111,
    weapon: "Shotgun",
    class: "Defender",
    manufacturer: "Missilis",
    element: "Electric",
    squad: "M.M.R.",
    position: "Support 1",
    burstCD: "40",
    role: ["Shielder", "Debuffer"],
    rarity: "SR",
  },
  {
    name: "Julia",
    art: "https://www.prydwen.gg/static/454270444acc923035517fbd3b71bbf4/60b4d/diesel_icon.webp",
    hp: 111,
    atk: 111,
    def: 111,
    weapon: "Assault Rifle",
    class: "Attacker",
    manufacturer: "Missilis",
    element: "Earth",
    squad: "Master Hand",
    position: "Burst 3",
    burstCD: "40",
    role: ["DPS"],
    rarity: "SSR",
  },
  {
    name: "Drake",
    art: "https://www.prydwen.gg/static/454270444acc923035517fbd3b71bbf4/60b4d/diesel_icon.webp",
    hp: 111,
    atk: 111,
    def: 111,
    weapon: "Shotgun",
    class: "Attacker",
    manufacturer: "Missilis",
    element: "Fire",
    squad: "Matis",
    position: "Support 3",
    burstCD: "40",
    role: ["DPS", "Buffer"],
    rarity: "SSR",
  },
  {
    name: "Laplace",
    art: "https://www.prydwen.gg/static/454270444acc923035517fbd3b71bbf4/60b4d/diesel_icon.webp",
    hp: 111,
    atk: 111,
    def: 111,
    weapon: "Rocket Launcher",
    class: "Attacker",
    manufacturer: "Missilis",
    element: "Earth",
    squad: "Matis",
    position: "Burst 3",
    burstCD: "40",
    role: ["DPS"],
    rarity: "SSR",
  },
  {
    name: "Maxwell",
    art: "https://www.prydwen.gg/static/454270444acc923035517fbd3b71bbf4/60b4d/diesel_icon.webp",
    hp: 111,
    atk: 111,
    def: 111,
    weapon: "Sniper",
    class: "Attacker",
    manufacturer: "Missilis",
    element: "Earth",
    squad: "Matis",
    position: "Support 3",
    burstCD: "40",
    role: ["Buffer"],
    rarity: "SSR",
  },
  {
    name: "Liter",
    art: "https://www.prydwen.gg/static/454270444acc923035517fbd3b71bbf4/60b4d/diesel_icon.webp",
    hp: 111,
    atk: 111,
    def: 111,
    weapon: "SMG",
    class: "Support",
    manufacturer: "Missilis",
    element: "Earth",
    squad: "Mighty Tools",
    position: "Burst 1",
    burstCD: "20",
    role: ["Buffer"],
    rarity: "SSR",
  },
  {
    name: "Centi",
    art: "https://www.prydwen.gg/static/454270444acc923035517fbd3b71bbf4/60b4d/diesel_icon.webp",
    hp: 111,
    atk: 111,
    def: 111,
    weapon: "Rocket Launcher",
    class: "Defender",
    manufacturer: "Missilis",
    element: "Earth",
    squad: "Mighty Tools",
    position: "Burst 2",
    burstCD: "20",
    role: ["Shielder", "Debuffer"],
    rarity: "SSR",
  },
  {
    name: "Epinel",
    art: "https://www.prydwen.gg/static/454270444acc923035517fbd3b71bbf4/60b4d/diesel_icon.webp",
    hp: 111,
    atk: 111,
    def: 111,
    weapon: "SMG",
    class: "Attacker",
    manufacturer: "Missilis",
    element: "Wind",
    squad: "Nepenthe",
    position: "Burst 3",
    burstCD: "40",
    role: ["DPS"],
    rarity: "SSR",
  },
  {
    name: "Folkwang",
    art: "https://www.prydwen.gg/static/454270444acc923035517fbd3b71bbf4/60b4d/diesel_icon.webp",
    hp: 111,
    atk: 111,
    def: 111,
    weapon: "Assault Rifle",
    class: "Defender",
    manufacturer: "Tetra",
    element: "Water",
    squad: "Nepenthe",
    position: "Burst 2",
    burstCD: "40",
    role: ["Healer", "Tank"],
    rarity: "SSR",
  },
  {
    name: "Scarlet",
    art: "https://www.prydwen.gg/static/454270444acc923035517fbd3b71bbf4/60b4d/diesel_icon.webp",
    hp: 111,
    atk: 111,
    def: 111,
    weapon: "Assault Rifle",
    class: "Attacker",
    manufacturer: "Pilgrim",
    element: "Electric",
    squad: "Pioneer",
    position: "Burst 3",
    burstCD: "40",
    role: ["DPS"],
    rarity: "SSR",
  },
  {
    name: "Rapunzel",
    art: "https://www.prydwen.gg/static/454270444acc923035517fbd3b71bbf4/60b4d/diesel_icon.webp",
    hp: 111,
    atk: 111,
    def: 111,
    weapon: "Rocket Launcher",
    class: "Support",
    manufacturer: "Pilgrim",
    element: "Earth",
    squad: "Pioneer",
    position: "Support 1",
    burstCD: "60",
    role: ["Healer"],
    rarity: "SSR",
  },
  {
    name: "Snow White",
    art: "https://www.prydwen.gg/static/454270444acc923035517fbd3b71bbf4/60b4d/diesel_icon.webp",
    hp: 111,
    atk: 111,
    def: 111,
    weapon: "Sniper",
    class: "Attacker",
    manufacturer: "Pilgrim",
    element: "Earth",
    squad: "Pioneer",
    position: "Burst 3",
    burstCD: "40",
    role: ["DPS"],
    rarity: "SSR",
  },
  {
    name: "Noise",
    art: "https://www.prydwen.gg/static/454270444acc923035517fbd3b71bbf4/60b4d/diesel_icon.webp",
    hp: 111,
    atk: 111,
    def: 111,
    weapon: "Rocket Launcher",
    class: "Support",
    manufacturer: "Tetra",
    element: "Electric",
    squad: "Prima Donna",
    position: "Support 1",
    burstCD: "40",
    role: ["Healer", "Tank"],
    rarity: "SSR",
  },
  {
    name: "Aria",
    art: "https://www.prydwen.gg/static/454270444acc923035517fbd3b71bbf4/60b4d/diesel_icon.webp",
    hp: 111,
    atk: 111,
    def: 111,
    weapon: "Machine Gun",
    class: "Attacker",
    manufacturer: "Tetra",
    element: "Water",
    squad: "Prima Donna",
    position: "Support 2",
    burstCD: "40",
    role: ["Buffer", "Shielder"],
    rarity: "SSR",
  },
  {
    name: "Volume",
    art: "https://www.prydwen.gg/static/454270444acc923035517fbd3b71bbf4/60b4d/diesel_icon.webp",
    hp: 111,
    atk: 111,
    def: 111,
    weapon: "SMG",
    class: "Attacker",
    manufacturer: "Tetra",
    element: "Wind",
    squad: "Prima Donna",
    position: "Burst 1",
    burstCD: "20",
    role: ["Buffer"],
    rarity: "SSR",
  },
  {
    name: "Novel",
    art: "https://www.prydwen.gg/static/454270444acc923035517fbd3b71bbf4/60b4d/diesel_icon.webp",
    hp: 111,
    atk: 111,
    def: 111,
    weapon: "SMG",
    class: "Defender",
    manufacturer: "Tetra",
    element: "Earth",
    squad: "Protocol",
    position: "Burst 2",
    burstCD: "20",
    role: ["Debuffer"],
    rarity: "SSR",
  },
  {
    name: "Exia",
    art: "https://www.prydwen.gg/static/454270444acc923035517fbd3b71bbf4/60b4d/diesel_icon.webp",
    hp: 111,
    atk: 111,
    def: 111,
    weapon: "Sniper",
    class: "Attacker",
    manufacturer: "Tetra",
    element: "Electric",
    squad: "Protocol",
    position: "Burst 1",
    burstCD: "20",
    role: ["DPS"],
    rarity: "SSR",
  },
  {
    name: "N102",
    art: "https://www.prydwen.gg/static/454270444acc923035517fbd3b71bbf4/60b4d/diesel_icon.webp",
    hp: 111,
    atk: 111,
    def: 111,
    weapon: "Rocket Launcher",
    class: "Support",
    manufacturer: "Missilis",
    element: "Water",
    squad: "Recall & Release",
    position: "Burst 1",
    burstCD: "20",
    role: ["Buffer"],
    rarity: "SR",
  },
  {
    name: "Miracle Fairy Anne",
    art: "https://www.prydwen.gg/static/c6ceea437415ffe9dad57dd84b6865f3/60b4d/anne_icon.webp",
    hp: 647453,
    atk: 21307,
    def: 4485,
    weapon: "Rocket Launcher",
    class: "Support",
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
        effect:
          "■ Affects all allies. Activates when above 90% HP.## HP Potency ▲ 23.46%.## ■ Activates when the last bullet hits the target while having over 90% HP. Affects all enemies.## HP Potency ▼ 78.93% for 10 sec..",
      },
      {
        name: "Blue Butterfly Slumber",
        effect:
          "■ Affects 1 random fallen Attacker ally unit(s).## Resurrect with 99% HP. Activates once per battle.## ■ Affects all Attacker allies.## Restores HP equal to 38.61% of the caster's Max HP.## ATK ▲ 77.22% for 10 sec.",
        active: "60 Seconds",
      },
    ],
    rarity: "SR",
  },
  {
    name: "Soldier OW",
    art: "https://www.prydwen.gg/static/454270444acc923035517fbd3b71bbf4/60b4d/diesel_icon.webp",
    hp: 111,
    atk: 111,
    def: 111,
    weapon: "SMG",
    class: "Support",
    manufacturer: "Elysion",
    element: "Fire",
    squad: "Replace",
    position: "Burst 1",
    burstCD: "20",
    role: ["Buffer"],
    rarity: "R",
  },
  {
    name: "Signal",
    art: "https://www.prydwen.gg/static/454270444acc923035517fbd3b71bbf4/60b4d/diesel_icon.webp",
    hp: 111,
    atk: 111,
    def: 111,
    weapon: "SMG",
    class: "Attacker",
    manufacturer: "Elysion",
    element: "Fire",
    squad: "Scouting",
    position: "Burst 2",
    burstCD: "20",
    role: ["DPS", "Debuffer"],
    rarity: "SSR",
  },
  {
    name: "Delta",
    art: "https://www.prydwen.gg/static/454270444acc923035517fbd3b71bbf4/60b4d/diesel_icon.webp",
    hp: 111,
    atk: 111,
    def: 111,
    weapon: "Sniper",
    class: "Defender",
    manufacturer: "Elysion",
    element: "Wind",
    squad: "Scouting",
    position: "Support 2",
    burstCD: "40",
    role: ["Tank"],
    rarity: "SR",
  },
  {
    name: "Pepper",
    art: "https://www.prydwen.gg/static/454270444acc923035517fbd3b71bbf4/60b4d/diesel_icon.webp",
    hp: 111,
    atk: 111,
    def: 111,
    weapon: "Shotgun",
    class: "Support",
    manufacturer: "Missilis",
    element: "Wind",
    squad: "Seraphim",
    position: "Burst 1",
    burstCD: "20",
    role: ["Healer", "DPS", "Buffer"],
    rarity: "SSR",
  },
  {
    name: "Mary",
    art: "https://www.prydwen.gg/static/454270444acc923035517fbd3b71bbf4/60b4d/diesel_icon.webp",
    hp: 111,
    atk: 111,
    def: 111,
    weapon: "Shotgun",
    class: "Support",
    manufacturer: "Tetra",
    element: "Water",
    squad: "Seraphim",
    position: "Support 1",
    burstCD: "40",
    role: ["Healer"],
    rarity: "SSR",
  },
  {
    name: "Dolla",
    art: "https://www.prydwen.gg/static/454270444acc923035517fbd3b71bbf4/60b4d/diesel_icon.webp",
    hp: 111,
    atk: 111,
    def: 111,
    weapon: "Sniper",
    class: "Support",
    manufacturer: "Tetra",
    element: "Wind",
    squad: "Talentum",
    position: "Burst 2",
    burstCD: "20",
    role: ["Buffer"],
    rarity: "SSR",
  },
  {
    name: "Rupee",
    art: "https://www.prydwen.gg/static/454270444acc923035517fbd3b71bbf4/60b4d/diesel_icon.webp",
    hp: 111,
    atk: 111,
    def: 111,
    weapon: "Assault Rifle",
    class: "Attacker",
    manufacturer: "Tetra",
    element: "Earth",
    squad: "Talentum",
    position: "Burst 2",
    burstCD: "20",
    role: ["DPS", "Buffer"],
    rarity: "SSR",
  },
  {
    name: "Winter Shopper Rupee",
    art: "https://www.prydwen.gg/static/4957dbc3fee0219e431d602ec7100311/60b4d/xrupee_icon.webp",
    hp: 711171,
    atk: 17059,
    def: 5015,
    weapon: "Assault Rifle",
    class: "Defender",
    manufacturer: "Tetra",
    element: "Electric",
    squad: "Talentum",
    position: "Burst 1",
    burstCD: "20",
    role: ["DPS", "Buffer"],
    rarity: "SSR",
  },
  {
    name: "Yan",
    art: "https://www.prydwen.gg/static/454270444acc923035517fbd3b71bbf4/60b4d/diesel_icon.webp",
    hp: 111,
    atk: 111,
    def: 111,
    weapon: "Rocket Launcher",
    class: "Support",
    manufacturer: "Tetra",
    element: "Fire",
    squad: "Talentum",
    position: "Burst 1",
    burstCD: "20",
    role: ["Buffer"],
    rarity: "SSR",
  },
  {
    name: "Belorta",
    art: "https://www.prydwen.gg/static/454270444acc923035517fbd3b71bbf4/60b4d/diesel_icon.webp",
    hp: 111,
    atk: 111,
    def: 111,
    weapon: "Rocket Launcher",
    class: "Attacker",
    manufacturer: "Tetra",
    element: "Electric",
    squad: "The Carronades",
    position: "Burst 2",
    burstCD: "20",
    role: ["DPS"],
    rarity: "SR",
  },
  {
    name: "Mica",
    art: "https://www.prydwen.gg/static/454270444acc923035517fbd3b71bbf4/60b4d/diesel_icon.webp",
    hp: 111,
    atk: 111,
    def: 111,
    weapon: "Rocket Launcher",
    class: "Support",
    manufacturer: "Tetra",
    element: "Electric",
    squad: "The Carronades",
    position: "Burst 1",
    burstCD: "20",
    role: ["Debuffer"],
    rarity: "SR",
  },
  {
    name: "Privaty",
    art: "https://www.prydwen.gg/static/454270444acc923035517fbd3b71bbf4/60b4d/diesel_icon.webp",
    hp: 111,
    atk: 111,
    def: 111,
    weapon: "Assault Rifle",
    class: "Attacker",
    manufacturer: "Elysion",
    element: "Water",
    squad: "Triangle",
    position: "Burst 3",
    burstCD: "40",
    role: ["DPS", "Buffer"],
    rarity: "SSR",
  },
  {
    name: "Admi",
    art: "https://www.prydwen.gg/static/454270444acc923035517fbd3b71bbf4/60b4d/diesel_icon.webp",
    hp: 111,
    atk: 111,
    def: 111,
    weapon: "Sniper",
    class: "Support",
    manufacturer: "Missilis",
    element: "Wind",
    squad: "Triangle",
    position: "Burst 2",
    burstCD: "20",
    role: ["Buffer"],
    rarity: "SSR",
  },
  {
    name: "Yulha",
    art: "https://www.prydwen.gg/static/454270444acc923035517fbd3b71bbf4/60b4d/diesel_icon.webp",
    hp: 111,
    atk: 111,
    def: 111,
    weapon: "Sniper",
    class: "Support",
    manufacturer: "Tetra",
    element: "Fire",
    squad: "Triangle",
    position: "Support 3",
    burstCD: "40",
    role: ["Buffer"],
    rarity: "SSR",
  },
  {
    name: "Alice",
    art: "https://www.prydwen.gg/static/454270444acc923035517fbd3b71bbf4/60b4d/diesel_icon.webp",
    hp: 111,
    atk: 111,
    def: 111,
    weapon: "Sniper",
    class: "Attacker",
    manufacturer: "Tetra",
    element: "Fire",
    squad: "Triangle",
    position: "support 3",
    burstCD: "40",
    role: ["DPS", "Buffer"],
    rarity: "SSR",
  },
  {
    name: "Neve",
    art: "https://www.prydwen.gg/static/454270444acc923035517fbd3b71bbf4/60b4d/diesel_icon.webp",
    hp: 111,
    atk: 111,
    def: 111,
    weapon: "Shotgun",
    class: "Attacker",
    manufacturer: "Tetra",
    element: "Water",
    squad: "Triangle",
    position: "Burst 3",
    burstCD: "40",
    role: ["DPS"],
    rarity: "SSR",
  },
  {
    name: "Ludmilla",
    art: "https://www.prydwen.gg/static/454270444acc923035517fbd3b71bbf4/60b4d/diesel_icon.webp",
    hp: 111,
    atk: 111,
    def: 111,
    weapon: "SMG",
    class: "Attacker",
    manufacturer: "Tetra",
    element: "Water",
    squad: "Triangle",
    position: "Burst 1",
    burstCD: "20",
    role: ["Debuffer", "Tank"],
    rarity: "SSR",
  },
  {
    name: "Yuni",
    art: "https://www.prydwen.gg/static/454270444acc923035517fbd3b71bbf4/60b4d/diesel_icon.webp",
    hp: 111,
    atk: 111,
    def: 111,
    weapon: "Rocket Launcher",
    class: "Defender",
    manufacturer: "Missilis",
    element: "Fire",
    squad: "Wardress",
    position: "Burst 2",
    burstCD: "20",
    role: ["Buffer", "Healer"],
    rarity: "SSR",
  },
  {
    name: "Mihara",
    art: "https://www.prydwen.gg/static/454270444acc923035517fbd3b71bbf4/60b4d/diesel_icon.webp",
    hp: 111,
    atk: 111,
    def: 111,
    weapon: "Assault Rifle",
    class: "Defender",
    manufacturer: "Missilis",
    element: "Water",
    squad: "Wardress",
    position: "Burst 3",
    burstCD: "40",
    role: ["DPS"],
    rarity: "SR",
  },
];
