import React from 'react'
import { Saira } from "next/font/google"
const saira = Saira({
    subsets: ["latin"],
    weight: ["400","700"]
})


function ValuesCulture() {
    return (
        <div className='h-screen w-screen flex justify-center items-center flex-col'>

            {/* fisrt div */}
            <div className={`${saira.className} flex flex-col justify-center items-center gap-5 text-white`}>
                    <div className={`${saira.className} h-8 w-32 border-[1px] border-[#0492bd] flex justify-center items-center`}>
                        Our Culture and Values
                    </div>

                <h1 className={` font-bold`}>Who We Are</h1>

                <p className=''> 
                Morbi interdum pellentesque nunc, luctus pretium nulla luctus at. Aliquam cursus nunc arcu, condimentum efficitur tellus iaculis faucibus. Quisque gravida vel magna quis aliquam. Nam semper posuere risus, a gravida sapien tincidunt ac. Nam ac lacinia arcu. Aliquam erat volutpat. Curabitur consectetur nisl.
                </p>

            </div>

            {/* second div */}
            <div>

            </div>

        </div>
    )
}

export default ValuesCulture