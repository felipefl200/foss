import type { NextPage } from 'next'
import { useContext, useEffect } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import { signIn, getSession } from 'next-auth/react'
import { parseCookies, setCookie } from 'nookies'

import LogoIcon from '../components/svgs/logo.svg'
import GoogleIcon from '../components/svgs/google.svg'
import GitHubIcon from '../components/svgs/github.svg'
import CircleLeftIcon from '../components/svgs/circle-left.svg'
import CircleRightIcon from '../components/svgs/circle-right.svg'

import api from '../lib/axios'
import Jacadastrado from '../components/Jacadastrado'
import FormCreate from '../components/FormCreate'
import { CookieContext } from '../contexts/CookieContext'

const Home: NextPage = () => {
  const { hasCookie, setHasCookie } = useContext(CookieContext)
  console.log('Render')

  const hasSession = async () => {
    let cod = await getSession()
    console.log(cod)
    if (cod?.user) {

      api.post('/api/createParticipant', { name: cod.user.name, email: cod.user.email })
      setCookie(null, 'SFD-2022', 'true', {
        maxAge: 30 * 24 * 60 * 60, // 30 dias
        path: '/'
      })
      setHasCookie(true)
    }
  }

  const checkCookie = () => {
    const cookie = parseCookies()
    if (Object.keys(cookie).length === 0) {
      setHasCookie(false)
      hasSession()
      console.log('teste cookie');
    } else {     
      setHasCookie(true)
    }
  }

  useEffect(() => {
    checkCookie()
  })

  return (
    <div className="flex justify-between min-h-screen font-sans">
      <Head><title>Software Freedom Day 2022 - Porto Alegre </title></Head>
      <div
        className="hidden relative w-1/2 bg-center bg-cover lg:block bg-foss-100"
      >
        <div className='absolute inset-0 top-1/4 max-w-3xl mx-auto'>
          <Image
            src={LogoIcon}
            layout='responsive'
            width={LogoIcon.width}
            height={LogoIcon.height}
          />
        </div>
        <div className="flex absolute bottom-20 justify-center w-full">
          <div className="max-w-md text-center">
            <span className="text-3xl font-bold leading-loose text-gray-900">
              FREE AND OPEN SOURCE SOFTWARE
            </span>
            <p className="font-light leading-7 text-gray-300">
              Palestras sobre tecnologia, Software Livre e Open Source.
              Pela comunidade e para a comunidade.
            </p>
            <div className="flex justify-center items-center pt-8 space-x-6">
              <button
                className="rounded-full focus:ring-2 m-0 p-0 px-1"
              >
                <Image src={CircleLeftIcon} layout='fixed' />
              </button>
              <button
                className="rounded-full"
              >
                <Image src={CircleRightIcon} />
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="flex-1 mx-auto max-w-2xl">
        <div className="flex flex-col h-full justify-evenly px-8 pt-10 lg:px-12 xl:px-24">
          <div className="place-self-center">
            <Image src={LogoIcon} layout='fixed' width={LogoIcon.width} height={LogoIcon.height} />
          </div>
          {/* Já tem cadastro */}
          {hasCookie && (
            <Jacadastrado />
          )}
          {!hasCookie && (
            <div className="pt-10 pb-6">
              <h1 className="text-3xl font-bold tracking-wide leading-loose whitespace-nowrap">
                Olá, seja bem vindo(a)!
              </h1>
              <span className="font-light text-gray-500">
                Aqui você pode se cadastrar para o <br /> Free and Open Source Software Day(FOSS).
              </span>
              <div
                className="flex flex-wrap gap-y-4 gap-x-6 justify-between items-center pt-10 whitespace-nowrap"
              >
                <button onClick={() => signIn('google')}
                  className="flex items-center w6 justify-center flex-1 py-4.5 px-3 rounded-lg bg-white border border-gray-400 whitespace-nowrap hover:bg-gray-50 focus:outline-none focus:ring-gray-100 focus:ring-4"
                >

                  <Image src={GoogleIcon} layout='fixed' width={24} height={24} />

                  <span className="pl-3 font-medium text-gray-900">Entrar com o Google</span>
                </button>
                <button onClick={() => signIn('github')} className="flex items-center justify-center flex-1 py-4.5 px-3 rounded-lg bg-gray-800 whitespace-nowrap hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-100"
                >
                  
                  <Image src={GitHubIcon} layout='fixed' width={24} height={24} />

                  <span className="pl-3 font-medium text-white">Entrar com o Github</span>
                </button>
              </div>
              <div className="flex justify-between items-center pt-6">
                <hr className="w-full border-gray-400" />
                <span className="px-4 font-light tracking-wider text-gray-500">ou</span>
                <hr className="w-full border-gray-400" />
              </div>

              <FormCreate />

              <div className="pt-4">
                <div className="font-light text-center text-gray-500">
                  Quer cancelar sua inscrição?
                  <a href="#" className="font-normal pl-1 text-green-400 hover:green-teal-600">
                    Cancelar
                  </a>
                </div>
                <div
                  className="flex flex-wrap gap-y-2 justify-between items-center pt-14 text-center whitespace-nowrap"
                >
                  <span className="flex-1 text-gray-500">©Software Freedom Day Porto Alegre 2022. Todos direitos reservados.</span>
                  <span className="flex flex-1 justify-center items-center space-x-1">
                    <a href="#" className="text-gray-500 hover:text-gray-600">Termos de serviço</a>
                    <span className="text-gray-500">&#183;</span>
                    <a href="#" className="text-gray-500 hover:text-gray-600">Política de Segurança</a>
                  </span>
                </div>
              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  )
}

export default Home
