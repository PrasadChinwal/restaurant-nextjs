import Link from 'next/link'

const userNavigation = [
    { name: 'Menu', href: '#menu' },
    { name: 'Online', href: '#online' },
    { name: 'About', href: '#about' },
]

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function Navigation({ preview, children }) {
    return (
        <>
            <div className="border-t-8 border-yellow-400">
                <div className="p-5 flex justify-between items-center">
                    <div className="flex items-center space-x-2">
                        <svg className="fill-current text-yellow-700 hidden lg:block h-10 w-10 rounded-full" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000">
                            <g><rect fill="none" height="24" width="24"/></g><g><g><path d="M2,19c0,1.1,0.9,2,2,2h16c1.1,0,2-0.9,2-2v-3H2V19z M4,18h16v1H4V18z"/><path d="M18.66,11.5c-1.95,0-2.09,1-3.33,1c-1.19,0-1.42-1-3.33-1c-1.95,0-2.09,1-3.33,1c-1.19,0-1.42-1-3.33-1 c-1.95,0-2.09,1-3.33,1v2c1.9,0,2.17-1,3.35-1c1.19,0,1.42,1,3.33,1c1.95,0,2.09-1,3.33-1c1.19,0,1.42,1,3.33,1 c1.95,0,2.09-1,3.33-1c1.19,0,1.4,0.98,3.32,1l-0.01-1.98C20.38,12.19,20.37,11.5,18.66,11.5z"/><path d="M22,9c0.02-4-4.28-6-10-6C6.29,3,2,5,2,9v1h20L22,9L22,9z M4.18,8C5.01,5.81,8.61,5,12,5c3.31,0,5.93,0.73,7.19,1.99 C19.49,7.3,19.71,7.63,19.84,8H4.18z"/></g></g>
                        </svg>
                        <Link href="/">
                            <a>
                                <span
                                    className="
                                    font-medium text-xl rounded-md inline-block
                                    px-1 my-1 mx-2 bg-yellow-700 text-white
                                    ">
                                    Restaurant
                                </span>
                            </a>
                        </Link>
                    </div>
                    <div className="">
                        <div className="flex space-x-4">
                            {userNavigation.map((item) => (
                                <Link href={item.href}>
                                    <a
                                        key={item.name}
                                        className={classNames(
                                            item.current ?
                                                'bg-yellow-100 text-yellow-600' :
                                                'text-yellow-700 hover:bg-yellow-100 hover:text-yellow-700',
                                            'px-3 py-2 rounded-md text-sm font-medium',
                                        )}
                                        aria-current={item.current ? 'page' : undefined}
                                    >
                                        {item.name}
                                    </a>
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}