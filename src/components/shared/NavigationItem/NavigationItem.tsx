import Link from 'next/link';

interface NavigationItemProps {
    href: string;
    name: string;
}

export default function NavigationItem({ href, name }: NavigationItemProps) {
    return <Link href={href}>{name}</Link>;
}
