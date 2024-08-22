import React, { useState } from 'react'
import { Dialog, DialogPanel } from '@headlessui/react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFolder, faXmark } from '@fortawesome/free-solid-svg-icons'

const ContentItem = ({ label, page }) => {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <div>
            <div className='flex flex-row items-center gap-4 border border-lightColor bg-darkColor opacity-55 hover:opacity-100 shadow-type-1 rounded-full py-2 px-4 min-w-40 cursor-pointer hover-animation' onClick={() => setIsOpen(true)}>
                <FontAwesomeIcon icon={faFolder} className='text-xl' />
                <div>{label}</div>
            </div>

            <Dialog open={isOpen} onClose={() => setIsOpen(false)} className="relative z-50">
                <div className="fixed inset-0 w-screen center-of-div bg-darkColor/70 p-4 overflow-auto no-scrollbar">
                    <DialogPanel className="w-[95vw] h-[90vh] rounded-3xl border border-lightColor bg-darkColor overflow-auto no-scrollbar">
                        <div className='flex flex-row items-center justify-between text-lightColor px-5 py-3 border-b border-b-lightColor'>
                            <div className='font-bold text-xl md:text-4xl'>{label}</div>
                            <FontAwesomeIcon icon={faXmark} onClick={() => setIsOpen(false)} className='cursor-pointer text-2xl' />
                        </div>
                        {page}
                    </DialogPanel>
                </div>
            </Dialog>
        </div>

    )
}

export default ContentItem
