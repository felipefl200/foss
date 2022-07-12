import Image from 'next/image'
import EmailIcon from '../components/svgs/email.svg'
import LockIcon from '../components/svgs/lock.svg'
import { useForm } from 'react-hook-form'
import api from '../lib/axios'


type FormData = {
    name: String
    email: String
    news: Boolean
}

function FormCreate() {
    const { register, handleSubmit, reset, formState: { errors } } = useForm<FormData>();
    const handleAddParticipant = handleSubmit(data => {
        api.post('http://localhost:3000/api/createParticipant', data)
            .then(resp => {
                
                reset()
            })
            .catch(error => {
                console.log(error)
            })
    });

    return (
        <form action="" onSubmit={handleAddParticipant}>
            <div className="pt-6">
                <label className="font-light">Informe seu nome</label>
                <div
                    className="flex overflow-hidden items-center mt-2 w-full rounded-lg border border-gray-400 transition-all focus-within:shadow-lg focus-within:border-green-500"
                >
                    <div className="flex justify-center items-center pl-6">
                        <Image src={LockIcon} className="w-6 h-6 pointer-events-none" />
                    </div>
                    <input
                        {...register('name', {required: true})}
                        type="text"
                        name="name"
                        placeholder="O nome informado aqui irá no certificado"
                        className="px-4 py-4.5 w-full focus:outline-none font-light border-0 focus:ring-0"
                    />
                </div>
                {errors.name && <p className='text-xs italic text-foss-100 pl-2 pt-2'>O campo nome é necessário</p>}
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
                        {...register('email', { required: true })}
                        type="text"
                        name="email"
                        id="email"
                        placeholder='Informe seu email'
                        className="px-4 py-4.5 w-full focus:outline-none font-light border-0 focus:ring-0"
                    />
                </div>
                    {errors.email && <p className='text-xs italic text-foss-100 pl-2 pt-2'>O campo email é necessário</p>}
            </div>
            <div className="flex justify-between items-center pt-4">
                <div className="flex items-center">
                    <input
                        {...register('news')}
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
                    className="py-4 px-8 w-full text-white bg-foss-100 rounded-lg shadow-lg hover:bg-green-600 focus:ring-4 focus:ring-green-100 focus:outline-none"                >
                    Quero me cadastrar
                </button>
            </div>
            {/* { && <p className='text-foss-100 text-center pt-2'>{}</p>} */}
        </form>
    )
}

export default FormCreate