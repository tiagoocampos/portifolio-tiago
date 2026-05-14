import fotoPerfil from "../public/foto.jpeg"
import { FileDown, Mail } from 'lucide-react';

export function Hero() {
    return (
        <section className=" bg-gray-950 shadow-2xl z-10 p-10 w-full">
            <div className="flex  mt-20 p-5 flex-col">
                <div className="flex flex-row  justify-around items-center  ">
                    <div className="flex flex-col gap-10">
                        <div className="flex flex-col">
                            <h1 className="text-white text-7xl">Tiago Campos</h1>

                            <i className="text-white text-sm">"Transformando ideias em solução"</i>
                            <span className="text-sm text-center text-gray-600">Análise e Desenvolvimento de Sistemas</span>
                        </div>

                        <p className="w-120 text-white">Olá! Meu nome é Tiago Campos, sou Desenvolvedor Full Stack, cursando Análise e Desenvolvimento de Sistemas pela FSG Centro Universitário</p>
                        <ul className="flex flex-row gap-5 items-center text-white justify-center">
                            <li><a className="flex" href=""> <FileDown />Baixar meu currículo</a></li>
                            <li><a className="flex" href=""><Mail />Entre em contato comigo</a></li>

                        </ul>
                    </div>
                    <img className="w-80 object-cover h-80 rounded-full" src={fotoPerfil} alt="Foto de perfil" />
                </div>

            </div>


        </section>
    )
}