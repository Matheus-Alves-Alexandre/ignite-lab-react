import { gql, useQuery } from "@apollo/client";
import { Lessons } from "./Lessons";


const GET_LESSONS_QUERY = gql`
    query MyQuery {
        lessons(orderBy: availableAt_ASC, stage: PUBLISHED) {
          id
          lessonType
          availableAt
          slug
          title
        }
      }
`
interface GET_QUERY_LESSONS_FROM_RESPONSE {
    lessons:{
        id:string
        lessonType:'live'| 'class'
        availableAt:string 
        slug:string 
        title:string
    }[]


}

export function Sidebar(){
    const{data} = useQuery<GET_QUERY_LESSONS_FROM_RESPONSE>(GET_LESSONS_QUERY)
    return(
        <aside className="w-[348px] bg-gray-700 p-6 border-l boder-gray-700">
            <span className="font-bold text-2xl pb-6 mb-6 border-b border-gray-500 block ">
                Cronograma de aulas
            </span>
            <div className="flex flex-col gap-8">
               {data?.lessons.map(lessons=>{
                return(
                    <Lessons
                        key={lessons.id}
                        title={lessons.title}
                        slug= {lessons.slug}
                        avaliableAt= { new Date(lessons.availableAt)}
                        type = {lessons.lessonType}
                    
                    />
                )
               })}

            </div>
        </aside>
    )
 }