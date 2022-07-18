import styled from '@emotion/styled'
import SearchIcon from '@mui/icons-material/Search';
import { Input } from '@mui/material'

const SearchContainer = styled.div`
    border: 1px solid lightgray;
    display: flex;
    align-items: center;
    padding: 10px;
    width: 50%;
`

const Search = () => {
  return (
    <SearchContainer>
      <SearchIcon/>
      <Input disableUnderline sx={{mx: 2}} placeholder="Search"/>
    </SearchContainer>
  )
}

export default Search