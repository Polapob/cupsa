import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent
} from '@mui/material'

interface IDropdownProps {
  generation: string
  generationLists: string[]
  updateGeneration: (event: SelectChangeEvent) => void
}

const Dropdown = ({
  generation,
  generationLists,
  updateGeneration
}: IDropdownProps) => {
  return (
    <div>
      <FormControl sx={{ width: '100%' }}>
        <InputLabel id="demo-simple-select-helper-label">
          รุ่นของเพื่อน
        </InputLabel>
        <Select
          labelId="demo-simple-select-helper-label"
          id="demo-simple-select-helper"
          value={generation}
          label="รุ่นของเพื่อน"
          onChange={updateGeneration}
          sx={{ backgroundColor: '#F3F3F3' }}
        >
          {generationLists.map((genId) => {
            return (
              <MenuItem value={genId} key={genId}>
                {genId}
              </MenuItem>
            )
          })}
        </Select>
      </FormControl>
    </div>
  )
}

export default Dropdown
