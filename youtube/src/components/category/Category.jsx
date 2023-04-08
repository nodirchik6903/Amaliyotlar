import { Stack } from '@mui/material'
import {category} from "../constants/index"
import { colors } from "../constants/color"

const Category = ({selectedCategoryHandler,selectedCategory}) => {
  return (
    <Stack direction={"row"} sx={{overflowX: "scroll"}} width={"100%"}>
        {category.map(item => (
            <button key={item.name} className="category-btn" style={{border:"none",background: item.name === selectedCategory && colors.secondary,
            color: item.name === selectedCategory &&  "#fff"}} onClick={() => selectedCategoryHandler(item.name)}>
                <span style={{color:item.name === selectedCategory ? "#fff" : colors.secondary, marginRight:"15px"}}>{item.icon}</span>
                <span style={{opacity:1}}>{item.name}</span>
            </button>
        ))}
    </Stack>
  )
}

export default Category