import { Disclosure, Menu } from '@headlessui/react'
import { MenuIcon, XIcon } from '@heroicons/react/outline'
import { useAuthState } from 'react-firebase-hooks/auth'
import { Link, NavLink } from 'react-router-dom'
import auth from '../../../Firebase/Firebase.init'
import { signOut } from 'firebase/auth';



function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}
const Navbar = () => {

    const [user] = useAuthState(auth)
    return (
        <Disclosure as="nav" className="bg-gray-800">
            {({ open }) => (
                <>
                    <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
                        <div className="relative flex items-center justify-between h-16">
                            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                                {/* Mobile menu button*/}
                                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                                    <span className="sr-only">Open main menu</span>
                                    {open ? (
                                        <XIcon className="block h-6 w-6" aria-hidden="true" />
                                    ) : (
                                        <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                                    )}
                                </Disclosure.Button>
                            </div>
                            <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-between">
                                <div>
                                    <Link className="flex-shrink-0 flex items-center " to={'/'}>
                                        <img
                                            className="block h-8 w-auto"
                                            src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg"
                                            alt="Workflow"
                                        />
                                        <h1 className='text-3xl font-mono text-white mx-4'>Getcar</h1>
                                    </Link>
                                </div>
                                <div className="hidden  sm:block sm:ml-6">
                                    <div className="flex space-x-4">
                                        <NavLink
                                            to={'/'}
                                            className={({ isActive }) => (isActive ? 'text-blue-500 px-3 py-2 rounded-md text-xl font-medium ' : ' text-white px-3 py-2 rounded-md text-xl font-medium')}
                                        >Home</NavLink>
                                        <NavLink
                                            to={'about'}
                                            className={({ isActive }) => (isActive ? 'text-blue-500 px-3 py-2 rounded-md text-xl font-medium ' : 'text-white px-3 py-2 rounded-md text-xl font-medium')}
                                        >About
                                        </NavLink>
                                        <NavLink
                                            to={'Cars'}
                                            className={({ isActive }) => (isActive ? 'text-blue-500 px-3 py-2 rounded-md text-xl font-medium ' : 'text-white px-3 py-2 rounded-md text-xl font-medium')}
                                        >Cars</NavLink>

                                        {
                                            user?.uid ? <NavLink
                                                to={'login'}
                                                onClick={() => { signOut(auth) }}
                                                className={({ isActive }) => (isActive ? 'text-blue-500 px-3 py-2 rounded-md text-xl font-medium ' : 'text-white px-3 py-2 rounded-md text-xl font-medium')}>LogOut</NavLink> :
                                                <NavLink
                                                    to={'login'}
                                                    className={({ isActive }) => (isActive ? 'text-blue-500 px-3 py-2 rounded-md text-xl font-medium ' : 'text-white px-3 py-2 rounded-md text-xl font-medium')}
                                                >Login</NavLink>
                                        }

                                    </div>
                                </div>
                            </div>
                            <div className=" absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                                <Menu as="div" className="ml-3 relative">
                                    <div>
                                        <Menu.Button className="bg-gray-800 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                                            <span className="sr-only">Open user menu</span>
                                            <img
                                                className="h-8 w-8 rounded-full"
                                                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                                alt=""
                                            />
                                        </Menu.Button>
                                    </div>
                                </Menu>
                            </div>
                        </div>
                    </div>

                    <Disclosure.Panel className="sm:hidden">
                        <div className="px-2 pt-2 pb-3 space-y-1">
                            <NavLink
                                to={'/'}
                                className={({ isActive }) => (isActive ? 'text-blue-500 px-3 py-2 rounded-md text-xl font-medium block' : 'text-white px-3 py-2 rounded-md text-xl font-medium block')}
                            >Home</NavLink>
                            <NavLink
                                to={'about'}
                                className={({ isActive }) => (isActive ? 'text-blue-500 px-3 py-2 rounded-md text-xl font-medium block' : 'text-white px-3 py-2 rounded-md text-xl font-medium block')}
                            >About
                            </NavLink>
                            <NavLink
                                to={'Cars'}
                                className={({ isActive }) => (isActive ? 'text-blue-500 px-3 py-2 rounded-md text-xl font-medium block' : ' px-3 py-2 rounded-md text-xl font-medium block')}
                            >Cars</NavLink>


                        </div>
                    </Disclosure.Panel>
                </>
            )
            }
        </Disclosure >
    );
};

export default Navbar;