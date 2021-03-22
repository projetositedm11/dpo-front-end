import React, { useState, useEffect } from 'react'
import { Logo, Cookie } from '../../../assets'
import Link from 'next/link'
import Cookies from 'js-cookie'
import { Container, Section, Button, ButtonToggle, Opacity } from './styles'

const CookiesPopUp = () => {
  const [cookie, setCookie] = useState<string>('false')
  const [isChecked, setIsChecked] = useState<boolean>(true)

  const handleClick = (): void => {
    handleClickToggle()

    if (isChecked) {
      Cookies.set('allowCookiesInWebsiteDM11', 'true')
      localStorage.setItem('cookie', JSON.stringify(true))
    } else {
      Cookies.set('allowCookiesInWebsiteDM11', 'false')
      localStorage.setItem('cookie', JSON.stringify(false))
    }
  }

  const readCookie = (): void => {
    const allow = Cookies.get('allowCookiesInWebsiteDM11')
    if (allow) {
      setCookie('false')
    }
  }

  const handleClickToggle = (): void => {
    if (isChecked) {
      localStorage.setItem('cookie', JSON.stringify(true))
    } else {
      localStorage.setItem('cookie', JSON.stringify(false))
    }

    if (cookie === 'true') {
      setCookie('false')
    } else {
      setCookie('true')
    }
  }

  useEffect(() => {
    const primary: string = JSON.parse(localStorage.getItem('cookie_primary'))

    if (!primary) {
      setTimeout(() => {
        handleClickToggle()

        localStorage.setItem('cookie_primary', JSON.parse('true'))
      }, 2000)
    }

    if (isChecked) {
      Cookies.set('allowCookiesInWebsiteDM11', 'true')
    } else {
      Cookies.set('allowCookiesInWebsiteDM11', 'false')
    }
  }, [isChecked])

  useEffect(() => {
    readCookie()
    let cookie = JSON.parse(localStorage.getItem('cookie'))

    if (!cookie) {
      cookie = true
    }
    setIsChecked(cookie)
  }, [])

  return (
    <>
      <Container display={cookie}>
        <Section>
          <img src={Logo} alt="" />
        </Section>
        <Section>
          <header>
            <p>Ativar cookies</p>
            <label>
              <input
                type="checkbox"
                checked={isChecked}
                onChange={() => setIsChecked(!isChecked)}
              />
              <div>
                <h6>on</h6>
                <h6>off</h6>
              </div>
            </label>
          </header>
          <p>Este site armazena cookies em seu navegador.</p>
          <p>
            Os utilizamos para coletar informações sobre como você interage conosco e nos permite
            lembrar de você. Usamos essas informações para melhorar, personalizar a sua experiência
            e analisar métricas sobre nossos visitantes. Para obter mais informações sobre os
            cookies que usamos, leia nossa{' '}
            <Link href="/politica-de-privacidade">
              <a onClick={() => handleClickToggle()}>Política de privacidade</a>
            </Link>
          </p>
        </Section>
        <Section>
          <Button onClick={() => handleClick()}>Salvar e fechar</Button>
        </Section>
      </Container>
      <ButtonToggle>
        <button onClick={() => handleClickToggle()}>
          <img src={Cookie} alt="cookie_icon" />
        </button>
      </ButtonToggle>
      <Opacity show={cookie} onClick={() => handleClickToggle()} />
    </>
  )
}

export default CookiesPopUp
