export default function AlbumInfo(){
    return <>
         <div className="w-[400px] p-12 pt-0">
            <div className="mx-auto flex flex-col justify-center items-center">
                <div style={{backgroundImage:"url('https://e.snmc.io/i/1200/s/041458abc70133ca5dbfffae1b4446c2/3874272')"}}className="rounded-lg bg-cover bg-center w-[300px] h-[300px] mx-auto"/>
            </div>
            <div className="text-center">
                <div className="text-s font-bold">Crystallize</div>
                <div className="text-xs">Tokyo Shoegazer</div>
            </div>
            <div className="flex flex-col text-xs">
                <div className="flex justify-between">
                    <div>1. 299 Addiction</div>
                    <div>3:46</div>
                </div>
                <div className="flex justify-between">
                    <div>2. 299 Addiction</div>
                    <div>3:46</div>
                </div> 
                <div className="flex justify-between">
                    <div>3. 299 Addiction</div>
                    <div>3:46</div>
                </div> 
                <div className="flex justify-between">
                    <div>4. 299 Addiction</div>
                    <div>3:46</div>
                </div> 
            </div>
        </div>
    </>
}