import Card from "../../common/Card/Card"

const Song = () => {
    return (
        <>
            <Card className="z-20">
                <div className="p-8">
                    <div className="bg-gray-100 flex w-full">
                        <div className="">
                            <img className="rounded-2xl h-48 object-cover object-center border-8 border-purple-200 " src="https://chillhop.com/wp-content/uploads/2020/09/0255e8b8c74c90d4a27c594b3452b2daafae608d-1024x1024.jpg" alt="Song name"/>
                        </div>
                        <div className=" bg-blue-100 p-4 w-96">
                            <h2>Now Playing</h2>
                            <h2>Song name</h2>
                            <p>Singer</p>
                            <div>Actions</div>
                        </div>
                    </div>
                </div>
            </Card>
        </>
    )
}

export default Song
