import { Form } from "react-bootstrap"
import { AUTO_LANGUAGE, LANGUAGES } from "../assets/lib/constants"
import { LanguageType, ChangeSelectLanguageType } from "../assets/lib/types"

export const LanguageSelect = ({onChange, type, value}: ChangeSelectLanguageType) => {

    const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        onChange(event.target.value as LanguageType)
        console.log(type)
    }

    return (
        <Form.Select aria-label='Selecciona el idioma' onChange={handleChange} value={value}>
            {type === 'from' && <option value={AUTO_LANGUAGE}>Detectar Idioma</option>}
            {Object.entries(LANGUAGES).map(([key, value]) => {
                return (
                    <option key={key} value={key}>
                        {value}
                    </option>
                )
            })}
        </Form.Select>
    )
}