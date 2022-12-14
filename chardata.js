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
    id: "1",
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
    hp: 583734,
    atk: 25554,
    def: 3552,
    weapon: "Sniper",
    class: "Attacker",
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
  },
  {
    name: "Sugar",
    art: "https://www.prydwen.gg/static/c17575707266e86e2b0d0ad859cf0935/60b4d/sugar_icon.webp",
    hp: 583734,
    atk: 25554,
    def: 4012,
    weapon: "Shotgun",
    class: "Attacker",
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
  },
  {
    name: "Milk",
    art: "https://www.prydwen.gg/static/45082510523372d5af24eb1da2e2396e/60b4d/milk_icon.webp",
    hp: 583734,
    atk: 25554,
    def: 3552,
    weapon: "Sniper",
    class: "Support",
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
  },
  {
    name: "Frima",
    art: "https://www.prydwen.gg/static/729864516a6224f9fc9de1184ef877ae/60b4d/frima_icon.webp",
    hp: 647453,
    atk: 21307,
    def: 3909,
    weapon: "Sniper",
    class: "Support",
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
  },
  {
    name: "Crow",
    art: "https://www.prydwen.gg/static/59d66f236542b4887034173b70177dd3/60b4d/crow_icon.webp",
    hp: 711171,
    atk: 17059,
    def: 4364,
    weapon: "SMG",
    class: "Defender",
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
  },
  {
    name: "Maiden",
    art: "https://www.prydwen.gg/static/01b647fd49861b5305f7e0cb6fc63a09/60b4d/maiden_icon.webp",
    hp: 583734,
    atk: 25554,
    def: 4012,
    weapon: "Shotgun",
    class: "Attacker",
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
  },
  {
    name: "Guillotine",
    art: "https://www.prydwen.gg/static/849455f1237535750d6383f4831c1fdf/60b4d/guillotine_icon.webp",
    hp: 583734,
    atk: 25554,
    def: 3539,
    weapon: "Machine Gun",
    class: "Attacker",
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
  },
  {
    name: "Brid",
    art: "https://www.prydwen.gg/static/86155c25c213c48bbccb40cfbe917d1a/60b4d/brid_icon.webp",
    hp: 583734,
    atk: 25554,
    def: 4164,
    weapon: "Assault Rifle",
    class: "Attacker",
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
  },
  {
    name: "Diesel",
    art: "https://www.prydwen.gg/static/454270444acc923035517fbd3b71bbf4/60b4d/diesel_icon.webp",
    hp: 711171,
    atk: 17059,
    def: 4250,
    weapon: "Machine Gun",
    class: "Defender",
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
  },
  {
    name: "Soline",
    art: "https://www.prydwen.gg/static/f40e2fb9f7c3d325409635681e0f27d4/60b4d/soline_icon.webp",
    hp: 583734,
    atk: 25554,
    def: 3633,
    weapon: "SMG",
    class: "Support",
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
  },
  {
    name: "Harran",
    art: "https://www.prydwen.gg/static/b3721ed6c39084e9911745361fd6570e/60b4d/harran_icon.webp",
    hp: 583734,
    atk: 25554,
    def: 4164,
    weapon: "Sniper",
    class: "Attacker",
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
  },
  {
    name: "Noah",
    art: "https://www.prydwen.gg/static/e85af87106d388bae80e0fa4c9588990/60b4d/noah_icon.webp",
    hp: 711171,
    atk: 17059,
    def: 4900,
    weapon: "Rocket Launcher",
    class: "Defender",
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
  },
  {
    name: "Isabel",
    art: "https://www.prydwen.gg/static/c5ccac91278f7ff0fb62a1cfa094a25e/60b4d/isabel_icon.webp",
    hp: 583734,
    atk: 25554,
    def: 4012,
    weapon: "Machine Gun",
    class: "Attacker",
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
  },
  {
    name: "Ether",
    art: "https://www.prydwen.gg/static/2400afbfa211a1db536c906f2e0e262a/60b4d/ether_icon.webp",
    hp: 307886,
    atk: 8666,
    def: 2459,
    weapon: "Shotgun",
    class: "Defender",
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
  },
  {
    name: "Julia",
    art: "https://www.prydwen.gg/static/b525e1a3a88a0c68ee0c24ad192d6fb6/60b4d/julia_icon.webp",
    hp: 583734,
    atk: 25554,
    def: 4164,
    weapon: "Assault Rifle",
    class: "Attacker",
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
  },
  {
    name: "Drake",
    art: "https://www.prydwen.gg/static/dd41faf38ff5b9c0ad6603e720619a8f/60b4d/drake_icon.webp",
    hp: 583734,
    atk: 25554,
    def: 4012,
    weapon: "Shotgun",
    class: "Attacker",
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
  },
  {
    name: "Laplace",
    art: "https://www.prydwen.gg/static/bc5a8bc902adfb42b0c538a66159aa1b/60b4d/laplace_icon.webp",
    hp: 583374,
    atk: 25554,
    def: 4071,
    weapon: "Rocket Launcher",
    class: "Attacker",
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
  },
  {
    name: "Maxwell",
    art: "https://www.prydwen.gg/static/93d44190358ad0fcda38d6e6e107ec62/60b4d/maxwel_icon.webp",
    hp: 583734,
    atk: 25554,
    def: 3552,
    weapon: "Sniper",
    class: "Attacker",
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
  },
  {
    name: "Liter",
    art: "https://www.prydwen.gg/static/4815b31782020c75ad99d332d54f6323/60b4d/liter_icon.webp",
    hp: 647453,
    atk: 21307,
    def: 399,
    weapon: "SMG",
    class: "Support",
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
  },
  {
    name: "Centi",
    art: "https://www.prydwen.gg/static/83ed726ead71c91a8110740374597b27/60b4d/centi_icon.webp",
    hp: 71171,
    atk: 17059,
    def: 4908,
    weapon: "Rocket Launcher",
    class: "Defender",
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
  },
  {
    name: "Epinel",
    art: "https://www.prydwen.gg/static/b70ff5847ea161a4c7f01c5f20955c5c/60b4d/epinel_icon.webp",
    hp: 583734,
    atk: 25554,
    def: 3633,
    weapon: "SMG",
    class: "Attacker",
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
  },
  {
    name: "Folkwang",
    art: "https://www.prydwen.gg/static/49362e8159fb82e78410efd2a995d977/60b4d/folkwang_icon.webp",
    hp: 711171,
    atk: 15059,
    def: 5015,
    weapon: "Assault Rifle",
    class: "Defender",
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
  },
  {
    name: "Scarlet",
    art: "https://www.prydwen.gg/static/e6108076ecd772e101f22d77a2ee3eb6/60b4d/scarlet_icon.webp",
    hp: 583734,
    atk: 25554,
    def: 4164,
    weapon: "Assault Rifle",
    class: "Attacker",
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
  },
  {
    name: "Rapunzel",
    art: "https://www.prydwen.gg/static/b085d6638a870a21dfe81fa83915e074/60b4d/rapunzel_icon.webp",
    hp: 647453,
    atk: 21307,
    def: 4485,
    weapon: "Rocket Launcher",
    class: "Support",
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
  },
  {
    name: "Snow White",
    art: "https://www.prydwen.gg/static/cca848f0ed074359a9fe832a3f5855fc/60b4d/snow_icon.webp",
    hp: 583734,
    atk: 25554,
    def: 4164,
    weapon: "Assault Rifle",
    class: "Attacker",
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
  },
  {
    name: "Noise",
    art: "https://www.prydwen.gg/static/66ecab0a489a2ef6d3df2dccdcdb311c/60b4d/noise_icon.webp",
    hp: 647453,
    atk: 21307,
    def: 4485,
    weapon: "Rocket Launcher",
    class: "Support",
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
  },
  {
    name: "Aria",
    art: "https://www.prydwen.gg/static/861c597a1846bfea9d8bbd760dac0bbc/60b4d/aria_icon.webp",
    hp: 583734,
    atk: 25554,
    def: 3539,
    weapon: "Machine Gun",
    class: "Attacker",
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
  },
  {
    name: "Volume",
    art: "https://www.prydwen.gg/static/81322f18cac0b4e219372821f30f9a53/60b4d/volume_icon.webp",
    hp: 583734,
    atk: 25554,
    def: 3633,
    weapon: "SMG",
    class: "Attacker",
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
  },
  {
    name: "Novel",
    art: "https://www.prydwen.gg/static/2d768441d86a208971ae9a370a25c284/60b4d/novel_icon.webp",
    hp: 711171,
    atk: 17059,
    def: 4364,
    weapon: "SMG",
    class: "Defender",
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
  },
  {
    name: "Exia",
    art: "https://www.prydwen.gg/static/7e833e38b9b438f98af5940b06edc468/60b4d/exia_icon.webp",
    hp: 647453,
    atk: 21307,
    def: 3894,
    weapon: "Sniper",
    class: "Attacker",
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
  },
  {
    name: "N102",
    art: "https://www.prydwen.gg/static/510126b1c7ed2707ef5c0e0bb239652f/60b4d/n102_icon.webp",
    hp: 280314,
    atk: 10824,
    def: 2286,
    weapon: "Rocket Launcher",
    class: "Support",
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
    rarity: "SR",
  },
  {
    name: "Soldier OW",
    art: "https://www.prydwen.gg/static/c9f347f399b4bcd94a82f184abc7bed3/60b4d/soldierow_icon.webp",
    hp: 83463,
    atk: 2903,
    def: 499,
    weapon: "SMG",
    class: "Support",
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
  },
  {
    name: "Soldier EG",
    art: "https://www.prydwen.gg/static/5ab73c9dedfb2d26289c37d026f76ec5/60b4d/soldiereg_icon.webp",
    hp: 75117,
    atk: 3484,
    def: 522,
    weapon: "Assault Rifle",
    class: "Attacler",
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
  },
  {
    name: "Soldier FA",
    art: "https://www.prydwen.gg/static/bbdbbe6026210ec9425b7b583251246a/60b4d/soldierfa_icon.webp",
    hp: 91809,
    atk: 2322,
    def: 613,
    weapon: "Shotgun",
    class: "Defender",
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
  },
  {
    name: "Product 08",
    art: "https://www.prydwen.gg/static/e61659e7cd7a8be1b07fa00f15d8ed89/60b4d/product8_icon.webp",
    hp: 83463,
    atk: 2903,
    def: 487,
    weapon: "Sniper",
    class: "Supporter",
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
  },
  {
    name: "Product 12",
    art: "https://www.prydwen.gg/static/5d42c1727b76a56f510b49d7d3ec2b51/60b4d/product12_icon.webp",
    hp: 75117,
    atk: 3484,
    def: 437,
    weapon: "Machine Gun",
    class: "Supporter",
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
  },
  {
    name: "Product 23",
    art: "https://www.prydwen.gg/static/c653c3df3d78d755a275354ddec54863/60b4d/product23_icon.webp",
    hp: 83463,
    atk: 2903,
    def: 557,
    weapon: "Shotgun",
    class: "Supporter",
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
  },
  {
    name: "IDoll Flower",
    art: "https://www.prydwen.gg/static/70955e7d07f2ec2b28927f77fdcb88dc/60b4d/idollflower_icon.webp",
    hp: 91809,
    atk: 2322,
    def: 622,
    weapon: "Rocket Launcher",
    class: "Defender",
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
  },
  {
    name: "IDoll Ocean",
    art: "https://www.prydwen.gg/static/a39dfa345e904bc4a514db2cd8c05ffc/60b4d/idollocean_icon.webp",
    hp: 83463,
    atk: 2903,
    def: 499,
    weapon: "SMG",
    class: "Supporter",
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
  },
  {
    name: "IDoll Sun",
    art: "https://www.prydwen.gg/static/5d256b2db083da55c0c0ea2a469eff8e/60b4d/idollsun_icon.webp",
    hp: 83463,
    atk: 2903,
    def: 580,
    weapon: "Assault Rifle",
    class: "Supporter",
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
  },
  {
    name: "Signal",
    art: "https://www.prydwen.gg/static/f04d9c2af6296c9e996739ebf22ca9fd/60b4d/signal_icon.webp",
    hp: 583734,
    atk: 25554,
    def: 3633,
    weapon: "SMG",
    class: "Attacker",
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
  },
  {
    name: "Delta",
    art: "https://www.prydwen.gg/static/5d4be549107e1f2bdc8645873236b1d2/60b4d/delta_icon.webp",
    hp: 115704,
    atk: 3056,
    def: 1135,
    weapon: "Sniper",
    class: "Defender",
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
  },
  {
    name: "Pepper",
    art: "https://www.prydwen.gg/static/cbd0e67b95a58abe8037c9bfd17f0131/60b4d/pepper_icon.webp",
    hp: 647453,
    atk: 21307,
    def: 4420,
    weapon: "Shotgun",
    class: "Support",
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
  },
  {
    name: "Mary",
    art: "https://www.prydwen.gg/static/f38af9ba124203b6cabd74aca4d7b641/60b4d/mary_icon.webp",
    hp: 647453,
    atk: 21307,
    def: 4420,
    weapon: "Shotgun",
    class: "Support",
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
  },
  {
    name: "Dolla",
    art: "https://www.prydwen.gg/static/9cffd71ed16bbf20fc1b3b542a74e6c8/60b4d/dolla_icon.webp",
    hp: 647453,
    atk: 21307,
    def: 3909,
    weapon: "Sniper",
    class: "Support",
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
  },
  {
    name: "Rupee",
    art: "https://www.prydwen.gg/static/0e9381f58b59d3c94d460a1791c043c6/60b4d/rupee_icon.webp",
    hp: 583734,
    atk: 25554,
    def: 4164,
    weapon: "Assault Rifle",
    class: "Attacker",
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
  },
  {
    name: "Yan",
    art: "https://www.prydwen.gg/static/ccd68d306d780f31e1d123084682e78c/60b4d/yan_icon.webp",
    hp: 647453,
    atk: 21307,
    def: 4485,
    weapon: "Rocket Launcher",
    class: "Support",
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
  },
  {
    name: "Belorta",
    art: "https://www.prydwen.gg/static/2c3e11d8965e60db68a48979116be85d/60b4d/belorta_icon.webp",
    hp: 252742,
    atk: 12982,
    def: 2075,
    weapon: "Rocket Launcher",
    class: "Attacker",
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
  },
  {
    name: "Mica",
    art: "https://www.prydwen.gg/static/7a879aa0592ed4069531141b3966cd42/60b4d/mica_icon.webp",
    hp: 280314,
    atk: 10824,
    def: 2286,
    weapon: "Rocket Launcher",
    class: "Support",
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
  },
  {
    name: "Privaty",
    art: "https://www.prydwen.gg/static/ccf228c26b60cd74e6f8bce05c3ddcf8/60b4d/privaty_icon.webp",
    hp: 583734,
    atk: 25554,
    def: 4164,
    weapon: "Assault Rifle",
    class: "Attacker",
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
  },
  {
    name: "Admi",
    art: "https://www.prydwen.gg/static/066da55baf64a2c7c11a3958c6b5d193/60b4d/admi_icon.webp",
    hp: 647453,
    atk: 21307,
    def: 3909,
    weapon: "Sniper",
    class: "Support",
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
  },
  {
    name: "Yulha",
    art: "https://www.prydwen.gg/static/93bc2b0c26e88b113d089c29029cf55a/60b4d/yulha_icon.webp",
    hp: 583374,
    atk: 25554,
    def: 3552,
    weapon: "Sniper",
    class: "Support",
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
  },
  {
    name: "Alice",
    art: "https://www.prydwen.gg/static/94d01c6fd76e93454b34b6f0b134ba5d/60b4d/alice_icon.webp",
    hp: 583734,
    atk: 25554,
    def: 3552,
    weapon: "Sniper",
    class: "Attacker",
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
  },
  {
    name: "Neve",
    art: "https://www.prydwen.gg/static/acd5bf7574a448024d18d8befd09f102/60b4d/neve_icon.webp",
    hp: 252242,
    atk: 12982,
    def: 2045,
    weapon: "Shotgun",
    class: "Attacker",
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
  },
  {
    name: "Ludmilla",
    art: "https://www.prydwen.gg/static/c5b9e181547151fd7038cd83ba35f3fd/60b4d/ludmilla_icon.webp",
    hp: 711171,
    atk: 17059,
    def: 4364,
    weapon: "SMG",
    class: "Attacker",
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
  },
  {
    name: "Yuni",
    art: "https://www.prydwen.gg/static/b41b08676389e7e30afde35da7193eb8/60b4d/yuni_icon.webp",
    hp: 711171,
    atk: 17059,
    def: 4900,
    weapon: "Rocket Launcher",
    class: "Defender",
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
  },
  {
    name: "Mihara",
    art: "https://www.prydwen.gg/static/4a87cee6c31ef9a5d0508212831cc340/60b4d/mihara_icon.webp",
    hp: 252742,
    atk: 12982,
    def: 2122,
    weapon: "Assault Rifle",
    class: "Defender",
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
  },
];
