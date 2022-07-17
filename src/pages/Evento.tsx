import { useParams } from "react-router-dom";
import { Header } from "../component/Header";
import { Sidebar } from "../component/sidebar";
import { Video } from "../component/video";


export function Evento() {
    const{slug} =useParams<{slug:string}>()
    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex flex-1 ">
                {slug ? <Video lessonsSlug = {slug}/> : <div className=" flex-1 "/>}
            <Sidebar />


            </main>
        </div>

    )
}