import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent
} from '@mui/material'

export const AVAILABLE_GENERATION = Array.from(Array(100), (_, i) =>
  (i + 1).toString()
)

interface IDropdownProps {
  generation: string
  updateGeneration: (event: SelectChangeEvent) => void
}

const Dropdown = ({ generation, updateGeneration }: IDropdownProps) => {
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
          {AVAILABLE_GENERATION.map((genId) => {
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
