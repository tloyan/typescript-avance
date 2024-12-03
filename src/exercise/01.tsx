"use client"
// Les opérateurs
// http://localhost:3000/alone/exercise/01.ts

// ❌ NE PAS MODIFIER
// Utilitaire ne faisant pas partie de l'exercice
import displayText, { App, init } from "../lib/exerciseHelper"
const exercice = () => {
  init()

  // ✔️ Début de l'exercice

  // 🐶 Créé un type User avec les propriétés suivantes :
  // username -> obligatoire
  // name -> obligatoire
  // verified -> boolean obligatoire
  // blocked -> boolean obligatoire
  // adress -> optionnel
  // sexe -> optionnel
  enum Gender {
    male = "male",
    female = "female",
  }

  type User = {
    username: string
    name: string
    verified: boolean
    blocked: boolean
    adress?: string
    gender?: Gender
  }

  const user1: User = {
    username: "wilston",
    name: "churchil",
    verified: true,
    blocked: false,
  }
  const user2: User = {
    username: "goerge",
    name: "churchil",
    verified: true,
    blocked: false,
    adress: "5 street gordon",
  }

  function isBlocked(user?: User) {
    return user?.blocked ?? false
  }

  function isVerified(user?: User) {
    return user?.verified ?? false
  }

  // 🐶 implétemente 'containAdress' avec les caracteristiques
  // - rends le paramètre 'user' optionnel et modifie le type 'any'
  function containAdress(user?: User) {
    return !!user?.adress
  }

  function throwAllUsersErrors(users: Array<User>): never {
    throw new Error(`${users.length}`)
  }
  // displayText(`${throwAllUsersErrors([user1, user2])}`)

  // ⛏️ décommente les lignes ci-dessous et vérifie que ca fonctionne correctement
  //
  displayText(`${user1.name} blocked ? ${isBlocked(user1)}`)
  displayText(`${user1.name} isVerified ? ${isVerified(user1)}`)
  displayText(`${user1.name} containAdress ? ${containAdress(user1)}`)

  displayText(`${user2.name} blocked ? ${isBlocked(user2)}`)
  displayText(`${user2.name} isVerified ? ${isVerified(user2)}`)
  displayText(`${user2.name} containAdress ? ${containAdress(user2)}`)
  /*
eslint
  @typescript-eslint/no-unused-vars: "off"
*/
}
export default () => <App exercice={exercice} />
