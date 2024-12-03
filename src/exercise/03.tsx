"use client"
// Discriminated union & Narrowing
// http://localhost:3000/alone/exercise/01.ts

// ❌ NE PAS MODIFIER
// Utilitaire ne faisant pas partie de l'exercice
import displayText, { App, init } from "../lib/exerciseHelper"
const exercice = () => {
  init()

  // ✔️ Début de l'exercice
  type JavaDev = {
    langage: "JAVA"
    framework: string[]
    javaTools: string
  }

  type JSDev = {
    langage: "JAVASCRIPT"
    framework: string[]
    jsTools: string
  }

  type PHPDev = {
    langage: "PHP"
    framework: string[]
    phpTools: string
  }

  type BlockChainDev = {
    langage: string
    framework: string[]
    cryptoBlockChain: string
  }
  type Developper = JavaDev | JSDev | PHPDev | BlockChainDev

  function helloDeveloppeur(dev: Developper) {
    if ("cryptoBlockChain" in dev)
      return `Hello developpeur Blockchain ${dev.cryptoBlockChain}`
    switch (dev.langage) {
      case "JAVA":
        return "Hello developpeur Java"
      case "JAVASCRIPT":
        return "Hello developpeur JavaScript"
      case "PHP":
        return "Hello developpeur PHP"
      default:
        throw new Error("Unexpected value. Should have been never.")
    }
  }

  // 🐶 créé 3 devs (devJava, devJs, devPHP)
  const devJava: JavaDev = {
    langage: "JAVA",
    framework: ["spring"],
    javaTools: "spring",
  }

  const devJs: JSDev = {
    langage: "JAVASCRIPT",
    framework: ["React"],
    jsTools: "webpack",
  }

  const devPhp: PHPDev = {
    langage: "PHP",
    framework: ["Laravel"],
    phpTools: "none",
  }

  const ethDev: BlockChainDev = {
    langage: "JAVASCRIPT",
    framework: ["React", "Solidity"],
    cryptoBlockChain: "ETH",
  }
  displayText(`${helloDeveloppeur(devJava)}`) // Hello normal developpeur
  displayText(`${helloDeveloppeur(ethDev)}`)

  // ⛏️ décommente
  displayText(`${helloDeveloppeur(devJava)}`)
  displayText(`${helloDeveloppeur(devJs)}`)
  displayText(`${helloDeveloppeur(devPhp)}`)

  /*eslint
  @typescript-eslint/no-unused-vars: "off"
*/
}
export default () => <App exercice={exercice} />
