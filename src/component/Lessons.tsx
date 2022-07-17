
import { CheckCircle, Lock } from 'phosphor-react'
import { isPast, format} from 'date-fns'

import ptbr from 'date-fns/locale/pt-BR'
import { Link, useParams } from 'react-router-dom';


interface LessonsProps {
    title: string;
    slug: string;
    avaliableAt: Date;
    type: 'live' | 'class';

}

export function Lessons(props: LessonsProps) {
    const {slug} = useParams<{slug:string}>()
    const isLessonAvaliable = isPast(props.avaliableAt);
    const avaliableDateFormated = format(props.avaliableAt, "EEEE '•' d 'de'  MMMM ' •' k'h'mm",{
        locale:ptbr
    })
    const isActiveLessons = slug === props.slug
    return (

        <Link to={`/event/lesson/${props.slug}`} className='group'>
            <span className="text-gray-300">
                {avaliableDateFormated}
            </span>
            <div className={`rounded border bg-gray-500 p-4 mt-2 group-hover:border-green-500 ${isActiveLessons ? 'bg-green-500':''}`}>
                <header className="flex itens-center justfy-center justify-between">
                    {isLessonAvaliable ? (
                        <span className="text-sm text-blue-500 font-medium flex items-center gap-2 ">
                            <CheckCircle size={20} />
                            Conteúdo liberado
                        </span>) : (
                        <span className="text-sm text-orange-500 font-medium flex items-center gap-2 ">
                            <Lock size={20} />
                            Em breve
                        </span>)}
                    <span className="text-xs rounded py-[2px] px-2  text-white border border-green-300 font-bold">
                        {props.type == 'live' ? 'AO VIVO' : 'AULA PRATICA'}
                    </span>
                </header>
                <strong className="text-gray-300 mt-5 block">{props.title}</strong>

            </div>
        </Link>


    )
}