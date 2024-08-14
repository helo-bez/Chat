import clsx from "clsx";
import { FaUsers, FaUserAlt } from "react-icons/fa";
import { IoMdTrophy } from "react-icons/io";
import { IoIosLogOut } from "react-icons/io";
import Image from 'next/image'
//later implement icons sizes, colors, etc...

export interface IconProps {
    iconName: string,
    size: 'large' | 'small' | 'medium' | 'full',
    color: 'text-brand-white' | 'text-brand-black' | 'text-brand-info'
}


function getIcon(iconName: string, color: string) {
    switch (iconName) {
        case 'users':
            return <FaUsers className={`h-full mx-auto w-auto ${color}`} />
        case 'marketing':
            return <IoMdTrophy className={`h-full mx-auto w-auto ${color}`} />
        case 'logout':
            return <IoIosLogOut className={`h-full mx-auto w-auto ${color}`} />
        case 'user':
            return <FaUserAlt className={`h-full mx-auto w-auto ${color}`} />

        default:
            return null
    }
}

export function Icon({ iconName, size, color }: IconProps) {

    return (
        <main
            className={`
                iconSize
                ${clsx({
                'w-fit h-96': size == 'large',
                'w-fit h-32': size == 'medium',
                'w-fit h-6': size == 'small',
                'h-full': size == 'full'
            })
                }
            `}
        >
            {getIcon(iconName, color)}
        </main>
    )


}