import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Container, Row, Col, Button, Stack } from 'react-bootstrap';
import { useDebounce } from './hooks/useDebounce';
import { useStore } from './hooks/useStore'
import { AUTO_LANGUAGE } from './assets/lib/constants';
import { LanguageSelect } from './components/LanguageSelect';
import { TextArea } from './components/TextArea';
import { useEffect } from'react';
import { translate } from './services/translate';
function App() {
  const { fromLanguage, toLanguage, fromText, resultText, loading, interchangeLanguages, setFromLanguage, setToLanguage, setFromText, setResultText } = useStore();

  const debouncedFromText = useDebounce(fromText)

  useEffect(() => {
    if(debouncedFromText === '') return

    translate({fromLanguage, toLanguage, text: debouncedFromText})
     .then((response) => {
        if(response === null || response === undefined) return 
        setResultText(response)
      })
      .catch((error) => {
        console.error('Error:', error);
        setResultText('Error al traducir');
      });


  }, [debouncedFromText, toLanguage, fromLanguage])

  const handleClipboard = () => {
    navigator.clipboard.writeText(resultText)
  }

  const handleSpeak = () => {
    const speech = new SpeechSynthesisUtterance(resultText);
    speech.lang = toLanguage;
    speechSynthesis.speak(speech);
  }

  return (
    <Container fluid>
      <h1>DanieloDEV24 Translate</h1>

      <Row>
        <Col xs='auto'>
          <Stack gap={2}>
          <LanguageSelect 
          type='from'
          value={fromLanguage}
          onChange={setFromLanguage} 
          />
          <TextArea
            value={fromText}
            onChange={setFromText}
            type='from'
          />
          {fromLanguage}
          </Stack>
        </Col>


        <Col xs='auto'>
          <Button variant='link' onClick={interchangeLanguages} disabled={fromLanguage === AUTO_LANGUAGE}>
            <svg focusable="false" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
              <path d="M6.99 11L3 15l3.99 4v-3H14v-2H6.99v-3zM21 9l-3.99-4v3H10v2h7.01v3L21 9z"></path>
            </svg>
          </Button>
        </Col>


        <Col xs='auto'>
            <Stack gap={2}>
            <LanguageSelect 
          type='to'
          value={toLanguage}
          onChange={setToLanguage}
        />
          <div style={{position: 'relative'}}>
          <TextArea
            value={resultText}
            onChange={setResultText}
           type='to'
           loading={loading}
          />
          <div style={{position: 'absolute', left: 0, bottom: 0}}>
          <Button variant='link' onClick={handleClipboard}>
          <svg focusable="false" xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="24" viewBox="0 0 24 24" width="24"><g><rect fill="none" height="24" width="24"></rect></g><g><path d="M16,20H5V6H3v14c0,1.1,0.9,2,2,2h11V20z M20,16V4c0-1.1-0.9-2-2-2H9C7.9,2,7,2.9,7,4v12c0,1.1,0.9,2,2,2h9 C19.1,18,20,17.1,20,16z M18,16H9V4h9V16z"></path></g></svg>
          </Button>

          <Button variant='link' onClick={handleSpeak}>
          <svg focusable="false" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" height="24" width="24"><path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z"></path></svg>
          </Button>
          </div>
          </div>
        {toLanguage}
            </Stack>
        </Col>
      </Row>
      
    </Container>
  )
}

export default App
