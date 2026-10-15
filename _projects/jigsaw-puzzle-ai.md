---
title: Jigsaw Puzzle AI
summary: A mobile jigsaw game where players can turn any idea into a custom puzzle with AI image generation.
featured: true
order: 2
role: Project lead and sole programmer
team: Gaxos.ai
platform: Android · iOS
engine: Unity · C#
year: 2024
links:
  - label: Official site
    url: https://gamefoundry.ai/#games
youtube: FAHvGruWVbc
cover: /assets/img/projects/JigsawPuzzleAI/JigsawPuzzleAI_Cover.jpg
image: /assets/img/projects/JigsawPuzzleAI/JigsawPuzzleAI_Cover.jpg
gallery:
  - /assets/img/projects/JigsawPuzzleAI/1.jpg
  - /assets/img/projects/JigsawPuzzleAI/2.jpg
  - /assets/img/projects/JigsawPuzzleAI/3.jpg
  - /assets/img/projects/JigsawPuzzleAI/4.jpg
---

After shipping Space Striker AI, I led Jigsaw Puzzle AI as its only programmer, from the first prototype to its release on Android and iOS. Besides a library of ready-made pictures, players can describe anything they imagine and get a new puzzle generated for them.

## What I built

- **Puzzle core**: adapted an existing puzzle system to the game's needs and extended it with new gameplay features, such as hints and background customization.
- **Game modes**: several ways to play built on top of the same puzzle core.
- **AI puzzle generation** with Stability AI: sending the request, handling the wait and turning the generated image into a playable puzzle.
- **Accounts and wallets**: Google and Apple sign-in, plus MetaMask connection.
- **Save system** for players' progress.
- **Full game dressing**: integrated all the UI and art from the concept art team.
- **Backend integration**: implemented Gaxos' in-house frameworks for account linking, NFT minting, Stability AI calls and database access.