// ** ----------------------- TIPADO ------------------------ ** //
// ** Este archivo contiene el tipado ts que usamos en la app ** //
// ** ------------------------------------------------------- ** //
import { LANGUAGES, AUTO_LANGUAGE } from "./constants";

export type InitialStateType = {
    fromLanguage: FromLanguageType;
    toLanguage: LanguageType;
    fromText: string;
    resultText: string;
    loading: boolean;
}

export type ActionReducerType = 
 | { type: 'INTERCHANGE_LANGUAGES' }
 | { type: 'SET_FROM_LANGUAGE', payload: FromLanguageType }
 | { type: 'SET_TO_LANGUAGE', payload: LanguageType }
 | { type: 'SET_FROM_TEXT', payload: string }
 | { type: 'SET_RESULT_TEXT', payload: string }

export type LanguageType = keyof typeof LANGUAGES
export type AutoLanguageType =  typeof AUTO_LANGUAGE
export type FromLanguageType = LanguageType | AutoLanguageType

export type ChangeSelectLanguageType = 
| { type: 'from', value: FromLanguageType, onChange: (lang: FromLanguageType) => void }
| { type: 'to', value: LanguageType, onChange: (lang:LanguageType) => void}

export type ChangeTextAreaType = 
| {type: 'from', loading?: undefined, value: string, onChange: (value: string) => void }
| {type: 'to', loading?: boolean, value: string, onChange: (value: string) => void}