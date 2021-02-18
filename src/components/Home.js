import React from "react"

function Home({data}){
    return (
        <>
            <div className="h-screen place-content-center grid grid-cols-2 place-items-center">
                <div>
                    <h3 className="text-lg text-accent-color mb-2">Hi, my name is</h3>
                    <h1 className="text-6xl text-white">{data.name}</h1>
                    <h1 className="text-6xl text-muted-light mb-4">{data.descriptionMain}</h1>
                    <h3 className="max-w-lg text-muted-light mb-8">{data.descriptionSecondary}</h3>
                    <div>
                        <a className="main-button w-auto" href="">Get in Touch /></a>
                    </div>
                </div>
                <div className="flex justify-center">
                    <img
                        className="rounded-full h-96 w-96 profile-picture"
                        src="/images/profile_picture.jpg"
                        alt="Profile Picture"/>
                </div>
            </div>
        </>
    )
}

export default Home;