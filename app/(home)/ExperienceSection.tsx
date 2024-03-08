import { Button } from '@/components/ui/button'
import React from 'react'

const Experience = () => {
    return (
        <section id='experience'>
            <h1 className="my-10  font-bold text-2xl">
                Experience
                <hr className="w-6 h-1 my-4 bg-primary border-0 rounded"></hr>
            </h1>
            <div className="w-full">
                <div className="grid gap-4 items-start">
                    <div className="space-y-2">
                        <h3 className="text-lg leading-none font-semibold tracking-tighter sm:text-xl">Product Designer</h3>
                        <p className="text-sm leading-none text-gray-500">Acme Corporation</p>
                    </div>
                    <div className="space-y-2">
                        <p className="text-sm leading-none">July 2019 - Present</p>
                    </div>
                    <div className="space-y-4 text-base leading-relaxed">
                        <p className="text-gray-500">
                            Responsible for designing and iterating on user interfaces for our web and mobile applications. Collaborated
                            with cross-functional teams to create wireframes, prototypes, and high-fidelity designs.
                        </p>
                    </div>2
                    <div className="space-y-4">
                        <Button size="sm" variant="outline">
                            View All
                        </Button>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default Experience