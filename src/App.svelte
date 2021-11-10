<script>
  import { onMount } from "svelte";
  import { Sortable } from "@shopify/draggable";
  import rollDice from "./dice.js";

  const bagDistribution = Array(108);
  bagDistribution.fill("A", 0);
  bagDistribution.fill("B", 7);
  bagDistribution.fill("C", 10);
  bagDistribution.fill("D", 14);
  bagDistribution.fill("E", 19);
  bagDistribution.fill("F", 27);
  bagDistribution.fill("G", 30);
  bagDistribution.fill("H", 33);
  bagDistribution.fill("I", 38);
  bagDistribution.fill("J", 44);
  bagDistribution.fill("K", 46);
  bagDistribution.fill("L", 48);
  bagDistribution.fill("M", 53);
  bagDistribution.fill("N", 57);
  bagDistribution.fill("O", 62);
  bagDistribution.fill("P", 65);
  bagDistribution.fill("Q", 68);
  bagDistribution.fill("R", 70);
  bagDistribution.fill("S", 75);
  bagDistribution.fill("T", 80);
  bagDistribution.fill("U", 88);
  bagDistribution.fill("V", 92);
  bagDistribution.fill("W", 94);
  bagDistribution.fill("X", 98);
  bagDistribution.fill("Y", 100);
  bagDistribution.fill("Z", 103);
  bagDistribution.fill("§", 105);
  // console.log(bagDistribition);
  let bag = bagDistribution.slice();
  let tiles = [];
  let diceToRoll = 1;

  onMount(() => {
    const sortable = new Sortable(document.querySelectorAll(".list"), {
      draggable: ".tile",
    });
  });

  function rollTiles() {
    let numTiles = rollDice(diceToRoll);
    drawTiles(numTiles);
  }

  function drawTiles(numTiles) {
    for (let index = 0; index < numTiles; index++) {
      tiles.push(bag.splice(Math.floor(Math.random() * bag.length), 1)[0]);
    }
    tiles = tiles;
    // console.log(bag);
  }
</script>

