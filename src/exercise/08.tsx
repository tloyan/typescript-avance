"use client"
// Unknown props
// http://localhost:3000/alone/exercise/04.ts

// ❌ NE PAS MODIFIER
// Utilitaire ne faisant pas partie de l'exercice
import displayText, { App, init } from "../lib/exerciseHelper"
const exercice = () => {
  init()

  // ✔️ Début de l'exercice

  // 🐶 Modifie la classe Game en la simplifiant avec les racourcis
  class Game {
    constructor(
      // 🐶 ajoute la visibilité public
      public title: string,
      public category: string,
      public readonly price: number,
      protected pegi: string,
      public studio: string,
      private hardware: string[]
    ) {}
    isPC() {
      return this.hardware.includes("PC")
    }
    getDiscount(d: number) {
      return this.price * d
    }
  }

  const fifa = new Game("Fifa", "", 79.9, "", "", ["PC", "PS5", "XBOX"])
  displayText(
    `Le jeu : ${fifa.title} est compatible pc ? ${fifa.isPC() ? " oui" : "non"}`
  )
  const mario = new Game("Mario", "", 59.9, "", "", ["Wii"])
  displayText(
    `Le jeu : ${mario.title} est compatible pc ? ${
      mario.isPC() ? " oui" : "non"
    }`
  )

  class IphoneGame extends Game {
    constructor(
      public title: string,
      public readonly price: number,
      public esrb: string
    ) {
      super(title, "Mobile", price, esrb.includes("AO") ? "PEGI18" : "", "", [
        "IOS",
      ])
    }

    isAdult() {
      return this.pegi === "PEGI18" ? "oui" : "non"
    }
  }
  const adultGame = new IphoneGame("GTA6", 79.9, "AO")

  displayText(
    `Le jeu : ${adultGame.title} est pour adulte ? ${
      adultGame.isAdult() ? " oui" : "non"
    }`
  )

  // mario.hardware.push("PC")

  // displayText(
  //   `Le jeu : ${mario.title} est compatible pc ? ${
  //     mario.isPC() ? " oui" : "non"
  //   }`
  // )

  /*eslint
  @typescript-eslint/no-unused-vars: "off"
*/
}
export default () => <App exercice={exercice} />
