'use client';
import React, { useState, useRef, useEffect } from 'react';

const Workflow = () => {
    const [activeImage, setActiveImage] = useState(
        'https://images.unsplash.com/photo-1586766419881-af79e83a33d2?q=80&w=1974&auto=format&fit=crop'
    );
    
    const sections = [
        { id: 'capture', 
          title: 'Capture instantly', 
          description: 'Send a message, a voice note, or a screenshot. Memorae remembers it for you.',
          image: 'https://images.unsplash.com/photo-1586766419881-af79e83a33d2?q=80&w=1974&auto=format&fit=crop' 
        },
        { id: 'organize', 
          title: 'Organize automatically', 
          description: 'Your ideas, links, and conversations are grouped by context, people, and intent.',
          image: 'https://images.unsplash.com/photo-1559139633-d8c23214185c?q=80&w=1974&auto=format&fit=crop'
        },
        { id: 'recover', 
          title: 'Recover without searching', 
          description: 'Tell Memorae what you want to retrieve. Memorae finds and displays the correct memory instantly.',
          image: 'https://images.unsplash.com/photo-1600880292210-f79a4a7a8f8c?q=80&w=1974&auto=format&fit=crop'
        },
    ];

    const sectionRefs = useRef(sections.map(() => React.createRef<HTMLDivElement>()));

    useEffect(() => {
        const observerOptions = {
            root: null,
            rootMargin: '-50% 0px -50% 0px',
            threshold: 0,
        };

        const observerCallback = (entries: IntersectionObserverEntry[]) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    const section = sections.find(s => s.id === entry.target.id);
                    if (section) {
                        setActiveImage(section.image);
                    }
                }
            });
        };

        const observer = new IntersectionObserver(observerCallback, observerOptions);

        sectionRefs.current.forEach(ref => {
            if (ref.current) observer.observe(ref.current);
        });

        return () => {
            sectionRefs.current.forEach(ref => {
                if (ref.current) observer.unobserve(ref.current);
            });
        };
    }, []);

    return (
        <section id="workflow" className="py-24 bg-gray-50">
            <div className="container mx-auto px-4">
                <div className="text-center max-w-3xl mx-auto mb-24">
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-800">
                        Capture, organize, remember, and act,{' '}
                        <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
                            all in one place.
                        </span>
                    </h2>
                    <p className="text-lg text-gray-600 mt-4">
                        Memorae transforms your scattered thoughts into structured memories that help you take action, focus, and ultimately feel relief.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-16 items-start">
                    <div className="flex flex-col space-y-48">
                        {sections.map((section, index) => (
                             <div key={section.id} id={section.id} ref={sectionRefs.current[index]} className="min-h-[250px]">
                                <h3 className="text-3xl font-bold mb-4">{section.title}</h3>
                                <p className="text-gray-600">{section.description}</p>
                            </div>
                        ))}
                    </div>
                    
                    <div className="sticky top-24 h-[700px] flex items-center justify-center">
                        <div className="relative w-[350px] h-[700px] bg-black rounded-[40px] shadow-2xl p-4 mx-auto">
                             <div className="absolute top-0 left-1/2 -translate-x-1/2 w-40 h-8 bg-black rounded-b-2xl"></div>
                             <div className="h-full w-full bg-white rounded-[30px] overflow-hidden">
                                <img src={activeImage} alt="App Screenshot" className="w-full h-full object-cover transition-all duration-500 ease-in-out" />
                             </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Workflow;