<main class="app">
  <div class="wrapper">
    <div class="texture" />
    <div class="content">
      <div class="header">
        <h1>
          <img src="logo.svg" alt="Spell: The RPG" class="logo" />
          <span>Tile Generator</span>
        </h1>
      </div>
      <div class="options">
        <label for="diceToRoll">Dice</label>
        <input
          type="range"
          class="diceToRoll"
          name="diceToRoll"
          bind:value={diceToRoll}
          min="1"
          max="4"
        />
        <button class="rollButton" on:click={rollTiles}
          >Roll {diceToRoll}d6</button
        >
      </div>
      <div class="tiles tiles_pool">
        <div class="placeholder">
          <img src="roll-flourish.svg" alt="" class="flourish" /><span
            >Roll Tiles</span
          ><img src="roll-flourish.svg" alt="" class="flourish flourish_flip" />
        </div>
        <div class="list list_pool draggable-container">
          {#each tiles as tile}
            <div class="tile">{tile}</div>
          {/each}
        </div>
      </div>
      <div class="tiles tiles_input">
        <div class="list_input__wrapper">
          <div class="list list_input draggable-container" />
          <div class="placeholder">
            <img src="spell-flourish.svg" alt="" class="flourish" /><span
              >Drag Them Here</span
            ><img
              src="spell-flourish.svg"
              alt=""
              class="flourish flourish_flip"
            />
          </div>
          <div class="list_input__texture" />
        </div>
      </div>
      <!-- <button>Spell</button> -->
      <!-- <div class="spell-list">Found spells</div> -->
    </div>
  </div>
  <div class="copyright">
    Spell: The RPG is © 2015 Taylor Smith and <a
      href="https://whimsymachinegames.com/"
      ><img
        src="whimsy-machine-logo.svg"
        alt="Whimsy Machine Media"
        class="logo_wm"
      /></a
    >
    &bull; Developed by <a href="https://twitter.com/RedRiderX">Red</a>
  </div>
</main>

<svg width="0px" height="0px" style="display: block;">
  <filter id="wavy2">
    <feTurbulence
      x="0"
      y="0"
      baseFrequency="0.02"
      numOctaves="5"
      seed={Date.now().toString().slice(-5)}
    />
    <feDisplacementMap in="SourceGraphic" scale="20" />
  </filter>
</svg>

<style>
  .app {
    background: radial-gradient(
      closest-side,
      rgb(145, 92, 147) -18%,
      rgb(69, 44, 70) 97%
    );
    color: #fff;
    min-height: 100vh;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-flow: column;
  }
  .wrapper {
    color: #5c3a15;
    width: 35rem;
    position: relative;
  }
  .texture {
    position: absolute;
    display: flex;
    width: 100%;
    padding: 2rem;
    top: 0%;
    left: 50%;
    transform: translate(-50%, 0);
    bottom: 0;
    /* background: #f5cdbc; */
    background: linear-gradient(
      189deg,
      rgba(245, 205, 188, 1) 42%,
      rgba(252, 231, 204, 1) 100%
    );
    filter: url(#wavy2);
    border: 3px solid #d09594;
    opacity: 0.9;
    box-shadow: 0px 0px 26px #d09594 inset;
  }
  .content {
    position: relative;

    padding: 2rem;
    text-align: center;
  }
  .options {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 1rem;
  }
  label {
    font-weight: bold;
    margin: 0 1rem;
    font-size: 1.4rem;
    line-height: 1.6rem;
    padding-bottom: 0.2rem;
  }
  .rollButton {
    padding: 0.5rem;
    /* font-size: 1.2rem; */
    text-transform: uppercase;
    margin: 0 1rem;
    border-radius: 7px;
    background: #cb566e;
    color: white;
    border: 1px solid #7e3544;
  }
  .rollButton:hover,
  .rollButton:active {
    background: #f48796;
  }
  .logo {
    display: inline-block;
    width: 12rem;
    vertical-align: middle;
  }
  .tiles_pool {
    position: relative;
  }
  .tiles_input {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .list {
    position: relative;
    z-index: 3;
    display: flex;
    justify-content: center;
    min-height: 5rem;
  }
  .list_pool {
    flex-flow: row wrap;
  }
  .list_input__wrapper {
    position: relative;
    flex: 0 1 23rem;
    /* background: #8923126e;
    box-shadow: -1px 0px 5px #00000063 inset; */
    min-height: 5rem;
    padding: 0.5rem 1rem 0.25rem;
    margin: 1rem;
  }
  .list_input__texture {
    position: absolute;
    display: flex;
    width: 100%;
    padding: 2rem;
    top: 0%;
    left: 50%;
    transform: translate(-50%, 0);
    bottom: 0;
    transition: background ease-in 0.3s;
    background: #8923126e;
    box-shadow: -1px 0px 5px #00000063 inset;
    filter: url(#wavy2);
    z-index: 1;
  }

  .list_input {
    /* flex: 0 1 10rem;
    background: #8923126e;
    box-shadow: -1px 0px 5px #00000063 inset;
    min-height: 5rem;
    padding: 0.5rem 1rem;
    margin: 1rem;
    filter: url(#wavy2); */
  }
  .list_input:global(.draggable-container--over) ~ .list_input__texture {
    background: #e47a8b;
  }
  .tile {
    font-family: "Fredericka the Great", serif;
    width: 3rem;
    height: 3rem;
    line-height: 3rem;
    margin: 1rem 0.5rem;
    background: white;
    font-size: 2.5rem;
    border-radius: 5px;
    background: #ecd99f;
    box-shadow: 1px 2px 2px #0003, 1px 2px 3px #ffffff78 inset;
    user-select: none;
  }
  .placeholder {
    position: absolute;
    z-index: 2;
    top: calc(50% - 0.9rem);
    font-size: 1.7rem;
    text-align: center;
    left: 0;
    right: 0;
    font-family: "Fredericka the Great", serif;
    color: black;
    font-weight: bold;
    user-select: none;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .placeholder span {
    margin: 0 0.3rem;
  }
  .flourish {
    width: 3rem;
  }
  .flourish_flip {
    transform: scaleX(-1);
  }
  .tiles_pool .placeholder {
    align-items: baseline;
    margin-top: -0.6rem;
  }
  .tiles_pool .placeholder span {
    margin: 0 -0.2rem;
  }
  .tiles_pool .flourish {
    width: 2rem;
  }
  .copyright {
    margin: 2rem 1rem;
    width: 100%;
    text-align: center;
  }
  .copyright a {
    color: white;
  }
  .logo_wm {
    display: inline-block;
    max-width: 5rem;
    vertical-align: middle;
  }
</style>
