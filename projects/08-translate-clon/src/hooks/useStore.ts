import { AUTO_LANGUAGE } from '../assets/lib/constants';
import { InitialStateType, ActionReducerType, FromLanguageType, LanguageType } from '../assets/lib/types'
import { useReducer } from 'react'

// 1. Creamos un estado inicial 
const initialState: InitialStateType = {
    fromLanguage: 'auto',
    toLanguage: 'en',
    fromText: '',
    resultText: '',
    loading: false,
};
  
  // 2. Creamos la función reducer --> Función en la que le damos la lógica a nuestro hook 
  const reducer: React.Reducer<InitialStateType, ActionReducerType> = (state, action): InitialStateType => {
    const {type} = action // Obtenemos el tipo de la acion 
  
    // Cambio interno de idioma
    if(type === 'INTERCHANGE_LANGUAGES') 
    {

      const loading = state.fromText !== ''

      if(state.fromLanguage === AUTO_LANGUAGE) return state

      return {
        ... state, 
        fromLanguage: state.toLanguage,
        toLanguage: state.fromLanguage, 
        fromText: state.resultText, 
        resultText: state.fromText,
        loading
      }
    }
  
    if(type === 'SET_FROM_LANGUAGE')
    {

      if(state.fromLanguage === action.payload) return state

      const loading = state.fromText !== ''

      return {
        ...state, 
        fromLanguage: action.payload, 
        resultText: '',
        loading
      }
    }
  
    if(type === 'SET_TO_LANGUAGE')
    {

      if(state.toLanguage === action.payload) return state

      const loading = state.fromText !== ''

      return {
       ...state, 
        toLanguage: action.payload, 
        resultText: '',
        loading
      }
    }
  
    if (type === 'SET_FROM_TEXT')
    {

      const loading = action.payload !== '';

      return {
       ...state, 
        fromText: action.payload,
        loading: loading,
        resultText: ''
      }
    }
  
    if(type === 'SET_RESULT_TEXT')
    {
      return {
        ...state, 
        resultText: action.payload,
        loading: false
      }
    }
  
    return state 
} 

export const useStore = () => {
  // 3. Usamos el hook useReducer. Usamos useReducer para poder trabajar con "un unico estado"
  // Ya que si hacemos las acciones por estados separados tendriamos unos 5 estados
//   const [{
//     fromLanguage,
//     toLanguage,
//     fromText,
//     resultText,
//     loading
//   }, dispatch] =  useReducer(reducer, initialState)

const [{
    fromLanguage,
    toLanguage,
    fromText,
    resultText,
    loading
}, dispatch] = useReducer<React.Reducer<InitialStateType, ActionReducerType>>(reducer, initialState);

const interchangeLanguages = () => {
    dispatch({ type: 'INTERCHANGE_LANGUAGES' })
}

const setFromLanguage = (payload: FromLanguageType) => {
    dispatch({ type: 'SET_FROM_LANGUAGE', payload })
}

const setToLanguage = (payload: LanguageType) => {
    dispatch({ type: 'SET_TO_LANGUAGE', payload })
}

const setFromText = (payload: string) => {
    dispatch({ type: 'SET_FROM_TEXT', payload })
}

const setResultText = (payload: string) => {
    dispatch({ type: 'SET_RESULT_TEXT', payload })
}

  return {
    fromLanguage, 
    toLanguage, 
    fromText, 
    resultText,
    loading,
    interchangeLanguages, 
    setFromLanguage,
    setToLanguage,
    setFromText,
    setResultText,
  }
}