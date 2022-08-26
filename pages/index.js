import Head from 'next/head'
import Image from 'next/image'
import { useContext } from 'react'
import CustomInput from '../components/CustomInput/CustomInput'
import Theme from '../components/Theme/theme'
import { TerminalCommandsContext } from '../helpers/context/terminal-commands-context'

export default function Home() {
  const {terminalProvider,
    themeProvider} = useContext(TerminalCommandsContext);

  const [terminalCommands, setTerminalCommands] = terminalProvider;
  const [selectedTheme, setSelectedTheme] = themeProvider;

  console.log('%c > >>> terminalCommands','color: green; font-size: small');
  console.log(terminalCommands);

  return (
    <Theme selectedTheme={selectedTheme}>
      <div className="container">
        <main className="main">
          <div className='text'>
          <p>
            Hi.
          </p>
          <p>
            I'm Veles.
            I'm a frontend dev and an artist.
          </p>
          <p>
            You can check some of my stuff by typing >ART for art portfolio or >DEV for dev work
          </p>
          <p>
            If this is too intense for you, you can change the theme by typing >THEME
          </p>
          </div>
          <CustomInput setTerminalCommands={setTerminalCommands}/>
        </main>
      </div>
    </Theme>
  )
}
