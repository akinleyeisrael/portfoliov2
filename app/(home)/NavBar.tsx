

import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from '@/components/ui/navigation-menu'
import React from 'react'

const NavBar = () => {
    return (
        <div className="mt-6 fixed">
            <NavigationMenu>
                <NavigationMenuList>
                    <NavigationMenuItem>
                        <NavigationMenuTrigger>about</NavigationMenuTrigger>
                        <NavigationMenuTrigger>experience</NavigationMenuTrigger>
                        <NavigationMenuTrigger>projects</NavigationMenuTrigger>
                    </NavigationMenuItem>
                </NavigationMenuList>
            </NavigationMenu>

        </div>
    )
}

export default NavBar