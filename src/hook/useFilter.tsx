import { useState } from "react"
export const useFilter = () => {
  const [filterState, setFilterState] = useState<string>('all')
  const handleFilter = (filter : string) => {
    setFilterState(filter)
  }
  return{
    filterState, handleFilter
  }
}