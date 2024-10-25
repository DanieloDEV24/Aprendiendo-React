import { Form } from "react-bootstrap"
import { ChangeTextAreaType } from "../assets/lib/types" 

const commonStyles = {height: '200px', border: 0 }
const getPlaceHolder = ({type, loading}: {type: 'from' | 'to', loading?: boolean}) => {
  if(type === 'from') return 'Introducir texto'
  if(loading) return 'Traducciendo...'
  return 'Traducción'
}

export const TextArea = ({type, loading, value, onChange}: ChangeTextAreaType) => {

  const textAreaStyles = (type === 'to') 
    ? { ...commonStyles, backgroundColor: '#f5f5f5' }
    : commonStyles 

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    onChange(event.target.value)
  }

    return (
        <Form.Control
            as = 'textarea'
            placeholder={getPlaceHolder({type, loading})}
            autoFocus={type === 'from' && true }
            style={textAreaStyles}
            value={value}
            disabled={(type === 'to')}
            onChange={handleChange}
          />
    )
}