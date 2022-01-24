import { WORDS } from '../constants/wordlist'
import { VALIDGUESSES } from '../constants/validGuesses'

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

  const randomIndex = Math.floor(Math.random() * WORDS.length);

  return {
    solution: WORDS[randomIndex].toUpperCase(),
    solutionIndex: randomIndex,
  }
}

export const { solution, solutionIndex } = getWordOfDay()
