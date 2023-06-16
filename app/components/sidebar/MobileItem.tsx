'use client'

import clsx from "clsx";
import Link from "next/link";

interface MobileItemProps{
    label: string;
    icon: any;
    href: string;
    onClick?: ()=>void;
    active?: boolean
}

const MobileItem: React.FC<MobileItemProps> = ({
    href,icon: Icon,label,active,onClick
}) => {
    const handleClick = ()=>{
        if(onClick){
            return onClick();
        }
    }
  return ( 
    <Link
        onClick={onClick}
        href={href}
        className={clsx(`
            group
            flex
            gap-x-3
            p-4
            text-sm
            leading-6
            font-semibold
            w-full
            justify-center
            text-gray-500
            hover:text-black
            hover:bg-gray-100
        `,
            active && 'bg-gray-100 text-black'
        )}
    >
        <Icon className="h-6 w-6 shrink-0"/>
    </Link>
   );
}

export default MobileItem