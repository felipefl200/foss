import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'

import LogoIcon from "../components/svgs/logo.png"
import GoogleIcon from "../components/svgs/google.svg"
import FacebookIcon from "../components/svgs/facebook.svg"
import EmailIcon from "../components/svgs/email.svg"
import LockIcon from "../components/svgs/lock.svg"
import CircleLeftIcon from "../components/svgs/circle-left.svg"
import CircleRightIcon from "../components/svgs/circle-right.svg"

const Home: NextPage = () => {
  return (
    <div className="flex justify-between min-h-screen font-sans">
      <div
        className="hidden relative w-1/2 bg-center bg-cover lg:block bg-foss-100"
        style={{ backgroundImage: `url(${LogoIcon.src})` }}
      >
        <div className="flex absolute bottom-20 justify-center w-full">
          <div className="max-w-md text-center">
            <span className="text-3xl font-bold leading-loose text-gray-900">
              Aqui pensei em colocar um vídeo ou imagem
            </span>
            <p className="font-light leading-7 text-gray-300">
              Palestras sobre tecnologia, Software Livre e Open Source.
              Pela comunidade e para a comunidade.
            </p>
            <div className="flex justify-center items-center pt-8 space-x-6">
              <button
                className="rounded-full focus:ring focus:ring-green-500 focus:outline-none"
              >
                <Image src={CircleLeftIcon} />
              </button>
              <button
                className="rounded-full focus:ring focus:ring-green-500 focus:outline-none"
              >
                <Image src={CircleRightIcon} />
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="flex-1 mx-auto max-w-2xl">
        <div className="flex flex-col px-8 pt-10 lg:px-14 xl:px-24">
          <div className="self-center w-32 md:self-end">
            <Image src={LogoIcon} className="self-center" />
          </div>
          <div className="pt-20 pb-6">
            <h1 className="text-3xl font-bold tracking-wide leading-loose whitespace-nowrap">
              Olá, seja bem vindo(a)!
            </h1>
            <span className="font-light text-gray-500">
              Aqui você pode se cadastrar para o <br /> Free and Open Source Software Day(FOSS).
            </span>
            <div
              className="flex flex-wrap gap-y-4 gap-x-6 justify-between items-center pt-10 whitespace-nowrap"
            >
              <button
                className="flex items-center justify-center flex-1 py-4.5 px-3 rounded-lg bg-white border border-gray-400 whitespace-nowrap hover:bg-gray-50 focus:outline-none focus:ring-gray-100 focus:ring-4"
              >
                <Image src={GoogleIcon} className="w-6 h-6" />

                <span className="pl-3 font-medium text-gray-900">Entrar com o Google</span>
              </button>
              <button
                className="flex items-center justify-center flex-1 py-4.5 px-3 rounded-lg bg-blue-500 whitespace-nowrap hover:bg-blue-600 focus:outline-none focus:ring-4 focus:ring-gray-100"
              >
                {/* <FacebookIcon className="w-6 h-6" /> */}
                <Image src={FacebookIcon} className="w-6 h-6" />
                <span className="pl-3 font-medium text-white">Entrar com o Facebook</span>
              </button>
            </div>
            <div className="flex justify-between items-center pt-6">
              <hr className="w-full border-gray-400" />
              <span className="px-4 font-light tracking-wider text-gray-500">ou</span>
              <hr className="w-full border-gray-400" />
            </div>
            <form action="">
              <div className="pt-6">
                <label className="font-light">Informe seu nome</label>
                <div
                  className="flex overflow-hidden items-center mt-2 w-full rounded-lg border border-gray-400 transition-all focus-within:shadow-lg focus-within:border-green-500"
                >
                  <div className="flex justify-center items-center pl-6">
                    <Image src={LockIcon} className="w-6 h-6 pointer-events-none" />
                  </div>
                  <input
                    type="text"
                    name="name"
                    placeholder="O nome informado aqui irá no certificado"
                    className="px-4 py-4.5 w-full focus:outline-none font-light border-0 focus:ring-0"
                  />
                </div>
              </div>
              <div className="pt-6">
                <label className="font-light">Email</label>
                <div
                  className="flex overflow-hidden items-center mt-2 w-full rounded-lg border border-gray-400 transition-all focus-within:shadow-lg focus-within:border-green-500"
                >
                  <div className="flex justify-center items-center pl-6">
                    <Image src={EmailIcon} className="w-6 h-6 pointer-events-none" />
                  </div>
                  <input
                    type="text"
                    name="email"
                    id="email"
                    placeholder='Informe seu email'
                    className="px-4 py-4.5 w-full focus:outline-none font-light border-0 focus:ring-0"
                  />
                </div>
              </div>
              <div className="flex justify-between items-center pt-4">
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    name="remember"
                    id="remember"
                    className="w-5 h-5 text-foss-100 bg-white rounded border border-gray-400 focus:outline-none focus:ring-green-500"
                  />
                  <label className="pl-4 font-light text-gray-900">
                    Quero receber novidades da FOSS Porto Alegre
                  </label>
                </div>

              </div>
              <div className="pt-8">
                <button
                  type="submit"
                  className="py-4 px-8 w-full text-white bg-foss-100 rounded-lg shadow-lg hover:bg-green-600 focus:ring-4 focus:ring-green-100 focus:outline-none"
                >
                  Quero me cadastrar
                </button>
              </div>
            </form>
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
                <span className="flex-1 text-gray-500">©FOSS Porto Alegre 2022. Todos direitos reservados.</span>
                <span className="flex flex-1 justify-center items-center space-x-1">
                  <a href="#" className="text-gray-500 hover:text-gray-600">Termos de serviço</a>
                  <span className="text-gray-500">&#183;</span>
                  <a href="#" className="text-gray-500 hover:text-gray-600">Política de Segurança</a>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
