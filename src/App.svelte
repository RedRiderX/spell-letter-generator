<script>
  import { onMount } from "svelte";
  import { Sortable } from "@shopify/draggable";
  import rollDice from "./dice.js";

  const bagDistribition = Array(100);
  bagDistribition.fill('A', 0);
  bagDistribition.fill('B', 9);
  bagDistribition.fill('C', 11);
  bagDistribition.fill('D', 13);
  bagDistribition.fill('E', 17);
  bagDistribition.fill('F', 29);
  bagDistribition.fill('G', 32);
  bagDistribition.fill('H', 34);
  bagDistribition.fill('I', 36);
  bagDistribition.fill('J', 45);
  bagDistribition.fill('K', 46);
  bagDistribition.fill('L', 47);
  bagDistribition.fill('M', 51);
  bagDistribition.fill('N', 53);
  bagDistribition.fill('O', 59);
  bagDistribition.fill('P', 67);
  bagDistribition.fill('Q', 69);
  bagDistribition.fill('R', 70);
  bagDistribition.fill('S', 76);
  bagDistribition.fill('T', 80);
  bagDistribition.fill('U', 86);
  bagDistribition.fill('V', 90);
  bagDistribition.fill('W', 92);
  bagDistribition.fill('X', 94);
  bagDistribition.fill('Y', 95);
  bagDistribition.fill('Z', 97);
  bagDistribition.fill('§', 98);
  // console.log(bagDistribition);
  let bag = bagDistribition.slice();
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
        <button on:click={rollTiles}>Roll {diceToRoll}d6</button>
      </div>
      <div class="tiles tiles_pool">
        <div class="placeholder">Tiles Go Here</div>
        <div class="list list_pool draggable-container">
          {#each tiles as tile}
            <div class="tile">{tile}</div>
          {/each}
        </div>
      </div>
      <div class="tiles tiles_input">
        <div class="list_input__wrapper">
          <div class="list list_input draggable-container" />
          <div class="placeholder">Spell Goes Here</div>
          <div class="list_input__texture" />
        </div>
      </div>
      <!-- <button>Spell</button> -->
      <!-- <div class="spell-list">Found spells</div> -->
    </div>
  </div>
  <div class="copyright">
    Spell: The RPG is © 2015 Taylor Smith and Whimsy Machine Media. Developed by <a href="https://twitter.com/RedRiderX">Red</a>.
  </div>
</main>

<style>
  .app {
    background: #915c93;
    background: radial-gradient(
      circle,
      rgba(145, 92, 147, 1) 42%,
      rgba(69, 44, 70, 1) 100%
    );
    color: #fff;min-height: 100vh;
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
  button {
    padding: 0.5rem;
    /* font-size: 1.2rem; */
    text-transform: uppercase;
    margin: 0 1rem;
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
    display: flex;
    justify-content: center;
    min-height: 5rem;
  }
  .list_pool {
    position: relative;
    flex-flow: row wrap;
  }
  .list_input__wrapper {
    position: relative;
    flex: 0 1 17rem;
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
    position: relative;
    z-index: 2;
    /* flex: 0 1 10rem;
    background: #8923126e;
    box-shadow: -1px 0px 5px #00000063 inset;
    min-height: 5rem;
    padding: 0.5rem 1rem;
    margin: 1rem;
    filter: url(#wavy2); */
  }
  .list_input:global(.draggable-container--over) + .list_input__texture {
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
    top: calc(50% - 0.9rem);
    font-size: 1.5rem;
    text-align: center;
    left: 0;
    right: 0;
    font-family: "Fredericka the Great", serif;
    color: black;
    font-weight: bold;
  }
  .copyright {
    margin: 2rem 1rem;
  }
  .copyright a {
    color: white;
  }
</style>
