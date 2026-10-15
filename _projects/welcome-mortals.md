---
title: Welcome Mortals
summary: A PC tower defense where the enemy path is generated procedurally and changes as new rooms unlock.
featured: true
order: 1
role: Gameplay programmer
team: 5 people<br>2 programmers
platform: PC
engine: Unity · C#
year: 2024–2025
nda: true
cover: /assets/img/projects/WelcomeMortals/WelcomeMortals_Cover.jpg
image: /assets/img/projects/WelcomeMortals/WelcomeMortals_Cover.jpg
---

Each run starts with a house that has one unlocked room and several locked ones. As rooms unlock and connect, the enemies' path updates and opens alternative routes, which raises the difficulty. Defeated enemies drop souls, and the player spends them on spirits: upgrades that grant buffs, new units and special abilities.

## What I built

- **Procedural enemy path**: generated each run's path with a BFS-based algorithm and custom connection rules, so every layout matched what the game designer intended, and recalculated the routes whenever a new room joined the house.
- **Turret systems**: base prefabs and variants, purchasing and placement, enemy detection, attacks and special abilities.
- **Upgrade system (spirits)**: passive abilities, perks and level-based skills.
- **Auto-tiled rug**: each rug tile picks its texture from an atlas based on its connections, so any procedurally generated path looks hand-made.
- **Camera-aware LOD**: when the player focuses on a turret or an enemy and the isometric camera changes perspective, the LOD level switches by code so walls never block the view of the target.
- **Inventory**, **dialogue and message system**, and **audio system**.
- **UI implementation** with responsive layouts.
- **Systems documentation** for the rest of the team.

## Challenge

**Making a random path feel designed.** The enemy path had to change every run, but still follow the game designer's rules for how rooms connect. I generated it with BFS plus those rules, and then drew it on the floor with a rug that picks the right tile (straight, corner, junction or end) from a texture atlas, so the path always reads clearly to the player.