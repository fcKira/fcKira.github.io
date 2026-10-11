---
title: Welcome Mortals
summary: A PC tower defense where the enemy path is generated procedurally and changes as new rooms unlock.
featured: true
order: 1
role: Gameplay programmer
team: 5 people · 2 programmers
platform: PC
engine: Unity · C#
year: 2024–2025
nda: true
# cover: /assets/img/projects/welcome-mortals.png
# image: /assets/img/projects/welcome-mortals.png
---

Each run starts with a house that has one unlocked room and several locked ones. As rooms unlock and connect, the enemies' path updates and opens alternative routes, which raises the difficulty. Defeated enemies drop souls, and the player spends them on spirits: upgrades that grant buffs, new units and special abilities.

## What I built

- **Turret systems**: base prefabs and variants, purchasing and placement, enemy detection, attacks and special abilities.
- **Pathfinding** that recalculates enemy routes whenever a new room connects to the house.
- **Upgrade system (spirits)**: passive abilities, perks and level-based skills.
- **Inventory**, **dialogue and message system**, and **audio system**.
- **UI implementation** with responsive layouts.
- **LOD adjustments** based on the camera state.
- **Dynamic rug texture** that redraws to match the house path of the current run.
- **Systems documentation** for the rest of the team.
