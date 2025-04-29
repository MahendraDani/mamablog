import {articles} from "#site/content"

export const getAllArticles = () => {
  // Create a new array with each article repeated three times
  const repeatedArticles = [
    ...articles,
    ...articles,
    ...articles
  ].sort(() => Math.random() - 0.5) // Randomly shuffle the array

  return repeatedArticles
}