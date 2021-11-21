import Card from "../../common/Card/Card"

const Song = ({currentSong}) => {
    return (
        <>
            <Card className="z-20">
                <div className="p-8">
                    <div className="bg-gray-100 flex w-full">
                        <div className="">
                            <img className="rounded-2xl h-48 object-cover object-center border-8 border-purple-200 " alt={currentSong.name} src={currentSong.cover}/>
                        </div>
                        <div className=" bg-blue-100 p-4 w-96">
                            <h2>Now Playing</h2>
                            <h2>{currentSong.name}</h2>
                            <p>{currentSong.artist}</p>
                            <div>Actions</div>
                        </div>
                    </div>
                </div>
            </Card>
        </>
    )
}

export default Song
