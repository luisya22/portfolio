import React from "react"

function Home({data}){
    console.log(data.languages)
    return (
        <>
            <div className="h-screen place-content-center grid grid-cols-1 place-items-center w-full">
                <div className="flex flex-wrap justify-center w-full">
                    {data.map((skill,index)=>{
                        return(
                            <div className="w-1/2 mb-24">
                                <h3 className="text-3xl text-accent-color mb-8">{skill.text}</h3>
                                <div className="flex">
                                    {skill.list.map((item,index) =>{
                                        return (
                                            <div className="mr-6 mb-6">
                                                <img
                                                    src={'/icons/'+ item.logo}
                                                    alt={item.logo}
                                                    className="h-20 w-20"
                                                />
                                            </div>
                                        )
                                    })}
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </>
    )
}

export default Home;