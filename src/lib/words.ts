import { WORDS } from '../constants/wordlist'
import { VALIDGUESSES } from '../constants/validGuesses'
import { loadGameStateFromLocalStorage } from './localStorage'

export const isWordInWordList = (word: string) => {
  return (
    WORDS.includes(word.toLowerCase()) ||
    VALIDGUESSES.includes(word.toLowerCase())
  )
}

export const isWinningWord = (word: string) => {
  return solution === word
}

export const getWordOfDay = () => {
  const loaded = loadGameStateFromLocalStorage()

  if (!loaded) {
    const index = Math.floor(Math.random() * WORDS.length)

    return {
      solution: WORDS[index].toUpperCase(),
      solutionIndex: index,
    }
  } else {
    return {
      solution: loaded.solution,
      solutionIndex: WORDS.indexOf(loaded.solution.toLowerCase()),
    }
  }
}

export const { solution, solutionIndex } = getWordOfDay()
