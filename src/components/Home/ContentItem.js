import React, { useState } from 'react'
import { Dialog, DialogPanel } from '@headlessui/react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFolder, faXmark } from '@fortawesome/free-solid-svg-icons'
import { faFolderOpen } from '@fortawesome/free-regular-svg-icons'

const ContentItem = ({ label, page }) => {
    const [isOpen, setIsOpen] = useState(false)
    const [isHovered, setIsHovered] = useState(false)

    return (
        <div>
            <div className='flex flex-row items-center gap-4 border border-lightColor bg-darkColor opacity-55 hover:opacity-100 shadow-type-1 rounded-full py-2 px-4 min-w-40 cursor-pointer hover:scale-105 hover-animation' onClick={() => setIsOpen(true)} onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
                {!isHovered ? <FontAwesomeIcon icon={faFolder} className='text-xl' /> : <FontAwesomeIcon icon={faFolderOpen} className='text-xl' />}

                <div>{label}</div>
            </div>

            <Dialog open={isOpen} onClose={() => setIsOpen(false)} className="relative z-50">
                <div className="fixed inset-0 w-screen center-of-div bg-bgColor/70 p-4 overflow-hidden">
                    <DialogPanel className="w-[95vw] lg:w-[90vw] xl:w-[60vw] max-h-[80vh] rounded-3xl border border-lightColor bg-darkColor overflow-auto no-scrollbar shadow-type-2 hover-animation">
                        <div className='sticky top-0 bg-darkColor flex flex-row items-center justify-between text-lightColor px-4 py-3 border-b border-b-lightColor'>
                            <div className='font-bold text-xl md:text-4xl text-primaryColor'>{label}</div>
                            <FontAwesomeIcon icon={faXmark} onClick={() => setIsOpen(false)} className='cursor-pointer text-2xl shadow-type-3 hover:scale-125 hover-animation' />
                        </div>
                        {page}
                    </DialogPanel>
                </div>
            </Dialog>
        </div>
    )
}

export default ContentItem
