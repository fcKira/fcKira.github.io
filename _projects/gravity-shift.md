---
title: Gravity Shift
summary: An arcade space game where planetary gravity is your steering wheel.
featured: true
order: 4
role: Solo developer
team: Pick Up Games (my indie label)
platform: Android
engine: Unity · C#
year: 2026
links:
  - label: Google Play
    url: https://play.google.com/store/apps/details?id=com.pickupgames.gravityshift
  - label: Pick Up Games
    url: https://pickupgames.github.io/
youtube: xUxBS4uVPqE
cover: /assets/img/projects/GravityShift/GravityShift_Cover.jpg
image: /assets/img/projects/GravityShift/GravityShift_Cover.jpg
gallery:
  - /assets/img/projects/GravityShift/1.webp
  - /assets/img/projects/GravityShift/2.webp
  - /assets/img/projects/GravityShift/3.webp
  - /assets/img/projects/GravityShift/4.webp
---

Your ship flies at a constant speed. You can boost and tilt, but the real steering comes from the pull of nearby planets: get too close and you crash, drift too far and you're lost. Every level is a short puzzle in motion.

I designed and built it on my own, and used it to learn the full cycle of shipping and running a mobile game.

## What I built

### Gameplay

- **Real-time gravity navigation**: the ship's trajectory bends around each planet's pull while the player keeps control.
- **Handcrafted levels** with gadgets chosen before launch and unlockable ship skins.
- **Medal progression per stage**: the collectibles a player picks up upgrade the level's medal, up to the one for 100% completion, which gives players a reason to replay.
- **Story stages** with a dialogue system.
- **Persistent save system** for progress and player settings, stored on disk.

### Shipping and live ops

- **Custom build menu in the Unity Editor**: one-click options for a development .apk (quick on-device testing), a testing .aab and a production .aab, each applying the right Player Settings automatically instead of by hand for every build.
- **Separate environments** for development and production, so ads only run in production builds.
- **Google Analytics** events to understand how players progress through the levels.
- **Ads with mediation** (Unity Ads and AdMob), including a reward that reveals the path after three game overs.