import React from "react"
import { usePathname } from "next/navigation"

export default function MainLayout({ children }: { children: React.ReactNode }) {
    const pathname = usePathname()

    return (
      	<>
			{/* <TopNav/> */}
            {/* if homepage, set a styling */}
			<div className={`flex justify-between mx-auto w-full lg:px-2.5 px-0 ${pathname == '/' ? 'max-w-[1140px]' : ''}`}>
				{/* <SideNavMain /> */}
				{children}
			</div>
      	</>
    )
}