---
title: Barrier Pattern
summary: A lightweight Unity tool to synchronize gameplay systems and control execution flow.
featured: true
order: 5
role: Author
platform: Unity Asset Store
engine: Unity · C#
year: 2026
links:
  - label: Unity Asset Store
    url: https://assetstore.unity.com/packages/tools/utilities/barrier-pattern-363232
cover: /assets/img/projects/BarrierPattern_Cover.jpg
image: /assets/img/projects/BarrierPattern_Cover.jpg
---

My first tool published on the Unity Asset Store. It comes from a design pattern I'm using in my next mobile game.

## Why I made it

In several projects, different systems had to finish before the game could continue: scene startup, UI transitions, gameplay sequences. These were usually handled with flags, counters or chained coroutines, which get harder to maintain as complexity grows.

## Design

- **Minimal API** with a clear execution model.
- **Flexible integration**: systems can signal completion from update loops, coroutines, async tasks or custom logic.
- **No constraints** on the project's architecture.

## Use cases

- Scene startup pipelines
- UI and transition flows
- Gameplay event coordination
- Spawn and wave systems
