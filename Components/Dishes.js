import { PlusIcon, RefreshIcon } from '@heroicons/react/solid'
import useSWR from 'swr'
const fetcher = (url) => fetch(url).then((res) => res.json())

export default function Dishes() {
    const { data, error } = useSWR('/api/products', fetcher)
    if (error) return <div>Failed to load</div>
    if (!data) return <div className="flex items-center justify-center">
        <RefreshIcon className="animate-spin h-20 w-20"/>Loading...
    </div>
    return (
        <>
            <div className="grid grid-cols-1 gap-y-4 sm:grid-cols-2 sm:gap-x-6 sm:gap-y-10 lg:grid-cols-3 lg:gap-x-8">
                {data.map((product) => (
                    <div key={product.id}
                        className="relative bg-white border border-gray-200 rounded-lg flex flex-col overflow-hidden"
                    >
                        <div className="aspect-w-3 aspect-h-4 bg-gray-200 hover:opacity-75 sm:aspect-none sm:h-96">
                            <img
                                src={product.imageSrc}
                                alt={product.imageAlt}
                                className="w-full h-full object-center object-cover sm:w-full sm:h-full"
                            />
                        </div>
                        <div className="flex-1 p-4 space-y-2 flex flex-col">
                            <h3 className="text-lg font-bold text-gray-900">
                                <a href={product.href}>
                                    <span aria-hidden="true" className="inset-0" />
                                    {product.name}
                                </a>
                            </h3>
                            <div className="flex-1 flex flex-col justify-start items-start">
                                <p className="text-sm text-gray-500">{product.description}</p>
                                <div className="flex space-x-2">
                                    {product.options.map(a => (
                                        <span key={a.id} className="inline-block px-2 py-1 my-2 rounded-lg bg-yellow-100 text-yellow-700">
                                            {a.name}
                                        </span>
                                    ))}
                                </div>
                            </div>
                            <div className="flex justify-between items-center">
                                <p className="text-2xl font-extrabold text-gray-900">
                                    <span className="text-xl font-medium text-gray-900">$</span>{product.price}
                                </p>
                                <a href="#" className="absolute top-0 right-0 inline-block m-2 p-2 rounded-full
                                        bg-gray-200 text-gray-800
                                        hover:bg-yellow-500 hover:text-white"
                                >
                                    <PlusIcon className="w-6 h-6"></PlusIcon>
                                </a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}