import {useMemo} from "react";

const useSortedCards = (cards, sort) => {
	const sortedCards = useMemo(() => {
		switch (sort) {
			case false:
				return cards
			case 'priceIncrease':
				const sorting = 'price'
				return [...cards].sort((a, b) => a[sorting] - b[sorting])
			case 'title':
				return [...cards].sort((a, b) => a[sort].localeCompare(b[sort]))
			default:
				return [...cards].sort((a, b) => b[sort] - a[sort])
		}
	}, [sort, cards])
	return sortedCards
}

const useSearchCards = (cards, sort, query) => {
	const sortedCards = useSortedCards(cards, sort)
	const sortedAndSearchCards = useMemo(() => {
		return sortedCards.filter(card => card.title.toLowerCase().includes(query.toLowerCase()))
	}, [sortedCards, query])
	return sortedAndSearchCards
}

export const useCards = (cards, sort, query, minPrice, maxPrice) => {
	const sortedAndSearchCards = useSearchCards(cards, sort, query)
	const filterByPrice = useMemo(() => {
		if (!maxPrice) {
			return sortedAndSearchCards.filter(el => (el.price >= minPrice))
		} else {
			return sortedAndSearchCards.filter(el => (el.price >= minPrice && el.price <= maxPrice))
		}
	}, [maxPrice, minPrice, sortedAndSearchCards])
	return filterByPrice
}